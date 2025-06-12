"use client"

import { motion, AnimatePresence } from "framer-motion"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact"]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-md border-t"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={onClose}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
