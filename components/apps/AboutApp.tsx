import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { USER_AVATAR } from '../../constants';

export const AboutApp: React.FC = () => {
  return (
    <div className="h-full w-full p-8 text-white flex flex-col md:flex-row gap-8 overflow-y-auto">
      <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
          <img src={USER_AVATAR} alt="Keshav" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Keshav Bajpai</h2>
          <p className="text-blue-200 mt-2">AI Engineer & Full Stack Developer</p>
        </div>
        
        <div className="flex gap-4">
          <SocialButton icon={Github} label="GitHub" />
          <SocialButton icon={Linkedin} label="LinkedIn" />
          <SocialButton icon={Mail} label="Email" />
          <SocialButton icon={FileText} label="Resume" />
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <section className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate software engineer specializing in Artificial Intelligence and Modern Web Technologies. 
            With a strong foundation in Computer Science and a keen eye for design, I build applications that are not only intelligent but also intuitive and beautiful.
          </p>
        </section>

        <section className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <StatBox number="3+" label="Years Exp" />
            <StatBox number="15+" label="Projects" />
            <StatBox number="24/7" label="Learning" />
          </div>
        </section>

        <section className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-green-300">Current Focus</h3>
          <p className="text-gray-300">
            Currently exploring Generative AI agents, RAG systems, and performant 3D web experiences using WebGL.
          </p>
        </section>
      </div>
    </div>
  );
};

const SocialButton = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <button className="p-3 bg-white/10 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all group tooltip-container relative">
    <Icon size={20} />
  </button>
);

const StatBox = ({ number, label }: { number: string, label: string }) => (
  <div className="p-3 bg-black/20 rounded-lg">
    <div className="text-2xl font-bold text-white">{number}</div>
    <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
  </div>
);