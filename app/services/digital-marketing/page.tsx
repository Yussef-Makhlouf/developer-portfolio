"use client"
import { ServicePageTemplate } from "@/components/service-page-template"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { TrendingUp, Search, Target, BarChart3, Megaphone, Users, LineChart, Users as UsersIcon, Award, Clock, Star, BarChart3 as BarChart3Icon, Target as TargetIcon, ArrowUpRight, Layers, Smartphone, Monitor, Server, Cpu, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Award as AwardIcon, CheckCircle2, Zap, Globe, Smartphone as SmartphoneIcon, BarChart3 as BarChart3Icon2 } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// FAQ data specific to digital marketing
const digitalMarketingFAQs = [
  {
    question: "ما هي الأدوات التي تستخدمونها في التسويق الرقمي؟",
    answer: "نستخدم مجموعة متكاملة من الأدوات مثل Google Analytics 4، Google Tag Manager، Facebook Pixel، LinkedIn Insight Tag، وأدوات تحليل متقدمة أخرى لضمان تتبع دقيق وشامل.",
    category: "أدوات",
    tags: ["Google Analytics", "Facebook Pixel", "تتبع"]
  },
  {
    question: "كيف يمكن تحسين معدلات التحويل؟",
    answer: "نطبق استراتيجيات متقدمة مثل تحسين صفحات الهبوط، اختبارات A/B، تحسين تجربة المستخدم، وتحليل سلوك الزوار لزيادة معدلات التحويل.",
    category: "تحويل",
    tags: ["صفحات هبوط", "اختبارات A/B", "تجربة مستخدم"]
  },
  {
    question: "ما هي تكلفة خدمات التسويق الرقمي؟",
    answer: "تختلف التكلفة حسب نطاق العمل والمميزات المطلوبة. نبدأ من 3000 ريال شهرياً للخدمات الأساسية مع عروض مخصصة للشركات الكبيرة.",
    category: "تكلفة",
    tags: ["سعر", "تكلفة", "ميزانية"]
  },
  {
    question: "هل تقدمون خدمات إدارة الحملات الإعلانية؟",
    answer: "نعم، نقدم خدمات إدارة شاملة للحملات الإعلانية على Google Ads، Facebook Ads، LinkedIn، وغيرها من المنصات.",
    category: "إعلانات",
    tags: ["Google Ads", "Facebook Ads", "LinkedIn"]
  },
  {
    question: "كيف تضمنون دقة البيانات والتقارير؟",
    answer: "نطبق أفضل ممارسات التتبع والتحقق من صحة البيانات، مع اختبارات دورية ومراجعة مستمرة لضمان دقة التقارير.",
    category: "دقة",
    tags: ["تحقق", "اختبارات", "دقة"]
  },
  {
    question: "ما نوع التقارير التي تقدمونها؟",
    answer: "نقدم تقارير شهرية مفصلة تشمل أداء الحملات، معدلات التحويل، تحليل الجمهور، وتوصيات للتحسين.",
    category: "تقارير",
    tags: ["تقارير", "تحليلات", "أداء"]
  },
  {
    question: "هل يمكن ربط أنظمة CRM مع أدوات التسويق؟",
    answer: "نعم، نربط أنظمة CRM مثل Salesforce، HubSpot، وغيرها مع أدوات التسويق لتحسين تتبع العملاء المحتملين.",
    category: "تكامل",
    tags: ["CRM", "تكامل", "عملاء محتملين"]
  },
  {
    question: "كيف تساعدون في تحسين العائد على الاستثمار؟",
    answer: "نحلل أداء جميع القنوات والحملات لتحديد الأكثر ربحية، ونطبق تحسينات مستمرة لزيادة العائد على الاستثمار.",
    category: "ROI",
    tags: ["عائد استثمار", "تحليل", "تحسين"]
  }
]

