import React, { useState } from 'react';
import { Minus, Square, X } from 'lucide-react';

export default function OSWindow({ 
  path = "C:\\> program.exe", 
  children, 
  className = "", 
  bodyClassName = "",
  hasGridBackground = false,
  id = ""
}) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) {
    return (
      <div id={id} className={`my-8 p-4 bg-amber-100 border-2 border-black hard-shadow font-mono text-sm flex items-center justify-between ${className}`}>
        <span>Window [{path}] closed.</span>
        <button 
          onClick={() => setIsClosed(false)}
          className="px-2 py-0.5 bg-black text-white text-xs hover:bg-slate-800 uppercase font-mono"
        >
          Re-open
        </button>
      </div>
    );
  }

  return (
    <div 
      id={id}
      className={`border-2 border-black hard-shadow bg-white text-black font-sans my-8 transition-all overflow-hidden ${className}`}
    >
      {/* OS Header Bar */}
      <div className="bg-[#3f4d34] text-white font-mono text-xs sm:text-sm px-3 py-1.5 flex justify-between items-center border-b-2 border-black select-none">
        <div className="flex items-center gap-2 font-mono font-semibold truncate tracking-wide">
          <span className="text-yellow-300">C:\&gt;</span>
          <span className="truncate">{path.replace(/^C:\\?>\s*/i, '')}</span>
        </div>
        
        {/* Retro Window Control Buttons */}
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            title="Minimize" 
            className="w-5 h-5 sm:w-6 sm:h-6 bg-[#d1d5db] hover:bg-slate-300 text-black border border-black flex items-center justify-center font-bold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <Minus size={12} strokeWidth={3} />
          </button>
          <button 
            onClick={() => setIsMinimized(false)}
            title="Maximize" 
            className="w-5 h-5 sm:w-6 sm:h-6 bg-[#d1d5db] hover:bg-slate-300 text-black border border-black flex items-center justify-center font-bold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <Square size={10} strokeWidth={3} />
          </button>
          <button 
            onClick={() => setIsClosed(true)}
            title="Close" 
            className="w-5 h-5 sm:w-6 sm:h-6 bg-[#ef4444] hover:bg-red-600 text-white border border-black flex items-center justify-center font-bold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <X size={12} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      {!isMinimized && (
        <div className={`${hasGridBackground ? 'bg-grid-pattern' : 'bg-white'} ${bodyClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
}
