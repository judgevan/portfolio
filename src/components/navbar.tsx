"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Judgevan.dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="block">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block">Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block">Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block">Contact</a>
        </div>
      )}
    </nav>
  )
}
