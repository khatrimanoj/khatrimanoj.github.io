"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
  description?: string
}

export function SectionHeader({ icon: Icon, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.div className="inline-flex items-center gap-2 mb-6" whileHover={{ scale: 1.05 }}>
        <Icon className="text-primary" size={32} />
        <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      </motion.div>
      <div className="w-24 h-1 bg-primary mx-auto mb-8" />
      {description && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  )
}
