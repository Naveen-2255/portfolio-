import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import OSWindow from './OSWindow';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="mt-8 mb-16 md:mb-8">
      <OSWindow 
        path="C:\> footer.exe" 
        bodyClassName="p-6 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black text-white font-mono text-2xl font-bold flex items-center justify-center border-2 border-black hard-shadow-sm">
                nj
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl text-black">Naveen Joseph</h3>
                <p className="font-mono text-xs text-slate-600">Building secure. Scalable. Impactful.</p>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 font-mono text-xs space-y-2">
            <h4 className="font-bold text-black uppercase border-b border-black pb-1">NAVIGATION</h4>
            <ul className="space-y-1 text-slate-700">
              <li><a href="#hero" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#github" className="hover:underline">GitHub</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Resources & Connect */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <div>
              <h4 className="font-bold text-black uppercase border-b border-black pb-1 mb-2">RESOURCES</h4>
              <a href="/resume.pdf" download className="inline-flex items-center gap-1 hover:underline text-slate-700 font-semibold">
                <FileText size={14} /> Resume (PDF)
              </a>
            </div>

            <div>
              <h4 className="font-bold text-black uppercase border-b border-black pb-1 mb-2">CONNECT</h4>
              <div className="flex gap-2">
                <a href="https://github.com/Naveen-2255" target="_blank" rel="noreferrer" className="p-2 border border-black bg-white hover:bg-slate-100">
                  <FaGithub size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 border border-black bg-white hover:bg-slate-100">
                  <FaLinkedin size={16} />
                </a>
                <a href="mailto:naveenjosephvadakkel@gmail.com" className="p-2 border border-black bg-white hover:bg-slate-100">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar inside window */}
        <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-between text-xs font-mono text-slate-600 gap-2">
          <span>© {currentYear} Naveen Joseph. All rights reserved.</span>
          <span>Creatively done by Naveen ❤️</span>
        </div>
      </OSWindow>
    </footer>
  );
}
