import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Linkedin, Instagram, Dribbble } from "lucide-react";
import { FaBehance } from "react-icons/fa";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: FaBehance, href: "#", label: "Behance" }
];

const quickLinks = [
  { name: "Home", href: "home" },
  { name: "Projects", href: "projects" },
  { name: "Services", href: "services" },
  { name: "Skills", href: "skills" },
  { name: "Resume", href: "resume" },
  { name: "Contact", href: "contact" }
];

const services = [
  "UX Research",
  "UI Design",
  "Prototyping",
  "Usability Testing",
  "Design Systems"
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--dark)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
        >
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">Sudhakar</span>
              <span className="ml-2 text-primary">•</span>
            </div>
            <p className="text-gray-400 mb-6">
              UX Designer passionate about creating meaningful digital experiences that solve real user problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              {services.map((service) => (
                <span key={service} className="block text-gray-400">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sudhakar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
