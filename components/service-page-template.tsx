"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EnhancedGridBackground } from "@/components/enhanced-grid-background"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { texts } from "@/lib/texts"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceBenefit {
  title: string
  description: string
}

interface RelatedService {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

interface ServicePageTemplateProps {
  // Basic Info
  title: string
  description: string
  icon: LucideIcon
  color: string
  gradient: string
  
  // Hero Section
  heroTitle: string
  heroDescription: string
  heroFeatures: string[]
  
  // Overview Section
  overviewTitle: string
  overviewContent: string
  overviewImage?: string
  
  // Features Section
  features: ServiceFeature[]
  
  // Benefits Section
  benefits: ServiceBenefit[]
  
  // Process Section
  processSteps: {
    title: string
    description: string
  }[]
  
  // Related Services
  relatedServices: RelatedService[]
  
  // CTA Section
  ctaTitle?: string
  ctaDescription?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function ServicePageTemplate({
  title,
  description,
  icon: Icon,
  color,
  gradient,
  heroTitle,
  heroDescription,
  heroFeatures,
  overviewTitle,
  overviewContent,
  overviewImage,
  features,
  benefits,
  processSteps,
  relatedServices,
  ctaTitle,
  ctaDescription
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
          <EnhancedGridBackground variant="gradient" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <BreadcrumbNav 
              items={[
                { label: texts.services || "الخدمات", href: "/services" },
                { label: title }
              ]}
              className="mb-10"
            />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${color}`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  <Badge variant="secondary" className="px-4 py-2 font-handicrafts text-base">
                    <Sparkles className="w-4 h-4 ml-2" />
                    {texts.featuredService || "خدمة مميزة"}
                  </Badge>
                </div>
                
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-handicrafts-black leading-tight`}>
                  {heroTitle}
                </h1>
                
                <p className="text-xl sm:text-2xl text-muted-foreground mb-10 font-handicrafts leading-relaxed">
                  {heroDescription}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  {heroFeatures.map((feature, index) => (
                    <Badge key={index} variant="outline" className="px-5 py-3 font-handicrafts text-base">
                      <CheckCircle2 className="w-5 h-5 ml-2 text-green-500" />
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" asChild className="font-handicrafts px-8 py-4 text-lg">
                    <Link href="/#contact">
                      {texts.getStarted || "ابدأ الآن"}
                      <ArrowLeft className="mr-3 h-6 w-6" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="font-handicrafts px-8 py-4 text-lg">
                    <Link href="/#portfolio">
                      {texts.viewExamples || "شاهد الأمثلة"}
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-3xl`} />
                <div className="relative bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm rounded-3xl p-10 border border-border/50">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-background/60 rounded-3xl p-8">
                      <div className="text-4xl font-bold text-primary font-handicrafts-black mb-3">100%</div>
                      <div className="text-base text-muted-foreground font-handicrafts">{texts.satisfaction || "رضا العملاء"}</div>
                    </div>
                    <div className="bg-background/60 rounded-3xl p-8">
                      <div className="text-4xl font-bold text-primary font-handicrafts-black mb-3">50+</div>
                      <div className="text-base text-muted-foreground font-handicrafts">{texts.projectsDelivered || "مشروع منجز"}</div>
                    </div>
                    <div className="bg-background/60 rounded-3xl p-8">
                      <div className="text-4xl font-bold text-primary font-handicrafts-black mb-3">24/7</div>
                      <div className="text-base text-muted-foreground font-handicrafts">{texts.support || "دعم متواصل"}</div>
                    </div>
                    <div className="bg-background/60 rounded-3xl p-8">
                      <div className="text-4xl font-bold text-primary font-handicrafts-black mb-3">5★</div>
                      <div className="text-base text-muted-foreground font-handicrafts">{texts.rating || "تقييم العملاء"}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-handicrafts-black leading-tight">
                {overviewTitle}
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground font-handicrafts leading-relaxed">
                {overviewContent}
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-handicrafts-black leading-tight">
                {texts.featuresTitle || "المميزات الرئيسية"}
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-handicrafts leading-relaxed">
                {texts.featuresDescription || "نقدم مجموعة شاملة من المميزات لضمان نجاح مشروعك"}
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                    <CardHeader className="pb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color} mb-6`}>
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl font-handicrafts leading-relaxed">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-handicrafts text-lg leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-handicrafts-black leading-tight">
                {texts.benefitsTitle || "الفوائد التي ستحصل عليها"}
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-handicrafts leading-relaxed">
                {texts.benefitsDescription || "استثمر في نجاحك الرقمي واحصل على نتائج ملموسة"}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color} flex-shrink-0`}>
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 font-handicrafts leading-relaxed">{benefit.title}</h3>
                    <p className="text-muted-foreground font-handicrafts text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-handicrafts-black leading-tight">
                {texts.processTitle || "كيف نعمل"}
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-handicrafts leading-relaxed">
                {texts.processDescription || "خطوات واضحة ومنهجية مدروسة لضمان نجاح مشروعك"}
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex gap-8 ${index !== processSteps.length - 1 ? 'mb-12 pb-12' : ''}`}
                >
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color} font-bold text-2xl font-handicrafts-black`}>
                      {index + 1}
                    </div>
                    {index !== processSteps.length - 1 && (
                      <div className="w-1 h-full bg-border mt-4" />
                    )}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 pb-6">
                    <h3 className="text-2xl font-semibold mb-4 font-handicrafts leading-relaxed">{step.title}</h3>
                    <p className="text-muted-foreground font-handicrafts text-lg leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-handicrafts-black leading-tight">
                {texts.relatedServicesTitle || "خدمات ذات صلة"}
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-handicrafts leading-relaxed">
                {texts.relatedServicesDescription || "اكتشف المزيد من خدماتنا المتميزة"}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={service.href} className="block h-full">
                    <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                      <CardHeader className="pb-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <service.icon className="h-7 w-7 text-primary" />
                          </div>
                          <ArrowRight className="h-6 w-6 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                        <CardTitle className="text-2xl font-handicrafts leading-relaxed">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-handicrafts text-lg leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-handicrafts-black leading-tight">
                {ctaTitle || texts.readyToStart || "جاهز للبدء في مشروعك؟"}
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-10 font-handicrafts leading-relaxed">
                {ctaDescription || texts.ctaDefaultDescription || "دعنا نحول أفكارك إلى واقع رقمي يحقق أهدافك"}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" asChild className="font-handicrafts px-10 py-6 text-xl">
                  <Link href="/#contact">
                    {texts.contactUsNow || "تواصل معنا الآن"}
                    <ArrowLeft className="mr-3 h-6 w-6" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="font-handicrafts px-10 py-6 text-xl">
                  <Link href="/services">
                    {texts.exploreAllServices || "جميع الخدمات"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 