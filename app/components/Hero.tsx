"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Code, Cpu, Globe, Database, Server } from "lucide-react";

const FLOATING_ICONS = [
  { Icon: Code, top: "15%", left: "5%", size: 30, delay: 0 },
  { Icon: Cpu, top: "65%", left: "10%", size: 28, delay: 1 },
  { Icon: Globe, top: "20%", left: "85%", size: 40, delay: 2 },
  { Icon: Database, top: "55%", left: "90%", size: 32, delay: 1.5 },
  { Icon: Server, top: "10%", left: "45%", size: 24, delay: 0.5 },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 } as const
    }
  };

  const lineVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 } as const
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-28 pb-20 overflow-hidden"
    >
      {/* Background Floating Icons */}
      {FLOATING_ICONS.map(({ Icon, top, left, size, delay }, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
          className="floating-icon absolute text-accent/10 pointer-events-none z-[-1]"
          style={{ top, left }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-foreground/5 pointer-events-none select-none -z-10 uppercase">
        Ashish
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <motion.div variants={itemVariants} className="mb-6">
            <p className="hero-line text-accent font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.4em] uppercase font-black">
              Based in Bihar, Patna, India
            </p>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.8] tracking-tighter">
            <motion.div variants={lineVariants} className="overflow-hidden">
              <span className="block">FULL</span>
            </motion.div>
            <motion.div variants={lineVariants} className="overflow-hidden text-accent">
              <span className="block">STACK</span>
            </motion.div>
            <motion.div variants={lineVariants} className="overflow-hidden">
              <span className="block">DEVELOPER.</span>
            </motion.div>
          </h1>

          <motion.p variants={itemVariants} className="hero-fade max-w-xl mx-auto md:mx-0 text-dim text-base sm:text-lg md:text-xl leading-relaxed mb-12">
            Winner of Smart India Hackathon 2024. Building scalable backend architectures 
            and modern frontend experiences with Node.js, React, and AWS.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-fade flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-center justify-center md:justify-start">
            <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="group flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-accent text-white rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:scale-105 transition-all shadow-[0_10px_30px_rgba(249,115,22,0.4)]"
              >
                Hire Me <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              
              <a
                href="https://ik.imagekit.io/aevhlnk0h/resume-final.pdf?updatedAt=1770689115400"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 sm:px-10 py-4 sm:py-5 border-2 border-border text-foreground rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs overflow-hidden"
              >
                <span className="relative z-10">Get Resume</span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex gap-4 sm:ml-4 mt-4 sm:mt-0">
              {[
                { icon: <Github size={18} />, href: "https://github.com/Ashisharjun12" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/ashish-raj-300943188" },
                { icon: <Mail size={18} />, href: "mailto:ashishrahul748@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-11 h-11 sm:w-14 sm:h-14 border border-border rounded-full flex items-center justify-center text-dim hover:text-accent hover:border-accent hover:scale-110 transition-all bg-surface/50 backdrop-blur-sm shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.5 }}
          className="relative order-1 md:order-2 shrink-0"
        >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-accent/20 shadow-[0_0_80px_rgba(249,115,22,0.2)]">
                <img 
                    src="https://github.com/Ashisharjun12.png" 
                    alt="Ashish Kumar"
                    className="w-full h-full object-cover transition-all duration-700 scale-110 hover:scale-100"
                />
            </div>
            {/* Decorative Orbits */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-accent/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-accent/5 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </motion.section>
  );
}
