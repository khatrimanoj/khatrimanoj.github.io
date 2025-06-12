"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Smartphone, Zap, Users, Trophy } from "lucide-react"

export function FloatingIcons() {
  const icons = [
    { Icon: Code2, delay: 0, x: "10%", y: "20%" },
    { Icon: Palette, delay: 0.5, x: "80%", y: "30%" },
    { Icon: Smartphone, delay: 1, x: "15%", y: "70%" },
    { Icon: Zap, delay: 1.5, x: "85%", y: "80%" },
    { Icon: Users, delay: 2, x: "50%", y: "10%" },
    { Icon: Trophy, delay: 2.5, x: "90%", y: "50%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 dark:opacity-5"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  )
}

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  )
}
