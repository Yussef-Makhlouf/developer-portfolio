"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

interface AnimatedServiceIconProps {
  icon: LucideIcon
  color: string
  gradient: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "pulse" | "glow" | "float" | "rotate"
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16", 
  lg: "w-20 h-20",
  xl: "w-24 h-24"
}

const iconSizes = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10", 
  xl: "h-12 w-12"
}

export function AnimatedServiceIcon({ 
  icon: Icon, 
  color, 
  gradient, 
  size = "md",
  variant = "pulse" 
}: AnimatedServiceIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    pulse: {
      scale: isHovered ? 1.1 : 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    glow: {
      scale: isHovered ? 1.05 : 1,
      boxShadow: isHovered 
        ? "0 0 30px rgba(99, 102, 241, 0.5)" 
        : "0 0 0px rgba(99, 102, 241, 0)",
      transition: { duration: 0.3 }
    },
    float: {
      y: isHovered ? -8 : 0,
      rotate: isHovered ? [0, -5, 5, 0] : 0,
      transition: { 
        duration: 0.4,
        rotate: { duration: 0.6, repeat: isHovered ? Infinity : 0 }
      }
    },
    rotate: {
      rotate: isHovered ? 360 : 0,
      scale: isHovered ? 1.1 : 1,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  }

  const iconVariants = {
    pulse: {
      scale: isHovered ? [1, 1.2, 1] : 1,
      transition: { duration: 0.5, repeat: isHovered ? Infinity : 0 }
    },
    glow: {
      filter: isHovered ? "brightness(1.2)" : "brightness(1)",
      transition: { duration: 0.3 }
    },
    float: {
      scale: isHovered ? 1.1 : 1,
      transition: { duration: 0.3 }
    },
    rotate: {
      scale: isHovered ? 1.1 : 1,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center ${color} relative cursor-pointer overflow-hidden`}
      variants={containerVariants[variant]}
      animate={variant}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background gradient overlay */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0`}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated rings */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary/20"
        animate={{ 
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.5, 0, 0.5] : 0
        }}
        transition={{ 
          duration: 1.5, 
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      
      {/* Icon */}
      <motion.div variants={iconVariants[variant]} animate={variant}>
        <Icon className={iconSizes[size]} />
      </motion.div>
      
      {/* Glow effect */}
      {variant === "glow" && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-xl`}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Sparkle particles */}
      {isHovered && variant === "pulse" && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: (Math.cos(i * 60 * Math.PI / 180) * 40),
                y: (Math.sin(i * 60 * Math.PI / 180) * 40),
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  )
} 