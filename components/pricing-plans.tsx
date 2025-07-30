"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, X, Zap, Crown, Rocket, ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

interface PricingFeature {
  name: string
  included: boolean
  premium?: boolean
}

interface PricingPlan {
  name: string
  subtitle: string
  price: string
  originalPrice?: string
  period: string
  description: string
  features: PricingFeature[]
  recommended?: boolean
  icon: any
  color: string
  gradient: string
  buttonText: string
  href: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: "الباقة الأساسية",
    subtitle: "للمشاريع الصغيرة",
    price: "1,500",
    period: "ريال",
    description: "مثالية للشركات الناشئة والمشاريع الصغيرة التي تحتاج لحضور رقمي احترافي",
    icon: Rocket,
    color: "text-blue-600",
    gradient: "from-blue-500 to-cyan-500",
    buttonText: "ابدأ الآن",
    href: "/#contact",
    features: [
      { name: "موقع ويب متجاوب (حتى 5 صفحات)", included: true },
      { name: "تصميم مخصص وحديث", included: true },
      { name: "تحسين أساسي لمحركات البحث", included: true },
      { name: "تكامل وسائل التواصل الاجتماعي", included: true },
      { name: "نموذج اتصال تفاعلي", included: true },
      { name: "شهادة SSL مجانية", included: true },
      { name: "استضافة لسنة واحدة", included: true },
      { name: "دعم فني لمدة 3 أشهر", included: true },
      { name: "تدريب على إدارة المحتوى", included: false },
      { name: "تحليلات Google Analytics", included: false },
      { name: "تكامل CRM", included: false },
      { name: "متجر إلكتروني", included: false }
    ]
  },
  {
    name: "الباقة المتقدمة",
    subtitle: "للشركات المتنامية",
    price: "3,500",
    originalPrice: "4,200",
    period: "ريال",
    description: "الخيار الأمثل للشركات المتوسطة التي تسعى للنمو والتوسع الرقمي",
    icon: Crown,
    color: "text-purple-600",
    gradient: "from-purple-500 to-pink-500",
    buttonText: "الأكثر شعبية",
    href: "/#contact",
    recommended: true,
    features: [
      { name: "موقع ويب متجاوب (حتى 10 صفحات)", included: true },
      { name: "تصميم مخصص وحديث", included: true },
      { name: "تحسين متقدم لمحركات البحث", included: true, premium: true },
      { name: "تكامل وسائل التواصل الاجتماعي", included: true },
      { name: "نماذج متعددة ومتقدمة", included: true, premium: true },
      { name: "شهادة SSL مجانية", included: true },
      { name: "استضافة لسنتين", included: true, premium: true },
      { name: "دعم فني لمدة 6 أشهر", included: true, premium: true },
      { name: "تدريب على إدارة المحتوى", included: true, premium: true },
      { name: "تحليلات Google Analytics", included: true, premium: true },
      { name: "تكامل CRM أساسي", included: true, premium: true },
      { name: "متجر إلكتروني (حتى 50 منتج)", included: false }
    ]
  },
  {
    name: "الباقة الاحترافية",
    subtitle: "للمؤسسات الكبيرة",
    price: "7,500",
    originalPrice: "9,000",
    period: "ريال",
    description: "حل شامل للمؤسسات الكبيرة التي تحتاج لمنصة رقمية متكاملة ومتطورة",
    icon: Zap,
    color: "text-orange-600",
    gradient: "from-orange-500 to-amber-500",
    buttonText: "تواصل للتفاصيل",
    href: "/#contact",
    features: [
      { name: "موقع ويب متجاوب (صفحات غير محدودة)", included: true, premium: true },
      { name: "تصميم مخصص وحديث", included: true },
      { name: "تحسين احترافي لمحركات البحث", included: true, premium: true },
      { name: "تكامل شامل لوسائل التواصل", included: true, premium: true },
      { name: "نماذج ذكية ومتقدمة", included: true, premium: true },
      { name: "شهادة SSL متقدمة", included: true, premium: true },
      { name: "استضافة متقدمة لـ 3 سنوات", included: true, premium: true },
      { name: "دعم فني على مدار الساعة", included: true, premium: true },
      { name: "تدريب شامل ومتقدم", included: true, premium: true },
      { name: "تحليلات متقدمة ولوحة تحكم", included: true, premium: true },
      { name: "تكامل CRM متقدم", included: true, premium: true },
      { name: "متجر إلكتروني كامل (منتجات غير محدودة)", included: true, premium: true }
    ]
  }
]

