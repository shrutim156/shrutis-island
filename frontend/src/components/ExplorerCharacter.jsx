import React from 'react';
import { motion } from 'framer-motion';

export default function ExplorerCharacter() {
  return (
    <div className="flex items-center gap-3 select-none pointer-events-auto">
      {/* Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="relative bg-[#f5efeb] text-[#2c1d0e] px-3 py-1.5 rounded-2xl border-2 border-[#b88d4b] shadow-md text-xs font-handwriting text-base font-bold whitespace-nowrap"
      >
        Ready to explore? ♡
        {/* Bubble arrow point */}
        <div className="absolute right-[-8px] bottom-3 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#b88d4b]" />
      </motion.div>

      {/* Explorer Avatar */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-12 h-12 rounded-full bg-[#ebdcb9] border-2 border-[#2c1d0e] p-1 shadow-lg flex items-center justify-center text-xl"
        title="Shruti the Explorer"
      >
        👩‍🌾
      </motion.div>
    </div>
  );
}