"use client"

import { useEffect, useState } from "react"

interface EnhancedGridBackgroundProps {
  variant?: "default" | "animated" | "gradient" | "hex" | "dots"
  className?: string
}

export function EnhancedGridBackground({ 
  variant = "default", 
  className = "" 
}: EnhancedGridBackgroundProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    // Initial check
    checkDarkMode()

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  const getGridClass = () => {
    const baseClass = "absolute inset-0"
    
    switch (variant) {
      case "animated":
        return `${baseClass} ${isDark ? 'bg-grid-animated-dark' : 'bg-grid-animated'}`
      case "gradient":
        return `${baseClass} ${isDark ? 'bg-grid-gradient-dark' : 'bg-grid-gradient'}`
      case "hex":
        return `${baseClass} ${isDark ? 'bg-grid-hex-dark' : 'bg-grid-hex'}`
      case "dots":
        return `${baseClass} ${isDark ? 'bg-grid-pattern-dots-dark' : 'bg-grid-pattern-dots'}`
      default:
        return `${baseClass} ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'}`
    }
  }

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* Main Grid Pattern */}
      <div className={getGridClass()}></div>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>

      {/* Radial gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.1),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.15),transparent)]"></div>
      
      {/* Additional depth gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(147,197,253,0.05),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(196,181,253,0.05),transparent)]"></div>

      {/* Floating particles for animated variant */}
      {variant === "animated" && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
} 