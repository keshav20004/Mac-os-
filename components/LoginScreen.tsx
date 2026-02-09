import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Power, Wifi } from 'lucide-react';
import { USER_AVATAR } from '../constants';

export const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Ref to track if component is mounted to prevent state updates after unmount
  const isMounted = React.useRef(true);
  
  useEffect(() => {
      return () => { isMounted.current = false; };
  }, []);

  const handleLogin = () => {
    if (isLoading) return;
    setIsLoading(true);
    
    setTimeout(() => {
      if (isMounted.current) {
        onLogin();
      }
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center text-white"
    >
      {/* Overlay to darken wallpaper slightly */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md -z-10" />

      {/* Top Bar Status (minimal) */}
      <div className="absolute top-4 right-8 flex gap-4 text-white/80">
         <Wifi size={20} />
         <div className="text-sm font-medium">100%</div>
      </div>

      <div className="flex flex-col items-center gap-6 mt-[-50px]">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative mb-2">
              <img src={USER_AVATAR} alt="User" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-600 flex items-center justify-center -z-10">
                  <User size={40} />
              </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white drop-shadow-md tracking-wide">Keshav Bajpai</h2>

          <div className="relative group w-full flex justify-center">
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="Enter Password"
                  className="pl-4 pr-10 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-xl text-sm text-white placeholder-white/50 outline-none focus:bg-white/30 transition-all w-56 text-center shadow-lg"
                  autoFocus
              />
              <button 
                  onClick={handleLogin}
                  className={`absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all ${password || true ? 'opacity-100 bg-white/30 hover:bg-white/50 cursor-pointer' : 'opacity-0'}`}
                  style={{ right: 'calc(50% - 105px)' }} // Position inside input
              >
                  {isLoading ? (
                      <div className="w-3 h-3 border-2 border-white/80 border-t-transparent rounded-full animate-spin" />
                  ) : (
                      <ArrowRight size={14} className="text-white" />
                  )}
              </button>
          </div>
          
          <div className="mt-4 opacity-60">
               <p className="text-xs font-medium tracking-wide">Enter any password to log in</p>
          </div>
      </div>
      
      {/* Bottom controls */}
      <div className="absolute bottom-10 flex flex-col items-center gap-6 opacity-70">
          <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all">
                      <Power size={18} />
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase">Shut Down</span>
              </div>
               <div className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all">
                      <div className="w-4 h-4 border border-white rounded-full border-t-transparent animate-[spin_3s_linear_infinite]" />
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase">Restart</span>
              </div>
          </div>
      </div>
    </motion.div>
  );
};