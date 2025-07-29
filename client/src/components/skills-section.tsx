import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { 
  Wrench, 
  Route, 
  Users, 
  Figma, 
  Palette, 
  Box, 
  Play, 
  Heart, 
  MapPin, 
  GitBranch, 
  TestTube, 
  TrendingUp,
  Lightbulb,
  MessageCircle,
  Eye,
  Rocket
} from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "Design Tools",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Figma", icon: Figma, color: "purple-600" },
      { name: "Adobe XD", icon: Box, color: "blue-600" },
      { name: "Illustrator", icon: Palette, color: "red-600" },
      { name: "Spline", icon: Box, color: "green-600" },
      { name: "Sketch", icon: Box, color: "yellow-600" },
      { name: "Principle", icon: Play, color: "red-500" }
    ]
  },
  {
    id: 2,
    title: "UX Methods",
    icon: Route,
    color: "secondary",
    skills: [
      { name: "Journey Mapping", icon: MapPin, color: "primary" },
      { name: "Empathy Mapping", icon: Heart, color: "red-500" },
      { name: "Information Architecture", icon: GitBranch, color: "blue-600" },
      { name: "User Flow Design", icon: Route, color: "purple-600" },
      { name: "Prototyping", icon: TestTube, color: "green-600" },
      { name: "Analytics", icon: TrendingUp, color: "orange-600" }
    ]
  },
  {
    id: 3,
    title: "Soft Skills",
    icon: Users,
    color: "accent",
    skills: [
      { name: "Empathy", icon: Heart, color: "red-500" },
      { name: "Collaboration", icon: Users, color: "blue-600" },
      { name: "Problem Solving", icon: Lightbulb, color: "yellow-500" },
      { name: "Communication", icon: MessageCircle, color: "green-600" },
      { name: "Attention to Detail", icon: Eye, color: "purple-600" },
      { name: "Innovation", icon: Rocket, color: "orange-600" }
    ]
  }
];

export default function SkillsSection() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary/10 text-primary";
      case "secondary": return "bg-secondary/10 text-secondary";
      case "accent": return "bg-accent/10 text-accent";
      default: return "bg-primary/10 text-primary";
    }
  };

  const getIconColorClass = (color: string) => {
    return `text-${color}`;
  };

  return (
    <section id="skills" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of design tools, methodologies, and soft skills that I use to create exceptional user experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div 
                key={category.id}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${getColorClasses(category.color)} rounded-xl flex items-center justify-center mr-4`}>
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-dark">{category.title}</h3>
                </div>
                <div className={category.id === 1 ? "grid grid-cols-2 gap-4" : "space-y-4"}>
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <SkillIcon className={`w-6 h-6 ${getIconColorClass(skill.color)} mr-3 flex-shrink-0`} />
                        <span className="font-medium text-dark">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
