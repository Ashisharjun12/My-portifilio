"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/data";

export default function Education() {

  return (
    <section id="education" className="py-32 px-6 md:px-20 bg-surface/5">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter sticky top-32 uppercase leading-[0.9]">
            Academic <br /> <span className="text-accent underline italic">Path.</span>
          </h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-8">
          {EDUCATION.map((edu, i) => (
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
              className="edu-card group bg-background/50 border border-border/50 p-10 rounded-[3.5rem] hover:border-accent transition-all hover:scale-[1.02] shadow-xl"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">{edu.degree}</h3>
                  <p className="text-accent font-mono text-sm">{edu.period}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                  <span className="text-dim uppercase tracking-widest text-xs font-black">Institution</span>
                  <span className="font-bold text-foreground">{edu.institution}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
