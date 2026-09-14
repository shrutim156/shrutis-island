import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function MapControls({ onZoomIn, onZoomOut, onReset }) {
  return (
    <div className="flex flex-col gap-1 bg-[#f5efeb]/90 border-2 border-[#b88d4b] rounded-xl p-1.5 shadow-lg backdrop-blur-sm">
      <button
        onClick={onZoomIn}
        aria-label="Zoom In"
        className="p-2 hover:bg-[#ebdcb9] rounded-lg text-[#2c1d0e] transition active:scale-95 cursor-pointer"
        title="Zoom In"
      >
        <ZoomIn className="w-5 h-5" />
      </button>
      <button
        onClick={onZoomOut}
        aria-label="Zoom Out"
        className="p-2 hover:bg-[#ebdcb9] rounded-lg text-[#2c1d0e] transition active:scale-95 cursor-pointer"
        title="Zoom Out"
      >
        <ZoomOut className="w-5 h-5" />
      </button>
      <button
        onClick={onReset}
        aria-label="Reset Map"
        className="p-2 hover:bg-[#ebdcb9] rounded-lg text-[#2c1d0e] transition active:scale-95 cursor-pointer"
        title="Reset Map View"
      >
        <RotateCcw className="w-5 h-5" />
      </button>
    </div>
  );
}