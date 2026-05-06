"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Window-State Detection using Computer Vision",
    description:
      "Built an AI-based workflow for detecting window states using computer vision methods, with focus on data preparation, model evaluation, and practical monitoring use cases.",
    tags: ["Computer Vision", "YOLOv8", "Monitoring", "Evaluation"],
  },
  {
    title: "Model Benchmarking for Automated Inspection",
    description:
      "Compared different vision models for automated quality inspection and summarized model trade-offs, performance metrics, and deployment considerations.",
    tags: ["Model Evaluation", "Quality Inspection", "AI", "Benchmarking"],
  },
  {
    title: "Forecasting for Business Planning",
    description:
      "Applied forecasting methods such as Prophet and ARIMA to support capacity planning, compare modeling approaches, and translate results into planning insights.",
    tags: ["Forecasting", "Prophet", "ARIMA", "Business Planning"],
  },
  {
    title: "Future-Proofing European Production",
    description:
      "Developed a strategy case study on digitalization, energy efficiency, automation, and long-term production transformation toward 2040.",
    tags: ["Industry 4.0", "Strategy", "Production Systems", "Roadmap"],
  },
  {
    title: "Malaria Diagnosis with Deep Learning",
    description:
      "Implemented a CNN-based image classification workflow for malaria diagnosis, including preprocessing, model training, validation, and performance evaluation.",
    tags: ["Deep Learning", "CNN", "Image Classification", "Evaluation"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Project Portfolio</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-100">Projects</h2>
          <p className="mt-6 text-slate-300 leading-8">
            A selection of practical AI and data projects focused on intelligent production systems, analytics, and
            industrial automation.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30"
            >
              <div className="mb-5">
                <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold text-cyan-200">
                  Project {index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">{project.title}</h3>
              <p className="text-slate-300 leading-7 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
