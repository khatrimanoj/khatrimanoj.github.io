"use client"

import { motion } from "framer-motion"

interface Award {
  icon: string
  title: string
  description: string
  color: string
}

interface AwardCardProps {
  award: Award
}

export function AwardCard({ award }: AwardCardProps) {
  const { icon, title, description, color } = award

  return (
    <motion.div className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
      <motion.div
        className={`w-10 h-10 ${color} rounded-full flex items-center justify-center`}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-white text-sm">{icon}</span>
      </motion.div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  )
}
