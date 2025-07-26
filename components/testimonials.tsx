"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { texts } from "@/lib/texts"

export function Testimonials() {

  const testimonials = [
    {
      name: "سارة أحمد",
      role: "الرئيس التنفيذي، شركة التقنية المتقدمة",
      avatar: "/skills/react.png",
      content:
        "شركة مـســـار قدموا منصة تجارة إلكترونية استثنائية تجاوزت توقعاتنا. تحسين الأداء وتنفيذ تحسين محركات البحث أدى إلى زيادة 40% في الزيارات العضوية.",
      rating: 5,
    },
    {
      name: "محمد علي",
      role: "مؤسس، حلول رقمية",
      avatar: "/skills/react.png",
      content:
        "العمل مع هذا الفريق كان نقطة تحول لشركتنا. بنوا منصة SaaS قابلة للتطوير تتعامل مع آلاف المستخدمين بسلاسة. خبرتهم في تقنيات MEARN متميزة.",
      rating: 5,
    },
    {
      name: "فاطمة حسن",
      role: "مديرة التسويق، شركة النمو",
      avatar: "/skills/react.png",
      content:
        "صفحات الهبوط التي أنشأوها لحملاتنا حسنت معدلات التحويل بشكل كبير. الاهتمام بالتفاصيل والتركيز على تحسين الأداء رائع.",
      rating: 5,
    },
    {
      name: "أحمد محمود",
      role: "مالك مطعم",
      avatar: "/skills/react.png",
      content:
        "موقع مطعمنا الجديد مع نظام الطلب عبر الإنترنت حول أعمالنا. التصميم جميل والوظائف مثالية. أوصي بهم بشدة!",
      rating: 5,
    },
    {
      name: "ليلى عبدالله",
      role: "مؤسسة شركة ناشئة",
      avatar: "/skills/react.png",
      content:
        "قدرة الفريق على فهم رؤيتنا وترجمتها إلى تطبيق ويب وظيفي وجميل كانت مثيرة للإعجاب. قدموا المشروع في الوقت المحدد وفي حدود الميزانية.",
      rating: 5,
    },
    {
      name: "جمال محمد",
      role: "مالك منصة التعلم الإلكتروني",
      avatar: "/skills/react.png",
      content:
        "بنوا نظام إدارة التعلم الخاص بنا من الصفر بجميع الميزات التي نحتاجها. تكامل بث الفيديو ونظام إدارة المستخدمين يعملان بشكل مثالي.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30 bg-grid-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">{texts.testimonialsTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-handicrafts">{texts.testimonialsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 font-handicrafts">
              <CardContent className="p-4 sm:p-6">
                <div className={`flex items-center mb-3 sm:mb-4`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed font-handicrafts text-sm sm:text-base">"{testimonial.content}"</p>

                <div className={`flex items-center`}>
                  <Avatar className={`h-10 w-10 sm:h-12 sm:w-12`}>
                    <AvatarImage src={testimonial.avatar || "/skills/next.png"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`text-right mr-3`}>
                    <div className="font-semibold font-handicrafts text-sm sm:text-base text-left">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-handicrafts">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
