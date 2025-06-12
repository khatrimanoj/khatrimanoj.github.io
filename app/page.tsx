"use client"
import { AnimatedBackground } from "@/components/animated-icons"
import {
  Code2,
  Palette,
  Smartphone,
  Users,
  Zap,
  Target,
  Rocket,
  Star,
  Coffee,
  Monitor,
  Layers,
  Globe,
  Briefcase,
  DollarSign,
  Wifi,
  GraduationCap,
  Building2,
} from "lucide-react"
import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection/>
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
