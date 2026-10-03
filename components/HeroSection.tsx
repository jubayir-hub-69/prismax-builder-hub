import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">


      <div className="mx-auto max-w-5xl z-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-default shadow-lg shadow-black/50">
          <Sparkles className="w-4 h-4 text-cream" />
          <span className="text-sm font-semibold tracking-wide text-white/90">Welcome to the Next Generation</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif tracking-tight text-white mb-8 leading-[1.05] drop-shadow-2xl">
          The bridge between <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-white to-cream/70 italic font-light">robotics & adoption.</span>
        </h1>
        
        <p className="text-xl md:text-2xl leading-relaxed text-white/50 max-w-3xl font-light mb-14 tracking-wide">
          Operate robots. Generate data. Train better AI. 
          <br className="hidden md:block" />
          The ultimate directory for Web3 builders.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button className="group relative w-full sm:w-auto rounded-full bg-cream text-background px-10 py-5 text-base font-bold shadow-[0_0_40px_rgba(223,216,208,0.2)] hover:shadow-[0_0_60px_rgba(223,216,208,0.4)] hover:scale-[1.02] transition-all duration-500 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-3">
              Explore Directory <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
          <a href="#submit" className="group w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-10 py-5 text-base font-bold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-md flex items-center justify-center shadow-lg">
            Submit a Build
          </a>
        </div>
      </div>
    </section>
  );
}
