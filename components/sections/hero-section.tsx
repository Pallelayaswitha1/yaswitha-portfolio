"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pb-10">
      <div className="container mx-auto px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-500/80">
              Master's Student | AI for Digital Production Management
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 leading-tight">
              Yaswitha Pallela
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Practical AI, data analytics, and production automation for measurable results in intelligent manufacturing.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-cyan-400/30 bg-white/10 text-slate-950 hover:bg-cyan-500/10 dark:border-cyan-500/30 dark:bg-slate-950/80 dark:text-slate-100"
              >
                <a href="/Yaswitha_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:bg-slate-900 dark:bg-slate-900/90"
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="rounded-[2rem] border border-slate-200/40 bg-white/95 p-6 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/90 dark:shadow-slate-950/30">
              <div className="relative w-[22rem] h-[22rem] overflow-hidden rounded-full border border-slate-200/80 bg-slate-100 shadow-inner shadow-slate-950/5 dark:border-white/10 dark:bg-slate-800">
                <img
                  src="/profile.png"
                  alt="Portrait of Yaswitha Pallela"
                  className="w-full h-full object-cover rounded-full object-[center_15%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
