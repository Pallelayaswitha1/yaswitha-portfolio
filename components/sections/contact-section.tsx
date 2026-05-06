"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent",
      description: "Your message has been received. I will get back to you shortly.",
    })

    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Reach Out</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-100">Contact</h2>
          <p className="mt-6 text-slate-300 leading-8">
            I am open to internship and working student opportunities in AI, analytics and production management.
            Send a message below to discuss collaboration or next steps.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30">
              <CardHeader>
                <CardTitle className="text-slate-100">Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-950/80 text-slate-100 placeholder:text-slate-500"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-950/80 text-slate-100 placeholder:text-slate-500"
                    required
                  />
                  <Textarea
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-950/80 text-slate-100 placeholder:text-slate-500 min-h-[180px]"
                    required
                  />
                  <Button type="submit" className="w-full rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30">
              <CardHeader>
                <CardTitle className="text-slate-100">Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Email</p>
                    <p className="mt-1 font-medium text-slate-100">pallelayaswitha20@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Location</p>
                    <p className="mt-1 font-medium text-slate-100">Germany</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">LinkedIn</p>
                    <p className="mt-1 font-medium text-slate-100">www.linkedin.com/in/yaswitha-pallela-2a0y</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">GitHub</p>
                    <p className="mt-1 font-medium text-slate-100">https://github.com/pallelayaswitha1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30">
              <CardHeader>
                <CardTitle className="text-slate-100">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-7">
                  Working Student 20h/week or 6-month full-time internship
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
