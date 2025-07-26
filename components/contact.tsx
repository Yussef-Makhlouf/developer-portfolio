"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram } from "lucide-react"
import { texts } from "@/lib/texts"
import { useContactForm } from "@/hooks/use-contact-form"
import { FormError } from "@/components/ui/form-error"

export function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleBlur,
    handleSubmit,
  } = useContactForm()

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
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`font-handicrafts ${errors.firstName ? 'border-red-500 focus:border-red-500' : ''}`}
                      dir="rtl"
                    />
                    <FormError error={errors.firstName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-handicrafts text-sm sm:text-base">{texts.lastName}</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`font-handicrafts ${errors.lastName ? 'border-red-500 focus:border-red-500' : ''}`}
                      dir="rtl"
                    />
                    <FormError error={errors.lastName} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-handicrafts text-sm sm:text-base">{texts.email}</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`font-handicrafts ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                    dir="ltr"
                  />
                  <FormError error={errors.email} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-handicrafts text-sm sm:text-base">{texts.subject}</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`font-handicrafts ${errors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                    dir="rtl"
                  />
                  <FormError error={errors.subject} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-handicrafts text-sm sm:text-base">{texts.message}</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder={texts.messagePlaceholder} 
                    className={`font-handicrafts ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                    dir="rtl"
                  />
                  <FormError error={errors.message} />
                </div>

                <Button type="submit" className="w-full font-handicrafts" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {texts.sending}
                    </div>
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
