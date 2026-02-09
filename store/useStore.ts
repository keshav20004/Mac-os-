import { create } from 'zustand';
import { AppId, WindowState } from '../types';
import { APP_CONFIG } from '../constants';

interface StoreState {
  windows: Record<string, WindowState>;
  activeWindowId: string | null;
  zCounter: number;
  
  // Actions
  openWindow: (id: AppId) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
  updateWindowSize: (id: string, size: { width: number; height: number }) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  windows: {},
  activeWindowId: null,
  zCounter: 100,

  openWindow: (id: AppId) => {
    const { windows = {}, zCounter } = get();
    
    // If already open, focus it
    if (windows[id]) {
      if (windows[id].isMinimized) {
        set((state) => ({
          windows: {
            ...state.windows,
            [id]: { ...state.windows[id], isMinimized: false, zIndex: state.zCounter + 1 }
          },
          zCounter: state.zCounter + 1,
          activeWindowId: id
        }));
      } else {
        get().focusWindow(id);
      }
      return;
    }

    // Config for new window
    const appConfig = APP_CONFIG.find(app => app.id === id);
    const title = appConfig ? appConfig.title : 'Window';
    
    const windowCount = Object.keys(windows || {}).length;
    
    const newWindow: WindowState = {
      id,
      title,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      position: { x: 100 + windowCount * 20, y: 50 + windowCount * 20 },
      size: { width: Math.min(window.innerWidth * 0.6, 800), height: Math.min(window.innerHeight * 0.6, 600) },
      zIndex: zCounter + 1,
      component: null,
    };

    set((state) => ({
      windows: { ...(state.windows || {}), [id]: newWindow },
      zCounter: state.zCounter + 1,
      activeWindowId: id
    }));
  },

  closeWindow: (id) => {
    set((state) => {
      const newWindows = { ...(state.windows || {}) };
      delete newWindows[id];
      return { windows: newWindows, activeWindowId: null };
    });
  },

  minimizeWindow: (id) => {
    set((state) => ({
      windows: { ...(state.windows || {}), [id]: { ...state.windows[id], isMinimized: true } },
      activeWindowId: null
    }));
  },

  maximizeWindow: (id) => {
    set((state) => ({
      windows: { ...(state.windows || {}), [id]: { ...state.windows[id], isMaximized: !state.windows[id].isMaximized } },
      activeWindowId: id
    }));
  },

  focusWindow: (id) => {
    set((state) => ({
      windows: { ...(state.windows || {}), [id]: { ...state.windows[id], zIndex: state.zCounter + 1 } },
      zCounter: state.zCounter + 1,
      activeWindowId: id
    }));
  },

  updateWindowPosition: (id, position) => {
    set((state) => ({
      windows: { ...(state.windows || {}), [id]: { ...state.windows[id], position } }
    }));
  },

  updateWindowSize: (id, size) => {
    set((state) => ({
      windows: { ...(state.windows || {}), [id]: { ...state.windows[id], size } }
    }));
  }
}));