import React from 'react';
import { certifications } from '../../data/certifications';
import { Award, Compass, ExternalLink } from 'lucide-react';

export default function Museum() {

  const openCertificate = (file) => {
    window.open(file, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6 text-[#2c1d0e]">

      <p className="text-xs text-[#5c4329]">
        Exhibits, certifications, and achievements collected along the journey.
      </p>

      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {certifications.map((cert) => (
            <button
              key={cert.id}
              onClick={() => openCertificate(cert.file)}
              className="
                group
                text-left
                border-2 border-[#b88d4b]
                p-5
                rounded-xl
                bg-[#f5efeb]
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
                hover:bg-[#f8f0e4]
                cursor-pointer
              "
            >

              {/* Certificate Icon */}
              <div className="flex items-center justify-between mb-4">

                <div className="
                  p-3
                  rounded-full
                  bg-[#ebdcb9]
                  text-[#b88d4b]
                  group-hover:scale-110
                  transition-transform duration-300
                ">
                  <Award className="w-6 h-6" />
                </div>

                <ExternalLink
                  className="
                    w-4 h-4
                    text-[#8d6b3e]
                    opacity-60
                    group-hover:opacity-100
                    transition-opacity
                  "
                />

              </div>

              {/* Certificate Information */}
              <div>

                <h4 className="font-serif-title font-bold text-sm text-[#2c1d0e]">
                  {cert.title}
                </h4>

                <p className="text-xs text-[#5c4329] mt-1">
                  {cert.issuer} • {cert.date}
                </p>

                <p className="text-xs text-[#36220f] mt-3 leading-relaxed">
                  {cert.description}
                </p>

              </div>

              {/* Click hint */}
              <p className="
                text-[11px]
                text-[#b88d4b]
                mt-4
                font-medium
                group-hover:underline
              ">
                Click to view certificate →
              </p>

            </button>
          ))}

        </div>
      ) : null}


      {/* Empty State / Future Certificates */}

      <div className="
        p-6
        border-2
        border-dashed
        border-[#b88d4b]/60
        rounded-xl
        text-center
        bg-[#ebdcb9]/20
      ">

        <Compass className="
          w-8 h-8
          text-[#b88d4b]
          mx-auto
          mb-2
          opacity-60
        " />

        <p className="
          font-handwriting
          text-xl
          text-[#5c4329]
        ">
          More discoveries coming soon...
        </p>

        <p className="
          text-[11px]
          text-[#5c4329]/80
          mt-1
        ">
          New certifications and achievements will be showcased here as they are unlocked.
        </p>

      </div>

    </div>
  );
}