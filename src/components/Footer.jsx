import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050714]/90 backdrop-blur-xl pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Bio (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-sm">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {personal.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {personal.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Passionate about building responsive, modern user interfaces and engineering automated test pipelines that guarantee zero production defects.
            </p>
          </div>

          {/* Quick Navigation Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-300 uppercase tracking-widest font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-300 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels & Socials (Col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-slate-300 uppercase tracking-widest font-semibold">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-400">
              Have an opportunity or question? Feel free to reach out directly:
            </p>

            <div className="space-y-2 pt-1 text-xs sm:text-sm font-mono text-slate-300">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{socials.email}</span>
              </a>

              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{socials.phone} (WhatsApp)</span>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-400">Frontend & QA Engineer</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 text-slate-400 transition-all flex items-center justify-center group"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
