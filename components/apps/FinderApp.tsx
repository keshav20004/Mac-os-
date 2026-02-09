import React, { useState } from 'react';
import { 
  Folder, FileText, User, Code, Brain, 
  Briefcase, ChevronLeft, ChevronRight, Search, 
  Monitor, Clock, Download, Tag, FileCode, FileType
} from 'lucide-react';
import { useStore } from '../../store/useStore';
import { AppId } from '../../types';

export const FinderApp: React.FC = () => {
  const { openWindow } = useStore();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'recents' | 'docs' | 'apps'>('recents');

  const folders = [
    { id: AppId.ABOUT, name: 'About.me', icon: User, color: 'text-blue-400', type: 'app' },
    { id: AppId.PROJECTS, name: 'Projects', icon: Folder, color: 'text-blue-500', type: 'folder' },
    { id: AppId.SKILLS, name: 'Skills.lib', icon: Brain, color: 'text-yellow-500', type: 'app' },
    { id: AppId.EXPERIENCE, name: 'Experience', icon: Briefcase, color: 'text-green-500', type: 'app' },
    { id: AppId.RESUME, name: 'Resume.pdf', icon: FileText, color: 'text-red-400', type: 'file' },
    { id: AppId.TERMINAL, name: 'Terminal.app', icon: Monitor, color: 'text-gray-400', type: 'app' },
  ];

  const extraFiles = [
    { id: 'research', name: 'RAG_Research.txt', icon: FileText, color: 'text-gray-300', type: 'file' },
    { id: 'models', name: 'Model_Weights.bin', icon: FileCode, color: 'text-purple-400', type: 'file' },
    { id: 'notes', name: 'Work_Notes.doc', icon: FileType, color: 'text-blue-300', type: 'file' },
  ];

  const sidebarItems = [
    { id: 'recents', name: 'Recents', icon: Clock },
    { id: 'apps', name: 'Applications', icon: Monitor },
    { id: 'desktop', name: 'Desktop', icon: Monitor },
    { id: 'docs', name: 'Documents', icon: Folder },
    { id: 'downloads', name: 'Downloads', icon: Download },
  ];

  const displayedItems = currentView === 'docs' 
    ? extraFiles 
    : (currentView === 'apps' ? folders.filter(f => f.type === 'app') : [...folders, ...extraFiles]);

  return (
    <div className="h-full w-full flex flex-col bg-[#1e1e1e] text-white select-none">
      {/* Toolbar */}
      <div className="h-12 border-b border-white/5 flex items-center px-4 gap-6 bg-white/5">
        <div className="flex gap-4">
          <ChevronLeft size={18} className="text-gray-600 cursor-pointer hover:text-white" />
          <ChevronRight size={18} className="text-gray-600 cursor-pointer hover:text-white" />
        </div>
        <div className="font-bold text-sm capitalize">{currentView}</div>
        <div className="ml-auto relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-white/10 border border-white/10 rounded-md py-1 pl-8 pr-3 text-xs w-48 outline-none focus:border-blue-500/50"
          />
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-44 bg-black/20 border-r border-white/5 p-3 space-y-6 overflow-y-auto">
          <div>
            <div className="text-[10px] font-bold text-gray-500 uppercase px-2 mb-2 tracking-wider">Favorites</div>
            <div className="space-y-0.5">
              {sidebarItems.map(item => (
                <div 
                  key={item.id} 
                  onClick={() => setCurrentView(item.id as any)}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-default text-xs transition-colors ${
                    currentView === item.id ? 'bg-white/15 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                  }`}
                >
                  <item.icon size={14} className={currentView === item.id ? "text-blue-400" : "text-gray-500"} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-gray-500 uppercase px-2 mb-2 tracking-wider">Tags</div>
            <div className="space-y-2 px-2">
              <div className="flex items-center gap-2 text-xs cursor-pointer hover:text-gray-300"><Tag size={10} className="fill-red-500 text-red-500" /> AI Project</div>
              <div className="flex items-center gap-2 text-xs cursor-pointer hover:text-gray-300"><Tag size={10} className="fill-blue-500 text-blue-500" /> Work</div>
              <div className="flex items-center gap-2 text-xs cursor-pointer hover:text-gray-300"><Tag size={10} className="fill-yellow-500 text-yellow-500" /> Important</div>
            </div>
          </div>
        </div>

        {/* File Grid */}
        <div className="flex-1 p-6 overflow-y-auto bg-black/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {(displayedItems || []).map(item => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                onDoubleClick={() => {
                   const isApp = Object.values(AppId).includes(item.id as AppId);
                   if (isApp) {
                     openWindow(item.id as AppId);
                   }
                }}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors cursor-default group ${
                  selectedItem === item.id ? 'bg-blue-600/40' : 'hover:bg-white/5'
                }`}
              >
                <div className="relative">
                    <item.icon size={44} className={`${item.color} drop-shadow-lg group-hover:scale-110 transition-transform`} />
                </div>
                <span className="text-[11px] font-medium text-center break-words w-full px-1 leading-tight">{item.name}</span>
              </div>
            ))}
          </div>
          
          {(!displayedItems || displayedItems.length === 0) && (
             <div className="h-full flex items-center justify-center text-gray-500 text-sm italic">
               This folder is empty
             </div>
          )}
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="h-6 border-t border-white/5 bg-white/5 flex items-center px-4 text-[10px] text-gray-400 justify-between">
        <div className="flex gap-4">
           <span>{(displayedItems || []).length} items</span>
           <span>1.2 GB available</span>
        </div>
        <div className="font-medium">Macintosh HD</div>
      </div>
    </div>
  );
};