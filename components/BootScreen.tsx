import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { USER_AVATAR } from '../constants';

export const BootScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Only run if not complete
    if (isComplete) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 5 + 0.5; // Slightly faster for better UX
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          setIsComplete(true);
        }
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isComplete]);

  useEffect(() => {
    if (isComplete) {
      // Small delay before triggering completion to show full bar
      const timeout = setTimeout(onComplete, 800);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center text-white cursor-none"
    >
      <div className="mb-12 relative group">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl relative">
            <img src={USER_AVATAR} alt="User" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            System Boot
        </div>
      </div>
      
      <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.05 }}
        />
      </div>
    </motion.div>
  );
};