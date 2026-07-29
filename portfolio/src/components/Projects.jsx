import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Folder, ChevronRight } from 'lucide-react';
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
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 border-b-2 border-black">
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
      <div className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[10px] px-1.5 py-0.5 border border-white">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
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

  return (
    <section id="projects" className="scroll-mt-6">
      <OSWindow 
        path="C:\> projects.exe" 
        bodyClassName="p-6 md:p-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black">
              PROJECTS
            </h2>
            <p className="font-mono text-xs text-slate-600 mt-1">
              Select a project to inspect source code and live demos
            </p>
          </div>

          <a 
            href="https://github.com/Naveen-2255" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-black hover:underline bg-stone-100 border border-black px-3 py-1.5 hard-shadow-sm"
          >
            View all projects <ChevronRight size={14} />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border-2 border-black hard-shadow bg-white flex flex-col justify-between overflow-hidden group hover:translate-y-[-2px] transition-transform"
            >
              <div>
                {/* Media Header */}
                {project.images ? (
                  <ImageCarousel images={project.images} title={project.title} />
                ) : (
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b-2 border-black">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-[#3f4d34]" />
                    <h3 className="font-bold font-sans text-base text-black leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  {project.features && (
                    <ul className="space-y-1 pt-1 border-t border-dashed border-slate-300">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-[11px] text-slate-600 font-sans flex items-start gap-1.5 leading-snug">
                          <span className="text-[#3f4d34] font-bold shrink-0">•</span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-mono font-semibold bg-[#f8f5f2] border border-black px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 border-t-2 border-black bg-stone-50 flex items-center justify-between gap-2">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold bg-[#3f4d34] text-white border border-black px-2.5 py-1 hover:bg-[#2e3927] transition-colors"
                  >
                    <ExternalLink size={12} /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold bg-white text-black border border-black px-2.5 py-1 hover:bg-slate-100 transition-colors"
                  >
                    <Code size={12} /> &gt; view project
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </OSWindow>
    </section>
  );
}
