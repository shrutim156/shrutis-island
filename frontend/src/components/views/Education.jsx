import React from 'react';
import educationData from '../../data/education';
import { GraduationCap, Trophy, Code2, ExternalLink, FileText } from 'lucide-react';

export default function Education() {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openCertificate = (file) => {
    window.open(file, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6 text-[#2c1d0e]">

      {/* ================= BASIC INFORMATION ================= */}
      <div>
        <h4 className="font-serif-title font-bold text-sm tracking-wide text-[#b88d4b] uppercase mb-3 flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          Basic Information
        </h4>

        <div className="border-2 border-[#b88d4b] p-5 rounded-xl bg-[#f5efeb] shadow-sm">
          <div className="flex items-start justify-between gap-4">

            <div>
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#b88d4b] text-[#f5efeb] font-serif text-xs font-bold mb-2">
                {educationData.status}
              </span>

              <h3 className="text-xl font-serif-title font-bold">
                {educationData.degree}
              </h3>

              <p className="font-semibold text-sm text-[#5c4329] mt-1">
                {educationData.major}
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs text-[#5c4329] block">
                CGPA
              </span>

              <span className="font-serif-title font-bold text-lg text-[#b88d4b]">
                {educationData.cgpa}
              </span>
            </div>

          </div>

          <p className="text-xs text-[#5c4329] mt-4 border-t border-[#b88d4b]/20 pt-3">
            🏫 {educationData.institution}
          </p>

          <p className="text-xs text-[#5c4329] mt-1">
            📍 {educationData.location}
          </p>
        </div>
      </div>


      {/* ================= HACKATHONS ================= */}
      <div>
        <h4 className="font-serif-title font-bold text-sm tracking-wide text-[#b88d4b] uppercase mb-3 flex items-center gap-2">
          <Trophy className="w-4 h-4" />
          Hackathons
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {educationData.hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="border-2 border-[#b88d4b]/60 rounded-xl p-4 bg-[#ebdcb9]/30 hover:bg-[#ebdcb9]/60 transition"
            >
              <div className="flex items-start justify-between gap-3">

                <div>
                  <h5 className="font-serif-title font-bold text-sm">
                    {hackathon.name}
                  </h5>

                  <p className="text-[11px] text-[#5c4329] mt-1">
                    {hackathon.year}
                  </p>
                </div>

                <Trophy className="w-5 h-5 text-[#b88d4b] shrink-0" />

              </div>

              <p className="text-xs text-[#36220f] mt-3">
                {hackathon.description}
              </p>

              <button
                onClick={() => openCertificate(hackathon.certificate)}
                className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#b88d4b] text-[#f5efeb] text-[11px] font-semibold hover:opacity-90 transition"
              >
                <FileText className="w-3.5 h-3.5" />
                View Certificate
              </button>
            </div>
          ))}

        </div>
      </div>


      {/* ================= CODING PROFILES ================= */}
      <div>
        <h4 className="font-serif-title font-bold text-sm tracking-wide text-[#b88d4b] uppercase mb-3 flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          Coding Profiles
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          {educationData.codingProfiles.map((profile) => (
            <button
              key={profile.name}
              onClick={() => openLink(profile.url)}
              className="group border-2 border-[#b88d4b]/50 rounded-xl p-4 bg-[#f5efeb] hover:bg-[#ebdcb9] transition text-left"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h5 className="font-serif-title font-bold text-sm">
                    {profile.name}
                  </h5>

                  <p className="text-[10px] text-[#5c4329] mt-1">
                    View Profile
                  </p>
                </div>

                <ExternalLink className="w-4 h-4 text-[#b88d4b] group-hover:translate-x-0.5 transition" />

              </div>
            </button>
          ))}

        </div>
      </div>

    </div>
  );
}