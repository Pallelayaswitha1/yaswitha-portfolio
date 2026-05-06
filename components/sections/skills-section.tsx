"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "AI & Data",
    skills: ["Python", "Pandas", "NumPy", "scikit-learn", "Machine Learning", "Computer Vision", "Forecasting"],
  },
  {
    title: "Analytics & Reporting",
    skills: ["Power BI", "MS Excel", "KPI Reporting", "Data Visualization", "Trend Analysis"],
  },
  {
    title: "Production & Business",
    skills: ["Production Systems", "Quality Inspection", "Process Documentation", "Strategic Analysis", "ERP/MES Fundamentals"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "MS PowerPoint", "Google Cloud Fundamentals", "Gemini-based GenAI workflows"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Core Skill Areas</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-100">Skills</h2>
          <p className="mt-6 text-slate-300 leading-8">
            A focused skill set for applied AI, data analytics, and intelligent production environments.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30"
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-4">{group.title}</h3>
              <ul className="space-y-3 text-slate-300">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
