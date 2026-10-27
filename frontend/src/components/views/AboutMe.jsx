import React, { useState } from 'react';
import { BookOpen, Sparkles, ChevronRight, ChevronLeft, GraduationCap, Compass } from 'lucide-react';

export default function Palace() {
  const [activeTab, setActiveTab] = useState('profile'); // Default to 'profile'
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      num: "01",
      title: "THE BEGINNING",
      subtitle: "Not just another engineer.",
      text: "I was never interested in simply learning how things work. I wanted to know what I could create with them. Somewhere between curiosity, code, and a thousand unfinished ideas, my journey began."
    },
    {
      num: "02",
      title: "THE DISCOVERY",
      subtitle: "Finding my world in AI.",
      text: "Artificial Intelligence and Data Science became more than a degree. They became a way to explore how machines learn, how data tells stories, and how ideas can turn into something real."
    },
    {
      num: "03",
      title: "THE BUILDING",
      subtitle: "Ideas deserve to exist.",
      text: "From AI-powered applications to data-driven projects, I want to build things that do more than look impressive. I want them to solve problems, make sense, and be useful beyond the screen."
    },
    {
      num: "04",
      title: "STILL UNWRITTEN",
      subtitle: "This is only the beginning.",
      text: "I'm still learning. Still questioning. Still figuring things out. My goal is to grow into a Data Scientist and AI Engineer who turns complex problems into meaningful solutions. The best part of my story is the part I'm still writing."
    }
  ];

  const interests = [
    "Artificial Intelligence", 
    "Data Science", 
    "Machine Learning", 
    "Natural Language Processing", 
    "Generative AI", 
    "Agentic AI"
  ];

  return (
    <div className="space-y-6 text-[#2c1d0e]">
      
      {/* Top Switcher Tabs */}
      <div className="flex border-b-2 border-[#b88d4b]/40 pb-3 justify-between items-center">
        <div>
          <h2 className="font-serif-title font-bold text-lg text-[#2c1d0e]">THE PALACE ARCHIVES</h2>
          <p className="text-xs text-[#5c4329]">My story, vision, and academic background.</p>
        </div>
        <div className="flex gap-2 bg-[#ebdcb9] p-1 rounded-lg border border-[#b88d4b]/40">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3 py-1 text-xs font-serif-title font-bold rounded-md transition-all ${
              activeTab === 'profile' 
                ? 'bg-[#2c1d0e] text-[#ebdcb9] shadow' 
                : 'text-[#5c4329] hover:text-[#2c1d0e]'
            }`}
          >
            🎓 Profile & Focus
          </button>
          <button
            onClick={() => setActiveTab('story')}
            className={`px-3 py-1 text-xs font-serif-title font-bold rounded-md transition-all ${
              activeTab === 'story' 
                ? 'bg-[#2c1d0e] text-[#ebdcb9] shadow' 
                : 'text-[#5c4329] hover:text-[#2c1d0e]'
            }`}
          >
            📖 Journal Pages
          </button>
        </div>
      </div>

      {/* TAB 1: PROFILE & ACADEMIC CREDENTIALS (Default) */}
      {activeTab === 'profile' && (
        <div className="border-2 border-[#b88d4b] rounded-xl bg-[#f5efeb] p-6 shadow-md space-y-5">
          
          {/* Header Card */}
          <div className="bg-[#ebdcb9]/60 p-4 rounded-xl border border-[#b88d4b]/30 flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-serif-title font-bold text-lg text-[#2c1d0e]">SHRUTI MORE</h3>
              <p className="text-xs font-medium text-[#5c4329] flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#b88d4b]" /> Final-Year Student · B.E. AI & DS
              </p>
              <p className="text-[11px] text-[#70553f]">PES Modern College / Modern College of Engineering</p>
            </div>
            <span className="bg-[#2c1d0e] text-[#ebdcb9] text-[10px] font-serif-title px-2.5 py-1 rounded">
              AI & Data Science
            </span>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-serif-title font-bold uppercase text-[#5c4329]">Background & Passion</h4>
            <p className="text-xs text-[#36220f] leading-relaxed">
              I am a final-year Artificial Intelligence and Data Science engineering student with a deep passion for understanding, building, and experimenting with intelligent systems. My path is driven by curiosity—from core computer science fundamentals to cutting-edge Generative AI and Agentic systems.
            </p>
          </div>

          {/* Key Interests & Focus Areas */}
          <div className="space-y-2">
            <h4 className="text-xs font-serif-title font-bold uppercase text-[#5c4329]">Key Interests & Focus Areas</h4>
            <div className="flex flex-wrap gap-1.5">
              {interests.map((interest, idx) => (
                <span key={idx} className="text-[11px] px-2.5 py-1 bg-[#ebdcb9] text-[#2c1d0e] rounded-md font-medium border border-[#b88d4b]/30">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="p-3 bg-[#f3ece6] border-l-4 border-[#b88d4b] rounded-r-lg italic text-xs text-[#5c4329]">
            "Curiosity drives me. Code empowers me. Innovation inspires me."
          </div>

        </div>
      )}

      {/* TAB 2: JOURNAL / STORYBOOK VIEW */}
      {activeTab === 'story' && (
        <div className="border-2 border-[#b88d4b] rounded-xl bg-[#f5efeb] p-6 shadow-md space-y-6 relative overflow-hidden">
          
          {/* Page Indicator Badge */}
          <div className="flex justify-between items-center border-b border-[#b88d4b]/20 pb-3">
            <span className="text-[11px] font-serif-title uppercase tracking-widest text-[#b88d4b] font-bold flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Page {pages[currentPage - 1].num} of 04
            </span>
            <span className="text-[11px] text-[#5c4329] italic">
              {pages[currentPage - 1].title}
            </span>
          </div>

          {/* Page Content */}
          <div className="min-h-[150px] space-y-3 py-2">
            <h3 className="font-serif-title font-bold text-xl text-[#2c1d0e]">
              {pages[currentPage - 1].subtitle}
            </h3>
            <p className="text-sm text-[#36220f] leading-relaxed font-sans">
              {pages[currentPage - 1].text}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-[#b88d4b]/20">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                currentPage === 1 
                  ? 'opacity-40 cursor-not-allowed bg-[#ebdcb9] text-[#5c4329]' 
                  : 'bg-[#ebdcb9] text-[#2c1d0e] hover:bg-[#b88d4b] hover:text-white'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            {/* Page Dots */}
            <div className="flex gap-1.5">
              {pages.map((p) => (
                <button
                  key={p.num}
                  onClick={() => setCurrentPage(Number(p.num))}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentPage === Number(p.num) 
                      ? 'bg-[#2c1d0e] w-6' 
                      : 'bg-[#b88d4b]/50 hover:bg-[#b88d4b]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages.length))}
              disabled={currentPage === pages.length}
              className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                currentPage === pages.length 
                  ? 'opacity-40 cursor-not-allowed bg-[#ebdcb9] text-[#5c4329]' 
                  : 'bg-[#ebdcb9] text-[#2c1d0e] hover:bg-[#b88d4b] hover:text-white'
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}