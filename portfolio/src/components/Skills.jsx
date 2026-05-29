import React from 'react';
import { motion } from 'framer-motion';
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
  SiCplusplus
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'HTML', icon: <SiHtml5 className="text-[#E34F26]" /> }, 
        { name: 'CSS', icon: <SiCss className="text-[#1572B6]" /> }, 
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> }, 
        { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ] 
    },
    { 
      category: 'Backend & Languages', 
      items: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> }, 
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> }, 
        { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
        { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> }
      ] 
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> }, 
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> }, 
        { name: 'GitHub', icon: <SiGithub className="text-[#181717]" /> }
      ] 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">My Skills</h2>
          <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Technologies I work with</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md"
            >
              <h4 className="text-xl font-semibold text-slate-800 mb-6">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 border border-slate-100 rounded-full text-sm font-medium hover:bg-white hover:border-indigo-100 hover:shadow-sm transition-all cursor-default group"
                  >
                    <span className="text-lg grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
