"use client"

import { useEffect, useState } from "react"

export function TopFadeGrid() {
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

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" dir="ltr">
      {/* Enhanced Grid Pattern - Responsive sizing with RTL support */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-grid-pattern-dark' 
          : 'bg-grid-pattern'
      }`} style={{
        backgroundSize: 'clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px)',
        backgroundPosition: 'center center'
      }}></div>

      {/* Animated Grid Pattern - Responsive sizing with RTL support */}
      <div className={`absolute inset-0 opacity-20 sm:opacity-30 ${
        isDark 
          ? 'bg-grid-animated-dark' 
          : 'bg-grid-animated'
      }`} style={{
        backgroundSize: 'clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px)',
        backgroundPosition: 'center center'
      }}></div>

      {/* Gradient Grid Pattern - Responsive sizing with RTL support */}
      <div className={`absolute inset-0 opacity-15 sm:opacity-20 ${
        isDark 
          ? 'bg-grid-gradient-dark' 
          : 'bg-grid-gradient'
      }`} style={{
        backgroundSize: 'clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px)',
        backgroundPosition: 'center center'
      }}></div>

      {/* Top fade overlay - Enhanced for mobile with RTL support */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background/95 sm:from-background sm:via-background/95 sm:to-background/90"></div>

      {/* Enhanced Radial gradient for depth - Mobile optimized with RTL support */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_50%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_90%_60%_at_50%_50%,rgba(120,119,198,0.15),transparent)] sm:bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(120,119,198,0.15),transparent)] sm:dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(120,119,198,0.2),transparent)]"></div>

      {/* Additional radial gradients for more depth - Mobile optimized with RTL support */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(circle_at_25%_50%,rgba(147,197,253,0.08),transparent)] sm:bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent)] sm:dark:bg-[radial-gradient(circle_at_20%_50%,rgba(147,197,253,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(139,92,246,0.08),transparent)] dark:bg-[radial-gradient(circle_at_75%_50%,rgba(196,181,253,0.08),transparent)] sm:bg-[radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.1),transparent)] sm:dark:bg-[radial-gradient(circle_at_80%_50%,rgba(196,181,253,0.1),transparent)]"></div>

      {/* Additional fade at bottom - Mobile optimized */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent"></div>

      {/* Floating particles effect - Reduced for mobile with RTL support */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary/15 sm:bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Mobile-specific grid enhancement with RTL support */}
      <div className="absolute inset-0 sm:hidden">
        <div className={`absolute inset-0 opacity-10 ${
          isDark 
            ? 'bg-grid-pattern-dots-dark' 
            : 'bg-grid-pattern-dots'
        }`} style={{
          backgroundSize: '20px 20px',
          backgroundPosition: 'center center'
        }}></div>
      </div>

      {/* Arabic-specific grid enhancement */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 opacity-5 ${
          isDark 
            ? 'bg-grid-pattern-arabic-dark' 
            : 'bg-grid-pattern-arabic'
        }`} style={{
          backgroundSize: '32px 32px',
          backgroundPosition: 'center center'
        }}></div>
      </div>
    </div>
  )
}
