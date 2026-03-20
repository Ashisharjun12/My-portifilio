"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const CERTIFICATES = [
  {
    title: "Node.js Backend Development",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-dc0e0936-361d-4ac3-997e-9d0f624cdb7d",
    image: "https://ik.imagekit.io/aevhlnk0h/Screenshot%202026-03-20%20043313.png",
  },
  {
    title: "Docker Course",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-1979ad1e-d50f-4947-9493-2342feb94819/",
    image: "https://ik.imagekit.io/aevhlnk0h/Screenshot%202026-03-20%20043313.png",
  },
  {
    title: "Harkirat 100xDev Cohort 3",
    issuer: "Harkirat Singh",
    link: "https://ik.imagekit.io/aevhlnk0h/Ashish.pdf",
    image: "https://ik.imagekit.io/aevhlnk0h/Screenshot%202026-03-20%20043313.png",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-32 px-6 md:px-20 bg-surface/10 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-accent font-black mb-6">
            Recognition
          </h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Certificates & <span className="text-accent italic">Awards</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, i) => (
            <motion.a 
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="cert-card group p-8 bg-background/40 border border-border/50 rounded-[3rem] hover:border-accent transition-all relative overflow-hidden flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <h4 className="text-xl font-black tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h4>
                <p className="text-dim text-sm font-mono uppercase tracking-widest">{cert.issuer}</p>
              </div>

              <div className="mt-8 flex justify-end">
                <div 
                  className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-dim hover:text-accent hover:border-accent transition-all group-hover:animate-bounce-subtle"
                >
                  <ExternalLink size={20} />
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/10 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
