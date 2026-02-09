import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Search, Command } from 'lucide-react';

export const MenuBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric' 
  });

  return (
    <div className="h-8 w-full bg-black/20 backdrop-blur-xl text-white/90 flex items-center justify-between px-4 text-xs font-medium fixed top-0 z-50 border-b border-white/5 select-none">
      <div className="flex items-center gap-4">
        <div className="hover:bg-white/10 p-1 rounded cursor-pointer">
          <svg className="w-[14px] h-[14px] text-white fill-current" viewBox="0 0 24 24">
             <path d="M17.056 12.56c-.035 1.904 1.649 2.535 1.725 2.569-1.407 2.059-2.898 2.414-3.57 2.443-1.36.052-2.67-.817-3.37-1.11-.703-.292-1.815.867-2.986.867-3.085 0-5.186-2.597-5.186-5.467 0-3.36 2.083-5.06 4.093-5.06 1.085 0 2.128.666 2.784.666.657 0 1.834-.78 3.37-.62 1.173.124 2.316.793 2.96 1.74-.083.053-1.782 1.044-1.82 2.973zm-2.32-6.59c.704-.852 1.18-2.028 1.047-3.21-1.018.043-2.257.683-2.99 1.56-.649.767-1.217 2.007-1.065 3.142 1.135.088 2.29-.62 3.007-1.492z" />
          </svg>
        </div>
        <div className="hidden md:flex gap-4">
          <span className="font-bold cursor-pointer hover:text-white">Keshav Portfolio</span>
          <span className="cursor-pointer hover:text-white">File</span>
          <span className="cursor-pointer hover:text-white">Edit</span>
          <span className="cursor-pointer hover:text-white">View</span>
          <span className="cursor-pointer hover:text-white">Go</span>
          <span className="cursor-pointer hover:text-white">Window</span>
          <span className="cursor-pointer hover:text-white">Help</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:text-white">
                <Battery size={16} />
                <span>100%</span>
            </div>
            <div className="cursor-pointer hover:text-white">
                <Wifi size={16} />
            </div>
            <div className="cursor-pointer hover:text-white">
                <Search size={14} />
            </div>
        </div>
        <div className="cursor-pointer hover:text-white">
            <Command size={14} className="inline mr-1"/>
        </div>
        <span className="cursor-default">{formattedTime}</span>
      </div>
    </div>
  );
};