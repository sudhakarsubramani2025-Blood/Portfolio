import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={fadeInLeft.initial}
            animate={fadeInLeft.animate}
            transition={fadeInLeft.transition}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-dark leading-tight">
              Hi, I'm <span className="text-primary">Sudhakar</span> <br />
              A UI/UX Designer Who Solves
              <br />
              <span className="gradient-bg bg-clip-text text-transparent">
                Real User Problems
              </span>
            </h1>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              I craft meaningful digital experiences through user-centered
              design. I transform complex problems
              into intuitive solutions that delight users and drive business
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-base font-medium"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-base font-medium"
              >
                Let's Connect
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={fadeInRight.initial}
            animate={fadeInRight.animate}
            transition={fadeInRight.transition}
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/6785.1.jpg"
                alt="Sudhakar - Professional UX Designer headshot"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
