import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Connect from './components/Connect';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Connect />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 bg-white border-t border-slate-200 flex flex-col gap-2">
        <span>Creatively designed and built by Naveen Joseph</span>
        <span>© {new Date().getFullYear()} Naveen Joseph. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
