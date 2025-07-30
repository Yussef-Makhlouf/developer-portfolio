"use client"

import Link from "next/link"
import { ChevronLeft, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  className?: string
}

export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("", className)}>
      <ol className="flex items-center gap-2 text-sm font-handicrafts">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>الرئيسية</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
} 