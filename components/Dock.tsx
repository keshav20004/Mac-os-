import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, MotionValue } from 'framer-motion';
import { APP_CONFIG } from '../constants';
import { useStore } from '../store/useStore';
import { AppId } from '../types';

export const Dock: React.FC = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-full">
      <div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 pb-2 pt-2 backdrop-blur-2xl shadow-2xl"
      >
        {APP_CONFIG.map((app) => (
          <DockIcon key={app.id} app={app} mouseX={mouseX} />
        ))}
      </div>
    </div>
  );
};

const DockIcon: React.FC<{ app: typeof APP_CONFIG[0], mouseX: MotionValue<number> }> = ({ app, mouseX }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { openWindow, windows } = useStore();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const isOpen = windows[app.id]?.isOpen && !windows[app.id]?.isMinimized;

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square relative group"
      onClick={() => openWindow(app.id)}
    >
      <div className={`h-full w-full rounded-xl ${app.color} flex items-center justify-center shadow-lg cursor-pointer border border-white/10 transition-all duration-200 hover:brightness-110`}>
         <app.icon className="text-white w-1/2 h-1/2" />
      </div>
      {isOpen && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
      )}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-sm">
        {app.title}
      </div>
    </motion.div>
  );
};