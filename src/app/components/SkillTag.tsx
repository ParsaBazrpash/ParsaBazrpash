'use client';

import {
  SiCplusplus,
  SiDotnet,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMocha,
  SiPuppeteer,
  SiJunit5,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiNpm,
  SiPm2,
  SiTailwindcss,
  SiOpenai,
  SiTensorflow,
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3 } from 'react-icons/fa6';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

type SkillIcon = { Icon: IconType; color: string };

const skillIconMap: Record<string, SkillIcon[]> = {
  Java: [{ Icon: FaJava, color: '#5382A1' }],
  'C#': [{ Icon: SiDotnet, color: '#512BD4' }],
  'C++': [{ Icon: SiCplusplus, color: '#00599C' }],
  Python: [{ Icon: SiPython, color: '#3776AB' }],
  'HTML/CSS': [
    { Icon: FaHtml5, color: '#E34F26' },
    { Icon: FaCss3, color: '#1572B6' },
  ],
  JavaScript: [{ Icon: SiJavascript, color: '#F7DF1E' }],
  TypeScript: [{ Icon: SiTypescript, color: '#3178C6' }],
  React: [{ Icon: SiReact, color: '#61DAFB' }],
  'React.js': [{ Icon: SiReact, color: '#61DAFB' }],
  'Next.js': [{ Icon: SiNextdotjs, color: '#FFFFFF' }],
  'Node.js': [{ Icon: SiNodedotjs, color: '#339933' }],
  'Tailwind CSS': [{ Icon: SiTailwindcss, color: '#06B6D4' }],
  AI: [{ Icon: SiOpenai, color: '#10A37F' }],
  ML: [{ Icon: SiTensorflow, color: '#FF6F00' }],
  'ASP.NET': [{ Icon: SiDotnet, color: '#512BD4' }],
  Mocha: [{ Icon: SiMocha, color: '#8D6748' }],
  Puppeteer: [{ Icon: SiPuppeteer, color: '#40B5A4' }],
  JUnit: [{ Icon: SiJunit5, color: '#25A162' }],
  xUnit: [{ Icon: SiDotnet, color: '#512BD4' }],
  'SQL/MySQL': [{ Icon: SiMysql, color: '#4479A1' }],
  MongoDB: [{ Icon: SiMongodb, color: '#47A248' }],
  Redis: [{ Icon: SiRedis, color: '#FF4438' }],
  Firebase: [{ Icon: SiFirebase, color: '#FFCA28' }],
  'Git/GitHub': [
    { Icon: SiGit, color: '#F05032' },
    { Icon: SiGithub, color: '#FFFFFF' },
  ],
  Figma: [{ Icon: SiFigma, color: '#F24E1E' }],
  'npm/pm2': [
    { Icon: SiNpm, color: '#CB3837' },
    { Icon: SiPm2, color: '#2B037E' },
  ],
  'Microsoft Azure': [{ Icon: VscAzure, color: '#0078D4' }],
  'Azure DevOps': [{ Icon: VscAzureDevops, color: '#0078D4' }],
};

export function SkillTag({
  name,
  variant = 'default',
}: {
  name: string;
  variant?: 'default' | 'chip';
}) {
  const icons = skillIconMap[name] ?? [];

  const baseClass =
    variant === 'chip'
      ? 'inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-surface-elevated/80 border border-white/[0.08] text-foreground hover:border-accent/30 transition-colors'
      : 'inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-border-subtle text-muted hover:border-accent/40 hover:text-foreground transition-colors';

  return (
    <div className={baseClass} title={name}>
      {icons.length > 0 && (
        <span className="flex items-center gap-1 shrink-0">
          {icons.map(({ Icon, color }, index) => (
            <Icon key={index} className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color }} />
          ))}
        </span>
      )}
      <span>{name}</span>
    </div>
  );
}
