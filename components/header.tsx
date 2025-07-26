"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Sparkles, ChevronDown } from "lucide-react"
import { texts } from "@/lib/texts"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ["home", "about", "services", "portfolio", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100
      
      // Set home as active when at the top of the page
      if (scrollPosition < 200) {
        setActiveSection("home")
        return
      }
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    {key:"home", id: "home", text: "الرئيسية"},
    { key: "about", id: "about", text: texts.about },
    { key: "services", id: "services", text: texts.services },
    { key: "portfolio", id: "portfolio", text: texts.portfolio },
    { key: "testimonials", id: "testimonials", text: texts.testimonials },
    { key: "contact", id: "contact", text: texts.contact },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/5" 
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 flex-row-reverse">
          {/* Logo Section */}
          <div className="flex-shrink-0 relative group">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold font-handicrafts-black transition-all duration-300 group-hover:scale-105"
            >
              <div className="relative">
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {texts.heroTitle}
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-600/20 to-purple-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary animate-pulse" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-reverse space-x-8">
              {navItems.map((item) => (
                <div key={item.key} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium font-handicrafts transition-all duration-300 rounded-lg ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.text}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 transition-transform duration-300 ${
                      activeSection === item.id ? "scale-x-100" : "group-hover:scale-x-100"
                    }`}></div>
                  </button>
                </div>
              ))}
            </div>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-reverse space-x-4">
              {navItems.slice(0, 3).map((item) => (
                <div key={item.key} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 text-xs font-medium font-handicrafts transition-all duration-300 rounded-lg ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.text}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 transition-transform duration-300 ${
                      activeSection === item.id ? "scale-x-100" : "group-hover:scale-x-100"
                    }`}></div>
                  </button>
                </div>
              ))}
              <div className="relative group">
                <button className="relative px-3 py-2 text-xs font-medium font-handicrafts text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-lg flex items-center gap-1">
                  المزيد
                  <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-32 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {navItems.slice(3).map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 text-right font-handicrafts transition-all duration-200"
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-reverse space-x-3 sm:space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 relative group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}>
                <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}></span>
                <span className={`w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}></span>
                <span className={`w-5 h-0.5 bg-current mt-1 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg rounded-b-lg">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className={`block px-4 py-3 text-base font-medium font-handicrafts rounded-lg transition-all duration-300 w-full text-right transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`flex items-center justify-between ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}>
                  <span>{item.text}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
