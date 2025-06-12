"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { SkillBar } from "@/components/ui/skill-bar"
import { ServiceCard } from "@/components/ui/service-card"
import { AwardCard } from "@/components/ui/award-card"
import {
  Zap,
  Code2,
  Rocket,
  Globe,
  Palette,
  Target,
  Monitor,
  Smartphone,
  Users,
  Coffee,
  Star,
  Layers,
  Award,
} from "lucide-react"

  const skills = [
    { name: "JavaScript (ES6+)", level: 75, icon: Code2 },
    { name: "React.js", level: 55, icon: Rocket },
    { name: "HTML5/CSS3", level: 95, icon: Globe },
    { name: "SCSS/Sass", level: 90, icon: Palette },
    { name: "WordPress", level: 75, icon: Layers },
    { name: "Shopify", level: 45, icon: Target },
    { name: "Webflow", level: 65, icon: Monitor },
    { name: "TailwindCSS", level: 65, icon: Smartphone },
    { name: "Bootstrap", level: 90, icon: Users },
    { name: "jQuery", level: 80, icon: Coffee },
    { name: "PHP", level: 45, icon: Star },
  ]

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building scalable web applications with React.js, Vue.js, and modern JavaScript frameworks. Expertise in creating performant, maintainable code with best practices.",
    skills: ["React.js", "Vue.js", "TypeScript", "Next.js"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive user experiences with modern design principles. From wireframes to high-fidelity prototypes using industry-standard tools.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first approach ensuring seamless experiences across all devices. Expert in CSS Grid, Flexbox, and modern responsive techniques.",
    skills: ["Mobile-First", "CSS Grid", "Flexbox", "Cross-Browser"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed and efficiency. Implementing lazy loading, code splitting, and advanced caching strategies.",
    skills: ["Web Vitals", "Lazy Loading", "Code Splitting", "SEO"],
  },
  {
    icon: Layers,
    title: "CMS Development",
    description:
      "Custom WordPress themes and Shopify stores with advanced functionality. Building scalable content management solutions.",
    skills: ["WordPress", "Shopify", "Custom Themes", "E-commerce"],
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Leading development teams and mentoring junior developers. Establishing coding standards, workflows, and best practices.",
    skills: ["Team Management", "Code Review", "Mentoring", "Agile/Scrum"],
  },
]

const awards = [
  {
    icon: "🏆",
    title: "Employee of the Quarter",
    description: "April 2024, September 2023",
    color: "bg-yellow-500",
  },
  {
    icon: "👥",
    title: "Team of the Quarter",
    description: "December 2023",
    color: "bg-blue-500",
  },
  {
    icon: "⭐",
    title: "Leadership Excellence",
    description: "Bacancy Technology",
    color: "bg-green-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Zap} title="Skills & Expertise" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Code2 className="text-primary" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Rocket className="text-primary" />
                  What I Do
                </h3>

                <div className="space-y-6">
                  {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="text-primary" />
                  Awards & Recognition
                </h3>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <AwardCard key={index} award={award} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