// Marketing Tools Data
const marketingTools = [
  {
    title: "أدوات التتبع والتحليل",
    description: "مجموعة شاملة من أدوات التتبع لمراقبة أداء حملاتك التسويقية",
    tools: [
      { name: "Google Analytics 4", description: "تحليل شامل لسلوك المستخدمين والتحويلات", icon: "📊" },
      { name: "Google Tag Manager", description: "إدارة جميع أكواد التتبع من مكان واحد", icon: "🏷️" },
      { name: "Facebook Pixel", description: "تتبع تحويلات إعلانات Facebook", icon: "📱" },
      { name: "LinkedIn Insight Tag", description: "تتبع أداء إعلانات LinkedIn", icon: "💼" }
    ],
    icon: "📈"
  },
  {
    title: "أدوات إدارة الحملات",
    description: "منصات متقدمة لإدارة وتتبع الحملات الإعلانية بكفاءة",
    tools: [
      { name: "Google Ads", description: "إدارة حملات البحث والإعلانات", icon: "🔍" },
      { name: "Facebook Ads Manager", description: "إدارة إعلانات Facebook وInstagram", icon: "📘" },
      { name: "LinkedIn Campaign Manager", description: "إدارة إعلانات LinkedIn", icon: "🔗" },
      { name: "TikTok Ads", description: "إعلانات TikTok للجمهور الشاب", icon: "🎵" }
    ],
    icon: "🎯"
  },
  {
    title: "أدوات أتمتة التسويق",
    description: "حلول متقدمة لأتمتة العمليات التسويقية وزيادة الكفاءة",
    tools: [
      { name: "HubSpot", description: "منصة شاملة للتسويق والمبيعات", icon: "🔄" },
      { name: "Mailchimp", description: "إرسال حملات البريد الإلكتروني", icon: "📧" },
      { name: "Zapier", description: "ربط التطبيقات وأتمتة المهام", icon: "⚡" },
      { name: "ActiveCampaign", description: "أتمتة التسويق والتحويلات", icon: "🎪" }
    ],
    icon: "🤖"
  },
  {
    title: "أدوات تحليل المنافسين",
    description: "أدوات متخصصة لتحليل المنافسين واكتشاف الفرص الجديدة",
    tools: [
      { name: "SEMrush", description: "تحليل الكلمات المفتاحية والمنافسين", icon: "🔍" },
      { name: "Ahrefs", description: "تحليل الروابط والكلمات المفتاحية", icon: "🔗" },
      { name: "SpyFu", description: "كشف استراتيجيات المنافسين", icon: "👁️" },
      { name: "SimilarWeb", description: "تحليل حركة المرور والمنافسين", icon: "🌐" }
    ],
    icon: "🔍"
  }
]

// Marketing Strategies Data
const marketingStrategies = {
  inbound: [
    { name: "Content Marketing", description: "إنشاء محتوى قيم يجذب العملاء المحتملين", icon: "📝" },
    { name: "SEO Optimization", description: "تحسين الظهور في محركات البحث", icon: "🎯" },
    { name: "Social Media", description: "بناء حضور قوي على وسائل التواصل", icon: "📱" },
    { name: "Email Marketing", description: "حملات بريد إلكتروني محسنة", icon: "📧" }
  ],
  outbound: [
    { name: "Google Ads", description: "إعلانات مدفوعة في نتائج البحث", icon: "🔍" },
    { name: "Social Ads", description: "إعلانات على وسائل التواصل الاجتماعي", icon: "📘" },
    { name: "Display Advertising", description: "إعلانات بصرية على المواقع", icon: "🖼️" },
    { name: "Video Marketing", description: "إعلانات فيديو على YouTube", icon: "🎥" }
  ],
  conversion: [
    { name: "Landing Pages", description: "صفحات محسنة للتحويل", icon: "🎯" },
    { name: "A/B Testing", description: "اختبارات لتحسين الأداء", icon: "🧪" },
    { name: "CRO", description: "تحسين معدلات التحويل", icon: "📈" },
    { name: "Remarketing", description: "إعادة استهداف العملاء المحتملين", icon: "🔄" }
  ]
}

// Case Studies Data
const marketingCaseStudies = [
  {
    title: "شركة تقنية ناشئة",
    description: "حملة تسويقية متكاملة لشركة تقنية مع التركيز على جذب المستثمرين",
    results: ["زيادة العملاء المحتملين 400%", "تحسين معدل التحويل 60%", "زيادة الوعي بالعلامة التجارية"],
    strategies: ["Content Marketing", "LinkedIn Ads", "Email Marketing"],
    duration: "6 أشهر",
    client: "شركة تقنية"
  },
  {
    title: "متجر إلكتروني للملابس",
    description: "حملة تسويقية شاملة لزيادة المبيعات عبر الإنترنت",
    results: ["زيادة المبيعات 300%", "تحسين ROAS 150%", "زيادة العملاء المتكررين"],
    strategies: ["Facebook Ads", "Google Shopping", "Remarketing"],
    duration: "8 أشهر",
    client: "متجر ملابس"
  },
  {
    title: "شركة خدمات استشارية",
    description: "حملة تسويقية للشركات لزيادة العملاء المؤسسيين",
    results: ["زيادة الاستفسارات 250%", "تحسين جودة العملاء المحتملين", "زيادة القيمة المتوسطة للعقد"],
    strategies: ["LinkedIn Marketing", "Content Marketing", "Account-Based Marketing"],
    duration: "12 شهر",
    client: "شركة استشارية"
  }
]

