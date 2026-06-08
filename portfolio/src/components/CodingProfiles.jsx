import React from 'react';
import { motion } from 'framer-motion';

// Helper to generate a random activity level
// 0: no activity, 1: low, 2: medium, 3: high, 4: very high
const getRandomLevel = () => {
  const rand = Math.random();
  if (rand < 0.5) return 0; // Mostly empty
  if (rand < 0.75) return 1;
  if (rand < 0.9) return 2;
  if (rand < 0.97) return 3;
  return 4;
};

// Colors mapping for levels
const levelColors = {
  0: 'bg-slate-800/50',
  1: 'bg-indigo-900/60',
  2: 'bg-indigo-700/80',
  3: 'bg-indigo-500',
  4: 'bg-indigo-400',
};

const generateGraph = (cols, rows) => {
  const squares = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      squares.push({
        id: `${c}-${r}`,
        level: getRandomLevel(),
      });
    }
  }
  return squares;
};

export default function CodingProfiles() {
  const rows = 7;
  const cols = 48; // Width for typical graph
  const squares = React.useMemo(() => generateGraph(cols, rows), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.005, // Very fast wave cascade
      },
    },
  };

  const squareVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Coding Profiles</h2>
        <div className="w-20 h-1 bg-indigo-500 mt-4 mx-auto md:mx-0 rounded-full"></div>
      </div>

      <div className="w-full bg-[#0d1117] border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden relative">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-400" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">GitHub Contributions</h3>
              <p className="text-slate-400 text-sm">3,492 contributions in the last year</p>
            </div>
          </div>
          <a href="https://github.com/Naveen-2255" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-full border border-slate-700/50 text-indigo-400 text-xs font-medium backdrop-blur-sm cursor-pointer">
            @Naveen-2255
          </a>
        </div>

        {/* Contribution Graph */}
        <div className="overflow-x-auto pb-4 scrollbar-hide relative z-10">
          <motion.div 
            className="flex gap-[3px] min-w-max"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {Array.from({ length: cols }).map((_, cIndex) => (
              <div key={cIndex} className="flex flex-col gap-[3px]">
                {squares.slice(cIndex * rows, (cIndex + 1) * rows).map((sq) => (
                  <motion.div
                    key={sq.id}
                    variants={squareVariants}
                    className={`w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-[2px] ${levelColors[sq.level]}`}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 relative z-10">
          <div>Learn how we count contributions</div>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-[3px]">
              <div className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-[2px] bg-slate-800/50"></div>
              <div className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-[2px] bg-indigo-900/60"></div>
              <div className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-[2px] bg-indigo-700/80"></div>
              <div className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-[2px] bg-indigo-500"></div>
              <div className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-[2px] bg-indigo-400"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
