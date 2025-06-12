"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  level: number
  icon: LucideIcon
}

interface SkillBarProps {
  skill: Skill
  index: number
}

export function SkillBar({ skill, index }: SkillBarProps) {
  const { name, level, icon: Icon } = skill

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
            <Icon className="text-primary" size={16} />
          </motion.div>
          {name}
        </span>
        <span className="text-primary font-bold">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-primary h-2 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}
