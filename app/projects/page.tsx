"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MAJOR_PROJECTS, MINOR_PROJECTS } from "@/lib/data";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import gsap from "gsap";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"major" | "minor">("major");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const projects = activeTab === "major" ? MAJOR_PROJECTS : MINOR_PROJECTS;

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
        if (!previewRef.current || window.innerWidth <= 768) return;
        gsap.to(previewRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.8,
            ease: "power3.out",
        });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
        window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-32 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/"
            className="flex items-center gap-2 text-dim hover:text-accent transition-colors mb-8 md:mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-black uppercase tracking-widest">Back to Home</span>
          </Link>

          {/* Header & Tabs */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20 md:mb-24">
            <div className="w-full lg:w-auto">
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] break-words">
                    CRAFTING <span className="text-accent italic underline block sm:inline">PROJECTS.</span>
                </h1>
            </div>

            {/* Tab Toggle - Responsive */}
            <div className="flex p-1 bg-surface border border-border rounded-full backdrop-blur-xl w-full sm:w-auto overflow-x-auto sm:overflow-visible no-scrollbar">
                <button
                    onClick={() => setActiveTab("major")}
                    className={cn(
                        "flex-1 sm:flex-none px-6 sm:px-10 py-3 sm:py-4 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase transition-all whitespace-nowrap",
                        activeTab === "major" ? "bg-accent text-white shadow-lg" : "text-dim hover:text-foreground"
                    )}
                >
                    Major
                </button>
                <button
                    onClick={() => setActiveTab("minor")}
                    className={cn(
                        "flex-1 sm:flex-none px-6 sm:px-10 py-3 sm:py-4 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase transition-all whitespace-nowrap",
                        activeTab === "minor" ? "bg-accent text-white shadow-lg" : "text-dim hover:text-foreground"
                    )}
                >
                    Minor
                </button>
            </div>
          </div>

          {/* Projects List */}
          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
                >
                  {projects.map((project, i) => (
                    <div 
                      key={project.title}
                      className="group bg-surface/30 border border-border/50 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-10 hover:border-accent transition-all hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] relative overflow-hidden cursor-pointer"
                      onMouseEnter={() => setHoveredProject(i)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6 md:mb-8">
                          <h3 className="text-2xl md:text-4xl font-black tracking-tighter group-hover:text-accent transition-colors uppercase pr-4">
                            {project.title}
                          </h3>
                          <a 
                            href={project.link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-background border border-border rounded-full flex items-center justify-center text-dim hover:text-accent hover:border-accent transition-all group-hover:scale-110"
                          >
                            <ExternalLink size={18} />
                          </a>
                        </div>
                        
                        <div className="aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-6 md:mb-8 border border-border/30">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                          />
                        </div>

                        <p className="text-dim text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                          {activeTab === "major" ? project.desc : "Innovative side project explorations."}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, j) => (
                            <span key={j} className="text-[9px] md:text-[10px] uppercase font-mono tracking-widest bg-background/50 border border-border px-3 py-1 rounded-full text-dim group-hover:border-accent/30 group-hover:text-accent transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Accent Glow */}
                      <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors" />
                    </div>
                  ))}
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Floating Hover Preview - Optional on Mobile */}
      <div 
        ref={previewRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-300 opacity-0 hidden lg:block"
        style={{ opacity: hoveredProject !== null ? 1 : 0 }}
      >
        <div 
            className={cn(
                "w-[450px] h-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border-4 border-accent shadow-[0_30px_60px_rgba(249,115,22,0.4)] bg-surface/80 backdrop-blur-3xl transition-all duration-700 transform rounded-[3.5rem]",
                hoveredProject !== null ? "scale-100 rotate-0" : "scale-0 rotate-12"
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
      </div>

      <Footer />
    </main>
  );
}
