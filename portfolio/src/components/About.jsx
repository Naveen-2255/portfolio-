import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">About Me</h2>
            <h3 className="text-3xl font-bold text-slate-800 tracking-tight">A bit about my background</h3>
          </div>
          
          <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
            <p>
              Hello! I am a developer who genuinely loves building things that live on the internet. My focus is on creating engaging, accessible, and user-friendly digital experiences. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I am not at my keyboard, I am usually exploring new tech trends, gaming, or learning my next new skill.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <h4 className="text-xl font-semibold text-slate-800 mb-6">Education</h4>
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-slate-50 pb-4">
                <div>
                  <h5 className="font-medium text-slate-800">B.Tech Computer Science</h5>
                  <p className="text-slate-500">College of Engineering Chengannur</p>
                </div>
                <span className="text-sm text-indigo-500 font-medium mt-1 sm:mt-0 bg-indigo-50 px-3 py-1 rounded-full w-fit">Sep 2023 - Present</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <div>
                  <h5 className="font-medium text-slate-800">Higher Secondary</h5>
                  <p className="text-slate-500">St Thomas HSS</p>
                </div>
                <span className="text-sm text-indigo-500 font-medium mt-1 sm:mt-0 bg-indigo-50 px-3 py-1 rounded-full w-fit">2021 - 2023</span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
