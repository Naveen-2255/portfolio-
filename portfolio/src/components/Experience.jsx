import React from 'react';
import { Briefcase, Calendar, CheckSquare } from 'lucide-react';
import OSWindow from './OSWindow';

export default function Experience() {
  const experiences = [
    {
      role: 'Freelance Web Developer',
      company: 'VEEJAY Construction',
      period: '1 Month',
      points: [
        'Developed and deployed the company\'s official website.',
        'Improved online presence and accessibility.',
        'Created responsive UI and user-friendly experience.',
        'Integrated contact forms and service showcases.'
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-6">
      <OSWindow 
        path="C:\> experience.exe" 
        bodyClassName="p-6 md:p-10"
      >
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-8">
          EXPERIENCE
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="border-2 border-black hard-shadow bg-white p-6 relative"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 border-b-2 border-black pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#3f4d34] text-white border border-black flex items-center justify-center font-mono font-bold text-xs">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black font-sans">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs text-slate-700 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-black px-2.5 py-1 font-mono text-xs font-bold">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 font-sans text-sm text-slate-800">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckSquare size={14} className="text-[#3f4d34] shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end items-center pt-4 border-t-2 border-black">
          <div className="bg-[#3f4d34] text-yellow-300 font-mono text-xs px-2.5 py-1 border border-black hard-shadow-sm font-bold">
            C:\&gt;
          </div>
        </div>
      </OSWindow>
    </section>
  );
}
