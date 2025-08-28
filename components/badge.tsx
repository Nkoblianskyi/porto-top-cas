"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant, ...props }, ref) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "border-transparent bg-primary text-primary-foreground shadow",
        variant === "secondary" && "border-transparent bg-secondary text-secondary-foreground",
        variant === "destructive" && "border-transparent bg-destructive text-destructive-foreground shadow",
        variant === "outline" && "text-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }
