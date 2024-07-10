import * as React from "react"

interface BadgeProps {
  text?: string
  className?: string
}

export const Badge = ({ text, className }: BadgeProps) => (
  <div>
      <span className="animate-bounce relative inline-flex rounded-full h-2 w-2 bg-[#f426fbae]"></span>
  </div>
)