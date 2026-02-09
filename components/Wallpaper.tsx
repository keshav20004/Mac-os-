import React from 'react';
import { motion } from 'framer-motion';

export const Wallpaper: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-50 bg-[#0a0a0f]">
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #3b0764 0%, transparent 50%), radial-gradient(circle at 100% 100%, #1e3a8a 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, #3b0764 0%, transparent 50%), radial-gradient(circle at 0% 100%, #1e3a8a 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, #3b0764 0%, transparent 50%), radial-gradient(circle at 100% 100%, #1e3a8a 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};