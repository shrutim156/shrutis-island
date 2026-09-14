import React from 'react';
import { motion } from 'framer-motion';

export default function LocationHotspot({ location, onClick }) {
  return (
    <div
      style={{
        left: `${location.x}%`,
        top: `${location.y}%`,
        width: location.width || '12%',
        height: location.height || '7%'
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
      onClick={() => onClick(location)}
      role="button"
      tabIndex={0}
      aria-label={`Open ${location.name} - ${location.subtitle}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick(location);
      }}
    >
      {/* Subtle hover glow ring over the illustrated banner */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full rounded-xl border-2 border-transparent group-hover:border-amber-600/60 group-hover:bg-amber-400/20 group-hover:shadow-[0_0_15px_rgba(217,119,6,0.5)] transition-all duration-200 flex items-center justify-center"
      >
        {/* Subtle hover indicator icon */}
        <span className="opacity-0 group-hover:opacity-100 font-handwriting text-amber-900 font-bold text-xs bg-[#f5efeb]/80 px-2 py-0.5 rounded shadow-sm transition-opacity">
          Click to Explore ✨
        </span>
      </motion.div>
    </div>
  );
}