"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Window-State Detection using Computer Vision",
    context:
      "Automated state detection for window monitoring in industrial workflows, with a focus on reliable dataset preparation and model evaluation.",
    tools: ["YOLOv8", "Python", "OpenCV"],
    outcome: "Validated detection accuracy and improved monitoring readiness for automation teams.",
  },
  {
    title: "Model Benchmarking for Automated Inspection",
    context:
      "Compared vision architectures for quality inspection to determine model trade-offs in accuracy, speed, and deployment readiness.",
    tools: ["TensorFlow", "PyTorch", "Model Evaluation"],
    outcome: "Delivered clear model recommendations for practical inspection workflows.",
  },
  {
    title: "Forecasting for Business Planning",
    context:
      "Used forecasting techniques to support capacity planning and compare model performance for production planning decisions.",
    tools: ["Prophet", "ARIMA", "Pandas"],
    outcome: "Produced actionable planning insights for demand and resource forecasting.",
  },
  {
    title: "Future-Proofing European Production",
    context:
      "Analyzed production transformation opportunities across automation, energy efficiency, and digitalization to 2040.",
    tools: ["Industry 4.0", "Strategy", "Roadmapping"],
    outcome: "Created a structured strategy case study for long-term production resilience.",
  },
  {
    title: "Malaria Diagnosis with Deep Learning",
    context:
      "Built an image classification workflow for malaria diagnosis with preprocessing, model training, and validation.",
    tools: ["CNN", "Python", "Data Validation"],
    outcome: "Demonstrated a complete diagnostic pipeline with performance insights.",
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
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500/80">Project Portfolio</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-950 dark:text-slate-100">Projects</h2>
          <p className="mt-6 text-slate-700 dark:text-slate-300 leading-8">
            A selection of practical AI and data projects focused on intelligent production systems, analytics, and industrial automation.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/95 p-6 shadow-xl shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/90 dark:shadow-slate-950/30"
            >
              <div className="mb-5">
                <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-semibold text-cyan-600 dark:text-cyan-200">
                  Project {index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-100 mb-4">{project.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-7 mb-4">{project.context}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Outcome: {project.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
