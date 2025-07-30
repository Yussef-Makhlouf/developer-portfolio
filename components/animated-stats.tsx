"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Users, Award, Clock, CheckCircle2, Star } from "lucide-react"

interface StatItem {
  icon: any
  value: number
  label: string
  suffix?: string
  prefix?: string
  color: string
  gradient: string
}

const stats: StatItem[] = [
  {
    icon: CheckCircle2,
    value: 200,
    label: "مشروع مكتمل",
    suffix: "+",
    color: "text-green-600",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    value: 150,
    label: "عميل راضٍ",
    suffix: "+",
    color: "text-blue-600", 
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    value: 98,
    label: "معدل النجاح",
    suffix: "%",
    color: "text-purple-600",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    value: 50,
    label: "مشروع حائز على جوائز",
    suffix: "+",
    color: "text-orange-600",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Clock,
    value: 24,
    label: "دعم مستمر",
    suffix: "/7",
    color: "text-red-600",
    gradient: "from-red-500 to-rose-500"
  },
  {
    icon: Star,
    value: 4.9,
    label: "تقييم العملاء",
    suffix: "/5",
    color: "text-yellow-600",
    gradient: "from-yellow-500 to-amber-500"
  }
]

function AnimatedCounter({ 
  value, 
  duration = 2000, 
  prefix = "", 
  suffix = "" 
}: { 
  value: number
  duration?: number
  prefix?: string
  suffix?: string 
}) {
  const [count, setCount] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && !isStarted) {
      setIsStarted(true)
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration, isStarted])

  return (
    <span ref={ref} className="font-handicrafts-black">
      {prefix}{count}{suffix}
    </span>
  )
}

export function AnimatedStats() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-handicrafts-black">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                أرقام تتحدث عن نجاحنا
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-handicrafts">
              نفخر بالإنجازات التي حققناها مع عملائنا والنتائج الاستثنائية التي نسعى لتحقيقها في كل مشروع
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-background rounded-2xl" />
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl ${stat.color.replace('text-', 'bg-').replace('600', '500/10')} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </motion.div>

                  {/* Value */}
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${stat.color}`}>
                    <AnimatedCounter 
                      value={stat.value} 
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2000 + index * 200}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-sm text-muted-foreground font-handicrafts leading-tight">
                    {stat.label}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`
                    }}
                    animate={{
                      y: [-10, -20, -10],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary font-handicrafts">
              في نمو مستمر ومتزايد
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 