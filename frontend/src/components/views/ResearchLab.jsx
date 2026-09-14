import React, { useState } from 'react';
import { researchStations } from '../../data/researchStations';
import { Brain, Database, Cpu, Sparkles, Bot, MessageSquareText, ShieldCheck, Code2 } from 'lucide-react';

const iconMap = {
  Brain, Database, Cpu, Sparkles, Bot, MessageSquareText, ShieldCheck, Code2
};

export default function ResearchLab() {
  const [selectedStation, setSelectedStation] = useState(researchStations[0]);

  return (
    <div className="space-y-5 text-[#2c1d0e]">
      <p className="text-xs text-[#5c4329]">
        Welcome to the Laboratory. Select a station to view core learning domains and subjects.
      </p>

      {/* Grid of Stations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {researchStations.map((station) => {
          const IconComponent = iconMap[station.icon] || Brain;
          const isSelected = selectedStation.id === station.id;

          return (
            <button
              key={station.id}
              onClick={() => setSelectedStation(station)}
              className={`p-3 rounded-xl border text-left transition flex flex-col justify-between h-24 cursor-pointer ${
                isSelected
                  ? 'bg-[#b88d4b] text-[#f5efeb] border-[#2c1d0e] shadow-md'
                  : 'bg-[#ebdcb9]/40 border-[#b88d4b]/40 text-[#2c1d0e] hover:bg-[#ebdcb9]'
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isSelected ? 'text-[#f5efeb]' : 'text-[#b88d4b]'}`} />
              <div>
                <div className="font-serif-title text-xs font-bold leading-snug">{station.name}</div>
                <div className={`text-[10px] ${isSelected ? 'text-[#f5efeb]/80' : 'text-[#5c4329]'}`}>
                  {station.category}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Panel */}
      {selectedStation && (
        <div className="p-4 rounded-xl bg-[#f5efeb] border-2 border-[#b88d4b] shadow-sm">
          <h4 className="font-serif-title font-bold text-base text-[#2c1d0e] mb-1">
            {selectedStation.name} — Overview
          </h4>
          <p className="text-xs text-[#36220f] mb-3">{selectedStation.summary}</p>
          
          <h5 className="font-serif text-xs font-bold text-[#b88d4b] uppercase mb-2">Key Topics & Concepts</h5>
          <div className="flex flex-wrap gap-1.5">
            {selectedStation.topics.map((topic, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-[#ebdcb9] text-[11px] font-semibold text-[#2c1d0e]">
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}