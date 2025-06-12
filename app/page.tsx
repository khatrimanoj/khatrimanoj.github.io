"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { FloatingIcons, AnimatedBackground } from "@/components/animated-icons"
import { AnimatedAvatar } from "@/components/animated-avatar"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code2,
  Palette,
  Smartphone,
  ChevronDown,
  Download,
  Phone,
  Calendar,
  Award,
  Users,
  TrendingUp,
  Zap,
  Target,
  Rocket,
  Star,
  Heart,
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

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

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

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div className="text-2xl font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code2 className="text-primary" size={28} />
              </motion.div>
              Manoj Khatri
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <motion.button onClick={toggleMenu} whileTap={{ scale: 0.95 }}>
                {isMenuOpen ? <X /> : <Menu />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloatingIcons />

        <motion.div
          className="text-center z-10 px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Rocket className="text-primary" size={48} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I'm{" "}
            <motion.span className="text-primary relative" whileHover={{ scale: 1.05 }}>
              Manoj Khatri
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lead Frontend Developer with{" "}
            <motion.span
              className="text-primary font-semibold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              8+ years
            </motion.span>{" "}
            of experience in UI/UX design and modern frontend development
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 group" 
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                <Target className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/ManojKhatri-cv.pdf';
                  link.download = 'Manoj_Khatri_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="text-muted-foreground" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div className="inline-flex items-center gap-2 mb-6" whileHover={{ scale: 1.05 }}>
              <Users className="text-primary" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            </motion.div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </motion.div>

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
                frontend development. I specialize in React.js, JavaScript (ES6+), SCSS, Bootstrap, TailwindCSS,
                Shopify, Webflow, PHP, VueJs, and WordPress.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently working as a freelance developer, I have a proven track record in enhancing SEO rankings, user
                experience, and website performance. I'm passionate about mentoring and training junior developers,
                having led teams of 15+ UI developers.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div className="text-center p-4 border rounded-lg group" whileHover={{ scale: 1.05 }}>
                  <motion.div
                    className="text-3xl font-bold text-primary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <TrendingUp size={24} />
                    100+
                  </motion.div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </motion.div>
                <motion.div className="text-center p-4 border rounded-lg group" whileHover={{ scale: 1.05 }}>
                  <motion.div
                    className="text-3xl font-bold text-primary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Calendar size={24} />
                    8+
                  </motion.div>
                  <div className="text-muted-foreground">Years Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div className="inline-flex items-center gap-2 mb-6" whileHover={{ scale: 1.05 }}>
              <Award className="text-primary" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
            </motion.div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="group relative">
                  {job.current && (
                    <motion.div
                      className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      Current
                    </motion.div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <job.icon className="text-primary" size={20} />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="text-primary">{job.company}</p>
                        </div>
                      </div>
                      <div className="text-muted-foreground text-sm flex items-center gap-1">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                    </div>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      {job.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: pointIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          • {point}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div className="inline-flex items-center gap-2 mb-6" whileHover={{ scale: 1.05 }}>
              <Target className="text-primary" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
            </motion.div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Card className={`overflow-hidden group h-full ${project.featured ? "border-primary/50" : ""}`}>
                  {project.featured && (
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
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                        project.featured ? "h-64" : "h-48"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} />
                            </a>
                          </Button>
                        </motion.div>
                        {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button size="sm" variant="secondary">
                            <Github size={16} />
                          </Button>
                        </motion.div> */}
                      </div>
                    </div>
                    <motion.div
                      className="absolute top-4 left-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <project.icon className="text-primary-foreground" size={16} />
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div key={techIndex} whileHover={{ scale: 1.05 }}>
                          <Badge variant="secondary">{tech}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div className="inline-flex items-center gap-2 mb-6" whileHover={{ scale: 1.05 }}>
              <Zap className="text-primary" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
            </motion.div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </motion.div>

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
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                              <skill.icon className="text-primary" size={16} />
                            </motion.div>
                            {skill.name}
                          </span>
                          <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="bg-primary h-2 rounded-full relative"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
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
                    {[
                      {
                        icon: Code2,
                        title: "Frontend Development",
                        description: "Building scalable web applications with modern technologies",
                      },
                      {
                        icon: Palette,
                        title: "UI/UX Design",
                        description: "Creating beautiful and intuitive user experiences",
                      },
                      {
                        icon: Smartphone,
                        title: "Responsive Design",
                        description: "Mobile-first approach and cross-platform compatibility",
                      },
                    ].map((service, index) => (
                      <motion.div key={index} className="flex items-start gap-4 group" whileHover={{ x: 5 }}>
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <service.icon className="text-primary" size={24} />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold mb-2">{service.title}</h4>
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Awards Section */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Award className="text-primary" />
                    Awards & Recognition
                  </h3>
                  <div className="space-y-4">
                    {[
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
                    ].map((award, index) => (
                      <motion.div key={index} className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
                        <motion.div
                          className={`w-10 h-10 ${award.color} rounded-full flex items-center justify-center`}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-white text-sm">{award.icon}</span>
                        </motion.div>
                        <div>
                          <p className="font-medium">{award.title}</p>
                          <p className="text-muted-foreground text-sm">{award.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div className="inline-flex items-center gap-2 mb-6" whileHover={{ scale: 1.05 }}>
              <Mail className="text-primary" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            </motion.div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Mail,
                title: "Email",
                value: "manojkhatri.designs@gmail.com",
                color: "bg-red-500",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91 8490882238",
                color: "bg-green-500",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                value: "Connect with me",
                color: "bg-blue-500",
              },
            ].map((contact, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="text-center h-full group">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <contact.icon className="text-white" size={20} />
                    </motion.div>
                    <h3 className="font-semibold mb-2">{contact.title}</h3>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mr-2"
                >
                  <Mail size={20} />
                </motion.div>
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="text-muted-foreground flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            © {new Date().getFullYear()} Manoj Khatri. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="text-red-500" size={16} />
            </motion.span>{" "}
            All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
