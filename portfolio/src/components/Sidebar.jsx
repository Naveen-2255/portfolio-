import React, { useState, useEffect } from 'react';
import { Home, User, Cpu, Folder, Mail, FileText, RotateCcw, Menu, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Sidebar({ onReboot }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Folder },
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
      {/* DESKTOP FIXED SIDEBAR (Always available on desktop) */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-[#f8f5f2] border-r-2 border-black z-40 p-4 justify-between select-none">
        <div className="space-y-6">
          {/* Logo Card */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
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
                  className={`w-full flex items-center gap-3 px-3 py-2.5 border-2 border-black font-semibold transition-all cursor-pointer ${
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

        {/* Bottom Actions Box */}
        <div className="space-y-3 font-mono text-xs">
          {onReboot && (
            <button
              onClick={onReboot}
              className="w-full flex items-center justify-between px-3 py-2 bg-slate-900 text-green-400 border-2 border-black hard-shadow-sm font-bold hover:bg-black transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <RotateCcw size={14} /> Reboot PC
              </span>
              <span>[BIOS]</span>
            </button>
          )}

          <a
            href="/resume.pdf"
            download
            className="w-full flex items-center justify-between px-3 py-2 bg-white border-2 border-black hard-shadow-sm font-bold hover:bg-amber-100 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <FileText size={14} /> Resume
            </span>
            <span>↓</span>
          </a>

          <div className="bg-[#3f4d34] text-white p-3 border-2 border-black hard-shadow-sm flex items-center justify-between">
            <span className="font-bold text-yellow-300">C:\&gt;</span>
            <span className="text-stone-300">v2.0_2026</span>
          </div>
        </div>
      </aside>

      {/* MOBILE STICKY TOP BAR (Available on all pages/sections) */}
      <header className="md:hidden sticky top-0 z-50 bg-[#f8f5f2] border-b-2 border-black px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-8 h-8 bg-black text-white font-mono text-base font-bold flex items-center justify-center border border-black">
            nj
          </div>
          <span className="font-mono font-bold text-sm tracking-tight">NAVEEN JOSEPH</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-2.5 py-1 bg-[#3f4d34] text-yellow-300 border-2 border-black font-bold flex items-center gap-1.5 text-xs hard-shadow-sm cursor-pointer"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
            <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </header>

      {/* MOBILE FULL DROPDOWN MENU OVERLAY (Available on all sections) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[49px] z-40 bg-[#f8f5f2] border-b-2 border-black p-4 space-y-3 hard-shadow font-mono text-sm">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-2 p-2.5 border-2 border-black font-bold text-xs ${
                    isActive 
                      ? 'bg-[#3f4d34] text-white hard-shadow-sm' 
                      : 'bg-white text-black hover:bg-stone-100'
                  }`}
                >
                  <Icon size={14} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-black/20 flex gap-2 text-xs font-bold">
            {onReboot && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReboot();
                }}
                className="flex-1 py-2 bg-black text-green-400 border border-black flex items-center justify-center gap-1.5"
              >
                <RotateCcw size={13} /> Reboot PC
              </button>
            )}
            <a
              href="/resume.pdf"
              download
              className="flex-1 py-2 bg-white text-black border border-black flex items-center justify-center gap-1.5 hard-shadow-sm"
            >
              <FileText size={13} /> Resume ↓
            </a>
          </div>
        </div>
      )}

      {/* MOBILE STICKY BOTTOM NAVIGATION BAR (Always visible at screen bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#f8f5f2] border-t-2 border-black p-1.5 flex justify-around items-center hard-shadow">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1 px-1 border border-black text-[10px] font-mono font-bold transition-all mx-0.5 ${
                isActive 
                  ? 'bg-[#3f4d34] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white text-black'
              }`}
            >
              <Icon size={15} />
              <span className="mt-0.5 truncate max-w-full">{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

