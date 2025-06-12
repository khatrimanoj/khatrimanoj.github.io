"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, type LucideIcon } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
  icon: LucideIcon
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, image, tech, github, live, icon: Icon, featured } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={featured ? "md:col-span-2 lg:col-span-2" : ""}
    >
      <Card className={`overflow-hidden group h-full ${featured ? "border-primary/50" : ""}`}>
        {featured && (
          <motion.div
            className="absolute -top-2 -left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Featured Project
          </motion.div>
        )}
        <div className="relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              featured ? "h-64" : "h-48"
            }`}
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="sm" variant="secondary" asChild>
                  <a href={live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="sm" variant="secondary">
                  <Github size={16} />
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute top-4 left-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="text-primary-foreground" size={16} />
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem, techIndex) => (
              <motion.div key={techIndex} whileHover={{ scale: 1.05 }}>
                <Badge variant="secondary">{techItem}</Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
