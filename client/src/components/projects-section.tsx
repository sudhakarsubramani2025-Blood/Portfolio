import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Figma } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "Instant Food Mobile App",
    role: "UIUX Designer & Researcher",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    problem:
      "Users struggled with product discovery and checkout process in existing e-commerce apps.",
    process: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    tools: [
      { name: "Figma", color: "blue" },
      { name: "Notion", color: "purple" },
      { name: "Miro", color: "green" },
    ],
    outcome:
      "40% increase in conversion rate and 60% reduction in cart abandonment.",
    categoryColor: "primary",
  },
  {
    id: 2,
    title: "FinTrack Dashboard",
    role: "Lead UX/UI Designer",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    problem:
      "Complex financial data visualization overwhelming users and poor information hierarchy.",
    process: [
      "Analytics Review",
      "Information Architecture",
      "UI Design",
      "A/B Testing",
    ],
    tools: [
      { name: "Figma", color: "blue" },
      { name: "Adobe XD", color: "red" },
      { name: "Hotjar", color: "yellow" },
    ],
    outcome:
      "50% faster task completion and 35% increase in user satisfaction scores.",
    categoryColor: "secondary",
  },
  // {
  //   id: 3,
  //   title: "MediCare Patient App",
  //   role: "UX Researcher & Designer",
  //   category: "Healthcare",
  //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  //   problem: "Patients struggling to manage appointments and access medical records efficiently.",
  //   process: ["Ethnographic Study", "Journey Mapping", "Prototyping", "Clinical Testing"],
  //   tools: [
  //     { name: "Figma", color: "blue" },
  //     { name: "Notion", color: "purple" },
  //     { name: "Principle", color: "orange" }
  //   ],
  //   outcome: "70% reduction in appointment no-shows and 85% user satisfaction rate.",
  //   categoryColor: "accent"
  // }
];

export default function ProjectsSection() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      case "accent":
        return "bg-accent/10 text-accent";
      case "blue":
        return "bg-blue-100 text-blue-700";
      case "purple":
        return "bg-purple-100 text-purple-700";
      case "green":
        return "bg-green-100 text-green-700";
      case "red":
        return "bg-red-100 text-red-700";
      case "yellow":
        return "bg-yellow-100 text-yellow-700";
      case "orange":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my recent work where I've solved complex user problems
            through research-driven design solutions.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <img
                src={project.image}
                alt={`${project.title} mockup`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className={getColorClasses(project.categoryColor)}>
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.role}</p>
                <p className="text-gray-700 mb-4">
                  <strong>Problem:</strong> {project.problem}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-dark mb-2">
                    UX Process:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.process.map((step) => (
                      <Badge key={step} variant="secondary" className="text-xs">
                        {step}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-dark mb-2">
                    Tools Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool.name}
                        className={`text-xs ${getColorClasses(tool.color)}`}
                      >
                        {tool.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Outcome:</strong> {project.outcome}
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                  >
                    <Figma className="w-4 h-4 mr-1" />
                    View Prototype
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-secondary hover:text-secondary/80"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 font-medium">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
