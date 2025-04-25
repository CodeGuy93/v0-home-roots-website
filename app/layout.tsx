import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HomeRoots - Your Homeschooling Resource",
  description: "Find homeschooling resources, requirements, and community support.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <ErrorBoundary>
            <main>{children}</main>
          </ErrorBoundary>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
