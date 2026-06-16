import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Ambient Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 md:left-1/4 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-indigo-300/20 blur-3xl rounded-full -z-10 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, 40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-0 md:right-1/4 w-[15rem] md:w-[25rem] h-[15rem] md:h-[25rem] bg-emerald-300/10 blur-3xl rounded-full -z-10 pointer-events-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Hello, I'm Naveen Joseph
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-indigo-500 tracking-wide mt-2">
              CS Student & <br className="hidden md:block" />
              Full Stack Dev.
            </h2>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              I'm a computer science student passionate about full-stack development, cybersecurity, and system programming. I enjoy building scalable applications, optimizing performance, and solving challenging problems through code.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-sm"
            >
              View Work
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
            <motion.a 
              href="/resume.pdf" 
              download
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { scale: 1, boxShadow: "0 0 0px rgba(99, 102, 241, 0)" },
                hover: { scale: 1.02, boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)" }
              }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-indigo-500 bg-transparent border-2 border-indigo-500 hover:bg-indigo-50/50 rounded-full"
            >
              Download Resume
              <motion.div
                className="ml-2 flex items-center"
                variants={{
                  initial: { y: 0 },
                  hover: { y: [0, -2, 0, 2, 0], transition: { repeat: Infinity, duration: 1 } }
                }}
              >
                <FiDownload size={18} />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative mt-10 md:mt-0"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="aspect-square rounded-3xl bg-white flex items-center justify-center shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 relative group"
          >
            <img 
              src="/Me.jpeg" 
              alt="Naveen Joseph" 
              className="object-cover w-full h-full rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer group-hover:scale-105"
            />
          </motion.div>
          {/* Subtle decorative blob */}
          <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full -z-10 opacity-50 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