export function PricingPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={cardVariants}>
            <Badge variant="secondary" className="px-4 py-2 mb-6 font-handicrafts">
              <Sparkles className="w-4 h-4 ml-2" />
              باقات مميزة وأسعار تنافسية
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-handicrafts-black">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-orange-600 bg-clip-text text-transparent">
                اختر الباقة المناسبة لك
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-handicrafts">
              باقات متنوعة تناسب جميع احتياجاتك وميزانيتك، مع ضمان الجودة والدعم الفني المتميز
            </p>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              <Card className={`relative h-full overflow-hidden border-0 ${
                plan.recommended 
                  ? 'ring-2 ring-primary shadow-2xl shadow-primary/25 scale-105' 
                  : 'hover:shadow-2xl'
              } transition-all duration-500 hover:-translate-y-2`}>
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1 font-handicrafts">
                      الأكثر شعبية
                    </Badge>
                  </div>
                )}

                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-purple-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-background rounded-lg" />
                </div>

                <CardHeader className="relative z-10 text-center pb-4">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${plan.color.replace('text-', 'bg-').replace('600', '500/10')} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <plan.icon className={`h-8 w-8 ${plan.color}`} />
                  </motion.div>

                  <CardTitle className="text-2xl font-bold mb-2 font-handicrafts-black">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 font-handicrafts">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {plan.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through font-handicrafts">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className={`text-4xl font-bold ${plan.color} font-handicrafts-black`}>
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground font-handicrafts">
                        {plan.period}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <Badge variant="secondary" className="text-green-600 font-handicrafts">
                        وفر {Math.round(((parseInt(plan.originalPrice.replace(',', '')) - parseInt(plan.price.replace(',', ''))) / parseInt(plan.originalPrice.replace(',', ''))) * 100)}%
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground font-handicrafts leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10">
                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredPlan === index ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        {feature.included ? (
                          <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                            feature.premium ? 'text-primary' : 'text-green-500'
                          }`} />
                        ) : (
                          <X className="h-5 w-5 mt-0.5 text-muted-foreground/50 flex-shrink-0" />
                        )}
                        <span className={`text-sm font-handicrafts ${
                          feature.included 
                            ? feature.premium 
                              ? 'text-foreground font-medium' 
                              : 'text-foreground'
                            : 'text-muted-foreground/70 line-through'
                        }`}>
                          {feature.name}
                          {feature.premium && (
                            <Badge variant="outline" className="mr-2 text-xs text-primary border-primary/50">
                              مميز
                            </Badge>
                          )}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    asChild
                    className={`w-full ${
                      plan.recommended 
                        ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90' 
                        : ''
                    } font-handicrafts group`}
                    size="lg"
                  >
                    <Link href={plan.href}>
                      {plan.buttonText}
                      <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${10 + i * 25}%`,
                        top: `${15 + i * 20}%`
                      }}
                      animate={{
                        y: [-10, -25, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-purple-600/10 to-orange-600/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 font-handicrafts-black">
              هل تحتاج باقة مخصصة؟
            </h3>
            <p className="text-muted-foreground mb-6 font-handicrafts">
              نقدم حلول مخصصة تماماً لاحتياجاتك الفريدة مع أسعار تنافسية
            </p>
            <Button asChild size="lg" variant="outline" className="font-handicrafts group">
              <Link href="/#contact">
                تواصل معنا لعرض مخصص
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 