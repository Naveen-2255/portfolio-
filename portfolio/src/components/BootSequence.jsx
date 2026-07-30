import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BootSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState([]);

  // Windows XP / Retro style loading progress effect
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  // Simplified sequence of essential boot logs
  useEffect(() => {
    const bootLogs = [
      { delay: 300, text: 'AWARD MODULAR BIOS v4.51PG — PORTFOLIO OS v2.0' },
      { delay: 1000, text: 'CPU: INTEL PENTIUM II @ 400MHz | SYSTEM RAM: 65536K OK' },
      { delay: 1800, text: 'Loading System Drivers & Core Services .................. [OK]' },
      { delay: 2600, text: 'Mounting Desktop Components & Linktree Assets ............ [OK]' },
      { delay: 3400, text: 'WELCOME > INITIALIZING WINDOWS DESKTOP...' },
    ];

    const timeouts = bootLogs.map(({ delay, text }) =>
      setTimeout(() => {
        setLines((prev) => [...prev, text]);
      }, delay)
    );

    const finishTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4400);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px) brightness(1.2)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 bg-[#f8f5f2] text-[#1c3f20] font-mono select-none overflow-hidden flex flex-col justify-between p-6 sm:p-12 crt-overlay"
    >
      {/* Header BIOS info */}
      <div className="space-y-6 max-w-4xl mx-auto w-full text-xs sm:text-sm leading-relaxed">
        <div className="flex justify-between items-start border-b-2 border-black pb-4">
          <div>
            <p className="font-bold tracking-widest text-black text-sm sm:text-base">RETRO-BIOS (C) 1998-2026</p>
            <p className="text-[#3f4d34] font-semibold text-xs sm:text-sm">Naveen Joseph System Architecture v2.0</p>
          </div>
          <div className="text-right border-2 border-black px-3 py-1 bg-[#3f4d34] text-yellow-300 font-bold text-xs hard-shadow-sm">
            [ENERGY STAR]
          </div>
        </div>

        {/* Terminal output */}
        <div className="space-y-3 mt-6 font-mono text-xs sm:text-sm font-semibold">
          {lines.map((line, idx) => (
            <div key={idx} className="flex items-center gap-2 text-black">
              <span className="text-[#3f4d34] font-bold">&gt;</span>
              <span>{line}</span>
            </div>
          ))}

          {lines.length < 5 && (
            <div className="flex items-center gap-2">
              <span className="text-[#3f4d34] font-bold">&gt;</span>
              <span className="animate-pulse bg-[#3f4d34] text-yellow-300 px-1 font-bold">_</span>
            </div>
          )}
        </div>

        {/* ASCII Banner */}
        {lines.length >= 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }}
            className="pt-6 text-[#3f4d34] text-[9px] sm:text-xs leading-none font-bold overflow-x-auto whitespace-pre border-t border-black/20"
          >
{`
  _  _   _   _  _ ___ ___ _  _   _  ___  ___ ___ ___  _  _ 
 | \| | /_\ | || | __| __| \| | |/ _ \/ __| __| _ \| || |
 | .\` |/ _ \| \/ | _|| _|| .\` |_| | (_) \__ \ _||  _/| __ |
 |_|\_/_/ \_\ \__/|___|___|_|\_\___/ \___/|___/___|_|  |_||_|
`}
          </motion.div>
        )}
      </div>

      {/* Windows XP Progress Bar & System Status */}
      <div className="max-w-4xl mx-auto w-full pt-4 border-t-2 border-black space-y-3 font-mono text-xs font-bold text-[#3f4d34]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3f4d34] animate-ping" />
            <span>STARTING WINDOWS DESKTOP...</span>
          </div>
          <span>{progress}%</span>
        </div>

        {/* XP Style Segmented Progress Bar */}
        <div className="w-full bg-stone-200 border-2 border-black h-5 p-0.5 relative overflow-hidden flex gap-1 hard-shadow-sm">
          <div 
            className="bg-[#3f4d34] h-full transition-all duration-150 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

