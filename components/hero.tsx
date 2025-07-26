"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Users, TrendingUp } from "lucide-react"
import { texts } from "@/lib/texts"
import { FlipWords } from "@/components/flip-words"
import NexusOrbSup from "@/components/nexus-orb-sup"
import { TopFadeGrid } from "@/components/top-fade-grid"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Get flip words from texts
  const flipWords = texts.flipWords

  return (
    <section className="relative min-h-screen flex items-center justify-end overflow-hidden pt-20 sm:pt-24 lg:pt-4 pb-4 sm:pb-8 lg:pb-0" dir="ltr">
      <TopFadeGrid />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right max-w-4xl order-2 lg:order-1">
            <div className="flex justify-center lg:justify-end mb-3 sm:mb-4 lg:mb-6">
              <Badge variant="secondary" className="px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm font-medium font-handicrafts">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-1.5 lg:ml-2" />
                {texts.teamExpertise}
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent leading-tight font-handicrafts-black text-left">
              {texts.heroTitle}
            </h1>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-muted-foreground font-handicrafts text-left">
              {texts.heroSubtitle}
            </h2>

            {/* Flip Words Section */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 font-handicrafts text-left">
              <span className="text-foreground">{texts.heroFlipText} </span>
              <FlipWords words={flipWords} className="text-primary" duration={2500} />
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-handicrafts text-left">
              {texts.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-end items-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
              <Button size="lg" onClick={scrollToContact} className="group font-handicrafts w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                {texts.startProject}
                <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToPortfolio} className="font-handicrafts w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                {texts.viewWork}
              </Button>
            </div>

            <div className="flex flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-2xl mx-auto lg:mx-0" >
              <div className="flex items-center justify-center space-x-reverse space-x-1 sm:space-x-1.5 lg:space-x-2 text-muted-foreground font-handicrafts text-xs sm:text-sm md:text-base">
                <span className="font-medium px-2">{texts.mearnStack}</span>
                <Code className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary" />

              </div>
              <div className="flex items-center justify-center space-x-reverse space-x-1 sm:space-x-1.5 lg:space-x-2 text-muted-foreground font-handicrafts text-xs sm:text-sm md:text-base">
         
                <span className="font-medium px-2">{texts.performanceFirst}</span>
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="flex items-center justify-center space-x-reverse space-x-1 sm:space-x-1.5 lg:space-x-2 text-muted-foreground font-handicrafts text-xs sm:text-sm md:text-base">
                <span className="font-medium px-2">{texts.teamExpertise}</span>
                <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary" />

              </div>
            </div>
          </div>

          {/* Tech Skills Visualization */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
            <div className="text-center w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-none" dir="ltr">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 font-handicrafts">{texts.techSkillsTitle}</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-md mx-auto font-handicrafts">{texts.techSkillsSubtitle}</p>
              <div className="flex justify-center">
                <NexusOrbSup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
