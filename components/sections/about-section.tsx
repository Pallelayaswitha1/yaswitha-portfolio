"use client"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500/80">About Me</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-950 dark:text-slate-100">Professional Profile</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/95 p-8 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-slate-950/30">
            <p className="text-slate-700 dark:text-slate-300 leading-7 text-lg">
              I am a Master's student in AI for Digital Production Management at Deggendorf Institute of Technology, Germany. My work focuses on applying artificial intelligence, data analytics, and computer vision to practical industrial and production-related problems.
            </p>
            <p className="mt-6 text-slate-700 dark:text-slate-300 leading-7 text-lg">
              Through academic projects and hands-on industrial exposure, I have worked on AI-based monitoring, model benchmarking, forecasting, production strategy, and quality-oriented workflows. I am especially interested in roles where data, AI, and manufacturing knowledge come together to support better decisions and smarter production systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
