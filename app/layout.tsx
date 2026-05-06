import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Yaswitha Pallela — Applied AI & Data Portfolio",
  description: "Yaswitha Pallela is a Master's student in Applied Artificial Intelligence for Digital Production Management, showcasing AI, data analytics, and intelligent production systems.",
  keywords: ["AI", "data analytics", "portfolio", "digital production management", "internship"],
  authors: [{ name: "Yaswitha Pallela" }],
  openGraph: {
    title: "Yaswitha Pallela — Applied AI & Data Portfolio",
    description: "Exploring AI, data analytics, and intelligent production systems through real-world projects.",
    type: "website",
  },
  generator: "senotron",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
