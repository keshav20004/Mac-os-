
import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are "Neural Assistant", a helpful AI representative for Keshav Bajpai's professional portfolio.
Your goal is to answer questions about Keshav's career, skills, and projects based on the following information:

BACKGROUND:
- Keshav Bajpai is an AI Engineer & Full Stack Developer.
- Currently: AI Engineer at i8cloud (since Feb 2025).
- Education: B.Tech in Computer Science (AIML) at SRMCEM, Lucknow (2022-Present).

EXPERIENCE:
- i8cloud (Feb 2025 - Present): AI Engineer. Focus on Agentic Workflows, LLM Orchestration, RAG systems, and LangChain.
- NEETXcel (Feb 2025 - Apr 2025): AI Engineering Intern. Developed AI chatbot prototype using Gemini API and Streamlit.

PROJECTS:
- AI Math & Gesture Recognition: Python, OpenCV, Gemini API. Real-time equation solving via hand gestures.
- Local LLM Search Agent: Python, Streamlit, LM Studio. Local-first web search & scraping.
- Gita Wallpaper: Android app (Java, SQLite) showing Bhagavad Gita verses.
- STFU: PWA tool combating noise pollution.
- Pedometer PWA: Motion-sensing step counter.
- Wordle Clone & YT Focus Mode Chrome extension.

SKILLS:
- Generative AI, LLMs, RAG, LangChain, Prompt Engineering.
- Computer Vision (OpenCV), PyTorch, TensorFlow.
- Java, Python, SQL (MySQL, MongoDB, SQLite), REST APIs.
- Android Studio, Streamlit, Git/GitHub.

CONTACT:
- Email: ikeshav62@gmail.com
- Phone: +91-9451363788
- GitHub: github.com/keshav20004
- LinkedIn: linkedin.com/in/keshav-bajpai

STANCE:
- Be professional, technical, yet friendly.
- If asked about things not in this context, politely steer the conversation back to Keshav's professional work or suggest contacting him.
- Keep responses concise and formatted for a chat interface.`;

export const AILabApp: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user'|'ai', text: string}[]>([
    { role: 'ai', text: "Hello! I'm Keshav's AI Assistant. Ask me about his resume, projects at NEETXcel, or his technical skills." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Use Gemini API to generate real responses
  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
      
      const responseText = response.text || "I apologize, but I'm unable to provide an answer at this moment.";
      setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting to the neural network. Please check your connection and try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
        <div className="p-2 bg-purple-600 rounded-full">
          <Bot size={20} />
        </div>
        <div>
          <h3 className="font-semibold">Neural Assistant</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
            <span className="text-xs text-gray-400">Online • Context: Keshav's Resume</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-purple-600' : 'bg-blue-600'}`}>
              {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${msg.role === 'ai' ? 'bg-white/10 rounded-tl-none' : 'bg-blue-600 rounded-tr-none'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
             <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shrink-0"><Bot size={16}/></div>
             <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
               <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
               <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
               <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/5 border-t border-white/10">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            disabled={isTyping}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Keshav's experience..."
            className="w-full bg-black/30 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors disabled:bg-gray-700"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
