import React from 'react';
import { Box, Code2, ShieldCheck, Globe2, Sparkles, User, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      desc: "Architecting modular, highly responsive, and accessible client interfaces with React, modern JavaScript (ES6+), and Tailwind CSS for exceptional user experiences.",
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-400"
    },
    {
      icon: ShieldCheck,
      title: "Software Testing & QA",
      desc: "Executing comprehensive automated and manual testing strategies using Cypress, Playwright, Selenium, Jest, and Postman to ensure zero critical defects in production.",
      color: "from-purple-500 to-indigo-600",
      accent: "text-purple-400"
    },
    {
      icon: Box,
      title: "3D & Interactive Web",
      desc: "Crafting captivating WebGL and Three.js 3D web environments with fluid Framer Motion micro-interactions and strict performance optimization.",
      color: "from-pink-500 to-rose-600",
      accent: "text-pink-400"
    }
  ];

  return (
    <section id="about" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Seamless Frontend & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Bulletproof Quality Assurance</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {personal.bio}
          </p>
        </div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
              >
                {/* Glow accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color}`} />
                
                <div className="w-14 h-14 rounded-2xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:border-cyan-500/50 transition-all">
                  <Icon className={`w-7 h-7 ${pillar.accent}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Location & Contact CTA Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Based in {personal.location}</h4>
              <p className="text-slate-400 text-xs sm:text-sm">Ready to contribute to innovative frontend teams & QA testing operations.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 text-cyan-300 font-semibold text-xs tracking-wider uppercase transition-all"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  );
}
