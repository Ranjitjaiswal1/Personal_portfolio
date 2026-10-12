import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, skills, experience, education, certifications } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] glass-panel bg-[#090d24]/95 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Ranjit_Kumar_Jaiswal_Resume.pdf
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30 uppercase">
                  Verified PDF
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Frontend Engineer & Software Testing Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Ranjit_Kumar_Jaiswal_Resume.pdf"
              download="Ranjit_Kumar_Jaiswal_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href="/Ranjit_Kumar_Jaiswal_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              title="Open raw PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200">
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
              {personal.name.toUpperCase()}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mt-1">
              {personal.title}
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-xs font-mono text-slate-400">
              <span>Phone: {personal.phone}</span>
              <span>•</span>
              <span>Email: {personal.email}</span>
              <span>•</span>
              <span>GitHub: github.com/ranjitjaiswal321</span>
              <span>•</span>
              <span>Location: {personal.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2 pb-1 border-b border-slate-800">
              Professional Summary
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3 pb-1 border-b border-slate-800">
              Key Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">Frontend Engineering:</strong>
                <span className="text-slate-300">React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux Toolkit</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">QA & Test Automation:</strong>
                <span className="text-slate-300">Cypress, Playwright, Selenium WebDriver, Jest, PyTest, Postman REST API, Manual Testing</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">Programming Languages:</strong>
                <span className="text-slate-300">C++, Python, JavaScript, TypeScript, Object-Oriented Design, Data Structures</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">Methodologies & CI/CD:</strong>
                <span className="text-slate-300">Git & GitHub, Jira, TestRail, GitHub Actions Automated Pipelines, Agile / Scrum</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-4 pb-1 border-b border-slate-800 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </h4>
            <div className="space-y-4">
              {experience.map((job, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white text-sm">{job.role} — <span className="text-cyan-400">{job.company}</span></span>
                    <span className="text-xs font-mono text-slate-400">{job.period} | {job.location}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">{job.description}</p>
                  <ul className="space-y-1">
                    {job.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-400 flex items-start gap-1.5">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2 pb-1 border-b border-slate-800 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h4>
              {education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-xs">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-cyan-400 text-[11px] font-mono mt-0.5">{edu.institution} ({edu.period})</div>
                  <p className="text-slate-400 mt-1 text-[11px]">{edu.highlights}</p>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2 pb-1 border-b border-slate-800 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Certifications</span>
              </h4>
              <div className="space-y-1.5 text-xs">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium block">{cert.title}</span>
                      <span className="text-[11px] text-slate-400">{cert.issuer}</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>Official Resume Document for Ranjit Kumar Jaiswal</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium transition-all"
            >
              Close Preview
            </button>
            <a
              href="/Ranjit_Kumar_Jaiswal_Resume.pdf"
              download="Ranjit_Kumar_Jaiswal_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
