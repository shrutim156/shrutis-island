import React from 'react';
import { projects } from '../../data/projects';
import { Github, ExternalLink, Anchor } from 'lucide-react';

export default function ProjectHarbor() {
  return (
    <div className="space-y-6 text-[#2c1d0e]">
      <p className="text-xs text-[#5c4329]">
        Projects docked at the harbor. Easily customizable via project data configurations.
      </p>

      <div className="space-y-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="border-2 border-[#b88d4b] rounded-xl overflow-hidden bg-[#f5efeb] shadow-md flex flex-col md:flex-row"
          >
            {/* Visual Ship/Harbor Image */}
            <div className="md:w-2/5 bg-[#ebdcb9] relative min-h-[160px]">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#2c1d0e] text-[#ebdcb9] text-[10px] font-serif-title px-2 py-0.5 rounded">
                {proj.type}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-4 md:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-serif-title font-bold text-base">{proj.title}</h3>
                  <span className="text-[10px] bg-amber-200 border border-amber-400 text-amber-900 px-2 py-0.5 rounded-full font-medium">
                    {proj.status}
                  </span>
                </div>
                <p className="text-xs text-[#5c4329] mb-2">{proj.subtitle}</p>
                <p className="text-xs text-[#36220f] mb-3">{proj.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {proj.technologies.map((tech, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 bg-[#ebdcb9] text-[#2c1d0e] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2 border-t border-[#b88d4b]/20">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#2c1d0e] hover:text-[#b88d4b] transition"
                >
                  <Github className="w-3.5 h-3.5" /> Source Code
                </a>
                {proj.liveDemo && proj.liveDemo !== '#' && (
                  <a
                    href={proj.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#b88d4b] hover:text-[#2c1d0e] transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}