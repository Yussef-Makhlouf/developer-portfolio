"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Lightbulb, Award, Users } from "lucide-react"
import { texts } from "@/lib/texts"

export function About() {

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
    "GraphQL",
    "AWS",
    "Docker",
    "Git",
    "SEO",
    "Google Analytics",
    "Performance Optimization",
    "Digital Marketing",
  ]

  const values = [
    {
      icon: Target,
      title: texts.digitalPresence,
      description: texts.digitalPresenceDesc,
    },
    {
      icon: Lightbulb,
      title: texts.brandVisibility,
      description: texts.brandVisibilityDesc,
    },
    {
      icon: Award,
      title: texts.agencyCollaboration,
      description: texts.agencyCollaborationDesc,
    },
    {
      icon: Users,
      title: texts.technicalExcellence,
      description: texts.technicalExcellenceDesc,
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-handicrafts-black">{texts.aboutTitle}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-handicrafts">{texts.aboutSubtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-10 sm:mb-12 lg:mb-16">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 font-handicrafts">{texts.missionTitle}</h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 lg:mb-6 leading-relaxed font-handicrafts text-sm sm:text-base">{texts.missionText1}</p>
            <p className="text-muted-foreground mb-3 sm:mb-4 lg:mb-6 leading-relaxed font-handicrafts text-sm sm:text-base">{texts.missionText2}</p>
            <p className="text-muted-foreground mb-3 sm:mb-4 lg:mb-6 leading-relaxed font-handicrafts text-sm sm:text-base">{texts.missionText3}</p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 font-handicrafts">{texts.skillsTitle}</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-2 sm:px-2.5 lg:px-3 py-1 hover:bg-primary/20 transition-colors font-handicrafts text-xs sm:text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm border-0 font-handicrafts"
            >
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2.5 sm:mb-3 lg:mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <h4 className="font-semibold mb-1.5 sm:mb-2 lg:mb-3 text-sm sm:text-base lg:text-lg font-handicrafts">{value.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-handicrafts">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
