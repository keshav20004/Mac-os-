import React from 'react';
import { MenuBar } from './MenuBar';
import { Dock } from './Dock';
import { Window } from './Window';
import { useStore } from '../store/useStore';
import { AppId, WindowState } from '../types';
import { AboutApp } from './apps/AboutApp';
import { ProjectsApp } from './apps/ProjectsApp';
import { SkillsApp } from './apps/SkillsApp';
import { TerminalApp } from './apps/TerminalApp';
import { ResumeApp } from './apps/ResumeApp';
import { ExperienceApp } from './apps/ExperienceApp';
import { ContactApp } from './apps/ContactApp';
import { FinderApp } from './apps/FinderApp';
import { FileText, Folder } from 'lucide-react';

// Simple placeholder for other apps
const PlaceholderApp = ({ title }: { title: string }) => (
    <div className="h-full w-full flex items-center justify-center text-white">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-400">This application is currently under construction.</p>
        </div>
    </div>
);

const getComponent = (id: string) => {
    switch (id) {
        case AppId.ABOUT: return <AboutApp />;
        case AppId.PROJECTS: return <ProjectsApp />;
        case AppId.SKILLS: return <SkillsApp />;
        case AppId.TERMINAL: return <TerminalApp />;
        case AppId.RESUME: return <ResumeApp />;
        case AppId.EXPERIENCE: return <ExperienceApp />;
        case AppId.CONTACT: return <ContactApp />;
        case AppId.FINDER: return <FinderApp />;
        default: return <PlaceholderApp title={id.toUpperCase()} />;
    }
};

export const Desktop: React.FC = () => {
  const { windows = {}, openWindow } = useStore();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <MenuBar />
      
      {/* Desktop Icons */}
      <div className="absolute top-12 right-4 flex flex-col gap-4 items-end z-0">
        <DesktopIcon label="Resume.pdf" icon={FileText} onClick={() => openWindow(AppId.RESUME)} />
        <DesktopIcon label="Projects" icon={Folder} onClick={() => openWindow(AppId.PROJECTS)} />
        <DesktopIcon label="Macintosh HD" icon={Folder} onClick={() => openWindow(AppId.FINDER)} />
      </div>

      {/* Window Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Object.values(windows || {}).map((win: WindowState) => (
           win && !win.isMinimized && (
            <div key={win.id} className="pointer-events-auto">
              <Window window={win}>
                {getComponent(win.id)}
              </Window>
            </div>
           )
        ))}
      </div>

      <Dock />
    </div>
  );
};

const DesktopIcon = ({ label, icon: Icon, onClick }: { label: string, icon: any, onClick: () => void }) => (
  <div 
    className="flex flex-col items-center gap-1 w-20 group cursor-pointer"
    onClick={onClick}
    onDoubleClick={onClick}
  >
    <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors shadow-lg">
        <Icon className="text-blue-400 drop-shadow-md" size={32} />
    </div>
    <span className="text-white text-xs font-medium drop-shadow-md px-2 py-0.5 rounded bg-black/0 group-hover:bg-blue-600 transition-colors text-center break-words w-full">{label}</span>
  </div>
);