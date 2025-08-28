"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header id="site-header" className="site-header bg-primary text-primary-foreground relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <h1 className="header-title text-xl sm:text-2xl font-bold">
              <Link
                href="/"
                className="header-logo-link hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
                aria-label="My Website - Home"
              >
                My Website
              </Link>
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Main navigation">
              <ul className="nav-list flex gap-6 lg:gap-8">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-2 py-1"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/about"
                    className="nav-link text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-2 py-1"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/services"
                    className="nav-link text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-2 py-1"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/portfolio"
                    className="nav-link text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-2 py-1"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contact"
                    className="nav-link text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-2 py-1"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-menu-toggle md:hidden p-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm relative z-50"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id="mobile-menu"
        className={`mobile-nav fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-primary text-primary-foreground z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="p-6 pt-20">
          <ul className="nav-list space-y-4">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link block text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-4 py-3 min-h-[44px] flex items-center text-lg border-b border-primary-foreground/20"
                aria-current="page"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="nav-link block text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-4 py-3 min-h-[44px] flex items-center text-lg border-b border-primary-foreground/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/services"
                className="nav-link block text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-4 py-3 min-h-[44px] flex items-center text-lg border-b border-primary-foreground/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/portfolio"
                className="nav-link block text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-4 py-3 min-h-[44px] flex items-center text-lg border-b border-primary-foreground/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className="nav-link block text-primary-foreground hover:opacity-80 font-medium transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-sm px-4 py-3 min-h-[44px] flex items-center text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
