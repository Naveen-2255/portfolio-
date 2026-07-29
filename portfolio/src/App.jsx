import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] text-black font-sans selection:bg-yellow-300 selection:text-black">
      {/* Responsive Retro OS Navigation */}
      <Sidebar />

      {/* Main Content Area - Scrollable on right for desktop */}
      <main className="md:ml-64 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-5xl mx-auto space-y-8 pb-20 md:pb-8">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <GitHubActivity />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
