import React from 'react';
import { certifications } from '../../data/certifications';
import { Award, Compass } from 'lucide-react';

export default function Museum() {
  return (
    <div className="space-y-6 text-[#2c1d0e]">
      <p className="text-xs text-[#5c4329]">
        Exhibits, certifications, and academic milestones achieved along the journey.
      </p>

      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border-2 border-[#b88d4b] p-4 rounded-xl bg-[#f5efeb] relative shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-[#ebdcb9] text-[#b88d4b]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-sm">{cert.title}</h4>
                  <p className="text-xs text-[#5c4329]">{cert.issuer} • {cert.date}</p>
                  <p className="text-xs text-[#36220f] mt-2">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* Empty State / Placeholder Note */}
      <div className="p-6 border-2 border-dashed border-[#b88d4b]/60 rounded-xl text-center bg-[#ebdcb9]/20">
        <Compass className="w-8 h-8 text-[#b88d4b] mx-auto mb-2 opacity-60" />
        <p className="font-handwriting text-xl text-[#5c4329]">More discoveries coming soon...</p>
        <p className="text-[11px] text-[#5c4329]/80 mt-1">
          New certifications and hackathon exhibits will be showcased here as they are unlocked.
        </p>
      </div>
    </div>
  );
}