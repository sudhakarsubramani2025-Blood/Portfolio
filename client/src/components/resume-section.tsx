import { Button } from "@/components/ui/button";
import { Download, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const experiences = [
  {
    title: "UIUX Designer Intern",
    company: "NovaNectar Service Pvt Ltd",
    period: "Jun 2024 - Sep 2024",
    description:
      "During internship, I had opportunity to connect with different peoples to gain more insights about UI/UX design. And also  have learned much about design tools and Design priciples to give better user experience.",
    color: "primary",
  },
];

const skills = [
  { name: "Figma", percentage: 100, color: "primary" },
  { name: "Wix Studio ", percentage: 90, color: "secondary" },
  { name: "Framer", percentage: 90, color: "secondary" },
  { name: "Miro", percentage: 100, color: "primary" },
];

export default function ResumeSection() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary text-primary bg-primary";
      case "secondary":
        return "border-secondary text-secondary bg-secondary";
      case "accent":
        return "border-accent text-accent bg-accent";
      default:
        return "border-primary text-primary bg-primary";
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
              <h3 className="text-2xl font-semibold text-dark mb-6">
                Professional Summary
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                HI! I'm Sudhakar, a skilled UI/UX Designer focused on crafting
                intuitive, visually appealing, and user-centric digital
                experiences. I blend creativity and research-driven insights to
                design seamless interfaces that prioritize user needs while
                aligning with business goals. Passionate about solving design
                challenges, I aim to create impactful solutions that elevate the
                user journey.
              </p>

              <h4 className="text-xl font-semibold text-dark mb-4">
                Key Experiences
              </h4>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-l-4 ${getColorClasses(exp.color).split(" ")[0]} pl-6`}
                  >
                    <h5 className="font-semibold text-dark">{exp.title}</h5>
                    <p
                      className={`font-medium ${getColorClasses(exp.color).split(" ")[1]}`}
                    >
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-dark mb-4 mt-8">
                Certifications
              </h4>
              {/* <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-dark">
                    UIUX Designer Internship
                  </h5>
                  <p className="text-gray-600">
                   NovaNectar Service Pvt Ltd • Jun 2024 - Sep 2024
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-dark">
                    Digital Skills: User Experience  
                  </h5>
                  <p className="text-gray-600">Accenture • Mar 2025 - Apr 2025</p>
                </div>
                <div>
                  <h5 className="font-semibold text-dark">
                    Design System
                  </h5>
                  <p className="text-gray-600">LearnTube.ai • May 2025 - Jun 2025</p>
                </div>
              </div> */}
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-dark flex items-center gap-2">
                    UIUX Designer Internship
                    <a
                      href="/Internship_Certificate_page-0001.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <LinkIcon size={16} />
                    </a>
                  </h5>
                  <p className="text-gray-600">
                    NovaNectar Service Pvt Ltd • Jun 2024 - Sep 2024
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-dark flex items-center gap-2">
                    Digital Skills: User Experience
                    <a
                      href="/digital-skills-user-experience_certificate_of_achievement_lw48rf3_page-0002.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <LinkIcon size={16} />
                    </a>
                  </h5>
                  <p className="text-gray-600">
                    Accenture • Mar 2025 - Apr 2025
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-dark flex items-center gap-2">
                    Design System
                    <a
                      href="/Certificate.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <LinkIcon size={16} />
                    </a>
                  </h5>
                  <p className="text-gray-600">
                    LearnTube.ai • May 2025 - Jun 2025
                  </p>
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
                  src="/6785.1.jpg"
                  alt="Sudhakar - Professional UX Designer photo"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Sudhakar</h4>
                  <p className="text-sm opacity-90">UI UX Designer</p>
                </div>
              </div>

              <div className="text-center">
                <a href="/RR.pdf" download>
                  <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-4 font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
                <p className="text-sm text-gray-500 mt-2">PDF • 1.2 MB</p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-dark mb-4">
                  Tools Proficiency
                </h4>
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
                        <span className="text-sm font-medium text-dark">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${getColorClasses(skill.color).split(" ")[2]}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.3,
                            duration: 0.8,
                          }}
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
