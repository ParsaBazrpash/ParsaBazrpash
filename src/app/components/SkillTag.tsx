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
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3 } from 'react-icons/fa6';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

const skillIconMap: Record<string, IconType[]> = {
  Java: [FaJava],
  'C#': [SiDotnet],
  'C++': [SiCplusplus],
  Python: [SiPython],
  'HTML/CSS': [FaHtml5, FaCss3],
  JavaScript: [SiJavascript],
  TypeScript: [SiTypescript],
  'React.js': [SiReact],
  'Next.js': [SiNextdotjs],
  'Node.js': [SiNodedotjs],
  'ASP.NET': [SiDotnet],
  Mocha: [SiMocha],
  Puppeteer: [SiPuppeteer],
  JUnit: [SiJunit5],
  xUnit: [SiDotnet],
  'SQL/MySQL': [SiMysql],
  MongoDB: [SiMongodb],
  Redis: [SiRedis],
  Firebase: [SiFirebase],
  'Git/GitHub': [SiGit, SiGithub],
  Figma: [SiFigma],
  'npm/pm2': [SiNpm, SiPm2],
  'Microsoft Azure': [VscAzure],
  'Azure DevOps': [VscAzureDevops],
};

export function SkillTag({ name }: { name: string }) {
  const icons = skillIconMap[name] ?? [];

  return (
    <div
      className="inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-border-subtle text-muted hover:border-accent/40 hover:text-foreground transition-colors"
      title={name}
    >
      {icons.length > 0 && (
        <span className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {icons.map((Icon, index) => (
            <Icon key={index} className="w-4 h-4 sm:w-5 sm:h-5" />
          ))}
        </span>
      )}
      <span>{name}</span>
    </div>
  );
}
