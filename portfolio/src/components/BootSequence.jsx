import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BootSequence({ onComplete }) {
  const [memory, setMemory] = useState(0);
  const [lines, setLines] = useState([]);

  // Memory counter effect
  useEffect(() => {
    const memoryInterval = setInterval(() => {
      setMemory((prev) => {
        if (prev >= 65536) {
          clearInterval(memoryInterval);
          return 65536;
        }
        return prev + 4096;
      });
    }, 40);

    return () => clearInterval(memoryInterval);
  }, []);

  // Sequence of boot logs
  useEffect(() => {
    const bootLogs = [
      { delay: 200, text: 'AWARD MODULAR BIOS v4.51PG, An Energy Star Ally' },
      { delay: 400, text: 'Copyright (C) 1984-2026, Retro Portfolio Systems Inc.' },
      { delay: 600, text: 'CPU: INTEL PENTIUM II @ 400MHz' },
      { delay: 900, text: 'Memory Test : 640K OK  65536K EXTENDED OK' },
      { delay: 1100, text: '' },
      { delay: 1300, text: 'Detecting Primary Master   ... NAVEEN_OS_2.0 [PORTFOLIO HD]' },
      { delay: 1500, text: 'Detecting Primary Slave    ... SKILLS_&_PROJECTS.SYS [READY]' },
      { delay: 1700, text: 'Detecting Secondary Master ... AI_CORE_MODULE [LOADED]' },
      { delay: 1900, text: '' },
      { delay: 2100, text: 'Initializing System Drivers .......................... [OK]' },
      { delay: 2300, text: 'Mounting Components (Hero, About, Projects, Contact) . [OK]' },
      { delay: 2500, text: 'Establishing Retro Connection ........................ [OK]' },
      { delay: 2700, text: '' },
      { delay: 2900, text: 'SYSTEM READY > BOOTING NAVEEN JOSEPH PORTFOLIO OS...' },
    ];

    const timeouts = bootLogs.map(({ delay, text }) =>
      setTimeout(() => {
        setLines((prev) => [...prev, text]);
      }, delay)
    );

    // Auto complete after ~3.4s
    const finishTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3400);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        if (onComplete) onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scaleY: 0.005, filter: 'brightness(3)' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-[#080c08] text-[#33ff33] font-mono select-none overflow-hidden flex flex-col justify-between p-4 sm:p-8 crt-overlay crt-flicker"
      onClick={onComplete}
    >
      {/* Header BIOS info */}
      <div className="space-y-4 max-w-4xl mx-auto w-full text-xs sm:text-sm leading-relaxed">
        <div className="flex justify-between items-start border-b border-[#33ff33]/40 pb-3">
          <div>
            <p className="font-bold tracking-widest text-[#66ff66]">RETRO-BIOS (C) 1998-2026</p>
            <p className="text-[#22aa22]">Naveen Joseph System Architecture v2.0</p>
          </div>
          <div className="text-right border border-[#33ff33] px-2 py-1 bg-[#33ff33]/10 font-bold text-[10px] sm:text-xs">
            [ENERGY STAR]
          </div>
        </div>

        {/* Terminal output */}
        <div className="space-y-1 mt-4">
          {lines.map((line, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-[#22aa22]">&gt;</span>
              <span>{line}</span>
            </div>
          ))}

          {lines.length < 14 && (
            <div className="flex items-center gap-2">
              <span className="text-[#22aa22]">&gt;</span>
              <span className="animate-pulse bg-[#33ff33] text-black px-1 font-bold">_</span>
            </div>
          )}
        </div>

        {/* ASCII Banner */}
        {lines.length >= 12 && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }}
            className="pt-4 text-[#88ff88] text-[9px] sm:text-xs leading-none font-bold overflow-x-auto whitespace-pre"
          >
{`
  _  _   _   _  _ ___ ___ _  _   _  ___  ___ ___ ___  _  _ 
 | \| | /_\ | || | __| __| \| | | |/ _ \/ __| __| _ \| || |
 | .\` |/ _ \| \/ | _|| _|| .\` |_| | (_) \__ \ _||  _/| __ |
 |_|\_/_/ \_\ \__/|___|___|_|\_\___/ \___/|___/___|_|  |_||_|
`}
          </motion.div>
        )}
      </div>

      {/* Footer Controls & Skip prompt */}
      <div className="max-w-4xl mx-auto w-full pt-4 border-t border-[#33ff33]/30 flex flex-wrap justify-between items-center text-xs text-[#22aa22]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#33ff33] animate-ping" />
          <span>SYSTEM BOOTING... ({memory}KB OK)</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onComplete) onComplete();
          }}
          className="px-3 py-1 bg-[#33ff33] text-black font-bold border border-black hover:bg-[#66ff66] transition-colors cursor-pointer text-xs"
        >
          [ ESC / CLICK TO SKIP ]
        </button>
      </div>
    </motion.div>
  );
}

