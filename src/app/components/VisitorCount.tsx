'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const STORAGE_KEY = 'portfolio-visitor-recorded';

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const isNewVisitor = !localStorage.getItem(STORAGE_KEY);

    fetch(`/api/views${isNewVisitor ? '?record=true' : ''}`)
      .then((res) => res.json())
      .then((data: { count: number | null; configured: boolean }) => {
        if (data.configured && typeof data.count === 'number') {
          setCount(data.count);
          if (isNewVisitor) {
            localStorage.setItem(STORAGE_KEY, '1');
          }
        }
      })
      .catch(() => {
        setCount(null);
      });
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <p className="mt-2 inline-flex items-center justify-center gap-1.5 text-muted">
      <Eye className="w-3.5 h-3.5 text-accent" aria-hidden />
      <span>
        {count.toLocaleString()} {count === 1 ? 'visitor' : 'visitors'} since launch
      </span>
    </p>
  );
}
