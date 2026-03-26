import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT - Name */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-primary">
            Mukesh.dev
          </h2>
          <p className="text-sm text-muted-foreground">
            Building modern web experiences 🚀
          </p>
        </div>

        {/* CENTER - Social Links */}
        <div className="flex gap-4">
          <a href="#" className="p-2 rounded-full border hover:bg-primary/10 transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full border hover:bg-primary/10 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full border hover:bg-primary/10 transition">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        {/* RIGHT - Back to top */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary text-white hover:scale-110 transition transform shadow-md"
        >
          <ArrowUp size={18} />
        </a>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-muted-foreground pb-6">
        © {new Date().getFullYear()} Mukesh.dev — All rights reserved
      </div>

    </footer>
  );
};