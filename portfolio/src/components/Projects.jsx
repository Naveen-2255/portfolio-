import React, { useState, useEffect } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} - image ${i + 1}`}
          className={`absolute inset-0 object-cover w-full h-full transition-all duration-1000 ${
            i === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
    </div>
  );
};

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
      title: 'Valorant AI Coach & Analytics Dashboard',
      description: "A hybrid analytics dashboard and AI coaching tool. Fetches live Riot Games match data and pairs it with Google's Gemini Vision AI to provide competitive players with contextual, timestamped VOD reviews and statistical macro-coaching.",
      features: [
        "Live Data Aggregation via HenrikDev API for advanced metrics.",
        "Multimodal AI VOD Analysis using Gemini Vision for crosshair/positioning review.",
        "Hybrid 'Chain-of-Thought' architecture to prevent AI visual hallucinations using actual game logs.",
        "Robust React frontend for managing complex asynchronous loading states."
      ],
      images: ['/img1.png', '/img2.png', '/img3.png', '/img4.png'],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini 1.5 AI', 'REST APIs'],
      liveLink: 'https://valo-coach-umber.vercel.app',
      githubLink: '#'
    },
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
              {project.images ? (
                <ImageCarousel images={project.images} title={project.title} />
              ) : (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                </div>
              )}
              
              <div className="flex-1 p-8 flex flex-col">
                <h4 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h4>
                <div className="flex-1">
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.features && (
                    <ul className="list-disc list-inside text-sm text-slate-600 mb-6 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
                
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
