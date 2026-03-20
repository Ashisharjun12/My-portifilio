"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Education from "../components/Education";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EducationPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <section className="pt-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="flex items-center gap-2 text-dim hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <Education />
        </div>
      </section>
      <Footer />
    </main>
  );
}
