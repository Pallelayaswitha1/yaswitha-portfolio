"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentTheme = theme === "system" ? resolvedTheme : theme
  const isDark = currentTheme === "dark"

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const navBackground = scrolled
    ? isDark
      ? "bg-slate-950/95"
      : "bg-white/95"
    : isDark
    ? "bg-transparent"
    : "bg-white/80"

  const navText = isDark ? "text-slate-100" : "text-slate-950"
  const navLink = isDark ? "text-slate-300 hover:text-cyan-300" : "text-slate-600 hover:text-cyan-600"
  const navBorder = isDark ? "border-white/10" : "border-slate-200/70"
  const mobileBg = isDark ? "bg-slate-950/95" : "bg-white/95"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b ${navBorder} transition-all duration-300 ${navBackground}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className={`text-base font-semibold tracking-wide uppercase ${navText}`}>
            Yaswitha Pallela
          </div>

          <div className={`hidden md:flex items-center gap-8 ${navText}`}>
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className={`${navLink} transition-colors duration-200`}>
                {item.name}
              </a>
            ))}
            {mounted ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className={isDark ? "text-slate-100 hover:text-cyan-300" : "text-slate-950 hover:text-cyan-600"}
              >
                {currentTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            ) : (
              <Button variant="ghost" size="icon" className="text-slate-100 opacity-0 pointer-events-none" aria-hidden="true" />
            )}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className={isDark ? "text-slate-100" : "text-slate-950"}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden mt-4 rounded-3xl border ${navBorder} ${mobileBg} p-4 backdrop-blur-xl`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-3 ${navText} ${isDark ? "hover:text-cyan-300" : "hover:text-cyan-600"} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
