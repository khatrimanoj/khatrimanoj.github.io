"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  skills: string[]
}

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { icon: Icon, title, description, skills } = service

  return (
    <motion.div className="flex items-start gap-4 group" whileHover={{ x: 5 }}>
      <motion.div
        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="text-primary" size={24} />
      </motion.div>
      <div className="flex-1">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: skillIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
