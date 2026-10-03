"use client";

import { useState, useMemo } from "react";
import { Search, Eye, Heart, Star, ExternalLink, Activity, TerminalSquare } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

const GithubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const CATEGORIES = [
  "All",
  "teleop",
  "robotics",
  "dataset",
  "ai-model",
  "dashboard",
  "tool",
  "agent",
  "community"
];

export default function ExploreSection() {
  const { projects } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.discordHandle.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, projects]);

  return (
    <section className="w-full relative bg-transparent z-20 pb-32">
      <div className="container mx-auto px-6 max-w-7xl -mt-20 mb-24 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-xl p-10 hover:border-cream/30 hover:bg-white/[0.02] transition-all duration-500 shadow-2xl">
            <div className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Total Projects</div>
            <div className="text-7xl font-serif text-cream font-bold group-hover:scale-105 group-hover:translate-x-2 transition-transform duration-500 origin-left">{projects.length}</div>
          </div>
          <div className="group rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-xl p-10 hover:border-cream/30 hover:bg-white/[0.02] transition-all duration-500 shadow-2xl">
            <div className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Active Builders</div>
            <div className="text-7xl font-serif text-cream font-bold group-hover:scale-105 group-hover:translate-x-2 transition-transform duration-500 origin-left">{new Set(projects.map(p => p.discordHandle)).size}</div>
          </div>
          <div className="group rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-xl p-10 hover:border-cream/30 hover:bg-white/[0.02] transition-all duration-500 shadow-2xl">
            <div className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Community Votes</div>
            <div className="text-7xl font-serif text-cream font-bold group-hover:scale-105 group-hover:translate-x-2 transition-transform duration-500 origin-left">0</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 ${
                  activeCategory === cat
                    ? "bg-cream text-background shadow-[0_0_20px_rgba(223,216,208,0.3)] scale-105"
                    : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat === "All" ? cat : `#${cat}`}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 shrink-0 group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/30 group-focus-within:text-cream transition-colors duration-300" />
            </div>
            <input
              type="text"
              placeholder="Search directory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-6 text-base text-white focus:outline-none focus:border-cream/50 focus:bg-white/10 transition-all placeholder:text-white/30 shadow-inner"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[420px] gap-6">
          {filteredProjects.map((project, index) => {
            const isWide = index % 5 === 0 || index % 5 === 3;
            
            return (
              <div 
                key={project.id} 
                className={`group relative flex flex-col justify-between rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-10 overflow-hidden hover:bg-white/[0.04] transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:-translate-y-1.5 ${isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
              >
                <div className="absolute -top-32 -right-32 w-72 h-72 bg-cream/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                <div className="relative z-10 flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center font-serif text-xl font-bold text-cream backdrop-blur-md shadow-lg shadow-black/50">
                      {project.discordHandle.charAt(0) === '@' ? project.discordHandle.charAt(1).toUpperCase() : project.discordHandle.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">{project.discordHandle}</h4>
                      <span className="text-xs text-white/40 font-mono tracking-widest" title={project.walletAddress}>{project.walletAddress.substring(0, 6)}...{project.walletAddress.substring(project.walletAddress.length - 4)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-widest uppercase">
                    <Activity className="w-3.5 h-3.5" />
                    {project.score}
                  </div>
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-cream transition-colors duration-500 tracking-tight leading-tight">{project.title}</h3>
                  <p className="text-xs font-bold text-white/30 mb-5 tracking-widest uppercase">{project.tagline}</p>
                  <p className="text-base text-white/60 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all duration-300">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="group/btn relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-background transition-all duration-500 font-bold shadow-lg hover:shadow-[0_0_20px_rgba(223,216,208,0.4)]">
                        <span className="relative z-10 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /> Live
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="w-full py-40 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <TerminalSquare className="h-10 w-10 text-cream" />
            </div>
            <h3 className="text-4xl font-serif text-white mb-4">No projects found</h3>
            <p className="text-white/50 max-w-md mx-auto text-lg font-light leading-relaxed">
              {projects.length === 0 
                ? "The directory is completely fresh. Be the very first to submit your project to the PrismaX Builder Hub!"
                : "We couldn't find any projects matching your search criteria. Try using different keywords."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
