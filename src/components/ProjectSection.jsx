import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Car Rental App",
    description:
      "A full-stack car rental web application built with the MERN stack, featuring vehicle listings, booking functionality, and a responsive user interface.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    demoURL: "https://car-rental-gs.vercel.app/",
    githubURL:"https://github.com/Mukesh07-Nath/CarRental",
  },
  {
    id: 2,
    title: "E-Commerce Fashion App",
    description:
      "A full-stack e-commerce platform with product management, cart system, and secure payments using Stripe and Razorpay.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    demoURL: "https://ecommerce-frontend-seven-pearl.vercel.app/",
    githubURL: "https://github.com/Mukesh07-Nath/ECOMMERCE-APP",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A responsive music streaming web app inspired by Spotify, featuring playlist UI, audio controls, and dynamic user interface.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoURL: "https://spotify-frontend1.vercel.app/",
    githubURL: "https://github.com/Mukesh07-Nath/spotify-full-stack",
  },
  {
    id: 4,
    title: "NikeX – Modern E-commerce UI",
    description:
      "A modern Nike-inspired e-commerce web application built using React. This project replicates real-world shopping features such as product browsing, filtering, cart management, and user authentication.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoURL: "https://nike-frontend-eight-xi.vercel.app/",
    githubURL: "https://github.com/Mukesh07-Nath/Nike-Website",
  }
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                    <a
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    {project.githubURL && (
                      <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Mukesh07-Nath">
                Check My Github <ArrowRight size={16}/>
            </a>

        </div>
      </div>
    </section>
  );
};
