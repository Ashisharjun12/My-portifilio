"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Github, Linkedin, Mail, Code, Cpu, Globe, Database, Server } from "lucide-react";

const FLOATING_ICONS = [
  { Icon: Code, top: "20%", left: "10%", size: 40, delay: 0 },
  { Icon: Cpu, top: "70%", left: "15%", size: 32, delay: 1 },
  { Icon: Globe, top: "25%", left: "80%", size: 48, delay: 2 },
  { Icon: Database, top: "60%", left: "85%", size: 36, delay: 1.5 },
  { Icon: Server, top: "15%", left: "50%", size: 28, delay: 0.5 },
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
      
      gsap.from(".profile-img", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
      });

      // Floating Animation for background icons
      gsap.to(".floating-icon", {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden"
    >
      {/* Background Floating Icons */}
      {FLOATING_ICONS.map(({ Icon, top, left, size, delay }, i) => (
        <div
          key={i}
          className="floating-icon absolute text-accent/10 pointer-events-none z-[-1]"
          style={{ top, left }}
        >
          <Icon size={size} />
        </div>
      ))}

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-foreground/5 pointer-events-none select-none -z-10 uppercase">
        Ashish
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="flex-1 order-2 md:order-1">
          <div className="overflow-hidden mb-6">
            <p className="hero-line text-accent font-mono text-xs md:text-sm tracking-[0.4em] uppercase font-black">
              Based in Bihar, Patna, India
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.8] tracking-tighter">
            <div className="overflow-hidden">
              <span className="hero-line block">FULL</span>
            </div>
            <div className="overflow-hidden text-accent">
              <span className="hero-line block">STACK</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block">DEVELOPER.</span>
            </div>
          </h1>

          <p className="hero-fade max-w-xl text-dim text-lg md:text-xl leading-relaxed mb-12">
            Winner of Smart India Hackathon 2024. Building scalable backend architectures 
            and modern frontend experiences with Node.js, React, and AWS.
          </p>

          <div className="hero-fade flex flex-wrap gap-6 items-center">
            <a
              href="#contact"
              className="group flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_10px_30px_rgba(249,115,22,0.4)]"
            >
              Hire Me <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <a
              href="https://ik.imagekit.io/aevhlnk0h/resume-final.pdf?updatedAt=1770689115400"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 border-2 border-border text-foreground rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden"
            >
              <span className="relative z-10">Get Resume</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <div className="flex gap-4 ml-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/Ashisharjun12" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/ashish-raj-300943188" },
                { icon: <Mail size={20} />, href: "mailto:ashishrahul748@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-14 h-14 border border-border rounded-full flex items-center justify-center text-dim hover:text-accent hover:border-accent hover:scale-110 transition-all bg-surface/50 backdrop-blur-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative order-1 md:order-2 shrink-0">
            <div className="profile-img relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-accent/20 shadow-[0_0_80px_rgba(249,115,22,0.2)]">
                <img 
                    src="https://github.com/Ashisharjun12.png" 
                    alt="Ashish Kumar"
                    className="w-full h-full object-cover transition-all duration-700 scale-110 hover:scale-100"
                />
            </div>
            {/* Decorative Orbits */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-accent/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-accent/5 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
        </div>
      </div>
    </section>
  );
}
