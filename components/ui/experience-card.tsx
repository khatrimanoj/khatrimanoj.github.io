"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, type LucideIcon } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  points: string[]
  icon: LucideIcon
  current: boolean
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const { title, company, period, points, icon: Icon, current } = experience

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="group relative">
        {current && (
          <motion.div
            className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Current
          </motion.div>
        )}
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="text-primary" size={20} />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-primary">{company}</p>
              </div>
            </div>
            <div className="text-muted-foreground text-sm flex items-center gap-1">
              <Calendar size={14} />
              {period}
            </div>
          </div>
          <ul className="text-muted-foreground space-y-2 text-sm">
            {points.map((point, pointIndex) => (
              <motion.li
                key={pointIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: pointIndex * 0.1 }}
                viewport={{ once: true }}
              >
                • {point}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
