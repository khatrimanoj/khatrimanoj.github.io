"use client"
import { SectionHeader } from "@/components/ui/section-header"
import { ProjectCard } from "@/components/ui/project-card"
import { Target, DollarSign, Wifi, Building, Globe, GraduationCap, Building2, PhoneCall, Container, AirVent, CupSoda, HeartPulse } from "lucide-react"

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
      image: "https://cdn.dribbble.com/userupload/25304523/file/original-3cd0d33aae89709535b8032c812ce330.png?resize=1504x1128&vertical=center",
      tech: ["Wordpress", "Elementor", "Templates", "Responsive", "Optimised", "Animations", "Figma"],
      github: "#",
      live: "https://powerrouter.io/",
      icon: Wifi,
    },
    {
      title: "Worldlines - Creative Portfolio",
      description:
        "A stunning creative portfolio website built with Webflow, featuring smooth animations, responsive design, and modern UI/UX principles for showcasing creative work.",
      image: "https://cdn.dribbble.com/userupload/42450974/file/original-cae657ad13dd5a0004cfc7c75e67f800.png?resize=1000x750&vertical=center",
      tech: ["Webflow", "CSS3", "JavaScript", "GSAP", "Responsive Design", "Figma"],
      github: "#",
      live: "https://worldlines.webflow.io/",
      icon: PhoneCall,
    },
    {
      title: "NewtWeb - Modern Web Solutions",
      description:
        "Contemporary web platform showcasing modern design principles and cutting-edge web technologies. Built with Webflow for optimal performance and user experience.",
      image: "https://cdn.dribbble.com/userupload/42409151/file/original-e2c3045ce5fcffded2321bce8d528b9e.png?resize=800x600&vertical=center",
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
    {
      title: "Frieght Works - Transport & Logistics",
      description:
        "Professional admin panel for transport and logistics company featuring advanced analytics, real-time tracking, and advanced scheduling solutions.",
      image: "https://cdn.dribbble.com/userupload/22315051/file/original-69635d8dee5d27e413223b49e6b0e3d6.png?resize=752x564&vertical=center",
      tech: ["HTML5", "CSS3", "JavaScript", "SCSS", "Bootstrap", "Sketch"],
      github: "#",
      live: "https://freight-works.netlify.app/dashboard.html",
      icon: Container,
    },
    {
      title: "Jay Air - Cooling ",
      description:
        "Professional cooling partnerThe diverse air conditioning product range serves both commercial and residential segments and includes a solution for every need.",
      image: "https://cdn.dribbble.com/userupload/41940570/file/original-8a5abc16e9b6323ab94fd6cb86006310.png?resize=800x600&vertical=center",
      tech: ["HTML5", "CSS3", "JavaScript", "Jquery", "SCSS", "Bootstrap", "Sketch"],
      github: "#",
      live: "https://jay-air.netlify.app/",
      icon: AirVent,
    },
    {
      title: "ERP Software - ERP Solution",
      description:
        "Complete ERP software solution for businesses with advanced features, scalability, and easy-to-use interface. Features advanced reporting, customization, and scalability.",
      image: "https://cdn.dribbble.com/userupload/23480946/file/original-f4313bfff2e2b7e31e3f67558ece206b.png?format=webp&resize=400x300&vertical=center",
      tech: ["HTML5", "CSS3", "JavaScript", "Jquery", "SCSS", "Bootstrap", "Sketch"],
      github: "#",
      live: "https://attendance-erp.netlify.app/dashboard.html",
      icon: Building,
    },
    {
      title: "Mogu Mogu - Nata de Coco juice drink",
      description:
        "Mogu Mogu gives a unique sensation of fruit juice with the smooth blending of Nata de Coco drink. Produced through the fermentation of pure coconut water.",
      image: "https://cdn.dribbble.com/userupload/24435234/file/original-04c6730d710da702fee1dc0794688f76.png?resize=752x564&vertical=center",
      tech: ["HTML5", "CSS3", "JavaScript", "Jquery", "SCSS", "Animation", "ScrollMagic", "Figma"],
      github: "#",
      live: "https://mogumogu.netlify.app/",
      icon: CupSoda,
    },
    {
      title: "Sampark Hamesha - Health Partner",
      description:
        "Sampark Hamesha is a health partner that provides personalized guidance, advice, and support to clients. They offer a variety of services, including nutrition, exercise, and wellness.",
      image: "https://cdn.dribbble.com/userupload/22763220/file/original-2780ab17cbf6ce274ab77501bec2ef75.png?resize=752x564&vertical=center",
      tech: ["HTML5", "CSS3", "JavaScript", "Jquery", "SCSS", "Charts", "Dashboards", "Figma"],
      github: "#",
      live: "https://sampark-hamesha.netlify.app/login.html",
      icon: HeartPulse,
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
