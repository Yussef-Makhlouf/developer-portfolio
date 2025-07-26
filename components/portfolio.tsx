"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"
import { EnhancedGridBackground } from "@/components/enhanced-grid-background"
import { texts } from "@/lib/texts"

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "منصة التجارة الإلكترونية",
      description:
        "منصة تجارة إلكترونية متكاملة مع تكامل الدفع وإدارة المخزون ولوحة تحكم الإدارة.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "التجارة الإلكترونية",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "مصادقة المستخدمين والتفويض",
        "كتالوج المنتجات مع البحث والمرشحات",
        "سلة التسوق وعملية الدفع",
        "تكامل الدفع مع Stripe",
        "لوحة تحكم الإدارة لإدارة المخزون",
        "تتبع وإدارة الطلبات",
      ],
    },
    {
      id: 2,
      title: "لوحة تحكم SaaS",
      description: "لوحة تحكم SaaS شاملة مع التحليلات وإدارة المستخدمين والتعامل مع الاشتراكات.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Express", "PostgreSQL", "Chart.js", "Material-UI"],
      category: "SaaS",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "لوحة تحكم تحليلات في الوقت الفعلي",
        "نظام إدارة المستخدمين",
        "إدارة الاشتراكات والفواتير",
        "تكامل API والـ webhooks",
        "التحكم في الوصول حسب الأدوار",
        "تصور البيانات بالرسوم البيانية",
      ],
    },
    {
      id: 3,
      title: "موقع مطعم",
      description: "موقع مطعم حديث مع الطلب عبر الإنترنت ونظام الحجز وإدارة القائمة.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
      category: "الأعمال",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "قائمة طعام إلكترونية مع الفئات",
        "نظام حجز الطاولات",
        "الطلب عبر الإنترنت والتوصيل",
        "نظام إدارة المحتوى لإدارة القائمة",
        "معلومات الاتصال والموقع",
        "تصميم متجاوب مع الهواتف المحمولة",
      ],
    },
    {
      id: 4,
      title: "موقع الملف الشخصي",
      description: "موقع ملف شخصي إبداعي لوكالة رقمية مع حركات سلسة وتصميم حديث.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Contentful"],
      category: "الملف الشخصي",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "حركات التمرير السلسة",
        "معرض عرض المشاريع",
        "تكامل نموذج الاتصال",
        "مدونة مع تكامل نظام إدارة المحتوى",
        "تحسين محركات البحث",
        "تبديل الوضع المظلم/الفاتح",
      ],
    },
    {
      id: 5,
      title: "نظام إدارة التعلم",
      description: "منصة تعليمية مع إدارة الدورات وبث الفيديو وتتبع التقدم.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      category: "التعليم",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "إنشاء وإدارة الدورات",
        "بث الفيديو والتشغيل",
        "تتبع تقدم الطلاب",
        "الاختبارات التفاعلية والواجبات",
        "الدردشة والمناقشات في الوقت الفعلي",
        "إنشاء الشهادات",
      ],
    },
    {
      id: 6,
      title: "منصة العقارات",
      description: "منصة عقارات شاملة مع قوائم العقارات ومرشحات البحث وملفات الوكلاء.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox", "Cloudinary"],
      category: "العقارات",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "قوائم العقارات والبحث",
        "نظام التصفية المتقدم",
        "تكامل الخرائط التفاعلية",
        "ملفات الوكلاء والاتصال",
        "أداة مقارنة العقارات",
        "حاسبة الرهن العقاري",
      ],
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const categories = ["الكل", "التجارة الإلكترونية", "SaaS", "الأعمال", "الملف الشخصي", "التعليم", "العقارات"]

  const filteredProjects =
    selectedCategory === "الكل" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-muted/30 relative">
      <EnhancedGridBackground variant="dots" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">{texts.portfolioTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-handicrafts">{texts.portfolioSubtitle}</p>

          <div className={`flex flex-wrap justify-center gap-2 px-4`}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2 font-handicrafts text-xs sm:text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 font-handicrafts">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 sm:space-x-4">
                  <Button size="sm" variant="secondary" asChild className="text-xs sm:text-sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      {texts.viewLive}
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild className="text-xs sm:text-sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      {texts.viewCode}
                    </a>
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="font-handicrafts text-xs">{project.category}</Badge>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 font-handicrafts">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2 font-handicrafts text-sm">{project.description}</p>

                <div className={`flex flex-wrap gap-1 mb-4`}>
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-handicrafts">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs font-handicrafts">
                      +{project.tech.length - 3} أكثر
                    </Badge>
                  )}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full bg-transparent font-handicrafts text-xs sm:text-sm">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      {texts.viewDetails}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-handicrafts">{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-muted-foreground font-handicrafts">{project.description}</p>

                      <div>
                        <h4 className="font-semibold mb-2 font-handicrafts">{texts.keyFeatures}</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-handicrafts">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 font-handicrafts">{texts.technologiesUsed}</h4>
                        <div className={`flex flex-wrap gap-2`}>
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="font-handicrafts">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className={`flex space-x-4 pt-4 `}>
                        <Button asChild className="font-handicrafts">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {texts.viewLive}
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="font-handicrafts">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            {texts.viewCode}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
