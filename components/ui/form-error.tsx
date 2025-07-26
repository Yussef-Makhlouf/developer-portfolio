import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormErrorProps {
  error?: string
  className?: string
}

export function FormError({ error, className }: FormErrorProps) {
  if (!error) return null

  return (
    <div className={cn("flex items-center space-x-2 text-red-500 text-sm animate-in fade-in-0 slide-in-from-top-1", className)}>
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <span className="font-handicrafts">{error}</span>
    </div>
  )
} 