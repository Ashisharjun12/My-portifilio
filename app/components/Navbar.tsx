"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header 
      className={cn(
        "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-in-out w-[92%] sm:w-[90%] md:w-[85%] lg:w-[75%]",
        scrolled ? "opacity-100" : "opacity-100"
      )}
    >
      <div className="bg-surface/70 backdrop-blur-2xl border border-border/40 rounded-full px-4 sm:px-5 md:px-8 py-2.5 md:py-4 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <span className="text-base sm:text-lg md:text-xl font-black tracking-tighter uppercase group-hover:text-accent transition-colors">
            Ashish<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-5 lg:px-6 py-2 rounded-full text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-500",
                pathname === link.href 
                    ? "bg-accent text-white shadow-lg shadow-orange-500/20" 
                    : "text-dim hover:text-foreground hover:bg-surface/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-border flex items-center justify-center text-dim hover:text-accent hover:border-accent transition-all bg-background/40 hover:scale-110 active:scale-95 shadow-lg shadow-black/20"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="https://ik.imagekit.io/aevhlnk0h/resume-final.pdf?updatedAt=1770689115400"
            target="_blank"
            className="hidden sm:flex px-6 md:px-8 py-3 bg-accent text-white rounded-full text-[11px] font-black tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-orange-500/20"
          >
            Resume
          </Link>

          <button 
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-3xl border border-border/60 rounded-[3rem] p-10 md:hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] z-[101]"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-black tracking-tighter uppercase transition-colors",
                    pathname === link.href ? "text-accent" : "text-foreground hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border/30 my-4" />
              <Link
                href="https://ik.imagekit.io/aevhlnk0h/resume-final.pdf?updatedAt=1770689115400"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="w-full py-5 bg-accent text-white rounded-full text-center font-black uppercase tracking-[0.3em] text-sm shadow-2xl"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
