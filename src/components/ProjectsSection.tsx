import { FC, memo } from 'react';
import { Project } from '../data/projects';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => (
  <section className="mb-16 animate-fadeIn">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">My Digital Creations</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card bg-white/5 border border-white/10 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 group overflow-hidden"
        >
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="project-title text-2xl font-bold text-green-400 mb-3">{project.title}</h3>
          <p className="project-description text-gray-300 mb-6 leading-relaxed">{project.description}</p>
          <div className="project-footer flex justify-between items-center">
            <span className="project-stars text-yellow-400 font-bold flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {project.stars}
            </span>
            <a
              href={project.link}
              className="project-link text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 font-bold py-2 px-4 rounded-lg border-2 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore →
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default memo(ProjectsSection);
