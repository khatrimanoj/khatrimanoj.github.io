"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <motion.div className="text-center p-4 border rounded-lg group" whileHover={{ scale: 1.05 }}>
      <motion.div
        className="text-3xl font-bold text-primary flex items-center justify-center gap-2"
        whileHover={{ scale: 1.1 }}
      >
        <Icon size={24} />
        {value}
      </motion.div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  )
}
