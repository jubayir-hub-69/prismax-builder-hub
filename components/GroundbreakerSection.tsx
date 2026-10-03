"use client";

import { Award, MessageSquare } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useMemo } from "react";

const GithubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function GroundbreakerSection() {
  const { projects } = useAppContext();

  const topBuilders = useMemo(() => {
    const builderMap: Record<string, { count: number; socials: any; bio: string; walletAddress: string }> = {};
    
    projects.forEach(p => {
      if (!builderMap[p.discordHandle]) {
        builderMap[p.discordHandle] = {
          count: 0,
          socials: { github: `https://github.com/${p.discordHandle.replace('@', '')}`, twitter: `https://x.com/${p.discordHandle.replace('@', '')}` },
          bio: `Creator of ${p.title} and a dedicated builder in the PrismaX ecosystem.`,
          walletAddress: p.walletAddress
        };
      }
      builderMap[p.discordHandle].count += 1;
    });

    return Object.entries(builderMap)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 3)
      .map(([discord, data], id) => ({
        id,
        name: discord,
        discord,
        projects: data.count,
        bio: data.bio,
        socials: data.socials,
        walletAddress: data.walletAddress
      }));
  }, [projects]);

  if (topBuilders.length === 0) {
    return null;
  }

  return (
    <section id="groundbreakers" className="w-full py-32 bg-transparent relative z-10 border-t border-white/5">
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-4 tracking-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-white to-cream/70 italic font-light">Groundbreakers</span>
            </h2>
            <p className="text-white/50 max-w-2xl text-xl font-light">
              Highlighting our top community builders who hold the exclusive Groundbreaker role in the PrismaX ecosystem.
            </p>
          </div>
          <div className="hidden md:block w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topBuilders.map((builder, index) => (
            <div key={builder.id} className="relative group bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/[0.03] hover:border-cream/30 transition-all duration-700 overflow-hidden hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cream/10 rounded-full blur-[60px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="flex items-start gap-5 mb-8 relative z-10">
                <div className="w-20 h-20 rounded-full border-4 border-cream/20 shadow-[0_0_30px_rgba(223,216,208,0.2)] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-3xl font-serif font-bold text-cream backdrop-blur-sm">
                  {builder.name.charAt(0) === '@' ? builder.name.charAt(1).toUpperCase() : builder.name.charAt(0).toUpperCase()}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-white mb-1">{builder.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/40 font-mono tracking-wide">
                    <MessageSquare className="w-4 h-4 text-cream/70" />
                    {builder.discord}
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-cream/10 to-transparent border border-cream/20 text-cream text-xs font-bold tracking-widest uppercase mb-8 shadow-inner">
                <Award className="w-4 h-4" />
                PrismaX Groundbreaker
              </div>
              
              <p className="text-base text-white/60 leading-relaxed mb-10 relative z-10 font-light line-clamp-3">
                {builder.bio}
              </p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-8 relative z-10">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-cream leading-none mb-1">{builder.projects}</span>
                  <span className="text-xs font-bold text-white/40 tracking-widest uppercase">Projects Built</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <a href={builder.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/10 text-white/30 hover:text-white border border-transparent hover:border-white/20 transition-all duration-300">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href={builder.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/10 text-white/30 hover:text-white border border-transparent hover:border-white/20 transition-all duration-300">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
