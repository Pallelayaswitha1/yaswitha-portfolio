"use client"
import { motion } from "framer-motion"

const education = [
  {
    degree: "M.Eng. AI for Digital Production Management",
    institution: "Deggendorf Institute of Technology",
    location: "Germany",
    period: "2025 – Present",
    details: ""
  },
  {
    degree: "B.Eng. Electronics and Communication Engineering",
    institution: "Sri Venkateswara Engineering College",
    location: "India",
    period: "2020 – 2024",
    details: "Final Grade: 2.0"
  }
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Academic Background</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-100">Education</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-100">{edu.degree}</h3>
                <p className="text-sm text-cyan-300/80 mt-1 sm:mt-0">{edu.period}</p>
              </div>
              <p className="text-slate-300 mb-2">{edu.institution}, {edu.location}</p>
              {edu.details && <p className="text-slate-400 text-sm">{edu.details}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}