"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { MAJOR_PROJECTS, MINOR_PROJECTS } from "@/lib/data";
import Link from "next/link";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"major" | "minor">("major");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = activeTab === "major" ? MAJOR_PROJECTS : MINOR_PROJECTS;

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
    <section id="projects" className="py-32 px-6 md:px-20 bg-surface/5 relative">
      <div className="max-w-7xl mx-auto mb-20 px-4 flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 uppercase leading-[0.8]">
                SELECTED <br /> <span className="text-accent underline italic">WORKS.</span>
            </h2>
            <p className="text-dim font-mono tracking-[0.4em] text-xs uppercase font-black">Crafting High-Performance Experiences</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex p-1 bg-background/50 border border-border rounded-full backdrop-blur-xl">
            <button
                onClick={() => setActiveTab("major")}
                className={cn(
                    "px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase transition-all",
                    activeTab === "major" ? "bg-accent text-white shadow-lg" : "text-dim hover:text-foreground"
                )}
            >
                Major
            </button>
            <button
                onClick={() => setActiveTab("minor")}
                className={cn(
                    "px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase transition-all",
                    activeTab === "minor" ? "bg-accent text-white shadow-lg" : "text-dim hover:text-foreground"
                )}
            >
                Minor
            </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
            <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="flex flex-col gap-4"
            >
                {projects.map((project, i) => (
                    <motion.div 
                        key={project.title} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                          duration: 0.8, 
                          delay: i * 0.1,
                          ease: [0.21, 0.47, 0.32, 0.98] 
                        }}
                        className="project-row group p-8 md:p-14 border border-border/50 bg-background/40 backdrop-blur-xl rounded-[3rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative transition-all hover:border-accent hover:shadow-2xl hover:shadow-orange-500/5 cursor-pointer overflow-hidden"
                        onMouseEnter={() => setHoveredProject(i)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <div className="flex items-center gap-8 md:gap-12 z-10 transition-transform group-hover:translate-x-2">
                            <span className="text-lg font-mono text-dim group-hover:text-accent font-black transition-colors">0{i + 1}</span>
                            <div>
                                <h3 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tighter group-hover:text-accent transition-colors uppercase select-none">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {project.tech.map((t, j) => (
                                        <span key={j} className="text-[10px] uppercase font-mono tracking-widest bg-surface/80 border border-border px-3 py-1 rounded-full group-hover:border-accent/40 group-hover:text-accent transition-all uppercase">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-12 items-center z-10">
                            <p className="hidden xl:block text-dim text-right max-w-xs group-hover:text-foreground transition-colors">{project.desc}</p>
                            <div className="flex gap-4">
                                <a href={project.link} target="_blank" className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                                    <ExternalLink size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Background Accent Glow */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors" />
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
            <Link 
                href="/projects"
                className="group flex items-center gap-4 px-12 py-6 bg-surface border border-border rounded-full font-black uppercase tracking-[0.2em] text-sm hover:border-accent hover:text-accent transition-all hover:scale-105 shadow-xl"
            >
                View All Projects <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>
      </div>

      {/* Floating Hover Preview - Large Rounded */}
      <motion.div 
        style={{ 
          x: springX, 
          y: springY,
          opacity: hoveredProject !== null ? 1 : 0,
          scale: hoveredProject !== null ? 1 : 0,
          rotate: hoveredProject !== null ? 0 : 12,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-300"
      >
        <div 
            className={cn(
                "w-[500px] h-[320px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border-4 border-accent shadow-[0_30px_60px_rgba(249,115,22,0.4)] bg-surface/80 backdrop-blur-3xl rounded-[3.5rem]"
            )}
        >
            {hoveredProject !== null && (
                <img 
                    src={projects[hoveredProject].image} 
                    alt="Preview" 
                    className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                />
            )}
        </div>
      </motion.div>
    </section>
  );
}
