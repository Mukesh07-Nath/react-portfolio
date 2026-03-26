import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 70, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "REST APIs", level: 65, category: "backend" },

  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Vercel", level: 75, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === cat
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-secondary/70 hover:bg-primary/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {filteredSkills.map((skill, index) => {
            const radius = 40;
            const circumference = 2 * Math.PI * radius;
            const offset =
              circumference - (skill.level / 100) * circumference;

            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                {/* CIRCLE */}
                <svg width="100" height="100" className="mb-4">
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-secondary"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-primary"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>

                {/* TEXT */}
                <h3 className="text-sm font-semibold text-center">
                  {skill.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {skill.level}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};