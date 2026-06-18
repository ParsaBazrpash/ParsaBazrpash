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
    <div className="flex items-center gap-4 sm:gap-5 md:gap-6 flex-wrap justify-center sm:justify-start">
      {stacks.map(({ name, Icon }) => (
        <div
          key={name}
          className="text-muted/80 hover:text-white transition-colors"
          title={name}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
      ))}
    </div>
  );
}
