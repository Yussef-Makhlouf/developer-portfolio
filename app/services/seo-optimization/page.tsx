"use client"
import { ServicePageTemplate } from "@/components/service-page-template"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { Search, TrendingUp, Code, Palette, Globe, BarChart2, FileSearch, Target, Zap, Shield, Users, Award, Clock, Star, BarChart3, ArrowUpRight, Layers, Smartphone, Monitor, Server, Cpu, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Users as UsersIcon, Award as AwardIcon, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// FAQ data specific to SEO optimization
const seoFAQs = [
  {
    question: "كم من الوقت يستغرق ظهور نتائج SEO؟",
    answer: "عادةً تبدأ النتائج الأولية في الظهور خلال 3-6 أشهر، لكن النتائج الكاملة قد تستغرق 6-12 شهراً. يعتمد ذلك على تنافسية الكلمات المفتاحية وحالة الموقع الحالية.",
    category: "توقيت",
    tags: ["مدة", "نتائج", "SEO"]
  },
  {
    question: "ما هي الكلمات المفتاحية الأفضل لموقعي؟",
    answer: "نقوم بتحليل شامل للسوق والمنافسين لتحديد الكلمات المفتاحية ذات القيمة العالية والحجم المناسب. نركز على الكلمات التي تحقق أهدافك التجارية.",
    category: "كلمات مفتاحية",
    tags: ["بحث", "تحليل", "منافسة"]
  },
  {
    question: "هل يمكن تحسين موقعي للبحث المحلي؟",
    answer: "نعم، نقدم خدمات SEO محلي شامل تشمل تحسين Google My Business، المراجعات المحلية، والكلمات المفتاحية المحلية لجذب العملاء القريبين.",
    category: "محلي",
    tags: ["محلي", "Google My Business", "مراجعات"]
  },
  {
    question: "كيف تختلف خدماتكم عن المنافسين؟",
    answer: "نقدم استراتيجيات SEO شاملة تجمع بين التحسين التقني والمحتوى وبناء الروابط. نركز على النتائج طويلة المدى وليس الحيل المؤقتة.",
    category: "مميزات",
    tags: ["استراتيجية", "جودة", "نتائج"]
  },
  {
    question: "هل تقدمون تقارير شهرية؟",
    answer: "نعم، نقدم تقارير شهرية مفصلة تشمل ترتيب الكلمات المفتاحية، الزيارات العضوية، معدلات التحويل، والتحليلات التفصيلية للأداء.",
    category: "تقارير",
    tags: ["تقارير", "تحليلات", "متابعة"]
  },
  {
    question: "ما هي تكلفة خدمات SEO؟",
    answer: "تختلف التكلفة حسب نطاق العمل والمنافسة. نقدم عروض أسعار شفافة تبدأ من 2000 ريال شهرياً للخدمات الأساسية.",
    category: "تكلفة",
    tags: ["سعر", "تكلفة", "ميزانية"]
  },
  {
    question: "هل يمكن تحسين موقعي مع الحفاظ على التصميم الحالي؟",
    answer: "نعم، معظم تحسينات SEO لا تتطلب تغييرات كبيرة في التصميم. نركز على التحسينات التقنية والمحتوى التي تحسن الأداء دون التأثير على المظهر.",
    category: "تصميم",
    tags: ["تصميم", "تحسين", "أداء"]
  },
  {
    question: "كيف تضمنون عدم تأثر الموقع بعقوبات جوجل؟",
    answer: "نتبع أفضل ممارسات SEO الأخلاقية المعتمدة من جوجل. نتجنب الحيل والتقنيات المحظورة ونركز على بناء قيمة حقيقية للمستخدمين.",
    category: "أمان",
    tags: ["عقوبات", "أمان", "ممارسات"]
  }
]

// SEO Strategies Data
const seoStrategies = [
  {
    title: "التحسين التقني الشامل",
    description: "تحسين سرعة الموقع، بنية الروابط، البيانات الوصفية، والملفات التقنية لضمان توافق مثالي مع محركات البحث",
    features: ["تحسين Core Web Vitals", "إعداد Schema Markup", "تحسين XML Sitemap", "إصلاح الأخطاء التقنية"],
    icon: "⚙️"
  },
  {
    title: "استراتيجية المحتوى المتقدمة",
    description: "إنشاء محتوى قيم ومحسن يجذب الزوار والروابط الطبيعية مع التركيز على نية المستخدم",
    features: ["كتابة محتوى محسن", "استراتيجية الكلمات المفتاحية", "تحسين المحتوى الحالي", "جدولة المحتوى"],
    icon: "📝"
  },
  {
    title: "بناء الروابط الأخلاقي",
    description: "استراتيجيات بناء روابط عالية الجودة من مواقع موثوقة لتعزيز سلطة الموقع والمصداقية",
    features: ["بحث الفرص", "إنشاء محتوى قابل للمشاركة", "علاقات مع الناشرين", "مراقبة الروابط"],
    icon: "🔗"
  },
  {
    title: "SEO المحلي المتخصص",
    description: "تحسين الظهور في نتائج البحث المحلية لجذب العملاء القريبين وزيادة المبيعات المحلية",
    features: ["تحسين Google My Business", "إدارة المراجعات", "الكلمات المفتاحية المحلية", "البيانات المحلية"],
    icon: "📍"
  }
]

// SEO Tools Data
const seoTools = {
  analysis: [
    { name: "Google Search Console", description: "مراقبة الأداء في نتائج البحث وإصلاح الأخطاء", icon: "🔍" },
    { name: "Google Analytics", description: "تحليل سلوك الزوار ومصادر الزيارات", icon: "📊" },
    { name: "SEMrush", description: "تحليل المنافسين والكلمات المفتاحية", icon: "📈" },
    { name: "Ahrefs", description: "تحليل الروابط والكلمات المفتاحية", icon: "🔗" }
  ],
  technical: [
    { name: "PageSpeed Insights", description: "تحليل سرعة الموقع والأداء", icon: "⚡" },
    { name: "Mobile-Friendly Test", description: "اختبار توافق الموقع مع الجوال", icon: "📱" },
    { name: "Rich Results Test", description: "اختبار البيانات المنظمة", icon: "🎯" },
    { name: "Core Web Vitals", description: "قياس مؤشرات الأداء الأساسية", icon: "📊" }
  ],
  content: [
    { name: "Yoast SEO", description: "تحسين المحتوى للبحث", icon: "✨" },
    { name: "Grammarly", description: "تحسين جودة المحتوى", icon: "✍️" },
    { name: "Canva", description: "إنشاء رسوم توضيحية جذابة", icon: "🎨" },
    { name: "Answer The Public", description: "اكتشاف أسئلة المستخدمين", icon: "❓" }
  ]
}

// Case Studies Data
const seoCaseStudies = [
  {
    title: "متجر إلكتروني للملابس الرياضية",
    description: "تحسين شامل لمتجر إلكتروني متخصص في الملابس الرياضية مع التركيز على الكلمات المفتاحية المحلية",
    results: ["زيادة الزيارات العضوية 300%", "تحسين الترتيب للكلمات الرئيسية", "زيادة المبيعات المحلية 150%"],
    keywords: ["ملابس رياضية", "أحذية رياضية", "ملابس رياضية نسائية"],
    duration: "8 أشهر",
    client: "متجر رياضي محلي"
  },
  {
    title: "شركة خدمات قانونية",
    description: "تحسين محركات البحث لشركة محاماة مع التركيز على الخدمات القانونية المتخصصة",
    results: ["زيادة الاستفسارات 400%", "تحسين الترتيب في الكلمات المفتاحية التنافسية", "زيادة العملاء الجدد 200%"],
    keywords: ["محامي", "استشارات قانونية", "قضايا تجارية"],
    duration: "12 شهر",
    client: "مكتب محاماة"
  },
  {
    title: "مطعم عائلي",
    description: "تحسين SEO محلي لمطعم عائلي مع التركيز على البحث المحلي والمراجعات",
    results: ["زيادة الحجوزات عبر الإنترنت 250%", "تحسين المراجعات على Google", "زيادة العملاء الجدد 180%"],
    keywords: ["مطعم", "طعام عائلي", "مطاعم قريبة"],
    duration: "6 أشهر",
    client: "مطعم عائلي"
  }
]

const seoOptimizationContent = {
  // Basic Info
  title: "تحسين محركات البحث المتقدم",
  description: "نساعدك في الوصول لقمة نتائج البحث وزيادة الزيارات العضوية",
  icon: Search,
  color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  gradient: "from-orange-500 to-amber-500",
  
  // Hero Section
  heroTitle: "تصدر نتائج البحث في جوجل",
  heroDescription: "خدمات SEO احترافية تضمن لك الظهور في الصفحة الأولى من نتائج البحث، مع استراتيجيات مُثبتة لزيادة الزيارات العضوية وتحسين معدلات التحويل. نقدم حلولاً شاملة تجمع بين التحسين التقني وإنتاج المحتوى وبناء الروابط لضمان نتائج مستدامة وطويلة المدى.",
  heroFeatures: [
    "تحسين تقني شامل",
    "بناء روابط قوية",
    "محتوى محسّن للبحث",
    "تحليلات ومتابعة مستمرة"
  ],
  
  // Overview Section
  overviewTitle: "استراتيجية SEO متكاملة لنجاحك الرقمي",
  overviewContent: "نقدم حلول تحسين محركات البحث الشاملة التي تجمع بين التحسين التقني وإنتاج المحتوى وبناء الروابط. نستخدم أحدث التقنيات وأفضل الممارسات لضمان حصولك على ترتيب متقدم في نتائج البحث وزيادة مستدامة في الزيارات العضوية. نركز على بناء استراتيجيات طويلة المدى تخلق قيمة حقيقية لموقعك وتجذب العملاء المهتمين فعلاً بما تقدمه.",
  
  // Features
  features: [
    {
      title: "التحسين التقني الشامل",
      description: "تحسين سرعة الموقع وبنيته التقنية لتوافق معايير محركات البحث مع التركيز على Core Web Vitals والأداء العام"
    },
    {
      title: "بحث الكلمات المفتاحية المتقدم",
      description: "تحليل وانتقاء أفضل الكلمات المفتاحية ذات القيمة العالية والحجم المناسب لتحقيق أهدافك التجارية"
    },
    {
      title: "تحسين المحتوى الاستراتيجي",
      description: "كتابة وتحسين المحتوى ليكون مفيداً للزوار ومحبباً لمحركات البحث مع التركيز على نية المستخدم"
    },
    {
      title: "بناء الروابط الأخلاقي",
      description: "استراتيجيات بناء روابط عالية الجودة من مواقع موثوقة لتعزيز سلطة الموقع والمصداقية"
    },
    {
      title: "SEO المحلي المتخصص",
      description: "تحسين الظهور في نتائج البحث المحلية لجذب العملاء القريبين وزيادة المبيعات المحلية"
    },
    {
      title: "تقارير وتحليلات مفصلة",
      description: "تقارير شهرية مفصلة عن الأداء والتقدم المحرز مع توصيات عملية للتحسين المستمر"
    },
    {
      title: "مراقبة المنافسين",
      description: "تحليل استراتيجيات المنافسين وتحديد الفرص الجديدة لتحسين موقعك"
    },
    {
      title: "تحسين تجربة المستخدم",
      description: "تحسينات SEO تؤدي لموقع أسرع وأسهل في الاستخدام مع تحسين معدلات التحويل"
    }
  ],
  
  // Benefits
  benefits: [
    {
      title: "زيادة الزيارات العضوية",
      description: "نمو مستدام في عدد الزوار من محركات البحث دون تكاليف إعلانية مع جودة عالية للزوار"
    },
    {
      title: "تحسين معدلات التحويل",
      description: "جذب زوار مهتمين فعلاً بما تقدمه مما يزيد احتمالية التحويل وتحسين العائد على الاستثمار"
    },
    {
      title: "بناء المصداقية والثقة",
      description: "الظهور في المراتب الأولى يعزز ثقة العملاء في علامتك التجارية ويحسن الصورة الذهنية"
    },
    {
      title: "ميزة تنافسية دائمة",
      description: "التفوق على المنافسين في نتائج البحث يضمن حصة سوقية أكبر ووصول لجمهور أوسع"
    },
    {
      title: "عائد استثمار طويل المدى",
      description: "نتائج SEO تستمر لفترات طويلة حتى بعد توقف الاستثمار مع تحسينات مستمرة"
    },
    {
      title: "تحسين تجربة المستخدم",
      description: "تحسينات SEO تؤدي لموقع أسرع وأسهل في الاستخدام مع تحسين معدلات الارتداد"
    },
    {
      title: "تحليلات قيمة للقرارات",
      description: "بيانات مفصلة حول سلوك الزوار تساعد في اتخاذ قرارات تجارية مدروسة"
    },
    {
      title: "حماية من التقلبات",
      description: "استراتيجيات SEO قوية تحمي موقعك من التقلبات في خوارزميات محركات البحث"
    }
  ],
  
  // Process Steps
  processSteps: [
    {
      title: "تدقيق SEO شامل",
      description: "فحص شامل للموقع لتحديد نقاط القوة والضعف والفرص المتاحة مع تحليل المنافسين والكلمات المفتاحية"
    },
    {
      title: "وضع الاستراتيجية الشاملة",
      description: "تطوير خطة عمل مفصلة بناءً على أهدافك والمنافسة في السوق مع تحديد الأولويات والجدول الزمني"
    },
    {
      title: "التحسين التقني الداخلي",
      description: "تحسين بنية الموقع والمحتوى والعناصر التقنية مع التركيز على السرعة والأداء والأمان"
    },
    {
      title: "إنتاج المحتوى المحسن",
      description: "إنشاء محتوى قيم ومحسّن يجذب الزوار والروابط مع التركيز على نية المستخدم والكلمات المفتاحية"
    },
    {
      title: "بناء الروابط الخارجية",
      description: "تنفيذ حملات بناء روابط أخلاقية وفعالة من مواقع موثوقة لتعزيز سلطة الموقع"
    },
    {
      title: "المتابعة والتحسين المستمر",
      description: "مراقبة الأداء وإجراء تحسينات مستمرة بناءً على البيانات والتحليلات مع تقارير دورية"
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "دعم التسويق الرقمي",
      description: "حملات تسويقية متكاملة لتعزيز نتائج SEO وزيادة الوصول",
      href: "/services/digital-marketing",
      icon: TrendingUp
    },
    {
      title: "تطوير تطبيقات الويب",
      description: "مواقع سريعة ومحسنة تقنياً لـ SEO مع بنية تحتية قوية",
      href: "/services/web-app-development",
      icon: Code
    },
    {
      title: "إعادة تصميم المواقع",
      description: "تحديث موقعك مع الحفاظ على قوة SEO وتحسين الأداء",
      href: "/services/website-redesign",
      icon: Palette
    }
  ],
  
  // CTA
  ctaTitle: "جاهز للوصول لقمة نتائج البحث؟",
  ctaDescription: "دعنا نساعدك في بناء استراتيجية SEO قوية تضمن نجاحك الرقمي وزيادة مبيعاتك"
}

export default function SEOOptimizationPage() {
  return (
    <>
      <ServicePageTemplate {...seoOptimizationContent} />
      
      {/* SEO Strategies Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              استراتيجيات SEO المتقدمة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              نطبق استراتيجيات مُثبتة لضمان نتائج ملموسة ومستدامة
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {seoStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{strategy.icon}</span>
                      <h3 className="text-xl font-semibold font-handicrafts">{strategy.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-handicrafts">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {strategy.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground font-handicrafts">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SEO Tools Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              أدوات التحليل والمراقبة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              نستخدم أحدث الأدوات والتقنيات لضمان نتائج دقيقة ومفصلة
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Analysis Tools */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">أدوات التحليل</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {seoTools.analysis.map((tool, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tool.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{tool.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Technical Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">أدوات تقنية</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {seoTools.technical.map((tool, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tool.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{tool.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Content Tools */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <FileSearch className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">أدوات المحتوى</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {seoTools.content.map((tool, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tool.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{tool.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              دراسات الحالة الناجحة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              مشاريع حقيقية حققت نتائج ملموسة في تحسين محركات البحث
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {seoCaseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="font-handicrafts">
                        {study.duration}
                      </Badge>
                      <div className="text-sm text-muted-foreground font-handicrafts">
                        {study.client}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-handicrafts mb-2">{study.title}</CardTitle>
                    <p className="text-muted-foreground font-handicrafts">{study.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 font-handicrafts">النتائج المحققة:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground font-handicrafts">
                            <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-handicrafts">الكلمات المفتاحية الرئيسية:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-handicrafts">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <InteractiveFAQ 
        faqs={seoFAQs}
        title="أسئلة شائعة حول تحسين محركات البحث"
        subtitle="إجابات مفصلة عن أكثر الأسئلة شيوعاً حول خدمات SEO"
      />
    </>
  )
} 