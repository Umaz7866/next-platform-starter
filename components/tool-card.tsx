import type React from "react"
import Link from "next/link"

interface ToolCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  colorScheme: {
    gradient: string
    border: string
    iconBg: string
  }
}

export default function ToolCard({ title, description, icon, href, colorScheme }: ToolCardProps) {
  return (
    <Link
      href={href}
      className={`tool-box block ${colorScheme.gradient} p-4 sm:p-6 rounded-xl border ${colorScheme.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group`}
    >
      <div
        className={`tool-icon w-12 h-12 ${colorScheme.iconBg} rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="tool-title text-lg font-semibold text-center mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="tool-description text-sm text-muted-foreground text-center leading-relaxed">{description}</p>
    </Link>
  )
}
