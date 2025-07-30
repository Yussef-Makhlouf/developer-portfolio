"use client"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Database, Search, Code, Shield, RefreshCw, Settings, Cloud } from "lucide-react"

const cmsIntegrationContent = {
  // Basic Info
  title: "حلول إدارة المحتوى",
  description: "أنظمة إدارة محتوى قوية ومرنة لتحكم كامل في موقعك",
  icon: Database,
  color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  gradient: "from-indigo-500 to-purple-500",
  
  // Hero Section
  heroTitle: "تحكم كامل في محتوى موقعك",
  heroDescription: "نقدم حلول إدارة محتوى متقدمة تمكنك من التحكم الكامل في موقعك دون الحاجة لخبرة تقنية، مع واجهات سهلة الاستخدام وأنظمة Headless CMS حديثة",
  heroFeatures: [
    "واجهات سهلة الاستخدام",
    "تحديثات فورية",
    "أمان متقدم",
    "قابلية توسع لا محدودة"
  ],
  
  // Overview Section
  overviewTitle: "إدارة محتوى ذكية ومرنة",
  overviewContent: "أنظمة إدارة المحتوى الحديثة تمنحك القدرة على إدارة موقعك بكفاءة عالية. سواء كنت تحتاج لنظام CMS تقليدي أو Headless CMS متقدم، نوفر لك الحل الأمثل الذي يناسب احتياجاتك ويمكّنك من النمو",
  
  // Features
  features: [
    {
      title: "Headless CMS",
      description: "أنظمة CMS حديثة تفصل المحتوى عن العرض لمرونة أكبر"
    },
    {
      title: "واجهة إدارة متقدمة",
      description: "لوحة تحكم بديهية تسهل إدارة المحتوى والوسائط"
    },
    {
      title: "تحرير مباشر",
      description: "إمكانية تحرير المحتوى مباشرة على الموقع ورؤية التغييرات فوراً"
    },
    {
      title: "إدارة متعددة اللغات",
      description: "دعم كامل للمواقع متعددة اللغات مع سهولة الترجمة"
    },
    {
      title: "صلاحيات متقدمة",
      description: "نظام صلاحيات مرن للتحكم في وصول المستخدمين"
    },
    {
      title: "نسخ احتياطي تلقائي",
      description: "حماية بياناتك مع نسخ احتياطية منتظمة واستعادة سريعة"
    }
  ],
  
  // Benefits
  benefits: [
    {
      title: "استقلالية كاملة",
      description: "تحديث المحتوى بنفسك دون الحاجة لمطور في كل مرة"
    },
    {
      title: "توفير الوقت والمال",
      description: "تقليل التكاليف التشغيلية وسرعة نشر المحتوى"
    },
    {
      title: "تحسين سير العمل",
      description: "أتمتة العمليات وتسهيل التعاون بين الفرق"
    },
    {
      title: "محتوى محسّن لـ SEO",
      description: "أدوات مدمجة لتحسين المحتوى لمحركات البحث"
    },
    {
      title: "قابلية التوسع",
      description: "نمو سلس مع زيادة المحتوى والزوار دون مشاكل"
    },
    {
      title: "أمان وموثوقية",
      description: "حماية متقدمة للبيانات مع أداء مستقر وموثوق"
    }
  ],
  
  // Process Steps
  processSteps: [
    {
      title: "تحليل الاحتياجات",
      description: "فهم متطلباتك وطبيعة المحتوى لاختيار النظام الأنسب"
    },
    {
      title: "اختيار النظام",
      description: "تحديد أفضل CMS يناسب احتياجاتك (WordPress, Strapi, Contentful, etc.)"
    },
    {
      title: "التصميم والتخصيص",
      description: "تصميم واجهات مخصصة وتهيئة النظام حسب متطلباتك"
    },
    {
      title: "التكامل والتطوير",
      description: "دمج CMS مع موقعك وتطوير الوظائف المطلوبة"
    },
    {
      title: "التدريب والتسليم",
      description: "تدريب فريقك على استخدام النظام بكفاءة"
    },
    {
      title: "الدعم والصيانة",
      description: "دعم فني مستمر وتحديثات دورية للنظام"
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "تطوير تطبيقات الويب",
      description: "تطبيقات مخصصة تتكامل مع نظام CMS",
      href: "/services/web-app-development",
      icon: Code
    },
    {
      title: "تحسين محركات البحث",
      description: "تحسين المحتوى للظهور في نتائج البحث",
      href: "/services/seo-optimization",
      icon: Search
    },
    {
      title: "إعادة تصميم المواقع",
      description: "تحديث موقعك مع نظام CMS حديث",
      href: "/services/website-redesign",
      icon: RefreshCw
    }
  ],
  
  // CTA
  ctaTitle: "جاهز للتحكم الكامل في محتواك؟",
  ctaDescription: "دعنا نساعدك في اختيار وتنفيذ نظام إدارة المحتوى المثالي لاحتياجاتك"
}

export default function CMSIntegrationPage() {
  return <ServicePageTemplate {...cmsIntegrationContent} />
} 