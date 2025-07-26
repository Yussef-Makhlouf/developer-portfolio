"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ShoppingCart, Rocket, Search, Palette, Database, TrendingUp, Target, ArrowRight } from "lucide-react"
import { texts } from "@/lib/texts"
import { EnhancedGridBackground } from "@/components/enhanced-grid-background"

export function ServicesEnhanced() {
  const services = [
    {
      icon: Code,
      title: texts.webAppDev,
      description: texts.webAppDevDesc,
      features: ["React/Next.js", "Node.js Backend", "SEO Optimized", "Performance First"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      icon: ShoppingCart,
      title: texts.ecommerce,
      description: texts.ecommerceDesc,
      features: ["Payment Gateway", "SEO Integration", "Analytics", "Mobile Optimized"],
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      icon: Rocket,
      title: texts.landingPages,
      description: texts.landingPagesDesc,
      features: ["High Conversion", "Google Optimized", "Fast Loading", "A/B Testing"],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      icon: Search,
      title: texts.seoOptimization,
      description: texts.seoOptimizationDesc,
      features: ["Technical SEO", "Google Rankings", "Organic Traffic", "Core Web Vitals"],
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
    {
      icon: Palette,
      title: texts.websiteRedesign,
      description: texts.websiteRedesignDesc,
      features: ["Modern Design", "SEO Preservation", "Performance Boost", "Mobile First"],
      color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    },
    {
      icon: Database,
      title: texts.cmsIntegration,
      description: texts.cmsIntegrationDesc,
      features: ["Headless CMS", "SEO Management", "Content API", "Easy Updates"],
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: TrendingUp,
      title: texts.digitalMarketing,
      description: texts.digitalMarketingDesc,
      features: ["Analytics Setup", "Conversion Tracking", "Performance Monitoring", "ROI Optimization"],
      color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: Target,
      title: texts.brandStrategy,
      description: texts.brandStrategyDesc,
      features: ["Brand Positioning", "Digital Strategy", "Market Analysis", "Growth Planning"],
      color: "bg-red-500/10 text-red-600 dark:text-red-400",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 relative">
      <EnhancedGridBackground variant="gradient" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-handicrafts-black">{texts.servicesTitle}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-handicrafts">{texts.servicesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-background/50 backdrop-blur-sm font-handicrafts"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg leading-tight font-handicrafts">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3 font-handicrafts">{service.description}</p>
                <div className="flex flex-wrap gap-1 mb-3 sm:mb-4 justify-center">
                  {service.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 font-handicrafts">
                      {feature}
                    </Badge>
                  ))}
                </div>
                {/* <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 transition-colors font-handicrafts text-xs sm:text-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
