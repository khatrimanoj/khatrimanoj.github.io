"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface Contact {
  icon: LucideIcon
  title: string
  value: string
  color: string
}

interface ContactCardProps {
  contact: Contact
}

export function ContactCard({ contact }: ContactCardProps) {
  const { icon: Icon, title, value, color } = contact

  return (
    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="text-center h-full group">
        <CardContent className="p-6">
          <motion.div
            className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="text-white" size={20} />
          </motion.div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{value}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
