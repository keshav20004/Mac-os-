import React from 'react';
import { EXPERIENCE } from '../../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceApp: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#0f172a] text-white overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
            <Briefcase className="text-green-400" size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Career Journey</h2>
            <p className="text-gray-400">Professional and academic milestones</p>
          </div>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 space-y-12">
          {EXPERIENCE.map((item, idx) => (
            <div key={item.id} className="relative pl-10 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-[#0f172a] shadow-[0_0_10px_rgba(34,197,94,0.5)] group-hover:scale-125 transition-transform" />
              
              <div className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-green-500/30 transition-all hover:bg-white/[0.07] shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-green-400">{item.role}</h3>
                    <div className="text-lg font-medium text-white/90">{item.company}</div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/50 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};