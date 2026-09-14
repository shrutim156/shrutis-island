import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CompassIcon, Sparkles } from 'lucide-react';

export default function IntroScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1005] bg-[radial-gradient(#4a351c_1px,transparent_1px)] [background-size:16px_16px] text-[#f5efeb] p-4"
    >
      <div className="max-w-lg w-full text-center p-8 rounded-2xl border-2 border-[#ceaa6c]/40 bg-[#2c1d0e]/90 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Parchment aesthetic frame overlay */}
        <div className="absolute inset-2 border border-[#ceaa6c]/20 pointer-events-none rounded-xl" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex p-4 rounded-full bg-[#ceaa6c]/10 mb-6 text-[#ceaa6c] border border-[#ceaa6c]/30"
        >
          <Compass className="w-12 h-12 animate-spin-slow" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif-title tracking-wider text-[#ebdcb9] mb-3"
        >
          WELCOME TO SHRUTI'S ISLAND
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-handwriting text-2xl md:text-3xl text-[#ceaa6c] mb-8"
        >
          An interactive map of my world
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ceaa6c] to-[#b88d4b] text-[#1c1005] font-bold text-lg shadow-lg hover:brightness-110 transition cursor-pointer"
        >
          <span>Start Exploring</span>
          <Sparkles className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}