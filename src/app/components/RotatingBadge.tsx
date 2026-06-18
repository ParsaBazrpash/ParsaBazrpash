export function RotatingBadge() {
  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full animate-spin-slow"
        viewBox="0 0 120 120"
      >
        <defs>
          <path
            id="circlePath"
            d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          />
        </defs>
        <text
          fill="#A1A1AA"
          fontSize="9"
          letterSpacing="3"
          fontWeight="500"
        >
          <textPath href="#circlePath" startOffset="0%">
            SOFTWARE ENGINEER • SOFTWARE ENGINEER •
          </textPath>
        </text>
      </svg>
      <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
    </div>
  );
}
