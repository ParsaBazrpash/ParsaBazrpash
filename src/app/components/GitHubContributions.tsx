'use client';

import { useEffect, useState } from 'react';

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionData {
  totalContributions: number;
  contributionCalendar: {
    weeks: Array<{
      contributionDays: ContributionDay[];
    }>;
    days?: ContributionDay[];
  };
  error?: string;
}

// GitHub's actual contribution colors (hex codes converted to Tailwind)
const getIntensityColor = (count: number): string => {
  if (count === 0) return 'bg-[#161b22] border border-[#30363d]';
  if (count <= 3) return 'bg-[#0e4429] hover:bg-[#0e4429]/80';
  if (count <= 7) return 'bg-[#006d32] hover:bg-[#006d32]/80';
  if (count <= 15) return 'bg-[#26a641] hover:bg-[#26a641]/80';
  return 'bg-[#39d353] hover:bg-[#39d353]/80';
};


export const GitHubContributions = () => {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('/api/github-contributions');
        const contributionData = await response.json();
        setData(contributionData);
      } catch (error) {
        console.error('Error fetching contributions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-100">GitHub Contributions</h3>
        </div>
        <div className="flex items-center justify-center h-32">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-custom-blue border-t-transparent rounded-full animate-spin"></div>
            <div className="text-gray-400 text-sm">Loading contributions...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.error || !data.contributionCalendar.weeks.length) {
    // Fallback: Show GitHub contribution graph image
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-100">GitHub Contributions</h3>
        </div>
        <div className="flex flex-col items-center justify-center py-8">
          <div className="text-gray-400 mb-4 text-xs">
            {data?.error || 'Unable to load contributions graph'}
          </div>
          <a
            href="https://github.com/ParsaBazrpash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md transition-all duration-200 text-xs font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          {data?.error && (
            <p className="text-xs text-gray-500 mt-4 text-center max-w-md">
              Note: Add GITHUB_TOKEN to .env.local for API access. 
              Get a token at{' '}
              <a
                href="https://github.com/settings/tokens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-blue hover:underline"
              >
                github.com/settings/tokens
              </a>
            </p>
          )}
        </div>
      </div>
    );
  }

  const { weeks } = data.contributionCalendar;
  const totalContributions = data.totalContributions || 0;

  // Calculate month labels with proper positioning
  const monthLabels: Array<{ month: string; weekIndex: number }> = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    if (week.contributionDays.length > 0) {
      const firstDay = new Date(week.contributionDays[0].date);
      const month = firstDay.getMonth();
      const dayOfMonth = firstDay.getDate();
      // Show month label at the start of each month (first week with day <= 7)
      if (month !== lastMonth && dayOfMonth <= 7) {
        monthLabels.push({ month: months[month], weekIndex });
        lastMonth = month;
      }
    }
  });

  // GitHub uses 11px cells with 3px gaps (14px per column)

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700 relative inline-block w-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-100">GitHub Contributions</h3>
        <a
          href="https://github.com/ParsaBazrpash"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md transition-all duration-200 text-xs font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>

      {/* Contribution Graph */}
      <div className="relative">
        <div className="overflow-x-auto pb-4">
          <div className="inline-block" style={{ minWidth: 'max-content' }}>
            {/* Month labels row - positioned absolutely above grid */}
            <div className="relative mb-2" style={{ height: '15px', paddingLeft: '30px' }}>
              {monthLabels.map((label, idx) => {
                // Calculate exact position: each week column is 13px (10px cell + 3px gap)
                const position = label.weekIndex * 13;
                return (
                  <div
                    key={idx}
                    className="absolute text-[#8b949e]"
                    style={{
                      left: `${position}px`,
                      top: '0',
                      fontSize: '12px',
                      lineHeight: '15px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
                    }}
                  >
                    {label.month}
                  </div>
                );
              })}
            </div>

            {/* Grid container */}
            <div className="inline-flex gap-[3px]" style={{ minWidth: 'max-content' }}>
              {/* Day labels column */}
              <div className="flex flex-col gap-[3px] pr-2">
                {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, idx) => (
                  <div 
                    key={idx} 
                    className="text-[#8b949e]"
                    style={{
                      width: '30px',
                      height: '10px',
                      textAlign: 'right',
                      fontSize: '12px',
                      lineHeight: '10px',
                      paddingRight: '4px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Contribution squares grid */}
              <div className="inline-flex gap-[3px]">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.contributionDays.map((day, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`cursor-pointer transition-all duration-150 ${getIntensityColor(day.contributionCount)}`}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '2px',
                          minWidth: '10px',
                          minHeight: '10px',
                        }}
                        onMouseEnter={(e) => {
                          setHoveredDay({
                            date: day.date,
                            count: day.contributionCount,
                            x: e.clientX,
                            y: e.clientY,
                          });
                        }}
                        onMouseMove={(e) => {
                          if (hoveredDay) {
                            setHoveredDay({
                              date: day.date,
                              count: day.contributionCount,
                              x: e.clientX,
                              y: e.clientY,
                            });
                          }
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip - follows mouse cursor */}
      {hoveredDay && (
        <div
          className="fixed bg-[#161b22] text-white text-xs rounded px-2 py-1.5 pointer-events-none z-50 shadow-xl border border-[#30363d] whitespace-nowrap"
          style={{
            left: `${hoveredDay.x + 10}px`,
            top: `${hoveredDay.y + 10}px`,
            fontSize: '12px',
          }}
        >
          <div className="font-semibold mb-0.5" style={{ fontSize: '12px' }}>
            {hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''}
          </div>
          <div className="text-[#8b949e]" style={{ fontSize: '10px' }}>
            {new Date(hoveredDay.date).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>
      )}

      {/* Legend - GitHub style */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#30363d]">
        <a
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#58a6ff] hover:underline"
          style={{ fontSize: '12px' }}
        >
          Learn how we count contributions
        </a>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#8b949e]" style={{ fontSize: '12px' }}>Less</span>
          <div className="flex gap-[3px]">
            <div 
              className="rounded"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '2px',
              }}
            />
            <div 
              className="rounded"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#0e4429',
                borderRadius: '2px',
              }}
            />
            <div 
              className="rounded"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#006d32',
                borderRadius: '2px',
              }}
            />
            <div 
              className="rounded"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#26a641',
                borderRadius: '2px',
              }}
            />
            <div 
              className="rounded"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#39d353',
                borderRadius: '2px',
              }}
            />
          </div>
          <span className="text-xs text-[#8b949e]" style={{ fontSize: '12px' }}>More</span>
        </div>
      </div>
    </div>
  );
};
