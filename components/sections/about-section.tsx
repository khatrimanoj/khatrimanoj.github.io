"use client"

import { motion } from "framer-motion"
import { AnimatedAvatar } from "@/components/animated-avatar"
import { SectionHeader } from "@/components/ui/section-header"
import { StatCard } from "@/components/ui/stat-card"
import { Users, TrendingUp, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Users} title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedAvatar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a results-driven Lead Frontend Developer with 8+ years of experience in UI/UX design and modern
              frontend development. I specialize in React.js, JavaScript (ES6+), SCSS, Bootstrap, TailwindCSS, Shopify,
              Webflow, PHP, VueJs, and WordPress.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently working as a freelance developer, I have a proven track record in enhancing SEO rankings, user
              experience, and website performance. I'm passionate about mentoring and training junior developers, having
              led teams of 15+ UI developers.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <StatCard icon={TrendingUp} value="100+" label="Projects Completed" />
              <StatCard icon={Calendar} value="8+" label="Years Experience" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
