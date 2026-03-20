"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 md:px-20 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-xl">
          <p className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4">Let's connect</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 group cursor-pointer">
            <a href="mailto:ashishrahul748@gmail.com" className="hover:text-accent transition-colors">
              HIRE THE <br /> <span className="underline italic">TALENT.</span>
            </a>
          </h2>
          
          <div className="flex gap-4">
            {[
              { icon: <Github size={22} />, href: "https://github.com/Ashisharjun12" },
              { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/ashish-raj-300943188" },
              { icon: <Twitter size={22} />, href: "https://twitter.com" },
              { icon: <Mail size={22} />, href: "mailto:ashishrahul748@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-14 h-14 border border-border flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <button 
            onClick={scrollToTop}
            className="w-20 h-20 bg-accent text-bg flex items-center justify-center mb-8 hover:bg-white transition-colors group"
          >
            <ArrowUp className="group-hover:-translate-y-2 transition-transform" />
          </button>
          
          <p className="text-dim font-mono text-xs uppercase tracking-widest text-right">
            Designed & Built by <br /> <span className="text-white font-black">ASHISH KUMAR</span>
          </p>
          <p className="text-[10px] text-white/20 mt-4 uppercase">© 2024 ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
