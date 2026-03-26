import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span>Hi, I'm </span>
            <span className="text-primary">Mukesh </span>
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Patnaik
            </span>
          </h1>

          {/* Type Animation */}
          <TypeAnimation
            sequence={[
              "I am a Frontend Developer",
              1500,
              "I am a Full Stack Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block mt-4 text-xl md:text-2xl text-foreground/80"
          />

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I design and develop full-stack web applications that combine modern
            technologies with AI-driven solutions. From elegant front-end
            interfaces to powerful back-end systems, I create fast, scalable,
            and intelligent digital experiences.
          </p>

          {/* Button */}
          <div>
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};