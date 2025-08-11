import {
  Search,
  Smartphone,
  Compass,
  Users,
  Layers,
  Palette,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    id: 1,
    icon: Search,
    title: "UX Research",
    description:
      "In-depth user research including interviews, surveys, and usability testing to understand your users' needs and behaviors.",
    features: [
      "User Interviews & Surveys",
      "Usability Testing",
      "Competitive Analysis",
    ],
    color: "primary",
  },
  {
    id: 2,
    icon: Smartphone,
    title: "UI Design (Web & Mobile)",
    description:
      "Beautiful, functional interfaces that provide seamless user experiences across all devices and platforms.",
    features: [
      "Responsive Web Design",
      "Mobile App Design",
      "Visual Design Systems",
    ],
    color: "secondary",
  },
  {
    id: 3,
    icon: Compass,
    title: "Wireframing & Prototyping",
    description:
      "From low-fidelity wireframes to high-fidelity interactive prototypes that bring your ideas to life.",
    features: [
      "Low & High-Fi Wireframes",
      "Interactive Prototypes",
      "Micro-interactions",
    ],
    color: "secondary",
  },
  {
    id: 4,
    icon: Users,
    title: "Usability Testing",
    description:
      "Comprehensive testing methodologies to validate design decisions and optimize user experiences.",
    features: ["Moderated Testing", "A/B Testing Setup", "Analytics Review"],
    color: "primary",
  },
  {
    id: 5,
    icon: Layers,
    title: "Design Systems",
    description:
      "Scalable design systems that ensure consistency and efficiency across your entire product ecosystem.",
    features: ["Component Libraries", "Style Guidelines", "Documentation"],
    color: "secondary",
  },
  {
    id: 6,
    icon: Palette,
    title: "Branding Basics",
    description:
      "Essential branding elements including logo design, color palettes, and typography that reflect your brand identity.",
    features: [
      "Logo & Identity Design",
      "Color Palette Creation",
      "Typography Selection",
    ],
    color: "secondary",
  },
];

export default function ServicesSection() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      case "accent":
        return "bg-accent/10 text-accent";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">What I Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer comprehensive UX/UI design services to help you create
            exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
