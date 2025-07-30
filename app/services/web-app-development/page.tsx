"use client"
import { ServicePageTemplate } from "@/components/service-page-template"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { AnimatedTechShowcase } from "@/components/animated-tech-showcase"
import { Code, ShoppingCart, Search, Palette, Rocket, Database, TrendingUp, CheckCircle2, Zap, Shield, Globe, Users, Award, Clock, Star, BarChart3, Target, ArrowUpRight, Layers, Smartphone, Monitor, Server, Cpu, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Users as UsersIcon, Award as AwardIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// FAQ data specific to web app development
const webAppFAQs = [
  {
    question: "ما هي المدة المطلوبة لتطوير تطبيق ويب؟",
    answer: "تعتمد المدة على تعقيد التطبيق ومتطلباته. عادةً نحتاج من 4-8 أسابيع للتطبيقات البسيطة، و8-16 أسبوع للتطبيقات المعقدة. نقدم جدولاً زمنياً مفصلاً بعد تحليل المتطلبات.",
    category: "تطوير",
    tags: ["مدة", "تطبيق ويب", "جدول زمني"]
  },
  {
    question: "هل التطبيقات متوافقة مع جميع المتصفحات؟",
    answer: "نعم، نختبر جميع تطبيقاتنا على المتصفحات الرئيسية (Chrome, Firefox, Safari, Edge) ونضمن التوافق الكامل مع أحدث الإصدارات وإصدارات سابقة محددة حسب احتياجاتك.",
    category: "تقني",
    tags: ["متصفحات", "توافق", "اختبار"]
  },
  {
    question: "هل يمكن تطوير تطبيق جوال من نفس الكود؟",
    answer: "نعم، نستخدم تقنيات مثل React Native أو Progressive Web Apps (PWA) التي تمكننا من إنشاء تطبيقات تعمل على الويب والجوال بكفاءة عالية.",
    category: "تقني",
    tags: ["تطبيق جوال", "React Native", "PWA"]
  },
  {
    question: "كيف تضمنون أمان التطبيق؟",
    answer: "نطبق أفضل ممارسات الأمان مثل تشفير البيانات، مصادقة المستخدمين، حماية من CSRF و XSS، وتحديثات أمنية منتظمة. كما نجري اختبارات أمنية شاملة.",
    category: "أمان",
    tags: ["أمان", "تشفير", "حماية"]
  },
  {
    question: "هل يمكن إضافة مميزات جديدة لاحقاً؟",
    answer: "بالطبع! نبني التطبيقات بطريقة قابلة للتوسع تسمح بإضافة مميزات جديدة بسهولة. نقدم خدمات التطوير المستمر والصيانة لضمان نمو التطبيق مع احتياجاتك.",
    category: "تطوير",
    tags: ["توسع", "مميزات جديدة", "تطوير مستمر"]
  },
  {
    question: "ما نوع الدعم الفني المقدم؟",
    answer: "نقدم دعم فني شامل يتضمن إصلاح الأخطاء، التحديثات، النسخ الاحتياطية، مراقبة الأداء، والدعم عبر الهاتف والبريد الإلكتروني حسب الباقة المختارة.",
    category: "دعم",
    tags: ["دعم فني", "صيانة", "مراقبة"]
  },
  {
    question: "ما هي تكلفة تطوير تطبيق ويب؟",
    answer: "تختلف التكلفة حسب تعقيد المشروع والمميزات المطلوبة. نقدم عروض أسعار شفافة ومفصلة بعد تحليل المتطلبات. نبدأ من 5000 ريال للتطبيقات البسيطة.",
    category: "تكلفة",
    tags: ["سعر", "تكلفة", "ميزانية"]
  },
  {
    question: "هل تقدمون خدمات الصيانة بعد الإطلاق؟",
    answer: "نعم، نقدم خدمات صيانة شاملة تشمل التحديثات الأمنية، تحسينات الأداء، إضافة مميزات جديدة، والنسخ الاحتياطية المنتظمة.",
    category: "صيانة",
    tags: ["صيانة", "تحديثات", "دعم"]
  }
]

// Case Studies Data
const caseStudies = [
  {
    title: "منصة إدارة المشاريع المتقدمة",
    description: "تطوير منصة شاملة لإدارة المشاريع مع نظام تتبع الوقت وإدارة المهام والتحليلات المتقدمة",
    results: ["زيادة الإنتاجية 40%", "تقليل وقت الاجتماعات 60%", "تحسين التواصل بين الفرق"],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    duration: "12 أسبوع",
    client: "شركة تقنية رائدة"
  },
  {
    title: "تطبيق التجارة الإلكترونية المتطور",
    description: "متجر إلكتروني متكامل مع نظام دفع آمن وإدارة مخزون ذكية وتحليلات مبيعات متقدمة",
    results: ["زيادة المبيعات 200%", "تحسين معدل التحويل 35%", "تقليل تكاليف التشغيل 25%"],
    technologies: ["Next.js", "Stripe", "MongoDB", "AWS"],
    duration: "16 أسبوع",
    client: "علامة تجارية للملابس"
  },
  {
    title: "نظام إدارة المحتوى المؤسسي",
    description: "منصة إدارة محتوى متطورة مع واجهات مخصصة وميزات تحرير متقدمة",
    results: ["توفير 50% من وقت التحرير", "تحسين تجربة المحررين", "زيادة سرعة النشر"],
    technologies: ["React", "Headless CMS", "GraphQL", "Cloudinary"],
    duration: "10 أسابيع",
    client: "دار نشر إلكترونية"
  }
]

// Technology Stack Data
const technologyStack = {
  frontend: [
    { name: "React", description: "مكتبة JavaScript لبناء واجهات المستخدم التفاعلية", icon: "⚛️" },
    { name: "Next.js", description: "إطار عمل React للخدمات الجانبية والتحسين التلقائي", icon: "⚡" },
    { name: "TypeScript", description: "لغة برمجة تقدمية تضيف أنواع ثابتة لـ JavaScript", icon: "🔷" },
    { name: "Tailwind CSS", description: "إطار عمل CSS للتصميم السريع والمرن", icon: "🎨" }
  ],
  backend: [
    { name: "Node.js", description: "بيئة تشغيل JavaScript للخادم", icon: "🟢" },
    { name: "Express.js", description: "إطار عمل خفيف لبناء تطبيقات الويب", icon: "🚀" },
    { name: "PostgreSQL", description: "قاعدة بيانات علائقية قوية ومفتوحة المصدر", icon: "🐘" },
    { name: "MongoDB", description: "قاعدة بيانات NoSQL مرنة وقابلة للتوسع", icon: "🍃" }
  ],
  deployment: [
    { name: "AWS", description: "منصة سحابية شاملة للاستضافة والنشر", icon: "☁️" },
    { name: "Vercel", description: "منصة نشر سريعة ومحسنة لـ Next.js", icon: "▲" },
    { name: "Docker", description: "منصة حاويات لتوحيد البيئات", icon: "🐳" },
    { name: "CI/CD", description: "تكامل مستمر ونشر مستمر", icon: "🔄" }
  ]
}

const webAppDevelopmentContent = {
  // Basic Info
  title: "تطوير تطبيقات الويب",
  description: "نبني تطبيقات ويب حديثة وسريعة باستخدام أحدث التقنيات",
  icon: Code,
  color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  gradient: "from-blue-500 to-cyan-500",
  
  // Hero Section
  heroTitle: "تطبيقات ويب احترافية تحقق أهدافك",
  heroDescription: "نحول أفكارك إلى تطبيقات ويب قوية وسريعة الاستجابة باستخدام أحدث تقنيات React وNext.js وNode.js، مع التركيز على الأداء والأمان وتجربة المستخدم الاستثنائية والتحسين لمحركات البحث. نقدم حلولاً مخصصة تناسب احتياجاتك الفريدة وتساعدك على تحقيق النجاح الرقمي.",
  heroFeatures: [
    "أداء فائق السرعة",
    "تصميم متجاوب 100%", 
    "محسّنة لمحركات البحث",
    "أمان متقدم وموثوق",
    "قابلة للتوسع والصيانة",
    "تجربة مستخدم استثنائية"
  ],
  
  // Overview Section
  overviewTitle: "حلول ويب متكاملة تناسب جميع الأعمال",
  overviewContent: "نقدم خدمات تطوير تطبيقات ويب شاملة تجمع بين التصميم الجذاب والأداء العالي والأمان المتقدم. فريقنا من الخبراء يستخدم أحدث التقنيات والأطر البرمجية لبناء تطبيقات تلبي احتياجاتك الفريدة وتتجاوز توقعاتك. سواء كنت تحتاج لموقع شركة، منصة إدارة، أو تطبيق تفاعلي معقد، نحن نقدم الحل الأمثل الذي ينمو مع أعمالك. نركز على بناء تطبيقات قابلة للتوسع وقابلة للصيانة مع مراعاة أفضل ممارسات التطوير الحديثة.",
  
  // Features
  features: [
    {
      title: "تطوير بتقنيات React وNext.js",
      description: "نستخدم أحدث إصدارات React وNext.js لبناء تطبيقات سريعة وقابلة للتطوير مع تحسين تلقائي للأداء وخدمات جانبية متقدمة"
    },
    {
      title: "Backend قوي بـ Node.js",
      description: "خوادم عالية الأداء مبنية بـ Node.js وExpress.js مع قواعد بيانات MongoDB أو PostgreSQL وواجهات برمجية RESTful وGraphQL"
    },
    {
      title: "واجهات مستخدم متقدمة",
      description: "تصميم UI/UX حديث باستخدام Tailwind CSS وFramer Motion للحركات السلسة والجذابة مع مراعاة إمكانية الوصول"
    },
    {
      title: "TypeScript للأمان والموثوقية",
      description: "كود آمن وقابل للصيانة باستخدام TypeScript مع اختبارات شاملة وتوثيق مفصل لضمان جودة عالية"
    },
    {
      title: "API متطورة وآمنة",
      description: "تطوير وتكامل واجهات برمجية RESTful وGraphQL مع مصادقة متقدمة وحماية من التهديدات الأمنية"
    },
    {
      title: "تحسين متقدم للأداء",
      description: "تحسين سرعة التحميل، ضغط الصور، تقسيم الكود، وتحسين Core Web Vitals لأفضل تجربة مستخدم"
    },
    {
      title: "PWA وتطبيقات الجوال",
      description: "تطوير Progressive Web Apps وتطبيقات الجوال بـ React Native من نفس الكود المصدري للوصول لجمهور أوسع"
    },
    {
      title: "نشر وصيانة احترافية",
      description: "نشر على أفضل المنصات السحابية مع مراقبة مستمرة ونسخ احتياطية وتحديثات دورية وأمان متقدم"
    }
  ],
  
  // Benefits
  benefits: [
    {
      title: "زيادة الإنتاجية بنسبة 300%",
      description: "تطبيقات مخصصة تُحسن سير العمل وتؤتمت المهام المتكررة مما يزيد كفاءة الفريق بشكل كبير ويقلل الأخطاء البشرية"
    },
    {
      title: "تحسين تجربة العملاء",
      description: "واجهات سهلة الاستخدام وسريعة التجاوب تزيد من رضا العملاء وولائهم للعلامة التجارية وتحسن معدلات التحويل"
    },
    {
      title: "قابلية التوسع اللامحدودة",
      description: "بنية تحتية قوية تنمو مع نمو أعمالك دون الحاجة لإعادة البناء أو الاستثمار الإضافي مع مرونة عالية"
    },
    {
      title: "ميزة تنافسية واضحة",
      description: "تطبيقات مبتكرة تميزك عن المنافسين وتجذب المزيد من العملاء والفرص التجارية الجديدة"
    },
    {
      title: "توفير التكاليف التشغيلية",
      description: "حلول فعالة تقلل التكاليف مقارنة بالحلول التقليدية والبرمجيات الجاهزة مع عائد استثمار مرتفع"
    },
    {
      title: "رؤى وتحليلات قيمة",
      description: "تحليلات متقدمة حول سلوك المستخدمين لاتخاذ قرارات مبنية على البيانات الفعلية وتحسين الأداء المستمر"
    },
    {
      title: "أمان وحماية متقدمة",
      description: "حماية شاملة للبيانات والمعلومات الحساسة مع التزام كامل بمعايير الأمان العالمية واختبارات أمنية منتظمة"
    },
    {
      title: "استقلالية وتحكم كامل",
      description: "تحكم كامل في التطبيق مع إمكانية التعديل والتطوير المستقبلي دون قيود أو تبعية لمطورين خارجيين"
    }
  ],
  
  // Process Steps  
  processSteps: [
    {
      title: "تحليل شامل للمتطلبات",
      description: "نبدأ بجلسات عمل مفصلة لفهم احتياجاتك وأهدافك التجارية ووضع خطة واضحة ومفصلة للمشروع مع تحديد التقنيات المناسبة والميزانية الزمنية"
    },
    {
      title: "تصميم UX/UI والنماذج الأولية",
      description: "نصمم واجهات المستخدم ونقدم نماذج أولية تفاعلية باستخدام Figma للمراجعة والموافقة قبل البدء في التطوير مع مراعاة تجربة المستخدم"
    },
    {
      title: "التطوير والبرمجة المتقدمة",
      description: "نبني التطبيق باستخدام أفضل الممارسات والتقنيات الحديثة مع تطبيق منهجية Agile للتطوير السريع والمرن والاختبار المستمر"
    },
    {
      title: "اختبار شامل وضمان الجودة",
      description: "اختبار تفصيلي للتطبيق يشمل اختبار الوظائف، الأداء، الأمان، والتوافق مع جميع المتصفحات والأجهزة مع اختبارات أتمتة"
    },
    {
      title: "النشر والإطلاق الاحترافي",
      description: "نشر التطبيق على الخوادم المناسبة مع إعداد البيئة الإنتاجية وضمان عمله بكفاءة عالية ومراقبة مستمرة للأداء"
    },
    {
      title: "الدعم والصيانة المستمرة",
      description: "متابعة دورية وتحديثات منتظمة مع دعم فني متخصص وتحسينات مستمرة لضمان استمرارية وتطوير التطبيق"
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "حلول التجارة الإلكترونية",
      description: "متاجر إلكترونية متكاملة مع أنظمة دفع آمنة وإدارة مخزون ذكية",
      href: "/services/ecommerce",
      icon: ShoppingCart
    },
    {
      title: "تحسين محركات البحث",
      description: "استراتيجيات SEO متقدمة لزيادة الظهور والوصول لجمهور أوسع",
      href: "/services/seo-optimization", 
      icon: Search
    },
    {
      title: "حلول إدارة المحتوى",
      description: "أنظمة CMS متطورة لإدارة سهلة ومرنة للمحتوى",
      href: "/services/cms-integration",
      icon: Database
    }
  ],
  
  // CTA
  ctaTitle: "جاهز لبناء تطبيق ويب يحقق أهدافك؟",
  ctaDescription: "دعنا نساعدك في تحويل رؤيتك إلى تطبيق ويب قوي ومبتكر يحقق أهدافك التجارية ويميزك عن المنافسين"
}

export default function WebAppDevelopmentPage() {
  return (
    <>
      <ServicePageTemplate {...webAppDevelopmentContent} />
      
      {/* Technology Stack Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              التقنيات التي نستخدمها
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              مجموعة متطورة من التقنيات والأدوات لضمان بناء تطبيقات عالية الجودة والأداء
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">واجهة المستخدم</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {technologyStack.frontend.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Backend Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">الخادم وقواعد البيانات</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {technologyStack.backend.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Deployment Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">النشر والاستضافة</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {technologyStack.deployment.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{tech.description}</p>
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
      <section className="py-16 sm:py-24">
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
              مشاريع حقيقية حققت نتائج ملموسة لعملائنا
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
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
                      <h4 className="font-semibold mb-2 font-handicrafts">التقنيات المستخدمة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-handicrafts">
                            {tech}
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
      
      {/* Technology Showcase */}
      <AnimatedTechShowcase 
        title="التقنيات التي نستخدمها في تطوير التطبيقات"
        subtitle="مجموعة متطورة من التقنيات والأدوات لضمان بناء تطبيقات عالية الجودة والأداء"
      />
      
      {/* FAQ Section */}
      <InteractiveFAQ 
        faqs={webAppFAQs}
        title="أسئلة شائعة حول تطوير تطبيقات الويب"
        subtitle="إجابات مفصلة عن أكثر الأسئلة شيوعاً حول خدمات تطوير التطبيقات"
      />
    </>
  )
} 