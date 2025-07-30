"use client"	
import { ServicePageTemplate } from "@/components/service-page-template"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { ShoppingCart, Code, Search, Rocket, Shield, CreditCard, BarChart3, Users, Award, Clock, Star, BarChart3 as BarChart3Icon, Target, ArrowUpRight, Layers, Smartphone, Monitor, Server, Cpu, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Users as UsersIcon, Award as AwardIcon, CheckCircle2, Package, Truck, Star as StarIcon, TrendingUp, Zap, Globe, Smartphone as SmartphoneIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// FAQ data specific to ecommerce
const ecommerceFAQs = [
  {
    question: "كم من الوقت يستغرق تطوير متجر إلكتروني؟",
    answer: "يستغرق تطوير متجر إلكتروني أساسي من 4-8 أسابيع، بينما المتاجر المتقدمة قد تستغرق 8-16 أسبوع. يعتمد ذلك على تعقيد المتجر والمميزات المطلوبة.",
    category: "تطوير",
    tags: ["مدة", "متجر إلكتروني", "جدول زمني"]
  },
  {
    question: "ما هي تكلفة تطوير متجر إلكتروني؟",
    answer: "تبدأ التكلفة من 8000 ريال للمتاجر الأساسية وترتفع حسب المميزات المطلوبة. نقدم عروض أسعار شفافة ومفصلة بعد تحليل المتطلبات.",
    category: "تكلفة",
    tags: ["سعر", "تكلفة", "ميزانية"]
  },
  {
    question: "هل يمكن ربط المتجر مع أنظمة الدفع المحلية؟",
    answer: "نعم، نربط المتجر مع جميع أنظمة الدفع المحلية مثل مدى، STC Pay، والبطاقات الائتمانية، بالإضافة للدفع الدولي.",
    category: "دفع",
    tags: ["مدى", "STC Pay", "بطاقات ائتمانية"]
  },
  {
    question: "كيف تضمنون أمان المتجر؟",
    answer: "نطبق أعلى معايير الأمان مثل تشفير SSL، حماية من الاحتيال، تحديثات أمنية منتظمة، وامتثال لمعايير PCI DSS.",
    category: "أمان",
    tags: ["SSL", "حماية", "PCI DSS"]
  },
  {
    question: "هل يمكن إضافة مميزات جديدة لاحقاً؟",
    answer: "بالطبع! نبني المتاجر بطريقة قابلة للتوسع تسمح بإضافة مميزات جديدة بسهولة مثل نظام الولاء، التوصيات الذكية، وغيرها.",
    category: "تطوير",
    tags: ["توسع", "مميزات جديدة", "تطوير مستمر"]
  },
  {
    question: "ما نوع الدعم الفني المقدم؟",
    answer: "نقدم دعم فني شامل يتضمن إصلاح الأخطاء، التحديثات، النسخ الاحتياطية، مراقبة الأداء، والدعم عبر الهاتف والبريد الإلكتروني.",
    category: "دعم",
    tags: ["دعم فني", "صيانة", "مراقبة"]
  },
  {
    question: "هل يمكن ربط المتجر مع أنظمة الشحن؟",
    answer: "نعم، نربط المتجر مع شركات الشحن المحلية والدولية مثل أرامكس، DHL، والشركات المحلية مع تتبع الشحنات.",
    category: "شحن",
    tags: ["أرامكس", "DHL", "تتبع شحنات"]
  },
  {
    question: "كيف يمكن تحسين معدلات التحويل؟",
    answer: "نطبق أفضل ممارسات تحسين التحويل مثل تصميم محسّن، عربة تسوق سلسة، شهادات الأمان، واختبارات A/B مستمرة.",
    category: "تحويل",
    tags: ["تصميم", "عربة تسوق", "اختبارات"]
  }
]

// Ecommerce Features Data
const ecommerceFeatures = [
  {
    title: "واجهة متجر احترافية",
    description: "تصميم جذاب وسهل الاستخدام يحسن تجربة التسوق ويزيد معدلات التحويل",
    features: ["تصميم متجاوب", "واجهة سريعة", "تصميم محسّن للتحويل", "تجربة مستخدم استثنائية"],
    icon: "🛍️"
  },
  {
    title: "أنظمة دفع متعددة",
    description: "تكامل مع جميع أنظمة الدفع المحلية والعالمية لضمان سهولة الشراء",
    features: ["مدى", "STC Pay", "بطاقات ائتمانية", "PayPal"],
    icon: "💳"
  },
  {
    title: "إدارة مخزون ذكية",
    description: "نظام متقدم لتتبع المخزون والتنبيهات التلقائية وإدارة الطلبات",
    features: ["تتبع المخزون", "تنبيهات تلقائية", "إدارة الطلبات", "تقارير مفصلة"],
    icon: "📦"
  },
  {
    title: "تحليلات متقدمة",
    description: "تحليلات مفصلة حول سلوك العملاء والمبيعات لاتخاذ قرارات مدروسة",
    features: ["تحليل المبيعات", "سلوك العملاء", "تقارير مفصلة", "رؤى قيمة"],
    icon: "📊"
  }
]

// Payment Systems Data
const paymentSystems = {
  local: [
    { name: "مدى", description: "نظام الدفع المحلي الرسمي في المملكة", icon: "🇸🇦" },
    { name: "STC Pay", description: "محفظة إلكترونية من STC", icon: "📱" },
    { name: "Apple Pay", description: "دفع آمن عبر أجهزة Apple", icon: "🍎" },
    { name: "Google Pay", description: "دفع سريع عبر Google", icon: "🤖" }
  ],
  international: [
    { name: "Visa/Mastercard", description: "بطاقات ائتمانية عالمية", icon: "💳" },
    { name: "PayPal", description: "دفع آمن عبر الإنترنت", icon: "🔒" },
    { name: "Stripe", description: "منصة دفع متقدمة", icon: "💫" },
    { name: "Amazon Pay", description: "دفع عبر حساب Amazon", icon: "📦" }
  ],
  security: [
    { name: "SSL Encryption", description: "تشفير آمن لجميع البيانات", icon: "🔐" },
    { name: "PCI DSS", description: "امتثال لمعايير الأمان العالمية", icon: "🛡️" },
    { name: "Fraud Protection", description: "حماية من الاحتيال", icon: "🚫" },
    { name: "Secure Hosting", description: "استضافة آمنة وموثوقة", icon: "☁️" }
  ]
}

// Case Studies Data
const ecommerceCaseStudies = [
  {
    title: "متجر ملابس رياضية",
    description: "متجر إلكتروني متكامل لبيع الملابس الرياضية مع نظام توصيات ذكي",
    results: ["زيادة المبيعات 250%", "تحسين معدل التحويل 40%", "زيادة العملاء الجدد 300%"],
    features: ["نظام توصيات", "دفع محلي", "تتبع المخزون"],
    duration: "12 أسبوع",
    client: "علامة تجارية للملابس الرياضية"
  },
  {
    title: "متجر إلكترونيات",
    description: "متجر متخصص في الإلكترونيات مع نظام مقارنة الأسعار",
    results: ["زيادة المبيعات 400%", "تحسين تجربة العملاء", "زيادة متوسط قيمة الطلب"],
    features: ["مقارنة أسعار", "مراجعات العملاء", "ضمان المنتجات"],
    duration: "16 أسبوع",
    client: "شركة إلكترونيات"
  },
  {
    title: "متجر طعام صحي",
    description: "متجر متخصص في الأطعمة الصحية مع نظام اشتراكات",
    results: ["زيادة الاشتراكات 200%", "تحسين الولاء", "زيادة المبيعات المتكررة"],
    features: ["نظام اشتراكات", "توصيل سريع", "تخصيص القوائم"],
    duration: "10 أسابيع",
    client: "شركة طعام صحي"
  }
]

const ecommerceContent = {
  // Basic Info
  title: "حلول التجارة الإلكترونية",
  description: "نبني متاجر إلكترونية متكاملة وآمنة لنجاح أعمالك الرقمية",
  icon: ShoppingCart,
  color: "bg-green-500/10 text-green-600 dark:text-green-400",
  gradient: "from-green-500 to-emerald-500",
  
  // Hero Section
  heroTitle: "متاجر إلكترونية تحقق المبيعات",
  heroDescription: "نصمم ونطور متاجر إلكترونية احترافية مع تجربة تسوق سلسة وأنظمة دفع آمنة وإدارة مخزون ذكية، مُحسنة لمحركات البحث وجاهزة للنمو. نقدم حلولاً شاملة تجمع بين التصميم الجذاب والأداء العالي والأمان المتقدم لضمان نجاح مشروعك التجاري الرقمي.",
  heroFeatures: [
    "تصميم متجاوب وجذاب",
    "أنظمة دفع آمنة",
    "إدارة مخزون متقدمة",
    "تحليلات وتقارير شاملة"
  ],
  
  // Overview Section
  overviewTitle: "منصة تجارة إلكترونية متكاملة",
  overviewContent: "نقدم حلول تجارة إلكترونية شاملة تتضمن كل ما تحتاجه لبدء وتنمية أعمالك عبر الإنترنت. من تصميم المتجر إلى معالجة المدفوعات وإدارة الطلبات، نوفر لك منصة قوية وسهلة الاستخدام تضمن نجاح مشروعك التجاري. نركز على بناء متاجر قابلة للتوسع مع تجربة مستخدم استثنائية وأمان متقدم لضمان النجاح طويل المدى.",
  
  // Features
  features: [
    {
      title: "تصميم متجر احترافي",
      description: "واجهات متجر جذابة وسهلة التصفح تعزز تجربة التسوق وتزيد المبيعات مع تصميم محسّن للتحويل"
    },
    {
      title: "عربة تسوق ذكية",
      description: "نظام عربة تسوق متطور مع خيارات حفظ المنتجات والشراء السريع وتوصيات ذكية"
    },
    {
      title: "بوابات دفع متعددة",
      description: "تكامل مع أشهر بوابات الدفع المحلية والعالمية بأمان تام وامتثال لمعايير PCI DSS"
    },
    {
      title: "إدارة المخزون المتقدمة",
      description: "نظام متقدم لتتبع المخزون والتنبيهات التلقائية عند نفاد المنتجات مع إدارة الطلبات"
    },
    {
      title: "لوحة تحكم شاملة",
      description: "واجهة إدارية قوية لإدارة المنتجات والطلبات والعملاء بسهولة مع تحليلات مفصلة"
    },
    {
      title: "تحسين محركات البحث",
      description: "متجر محسن لمحركات البحث لزيادة الظهور وجذب المزيد من العملاء مع تحسين الأداء"
    },
    {
      title: "نظام توصيات ذكي",
      description: "توصيات منتجات ذكية بناءً على سلوك العملاء لزيادة المبيعات وتحسين تجربة التسوق"
    },
    {
      title: "تطبيق جوال متقدم",
      description: "تطبيق جوال متكامل مع المتجر لضمان الوصول للعملاء على جميع الأجهزة"
    }
  ],
  
  // Benefits
  benefits: [
    {
      title: "زيادة المبيعات بنسبة 300%",
      description: "تصميم محسّن للتحويل يساعد على زيادة معدلات الشراء مع تحسين تجربة التسوق"
    },
    {
      title: "وصول عالمي 24/7",
      description: "بيع منتجاتك للعملاء في أي مكان وفي أي وقت مع دعم متعدد اللغات والعملات"
    },
    {
      title: "توفير التكاليف التشغيلية",
      description: "توفير في تكاليف الإيجار والموظفين مقارنة بالمتاجر التقليدية مع أتمتة العمليات"
    },
    {
      title: "تحليلات مفصلة وقيمة",
      description: "فهم سلوك العملاء واتخاذ قرارات مبنية على البيانات مع رؤى مفصلة حول الأداء"
    },
    {
      title: "سهولة التوسع والمرونة",
      description: "إضافة منتجات وخدمات جديدة دون قيود مادية مع بنية تحتية قابلة للتوسع"
    },
    {
      title: "أتمتة العمليات المتقدمة",
      description: "أتمتة المهام المتكررة لتوفير الوقت والجهد مع تحسين الكفاءة التشغيلية"
    },
    {
      title: "أمان متقدم وموثوق",
      description: "حماية شاملة للبيانات والمدفوعات مع امتثال لمعايير الأمان العالمية"
    },
    {
      title: "دعم فني متخصص",
      description: "فريق دعم متخصص متاح على مدار الساعة لضمان استمرارية عمل المتجر"
    }
  ],
  
  // Process Steps
  processSteps: [
    {
      title: "دراسة السوق والمنافسين",
      description: "تحليل السوق المستهدف ودراسة المنافسين لوضع استراتيجية فعالة مع تحديد الفرص والتهديدات"
    },
    {
      title: "تصميم تجربة المستخدم",
      description: "تصميم واجهات سهلة الاستخدام تحسن من تجربة التسوق مع مراعاة سلوك المستخدمين"
    },
    {
      title: "تطوير المتجر المتقدم",
      description: "برمجة المتجر بأحدث التقنيات مع التركيز على الأمان والأداء والقابلية للتوسع"
    },
    {
      title: "تكامل أنظمة الدفع والشحن",
      description: "ربط المتجر مع بوابات الدفع وشركات الشحن مع ضمان الأمان والموثوقية"
    },
    {
      title: "اختبار شامل وتحسين",
      description: "اختبار شامل لجميع وظائف المتجر وتحسين الأداء مع اختبارات الأمان"
    },
    {
      title: "الإطلاق والتسويق المتكامل",
      description: "إطلاق المتجر مع خطة تسويقية شاملة لجذب العملاء وزيادة المبيعات"
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "تطوير تطبيقات الويب",
      description: "تطبيقات ويب مخصصة لاحتياجاتك الخاصة مع تكامل مع المتجر",
      href: "/services/web-app-development",
      icon: Code
    },
    {
      title: "تحسين محركات البحث",
      description: "زيادة ظهور متجرك في نتائج البحث وجذب المزيد من العملاء",
      href: "/services/seo-optimization",
      icon: Search
    },
    {
      title: "صفحات الهبوط",
      description: "صفحات مخصصة للحملات التسويقية لزيادة التحويلات",
      href: "/services/landing-pages",
      icon: Rocket
    }
  ],
  
  // CTA
  ctaTitle: "جاهز لبدء متجرك الإلكتروني؟",
  ctaDescription: "دعنا نساعدك في بناء متجر إلكتروني ناجح يحقق أهدافك التجارية ويزيد مبيعاتك"
}

export default function EcommercePage() {
  return (
    <>
      <ServicePageTemplate {...ecommerceContent} />
      
      {/* Ecommerce Features Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              مميزات المتجر الإلكتروني
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              مجموعة شاملة من المميزات لضمان نجاح متجرك الإلكتروني
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ecommerceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{feature.icon}</span>
                      <h3 className="text-xl font-semibold font-handicrafts">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-handicrafts">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground font-handicrafts">{item}</span>
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
      
      {/* Payment Systems Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              أنظمة الدفع والأمان
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              تكامل مع جميع أنظمة الدفع مع ضمان الأمان والموثوقية
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Local Payment Systems */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">الدفع المحلي</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentSystems.local.map((system, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{system.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{system.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{system.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* International Payment Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">الدفع الدولي</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentSystems.international.map((system, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{system.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{system.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{system.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-red-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">الأمان والحماية</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentSystems.security.map((security, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{security.icon}</span>
                        <div>
                          <h4 className="font-semibold font-handicrafts">{security.name}</h4>
                          <p className="text-sm text-muted-foreground font-handicrafts">{security.description}</p>
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
              متاجر إلكترونية حققت نتائج ملموسة لعملائنا
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ecommerceCaseStudies.map((study, index) => (
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
                      <h4 className="font-semibold mb-2 font-handicrafts">المميزات الرئيسية:</h4>
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
        faqs={ecommerceFAQs}
        title="أسئلة شائعة حول التجارة الإلكترونية"
        subtitle="إجابات مفصلة عن أكثر الأسئلة شيوعاً حول خدمات التجارة الإلكترونية"
      />
    </>
  )
} 