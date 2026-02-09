import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS, SKILLS_LIST } from '../../constants';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalApp: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    { command: '', output: 'Welcome to KeshavOS Terminal. Type "help" for commands.' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        output = (
          <div className="text-yellow-400">
            Available commands:
            <br />- <span className="text-green-400">about</span>: Who am I?
            <br />- <span className="text-green-400">projects</span>: List projects
            <br />- <span className="text-green-400">skills</span>: List technical skills
            <br />- <span className="text-green-400">contact</span>: Get email
            <br />- <span className="text-green-400">clear</span>: Clear terminal
            <br />- <span className="text-green-400">whoami</span>: Current user
          </div>
        );
        break;
      case 'whoami':
        output = 'keshav_bajpai@portfolio:root';
        break;
      case 'about':
        output = 'AI Engineer passionate about building intelligent systems and immersive web experiences.';
        break;
      case 'projects':
        output = (
          <div className="flex flex-col gap-1">
            {PROJECTS.map(p => (
              <div key={p.id}>- <span className="text-blue-400">{p.title}</span>: {p.description}</div>
            ))}
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="flex flex-wrap gap-2">
            {SKILLS_LIST.map(s => <span key={s} className="bg-white/10 px-1 rounded">{s}</span>)}
          </div>
        );
        break;
      case 'contact':
        output = 'Email: contact@keshavbajpai.dev';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        output = `Command not found: ${trimmed}`;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div 
        className="h-full w-full bg-[#1e1e1e] p-4 font-mono text-sm text-green-400 overflow-y-auto cursor-text"
        onClick={() => inputRef.current?.focus()}
    >
      {history.map((item, i) => (
        <div key={i} className="mb-2">
            {item.command && (
                <div className="flex gap-2 text-white">
                    <span className="text-blue-400">keshav@mac:~$</span>
                    <span>{item.command}</span>
                </div>
            )}
            <div className="opacity-90 ml-2">{item.output}</div>
        </div>
      ))}
      
      <div className="flex gap-2 text-white items-center">
        <span className="text-blue-400">keshav@mac:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none flex-1 text-green-400 focus:ring-0"
          autoFocus
        />
      </div>
      <div ref={endRef} />
    </div>
  );
};