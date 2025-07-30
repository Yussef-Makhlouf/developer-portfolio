"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedServiceIcon } from "@/components/animated-service-icon"
import { AnimatedStats } from "@/components/animated-stats"
import { PricingPlans } from "@/components/pricing-plans"
import { Code, ShoppingCart, Rocket, Search, Palette, Database, TrendingUp, Target, ArrowLeft, Sparkles, Star, CheckCircle2, Users, Award } from "lucide-react"
import { texts } from "@/lib/texts"
import { EnhancedGridBackground } from "@/components/enhanced-grid-background"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    id: "web-app-development",
    icon: Code,
    title: texts.webAppDev,
    description: texts.webAppDevDesc,
    detailedDescription: "نصمم ونطور تطبيقات ويب متطورة باستخدام أحدث التقنيات مثل React وNext.js وNode.js، مع التركيز على الأداء والأمان وتجربة المستخدم الاستثنائية",
    features: ["React/Next.js", "Node.js Backend", "SEO Optimized", "Performance First"],
    benefits: ["زيادة الإنتاجية", "تحسين تجربة المستخدم", "قابلية التوسع", "أمان متقدم"],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
    href: "/services/web-app-development",
    variant: "pulse" as const
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: texts.ecommerce,
    description: texts.ecommerceDesc,
    detailedDescription: "متاجر إلكترونية احترافية مع أنظمة دفع آمنة وإدارة مخزون ذكية وتحليلات مفصلة لزيادة المبيعات وتحسين تجربة التسوق",
    features: ["Payment Gateway", "SEO Integration", "Analytics", "Mobile Optimized"],
    benefits: ["زيادة المبيعات", "وصول عالمي", "تكاليف أقل", "تحليلات مفصلة"],
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    gradient: "from-green-500 to-emerald-500",
    href: "/services/ecommerce",
    variant: "glow" as const
  },
  {
    id: "landing-pages",
    icon: Rocket,
    title: texts.landingPages,
    description: texts.landingPagesDesc,
    detailedDescription: "صفحات هبوط محسنة للتحويل تجمع بين التصميم الجذاب والمحتوى المقنع واختبارات A/B لضمان أفضل معدلات التحويل الممكنة",
    features: ["High Conversion", "Google Optimized", "Fast Loading", "A/B Testing"],
    benefits: ["معدلات تحويل عالية", "تكلفة استحواذ أقل", "عملاء عالي الجودة", "عائد استثمار مرتفع"],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    gradient: "from-purple-500 to-pink-500",
    href: "/services/landing-pages",
    variant: "float" as const
  },
  {
    id: "seo-optimization",
    icon: Search,
    title: texts.seoOptimization,
    description: texts.seoOptimizationDesc,
    detailedDescription: "استراتيجيات SEO متقدمة تضمن ظهورك في الصفحة الأولى من نتائج البحث، مع تحسين تقني شامل وبناء روابط قوية ومحتوى محسن",
    features: ["Technical SEO", "Google Rankings", "Organic Traffic", "Core Web Vitals"],
    benefits: ["زيادة الزيارات العضوية", "بناء المصداقية", "ميزة تنافسية", "عائد طويل المدى"],
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    gradient: "from-orange-500 to-amber-500",
    href: "/services/seo-optimization",
    variant: "rotate" as const
  },
  {
    id: "website-redesign",
    icon: Palette,
    title: texts.websiteRedesign,
    description: texts.websiteRedesignDesc,
    detailedDescription: "إعادة تصميم شاملة لموقعك مع الحفاظ على قوة SEO الحالية، تحسين الأداء والسرعة، وإضافة مميزات جديدة تواكب أحدث التوجهات",
    features: ["Modern Design", "SEO Preservation", "Performance Boost", "Mobile First"],
    benefits: ["انطباع أول قوي", "زيادة التحويلات", "تقليل الارتداد", "توافق مع المعايير الحديثة"],
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    gradient: "from-pink-500 to-rose-500",
    href: "/services/website-redesign",
    variant: "pulse" as const
  },
  {
    id: "cms-integration",
    icon: Database,
    title: texts.cmsIntegration,
    description: texts.cmsIntegrationDesc,
    detailedDescription: "أنظمة إدارة محتوى متطورة تمكنك من التحكم الكامل في موقعك، مع واجهات سهلة الاستخدام وأنظمة Headless CMS حديثة للمرونة القصوى",
    features: ["Headless CMS", "SEO Management", "Content API", "Easy Updates"],
    benefits: ["استقلالية كاملة", "توفير الوقت والمال", "تحسين سير العمل", "قابلية التوسع"],
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    gradient: "from-indigo-500 to-purple-500",
    href: "/services/cms-integration",
    variant: "glow" as const
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: texts.digitalMarketing,
    description: texts.digitalMarketingDesc,
    detailedDescription: "دعم تقني متخصص لحملاتك التسويقية، من إعداد أنظمة التتبع والتحليلات إلى تحسين معدلات التحويل وأتمتة العمليات التسويقية",
    features: ["Analytics Setup", "Conversion Tracking", "Performance Monitoring", "ROI Optimization"],
    benefits: ["قرارات مبنية على البيانات", "تحسين العائد", "توفير الوقت", "تكامل سلس"],
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    gradient: "from-cyan-500 to-teal-500",
    href: "/services/digital-marketing",
    variant: "float" as const
  },
  {
    id: "brand-strategy",
    icon: Target,
    title: texts.brandStrategy,
    description: texts.brandStrategyDesc,
    detailedDescription: "استراتيجيات رقمية شاملة لبناء هوية قوية لعلامتك التجارية، تعزز حضورك الرقمي وتخلق اتصالاً عميقاً مع جمهورك المستهدف",
    features: ["Brand Positioning", "Digital Strategy", "Market Analysis", "Growth Planning"],
    benefits: ["تمايز واضح", "بناء الثقة والولاء", "نمو مستدام", "قيمة أعلى للعلامة"],
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
    gradient: "from-red-500 to-orange-500",
    href: "/services/brand-strategy",
    variant: "rotate" as const
  },
]

