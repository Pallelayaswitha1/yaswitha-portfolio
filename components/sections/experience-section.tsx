"use client"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Production Assistant",
    company: "Avenir Photonics GmbH & Co. KG",
    location: "Regensburg, Germany",
    period: "July 2025 – August 2025",
    description: [
      "Supported production and quality workflows for optical measurement devices.",
      "Performed inspection, documentation, calibration support, and status tracking.",
      "Gained practical exposure to industrial processes, quality standards, and cross-functional coordination."
    ]
  },
  {
    title: "IoT Intern",
    company: "Verzeo Pvt. Ltd.",
    location: "Bangalore, India",
    period: "",
    description: [
      "Worked with IoT concepts including sensors, actuators, data processing, and device communication.",
      "Built foundational understanding of embedded technologies and connected intelligent devices."
    ]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Professional Experience</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-100">Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-100">{exp.title}</h3>
                <p className="text-sm text-cyan-300/80 mt-1 sm:mt-0">{exp.period}</p>
              </div>
              <p className="text-slate-300 mb-2">{exp.company}, {exp.location}</p>
              <ul className="space-y-2 text-slate-300 leading-7">
                {exp.description.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}