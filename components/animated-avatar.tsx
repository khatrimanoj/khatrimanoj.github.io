"use client"

import { motion } from "framer-motion"
import { Code2, Coffee, Heart, Zap, Star, Rocket } from "lucide-react"

export function AnimatedAvatar() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Main Avatar Container */}
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border bg-gradient-to-br from-primary/10 via-background to-secondary/10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-8 right-6 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-secondary rounded-full animate-pulse delay-500" />
        </div>

        {/* Developer Character */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Head */}
          <div className="relative">
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full relative mb-4"
              animate={{
                rotate: [0, -2, 2, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Hair */}
              <div className="absolute -top-2 left-2 w-16 h-8 bg-gradient-to-r from-amber-800 to-amber-900 rounded-t-full" />

              {/* Eyes */}
              <motion.div
                className="absolute top-6 left-6 w-2 h-2 bg-gray-800 rounded-full"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              />
              <motion.div
                className="absolute top-6 right-6 w-2 h-2 bg-gray-800 rounded-full"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              />

              {/* Smile */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-700 rounded-b-full" />

              {/* Glasses */}
              <div className="absolute top-5 left-3 w-14 h-6 border-2 border-gray-700 rounded-lg bg-blue-100/30">
                <div className="absolute left-1 top-1 w-4 h-3 bg-blue-50/50 rounded" />
                <div className="absolute right-1 top-1 w-4 h-3 bg-blue-50/50 rounded" />
              </div>
            </motion.div>

            {/* Body */}
            <motion.div
              className="w-24 h-32 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-2xl relative"
              animate={{
                y: [0, -2, 0],
                rotateZ: [0, 1, -1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Shirt Details */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400 rounded" />
              <div className="absolute top-4 left-2 w-2 h-2 bg-blue-400 rounded-full" />
              <div className="absolute top-4 right-2 w-2 h-2 bg-blue-400 rounded-full" />

              {/* Arms */}
              <motion.div
                className="absolute -left-4 top-4 w-8 h-16 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"
                animate={{
                  rotate: [0, -10, 10, 0],
                  x: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -right-4 top-4 w-8 h-16 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"
                animate={{
                  rotate: [0, 10, -10, 0],
                  x: [0, -1, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>

            {/* Laptop */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-800 rounded-lg"
              animate={{
                rotateX: [0, -5, 5, 0],
                y: [0, 1, -1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Screen */}
              <div className="w-full h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg relative overflow-hidden">
                <motion.div
                  className="absolute top-1 left-1 w-2 h-1 bg-green-400 rounded-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute top-1 left-4 w-3 h-1 bg-yellow-400 rounded-sm"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                />
                <motion.div
                  className="absolute top-3 left-1 w-4 h-0.5 bg-white/60 rounded-sm"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </div>
              {/* Keyboard */}
              <div className="w-full h-4 bg-gray-700 rounded-b-lg flex items-center justify-center">
                <div className="grid grid-cols-4 gap-0.5">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-gray-600 rounded-sm"
                      animate={{
                        backgroundColor: ["#4b5563", "#6b7280", "#4b5563"],
                        scale: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        whileHover={{ scale: 1.2 }}
      >
        <Code2 className="text-primary-foreground" size={24} />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        whileHover={{ scale: 1.2 }}
      >
        <Heart className="text-primary" size={16} />
      </motion.div>

      <motion.div
        className="absolute top-8 -left-6 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
        }}
        whileHover={{ scale: 1.3 }}
      >
        <Star className="text-white" size={14} />
      </motion.div>

      <motion.div
        className="absolute bottom-12 -right-6 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          x: [0, 5, -5, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.3 }}
      >
        <Zap className="text-white" size={14} />
      </motion.div>

      <motion.div
        className="absolute top-16 -right-8 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, -8, 8, 0],
          rotate: [0, -180, 180, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.4 }}
      >
        <Coffee className="text-white" size={12} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 -left-8 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
        whileHover={{ scale: 1.4 }}
      >
        <Rocket className="text-white" size={12} />
      </motion.div>

      {/* Typing Animation */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs font-mono"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [10, 0, 0, 10],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2,
        }}
      >
        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}>
          console.log("Hello World!");
        </motion.span>
      </motion.div>

      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
