import React from 'react';
import { motion } from 'framer-motion';
import { SiLinktree } from 'react-icons/si';
import OSWindow from './OSWindow';

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-6">
      <OSWindow 
        path="C:\> home.exe" 
        hasGridBackground={true} 
        bodyClassName="p-6 md:p-12 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-sm tracking-wide text-slate-700">
              Hi, I'm
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-none uppercase">
              NAVEEN<br />JOSEPH
            </h1>

            {/* Yellow Highlight Pill requested in rules */}
            <div className="inline-block bg-[#fef08a] text-black border-2 border-black px-4 py-1.5 font-mono text-sm font-bold hard-shadow-sm rotate-[-1deg]">
              Computer Science Student
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Full-Stack Developer
              </h2>
              <h3 className="text-lg font-semibold text-[#3f4d34] font-mono">
                AI & Edge Computing Enthusiast
              </h3>
            </div>

            <p className="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed font-sans font-medium">
              I build secure, scalable and user-friendly applications that solve real-world problems.
            </p>

            {/* Action Buttons with Retro Brutalist styling */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-[#3f4d34] hover:bg-[#2f3927] text-white border-2 border-black hard-shadow px-6 py-3 font-mono text-sm font-bold active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                &gt; view my work
              </a>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-black border-2 border-black hard-shadow px-6 py-3 font-mono text-sm font-bold active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                &gt; get in touch
              </a>
            </div>

            {/* Retro OS bottom prompt indicator */}
            <div className="pt-6 hidden sm:block">
              <div className="inline-block bg-[#3f4d34] text-yellow-300 font-mono text-xs px-2.5 py-1 border border-black hard-shadow-sm font-bold">
                C:\&gt;
              </div>
            </div>
          </div>

          {/* Animated Hero Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ 
                opacity: { duration: 0.6 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.03, rotate: 1.5 }}
              className="relative w-full max-w-sm cursor-pointer group select-none"
            >
              {/* Decorative retro accent blocks behind frame */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#3f4d34] border-2 border-black -z-10 group-hover:bg-yellow-300 transition-colors duration-300"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-yellow-300 border-2 border-black -z-10 group-hover:bg-[#3f4d34] transition-colors duration-300"></div>

              <div className="border-2 border-black hard-shadow-lg bg-white p-3 relative overflow-hidden">
                <div className="relative overflow-hidden border-2 border-black">
                  <img 
                    src="/Me.jpeg" 
                    alt="Naveen Joseph" 
                    className="w-full h-auto aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Retro Status Badge */}
                  <div className="absolute top-2 right-2 bg-black/85 text-white text-[10px] font-mono px-2 py-0.5 border border-white flex items-center gap-1.5 backdrop-blur-xs shadow-md">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                    <span className="font-bold">SYS: ACTIVE</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-2 border-t border-black flex justify-between items-center font-mono text-xs">
                  <span className="font-bold text-slate-900">NAVEEN_J.JPG</span>
                  <span className="bg-amber-100 border border-black px-1.5 py-0.5 font-bold text-black">DEV_ID: #2255</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </OSWindow>
    </section>
  );
}

