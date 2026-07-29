import React, { useState, useEffect } from 'react';
import { Home, User, Folder, Briefcase, Mail, FileText, Menu, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'github', label: 'GitHub', icon: FaGithub },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* DESKTOP FIXED SIDEBAR */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-[#f8f5f2] border-r-2 border-black z-40 p-4 justify-between select-none">
        <div className="space-y-6">
          {/* Logo Card */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black text-white font-mono text-2xl font-bold flex items-center justify-center border-2 border-black hard-shadow-sm">
              nj
            </div>
            <div>
              <span className="font-mono font-bold text-sm block">NAVEEN</span>
              <span className="font-mono text-xs text-slate-600 block">JOSEPH</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 font-mono text-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 border-2 border-black font-semibold transition-all ${
                    isActive 
                      ? 'bg-white hard-shadow translate-x-1' 
                      : 'bg-[#f8f5f2] hover:bg-white hover:hard-shadow-sm hover:translate-x-0.5'
                  }`}
                >
                  <div className={`p-1 border border-black ${isActive ? 'bg-[#3f4d34] text-white' : 'bg-[#e5e7eb]'}`}>
                    <Icon size={16} />
                  </div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Windows Path Box */}
        <div className="space-y-3">
          <a
            href="/resume.pdf"
            download
            className="w-full flex items-center justify-between px-3 py-2 bg-white border-2 border-black hard-shadow-sm font-mono text-xs font-bold hover:bg-amber-100 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <FileText size={14} /> Resume
            </span>
            <span>↓</span>
          </a>

          <div className="bg-[#3f4d34] text-white font-mono text-xs p-3 border-2 border-black hard-shadow-sm flex items-center justify-between">
            <span className="font-bold text-yellow-300">C:\&gt;</span>
            <span className="text-stone-300">v2.0_2026</span>
          </div>
        </div>
      </aside>

      {/* MOBILE TOP BAR (Brand + Menu Trigger) */}
      <header className="md:hidden sticky top-0 z-50 bg-[#f8f5f2] border-b-2 border-black px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white font-mono text-base font-bold flex items-center justify-center border border-black">
            nj
          </div>
          <span className="font-mono font-bold text-sm tracking-tight">NAVEEN JOSEPH</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 bg-white border-2 border-black hard-shadow-sm flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="w-3/4 max-w-xs bg-[#f8f5f2] h-full border-l-2 border-black p-6 flex flex-col justify-between font-mono">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b-2 border-black pb-4">
                <span className="font-bold text-sm">NAVIGATION</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 border border-black bg-white"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 border-2 border-black text-sm font-semibold ${
                        isActive ? 'bg-white hard-shadow' : 'bg-white/60'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <a
              href="/resume.pdf"
              download
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#3f4d34] text-white border-2 border-black hard-shadow font-mono text-sm font-bold"
            >
              <FileText size={16} /> Download Resume
            </a>
          </div>
        </div>
      )}

      {/* MOBILE STICKY BOTTOM NAVIGATION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#f8f5f2] border-t-2 border-black p-2 flex justify-around items-center hard-shadow">
        {navItems.slice(0, 4).concat(navItems.slice(5, 6)).map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center justify-center p-1.5 border border-black text-[10px] font-mono font-bold transition-all ${
                isActive 
                  ? 'bg-[#3f4d34] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white text-black'
              }`}
            >
              <Icon size={16} />
              <span className="mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
