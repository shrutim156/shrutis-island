import React from 'react';

export default function Legend() {
  const legendItems = [
    { symbol: "⚙", label: "Explore" },
    { symbol: "📍", label: "Discover" },
    { symbol: "📖", label: "Learn" },
    { symbol: "🛠", label: "Build" },
    { symbol: "🌱", label: "Grow" }
  ];

  return (
    <div className="bg-[#f5efeb]/90 border-2 border-[#b88d4b] p-3 rounded-xl shadow-lg backdrop-blur-sm max-w-[160px]">
      <div className="font-serif-title text-xs font-bold text-[#2c1d0e] border-b border-[#b88d4b]/40 pb-1 mb-2 tracking-wider">
        LEGEND
      </div>
      <ul className="space-y-1 text-xs font-serif text-[#4a351c]">
        {legendItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-base">{item.symbol}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}