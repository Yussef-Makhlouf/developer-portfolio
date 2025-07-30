"use client"
import { ServicePageTemplate } from "@/components/service-page-template"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { Palette, Search, Code, Rocket, RefreshCw, Eye, Gauge, Users, Award, Clock, Star, BarChart3, Target, ArrowUpRight, Layers, Smartphone, Monitor, Server, Cpu, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Users as UsersIcon, Award as AwardIcon, CheckCircle2, TrendingUp, Zap, Globe, Smartphone as SmartphoneIcon, BarChart3 as BarChart3Icon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// FAQ data specific to website redesign
const redesignFAQs = [
  {
    question: "كم من الوقت يستغرق إعادة تصميم الموقع؟",
    answer: "يستغرق إعادة التصميم من 4-12 أسبوع حسب تعقيد الموقع والمميزات المطلوبة. نقدم جدولاً زمنياً مفصلاً بعد تحليل الموقع الحالي.",
    category: "مدة",
    tags: ["وقت", "جدول زمني", "إعادة تصميم"]
  },
  {
    question: "هل سأفقد ترتيبي في محركات البحث؟",
    answer: "لا، نطبق استراتيجيات متقدمة للحفاظ على قوة SEO أثناء إعادة التصميم. نحرص على الحفاظ على الروابط والكلمات المفتاحية.",
    category: "SEO",
    tags: ["ترتيب", "محركات بحث", "روابط"]
  },
  {
    question: "ما هي تكلفة إعادة تصميم الموقع؟",
    answer: "تبدأ التكلفة من 5000 ريال للمواقع البسيطة وترتفع حسب التعقيد والمميزات. نقدم عروض أسعار شفافة ومفصلة.",
    category: "تكلفة",
    tags: ["سعر", "تكلفة", "ميزانية"]
  },
  {
    question: "هل يمكن إعادة تصميم جزء من الموقع فقط؟",
    answer: "نعم، يمكن إعادة تصميم صفحات أو أقسام محددة مع الحفاظ على باقي الموقع. نقدم حلولاً مرنة تناسب احتياجاتك.",
    category: "مرونة",
    tags: ["أجزاء", "مرونة", "حلول"]
  },
  {
    question: "كيف تضمنون عدم توقف الموقع أثناء العمل؟",
    answer: "نعمل على نسخة منفصلة من الموقع وننقلها للإنتاج بعد الانتهاء. هذا يضمن عدم توقف الموقع أو فقدان البيانات.",
    category: "أمان",
    tags: ["توقف", "بيانات", "أمان"]
  },
  {
    question: "هل سأحتاج لتدريب على النظام الجديد؟",
    answer: "نقدم تدريباً شاملاً على النظام الجديد مع دليل مفصل. نضمن سهولة الاستخدام والتحكم في المحتوى.",
    category: "تدريب",
    tags: ["تدريب", "نظام", "سهولة"]
  },
  {
    question: "ما هي المميزات الجديدة التي يمكن إضافتها؟",
    answer: "يمكن إضافة مميزات متقدمة مثل نظام إدارة المحتوى، تحليلات مفصلة، تكامل مع وسائل التواصل الاجتماعي، وغيرها.",
    category: "مميزات",
    tags: ["مميزات جديدة", "تطوير", "تقنيات"]
  },
  {
    question: "هل تقدمون دعم فني بعد الإطلاق؟",
    answer: "نعم، نقدم دعم فني شامل بعد الإطلاق يتضمن إصلاح الأخطاء، التحديثات، والتحسينات المستمرة.",
    category: "دعم",
    tags: ["دعم فني", "صيانة", "تحديثات"]
  }
]

// Redesign Reasons Data
const redesignReasons = [
  {
    title: "تصميم قديم وغير جذاب",
    description: "التصميم القديم لا يعكس مكانة علامتك التجارية ويؤثر سلباً على انطباع العملاء",
    impact: "تأثير سلبي على المبيعات",
    solution: "تصميم عصري يعكس هوية العلامة التجارية",
    icon: "🎨"
  },
  {
    title: "أداء بطيء وسوء تجربة المستخدم",
    description: "الموقع البطيء يدفع الزوار للارتداد ويؤثر على ترتيبك في محركات البحث",
    impact: "فقدان العملاء المحتملين",
    solution: "تحسين الأداء وسرعة التحميل",
    icon: "⚡"
  },
  {
    title: "عدم التوافق مع الأجهزة المحمولة",
    description: "الموقع غير المتجاوب يفقدك أكثر من 60% من الزوار الذين يستخدمون الجوال",
    impact: "فقدان جمهور كبير",
    solution: "تصميم متجاوب 100%",
    icon: "📱"
  },
  {
    title: "صعوبة في الإدارة والتحديث",
    description: "النظام القديم يجعل تحديث المحتوى أمراً صعباً ومكلفاً",
    impact: "تأخر في نشر المحتوى الجديد",
    solution: "نظام إدارة محتوى سهل الاستخدام",
    icon: "⚙️"
  }
]

// Redesign Process Data
const redesignProcess = {
  analysis: [
    { name: "تحليل الموقع الحالي", description: "دراسة شاملة للأداء والمحتوى والتصميم", icon: "🔍" },
    { name: "تحليل المنافسين", description: "دراسة أفضل الممارسات في المجال", icon: "📊" },
    { name: "تحليل الجمهور المستهدف", description: "فهم احتياجات وتفضيلات العملاء", icon: "👥" },
    { name: "تحليل SEO", description: "تقييم قوة الموقع في محركات البحث", icon: "🎯" }
  ],
  design: [
    { name: "تصميم الهيكل الجديد", description: "تخطيط بنية الموقع وتجربة المستخدم", icon: "📐" },
    { name: "تصميم الواجهات", description: "إنشاء تصاميم جذابة وعصرية", icon: "🎨" },
    { name: "تصميم النظام الإداري", description: "واجهة سهلة لإدارة المحتوى", icon: "⚙️" },
    { name: "اختبار التصميم", description: "اختبار التصميم مع المستخدمين", icon: "✅" }
  ],
  development: [
    { name: "تطوير الموقع الجديد", description: "برمجة الموقع بأحدث التقنيات", icon: "💻" },
    { name: "ترحيل المحتوى", description: "نقل المحتوى بأمان ودقة", icon: "📦" },
    { name: "تحسين الأداء", description: "تحسين سرعة التحميل والأداء", icon: "⚡" },
    { name: "اختبار شامل", description: "اختبار جميع الوظائف والمتصفحات", icon: "🔧" }
  ]
}

// Case Studies Data
const redesignCaseStudies = [
  {
    title: "شركة عقارية رائدة",
    description: "إعادة تصميم شامل لموقع شركة عقارية مع إضافة مميزات البحث المتقدم",
    results: ["زيادة الاستفسارات 300%", "تحسين معدل التحويل 50%", "زيادة الزيارات 200%"],
    features: ["بحث متقدم", "خرائط تفاعلية", "نظام حجز"],
    duration: "8 أسابيع",
    client: "شركة عقارية"
  },
  {
    title: "مطعم عائلي",
    description: "تحديث موقع مطعم مع إضافة نظام حجز الطاولات والطلبات عبر الإنترنت",
    results: ["زيادة الحجوزات 400%", "تحسين تجربة العملاء", "زيادة المبيعات"],
    features: ["حجز طاولات", "طلبات أونلاين", "قائمة تفاعلية"],
    duration: "6 أسابيع",
    client: "مطعم عائلي"
  },
  {
    title: "شركة خدمات قانونية",
    description: "إعادة تصميم موقع شركة محاماة مع إضافة نظام استشارات أونلاين",
    results: ["زيادة الاستفسارات 250%", "تحسين المصداقية", "زيادة العملاء الجدد"],
    features: ["استشارات أونلاين", "نظام حجز", "مكتبة قانونية"],
    duration: "10 أسابيع",
    client: "مكتب محاماة"
  }
]

const websiteRedesignContent = {
  // Basic Info
  title: "إعادة تصميم وتحسين المواقع",
  description: "نحدث موقعك بتصميم عصري وأداء متميز مع الحفاظ على قوتك الرقمية",
  icon: Palette,
  color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  gradient: "from-pink-500 to-rose-500",
  
  // Hero Section
  heroTitle: "تجديد شامل لموقعك الإلكتروني",
  heroDescription: "نعيد تصميم موقعك ليواكب أحدث التوجهات في التصميم وتجربة المستخدم، مع تحسين الأداء والسرعة والحفاظ على قوة SEO الخاصة بك. نقدم حلولاً شاملة تجمع بين التصميم العصري والأداء المتميز والوظائف المتقدمة لضمان نجاحك الرقمي.",
  heroFeatures: [
    "تصميم عصري وجذاب",
    "تحسين تجربة المستخدم",
    "الحفاظ على قوة SEO",
    "أداء فائق السرعة"
  ],
  
  // Overview Section
  overviewTitle: "تحول رقمي يحافظ على إرثك",
  overviewContent: "إعادة التصميم ليست مجرد تغيير في الشكل، بل تحول شامل يحسن الأداء ويعزز تجربة المستخدم ويزيد معدلات التحويل. نحرص على الحفاظ على نقاط قوتك الحالية مع إضافة مميزات جديدة تضعك في المقدمة. نركز على بناء مواقع قابلة للتوسع مع تجربة مستخدم استثنائية وأداء متميز.",
  
  // Features
  features: [
    {
      title: "تصميم متجاوب حديث",
      description: "واجهات عصرية تعمل بسلاسة على جميع الأجهزة والشاشات مع مراعاة أحدث معايير التصميم"
    },
    {
      title: "تحسين تجربة المستخدم",
      description: "تصميم يركز على سهولة الاستخدام وتحقيق أهداف الزوار مع تحليل سلوك المستخدمين"
    },
    {
      title: "ترحيل آمن للمحتوى",
      description: "نقل جميع المحتوى والبيانات بأمان دون فقدان أي معلومات مع الحفاظ على الروابط"
    },
    {
      title: "تحسين الأداء والسرعة",
      description: "تقنيات متقدمة لتسريع التحميل وتحسين الأداء العام مع تحسين Core Web Vitals"
    },
    {
      title: "الحفاظ على SEO",
      description: "استراتيجيات متقدمة للحفاظ على ترتيبك في محركات البحث وتحسينه مع بناء روابط قوية"
    },
    {
      title: "إضافة مميزات جديدة",
      description: "دمج أحدث التقنيات والوظائف لتعزيز قدرات موقعك وتحسين تجربة المستخدم"
    },
    {
      title: "نظام إدارة محتوى متقدم",
      description: "واجهة سهلة الاستخدام لإدارة المحتوى والتحديثات مع صلاحيات متعددة للمستخدمين"
    },
    {
      title: "تحليلات وتقارير مفصلة",
      description: "أدوات تحليل متقدمة لفهم سلوك الزوار وتحسين الأداء المستمر"
    }
  ],
  
  // Benefits
  benefits: [
    {
      title: "انطباع أول قوي ومهني",
      description: "تصميم احترافي يعكس مكانة علامتك التجارية ويجذب العملاء المحتملين"
    },
    {
      title: "زيادة معدلات التحويل بنسبة 150%",
      description: "تصميم محسّن يحول المزيد من الزوار إلى عملاء مع تحسين مسار التحويل"
    },
    {
      title: "تقليل معدل الارتداد",
      description: "تجربة مستخدم محسنة تبقي الزوار لفترة أطول وتشجعهم على التفاعل"
    },
    {
      title: "توافق مع المعايير الحديثة",
      description: "موقع يتوافق مع أحدث معايير الويب والأمان مع تحسين الأداء"
    },
    {
      title: "سهولة الإدارة والتحديث",
      description: "نظام إدارة محتوى حديث يسهل عليك التحكم في موقعك وتحديث المحتوى"
    },
    {
      title: "ميزة تنافسية واضحة",
      description: "موقع متطور يميزك عن المنافسين في السوق ويجذب المزيد من العملاء"
    },
    {
      title: "تحسين الأداء والسرعة",
      description: "موقع سريع يحسن تجربة المستخدم ويرفع ترتيبك في محركات البحث"
    },
    {
      title: "قابلية التوسع والنمو",
      description: "بنية تحتية قوية تسمح بإضافة مميزات جديدة مع نمو أعمالك"
    }
  ],
  
  // Process Steps
  processSteps: [
    {
      title: "تحليل شامل للموقع الحالي",
      description: "دراسة شاملة لنقاط القوة والضعف في الموقع الحالي مع تحليل المنافسين والجمهور المستهدف"
    },
    {
      title: "وضع استراتيجية التجديد الشاملة",
      description: "خطة مفصلة للتحسينات المطلوبة مع الحفاظ على الأصول القيمة وبناء استراتيجية طويلة المدى"
    },
    {
      title: "التصميم الجديد والتفاعلي",
      description: "إنشاء تصاميم حديثة تعكس هوية علامتك التجارية مع اختبار تجربة المستخدم"
    },
    {
      title: "التطوير والترحيل الآمن",
      description: "برمجة الموقع الجديد بأحدث التقنيات ونقل المحتوى بعناية مع الحفاظ على SEO"
    },
    {
      title: "الاختبار الشامل والدقيق",
      description: "اختبار دقيق لضمان عمل جميع الوظائف بشكل مثالي مع اختبار الأداء والأمان"
    },
    {
      title: "الإطلاق الآمن والمتابعة المستمرة",
      description: "إطلاق آمن مع متابعة الأداء وإجراء التحسينات المستمرة والدعم الفني"
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "تحسين محركات البحث",
      description: "تعزيز ظهورك في نتائج البحث وزيادة الزيارات العضوية",
      href: "/services/seo-optimization",
      icon: Search
    },
    {
      title: "تطوير تطبيقات الويب",
      description: "إضافة وظائف متقدمة وتطبيقات مخصصة لموقعك",
      href: "/services/web-app-development",
      icon: Code
    },
    {
      title: "صفحات الهبوط",
      description: "صفحات مخصصة للحملات التسويقية لزيادة التحويلات",
      href: "/services/landing-pages",
      icon: Rocket
    }
  ],
  
  // CTA
  ctaTitle: "حان وقت التجديد والتطوير",
  ctaDescription: "دعنا نحول موقعك إلى تحفة رقمية تحقق أهدافك وتتجاوز توقعاتك"
}

export default function WebsiteRedesignPage() {
  return (
    <>
      <ServicePageTemplate {...websiteRedesignContent} />
      
      {/* Redesign Reasons Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              متى تحتاج لإعادة تصميم موقعك؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              علامات واضحة تدل على حاجتك لإعادة تصميم موقعك
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {redesignReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{reason.icon}</span>
                      <h3 className="text-xl font-semibold font-handicrafts">{reason.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-handicrafts">{reason.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1 font-handicrafts">التأثير السلبي:</h4>
                        <p className="text-sm text-red-600 dark:text-red-400 font-handicrafts">{reason.impact}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-600 dark:text-green-400 mb-1 font-handicrafts">الحل:</h4>
                        <p className="text-sm text-green-600 dark:text-green-400 font-handicrafts">{reason.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Redesign Process Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              مراحل إعادة التصميم
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              عملية منظمة ومفصلة لضمان نجاح مشروع إعادة التصميم
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Analysis Phase */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">مرحلة التحليل</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {redesignProcess.analysis.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{item.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Design Phase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">مرحلة التصميم</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {redesignProcess.design.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{item.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Development Phase */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">مرحلة التطوير</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {redesignProcess.development.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{item.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{item.description}</p>
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
              مشاريع إعادة تصميم حققت نتائج ملموسة لعملائنا
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {redesignCaseStudies.map((study, index) => (
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
                      <h4 className="font-semibold mb-2 font-handicrafts">المميزات المضافة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-handicrafts">
                            {feature}
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
        faqs={redesignFAQs}
        title="أسئلة شائعة حول إعادة تصميم المواقع"
        subtitle="إجابات مفصلة عن أكثر الأسئلة شيوعاً حول خدمات إعادة التصميم"
      />
    </>
  )
} 