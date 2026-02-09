
import React from 'react';
import { AppId, Project, TimelineItem } from './types';
import { 
  User, Code, Brain, Briefcase, 
  Terminal, Mail, FileText, Folder 
} from 'lucide-react';

// Centralized User Data
export const USER_AVATAR = "https://github.com/keshav20004.png"; 

export const APP_CONFIG = [
  { id: AppId.FINDER, title: 'Finder', icon: Folder, color: 'bg-blue-500' },
  { id: AppId.ABOUT, title: 'About Me', icon: User, color: 'bg-gray-500' },
  { id: AppId.PROJECTS, title: 'Projects', icon: Code, color: 'bg-indigo-500' },
  { id: AppId.SKILLS, title: 'Skills', icon: Brain, color: 'bg-yellow-500' },
  { id: AppId.EXPERIENCE, title: 'Experience', icon: Briefcase, color: 'bg-green-600' },
  { id: AppId.TERMINAL, title: 'Terminal', icon: Terminal, color: 'bg-gray-800' },
  { id: AppId.CONTACT, title: 'Contact', icon: Mail, color: 'bg-blue-400' },
  { id: AppId.RESUME, title: 'Resume', icon: FileText, color: 'bg-red-500' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Math & Gesture Recognition',
    description: 'Interactive system for solving hand-drawn equations using OpenCV & Gemini API. Recognized gestures to solve complex math problems in real-time.',
    tags: ['Python', 'OpenCV', 'Streamlit', 'Gemini'],
    imageUrl: 'https://picsum.photos/seed/mathsolver/600/400',
    githubUrl: 'https://github.com/keshav20004/AI-gesture-.git',
    category: 'AI/ML'
  },
  {
    id: '2',
    title: 'Local LLM Search Agent',
    description: 'A local-first agentic web search & scraping app built with Streamlit + LM Studio. Features URL detection, GitHub parsing, and DuckDuckGo integration.',
    tags: ['Python', 'Streamlit', 'Local LLM', 'Qwen'],
    imageUrl: 'https://picsum.photos/seed/local-agent/600/400',
    githubUrl: 'https://github.com/keshav20004/Local-LLM-agent',
    category: 'AI/ML'
  },
  {
    id: '3',
    title: 'Gita Wallpaper',
    description: 'Native Android app displaying random Bhagavad Gita verses on every unlock. Supports Sanskrit, Hindi, and English with offline mode.',
    tags: ['Android', 'Java', 'SQLite', 'Mobile Dev'],
    imageUrl: 'https://picsum.photos/seed/gita/600/400',
    githubUrl: 'https://github.com/keshav20004/GitaWallpaper.git',
    category: 'Mobile'
  },
  {
    id: '4',
    title: 'STFU 🤫',
    description: 'A clever tool built to combat noise pollution. Plays back heard audio with a 2-second delay to discourage loud speakers in public spaces.',
    tags: ['PWA', 'JavaScript', 'Audio API'],
    imageUrl: 'https://picsum.photos/seed/stfu/600/400',
    demoUrl: 'https://stfu01.netlify.app/',
    githubUrl: 'https://github.com/keshav20004/stfu-pwa.git',
    category: 'Web'
  },
  {
    id: '5',
    title: 'Pedometer PWA',
    description: 'Production-quality pedometer counting steps using device motion sensors. Features dark mode, persistent storage, and battery optimization.',
    tags: ['PWA', 'Accelerometer', 'Service Worker'],
    imageUrl: 'https://picsum.photos/seed/steps/600/400',
    demoUrl: 'https://pedometer01.netlify.app/',
    category: 'Web'
  },
  {
    id: '6',
    title: 'Wordle Clone',
    description: 'Fullscreen responsive word guessing game with daily challenges and visual keyboard feedback. Built for seamless mobile and desktop play.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/wordle/600/400',
    demoUrl: 'https://wordle01.netlify.app',
    category: 'Web'
  },
  {
    id: '7',
    title: 'YT Focus Mode',
    description: 'Chrome extension removing YouTube algorithmic distractions. Blocks home feed, recommendations, and shorts to boost productivity.',
    tags: ['Extension', 'JavaScript', 'CSS'],
    imageUrl: 'https://picsum.photos/seed/ytfocus/600/400',
    githubUrl: 'https://github.com/keshav20004/yt-focus-mode.git',
    category: 'Web'
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    id: '0',
    role: 'AI Engineer',
    company: 'i8cloud',
    date: 'Feb 2025 - Present',
    description: [
      'Leading AI initiatives focusing on Agentic Workflows and LLM Orchestration.',
      'Developing production-ready RAG (Retrieval Augmented Generation) systems.',
      'Designing and deploying specialized AI agents for enterprise automation.',
      'Optimizing LLM performance and cost through advanced prompt engineering.'
    ]
  },
  {
    id: '1',
    role: 'AI Engineering Intern',
    company: 'NEETXcel',
    date: 'Feb 2025 - Apr 2025',
    description: [
      'Developed and implemented initial prototype flow for an AI-powered chatbot.',
      'Integrated Large Language Models (LLMs) including Google Gemini.',
      'Translating UI/UX designs into highly interactive user experiences.',
      'Leveraged Streamlit to rapidly build and iterate on functional prototypes.'
    ]
  },
  {
    id: '2',
    role: 'B.Tech CS (AIML) Student',
    company: 'SRMCEM, Lucknow',
    date: 'Nov 2022 - Present',
    description: [
      'Pursuing specialization in AI and Machine Learning.',
      'Focusing on Computer Vision, Data Structures, and OOP Concepts.',
      'Maintaining strong academic performance in core technical subjects.'
    ]
  }
];

export const SKILLS_LIST = [
  'Generative AI', 'Large Language Models (LLMs)', 'RAG Systems', 'LangChain', 
  'Vector Databases', 'Transformers', 'Neural Networks', 'Computer Vision',
  'PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV',
  'Java', 'Python', 'Android Studio', 'SQL', 
  'SQLite', 'MongoDB', 'MySQL', 'REST APIs',
  'OOP Concepts', 'Git', 'GitHub', 'Postman', 
  'Gemini API', 'Streamlit', 'UI/UX Implementation'
];
