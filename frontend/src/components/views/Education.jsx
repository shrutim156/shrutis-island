import React from 'react';
import educationData from '../../data/education';
import { GraduationCap, BookOpen, Target } from 'lucide-react';

export default function Education() {
  return (
    <div className="space-y-6 text-[#2c1d0e]">
      {/* Primary Degree Information */}
      <div className="border-2 border-[#b88d4b] p-5 rounded-xl bg-[#f5efeb] shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#b88d4b] text-[#f5efeb] font-serif text-xs font-bold mb-2">
              {educationData.status}
            </span>
            <h3 className="text-xl font-serif-title font-bold">{educationData.degree}</h3>
            <p className="font-semibold text-sm text-[#5c4329]">{educationData.major}</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#5c4329] block">CGPA</span>
            <span className="font-serif-title font-bold text-lg text-[#b88d4b]">{educationData.cgpa}</span>
          </div>
        </div>
        <p className="text-xs text-[#5c4329] mt-3 border-t border-[#b88d4b]/20 pt-2">
          🏫 {educationData.institution} — {educationData.location}
        </p>
      </div>

      {/* Coursework */}
      <div>
        <h4 className="font-serif-title font-bold text-sm tracking-wide text-[#b88d4b] uppercase mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> Relevant Coursework & Fundamentals
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {educationData.coreCoursework.map((course, idx) => (
            <div key={idx} className="p-2.5 rounded bg-[#ebdcb9]/40 border border-[#b88d4b]/30 text-xs font-medium">
              • {course}
            </div>
          ))}
        </div>
      </div>

      {/* Learning Goals */}
      <div>
        <h4 className="font-serif-title font-bold text-sm tracking-wide text-[#b88d4b] uppercase mb-2 flex items-center gap-2">
          <Target className="w-4 h-4" /> Ongoing Learning Goals
        </h4>
        <ul className="space-y-1.5 text-xs text-[#36220f]">
          {educationData.learningGoals.map((goal, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-amber-700">▹</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}