"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Code2, Database, Palette, Globe, Shield, Zap } from "lucide-react"

interface TechItem {
  name: string
  category: string
  icon?: string
  description: string
  color: string
  gradient: string
}

const technologies: TechItem[] = [
  // Frontend
  { name: "React", category: "Frontend", description: "مكتبة JavaScript قوية لبناء واجهات المستخدم التفاعلية", color: "text-blue-500", gradient: "from-blue-500 to-cyan-500" },
  { name: "Next.js", category: "Frontend", description: "إطار عمل React للتطبيقات الحديثة والسريعة", color: "text-black dark:text-white", gradient: "from-gray-800 to-gray-600" },
  { name: "TypeScript", category: "Frontend", description: "JavaScript مع أنواع البيانات للكود الآمن والموثوق", color: "text-blue-600", gradient: "from-blue-600 to-blue-800" },
  { name: "Tailwind CSS", category: "Frontend", description: "إطار عمل CSS للتصميم السريع والمرن", color: "text-cyan-500", gradient: "from-cyan-500 to-teal-500" },
  
  // Backend
  { name: "Node.js", category: "Backend", description: "بيئة تشغيل JavaScript للخادم عالية الأداء", color: "text-green-600", gradient: "from-green-600 to-emerald-600" },
  { name: "Express.js", category: "Backend", description: "إطار عمل Node.js السريع والمرن للتطبيقات", color: "text-gray-600", gradient: "from-gray-600 to-gray-800" },
  { name: "Python", category: "Backend", description: "لغة برمجة قوية للتطبيقات المعقدة والذكاء الاصطناعي", color: "text-yellow-500", gradient: "from-yellow-500 to-orange-500" },
  { name: "Django", category: "Backend", description: "إطار عمل Python للتطبيقات الويب المتقدمة", color: "text-green-700", gradient: "from-green-700 to-green-900" },
  
  // Database
  { name: "MongoDB", category: "Database", description: "قاعدة بيانات NoSQL مرنة وقابلة للتوسع", color: "text-green-500", gradient: "from-green-500 to-green-700" },
  { name: "PostgreSQL", category: "Database", description: "قاعدة بيانات SQL متقدمة وموثوقة", color: "text-blue-700", gradient: "from-blue-700 to-indigo-700" },
  { name: "Redis", category: "Database", description: "مخزن بيانات في الذاكرة للأداء الفائق", color: "text-red-600", gradient: "from-red-600 to-red-800" },
  
  // Tools & DevOps
  { name: "Docker", category: "DevOps", description: "منصة للحاويات والنشر السحابي", color: "text-blue-600", gradient: "from-blue-600 to-cyan-600" },
  { name: "AWS", category: "DevOps", description: "خدمات الحوسبة السحابية من أمازون", color: "text-orange-500", gradient: "from-orange-500 to-yellow-500" },
  { name: "Vercel", category: "DevOps", description: "منصة نشر سريعة للتطبيقات الحديثة", color: "text-black dark:text-white", gradient: "from-gray-900 to-gray-700" },
  
  // Design & UI
  { name: "Figma", category: "Design", description: "أداة التصميم التعاوني الحديثة", color: "text-purple-500", gradient: "from-purple-500 to-pink-500" },
  { name: "Framer Motion", category: "Animation", description: "مكتبة الحركات المتقدمة لـ React", color: "text-pink-500", gradient: "from-pink-500 to-rose-500" }
]

const categoryIcons = {
  Frontend: Code2,
  Backend: Database,
  Database: Database,
  DevOps: Globe,
  Design: Palette,
  Animation: Zap
}

const categoryColors = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-green-500 to-emerald-500", 
  Database: "from-purple-500 to-violet-500",
  DevOps: "from-orange-500 to-red-500",
  Design: "from-pink-500 to-rose-500",
  Animation: "from-yellow-500 to-orange-500"
}

interface AnimatedTechShowcaseProps {
  title?: string
  subtitle?: string
}

export function AnimatedTechShowcase({ 
  title = "التقنيات التي نتقنها",
  subtitle = "نستخدم أحدث التقنيات والأدوات لبناء حلول رقمية متطورة"
}: AnimatedTechShowcaseProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل")
  
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const categories = ["الكل", ...Array.from(new Set(technologies.map(tech => tech.category)))]
  const filteredTechnologies = selectedCategory === "الكل" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-600/5" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="px-4 py-2 mb-6 font-handicrafts">
              <Sparkles className="w-4 h-4 ml-2" />
              مجموعة التقنيات
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-handicrafts-black">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-handicrafts">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category, index) => {
            const IconComponent = category !== "الكل" ? categoryIcons[category as keyof typeof categoryIcons] : Sparkles
            return (
              <motion.div key={category} variants={categoryVariants}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-handicrafts ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-primary/10'
                  }`}
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  {category}
                </button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              layout
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-0 bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-background rounded-lg" />
                </div>

                <CardContent className="p-6 relative z-10 text-center h-full flex flex-col">
                  {/* Tech Icon/Logo placeholder */}
                  <motion.div 
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
                    animate={hoveredTech === tech.name ? { rotate: [0, -5, 5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.name.slice(0, 2).toUpperCase()}
                  </motion.div>

                  {/* Tech Name */}
                  <h3 className={`text-lg font-semibold mb-2 font-handicrafts ${tech.color} group-hover:scale-105 transition-transform duration-300`}>
                    {tech.name}
                  </h3>

                  {/* Category Badge */}
                  <Badge 
                    variant="outline" 
                    className={`mb-3 text-xs font-handicrafts border-current ${tech.color}`}
                  >
                    {tech.category}
                  </Badge>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-handicrafts leading-relaxed flex-1">
                    {tech.description}
                  </p>

                  {/* Floating particles on hover */}
                  {hoveredTech === tech.name && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${tech.gradient} rounded-full`}
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${15 + i * 25}%`
                          }}
                          animate={{
                            y: [-10, -25, -10],
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
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "15+", label: "تقنية متقدمة" },
              { number: "5+", label: "سنوات خبرة" },
              { number: "100+", label: "مشروع منجز" },
              { number: "24/7", label: "دعم مستمر" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2 font-handicrafts-black">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-handicrafts">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 