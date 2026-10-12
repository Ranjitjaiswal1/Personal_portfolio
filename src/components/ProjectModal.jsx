import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, Layers, Cpu, Sparkles, Target, Compass } from 'lucide-react';

export function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] glass-panel bg-[#090d24]/95 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">Project Case Study</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Project Preview Banner */}
          <div className="relative h-56 sm:h-72 w-full rounded-xl overflow-hidden border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d24] via-transparent to-black/20" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-300 bg-slate-950/85 px-3 py-1.5 rounded-lg border border-cyan-500/30 backdrop-blur-md">
                ★ {project.metrics || "Production Verified"}
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features & Platform Capabilities (if available) */}
          {project.keyFeatures && (
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Key Features & Platform Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">{feat.label}</span>
                      <span className="text-slate-400 text-[11px] leading-relaxed">{feat.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* QA & Frontend Engineering Architecture */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Quality Assurance & Engineering Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {project.qaHighlights ? (
                project.qaHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>{highlight.label}:</strong> {highlight.detail}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Test Automation:</strong> Automated regression & unit test coverage to prevent defect leakage.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>UI Performance:</strong> Fully responsive mobile-first architecture tested on Chrome, Safari & Firefox.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>API Integrity:</strong> Endpoint contract testing and payload validation with Postman.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>CI/CD Integration:</strong> Continuous test verification pipeline running before each deploy.</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Technical Learning & Objectives (if available) */}
          {(project.technicalLearning || project.projectObjective) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.projectObjective && (
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5">
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" />
                    <span>Project Objective</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.projectObjective}
                  </p>
                </div>
              )}
              {project.technicalLearning && (
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5">
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Technical & Product Learning</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.technicalLearning}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Future Scope (if available) */}
          {project.futureScope && (
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Future Scope & Platform Roadmap</span>
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.futureScope.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
              Technologies & Frameworks Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Launch Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
