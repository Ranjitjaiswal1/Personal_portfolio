import React, { useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers } from 'lucide-react';

export function ProjectCard3D({ project, onSelectProject }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = -((y - centerY) / centerY) * 10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const colorClasses = {
    cyan: {
      border: 'hover:border-cyan-400/50',
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]',
    },
    purple: {
      border: 'hover:border-purple-400/50',
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
    },
    pink: {
      border: 'hover:border-pink-400/50',
      badge: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]',
    },
    emerald: {
      border: 'hover:border-emerald-400/50',
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    }
  };

  const theme = colorClasses[project.color] || colorClasses.cyan;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={`group relative rounded-2xl glass-card overflow-hidden transition-all duration-300 ${theme.border} ${theme.glow} flex flex-col h-full`}
    >
      {/* Glare effect */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
          opacity: glarePos.opacity,
        }}
      />

      {/* Project Image Preview with Overlay */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d24] via-transparent to-black/30" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${theme.badge}`}>
            {project.category}
          </span>
        </div>

        {/* Metrics Pill */}
        {project.metrics && (
          <div className="absolute bottom-3 left-4 z-20 text-[11px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/80 backdrop-blur-sm">
            {project.metrics}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2.5 text-slate-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectProject && onSelectProject(project)}
              className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 tracking-wider uppercase group/link"
            >
              <span>Case Study</span>
              <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
            title="View Source Code"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
