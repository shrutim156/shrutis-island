import React from 'react';
import { socialLinks } from '../../data/links';
import { Mail, Github, Linkedin, FileText, Send } from 'lucide-react';

export default function SatelliteStation() {
  return (
    <div className="space-y-6 text-[#2c1d0e]">
      <p className="text-xs text-[#5c4329]">
        Communication station online. Reach out or connect across signals below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a
          href={`mailto:${socialLinks.email}`}
          className="p-3.5 border-2 border-[#b88d4b] rounded-xl bg-[#f5efeb] hover:bg-[#ebdcb9] transition flex items-center gap-3 cursor-pointer"
        >
          <Mail className="w-5 h-5 text-[#b88d4b]" />
          <div>
            <div className="font-serif-title text-xs font-bold">Email</div>
            <div className="text-xs text-[#5c4329] truncate">{socialLinks.email}</div>
          </div>
        </a>

        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 border-2 border-[#b88d4b] rounded-xl bg-[#f5efeb] hover:bg-[#ebdcb9] transition flex items-center gap-3 cursor-pointer"
        >
          <Github className="w-5 h-5 text-[#b88d4b]" />
          <div>
            <div className="font-serif-title text-xs font-bold">GitHub</div>
            <div className="text-xs text-[#5c4329]">Code Repositories</div>
          </div>
        </a>

        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 border-2 border-[#b88d4b] rounded-xl bg-[#f5efeb] hover:bg-[#ebdcb9] transition flex items-center gap-3 cursor-pointer"
        >
          <Linkedin className="w-5 h-5 text-[#b88d4b]" />
          <div>
            <div className="font-serif-title text-xs font-bold">LinkedIn</div>
            <div className="text-xs text-[#5c4329]">Professional Profile</div>
          </div>
        </a>

        <a
          href={socialLinks.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 border-2 border-[#b88d4b] rounded-xl bg-[#f5efeb] hover:bg-[#ebdcb9] transition flex items-center gap-3 cursor-pointer"
        >
          <FileText className="w-5 h-5 text-[#b88d4b]" />
          <div>
            <div className="font-serif-title text-xs font-bold">Resume</div>
            <div className="text-xs text-[#5c4329]">Download PDF</div>
          </div>
        </a>
      </div>

      {/* Simple Form Preview Ready for Backend hookup */}
      <div className="pt-2">
        <h4 className="font-serif-title text-xs font-bold text-[#b88d4b] uppercase mb-2">Send a Direct Signal</h4>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2.5 rounded-lg border border-[#b88d4b] bg-[#f5efeb] text-xs focus:outline-none focus:ring-1 focus:ring-[#b88d4b]"
          />
          <textarea
            rows={3}
            placeholder="Your Message..."
            className="w-full p-2.5 rounded-lg border border-[#b88d4b] bg-[#f5efeb] text-xs focus:outline-none focus:ring-1 focus:ring-[#b88d4b]"
          />
          <button
            type="submit"
            className="w-full py-2.5 bg-[#b88d4b] text-[#f5efeb] font-bold text-xs rounded-lg hover:bg-[#a37d57] transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}