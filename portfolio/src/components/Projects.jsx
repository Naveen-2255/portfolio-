import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const projects = [
    {
      title: 'SPARE (Smart Parts Availability & Repair Engine)',
      description: 'A location-based mobile application that connects two-wheeler riders with local mechanics and spare parts retailers. It features real-time inventory tracking, GPS-enabled nearest mechanic discovery, an offline SOS emergency SMS system, and DIY repair video integration.',
      image: '/app.jpeg',
      tags: ['React Native', 'Expo', 'Firebase', 'OpenStreetMap API', 'Expo Location'],
      liveLink: '',
      githubLink: 'https://github.com/Naveen-2255/SPARE'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">Featured Work</h2>
          <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Some projects I've built</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
              </div>
              
              <div className="flex-1 p-8 flex flex-col">
                <h4 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h4>
                <p className="text-slate-600 mb-6 flex-1 line-clamp-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                      <ExternalLink size={16} className="mr-1.5" /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                      <Code size={16} className="mr-1.5" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
