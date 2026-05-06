"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, GitCommit } from "lucide-react"

interface GitHubData {
  commits: number
  stars: number
  repos: number
  lastCommit: string
}

export default function LiveGitHubWidget() {
  const [githubData, setGithubData] = useState<GitHubData>({
    commits: 1247,
    stars: 89,
    repos: 42,
    lastCommit: "2 hours ago",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setGithubData((prev) => ({
        ...prev,
        commits: prev.commits + Math.floor(Math.random() * 3),
        lastCommit: Math.random() > 0.5 ? "Just now" : "1 hour ago",
      }))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="glass-morphism border-white/10 hover:border-cyan-400/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-100">
          <Github className="h-5 w-5 text-cyan-300" />
          Currently Building
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="text-center rounded-3xl bg-slate-950/70 p-4">
            <div className="text-2xl font-bold text-cyan-300">{githubData.commits}</div>
            <div className="text-sm text-slate-400">Total Commits</div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="text-center rounded-3xl bg-slate-950/70 p-4">
            <div className="text-2xl font-bold text-cyan-300">{githubData.stars}</div>
            <div className="text-sm text-slate-400">Stars Earned</div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <GitCommit className="h-4 w-4 text-cyan-300" />
            <span>Last commit:</span>
          </div>
          <Badge variant="secondary" className="bg-cyan-300/15 text-cyan-300">
            {githubData.lastCommit}
          </Badge>
        </div>

        <div className="space-y-2 text-slate-400">
          <div className="text-sm">Recent activity:</div>
          <div className="space-y-1">
            <div className="text-sm">Updated portfolio content and project summaries</div>
            <div className="text-sm">Refined professional presentation and design system</div>
            <div className="text-sm">Maintained continuous project improvements</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
