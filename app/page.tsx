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

const projects = [
  {
    title: "Fanbasis - Digital Business OS",
    description:
      "A comprehensive SaaS platform serving as 'The Operating System for Modern Digital Businesses'. Features advanced analytics, revenue tracking, member management, and enterprise-grade scaling capabilities.",
    image:
      "https://sjc.microlink.io/fsM5H0LhFFCtYxTtDBrVOSemoChAyJ_hWtYdoTPn_iW3oiADuQIP8XF2vtPrWMIMwpE2FbL_K8TGCM6IzWWR5g.jpeg",
    tech: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe API", "WebSocket"],
    github: "#",
    live: "https://www.fanbasis.com/",
    icon: DollarSign,
    featured: true,
  },
  {
    title: "PowerRouter.io - Network Management",
    description:
      "Advanced router and network management platform providing real-time monitoring, configuration management, and performance optimization for enterprise networking solutions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    tech: ["Vue.js", "JavaScript", "WebRTC", "Socket.io", "Express.js", "MongoDB"],
    github: "#",
    live: "https://powerrouter.io/",
    icon: Wifi,
  },
  {
    title: "Worldlines - Creative Portfolio",
    description:
      "A stunning creative portfolio website built with Webflow, featuring smooth animations, responsive design, and modern UI/UX principles for showcasing creative work.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    tech: ["Webflow", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
    github: "#",
    live: "https://worldlines.webflow.io/",
    icon: Palette,
  },
  {
    title: "NewtWeb - Modern Web Solutions",
    description:
      "Contemporary web platform showcasing modern design principles and cutting-edge web technologies. Built with Webflow for optimal performance and user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tech: ["Webflow", "CSS3", "JavaScript", "Figma", "Adobe XD"],
    github: "#",
    live: "https://newtweb-01.webflow.io/",
    icon: Globe,
  },
  {
    title: "Ontario Schools Platform",
    description:
      "Educational platform for Ontario schools featuring interactive learning modules, student progress tracking, and comprehensive educational resources with seamless user experience.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
    tech: ["React.js", "PHP", "MySQL", "WordPress", "SCSS", "jQuery"],
    github: "#",
    live: "https://qa-ontarioschools.milk.org/",
    icon: GraduationCap,
  },
  {
    title: "Candid Inc - Corporate Website",
    description:
      "Professional corporate website with modern design, optimized performance, and comprehensive business solutions showcase. Features responsive design and SEO optimization.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
    tech: ["HTML5", "CSS3", "JavaScript", "SCSS", "Bootstrap", "PHP"],
    github: "#",
    live: "https://candid.inc/",
    icon: Building2,
  },
]

const skills = [
  { name: "JavaScript (ES6+)", level: 95, icon: Code2 },
  { name: "React.js", level: 90, icon: Rocket },
  { name: "HTML5/CSS3", level: 95, icon: Globe },
  { name: "SCSS/Sass", level: 90, icon: Palette },
  { name: "Vue.js", level: 85, icon: Zap },
  { name: "WordPress", level: 85, icon: Layers },
  { name: "Shopify", level: 80, icon: Target },
  { name: "Webflow", level: 85, icon: Monitor },
  { name: "TailwindCSS", level: 90, icon: Smartphone },
  { name: "Bootstrap", level: 90, icon: Users },
  { name: "jQuery", level: 85, icon: Coffee },
  { name: "PHP", level: 75, icon: Star },
]

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "Nov 2024 - Present",
    points: [
      "Providing custom frontend development solutions for various clients",
      "Building responsive web applications using React.js, Vue.js, and modern CSS frameworks",
      "Collaborating with designers and backend developers on full-stack projects",
      "Optimizing website performance and implementing SEO best practices",
      "Managing multiple client projects with efficient time management and delivery",
    ],
    icon: Briefcase,
    current: true,
  },
  {
    title: "Lead Frontend Developer",
    company: "Bacancy Technology Pvt Ltd",
    period: "June 2021 – Nov 2024",
    points: [
      "Led a team of 15+ UI developers, providing guidance and skill enhancement",
      "Improved website performance by 40% using best practices and optimized code",
      "Established strong Git workflows, improving code quality and teamwork",
      "Led daily Scrum meetings aligned with project goals",
    ],
    icon: Rocket,
    current: false,
  },
  {
    title: "Lead UI/UX / Frontend Developer",
    company: "Netizens Technology",
    period: "June 2020 - June 2021",
    points: [
      "Created engaging and intuitive user interfaces for seamless user experience",
      "Implemented modern JavaScript build tools (Webpack and Babel)",
      "Built modular SCSS components for increased scalability and maintainability",
      "Created high-fidelity wireframes and prototypes using Figma and Adobe XD",
    ],
    icon: Palette,
    current: false,
  },
  {
    title: "Senior Frontend Developer",
    company: "Mindbox LLP (Krisnela Technology)",
    period: "Dec 2017 - June 2020",
    points: [
      "Created scalable React.js applications with reusable UI components",
      "Developed custom UI library using Storybook and React.js",
      "Integrated RESTful APIs for seamless UI/UX interactions",
      "Optimized SEO and server-side rendering for better performance",
    ],
    icon: Code2,
    current: false,
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
