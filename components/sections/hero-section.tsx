"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300/80">
              Master's Student | AI for Digital Production Management
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-slate-100 leading-tight">
              Yaswitha Pallela
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Building practical AI, data analytics, and digital production solutions for real-world industrial challenges.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
  href="/Yaswitha_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/40 px-8 py-6 text-lg text-white hover:bg-cyan-500/10"
  >
    <Download className="mr-2 h-4 w-4" />
    Download Resume
  </Button>
</a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:bg-slate-900"
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
              <div className="w-64 h-64 rounded-full bg-slate-800 border-2 border-dashed border-cyan-500/30 flex items-center justify-center text-slate-500">
                <img
  src="/profile.jpg.png"
  alt="Yaswitha Pallela"
  className="w-full h-full object-cover rounded-full"
/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
