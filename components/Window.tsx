import React, { useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { WindowState } from '../types';

interface WindowProps {
  window: WindowState;
  children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({ window: win, children }) => {
  const { focusWindow, closeWindow, minimizeWindow, maximizeWindow, updateWindowPosition } = useStore();
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();

  const isActive = useStore((state) => state.activeWindowId === win.id);

  const handleMouseDown = () => {
    if (!isActive) focusWindow(win.id);
  };

  const handleDragEnd = (event: any, info: any) => {
    updateWindowPosition(win.id, { 
      x: win.position.x + info.offset.x, 
      y: win.position.y + info.offset.y 
    });
  };

  // Simple animation variants
  const variants = {
    initial: { scale: 0.8, opacity: 0, y: 100 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.8, opacity: 0, y: 100 },
    minimized: { scale: 0, opacity: 0, y: 400 }
  };

  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      initial="initial"
      animate={win.isMinimized ? "minimized" : "animate"}
      exit="exit"
      variants={variants}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ 
        zIndex: win.zIndex,
        width: win.isMaximized ? '100vw' : win.size.width,
        height: win.isMaximized ? '94vh' : win.size.height,
        position: 'absolute',
        top: win.isMaximized ? 32 : win.position.y,
        left: win.isMaximized ? 0 : win.position.x,
      }}
      onMouseDown={handleMouseDown}
      className={`flex flex-col rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e2e]/85 backdrop-blur-2xl ${win.isMaximized ? 'rounded-none border-none' : ''}`}
    >
      {/* Title Bar */}
      <div 
        className="h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-4 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => dragControls.start(e)}
        onDoubleClick={() => maximizeWindow(win.id)}
      >
        <div className="flex items-center gap-2 group">
          <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }} className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center hover:brightness-75 group-hover:text-black/50 text-transparent transition-all">
            <X size={8} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id); }} className="w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center hover:brightness-75 group-hover:text-black/50 text-transparent transition-all">
            <Minus size={8} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); maximizeWindow(win.id); }} className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center hover:brightness-75 group-hover:text-black/50 text-transparent transition-all">
            <Maximize2 size={6} />
          </button>
        </div>
        <div className="text-sm font-medium text-white/80">{win.title}</div>
        <div className="w-14"></div> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto relative">
        {children}
      </div>
    </motion.div>
  );
};