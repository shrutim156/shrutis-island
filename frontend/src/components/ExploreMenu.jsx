import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { mapLocations } from '../data/mapLocations';

export default function ExploreMenu({ onSelectLocation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#f5efeb]/95 border-2 border-[#b88d4b] rounded-full shadow-lg text-[#2c1d0e] font-serif-title text-sm hover:bg-[#ebdcb9] transition cursor-pointer"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        <span>Quick Nav</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#f5efeb] border-2 border-[#b88d4b] rounded-xl shadow-2xl py-2 z-50">
          <div className="px-3 py-1 font-serif-title text-xs text-[#5c4329] border-b border-[#b88d4b]/30 mb-1">
            DESTINATIONS
          </div>
          {mapLocations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                onSelectLocation(loc);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-[#ebdcb9] flex items-center justify-between text-[#2c1d0e] transition cursor-pointer"
            >
              <span className="font-serif-title font-bold text-xs">{loc.name}</span>
              <span className="font-handwriting text-[#5c4329] text-xs">{loc.subtitle}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}