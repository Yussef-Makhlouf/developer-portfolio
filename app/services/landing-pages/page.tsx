"use client"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Rocket, TrendingUp, Search, Code, Target, Zap, MousePointer } from "lucide-react"

const landingPagesContent = {
  // Basic Info
  title: "صفحات هبوط عالية التحويل",
  description: "نصمم صفحات هبوط مُحسنة للتحويل تحقق أهدافك التسويقية",
  icon: Rocket,
  color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  gradient: "from-purple-500 to-pink-500",
  
  // Hero Section
  heroTitle: "صفحات هبوط تحول الزوار إلى عملاء",
  heroDescription: "نصمم صفحات هبوط احترافية مُحسنة للتحويل باستخدام أحدث تقنيات التصميم وعلم النفس التسويقي، مع تحليلات متقدمة واختبارات A/B لضمان أفضل النتائج",
  heroFeatures: [
    "معدلات تحويل عالية",
    "تصميم سريع الاستجابة",
    "تحميل فائق السرعة",
    "محسّنة لمحركات البحث"
  ],
  
  // Overview Section
  overviewTitle: "صفحات مصممة للنجاح",
  overviewContent: "صفحات الهبوط الفعالة هي مفتاح نجاح حملاتك التسويقية. نحن نجمع بين التصميم الجذاب والمحتوى المقنع والتقنيات المتقدمة لإنشاء صفحات تحقق أهدافك سواء كانت جمع بيانات العملاء، زيادة المبيعات، أو الترويج لخدماتك",
  
  // Features
  features: [
    {
      title: "تصميم موجه للتحويل",
      description: "تصميمات مدروسة تركز على دفع الزائر لاتخاذ الإجراء المطلوب"
    },
    {
      title: "سرعة تحميل فائقة",
      description: "صفحات محسنة للأداء تضمن عدم فقدان الزوار بسبب البطء"
    },
    {
      title: "نماذج ذكية",
      description: "نماذج تواصل سهلة الاستخدام مع تحقق فوري وتكامل مع أنظمة CRM"
    },
    {
      title: "محتوى مقنع",
      description: "كتابة محتوى تسويقي احترافي يخاطب احتياجات العملاء"
    },
    {
      title: "اختبارات A/B",
      description: "اختبار مستمر للعناصر المختلفة لتحسين معدلات التحويل"
    },
    {
      title: "تحليلات مفصلة",
      description: "تتبع دقيق لسلوك الزوار وتحليل الأداء لاتخاذ قرارات مدروسة"
    }
  ],
  
  // Benefits
  benefits: [
    {
      title: "زيادة معدلات التحويل",
      description: "تحويل المزيد من الزوار إلى عملاء فعليين أو متوقعين"
    },
    {
      title: "تقليل تكلفة الاستحواذ",
      description: "الحصول على عملاء جدد بتكلفة أقل من خلال تحسين الأداء"
    },
    {
      title: "تحسين جودة العملاء المحتملين",
      description: "جذب عملاء مهتمين فعلاً بما تقدمه من خدمات أو منتجات"
    },
    {
      title: "قياس دقيق للنتائج",
      description: "معرفة بالضبط ما يعمل وما لا يعمل في حملاتك التسويقية"
    },
    {
      title: "مرونة في التحديث",
      description: "سهولة تعديل المحتوى والعروض حسب احتياجات الحملة"
    },
    {
      title: "عائد استثمار مرتفع",
      description: "تحقيق نتائج ملموسة وقابلة للقياس من استثمارك التسويقي"
    }
  ],
  
  // Process Steps
  processSteps: [
    {
      title: "فهم الهدف والجمهور",
      description: "دراسة أهداف الحملة وتحليل الجمهور المستهدف لوضع استراتيجية فعالة"
    },
    {
      title: "البحث والتحليل",
      description: "دراسة المنافسين وأفضل الممارسات في مجالك"
    },
    {
      title: "التصميم والمحتوى",
      description: "إنشاء تصميم جذاب وكتابة محتوى مقنع يدفع للتحويل"
    },
    {
      title: "التطوير والتحسين",
      description: "برمجة الصفحة وتحسينها للسرعة والأداء"
    },
    {
      title: "الاختبار والإطلاق",
      description: "اختبار شامل على جميع الأجهزة قبل الإطلاق"
    },
    {
      title: "التحليل والتحسين المستمر",
      description: "متابعة الأداء وإجراء تحسينات مستمرة لزيادة التحويلات"
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "دعم التسويق الرقمي",
      description: "استراتيجيات تسويقية متكاملة لنجاح حملاتك",
      href: "/services/digital-marketing",
      icon: TrendingUp
    },
    {
      title: "تحسين محركات البحث",
      description: "زيادة الظهور العضوي لصفحاتك",
      href: "/services/seo-optimization",
      icon: Search
    },
    {
      title: "تطوير تطبيقات الويب",
      description: "حلول ويب متقدمة لاحتياجاتك",
      href: "/services/web-app-development",
      icon: Code
    }
  ],
  
  // CTA
  ctaTitle: "جاهز لزيادة معدلات التحويل؟",
  ctaDescription: "دعنا نصمم لك صفحة هبوط احترافية تحقق أهدافك التسويقية"
}

export default function LandingPagesPage() {
  return <ServicePageTemplate {...landingPagesContent} />
} 