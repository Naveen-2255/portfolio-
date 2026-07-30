import React from 'react';
import { 
  SiHtml5, 
  SiCss, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiFirebase, 
  SiGit, 
  SiGithub,
  SiC,
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiTypescript
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import OSWindow from './OSWindow';

export default function Skills() {
  const skillGroups = [
    { 
      category: 'Frontend & UI', 
      items: [
        { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> }, 
        { name: 'CSS3', icon: <SiCss className="text-[#1572B6]" /> }, 
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> }, 
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ] 
    },
    { 
      category: 'Backend & Languages', 
      items: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> }, 
        { name: 'Express', icon: <SiExpress className="text-black" /> },
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> }, 
        { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
        { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> }
      ] 
    },
    { 
      category: 'Developer Tools', 
      items: [
        { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> }, 
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> }, 
        { name: 'GitHub', icon: <SiGithub className="text-[#181717]" /> }
      ] 
    },
  ];

  return (
    <section id="skills" className="scroll-mt-6">
      <OSWindow 
        path="C:\> tech_stack.exe" 
        bodyClassName="p-6 md:p-10 relative"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black">
              TECH STACK & SKILLS
            </h2>
            <p className="font-mono text-xs text-slate-600 mt-1">
              Core technologies, frameworks & developer toolchain
            </p>
          </div>

          <div className="bg-yellow-200 text-black font-mono text-xs px-3 py-1 border-2 border-black hard-shadow-sm font-bold">
            STATUS: ACTIVE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx}
              className="border-2 border-black hard-shadow bg-white p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-mono text-sm font-bold uppercase text-black border-b-2 border-black pb-2 mb-4 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-[#3f4d34] text-xs">[{group.items.length}]</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#f8f5f2] border-2 border-black text-xs font-mono font-bold text-black hard-shadow-sm hover:bg-stone-100 transition-all cursor-default"
                    >
                      <span className="text-base">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OS prompt bottom right */}
        <div className="mt-8 pt-6 border-t-2 border-black flex justify-between items-center">
          <span className="font-mono text-xs text-slate-600 font-semibold">
            SYSTEM_MODULE: TECH_STACK_v2.0
          </span>
          <div className="bg-[#3f4d34] text-yellow-300 font-mono text-xs px-2.5 py-1 border border-black hard-shadow-sm font-bold">
            C:\&gt;
          </div>
        </div>
      </OSWindow>
    </section>
  );
}
