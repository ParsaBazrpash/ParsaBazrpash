import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const VISITOR_KEY = 'site:visitors';

function getRedis() {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }

  return Redis.fromEnv();
}

export async function GET(request: Request) {
  const redis = getRedis();

  if (!redis) {
    return NextResponse.json({ count: null, configured: false });
  }

  const shouldRecord = new URL(request.url).searchParams.get('record') === 'true';
  const offset = Number(process.env.VISITOR_COUNT_OFFSET ?? 0);

  try {
    if (shouldRecord) {
      const count = await redis.incr(VISITOR_KEY);
      return NextResponse.json({ count: count + offset, configured: true });
    }

    const count = (await redis.get<number>(VISITOR_KEY)) ?? 0;
    return NextResponse.json({ count: count + offset, configured: true });
  } catch {
    return NextResponse.json({ count: null, configured: false }, { status: 500 });
  }
}
