import { FC, memo } from 'react';
import { Skill } from '../data/skills';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: FC<SkillsSectionProps> = ({ skills }) => (
  <section className="mb-16 animate-fadeIn">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">My Digital Arsenal</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-card bg-white/5 border border-white/10 rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 group"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="skill-name text-xl font-bold text-cyan-400 text-shadow-glow">{skill.name}</h3>
            <span className={`badge ${skill.badge} text-xs font-bold px-3 py-1 rounded-full ${
              skill.badge === 'advanced'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500'
                : skill.badge === 'intermediate'
                ? 'bg-gradient-to-r from-cyan-500 to-green-500'
                : skill.badge === 'rookie'
                ? 'bg-gradient-to-r from-green-500 to-yellow-500'
                : 'bg-gradient-to-r from-yellow-500 to-red-500'
            }`}>
              {skill.badge.charAt(0).toUpperCase() + skill.badge.slice(1)}
            </span>
          </div>

          <p className="text-gray-300 mb-6 text-sm leading-relaxed">{skill.description}</p>

          <div className="skill-bar bg-white/10 rounded-full h-3 mb-6">
            <div
              className="skill-progress bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full h-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>

          <div className="specializations flex flex-wrap gap-2">
            {skill.specializations.map((spec, specIndex) => (
              <span
                key={specIndex}
                className="bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30 hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-cyan-500/50 transition-all duration-300"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default memo(SkillsSection);