// Key benefits section data
const keyBenefits = [
  {
    icon: Star,
    title: "جودة استثنائية",
    description: "معايير جودة عالمية في كل مشروع نقوم به"
  },
  {
    icon: CheckCircle2,
    title: "التزام بالمواعيد",
    description: "نلتزم بالمواعيد المحددة ونسلم المشاريع في الوقت المحدد"
  },
  {
    icon: Users,
    title: "دعم مستمر",
    description: "فريق دعم متخصص متاح على مدار الساعة لمساعدتك"
  },
  {
    icon: Award,
    title: "خبرة مثبتة",
    description: "سنوات من الخبرة ومئات المشاريع الناجحة"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100
    }
  }
}

export default function ServicesPage() {
  const servicesRef = useRef(null)
  const benefitsRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
        <EnhancedGridBackground variant="gradient" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="px-6 py-3 text-base font-medium font-handicrafts">
                <Sparkles className="w-5 h-5 ml-2" />
                {texts.servicesPageBadge || "حلول رقمية متكاملة"}
              </Badge>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent font-handicrafts-black leading-tight">
              {texts.servicesPageTitle || "خدماتنا المتميزة"}
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto font-handicrafts leading-relaxed mb-12">
              {texts.servicesPageDescription || "نقدم مجموعة شاملة من الخدمات الرقمية المصممة لتلبية احتياجاتك وتحقيق أهدافك بأعلى معايير الجودة والابتكار"}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" asChild className="font-handicrafts text-lg px-8 py-4">
                <Link href="/#contact">
                  ابدأ مشروعك الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-handicrafts text-lg px-8 py-4">
                <Link href="/#portfolio">
                  شاهد أعمالنا السابقة
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={benefitsRef}
            initial="hidden"
            animate={isBenefitsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-handicrafts-black">
                لماذا تختار <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">مسار</span>؟
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-handicrafts">
                نحن لا نقدم مجرد خدمات، بل شراكة حقيقية لنجاحك الرقمي
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isBenefitsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {keyBenefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-background/50 backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-handicrafts">{benefit.title}</h3>
                  <p className="text-muted-foreground font-handicrafts">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={servicesRef}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-handicrafts-black">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  خدماتنا الشاملة
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-handicrafts">
                مجموعة متكاملة من الخدمات الرقمية لتحقيق أهدافك وتطلعاتك
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={service.href} className="block h-full">
                  <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-background/50 backdrop-blur-sm overflow-hidden relative">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-purple-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                         style={{ padding: '1px' }}>
                      <div className="w-full h-full bg-background rounded-lg" />
                    </div>
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center justify-center mb-6">
                        <AnimatedServiceIcon 
                          icon={service.icon}
                          color={service.color}
                          gradient={service.gradient}
                          size="lg"
                          variant={service.variant}
                        />
                      </div>
                      
                      <CardTitle className="text-xl font-handicrafts group-hover:text-primary transition-colors duration-300 text-center">
                        {service.title}
                      </CardTitle>
                      
                      <CardDescription className="text-sm font-handicrafts mt-3 text-center leading-relaxed">
                        {service.detailedDescription}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-4 relative z-10">
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-3 font-handicrafts text-primary">المميزات الرئيسية:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs font-handicrafts">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-3 font-handicrafts text-primary">الفوائد:</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground font-handicrafts">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="relative z-10">
                      <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors font-handicrafts group">
                        {texts.learnMore || "اكتشف المزيد"}
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedStats />

      {/* Pricing Section */}
      <PricingPlans />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 font-handicrafts-black">
              {texts.servicesCtaTitle || "هل أنت مستعد للبدء؟"}
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 font-handicrafts leading-relaxed">
              {texts.servicesCtaDescription || "دعنا نساعدك في تحويل أفكارك إلى واقع رقمي مذهل"}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" asChild className="font-handicrafts text-lg px-8 py-4">
                <Link href="/#contact">
                  {texts.contactUs || "تواصل معنا"}
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-handicrafts text-lg px-8 py-4">
                <Link href="/#portfolio">
                  {texts.viewProjects || "شاهد أعمالنا"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 