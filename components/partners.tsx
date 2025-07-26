"use client"

import Marquee from "@/components/marquee"
import { texts } from "@/lib/texts"

export function Partners() {

  const partners = [
    { name: "Google Ads", logo: "🎯" },
    { name: "Facebook Ads", logo: "📘" },
    { name: "LinkedIn", logo: "💼" },
    { name: "Instagram", logo: "📸" },
    { name: "Twitter", logo: "🐦" },
    { name: "TikTok", logo: "🎵" },
    { name: "YouTube", logo: "📺" },
    { name: "Shopify", logo: "🛍️" },
    { name: "WordPress", logo: "📝" },
    { name: "Webflow", logo: "🌊" },
    { name: "Figma", logo: "🎨" },
    { name: "Adobe", logo: "🔴" },
  ]

  return (
    <section className="py-20 relative overflow-hidden" dir="ltr">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black text-white">{texts.partnersTitle}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-handicrafts">{texts.partnersSubtitle}</p>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:20s]">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-24 sm:w-32 h-16 sm:h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-colors duration-300"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl mb-1">{partner.logo}</div>
                  <div className="text-xs font-medium text-white/80 font-handicrafts">{partner.name}</div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
