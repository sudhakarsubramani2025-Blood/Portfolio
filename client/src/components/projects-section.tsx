import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Figma } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { prototype } from "events";

const projects = [
  {
    id: 1,
    title: "Instant Food Mobile App",
    role: "UIUX Designer & Researcher",
    category: "Mobile App",
    image: "/Instanz.png",
    problem:
      "Busy people find it hard to discover and cook instant meals easily. instAnZ makes it simple with a smart app made only for instant food.",
    process: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    tools: [
      { name: "Figma", color: "blue" },
      { name: "Canva", color: "purple" },
      { name: "Miro", color: "green" },
    ],
    outcome:
      "instAnZ grew engagement by 45%, repeat buys by 55%, and halved search time in 3 months.",
    categoryColor: "primary",
    prototypeUrl: "https://www.figma.com/proto/Y2kKWe0pVA0kLmT2r845Vk/Instanz?page-id=199%3A991&node-id=219-2831&p=f&viewport=277%2C314%2C0.3&t=9ph36RX5o4LPYrif-1&scaling=min-zoom&content-scaling=fixed",
    caseStudyUrl: "https://www.behance.net/gallery/230518469/INSTANT-FOOD-APPLICATION",
  },
  {
    id: 2,
    title: "Unave Marunthu Website",
    role: "UI/UX Designer",
    category: "Web App",
    image: "/um.png",
    problem:
      "Healthy traditional foods lack modern reach, while fast foods dominate. Unave Marunthu brings native South Indian foods online with trust and clarity.",
    process: ["User Research", "Design System", "UI Design", "Prototyping"],
    tools: [
      { name: "Figma", color: "blue" },
      { name: "Adobe Illustrator", color: "red" },
      { name: "Chatgpt", color: "yellow" },
    ],
    outcome:
      "Unave Marunthu grew visibility by 60%, trust by 50%, and access by 70% in 3 months.",
    categoryColor: "secondary",
    prototypeUrl: "https://www.figma.com/proto/7C7lKsX7JPc27Bxa9z2mrc/Unave-Marunthu?page-id=0%3A1&node-id=808-891&p=f&viewport=354%2C199%2C0.02&t=hQuTg9tHmytGp5qo-1&scaling=scale-down&content-scaling=fixed",
    caseStudyUrl: "https://www.behance.net/gallery/231331889/UNAVE-MARUNTHU",
  },
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
                className="w-full h-48"
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
                  <div className="flex flex-wrap item-center content-center  text-center gap-2">
                    {project.process.map((step) => (
                      <Badge
                        key={step}
                        variant="secondary"
                        className="text-xs text-white text-center flex item-center content-center"
                      >
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
                  <a
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                    >
                      <Figma className="w-4 h-4 mr-1" />
                      View Prototype
                    </Button>
                  </a>
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="p-0 h-auto text-secondary hover:text-secondary/80"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Case Study
                    </Button>
                  </a>
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
