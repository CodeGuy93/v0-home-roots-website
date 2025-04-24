"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user")
    setIsLoggedIn(!!user)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          HomeRoots
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/states" className="text-sm font-medium hover:text-primary">
            State Laws
          </Link>
          <Link href="/starter-kits" className="text-sm font-medium hover:text-primary">
            Starter Kits
          </Link>
          <Link href="#marketplace" className="text-sm font-medium hover:text-primary">
            Marketplace
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-primary">
            Community
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
          {isLoggedIn ? (
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/signin">Sign in</Link>
            </Button>
          )}
          <ModeToggle />
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="font-bold text-2xl">
                HomeRoots
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container grid gap-6 py-6">
              <Link
                href="/states"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                State Laws
              </Link>
              <Link
                href="/starter-kits"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Starter Kits
              </Link>
              <Link
                href="#marketplace"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                href="#community"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link href="#faq" className="text-lg font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              {isLoggedIn ? (
                <Link
                  href="/dashboard"
                  className="text-lg font-medium hover:text-primary flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/auth/signin"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </Link>
              )}
              <div className="flex items-center">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
