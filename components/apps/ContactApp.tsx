import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Phone, CheckCircle } from 'lucide-react';

export const ContactApp: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="h-full w-full flex flex-col md:flex-row text-white bg-[#1e293b]">
      {/* Sidebar - Contact Details */}
      <div className="w-full md:w-80 bg-black/20 p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-sm text-gray-400">Let's build something amazing together.</p>
        </div>

        <div className="space-y-6">
          <ContactItem icon={Mail} label="Email" value="ikeshav62@gmail.com" link="mailto:ikeshav62@gmail.com" />

          <ContactItem icon={MapPin} label="Location" value="Lucknow, India" />
        </div>

        <div className="mt-auto flex gap-4 pt-8">
          <a href="https://github.com/keshav20004" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors border border-white/10">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/keshav-bajpai" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors border border-white/10">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 p-8 overflow-y-auto bg-white/5">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 outline-none focus:border-blue-500 transition-colors"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 outline-none focus:border-blue-500 transition-colors"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Subject</label>
            <input
              required
              type="text"
              placeholder="Collaboration Opportunity"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 outline-none focus:border-blue-500 transition-colors"
              value={formData.subject}
              onChange={e => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
            <textarea
              required
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 outline-none focus:border-blue-500 transition-colors resize-none"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isSent}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] ${isSent ? 'bg-green-600 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-500'
              }`}
          >
            {isSent ? (
              <>
                <CheckCircle size={18} /> Message Sent
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactItem = ({ icon: Icon, label, value, link }: { icon: any, label: string, value: string, link?: string }) => {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
        <Icon size={18} className="text-blue-400" />
      </div>
      <div>
        <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{label}</div>
        <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{value}</div>
      </div>
    </div>
  );

  return link ? <a href={link} className="block">{content}</a> : content;
};