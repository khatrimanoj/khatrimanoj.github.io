"use client"
import { SectionHeader } from "@/components/ui/section-header"
import { ExperienceCard } from "@/components/ui/experience-card"
import { Award, Briefcase, Rocket, Palette, Code2 } from "lucide-react"

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
      "Team Leadership & Mentoring: Led a group of 15+ UI developers, providing guidance and skill enhancement",
      "Web Application Development: Created and managed responsive, high-performing web apps",
      "Agile and Scrum Practices: Led daily Scrum meetings to make sure they were in line with the project's goals",
      "Performance Optimization: By using best practices and optimized code, the website's performance was increased by 40%",
      "Version Control & Collaboration: Strong Git workflows were established, improving code quality and teamwork.",
      "Code Reviews & Technical Documentation: Performed code reviews and supplied technical documentation for frontend best practices"
    ],
    icon: Rocket,
    current: false,
  },
  {
    title: "Lead UI/UX / Frontend Developer",
    company: "Netizens Technology",
    period: "June 2020 - June 2021",
    points: [
      "UI/UX Design: Created user interfaces that were engaging and intuitive, resulting in a seamless user experience",
      "Frontend Development: Developed cutting-edge, responsive web apps with JavaScript, CSS, HTML, and SCSS",
      "SCSS Component Optimization: Modular SCSS components were constructed and improved to increase scalability and maintainability",
      "Cross-Browser Compatibility: Fixed compatibility problems by conducting device and cross-browser testing",
      "Implementation of Build Tools: To expedite development, Webpack and Babel, two contemporary JavaScript build tools, were implemented",
      "Using Figma and Adobe XD: high-fidelity wireframes and prototypes were made in order to verify design concepts",
      "Cooperation & Stakeholder Engagement: To convert requirements into useful applications, I worked closely with designers, backend engineers, and stakeholders",
    ],
    icon: Palette,
    current: false,
  },
  {
    title: "Senior Frontend Developer",
    company: "Mindbox LLP (Krisnela Technology)",
    period: "Dec 2017 - June 2020",
    points: [
      "React.js Development: Created scalable applications using React.js that feature reusable user interface elementsCreated scalable React.js applications with reusable UI components",
      "UI Library Development: Storybook and React.js were used to create a unique UI library that ensures design coherence and reusability.",
      "API Integration: RESTful APIs were integrated to provide seamless UI/UX interactions",
      "SEO Optimization: The goal of SEO optimization is to increase website visibility through development that is optimized for search engines",
      "Server-Side Rendering: Working together with backend developers, we optimized server-side rendering",
      "Performance Improvement: Refactored existing codebases to improve user experience and decrease load times",
      "Component-Based Design: To improve scalability, modular and reusable user interface components were created",
    ],
    icon: Code2,
    current: false,
  },
  {
    title: "Junior Frontend Developer",
    company: "Sassy Infotech Pvt Ltd",
    period: "Sept 2017 - Dec 2020",
    points: [
      "PSD to HTML Conversion: PSD designs were transformed into responsive HTML, CSS, and JavaScript user interfaces.",
      "E-commerce Development: Customize and integrated Shopify and WordPress themes for online retailers",
      "Cross-Platform Compatibility: Enhanced user engagement through cross-platform compatibility",
      "Optimized SEO and server-side rendering for better performance",
    ],
    icon: Code2,
    current: false,
  },
  {
    title: "Website Designer",
    company: "Tripta Innovations Pvt Ltd",
    period: "July 2016 - Sept 2017",
    points: [
      "Designed intuitive and visually appealing UIs with HTML, CSS, JavaScript, and Bootstrap.",
      "Ensured seamless user experiences through optimized performance and cross-browser compatibility. ",
      "Optimized SEO and server-side rendering for better performance",
    ],
    icon: Code2,
    current: false,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Award} title="Professional Experience" />

        <div className="space-y-8">
          {experiences.map((job, index) => (
            <ExperienceCard key={index} experience={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
