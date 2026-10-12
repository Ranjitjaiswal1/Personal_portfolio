import React from 'react';
import { ArrowRight, Sparkles, Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Profile Avatar - Minimalist & Crisp */}
        <div className="relative mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-cyan-400/40 to-transparent border border-white/10 shadow-2xl">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>
          <span 
            className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#050714] shadow-[0_0_8px_#10b981]" 
            title="Available for opportunities" 
          />
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-medium text-cyan-300 tracking-wide font-mono">
            {personal.statusBadge}
          </span>
        </div>

        {/* Main Headline - Clean, Bold, Impactful */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.15] text-white">
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Modern Frontend</span> & Quality Software
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
          Hi, I'm <strong className="text-white font-medium">{personal.name}</strong> — {personal.title}. {personal.tagline}
        </p>

        {/* Clean Balanced CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-slate-800/80 font-medium text-sm transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:border-slate-500 hover:text-white font-medium text-sm transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Quick Links - Sleek and subtle */}
        <div className="mt-8 flex items-center gap-3 text-slate-400">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-400/40 hover:text-emerald-400 transition-colors"
            title="Chat on WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.socials.email}`}
            className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Clean Stats Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
          {personal.stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl p-4 bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Radial Backdrops */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
}
