"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SKILL_LIST_STRING } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsList = SKILL_LIST_STRING.split(",");

  useEffect(() => {
    if (!containerRef.current) return;

    const icons = containerRef.current.querySelectorAll(".floating-icon");
    
    icons.forEach((icon) => {
      // Subtle floating animation for each icon
      gsap.to(icon, {
        x: "random(-10, 10)",
        y: "random(-15, 15)",
        rotation: "random(-5, 5)",
        duration: "random(4, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });

    // Fade in with ScrollTrigger
    gsap.from(containerRef.current.querySelectorAll("h3, .floating-icon"), {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
          onRefresh: (self) => {
            if (self.progress > 0) {
              gsap.set(containerRef.current!.querySelectorAll("h3, .floating-icon"), { opacity: 1, y: 0 });
            }
          }
        },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out"
    });
  }, []);

  return (
    <section className="py-10 md:py-16 relative min-h-[500px] flex flex-col items-center justify-center overflow-visible">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="text-center mb-20">
        <h3 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
            TECHNOLOGY <span className="text-accent italic underline">ARSENAL.</span>
        </h3>
      </div>

      <div 
        ref={containerRef}
        className="max-w-4xl w-full flex flex-wrap justify-center items-center gap-8 md:gap-14 px-6 mt-10"
      >
        {skillsList.map((skill, i) => (
          <div 
            key={i}
            className="floating-icon group relative cursor-pointer"
          >
            <img 
              src={`https://skillicons.dev/icons?i=${skill}`} 
              alt={skill} 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_15px_40px_rgba(249,115,22,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-accent bg-surface/90 border border-border px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-md shadow-lg">
                    {skill}
                </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