const digitalMarketingContent = {
  // Basic Info
  title: "دعم التسويق الرقمي",
  description: "حلول تقنية متقدمة لدعم حملاتك التسويقية وتحقيق نتائج استثنائية",
  icon: TrendingUp,
  color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  gradient: "from-cyan-500 to-teal-500",
  
  // Hero Section
  heroTitle: "شريكك التقني في النجاح التسويقي",
  heroDescription: "نقدم الدعم التقني المتخصص لوكالات التسويق والشركات، من إعداد أنظمة التتبع والتحليلات إلى تحسين معدلات التحويل وأتمتة العمليات التسويقية. نستخدم أحدث التقنيات والأدوات لضمان نتائج ملموسة وقابلة للقياس في جميع حملاتك التسويقية.",
  heroFeatures: [
    "تتبع وتحليلات متقدمة",
    "تحسين معدلات التحويل",
    "أتمتة التسويق",
    "تقارير مخصصة"
  ],
  
  // Overview Section
  overviewTitle: "تقنية متقدمة لتسويق أكثر فعالية",
  overviewContent: "في عالم التسويق الرقمي، البيانات والتقنية هما مفتاح النجاح. نحن نوفر البنية التحتية التقنية والأدوات المتقدمة التي تحتاجها لتنفيذ حملات تسويقية ناجحة وقابلة للقياس، مع تحليلات عميقة تساعدك على اتخاذ قرارات مدروسة. نركز على بناء استراتيجيات تسويقية شاملة تجمع بين التكنولوجيا المتقدمة والإبداع التسويقي لتحقيق أقصى عائد على الاستثمار.",
  
  // Features
  features: [
    {
      title: "إعداد Google Analytics 4",
      description: "تهيئة وتخصيص GA4 لتتبع دقيق لسلوك المستخدمين والتحويلات مع إعداد الأحداث المخصصة"
    },
    {
      title: "Google Tag Manager",
      description: "إدارة جميع أكواد التتبع من مكان واحد بكفاءة عالية مع إعداد triggers متقدمة"
    },
    {
      title: "تتبع التحويلات المتقدم",
      description: "إعداد تتبع دقيق للمبيعات والأهداف عبر جميع القنوات مع تحليل مسار التحويل"
    },
    {
      title: "لوحات تحكم مخصصة",
      description: "تصميم dashboards تفاعلية لمتابعة الأداء في الوقت الفعلي مع تنبيهات ذكية"
    },
    {
      title: "أتمتة التسويق الشاملة",
      description: "ربط أنظمة CRM وأتمتة العمليات التسويقية المتكررة مع تحسين سير العمل"
    },
    {
      title: "تحليل البيانات المتقدم",
      description: "تحليلات متقدمة واستخراج رؤى قيمة من البيانات مع تقارير مخصصة"
    },
    {
      title: "إدارة الحملات الإعلانية",
      description: "إدارة شاملة للحملات الإعلانية على جميع المنصات مع تحسين الأداء المستمر"
    },
    {
      title: "تحسين معدلات التحويل",
      description: "استراتيجيات متقدمة لتحسين معدلات التحويل مع اختبارات A/B مستمرة"
    }
  ],
  
  // Benefits
  benefits: [
    {
      title: "قرارات مبنية على البيانات",
      description: "رؤى دقيقة ومفصلة تساعدك على اتخاذ قرارات تسويقية صحيحة ومبنية على الأدلة"
    },
    {
      title: "تحسين العائد على الاستثمار بنسبة 200%",
      description: "معرفة القنوات والحملات الأكثر ربحية وتحسينها لزيادة العائد على الاستثمار"
    },
    {
      title: "توفير الوقت والجهد",
      description: "أتمتة المهام المتكررة والتركيز على الاستراتيجية مع تحسين الكفاءة التشغيلية"
    },
    {
      title: "تتبع شامل ودقيق",
      description: "رؤية كاملة لرحلة العميل من أول نقطة تماس حتى الشراء مع تحليل متقدم"
    },
    {
      title: "تحسين مستمر وممنهج",
      description: "اختبارات A/B وتحسينات مستمرة لزيادة الأداء مع منهجية علمية"
    },
    {
      title: "تكامل سلس ومتقدم",
      description: "ربط جميع أدواتك التسويقية في نظام واحد متكامل مع تدفق البيانات"
    },
    {
      title: "تحليلات تنبؤية",
      description: "استخدام الذكاء الاصطناعي للتنبؤ بسلوك العملاء وتخطيط الحملات المستقبلية"
    },
    {
      title: "دعم فني متخصص",
      description: "فريق دعم متخصص متاح على مدار الساعة لضمان استمرارية الحملات"
    }
  ],
  
  // Process Steps
  processSteps: [
    {
      title: "تقييم شامل للوضع الحالي",
      description: "فحص الأنظمة الحالية وتحديد الثغرات والفرص مع تحليل المنافسين والسوق"
    },
    {
      title: "وضع استراتيجية تتبع شاملة",
      description: "تصميم استراتيجية تتبع شاملة تغطي جميع نقاط التماس مع تحديد KPIs"
    },
    {
      title: "التنفيذ التقني المتقدم",
      description: "إعداد أدوات التتبع والتحليلات بشكل احترافي مع اختبارات شاملة"
    },
    {
      title: "اختبار والتحقق من الدقة",
      description: "التأكد من دقة البيانات وصحة التتبع مع إجراء اختبارات دورية"
    },
    {
      title: "التدريب والتسليم الشامل",
      description: "تدريب الفريق على استخدام الأدوات والتقارير مع دليل مفصل"
    },
    {
      title: "الدعم والتحسين المستمر",
      description: "متابعة الأداء وإجراء تحسينات مستمرة مع تقارير دورية"
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "صفحات الهبوط",
      description: "صفحات محسنة للحملات التسويقية لزيادة معدلات التحويل",
      href: "/services/landing-pages",
      icon: Target
    },
    {
      title: "تحسين محركات البحث",
      description: "زيادة الظهور العضوي لدعم الحملات الإعلانية",
      href: "/services/seo-optimization",
      icon: Search
    },
    {
      title: "استراتيجية العلامة التجارية",
      description: "بناء هوية رقمية قوية تدعم جهودك التسويقية",
      href: "/services/brand-strategy",
      icon: Megaphone
    }
  ],
  
  // CTA
  ctaTitle: "جاهز لتحسين أداء حملاتك التسويقية؟",
  ctaDescription: "دعنا نوفر لك الأدوات والتقنيات التي تحتاجها لنجاح تسويقي مستدام"
}

