
import { ReactNode } from 'react';

export enum AppId {
  ABOUT = 'about',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  TERMINAL = 'terminal',
  CONTACT = 'contact',
  RESUME = 'resume',
  FINDER = 'finder',
  TRASH = 'trash'
}

export interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number | string; height: number | string };
  zIndex: number;
  component: ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'AI/ML' | 'Web' | 'CV' | 'Data' | 'Mobile';
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
}
