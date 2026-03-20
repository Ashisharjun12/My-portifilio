"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_LIST_STRING } from "@/lib/data";

export default function Skills() {
  const skillsList = SKILL_LIST_STRING.split(",");

  return (
    <section className="py-10 md:py-16 relative min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="text-center mb-8 sm:mb-20 px-6">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8]"
        >
            TECHNOLOGY <span className="text-accent italic underline">ARSENAL.</span>
        </motion.h3>
      </div>

      <div 
        className="max-w-4xl w-full flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-14 px-6 mt-10"
      >
        {skillsList.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.03,
              type: "spring",
              stiffness: 260,
              damping: 20,
              y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
