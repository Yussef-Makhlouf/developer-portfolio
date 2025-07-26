"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram } from "lucide-react"
import { texts } from "@/lib/texts"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: texts.messageSent,
      description: texts.messageResponse,
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 bg-grid-pattern ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">{texts.contactTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-handicrafts">{texts.contactSubtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto ">
          <div className="text-center lg:text-right">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 font-handicrafts">{texts.conversationTitle}</h3>
            <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed font-handicrafts text-center lg:text-right">{texts.conversationText}</p>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 mb-8">
              <div className="flex items-center justify-center lg:justify-end space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="font-semibold font-handicrafts text-base sm:text-lg mb-1">{texts.email}</div>
                  <div className="text-muted-foreground font-handicrafts text-sm sm:text-base">hello@youssefteam.dev</div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="font-semibold font-handicrafts text-base sm:text-lg mb-1">{texts.phone}</div>
                  <div className="text-muted-foreground font-handicrafts text-sm sm:text-base">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="font-semibold font-handicrafts text-base sm:text-lg mb-1">{texts.location}</div>
                  <div className="text-muted-foreground font-handicrafts text-sm sm:text-base">{texts.remoteTeam}</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="text-center" dir="ltr" >
              {/* <h4 className="font-semibold font-handicrafts  sm:text-lg mb-4 text-muted-foreground text-left">تابعنا على وسائل التواصل الاجتماعي</h4> */}
              <div className="flex justify-center lg:justify-end space-x-3 sm:space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-handicrafts text-lg sm:text-xl">{texts.sendMessage}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-handicrafts text-sm sm:text-base">{texts.firstName}</Label>
                    <Input id="firstName" name="firstName" required className="font-handicrafts" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-handicrafts text-sm sm:text-base">{texts.lastName}</Label>
                    <Input id="lastName" name="lastName" required className="font-handicrafts" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-handicrafts text-sm sm:text-base">{texts.email}</Label>
                  <Input id="email" name="email" type="email" required className="font-handicrafts" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-handicrafts text-sm sm:text-base">{texts.subject}</Label>
                  <Input id="subject" name="subject" required className="font-handicrafts" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-handicrafts text-sm sm:text-base">{texts.message}</Label>
                  <Textarea id="message" name="message" rows={4} required placeholder={texts.messagePlaceholder} className="font-handicrafts" />
                </div>

                <Button type="submit" className="w-full font-handicrafts" disabled={isSubmitting}>
                  {isSubmitting ? (
                    texts.sending
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {texts.sendBtn}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
