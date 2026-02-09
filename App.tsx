import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Desktop } from './components/Desktop';
import { BootScreen } from './components/BootScreen';
import { LoginScreen } from './components/LoginScreen';
import { Wallpaper } from './components/Wallpaper';
import { useStore } from './store/useStore';
import { AppId } from './types';

const App: React.FC = () => {
  const [bootState, setBootState] = useState<'boot' | 'login' | 'desktop'>('boot');
  const openWindow = useStore((state) => state.openWindow);

  const handleLogin = () => {
    setBootState('desktop');
    // Open About Me on load after a short delay
    setTimeout(() => {
        openWindow(AppId.ABOUT);
    }, 800);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none bg-black">
        {/* Global Wallpaper that persists behind Login and Desktop */}
        <Wallpaper />
        
        <AnimatePresence mode="wait">
            {bootState === 'boot' && (
                <BootScreen key="boot" onComplete={() => setBootState('login')} />
            )}
            
            {bootState === 'login' && (
                <LoginScreen key="login" onLogin={handleLogin} />
            )}
            
            {bootState === 'desktop' && (
                <motion.div 
                    key="desktop"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                >
                    <Desktop />
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

export default App;