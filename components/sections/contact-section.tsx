"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactCard } from "@/components/ui/contact-card"
import { Mail, Phone, Linkedin } from "lucide-react"

const contactInfo = [
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
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          icon={Mail}
          title="Get In Touch"
          description="I'm always open to discussing new opportunities and interesting projects"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
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
  )
}
