"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, MessageCircle, Search, HelpCircle, Sparkles, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"

interface FAQItem {
  question: string
  answer: string
  category: string
  tags: string[]
}

interface InteractiveFAQProps {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: "كم من الوقت يستغرق تطوير الموقع؟",
    answer: "يعتمد على تعقيد المشروع، لكن عادة نحتاج من 2-6 أسابيع للمواقع العادية و8-12 أسبوع للمتاجر الإلكترونية المعقدة. نقدم جدولاً زمنياً مفصلاً بعد تحليل المتطلبات.",
    category: "عام",
    tags: ["وقت", "تطوير", "مدة"]
  },
  {
    question: "هل تقدمون خدمات الصيانة والدعم الفني؟",
    answer: "نعم، نقدم باقات صيانة شاملة تتضمن التحديثات الأمنية، النسخ الاحتياطية، مراقبة الأداء، والدعم الفني على مدار الساعة حسب الباقة المختارة.",
    category: "دعم",
    tags: ["صيانة", "دعم", "تحديثات"]
  },
  {
    question: "هل المواقع التي تطورونها محسنة لمحركات البحث؟",
    answer: "بالطبع! جميع مواقعنا مطورة وفق أفضل ممارسات SEO، تتضمن تحسين السرعة، البنية التقنية، المحتوى، والعلامات الوصفية لضمان ظهور متميز في نتائج البحث.",
    category: "SEO",
    tags: ["محركات البحث", "تحسين", "ظهور"]
  },
  {
    question: "ما هي تقنيات البرمجة التي تستخدمونها؟",
    answer: "نستخدم أحدث التقنيات مثل React، Next.js، Node.js، TypeScript، وMongoDB. نختار التقنية المناسبة حسب طبيعة المشروع لضمان الأداء الأمثل والقابلية للتطوير.",
    category: "تقني",
    tags: ["تقنيات", "برمجة", "React"]
  },
  {
    question: "هل يمكنني إدارة محتوى الموقع بنفسي؟",
    answer: "نعم، نوفر لوحة تحكم سهلة الاستخدام تمكنك من إضافة وتعديل المحتوى بسهولة. كما نقدم تدريب شامل ودليل استخدام مفصل لضمان استقلاليتك الكاملة.",
    category: "إدارة",
    tags: ["لوحة تحكم", "محتوى", "تدريب"]
  },
  {
    question: "ما هي تكلفة تطوير موقع إلكتروني؟",
    answer: "التكلفة تختلف حسب المتطلبات والمميزات المطلوبة. لدينا باقات تبدأ من 1,500 ريال للمواقع الأساسية وتصل إلى 7,500 ريال للحلول المتقدمة. نقدم عروض أسعار مخصصة بعد فهم احتياجاتك.",
    category: "أسعار",
    tags: ["تكلفة", "أسعار", "باقات"]
  }
]

export function InteractiveFAQ({ 
  faqs = defaultFAQs, 
  title = "الأسئلة الشائعة",
  subtitle = "إجابات شاملة عن أكثر الأسئلة شيوعاً"
}: InteractiveFAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [showFilters, setShowFilters] = useState(false)
  
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const categories = ["الكل", ...Array.from(new Set(faqs.map(faq => faq.category)))]

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "الكل" || faq.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const clearSearch = () => {
    setSearchTerm("")
    setSelectedCategory("الكل")
  }

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
      y: 20,
      scale: 0.95
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

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-orange-500/3" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-500/8 to-pink-500/8 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="px-6 py-3 mb-8 font-handicrafts text-base">
              <HelpCircle className="w-5 h-5 ml-2" />
              مركز المساعدة والدعم
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 font-handicrafts-black leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto font-handicrafts leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Search and Filter */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Enhanced Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
              <Input
                placeholder="ابحث في الأسئلة الشائعة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-6 pr-16 py-4 text-lg font-handicrafts bg-background/70 backdrop-blur-sm border-border/50 rounded-2xl h-14"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSearch}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Enhanced Category Filters */}
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="font-handicrafts"
              >
                <Filter className="w-4 h-4 ml-2" />
                تصفية حسب الفئة
              </Button>
              
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-wrap gap-3 justify-center max-w-4xl"
                >
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="font-handicrafts px-6 py-2"
                    >
                      {category}
                    </Button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced FAQ Items */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto space-y-6"
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={`${faq.question}-${index}`}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm rounded-2xl">
                    <CardContent className="p-0">
                      <Button
                        variant="ghost"
                        onClick={() => toggleItem(index)}
                        className="w-full p-8 text-right justify-between hover:bg-primary/5 transition-colors duration-200 rounded-2xl"
                      >
                        <div className="flex items-start gap-6 flex-1">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-right flex-1">
                            <h3 className="text-xl font-semibold mb-3 font-handicrafts leading-relaxed">
                              {faq.question}
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-end">
                              <Badge variant="outline" className="text-sm font-handicrafts px-3 py-1">
                                {faq.category}
                              </Badge>
                              {faq.tags.slice(0, 2).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary" className="text-sm font-handicrafts px-3 py-1">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="h-6 w-6 text-muted-foreground" />
                        </motion.div>
                      </Button>

                      <AnimatePresence>
                        {openItems.includes(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 pt-4">
                              <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-6 border-r-4 border-primary">
                                <p className="text-muted-foreground font-handicrafts leading-relaxed text-lg">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-handicrafts">لم نجد نتائج</h3>
                <p className="text-muted-foreground font-handicrafts text-lg mb-6">
                  جرب كلمات بحث أخرى أو اختر فئة مختلفة
                </p>
                <Button onClick={clearSearch} variant="outline" className="font-handicrafts">
                  مسح البحث
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-3xl p-12 max-w-3xl mx-auto border border-border/20">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6 font-handicrafts-black">
              لم تجد إجابة لسؤالك؟
            </h3>
            <p className="text-muted-foreground mb-8 font-handicrafts text-lg leading-relaxed">
              فريقنا متاح للإجابة على جميع استفساراتك وتقديم المساعدة المطلوبة
            </p>
            <Button size="lg" className="font-handicrafts px-8 py-4 text-lg">
              تواصل معنا مباشرة
              <MessageCircle className="mr-3 h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 