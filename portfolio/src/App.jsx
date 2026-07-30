import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BootSequence from './components/BootSequence';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [booting, setBooting] = useState(true);

  const handleReboot = () => {
    setBooting(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-black font-sans selection:bg-yellow-300 selection:text-black">
      <AnimatePresence mode="wait">
        {booting ? (
          <BootSequence key="boot-screen" onComplete={() => setBooting(false)} />
        ) : (
          <React.Fragment key="portfolio-wrapper">
            {/* Responsive Retro OS Navigation - Pinned to viewport window */}
            <Sidebar onReboot={handleReboot} />

            <motion.div
              key="portfolio-content"
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-screen bg-[#f8f5f2]"
            >
              {/* Main Content Area - Scrollable on right for desktop */}
              <main className="md:ml-64 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-5xl mx-auto space-y-8 pb-20 md:pb-8">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <GitHubActivity />
                <Contact />
                <Footer />
              </main>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


