"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="/placeholder.svg?height=40&width=40&query=tree logo with roots"
                alt="HomeRoots Logo"
                width={40}
                height={40}
              />
            </div>
            <span className="font-bold text-xl text-green-800">HomeRoots</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-green-700 transition-colors">
              Resources
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition-colors">
              State Laws
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-green-700 hover:bg-green-800">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              State Laws
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-green-700 hover:bg-green-800" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
