import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { USER_AVATAR } from '../../constants';

export const ResumeApp: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#525659] overflow-y-auto font-sans flex justify-center p-4 md:p-8">
      <div className="max-w-[850px] w-full bg-white shadow-2xl min-h-[1100px] text-gray-800 p-8 md:p-12 relative">
        
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex items-center gap-6">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm shrink-0">
                    <img 
                        src={USER_AVATAR} 
                        alt="Keshav Bajpai" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight uppercase mb-2">Keshav Bajpai</h1>
                    <p className="text-lg text-gray-600 font-medium">Computer Science (AIML) Student</p>
                </div>
            </div>
            
            <div className="text-left md:text-right text-sm text-gray-600 space-y-1 w-full md:w-auto mt-4 md:mt-0">
                <div className="flex items-center md:justify-end gap-2"><MapPin size={14}/> Lucknow, India</div>
                <a href="mailto:ikeshav62@gmail.com" className="flex items-center md:justify-end gap-2 hover:text-blue-600"><Mail size={14}/> ikeshav62@gmail.com</a>
                <div className="flex items-center md:justify-end gap-2"><Phone size={14}/> 9451363788</div>
            </div>
          </div>
          <div className="mt-6 flex gap-4 text-sm">
             <a href="https://github.com/keshav20004" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 bg-gray-100 px-3 py-1 rounded-full"><Github size={14}/> github.com/keshav20004</a>
             <a href="https://linkedin.com/in/keshav-bajpai" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 bg-gray-100 px-3 py-1 rounded-full"><Linkedin size={14}/> LinkedIn Profile</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-blue-900 uppercase border-b border-gray-200 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700 text-justify">
            Results-driven Computer Science student proficient in Java, OOP concepts, SQL, and Git, eager to contribute to AI and Android application development. Currently working as an AI Engineer at i8cloud, focusing on agentic workflows and LLM orchestration. Possessing a solid foundation in UI/UX implementation and RESTful API integration, I am committed to writing clean, efficient, and well-documented code. Seeking to leverage strong problem-solving and analytical skills to deliver high-quality intelligent solutions.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-blue-900 uppercase border-b border-gray-200 pb-1 mb-3">Education</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-gray-900">Shri Ramswaroop Memorial College of Engineering & Management</h3>
                <div className="text-sm text-gray-700">B.Tech, Computer Science (AIML)</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">Nov 2022 - Present</div>
                <div className="text-xs text-gray-500">Lucknow</div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-gray-900">Lucknow Public College</h3>
                <div className="text-sm text-gray-700">Intermediate</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">2021</div>
                <div className="text-xs text-gray-500">Lucknow</div>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-gray-900">Lucknow Public College</h3>
                <div className="text-sm text-gray-700">High School</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">2019</div>
                <div className="text-xs text-gray-500">Lucknow</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-blue-900 uppercase border-b border-gray-200 pb-1 mb-3">Research & Experience</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-gray-900 text-base">AI Engineer</h3>
              <span className="text-sm text-gray-600 font-medium">Feb 2025 - Present</span>
            </div>
            <div className="text-sm font-semibold text-blue-700 mb-2">i8cloud</div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-gray-700">
              <li>Leading AI initiatives focusing on Agentic Workflows and LLM Orchestration to automate complex enterprise tasks.</li>
              <li>Developing production-ready RAG (Retrieval Augmented Generation) systems for efficient knowledge retrieval.</li>
              <li>Designing and deploying specialized AI agents utilizing LangChain and advanced prompt engineering techniques.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-gray-900 text-base">AI Engineering Intern</h3>
              <span className="text-sm text-gray-600 font-medium">Feb 2025 - Apr 2025</span>
            </div>
            <div className="text-sm font-semibold text-blue-700 mb-2">NEETXcel</div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-gray-700">
              <li>Developed and implemented the initial prototype flow for an AI-powered chatbot, effectively translating UI/UX designs into a highly interactive user experience.</li>
              <li>Successfully integrated advanced Large Language Models (LLMs), including Google Gemini, demonstrating proficiency in connecting with external data sources.</li>
              <li>Utilized Streamlit to rapidly build and iterate on the application, delivering a functional and robust prototype efficiently.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-blue-900 uppercase border-b border-gray-200 pb-1 mb-3">Key Projects</h2>
          
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-gray-900 text-base">AI Math & Drawing Recognition System</h3>
              <span className="text-sm text-gray-600 font-medium">Jan 2022 - Mar 2022</span>
            </div>
             <div className="flex flex-wrap gap-2 mb-2 text-xs">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 border border-gray-200">Python</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 border border-gray-200">OpenCV</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 border border-gray-200">Gemini API</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 border border-gray-200">Streamlit</span>
             </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-gray-700">
              <li>Engineered an interactive recognition system for hand-drawn inputs, applying strong UI/UX implementation principles.</li>
              <li>Integrated the Google Gemini API, showcasing practical experience with RESTful API integration.</li>
              <li>Applied Python and OpenCV for robust visual data processing and interpretation.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-lg font-bold text-blue-900 uppercase border-b border-gray-200 pb-1 mb-3">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
                <h4 className="font-semibold text-gray-900 mb-1">Languages & AI Tools</h4>
                <p>Java, Python, LangChain, RAG, Gemini API, SQL, SQLite, MongoDB</p>
            </div>
             <div>
                <h4 className="font-semibold text-gray-900 mb-1">Frameworks & Tools</h4>
                <p>Git, GitHub, Postman, Android Studio, Streamlit, OpenCV</p>
            </div>
             <div className="col-span-1 md:col-span-2">
                <h4 className="font-semibold text-gray-900 mb-1">Core Competencies</h4>
                <p>LLM Orchestration, Agentic Workflows, OOP Concepts, RESTful API Integration, UI/UX Implementation, Problem Solving</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};