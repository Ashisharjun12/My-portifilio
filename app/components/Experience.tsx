"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  
  // Motion values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the preview movement
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="experience" className="py-32 px-6 md:px-20 relative">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter sticky top-32">
            CAREER <br /> <span className="text-accent underline">TIMELINE</span>
          </h2>
        </div>
        
        <div className="md:w-2/3 flex flex-col gap-0 border-t border-border/50">
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="exp-card group py-12 border-b border-border/50 hover:px-6 transition-all cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredExp(i)}
                onMouseLeave={() => setHoveredExp(null)}
            >
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">{exp.company}</h3>
                <span className="text-sm font-mono text-dim group-hover:text-accent/60 transition-colors uppercase font-black tracking-widest">{exp.period}</span>
              </div>
              <p className="text-accent/80 font-mono text-xs uppercase tracking-widest mb-4 font-black relative z-10">{exp.role}</p>
              <p className="text-dim text-lg leading-relaxed group-hover:text-foreground transition-colors relative z-10">{exp.desc}</p>
              
              {/* Hover Background */}
              <div className="absolute inset-0 bg-accent/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Hover Preview */}
      <motion.div 
        style={{ 
          x: springX, 
          y: springY,
          opacity: hoveredExp !== null && EXPERIENCES[hoveredExp].image !== "#" ? 1 : 0,
          scale: hoveredExp !== null ? 1 : 0,
          rotate: hoveredExp !== null ? 0 : 12,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-300"
      >
        <div 
            className={cn(
                "w-[400px] h-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border-4 border-accent shadow-[0_30px_60px_rgba(249,115,22,0.4)] bg-surface/80 backdrop-blur-3xl rounded-[3rem]"
            )}
        >
            {hoveredExp !== null && EXPERIENCES[hoveredExp].image !== "#" && (
                <img 
                    src={EXPERIENCES[hoveredExp].image} 
                    alt="Preview" 
                    className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                />
            )}
        </div>
      </motion.div>
    </section>
  );
}
