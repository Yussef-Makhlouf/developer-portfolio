"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface FlipWordsProps {
  words: string[]
  duration?: number
  className?: string
}

export function FlipWords({ words, duration = 3000, className }: FlipWordsProps) {
  // Ensure we have valid words array
  const validWords = Array.isArray(words) && words.length > 0 ? words : ["Loading..."]
  const [currentWord, setCurrentWord] = useState(validWords[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const startAnimation = useCallback(() => {
    const currentIndex = validWords.indexOf(currentWord)
    const nextIndex = (currentIndex + 1) % validWords.length
    const word = validWords[nextIndex]
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, validWords])

  useEffect(() => {
    if (!isAnimating && validWords.length > 1) {
      const timer = setTimeout(() => {
        startAnimation()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isAnimating, duration, startAnimation, validWords.length])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={className}
        key={currentWord}
      >
        {currentWord}
      </motion.div>
    </AnimatePresence>
  )
}
