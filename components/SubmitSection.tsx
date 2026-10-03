"use client";

import { useState } from "react";
import { Send, Terminal } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function SubmitSection() {
  const { addProject } = useAppContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    tagline: "",
    description: "",
    demoUrl: "",
    githubUrl: "",
    discordHandle: "",
    walletAddress: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      addProject({
        id: Math.random().toString(36).substr(2, 9),
        title: formData.title,
        category: formData.category,
        tagline: formData.tagline,
        description: formData.description,
        demoUrl: formData.demoUrl,
        githubUrl: formData.githubUrl,
        discordHandle: formData.discordHandle.startsWith("@") ? formData.discordHandle : `@${formData.discordHandle}`,
        walletAddress: formData.walletAddress,
        score: Math.floor(Math.random() * 20) + 80,
        stats: { views: "0", likes: "0", stars: 0 }
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setFormData({
        title: "",
        category: "",
        tagline: "",
        description: "",
        demoUrl: "",
        githubUrl: "",
        discordHandle: "",
        walletAddress: ""
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="submit" className="w-full py-40 bg-black/40 backdrop-blur-xl relative z-10 overflow-hidden border-t border-white/5">

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cream/20 to-cream/5 border border-cream/20 text-cream mb-8 shadow-[0_0_40px_rgba(223,216,208,0.15)] -rotate-6 hover:rotate-0 transition-transform duration-500">
            <Terminal className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
            Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream to-white italic font-light">Build</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Deploy your work to the PrismaX directory. Join the ranks of elite builders shaping the future of decentralized AI and robotics.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative group bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-2xl shadow-2xl transition-all duration-700 hover:border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[3rem] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mb-10">
            <div className="flex flex-col gap-4">
              <label className="text-xs font-bold tracking-widest text-white/50 uppercase">Project Title <span className="text-cream">*</span></label>
              <input name="title" value={formData.title} onChange={handleChange} required type="text" placeholder="e.g. TeleOp Trainer" className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:outline-none focus:border-cream/50 focus:ring-1 focus:ring-cream/50 transition-all placeholder:text-white/20 shadow-inner hover:bg-black/80 hover:border-white/20" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-xs font-bold tracking-widest text-white/50 uppercase">Category <span className="text-cream">*</span></label>
              <div className="relative">
                <select name="category" value={formData.category} onChange={handleChange} required className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-base text-white/80 focus:outline-none focus:border-cream/50 focus:ring-1 focus:ring-cream/50 transition-all appearance-none shadow-inner hover:bg-black/80 hover:border-white/20">
                  <option value="" disabled>Select category...</option>
                  <option value="teleop">Teleoperation (teleop)</option>
                  <option value="robotics">Robotics</option>
                  <option value="dataset">Dataset</option>
                  <option value="ai-model">AI Model</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="tool">Tool</option>
                  <option value="agent">Agent</option>
                  <option value="community">Community</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-white/50">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-4 mb-10">
            <label className="text-xs font-bold tracking-widest text-white/50 uppercase">Short Tagline / Summary <span className="text-cream">*</span></label>
            <input name="tagline" value={formData.tagline} onChange={handleChange} required type="text" placeholder="One sentence describing your project..." className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:outline-none focus:border-cream/50 focus:ring-1 focus:ring-cream/50 transition-all placeholder:text-white/20 shadow-inner hover:bg-black/80 hover:border-white/20" />
          </div>

          <div className="relative z-10 flex flex-col gap-4 mb-10">
            <label className="text-xs font-bold tracking-widest text-white/50 uppercase">Full Description <span className="text-cream">*</span></label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows={5} placeholder="Tell us more about how it works, the tech stack, and its impact on the PrismaX ecosystem..." className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-5 text-base text-white focus:outline-none focus:border-cream/50 focus:ring-1 focus:ring-cream/50 transition-all placeholder:text-white/20 resize-none shadow-inner hover:bg-black/80 hover:border-white/20"></textarea>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mb-10">
            <div className="flex flex-col gap-4">
              <label className="text-xs font-bold tracking-widest text-white/50 uppercase">Live Demo URL</label>
              <input name="demoUrl" value={formData.demoUrl} onChange={handleChange} type="url" placeholder="https://..." className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:outline-none focus:border-cream/50 focus:ring-1 focus:ring-cream/50 transition-all placeholder:text-white/20 shadow-inner hover:bg-black/80 hover:border-white/20" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-xs font-bold tracking-widest text-white/50 uppercase">GitHub Repository <span className="text-cream">*</span></label>
              <input name="githubUrl" value={formData.githubUrl} onChange={handleChange} required type="url" placeholder="https://github.com/..." className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:outline-none focus:border-cream/50 focus:ring-1 focus:ring-cream/50 transition-all placeholder:text-white/20 shadow-inner hover:bg-black/80 hover:border-white/20" />
            </div>
          </div>

          <hr className="border-white/10 mb-10" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mb-14">
            <div className="flex flex-col gap-4">
              <label className="text-xs font-bold tracking-widest text-white/50 uppercase">Builder Discord/X <span className="text-cream">*</span></label>
              <input name="discordHandle" value={formData.discordHandle} onChange={handleChange} required type="text" placeholder="@username" className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:outline-none focus:border-cream/50 focus:ring-1 focus:ring-cream/50 transition-all placeholder:text-white/20 shadow-inner hover:bg-black/80 hover:border-white/20" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-xs font-bold tracking-widest text-white/50 uppercase">Wallet Address <span className="text-cream">*</span></label>
              <input name="walletAddress" value={formData.walletAddress} onChange={handleChange} required type="text" placeholder="0x..." className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:outline-none focus:border-cream/50 focus:ring-1 focus:ring-cream/50 transition-all placeholder:text-white/20 font-mono shadow-inner hover:bg-black/80 hover:border-white/20" />
            </div>
          </div>

          <div className="relative z-10 flex justify-end">
            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`group relative overflow-hidden flex items-center justify-center min-w-[260px] gap-3 rounded-full px-10 py-5 text-lg font-bold transition-all duration-500 ${
                isSuccess 
                  ? "bg-green-500 text-white shadow-[0_0_40px_rgba(34,197,94,0.4)]" 
                  : isSubmitting 
                    ? "bg-cream/50 text-background cursor-not-allowed" 
                    : "bg-cream text-background shadow-[0_0_40px_rgba(223,216,208,0.25)] hover:shadow-[0_0_60px_rgba(223,216,208,0.5)] hover:scale-[1.02]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                {isSuccess ? "Project Submitted!" : isSubmitting ? "Submitting..." : (
                  <>
                    Deploy Project <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </span>
              {!isSuccess && !isSubmitting && (
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
