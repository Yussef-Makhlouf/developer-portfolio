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
      title: "اتحاد الإمارات للفنون القتالية المختلطة (UAEMMAF)",
      description:
        "موقع إلكتروني احترافي ومتطور لاتحاد الإمارات للفنون القتالية المختلطة، وهو الهيئة الرسمية المنظمة لرياضة الفنون القتالية المختلطة في دولة الإمارات العربية المتحدة.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
      category: "المنظمات الرياضية",
      liveUrl: "https://uaemmaf.vercel.app/ar/",
      githubUrl: "https://github.com/Yussef-Makhlouf/UAEMMAF",
      features: [
        "تصميم متجاوب يعمل على جميع الأجهزة",
        "دعم متعدد اللغات (العربية والإنجليزية)",
        "واجهة مستخدم حديثة مع حركات سلسة",
        "أداء محسن مع تحسينات شاملة للسرعة",
        "SEO محسن لمحركات البحث",
        "إمكانية الوصول لجميع المستخدمين",
      ],
    },
    {
      id: 2,
      title: "لوحة تحكم الرياضة – تجربة إدارية رياضية احترافية",
      description: "نظام إدارة رياضي متكامل تم تطويره باستخدام أحدث تقنيات الويب، لتقديم تجربة إدارة سلسة، سريعة، وآمنة للمحتوى الرياضي، بما يشمل الأخبار، الأحداث، والإحصائيات. يدعم النظام اللغتين العربية والإنجليزية بواجهة مستخدم تفاعلية وتصميم عصري متجاوب.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI"],
      category: "المنظمات الرياضية",
      liveUrl: "https://sport-dashboard1.vercel.app/login",
      githubUrl: "https://github.com/Yussef-Makhlouf/sport-dashboard",
      features: [
        "لوحة تحكم ديناميكية مع إحصائيات لحظية",
        "إدارة المحتوى الرياضي والأخبار باحترافية",
        "دعم متعدد اللغات (العربية والإنجليزية)",
        "نظام تحليلات مفصل لمراقبة الأداء",
        "تصميم متجاوب مع دعم الوضع الليلي والنهاري",
        "أمان متكامل مع JWT وحماية شاملة",
      ],
    },
    {
      id: 3,
      title: "تأسيس البناء – منصة عقارية رقمية بخبرة هندسية",
      description: "تطبيق ويب احترافي تم تطويره لشركة عقارية سعودية متخصصة في التطوير والتسويق العقاري. يجمع المشروع بين تصميم عصري، أداء تقني متفوق، وتجربة مستخدم ذكية، ليقدم منصة رقمية مرنة وفعالة لعرض المشاريع والوحدات العقارية بطريقة جذابة وسهلة التصفح.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "SwiperJS", "next-intl"],
      category: "العقارات",
      liveUrl: "https://www.tasisalbina.com/ar",
      githubUrl: "https://github.com/Yussef-Makhlouf/tassis-webapp",
      features: [
        "عرض بصري تفاعلي للمشاريع العقارية مع صور عالية الدقة",
        "تفاصيل دقيقة لكل وحدة مع معلومات شاملة",
        "واجهة متعددة اللغات (العربية والإنجليزية)",
        "نموذج تسجيل اهتمام فوري وتواصل مباشر",
        "خريطة تفاعلية توضح الموقع الجغرافي لكل مشروع",
        "تصميم متجاوب 100% مع دعم كامل للأجهزة المحمولة",
      ],
    },
    {
      id: 4,
      title: "شركة إعمار المتحدة للمصاعد – منصة رقمية ترتقي بعملك",
      description: "منصة تفاعلية متكاملة لعرض خدمات ومنتجات المصاعد التي تقدمها الشركة، مع إبراز المشاريع المنجزة بشكل مرئي جذاب، وتوفير تجربة تصفح احترافية للمستخدم سواء على الهاتف أو الحاسوب.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "React Motion"],
      category: "الأعمال",
      liveUrl: "https://emaarelevators.com/",
      githubUrl: "https://github.com/Yussef-Makhlouf/KSA-Elevator",
      features: [
        "تصميم عصري ومتجاوب مع واجهة مستخدم عربية بالكامل (RTL)",
        "عرض تفاعلي للمنتجات والخدمات مع صور عالية الجودة",
        "أداء قوي وSEO محسّن مع تحسين تلقائي للصور",
        "أمان واستقرار مع حماية ضد الهجمات الشائعة",
        "تأثيرات حركية سلسة وتجربة بصرية متكاملة",
        "تصنيفات منظمة بحسب نوع المصعد أو الاستخدام",
      ],
    },
    {
      id: 5,
      title: "مؤسسة كرم الطرق للمقاولات – واجهة رقمية لأعمال المقاولات",
      description: "موقع إلكتروني احترافي لمؤسسة كرم الطرق للمقاولات، ليكون بوابتها الرقمية لعرض خدماتها ومشاريعها في المملكة العربية السعودية. الموقع مصمم بأسلوب عصري متجاوب يعكس جدّية المؤسسة ومهنيتها، ويمنح العملاء تجربة سلسة وواضحة للتعرّف على إمكانيات الشركة ومجال عملها.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "jQuery"],
      category: "الأعمال",
      liveUrl: "https://karamaltraq.com/",
      githubUrl: "https://github.com/Yussef-Makhlouf/karam-toroq",
      features: [
        "واجهة مستخدم عربية بالكامل مع دعم اتجاه RTL",
        "معرض المشاريع مع تصنيف ذكي حسب القطاع أو النوع",
        "نظام تواصل مباشر مع نموذج اتصال سريع وبسيط",
        "تحسين SEO لزيادة الظهور في محركات البحث",
        "تصميم متجاوب 100% يعمل على جميع الأجهزة",
        "عرض متحرك للمشاريع البارزة مع تأثيرات حركية",
      ],
    },
    {
      id: 6,
      title: "راف العقارية – منصة تطوير عقاري حديثة",
      description: "موقع إلكتروني احترافي لشركة راف العقارية، وهي إحدى الشركات السعودية الرائدة في مجال التطوير العقاري. يجمع الموقع بين التصميم العصري والأداء التقني العالي ليُقدم تجربة رقمية شاملة لعرض المشاريع العقارية، إدارة طلبات الصيانة، وتقديم الخدمات الاستشارية.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
      category: "العقارات",
      liveUrl: "https://www.raf-advanced.sa/ar",
      githubUrl: "https://github.com/eslambashry/raf-webapp",
      features: [
        "واجهة ذكية لعرض المشاريع العقارية بالتفصيل",
        "نظام طلبات الصيانة الإلكتروني",
        "نظام تسجيل دخول وحسابات مستخدمين",
        "دعم ثنائي اللغة (العربية والإنجليزية)",
        "تكامل Google Maps لعرض المشاريع",
        "نظام أمان عالي مع JWT وحماية شاملة",
        "انشاء اكثر من صفحه مثل المدونه مع نظام تسجيل البريدي"
      ],
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const categories = ["الكل", "المنظمات الرياضية", "SaaS", "الأعمال", "الملف الشخصي", "التعليم", "العقارات"]

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
