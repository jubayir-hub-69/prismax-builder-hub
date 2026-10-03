"use client";

import Link from 'next/link';
import { User, Sparkles } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { useEffect, useState } from 'react';

export default function Header() {
  const { user, login } = useAppContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Directory", href: "#" },
    { name: "Groundbreakers", href: "#groundbreakers" },
    { name: "Submit", href: "#submit" },
  ];

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
      <div className="relative rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] before:from-cream/10 before:to-transparent">
        <div className="px-6 md:px-10 h-[4.5rem] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group relative">
            <span className="font-serif text-2xl font-bold text-cream tracking-wide group-hover:text-white transition-colors duration-500">PrismaX</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cream hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            {user ? (
              <div className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-mono font-medium text-white hover:border-cream/30 hover:bg-white/10 transition-all duration-500 cursor-default animate-in fade-in zoom-in duration-500 shadow-inner">
                <User className="w-4 h-4 text-cream group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">{user}</span>
              </div>
            ) : (
              <button 
                onClick={login}
                className="group relative overflow-hidden rounded-full px-8 py-2.5 text-sm font-bold text-background bg-cream transition-transform duration-500 hover:scale-[1.03] shadow-[0_0_20px_rgba(223,216,208,0.2)] hover:shadow-[0_0_30px_rgba(223,216,208,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Login
                </span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
