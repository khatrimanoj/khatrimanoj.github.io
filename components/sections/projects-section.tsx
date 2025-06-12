"use client"
import { SectionHeader } from "@/components/ui/section-header"
import { ProjectCard } from "@/components/ui/project-card"
import { Target, DollarSign, Wifi, Palette, Globe, GraduationCap, Building2 } from "lucide-react"

  const projects = [
    {
      title: "Fanbasis - Digital Business OS",
      description:
        "A comprehensive SaaS platform serving as 'The Operating System for Modern Digital Businesses'. Features advanced analytics, revenue tracking, member management, and enterprise-grade scaling capabilities.",
      image:
        "https://sjc.microlink.io/fsM5H0LhFFCtYxTtDBrVOSemoChAyJ_hWtYdoTPn_iW3oiADuQIP8XF2vtPrWMIMwpE2FbL_K8TGCM6IzWWR5g.jpeg",
      tech: ["HTML", "CSS", "SCSS", "Javascript", "Jquery", "Bootstrap", "GSAP", "Stripe API", "Figma"],
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
      tech: ["Wordpress", "Elementor", "Templates", "Responsive", "Optimised", "Animations", "Figma"],
      github: "#",
      live: "https://powerrouter.io/",
      icon: Wifi,
    },
    {
      title: "Worldlines - Creative Portfolio",
      description:
        "A stunning creative portfolio website built with Webflow, featuring smooth animations, responsive design, and modern UI/UX principles for showcasing creative work.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      tech: ["Webflow", "CSS3", "JavaScript", "GSAP", "Responsive Design", "Figma"],
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
      tech: ["HTML", "SCSS", "Javascript", "Jquery", "Responsive Design", "Cross-Browser Compatibility", "Figma"],
      github: "#",
      live: "https://qa-ontarioschools.milk.org/",
      icon: GraduationCap,
    },
    {
      title: "Candid Inc - Corporate Website",
      description:
        "Professional corporate website with modern design, optimized performance, and comprehensive business solutions showcase. Features responsive design and SEO optimization.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript", "SCSS", "Bootstrap", "Vue.js", "Figma"],
      github: "#",
      live: "https://candid.inc/",
      icon: Building2,
    },
  ]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={Target}
          title="My Projects"
          description="Here are some of my recent projects that showcase my skills and passion for development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
