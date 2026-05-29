import React from 'react';
import { Code, Briefcase, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Let's work together</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:naveenjosephvadakkel@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-slate-800 hover:bg-slate-900 rounded-full transition-colors shadow-sm"
            >
              <Mail className="mr-2" size={18} />
              naveenjosephvadakkel@gmail.com
            </a>
            <a 
              href="tel:9895780376" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-slate-800 hover:bg-slate-900 rounded-full transition-colors shadow-sm"
            >
              <Phone className="mr-2" size={18} />
              9895780376
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://github.com/Naveen-2255" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-400 hover:text-indigo-500 transition-colors">
            <Code size={24} />
            <span className="font-medium text-base">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/naveen-joseph-8b122b270" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-400 hover:text-indigo-500 transition-colors">
            <Briefcase size={24} />
            <span className="font-medium text-base">LinkedIn</span>
          </a>
        </div>
        
        <div className="text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Naveen Joseph. All rights reserved.</p>
          <p className="mt-1">Designed with clean aesthetics in mind.</p>
        </div>
      </div>
    </footer>
  );
}
