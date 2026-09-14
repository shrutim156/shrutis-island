import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExplorerCharacter({ speechText, onCharacterClick }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none pointer-events-auto">
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={speechText}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -5, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#f5efeb] text-[#2c1d0e] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-[#b88d4b] shadow-xl max-w-[150px] sm:max-w-xs font-serif text-xs sm:text-sm font-bold"
        >
          {speechText}
          <div className="absolute right-[-7px] sm:right-[-8px] bottom-3 sm:bottom-4 w-0 h-0 border-t-[5px] sm:border-t-[6px] border-t-transparent border-b-[5px] sm:border-b-[6px] border-b-transparent border-l-[7px] sm:border-l-[8px] border-l-[#b88d4b]" />
        </motion.div>
      </AnimatePresence>

      {/* 3D Model Container */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onCharacterClick}
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ebdcb9] border-2 sm:border-3 border-[#2c1d0e] shadow-xl flex items-center justify-center cursor-pointer overflow-hidden"
        title="Tap to talk with Shruti!"
      >
        <model-viewer
          src="/character.glb"
          alt="Shruti Explorer 3D Character"
          auto-rotate
          autoplay
          camera-controls
          disable-zoom
          shadow-intensity="1"
          style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        ></model-viewer>
      </motion.div>
    </div>
  );
}