import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ExternalLink } from 'lucide-react';
import OSWindow from './OSWindow';

export default function GitHubActivity() {
  const oliveTheme = {
    light: ['#f8f5f2', '#d5e0cc', '#94ad83', '#5e754d', '#3f4d34'],
    dark: ['#f8f5f2', '#d5e0cc', '#94ad83', '#5e754d', '#3f4d34'],
  };

  const stats = [
    { label: 'Total Contributions', value: '542+' },
    { label: 'Current Streak', value: '27 days' },
    { label: 'Repositories', value: '18' },
  ];

  return (
    <section id="github" className="scroll-mt-6">
      <OSWindow 
        path="C:\> github.exe" 
        bodyClassName="p-6 md:p-10"
      >
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-8">
          GITHUB ACTIVITY
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="border-2 border-black hard-shadow bg-white p-4 text-center font-mono"
            >
              <p className="text-xs text-slate-600 mb-1 font-semibold uppercase">{stat.label}</p>
              <p className="text-3xl font-extrabold text-black font-sans">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Calendar Section */}
        <div className="border-2 border-black hard-shadow bg-white p-4 sm:p-6 overflow-x-auto">
          <div className="min-w-[650px] flex justify-center py-2 font-mono">
            <GitHubCalendar 
              username="Naveen-2255"
              theme={oliveTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center pt-4 border-t-2 border-black">
          <a 
            href="https://github.com/Naveen-2255"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3f4d34] text-white border-2 border-black hard-shadow px-4 py-2 font-mono text-xs font-bold hover:bg-[#2e3927] transition-all"
          >
            &gt; view github profile <ExternalLink size={12} />
          </a>

          <div className="bg-[#3f4d34] text-yellow-300 font-mono text-xs px-2.5 py-1 border border-black hard-shadow-sm font-bold">
            C:\&gt;
          </div>
        </div>
      </OSWindow>
    </section>
  );
}
