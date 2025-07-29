import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const experiences = [
  {
    title: "Senior UX Designer",
    company: "TechFlow Solutions",
    period: "2022 - Present",
    description: "Led design for B2B SaaS platform used by 50k+ users. Improved user onboarding flow resulting in 35% increase in user activation.",
    color: "primary"
  },
  {
    title: "UX Designer",
    company: "Digital Innovations",
    period: "2021 - 2022",
    description: "Designed mobile-first experiences for e-commerce platform. Conducted user research and usability testing to validate design decisions.",
    color: "secondary"
  },
  {
    title: "Junior UX Designer",
    company: "StartupLab",
    period: "2020 - 2021",
    description: "Created wireframes and prototypes for various client projects. Collaborated closely with development teams to ensure design implementation.",
    color: "accent"
  }
];

const skills = [
  { name: "Figma", percentage: 95, color: "primary" },
  { name: "Adobe XD", percentage: 90, color: "secondary" },
  { name: "Prototyping", percentage: 85, color: "accent" },
  { name: "User Research", percentage: 88, color: "primary" }
];

export default function ResumeSection() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary": return "border-primary text-primary bg-primary";
      case "secondary": return "border-secondary text-secondary bg-secondary";
      case "accent": return "border-accent text-accent bg-accent";
      default: return "border-primary text-primary bg-primary";
    }
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Resume</h2>
          <p className="text-lg text-gray-600">
            Get to know my professional journey and download my complete resume.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2"
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={{ once: true }}
              transition={fadeInLeft.transition}
            >
              <h3 className="text-2xl font-semibold text-dark mb-6">Professional Summary</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Passionate UX Designer with 3+ years of experience creating user-centered digital experiences. 
                Proven track record of improving user satisfaction by 40% through research-driven design solutions. 
                Expertise in the complete design process from user research to high-fidelity prototypes. 
                Strong collaborator who works effectively with cross-functional teams to deliver impactful products.
              </p>

              <h4 className="text-xl font-semibold text-dark mb-4">Key Experiences</h4>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-l-4 ${getColorClasses(exp.color).split(' ')[0]} pl-6`}
                  >
                    <h5 className="font-semibold text-dark">{exp.title}</h5>
                    <p className={`font-medium ${getColorClasses(exp.color).split(' ')[1]}`}>
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-dark mb-4 mt-8">Education & Certifications</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-dark">Bachelor of Design (B.Des) in Interaction Design</h5>
                  <p className="text-gray-600">National Institute of Design • 2016-2020</p>
                </div>
                <div>
                  <h5 className="font-semibold text-dark">Google UX Design Certificate</h5>
                  <p className="text-gray-600">Coursera • 2020</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={{ once: true }}
              transition={fadeInRight.transition}
            >
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
                  alt="Sudhakar - Professional UX Designer photo"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Sudhakar</h4>
                  <p className="text-sm opacity-90">UX Designer</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-4 font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <p className="text-sm text-gray-500 mt-2">PDF • 1.2 MB</p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-dark mb-4">Tools Proficiency</h4>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-dark">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className={`h-2 rounded-full ${getColorClasses(skill.color).split(' ')[2]}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
