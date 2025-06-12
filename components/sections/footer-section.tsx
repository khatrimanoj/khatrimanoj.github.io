"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-8 px-4 border-t relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p className="text-muted-foreground flex items-center justify-center gap-2" whileHover={{ scale: 1.05 }}>
          © {new Date().getFullYear()} Manoj Khatri. Made with{" "}
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
            <Heart className="text-red-500" size={16} />
          </motion.span>{" "}
          All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
