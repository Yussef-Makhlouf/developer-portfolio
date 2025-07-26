"use client"

import { texts } from "@/lib/texts"
import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {

  const stats = [
    { value: 150, suffix: "+", label: texts.projectsCompleted },
    { value: 98, suffix: "%", label: texts.clientsSatisfied },
    { value: 5, suffix: "+", label: texts.yearsExperience },
    { value: 200, suffix: "+", label: texts.googleRankings },
  ]

  return (
    <section className="py-16 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 font-handicrafts-black">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium font-handicrafts">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
