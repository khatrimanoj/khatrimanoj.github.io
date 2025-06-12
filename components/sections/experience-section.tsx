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
