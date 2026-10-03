import { BookOpen, Palette, MessageSquare, Send } from "lucide-react";

const YoutubeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

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

export default function Footer() {
  const links = [
    { name: "Whitepaper", href: "https://app.prismax.ai/whitepaper#introduction", icon: BookOpen },
    { name: "Brand Kit", href: "https://www.prismax.ai/brand-kit", icon: Palette },
    { name: "Discord", href: "https://discord.com/invite/prismaxai", icon: MessageSquare },
    { name: "X (Twitter)", href: "https://bit.ly/4fvI8dB", icon: TwitterIcon },
    { name: "Telegram", href: "https://t.me/PrismaX_News", icon: Send },
    { name: "YouTube", href: "https://www.youtube.com/@PrismaX-AI", icon: YoutubeIcon },
    { name: "GitHub", href: "#", icon: GithubIcon },
  ];

  return (
    <footer className="w-full bg-black/60 backdrop-blur-2xl pt-32 pb-12 relative z-10 overflow-hidden border-t border-white/5">
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-32">
          <div className="lg:col-span-2 pr-10">
            <span className="font-serif text-[4rem] font-bold text-white tracking-tight block mb-6 leading-none">PrismaX</span>
            <p className="text-white/40 text-lg font-light max-w-md leading-relaxed">
              The ultimate Web3 project directory. Operate robots. Generate data. Train better AI.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase mb-8">Resources</h4>
            <ul className="flex flex-col gap-5">
              <li><a href="https://app.prismax.ai/whitepaper#introduction" className="text-white/60 hover:text-cream transition-colors text-base font-medium">Whitepaper</a></li>
              <li><a href="https://www.prismax.ai/brand-kit" className="text-white/60 hover:text-cream transition-colors text-base font-medium">Brand Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase mb-8">Community</h4>
            <ul className="flex flex-col gap-5">
              <li><a href="https://discord.com/invite/prismaxai" className="text-white/60 hover:text-cream transition-colors text-base font-medium">Discord</a></li>
              <li><a href="https://bit.ly/4fvI8dB" className="text-white/60 hover:text-cream transition-colors text-base font-medium">X (Twitter)</a></li>
              <li><a href="https://t.me/PrismaX_News" className="text-white/60 hover:text-cream transition-colors text-base font-medium">Telegram</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-8">
          <span className="text-xs font-bold text-white/20 tracking-widest uppercase">
            © {new Date().getFullYear()} PrismaX Builder Hub
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-cream hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
