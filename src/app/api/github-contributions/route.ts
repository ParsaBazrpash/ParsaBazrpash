import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'ParsaBazrpash';

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: ContributionDay[];
          }>;
        };
      };
    };
  };
}

export async function GET() {
  try {
    // Calculate date range (last year)
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setFullYear(toDate.getFullYear() - 1);

    // GitHub GraphQL API query
    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    // GitHub token is recommended for better rate limits (5000 vs 60 requests/hour)
    // Create a token at: https://github.com/settings/tokens (no scopes needed for public data)
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables: {
          username: GITHUB_USERNAME,
          from: fromDate.toISOString(),
          to: toDate.toISOString(),
        },
      }),
    });

    const data: GitHubResponse | { errors?: Array<{ message: string }> } = await response.json();

    // Check for GraphQL errors
    if ('errors' in data) {
      console.error('GitHub API errors:', data.errors);
      return NextResponse.json(
        {
          totalContributions: 0,
          contributionCalendar: { weeks: [], days: [] },
          error: data.errors?.[0]?.message || 'Unable to fetch contributions',
        },
        { status: 500 }
      );
    }

    if (!response.ok || !('data' in data)) {
      return NextResponse.json(
        {
          totalContributions: 0,
          contributionCalendar: { weeks: [], days: [] },
          error: 'Unable to fetch contributions',
        },
        { status: response.status }
      );
    }

    if (data.data?.user?.contributionsCollection) {
      const contributions = data.data.user.contributionsCollection;
      
      // Flatten all contribution days
      const allDays = contributions.contributionCalendar.weeks.flatMap(
        (week) => week.contributionDays
      );

      return NextResponse.json({
        totalContributions: contributions.contributionCalendar.totalContributions,
        contributionCalendar: {
          weeks: contributions.contributionCalendar.weeks,
          days: allDays,
        },
      });
    }

    return NextResponse.json({
      totalContributions: 0,
      contributionCalendar: {
        weeks: [],
        days: [],
      },
    });
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json(
      {
        totalContributions: 0,
        contributionCalendar: {
          weeks: [],
          days: [],
        },
        error: 'Failed to fetch contributions',
      },
      { status: 500 }
    );
  }
}
