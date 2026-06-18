export function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-ambient-base"
      aria-hidden
    >
      <div className="absolute inset-0 bg-purple-mesh" />
      <div className="absolute inset-0 bg-noise-texture opacity-[0.025] dark:opacity-[0.015]" />
      <div
        className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-90 dark:opacity-80"
        style={{ background: 'var(--glow-color)' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-90 dark:opacity-80"
        style={{ background: 'var(--glow-color)' }}
      />
      <div
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-full blur-3xl opacity-80 dark:opacity-70"
        style={{ background: 'var(--glow-color-soft)' }}
      />
      <div
        className="absolute top-2/3 -left-24 w-72 h-72 rounded-full blur-3xl opacity-80 dark:opacity-70"
        style={{ background: 'var(--glow-color-soft)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-[100px] opacity-70 dark:opacity-60"
        style={{ background: 'var(--glow-color-soft)' }}
      />
    </div>
  );
}
