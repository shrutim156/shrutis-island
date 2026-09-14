import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import AboutMe from './views/AboutMe';
import Education from './views/Education';
import ResearchLab from './views/ResearchLab';
import ProjectHarbor from './views/ProjectHarbor';
import Museum from './views/Museum';
import SatelliteStation from './views/SatelliteStation';

export default function LocationModal({ location, onClose }) {
  if (!location) return null;

  const renderContent = () => {
    switch (location.id) {
      case 'palace':
        return <AboutMe />;
      case 'academy':
        return <Education />;
      case 'research':
        return <ResearchLab />;
      case 'harbor':
        return <ProjectHarbor />;
      case 'museum':
        return <Museum />;
      case 'satellite':
        return <SatelliteStation />;
      default:
        return <div>Destination content details coming soon.</div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#f5efeb] border-4 border-[#b88d4b] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="bg-[#ebdcb9] p-4 border-b-2 border-[#b88d4b] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#b88d4b]/20 transition text-[#2c1d0e] cursor-pointer"
              title="Return to Island"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-serif-title font-bold text-lg md:text-xl text-[#2c1d0e] leading-none">
                {location.name}
              </h2>
              <span className="font-handwriting text-base text-[#5c4329]">
                {location.subtitle}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#b88d4b]/20 transition text-[#2c1d0e] cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1">
          {renderContent()}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#ebdcb9]/40 border-t border-[#b88d4b]/30 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#b88d4b] text-[#f5efeb] font-serif-title text-xs font-bold rounded-full hover:bg-[#a37d57] transition cursor-pointer"
          >
            Return to Island
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}