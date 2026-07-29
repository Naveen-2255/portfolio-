import React from 'react';
import { GraduationCap, MapPin, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import OSWindow from './OSWindow';

export default function About() {
  return (
    <section id="about" className="scroll-mt-6">
      <OSWindow 
        path="C:\> about.exe" 
        bodyClassName="p-6 md:p-10 relative"
      >
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-6">
          ABOUT ME
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bio text column */}
          <div className="lg:col-span-7 space-y-4 text-slate-800 font-sans text-base leading-relaxed">
            <p className="bg-stone-50 border border-slate-300 p-4 font-medium">
              I'm a Computer Science student at the College of Engineering Chengannur passionate about building scalable software, exploring hybrid AI & edge computing solutions, and solving real-world accessibility problems.
            </p>
            <p className="bg-stone-50 border border-slate-300 p-4 font-medium">
              I enjoy turning ideas into meaningful products through clean code and thoughtful design. I'm constantly learning and exploring new technologies to grow as a developer.
            </p>
          </div>

          {/* Info cards column */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs sm:text-sm">
            
            {/* Education Card */}
            <div className="border-2 border-black hard-shadow-sm bg-[#f8f5f2] p-3 flex items-start gap-3">
              <div className="p-2 bg-[#3f4d34] text-white border border-black shrink-0">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="font-bold text-black text-sm">B.Tech CSE</h3>
                <p className="text-slate-700 text-xs font-sans">College of Engineering Chengannur</p>
                <span className="text-[11px] text-slate-500 font-mono">Sep 2023 - Present</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="border-2 border-black hard-shadow-sm bg-[#f8f5f2] p-3 flex items-start gap-3">
              <div className="p-2 bg-[#3f4d34] text-white border border-black shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="font-bold text-black text-sm">Kerala, India</h3>
                <p className="text-slate-700 text-xs font-mono">GMT +5:30</p>
              </div>
            </div>

          </div>

        </div>

        {/* Social Links Row & OS prompt */}
        <div className="mt-8 pt-6 border-t-2 border-black flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/Naveen-2255" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 bg-black text-white border-2 border-black hard-shadow-sm hover:bg-slate-800 transition-transform active:translate-y-0.5"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 bg-[#0077b5] text-white border-2 border-black hard-shadow-sm hover:bg-blue-700 transition-transform active:translate-y-0.5"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="mailto:naveenjosephvadakkel@gmail.com"
              aria-label="Email"
              className="p-2.5 bg-red-600 text-white border-2 border-black hard-shadow-sm hover:bg-red-700 transition-transform active:translate-y-0.5"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="bg-[#3f4d34] text-yellow-300 font-mono text-xs px-2.5 py-1 border border-black hard-shadow-sm font-bold">
            C:\&gt;
          </div>
        </div>
      </OSWindow>
    </section>
  );
}
