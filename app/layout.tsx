import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./fonts.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Youssef & Team - Full Stack Web Development Experts | مســــار - خبراء تطوير الويب المتكامل",
  description:
    "Professional web development services specializing in digital presence optimization and Google visibility. We help businesses achieve commanding online presence and exceptional brand recognition. | خدمات تطوير الويب الاحترافية المتخصصة في تحسين الحضور الرقمي وظهور جوجل. نساعد الشركات على تحقيق حضور قوي عبر الإنترنت واعتراف استثنائي بالعلامة التجارية.",
  keywords:
    "web development, full stack, MEARN stack, React, Next.js, Node.js, MongoDB, SEO optimization, Google visibility, digital presence, brand visibility, marketing agencies, digital marketing, freelance developer, تطوير الويب, مطور مواقع, تحسين محركات البحث, الحضور الرقمي, ظهور جوجل",
  authors: [{ name: "Youssef & Team" }],
  openGraph: {
    title: "Youssef & Team - Full Stack Web Development Experts",
    description:
      "Professional web development services specializing in digital presence optimization and Google visibility.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        {/* Preload critical fonts for better performance */}
        <link
          rel="preload"
          href="/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NotoSansArabic-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TheYearofHandicrafts-Black.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-handicrafts" dir="rtl">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
