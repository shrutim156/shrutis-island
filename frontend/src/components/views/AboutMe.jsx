import React from 'react';
import profile from '../../data/profile';
import { BookOpen, User, Sparkles, Code2 } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="space-y-6 text-[#2c1d0e]">
      {/* Header Banner */}
      <div className="bg-[#ebdcb9]/60 p-5 rounded-xl border border-[#b88d4b]/40">
        <h3 className="text-2xl font-serif-title text-[#2c1d0e] font-bold">{profile.name}</h3>
        <p className="font-handwriting text-xl text-[#5c4329]">{profile.status} • {profile.degreeShort}</p>
        <p className="text-xs text-[#5c4329] mt-1">{profile.institution}</p>
      </div>

      {/* Main Bio */}
      <div>
        <h4 className="font-serif-title font-bold text-sm tracking-wide text-[#b88d4b] uppercase mb-2 flex items-center gap-2">
          <User className="w-4 h-4" /> Background
        </h4>
        <p className="leading-relaxed text-sm text-[#36220f]">{profile.bio}</p>
      </div>

      {/* Core Interests */}
      <div>
        <h4 className="font-serif-title font-bold text-sm tracking-wide text-[#b88d4b] uppercase mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Key Interests & Focus Areas
        </h4>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-[#ebdcb9] border border-[#b88d4b]/60 text-xs font-semibold text-[#2c1d0e]"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="p-4 rounded-lg bg-[#f5efeb] border-l-4 border-[#b88d4b] italic font-serif text-sm text-[#4a351c]">
        "{profile.quote}"
      </div>
    </div>
  );
}