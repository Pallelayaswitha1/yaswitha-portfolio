"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "AI in Industrial Production: Practical Lessons",
    excerpt:
      "Insights from real-world AI projects that help bridge the gap between data science and production environments.",
    date: "2025-02-10",
    readTime: "7 min read",
    tags: ["AI", "Production", "Industrial"],
  },
  {
    id: 2,
    title: "Building Forecasting Dashboards for Smart Operations",
    excerpt: "A guide to developing analytics solutions for production planning and decision support.",
    date: "2025-01-18",
    readTime: "6 min read",
    tags: ["Forecasting", "Analytics", "Power BI"],
  },
  {
    id: 3,
    title: "Deploying Computer Vision for Quality Control",
    excerpt: "How computer vision can improve inspection workflows and reduce manual inspection time.",
    date: "2024-12-05",
    readTime: "8 min read",
    tags: ["Computer Vision", "YOLO", "Quality"],
  },
]

const openSourceProjects = [
  {
    name: "production-insights",
    description: "An analytics toolkit for manufacturing data visualization and KPI tracking.",
    stars: 128,
    language: "TypeScript",
  },
  {
    name: "ai-monitoring-dashboard",
    description: "A dashboard prototype for monitoring model performance in industrial settings.",
    stars: 92,
    language: "Python",
  },
  {
    name: "data-pipeline-template",
    description: "A reusable template for ETL workflows and analytics automation.",
    stars: 74,
    language: "SQL",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Insights & Open Source</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-100">Blog & Open Source</h2>
          <p className="mt-6 text-slate-300 leading-8">
            Articles, project notes, and open source work that highlight AI, analytics, and production management.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30"
              >
                <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">{post.title}</h3>
                <p className="text-slate-300 leading-7 mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-slate-950/80 text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border border-cyan-500/30 text-cyan-200 hover:bg-cyan-500/10"
                >
                  Read article
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30"
              >
                <div className="mb-3 flex items-center justify-between text-slate-400">
                  <span className="text-sm font-medium text-slate-200">{project.name}</span>
                  <span className="text-sm">⭐ {project.stars}</span>
                </div>
                <p className="text-slate-300 leading-7 mb-5">{project.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-slate-950/80 text-slate-300">
                    {project.language}
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-cyan-300 hover:text-cyan-200">
                    View repo
                  </Button>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30"
            >
              <CardHeader>
                <CardTitle className="text-slate-100">Contributor Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 70 }).map((_, index) => (
                    <div key={index} className="h-3 rounded-sm bg-slate-800" />
                  ))}
                </div>
                <p className="mt-4 text-slate-400 text-sm">Maintaining consistent contributions and project updates.</p>
              </CardContent>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
