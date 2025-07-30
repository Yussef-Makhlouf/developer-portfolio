"use client"
import { ServicePageTemplate } from "@/components/service-page-template"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { Target, TrendingUp, Code, Palette, Globe, Users, Lightbulb, Users as UsersIcon, Award, Clock, Star, BarChart3, Target as TargetIcon, ArrowUpRight, Layers, Smartphone, Monitor, Server, Cpu, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Award as AwardIcon, CheckCircle2, Zap, Globe as GlobeIcon2, Smartphone as SmartphoneIcon, BarChart3 as BarChart3Icon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// FAQ data specific to brand strategy
const brandStrategyFAQs = [
  {
    question: "كم من الوقت يستغرق تطوير استراتيجية العلامة التجارية؟",
    answer: "يستغرق تطوير استراتيجية شاملة من 4-8 أسابيع حسب تعقيد المشروع. يشمل ذلك البحث والتحليل والتطوير والتنفيذ.",
    category: "مدة",
    tags: ["وقت", "استراتيجية", "تطوير"]
  },
  {
    question: "ما هي عناصر العلامة التجارية الأساسية؟",
    answer: "تشمل العناصر الأساسية: الهوية البصرية، الرسالة الأساسية، القيم، الشخصية، والموضع التنافسي. كل عنصر يلعب دوراً حيوياً في بناء العلامة.",
    category: "عناصر",
    tags: ["هوية بصرية", "رسالة", "قيم"]
  },
  {
    question: "كيف تضمنون تميز العلامة عن المنافسين؟",
    answer: "نقوم بتحليل شامل للمنافسين ونحدد نقاط التمايز الفريدة. نركز على القيم والرسالة التي تجعل علامتك فريدة ومؤثرة.",
    category: "تميز",
    tags: ["منافسة", "تحليل", "تميز"]
  },
  {
    question: "هل يمكن تطوير استراتيجية للعلامات التجارية الجديدة؟",
    answer: "نعم، نقدم خدمات شاملة للعلامات الجديدة تشمل التسمية، الهوية البصرية، والاستراتيجية الرقمية من الصفر.",
    category: "جديد",
    tags: ["تسمية", "هوية", "استراتيجية"]
  },
  {
    question: "ما هي تكلفة خدمات استراتيجية العلامة التجارية؟",
    answer: "تبدأ التكلفة من 8000 ريال للمشاريع الأساسية وترتفع حسب التعقيد والنطاق. نقدم عروض مخصصة للشركات الكبيرة.",
    category: "تكلفة",
    tags: ["سعر", "تكلفة", "ميزانية"]
  },
  {
    question: "كيف تقيسون نجاح استراتيجية العلامة التجارية؟",
    answer: "نستخدم مؤشرات أداء متعددة مثل الوعي بالعلامة، الثقة، الولاء، والقيمة المدركة. نقدم تقارير دورية لقياس التقدم.",
    category: "قياس",
    tags: ["مؤشرات", "قياس", "تقدم"]
  },
  {
    question: "هل تقدمون خدمات إعادة تموضع العلامة التجارية؟",
    answer: "نعم، نقدم خدمات إعادة التموضع للعلامات القائمة التي تحتاج لتحديث أو تغيير اتجاهها في السوق.",
    category: "إعادة تموضع",
    tags: ["تحديث", "تغيير", "اتجاه"]
  },
  {
    question: "كيف تضمنون الاتساق عبر جميع القنوات؟",
    answer: "نطور دليل شامل للعلامة التجارية يضمن الاتساق في جميع نقاط التماس، من الموقع إلى وسائل التواصل الاجتماعي.",
    category: "اتساق",
    tags: ["دليل", "اتساق", "قنوات"]
  }
]

// Brand Elements Data
const brandElements = [
  {
    title: "الهوية البصرية",
    description: "العناصر البصرية التي تميز علامتك التجارية وتجعلها قابلة للتعرف",
    elements: [
      { name: "الشعار", description: "رمز بصري يمثل هوية العلامة التجارية", icon: "🎨" },
      { name: "الألوان", description: "لوحة ألوان متسقة تعكس شخصية العلامة", icon: "🌈" },
      { name: "الخطوط", description: "أنماط خطوط تعزز القراءة والهوية", icon: "📝" },
      { name: "الصور", description: "أسلوب تصوير متسق يعكس قيم العلامة", icon: "📸" }
    ],
    icon: "🎨"
  },
  {
    title: "الهوية اللفظية",
    description: "الرسائل والكلمات التي تنقل قيم ورسالة العلامة التجارية",
    elements: [
      { name: "الرسالة الأساسية", description: "رسالة واضحة ومختصرة تعبر عن القيمة المقدمة", icon: "💬" },
      { name: "نبرة الصوت", description: "أسلوب تواصل متسق يعكس شخصية العلامة", icon: "🗣️" },
      { name: "الكلمات المفتاحية", description: "مصطلحات تعبر عن قيم وخدمات العلامة", icon: "🔑" },
      { name: "القصص", description: "قصص تعزز القيم وتبني العلاقات", icon: "📖" }
    ],
    icon: "💬"
  },
  {
    title: "القيم والرسالة",
    description: "المبادئ الأساسية التي تقود العلامة التجارية وتوجه قراراتها",
    elements: [
      { name: "القيم الأساسية", description: "المبادئ التي تقود سلوك العلامة التجارية", icon: "⭐" },
      { name: "الرؤية", description: "الصورة المستقبلية التي تسعى العلامة لتحقيقها", icon: "🔮" },
      { name: "الرسالة", description: "السبب وراء وجود العلامة التجارية", icon: "📢" },
      { name: "الوعود", description: "الالتزامات التي تقدمها العلامة للعملاء", icon: "🤝" }
    ],
    icon: "⭐"
  },
  {
    title: "الشخصية والسلوك",
    description: "الخصائص السلوكية التي تميز العلامة التجارية في السوق",
    elements: [
      { name: "الشخصية", description: "الخصائص البشرية التي تميز العلامة التجارية", icon: "👤" },
      { name: "السلوك", description: "كيفية تفاعل العلامة مع العملاء والسوق", icon: "🎭" },
      { name: "الموقف", description: "النهج الذي تتخذه العلامة تجاه التحديات", icon: "💪" },
      { name: "العلاقات", description: "كيفية بناء العلاقات مع العملاء والشركاء", icon: "🤝" }
    ],
    icon: "👤"
  }
]

// Brand Building Strategies Data
const brandBuildingStrategies = {
  research: [
    { name: "تحليل السوق", description: "فهم السوق المستهدف والاتجاهات الحالية", icon: "📊" },
    { name: "تحليل المنافسين", description: "دراسة نقاط القوة والضعف للمنافسين", icon: "🔍" },
    { name: "تحليل الجمهور", description: "فهم احتياجات وتفضيلات العملاء المحتملين", icon: "👥" },
    { name: "تحليل SWOT", description: "تحديد نقاط القوة والضعف والفرص والتهديدات", icon: "📋" }
  ],
  positioning: [
    { name: "تحديد الموضع", description: "وضع العلامة في مكانة فريدة في السوق", icon: "🎯" },
    { name: "نقاط التمايز", description: "تحديد العناصر التي تميز العلامة عن المنافسين", icon: "✨" },
    { name: "القيمة المقدمة", description: "تحديد القيمة الفريدة التي تقدمها العلامة", icon: "💎" },
    { name: "الوعود", description: "الالتزامات التي تقدمها العلامة للعملاء", icon: "🤝" }
  ],
  communication: [
    { name: "استراتيجية المحتوى", description: "خطة شاملة لإنتاج ونشر المحتوى", icon: "📝" },
    { name: "القنوات الرقمية", description: "اختيار القنوات المناسبة للوصول للجمهور", icon: "📱" },
    { name: "الرسائل الرئيسية", description: "تطوير رسائل واضحة ومؤثرة", icon: "💬" },
    { name: "الاستراتيجية الإعلامية", description: "خطة للتواصل مع وسائل الإعلام", icon: "📰" }
  ]
}

// Case Studies Data
const brandStrategyCaseStudies = [
  {
    title: "شركة تقنية ناشئة",
    description: "تطوير هوية رقمية متكاملة لشركة تقنية في مجال الذكاء الاصطناعي",
    results: ["زيادة الوعي بالعلامة 300%", "تحسين الثقة في العلامة", "زيادة الاستثمارات"],
    strategies: ["هوية رقمية", "استراتيجية محتوى", "تموضع فريد"],
    duration: "12 أسبوع",
    client: "شركة تقنية"
  },
  {
    title: "علامة تجارية للمنتجات الصحية",
    description: "إعادة تموضع علامة تجارية في مجال المنتجات الصحية العضوية",
    results: ["زيادة المبيعات 200%", "تحسين صورة العلامة", "جذب جمهور جديد"],
    strategies: ["إعادة تموضع", "هوية بصرية جديدة", "استراتيجية محتوى"],
    duration: "16 أسبوع",
    client: "شركة منتجات صحية"
  },
  {
    title: "شركة خدمات مالية",
    description: "تطوير استراتيجية علامة تجارية للثقة والأمان في القطاع المالي",
    results: ["زيادة الثقة 250%", "تحسين الولاء", "زيادة العملاء الجدد"],
    strategies: ["بناء الثقة", "هوية احترافية", "استراتيجية اتصال"],
    duration: "20 أسبوع",
    client: "شركة خدمات مالية"
  }
]

const brandStrategyContent = {
  // Basic Info
  title: "استراتيجية العلامة التجارية الرقمية",
  description: "نبني استراتيجيات رقمية قوية تعزز حضور علامتك التجارية",
  icon: Target,
  color: "bg-red-500/10 text-red-600 dark:text-red-400",
  gradient: "from-red-500 to-orange-500",
  
  // Hero Section
  heroTitle: "بناء علامة تجارية رقمية مؤثرة",
  heroDescription: "نساعدك في وضع استراتيجية رقمية شاملة تبني هوية قوية لعلامتك التجارية، وتعزز حضورك الرقمي، وتخلق اتصالاً عميقاً مع جمهورك المستهدف. نركز على بناء علامات تجارية قوية ومستدامة تترك أثراً دائماً في السوق وتضمن النجاح طويل المدى.",
  heroFeatures: [
    "هوية رقمية متكاملة",
    "استراتيجية محتوى فعالة",
    "تموضع تنافسي قوي",
    "قياس وتحليل مستمر"
  ],
  
  // Overview Section
  overviewTitle: "استراتيجية شاملة لنجاح علامتك التجارية",
  overviewContent: "في العصر الرقمي، علامتك التجارية هي أكثر من مجرد شعار أو اسم. إنها القصة التي ترويها، والقيمة التي تقدمها، والعلاقة التي تبنيها مع عملائك. نحن نساعدك في صياغة استراتيجية رقمية متكاملة تضمن تميزك وتأثيرك في السوق. نركز على بناء علامات تجارية قوية ومستدامة تخلق قيمة حقيقية للعملاء وتضمن النمو المستمر.",
  
  // Features
  features: [
    {
      title: "تحليل السوق والمنافسين",
      description: "دراسة عميقة للسوق وتحليل نقاط القوة والضعف للمنافسين مع تحديد الفرص والتهديدات"
    },
    {
      title: "تحديد الهوية والرسالة",
      description: "صياغة هوية واضحة ورسالة مؤثرة تميز علامتك التجارية وتخلق اتصالاً عاطفياً"
    },
    {
      title: "استراتيجية المحتوى الشاملة",
      description: "خطة محتوى شاملة تبني الثقة وتجذب الجمهور المستهدف مع تحسين الظهور الرقمي"
    },
    {
      title: "خطة الحضور الرقمي",
      description: "تحديد القنوات المناسبة وطريقة التواجد الأمثل مع استراتيجية متكاملة"
    },
    {
      title: "دليل العلامة التجارية",
      description: "إنشاء دليل شامل يضمن الاتساق في جميع نقاط التماس مع إرشادات واضحة"
    },
    {
      title: "قياس الأداء والتحليل",
      description: "مؤشرات أداء واضحة لقياس نجاح الاستراتيجية مع تحليلات مستمرة"
    },
    {
      title: "استراتيجية الأزمات",
      description: "خطط استباقية لحماية العلامة التجارية في أوقات الأزمات"
    },
    {
      title: "استراتيجية النمو",
      description: "خطط طويلة المدى لتنمية العلامة التجارية وتوسيع نطاقها"
    }
  ],
  
  // Benefits
  benefits: [
    {
      title: "تمايز واضح ومؤثر في السوق",
      description: "هوية فريدة تميزك عن المنافسين وتبقى في ذهن العملاء مع تأثير دائم"
    },
    {
      title: "بناء الثقة والولاء المستدام",
      description: "علاقة قوية مع العملاء تضمن ولاءهم على المدى الطويل مع زيادة القيمة"
    },
    {
      title: "نمو مستدام وقابل للقياس",
      description: "استراتيجية واضحة تدعم النمو وتوسع الأعمال مع مؤشرات أداء محددة"
    },
    {
      title: "اتساق في الرسالة عبر جميع القنوات",
      description: "رسالة موحدة عبر جميع القنوات تعزز قوة العلامة وتبني الثقة"
    },
    {
      title: "جذب الجمهور المناسب والتحويل",
      description: "استهداف دقيق يجذب العملاء المثاليين لأعمالك مع معدلات تحويل عالية"
    },
    {
      title: "زيادة قيمة العلامة التجارية",
      description: "زيادة قيمة العلامة التجارية وتحسين العائد على الاستثمار مع بناء الأصول"
    },
    {
      title: "حماية العلامة التجارية",
      description: "استراتيجيات حماية شاملة للعلامة التجارية من المنافسين والتحديات"
    },
    {
      title: "قدرة على التكيف والتطور",
      description: "بنية تحتية مرنة تسمح بتطور العلامة التجارية مع تغير السوق"
    }
  ],
  
  // Process Steps
  processSteps: [
    {
      title: "الاكتشاف والبحث الشامل",
      description: "فهم عميق لأعمالك وأهدافك وجمهورك المستهدف مع تحليل السوق والمنافسين"
    },
    {
      title: "تحليل الوضع الحالي والمستقبلي",
      description: "تقييم نقاط القوة والضعف والفرص والتحديات مع رؤية مستقبلية"
    },
    {
      title: "وضع الاستراتيجية الشاملة",
      description: "تطوير استراتيجية شاملة مع أهداف واضحة وقابلة للقياس وخطة تنفيذ"
    },
    {
      title: "تصميم الهوية المتكاملة",
      description: "إنشاء هوية بصرية ولفظية متسقة وجذابة مع دليل شامل للاستخدام"
    },
    {
      title: "التنفيذ التدريجي والممنهج",
      description: "تطبيق الاستراتيجية عبر مراحل مدروسة مع مراقبة الأداء"
    },
    {
      title: "المراقبة والتحسين المستمر",
      description: "متابعة الأداء وإجراء التعديلات اللازمة مع تحسينات مستمرة"
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "دعم التسويق الرقمي",
      description: "تنفيذ الاستراتيجية بأدوات تسويقية متقدمة وحملات فعالة",
      href: "/services/digital-marketing",
      icon: TrendingUp
    },
    {
      title: "تطوير تطبيقات الويب",
      description: "منصات رقمية تعكس هوية علامتك التجارية وتدعم استراتيجيتها",
      href: "/services/web-app-development",
      icon: Code
    },
    {
      title: "إعادة تصميم المواقع",
      description: "تحديث حضورك الرقمي ليعكس استراتيجية العلامة التجارية الجديدة",
      href: "/services/website-redesign",
      icon: Palette
    }
  ],
  
  // CTA
  ctaTitle: "جاهز لبناء علامة تجارية قوية؟",
  ctaDescription: "دعنا نساعدك في وضع استراتيجية رقمية تحول رؤيتك إلى واقع مؤثر ومستدام"
}

export default function BrandStrategyPage() {
  return (
    <>
      <ServicePageTemplate {...brandStrategyContent} />
      
      {/* Brand Elements Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              عناصر العلامة التجارية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              المكونات الأساسية التي تبني علامة تجارية قوية ومؤثرة
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {brandElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{element.icon}</span>
                      <h3 className="text-xl font-semibold font-handicrafts">{element.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-handicrafts">{element.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {element.elements.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
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
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Building Strategies Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              استراتيجيات بناء العلامة التجارية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              منهجية شاملة لبناء علامة تجارية قوية ومؤثرة
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Research Phase */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">مرحلة البحث والتحليل</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {brandBuildingStrategies.research.map((strategy, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{strategy.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{strategy.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{strategy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Positioning Phase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">مرحلة التموضع والتميز</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {brandBuildingStrategies.positioning.map((strategy, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{strategy.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{strategy.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{strategy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Communication Phase */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">مرحلة التواصل والانتشار</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {brandBuildingStrategies.communication.map((strategy, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{strategy.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{strategy.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{strategy.description}</p>
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
              مشاريع استراتيجية علامة تجارية حققت نتائج ملموسة
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {brandStrategyCaseStudies.map((study, index) => (
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
                      <h4 className="font-semibold mb-2 font-handicrafts">الاستراتيجيات المستخدمة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.strategies.map((strategy, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-handicrafts">
                            {strategy}
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
        faqs={brandStrategyFAQs}
        title="أسئلة شائعة حول استراتيجية العلامة التجارية"
        subtitle="إجابات مفصلة عن أكثر الأسئلة شيوعاً حول خدمات استراتيجية العلامة التجارية"
      />
    </>
  )
} 