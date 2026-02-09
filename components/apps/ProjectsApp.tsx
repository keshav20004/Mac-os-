import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsApp: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Web' | 'Data' | 'Mobile'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="h-full w-full flex flex-col text-white bg-[#0f172a]">
      {/* Filter Bar */}
      <div className="p-4 border-b border-white/10 bg-black/20 flex gap-2 overflow-x-auto scrollbar-hide">
        {['All', 'AI/ML', 'Web', 'Mobile', 'Data'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              filter === cat 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="h-44 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
                  <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30 font-bold uppercase tracking-wider shrink-0">{project.category}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] text-blue-200 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                   {project.demoUrl && (
                     <a 
                       href={project.demoUrl} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg active:scale-95"
                     >
                       <ExternalLink size={14} /> Demo
                     </a>
                   )}
                   {project.githubUrl && (
                     <a 
                       href={project.githubUrl} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-2.5 rounded-lg text-sm font-semibold transition-all border border-white/5 active:scale-95"
                     >
                       <Github size={14} /> Code
                     </a>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-500 italic">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};