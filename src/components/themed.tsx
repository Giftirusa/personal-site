import * as React from "react"

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      {children}
    </div>
  )
}