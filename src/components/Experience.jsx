import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Experience() {
  const [activeTab, setActiveTab] = useState('experience');
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience, Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Track record of engineered software quality, modern frontend applications, and academic foundations.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md max-w-full">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certificates</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="relative border-l-2 border-slate-800 ml-2 md:ml-32 space-y-10 pl-5 md:pl-10 animate-in fade-in duration-300">
            {experience.map((job, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[27px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#050714] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_12px_#00f0ff] transition-all duration-300 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-black" />
                </div>

                <div className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {job.role}
                      </h3>
                      <div className="text-base font-semibold text-cyan-400 mt-0.5">
                        {job.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                    {job.description}
                  </p>

                  {job.achievements && (
                    <div className="mt-4 space-y-2">
                      {job.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 border border-slate-800 hover:border-cyan-400/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <div className="text-base font-semibold text-cyan-400 mt-0.5">{edu.institution}</div>
                  </div>
                  <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">{edu.details}</p>
                <div className="mt-4 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 w-fit">
                  ★ {edu.highlights}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto animate-in fade-in duration-300">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-purple-500/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 pb-3 border-b border-slate-800">
                  <span>{cert.issuer}</span>
                  <span className="text-cyan-300">{cert.date}</span>
                </div>
                <div className="text-xs text-slate-300">
                  <strong>Focus:</strong> {cert.skills}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
