import React from 'react';
import { Cpu, Terminal, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Skills3D() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Arsenal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Toolkit</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Proficiency in modern Frontend Engineering, Software Testing & QA Automation, C++, Python, JavaScript, and CI/CD pipelines.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 border border-slate-800 hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  {category.category}
                </h3>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Verified Skillset
                </span>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs sm:text-sm font-medium">
                      <span className="text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-cyan-300">{skill.level}%</span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-2 w-full bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} shadow-sm transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Badges Marquee / Cloud */}
        <div className="mt-14 glass-panel rounded-2xl p-6 border border-slate-800/80 text-center">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-4">
            Additional Frameworks & Tooling
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "C++", "Python", "JavaScript", "HTML5", "CSS3", "React.js",
              "Cypress", "Selenium", "Playwright", "Jest", "Postman",
              "Tailwind CSS", "TypeScript", "Redux Toolkit", "Git", "GitHub Actions",
              "Jira", "TestRail", "Agile / Scrum", "REST APIs", "Vite"
            ].map((tool, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
