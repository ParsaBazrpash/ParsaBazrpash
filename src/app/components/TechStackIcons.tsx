import {
  SiCplusplus,
  SiDotnet,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

const stacks: { name: string; Icon: IconType }[] = [
  { name: 'Java', Icon: FaJava },
  { name: 'Python', Icon: SiPython },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'C#', Icon: SiDotnet },
];

export function TechStackIcons() {
  return (
    <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap justify-center lg:justify-start">
      {stacks.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-surface border border-border-subtle/50 card-surface text-muted hover:text-accent transition-colors flex-shrink-0"
          title={name}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      ))}
    </div>
  );
}