export default function DigitalMarketingPage() {
  return (
    <>
      <ServicePageTemplate {...digitalMarketingContent} />
      
      {/* Marketing Tools Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              أدوات التسويق الرقمي المتقدمة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              مجموعة شاملة من الأدوات والتقنيات لضمان نجاح حملاتك التسويقية
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {marketingTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{tool.icon}</span>
                      <h3 className="text-xl font-semibold font-handicrafts">{tool.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-handicrafts">{tool.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tool.tools.map((item, idx) => (
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
      
      {/* Marketing Strategies Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">
              استراتيجيات التسويق الرقمي
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handicrafts">
              استراتيجيات متكاملة لتحقيق أهدافك التسويقية
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Inbound Marketing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">التسويق الجاذب</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketingStrategies.inbound.map((strategy, index) => (
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
            
            {/* Outbound Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Megaphone className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">التسويق الدافع</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketingStrategies.outbound.map((strategy, index) => (
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
            
            {/* Conversion Optimization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-semibold font-handicrafts">تحسين التحويل</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketingStrategies.conversion.map((strategy, index) => (
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
              حملات تسويقية حققت نتائج ملموسة لعملائنا
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {marketingCaseStudies.map((study, index) => (
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
        faqs={digitalMarketingFAQs}
        title="أسئلة شائعة حول التسويق الرقمي"
        subtitle="إجابات مفصلة عن أكثر الأسئلة شيوعاً حول خدمات التسويق الرقمي"
      />
    </>
  )
} 