import React from 'react';
import { motion } from 'framer-motion';

export default function Compass() {
  return (
    <div className="relative w-28 h-28 md:w-36 md:h-36 pointer-events-none select-none">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="#4a351c" strokeWidth="2" opacity="0.6" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#2c1d0e" strokeWidth="1" />
        
        {/* Cardinal Directions */}
        <text x="50" y="16" fontSize="10" textAnchor="middle" fill="#2c1d0e" fontWeight="bold" fontFamily="serif">N</text>
        <text x="50" y="90" fontSize="10" textAnchor="middle" fill="#2c1d0e" fontWeight="bold" fontFamily="serif">S</text>
        <text x="87" y="53" fontSize="10" textAnchor="middle" fill="#2c1d0e" fontWeight="bold" fontFamily="serif">E</text>
        <text x="13" y="53" fontSize="10" textAnchor="middle" fill="#2c1d0e" fontWeight="bold" fontFamily="serif">W</text>
        
        {/* Star compass points */}
        <path d="M 50 20 L 54 46 L 80 50 L 54 54 L 50 80 L 46 54 L 20 50 L 46 46 Z" fill="none" stroke="#4a351c" strokeWidth="0.8" />
      </svg>
      
      {/* Animated Needle */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: [0, 6, -4, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <div className="w-1.5 h-16 relative flex flex-col justify-between items-center">
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[32px] border-b-[#a83232]" />
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[32px] border-t-[#2c1d0e]" />
        </div>
      </motion.div>
    </div>
  );
}