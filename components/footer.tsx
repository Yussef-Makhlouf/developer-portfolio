"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ArrowRight, Heart } from "lucide-react"
import { texts } from "@/lib/texts"

export function Footer() {

  return (
    <footer className="relative bg-gradient-to-br from-background via-background/95 to-background/90 border-t border-border/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 space-y-6">
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent font-handicrafts-black hover:scale-105 transition-transform duration-300"
              >
                {texts.heroTitle}
              </Link>
              <p className="text-muted-foreground max-w-lg font-handicrafts text-sm sm:text-base leading-relaxed">
                {texts.footerDescription}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="group p-3 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary/20 hover:to-blue-500/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="group p-3 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary/20 hover:to-blue-500/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="group p-3 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary/20 hover:to-blue-500/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="mailto:hello@youssefteam.dev"
                className="group p-3 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary/20 hover:to-blue-500/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg font-handicrafts bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {texts.servicesTitle}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full" />
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/web-app-development" 
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-handicrafts"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {texts.webAppDev}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/ecommerce" 
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-handicrafts"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {texts.ecommerce}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/seo-optimization" 
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-handicrafts"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {texts.seoOptimization}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/website-redesign" 
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-handicrafts"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {texts.websiteRedesign}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg font-handicrafts bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {texts.company}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full" />
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#about" 
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-handicrafts"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {texts.about}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  href="#portfolio" 
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-handicrafts"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {texts.portfolio}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  href="#testimonials" 
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-handicrafts"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {texts.testimonials}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-handicrafts"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {texts.contact}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-16 pt-8" dir="ltr">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground font-handicrafts text-center sm:text-left">
              &copy; {new Date().getFullYear()} {texts.heroTitle}. {texts.allRights}
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  )
}
