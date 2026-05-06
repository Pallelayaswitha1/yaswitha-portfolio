"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Zap } from "lucide-react"

const learningData = [
  { name: "WebAssembly", progress: 75, icon: "🔧" },
  { name: "Rust", progress: 60, icon: "🦀" },
  { name: "Machine Learning", progress: 45, icon: "🤖" },
  { name: "Blockchain", progress: 30, icon: "⛓️" },
]

export default function CurrentlyLearningWidget() {
  return (
    <Card className="glass-morphism border-white/10 hover:border-cyan-400/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-100">
          <BookOpen className="h-5 w-5 text-cyan-300" />
          Currently Learning
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {learningData.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-100">
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>
              <span className="text-sm text-slate-400">{item.progress}%</span>
            </div>
            <Progress value={item.progress} className="h-2 bg-slate-800" />
          </motion.div>
        ))}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-4"
        >
          <div className="flex items-center gap-2 mb-2 text-slate-100">
            <Zap className="h-4 w-4 text-cyan-300" />
            <span className="font-semibold">Next up:</span>
          </div>
          <div className="text-slate-400">Exploring production-focused AI workflows and analytics automation</div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
