import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Github, ExternalLink, ArrowLeft, Clock } from 'lucide-react';

export default function ProjectHarbor() {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- DETAILED RESEARCH LAB VIEW ---
  if (selectedProject) {
    return (
      <div className="space-y-6 text-[#2c1d0e]">
        {/* Back Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#b88d4b] hover:text-[#2c1d0e] transition mb-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Project Harbor
        </button>

        {/* Detailed Card Container */}
        <div className="border-2 border-[#b88d4b] rounded-xl overflow-hidden bg-[#f5efeb] shadow-md p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <span className="bg-[#2c1d0e] text-[#ebdcb9] text-[10px] font-serif-title px-2 py-0.5 rounded">
                {selectedProject.type}
              </span>
              <h2 className="font-serif-title font-bold text-xl mt-2">{selectedProject.title}</h2>
              <p className="text-xs text-[#5c4329]">{selectedProject.subtitle}</p>
            </div>
            <span className="text-[10px] bg-amber-200 border border-amber-400 text-amber-900 px-2 py-0.5 rounded-full font-medium">
              {selectedProject.status}
            </span>
          </div>

          {/* Overview & Problem/Solution */}
          <div className="space-y-2 bg-[#ebdcb9]/40 p-4 rounded-lg border border-[#b88d4b]/30">
            <h3 className="font-serif-title font-bold text-sm text-[#2c1d0e]">Overview</h3>
            <p className="text-xs text-[#36220f] leading-relaxed">{selectedProject.description}</p>
            {selectedProject.problem && (
              <p className="text-xs text-[#36220f] pt-1">
                <strong className="text-[#2c1d0e]">Problem:</strong> {selectedProject.problem}
              </p>
            )}
            {selectedProject.solution && (
              <p className="text-xs text-[#36220f]">
                <strong className="text-[#2c1d0e]">Solution:</strong> {selectedProject.solution}
              </p>
            )}
          </div>

          {/* Key Concepts */}
          {selectedProject.keyConcepts && (
            <div>
              <h4 className="text-[11px] font-serif-title font-bold uppercase text-[#5c4329] mb-1.5">Key Concepts</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.keyConcepts.map((concept, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#ebdcb9] text-[#2c1d0e] rounded border border-[#b88d4b]/30 font-medium">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Technologies */}
          <div>
            <h4 className="text-[11px] font-serif-title font-bold uppercase text-[#5c4329] mb-1.5">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.technologies.map((tech, idx) => (
                <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#ebdcb9] text-[#2c1d0e] rounded font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Render/Streamlit Note */}
          <div className="pt-4 border-t border-[#b88d4b]/20 space-y-3">
            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 bg-[#2c1d0e] text-[#ebdcb9] rounded-lg hover:bg-[#b88d4b] hover:text-[#0f0d0c] transition shadow-sm"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
              {selectedProject.liveDemo && selectedProject.liveDemo !== '#' && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 bg-[#b88d4b] text-[#f5efeb] rounded-lg hover:bg-[#2c1d0e] transition shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>

            {/* Note about hosting spin-up time */}
            {selectedProject.liveDemo && selectedProject.liveDemo !== '#' && (
              <div className="flex items-start gap-2 bg-amber-100/60 border border-amber-300 text-amber-900 p-2.5 rounded-lg text-[11px]">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
                <span>
                  <strong>Note:</strong> Since this app is hosted on free cloud tiers (Render/Streamlit), the live demo may take up to 30–50 seconds to load if it hasn't been accessed recently. Please allow a moment for the server to spin up!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- PROJECT LIST VIEW ---
  return (
    <div className="space-y-6 text-[#2c1d0e]">
      <p className="text-xs text-[#5c4329]">
        Projects docked at the harbor. Click on any project block to explore its complete research lab overview.
      </p>

      <div className="space-y-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="border-2 border-[#b88d4b] rounded-xl p-5 bg-[#f5efeb] shadow-sm cursor-pointer hover:border-[#2c1d0e] hover:bg-[#f3ece6] transition-all flex flex-col justify-between space-y-3"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-[#2c1d0e] text-[#ebdcb9] text-[10px] font-serif-title px-2 py-0.5 rounded">
                    {proj.type}
                  </span>
                  <span className="text-[10px] bg-amber-200 border border-amber-400 text-amber-900 px-2 py-0.5 rounded-full font-medium">
                    {proj.status}
                  </span>
                </div>
                <h3 className="font-serif-title font-bold text-base mt-1">{proj.title}</h3>
                <p className="text-xs text-[#5c4329]">{proj.subtitle}</p>
              </div>
            </div>

            <p className="text-xs text-[#36220f] line-clamp-2">{proj.description}</p>

            <div className="flex flex-wrap items-center justify-between pt-2 border-t border-[#b88d4b]/20 gap-2">
              <div className="flex flex-wrap gap-1">
                {proj.technologies.map((tech, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 bg-[#ebdcb9] text-[#2c1d0e] rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-[#b88d4b] hover:underline whitespace-nowrap">
                View Project Details →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}