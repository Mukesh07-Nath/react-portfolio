import { Briefcase, Code, User, Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer & AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I am a passionate fresher full-stack web developer focused on building responsive and user-friendly web applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I am also exploring AI to create smarter digital experiences while continuously improving my skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              
              {/* Contact Button */}
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Download CV */}
              <a
                href="/resume.pdf"
                download="Mukesh_Patnaik_FullStack_Developer.pdf"
                className="flex items-center justify-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6">

            {/* Full-Stack */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications with modern frontend and backend technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and interactive UI with smooth user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Developing secure APIs and efficient server-side systems.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
