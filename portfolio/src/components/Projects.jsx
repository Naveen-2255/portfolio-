import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Folder, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OSWindow from './OSWindow';

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
    <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-slate-200 border-2 border-black hard-shadow-sm">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} - image ${i + 1}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${
            i === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-2 right-2 bg-black/85 text-white font-mono text-[10px] px-2 py-0.5 border border-white font-bold">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      id: '01',
      shortTitle: 'Valorant AI Coach',
      title: 'Valorant AI Coach & Analytics Dashboard',
      description: "A hybrid analytics dashboard and AI coaching tool pairing Riot Games match data with Google's Gemini Vision AI for contextual VOD reviews.",
      features: [
        "Live Data Aggregation via HenrikDev API",
        "Multimodal AI VOD Analysis with Gemini Vision",
        "Chain-of-Thought architecture for game metrics"
      ],
      images: ['/img1.png', '/img2.png', '/img3.png', '/img4.png'],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini 1.5 AI'],
      liveLink: 'https://valo-ai-coach.nj269989.workers.dev/',
      githubLink: '#'
    },
    {
      id: '02',
      shortTitle: 'SPARE Engine',
      title: 'SPARE (Smart Parts Availability Engine)',
      description: 'Location-based mobile app connecting two-wheeler riders with mechanics and spare parts retailers with real-time tracking.',
      features: [
        "Real-time inventory tracking",
        "GPS-enabled mechanic discovery",
        "Offline SOS emergency SMS system"
      ],
      image: '/app.jpeg',
      tags: ['React Native', 'Firebase', 'OpenStreetMap'],
      liveLink: '',
      githubLink: 'https://github.com/Naveen-2255/SPARE'
    },
    {
      id: '03',
      shortTitle: 'HealthStory AI',
      title: 'HealthStory AI',
      description: 'Accessibility-first healthcare platform transforming complex handwritten medical prescriptions into localized Malayalam audio stories ("Kissas") and real-time edge AI emergency triage.',
      features: [
        "Vision OCR for handwritten prescriptions via Google Gemini Vision API",
        "Privacy-first Edge AI & Kissa drama generation using Google Gemma 4 on Ollama",
        "Indic Malayalam voice narration & automatic 108 ambulance dispatch triage"
      ],
      images: ['/healthstory1.png', '/healthstory2.png', '/healthstory3.png', '/healthstory4.png', '/healthstory5.png'],
      tags: ['React 19', 'Gemini Vision', 'Gemma 4 (Edge AI)', 'Google TTS', 'Node.js', 'Express'],
      liveLink: '',
      githubLink: 'https://github.com/Naveen-2255'
    }
  ];

  const activeProject = projects[activeProjectIndex];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="scroll-mt-6">
      <OSWindow 
        path="C:\> projects.exe" 
        bodyClassName="p-6 md:p-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black">
              PROJECTS
            </h2>
            <p className="font-mono text-xs text-slate-600 mt-1">
              Interactive slideshow — Select or slide to inspect project details
            </p>
          </div>

          <a 
            href="https://github.com/Naveen-2255" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-black hover:underline bg-stone-100 border-2 border-black px-3 py-1.5 hard-shadow-sm"
          >
            GitHub Profile <ExternalLink size={12} />
          </a>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs select-none">
          {projects.map((proj, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProjectIndex(idx)}
              className={`px-3 py-2 border-2 border-black font-bold transition-all cursor-pointer flex items-center gap-2 ${
                idx === activeProjectIndex
                  ? 'bg-[#3f4d34] text-white hard-shadow translate-y-[-2px]'
                  : 'bg-white text-black hover:bg-stone-100'
              }`}
            >
              <span className={idx === activeProjectIndex ? 'text-yellow-300' : 'text-slate-500'}>
                [{proj.id}]
              </span>
              <span>{proj.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Interactive Single Project Slideshow Card */}
        <div className="border-2 border-black hard-shadow bg-white overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Media Section (Left/Top) */}
              <div className="lg:col-span-6 p-5 bg-stone-50 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center">
                {activeProject.images ? (
                  <ImageCarousel images={activeProject.images} title={activeProject.title} />
                ) : (
                  <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-slate-200 border-2 border-black hard-shadow-sm">
                    <img 
                      src={activeProject.image} 
                      alt={activeProject.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>

              {/* Information Section (Right/Bottom) */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Folder size={20} className="text-[#3f4d34]" />
                    <span className="font-mono text-xs font-bold text-slate-500 uppercase">
                      Project #{activeProject.id} of 03
                    </span>
                  </div>

                  <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-black leading-snug">
                    {activeProject.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-sans font-medium">
                    {activeProject.description}
                  </p>

                  {/* Key Features */}
                  {activeProject.features && (
                    <div className="pt-2">
                      <h4 className="font-mono text-xs font-bold uppercase text-black mb-2 flex items-center gap-1.5">
                        <Layers size={13} className="text-[#3f4d34]" /> Key Features:
                      </h4>
                      <ul className="space-y-1.5 pl-1">
                        {activeProject.features.map((feature, i) => (
                          <li key={i} className="text-xs text-slate-700 font-sans flex items-start gap-2 leading-relaxed">
                            <span className="text-[#3f4d34] font-bold shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div className="pt-2">
                    <h4 className="font-mono text-xs font-bold uppercase text-black mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-mono font-bold bg-[#f8f5f2] border-2 border-black px-2.5 py-1 hard-shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* External Action Links */}
                <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {activeProject.liveLink && (
                      <a 
                        href={activeProject.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold bg-[#3f4d34] text-white border-2 border-black px-3.5 py-2 hard-shadow hover:bg-[#2e3927] transition-all"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    {activeProject.githubLink && (
                      <a 
                        href={activeProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold bg-white text-black border-2 border-black px-3.5 py-2 hard-shadow hover:bg-slate-100 transition-all"
                      >
                        <Code size={13} /> View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slideshow Controls Bar */}
          <div className="bg-[#3f4d34] text-white p-3 font-mono text-xs border-t-2 border-black flex items-center justify-between select-none">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1 bg-[#2e3927] hover:bg-black text-white px-3 py-1.5 border border-white/50 font-bold transition-all cursor-pointer"
            >
              <ChevronLeft size={16} /> PREV
            </button>

            <div className="font-bold tracking-widest text-yellow-300">
              SLIDE {activeProjectIndex + 1} / {projects.length}
            </div>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1 bg-[#2e3927] hover:bg-black text-white px-3 py-1.5 border border-white/50 font-bold transition-all cursor-pointer"
            >
              NEXT <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Retro OS prompt bottom right (Point 5) */}
        <div className="mt-8 pt-6 border-t-2 border-black flex justify-between items-center">
          <span className="font-mono text-xs text-slate-600 font-semibold">
            PROJECT_VIEWER: SLIDESHOW_MODE
          </span>
          <div className="bg-[#3f4d34] text-yellow-300 font-mono text-xs px-2.5 py-1 border border-black hard-shadow-sm font-bold">
            C:\&gt;
          </div>
        </div>
      </OSWindow>
    </section>
  );
}
