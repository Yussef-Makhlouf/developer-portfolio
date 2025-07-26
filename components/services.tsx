"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Rocket, Search, Palette, Database, Code, Lightbulb, Users, Target, Zap, Globe, Shield } from "lucide-react"
import { texts } from "@/lib/texts"
import Image from "next/image"

export function Services() {
  const storySteps = [
    {
      icon: Lightbulb,
      title: "رؤيتنا الاستراتيجية",
      subtitle: "نؤمن بقوة التحول الرقمي",
      description: "في عالم يتطور بسرعة، نرى أن كل شركة تستحق حضوراً رقمياً استثنائياً. رؤيتنا تتجاوز مجرد بناء مواقع ويب - نحن نخلق تجارب رقمية تحولية تضع عملائنا في المقدمة. نؤمن أن التكنولوجيا يجب أن تكون شريكة في النمو، وليس مجرد أداة.",
      details: [
        "فهم عميق لاحتياجات السوق العربي",
        "رؤية مستقبلية للتحول الرقمي",
        "التزام بالتميز التقني والابتكار"
      ],
      skills: ["react", "next", "node", "ts", "js", "html", "css"]
    },
    {
      icon: Users,
      title: "فهم العميل العميق",
      subtitle: "نبدأ بفهم احتياجاتك الحقيقية",
      description: "كل مشروع يبدأ بجلسة استكشاف شاملة. نستمع إلى قصتك، نفهم تحدياتك، ونحدد أهدافك الرقمية. نسأل الأسئلة الصحيحة لنفهم ليس فقط ما تريد، بل لماذا تريده وكيف يمكن أن يحقق أكبر تأثير على عملك.",
      details: [
        "جلسات استكشاف شاملة ومفصلة",
        "تحليل السوق والمنافسين",
        "تحديد الأهداف الرقمية الاستراتيجية"
      ],
      skills: ["figma", "framer", "react", "next", "tailwind", "mui", "js", "ts"]
    },
    {
      icon: Target,
      title: "استراتيجية التصميم الذكي",
      subtitle: "نصمم من أجل النتائج",
      description: "التصميم عندنا ليس مجرد جماليات - إنه علم. نستخدم مبادئ UX/UI المتقدمة لإنشاء تجارب مستخدم تحولية. كل عنصر، كل لون، كل حركة مصممة لتحقيق هدف محدد: تحسين التحويل، تعزيز الثقة، وبناء علاقة دائمة مع جمهورك.",
      details: [
        "تصميم يركز على تجربة المستخدم",
        "تحسين معدلات التحويل",
        "بناء هوية بصرية قوية ومتسقة"
      ],
      skills: ["figma", "framer", "react", "next", "tailwind", "mui", "js", "ts"]
    },
    {
      icon: Code,
      title: "التطوير المتقدم",
      subtitle: "نبنى بأحدث التقنيات",
      description: "نستخدم أحدث تقنيات تطوير الويب لبناء تطبيقات سريعة وقابلة للتطوير. من React و Next.js إلى Node.js وقواعد البيانات المتقدمة، نضمن أن كل سطر كود يكتب لتحقيق الأداء الأمثل والتجربة الاستثنائية.",
      details: [
        "تطوير باستخدام أحدث التقنيات",
        "أداء محسن وسرعة تحميل عالية",
        "قابلية التطوير والصيانة"
      ],
      skills: ["react", "next", "node", "ts", "js", "html", "css"]
    },
    {
      icon: Search,
      title: "تحسين محركات البحث المتقدم",
      subtitle: "نضمن ظهورك في المقدمة",
      description: "لا يكفي أن يكون موقعك جميلاً - يجب أن يجدك الناس. نطبق استراتيجيات SEO متقدمة لضمان ظهور موقعك في المراتب الأولى على جوجل. من التحسين التقني إلى استراتيجيات المحتوى، نضمن أن عملك يظهر عندما يبحث عنه الناس.",
      details: [
        "تحسين تقني شامل لمحركات البحث",
        "استراتيجيات محتوى محسنة",
        "تحليل وتحسين مستمر للأداء"
      ],
      skills: ["next", "react", "js", "ts", "html", "css", "graphql"]
    },
    {
      icon: Zap,
      title: "الأداء والسرعة",
      subtitle: "كل ثانية مهمة",
      description: "في عالم الانترنت السريع، السرعة ليست رفاهية - إنها ضرورة. نطبق أفضل ممارسات تحسين الأداء لضمان تحميل مواقعنا في أقل من ثانيتين. من تحسين الصور إلى تقنيات التخزين المؤقت المتقدمة، نضمن تجربة سلسة لجميع المستخدمين.",
      details: [
        "تحميل سريع في أقل من ثانيتين",
        "تحسين شامل للأداء",
        "تجربة مستخدم سلسة على جميع الأجهزة"
      ],
      skills: ["next", "react", "js", "ts", "html", "css", "graphql"]
    },
    {
      icon: Shield,
      title: "الأمان والموثوقية",
      subtitle: "نحمي عملك الرقمي",
      description: "الأمان ليس مجرد ميزة إضافية - إنه أساس كل ما نبنيه. نطبق أعلى معايير الأمان لحماية بيانات عملائك وموقعك. من شهادات SSL إلى حماية من الهجمات السيبرانية، نضمن أن عملك آمن ومحمي دائماً.",
      details: [
        "حماية شاملة من التهديدات السيبرانية",
        "معايير أمان عالية المستوى",
        "نسخ احتياطية منتظمة وآمنة"
      ],
      skills: ["react", "next", "node", "prisma", "mongodb", "postgresql", "firebase"]
    },
    {
      icon: Globe,
      title: "الدعم المستمر والنمو",
      subtitle: "نرافقك في رحلة النمو",
      description: "علاقتنا لا تنتهي عند إطلاق الموقع. نقدم دعم فني مستمر، تحديثات دورية، وتحسينات مستمرة لضمان أن موقعك ينمو مع عملك. نحن شركاء في نجاحك الرقمي، ونتعهد بمرافقتك في كل خطوة من رحلة النمو.",
      details: [
        "دعم فني متواصل على مدار الساعة",
        "تحديثات وتحسينات دورية",
        "شراكة طويلة المدى في النمو"
      ],
      skills: ["react", "next", "node", "prisma", "mongodb", "postgresql", "firebase"]
    }
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Floating Skills Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 animate-float-slow">
          <Image src="/skills/react.png" alt="React" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-20 right-20 animate-float-medium">
          <Image src="/skills/next.png" alt="Next.js" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-40 left-1/4 animate-float-fast">
          <Image src="/skills/node.png" alt="Node.js" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-60 right-1/3 animate-float-slow">
          <Image src="/skills/ts.png" alt="TypeScript" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-80 left-1/3 animate-float-medium">
          <Image src="/skills/tailwind.png" alt="Tailwind" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-32 right-1/4 animate-float-fast">
          <Image src="/skills/mongodb.png" alt="MongoDB" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-96 left-20 animate-float-slow">
          <Image src="/skills/firebase.png" alt="Firebase" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-48 right-10 animate-float-medium">
          <Image src="/skills/figma.png" alt="Figma" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-72 left-1/2 animate-float-fast">
          <Image src="/skills/framer.png" alt="Framer" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-24 left-1/3 animate-float-slow">
          <Image src="/skills/stripe.png" alt="Stripe" width={40} height={40} className="opacity-20" />
        </div>
        <div className="absolute top-88 right-1/2 animate-float-medium">
          <Image src="/skills/prisma.png" alt="Prisma" width={40} height={40} className="opacity-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">رؤيتنا وطريقتنا</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-handicrafts leading-relaxed">
            نحن لا نبيع خدمات - نحن نبيع رؤية. رؤية لتحول رقمي حقيقي يضع عملك في المقدمة. 
            دعنا نأخذك في رحلة عبر فلسفتنا وخطواتنا نحو بناء حضور رقمي استثنائي.
          </p>
        </div>

        <div className="space-y-12">
          {storySteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 font-handicrafts relative overflow-hidden border-0 bg-gradient-to-r from-background/50 to-background/30 backdrop-blur-sm">
              {/* Service Skills Floating Around */}
              <div className="absolute inset-0 pointer-events-none">
                {step.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="absolute animate-float-slow"
                    style={{
                      top: `${20 + skillIndex * 15}%`,
                      left: `${10 + skillIndex * 20}%`,
                      animationDelay: `${skillIndex * 0.5}s`,
                      animationDuration: `${3 + skillIndex * 0.5}s`
                    }}
                  >
                    <Image 
                      src={`/skills/${skill}.png`} 
                      alt={skill} 
                      width={24} 
                      height={24} 
                      className="opacity-30 group-hover:opacity-50 transition-opacity"
                    />
                  </div>
                ))}
              </div>

              <div className="relative z-10 p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold font-handicrafts-black mb-2">{step.title}</h3>
                      <p className="text-lg text-primary font-handicrafts mb-4">{step.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed font-handicrafts text-lg">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm font-handicrafts">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
          <h3 className="text-2xl font-bold font-handicrafts-black mb-4">مستعد لبدء رحلتك الرقمية؟</h3>
          <p className="text-lg text-muted-foreground mb-6 font-handicrafts max-w-2xl mx-auto">
            دعنا نجلس معاً ونناقش كيف يمكننا تحويل رؤيتك إلى واقع رقمي استثنائي. 
            نحن هنا لمرافقتك في كل خطوة من رحلة النمو.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="default" className="text-sm font-handicrafts px-4 py-2">
              جلسة استكشاف مجانية
            </Badge>
            <Badge variant="outline" className="text-sm font-handicrafts px-4 py-2">
              خطة استراتيجية مخصصة
            </Badge>
            <Badge variant="outline" className="text-sm font-handicrafts px-4 py-2">
              دعم فني متواصل
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
