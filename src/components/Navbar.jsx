import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [darkMode, setDarkMode] = useState(false);

  // 🌙 Load theme (system + saved)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // 🌙 Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      {/* Floating Glass Container */}
      <div className="flex justify-center px-4 py-3">
        <div
          className={cn(
            "w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl border backdrop-blur-xl transition-all duration-300",
            isScrolled
              ? "bg-white/70 dark:bg-black/60 shadow-lg border-black/10 dark:border-white/10"
              : "bg-white/40 dark:bg-black/40 border-transparent"
          )}
        >
          {/* Logo */}
          <a href="#hero" className="text-lg font-semibold">
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mukesh.dev
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors group"
              >
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300",
                    active === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            ))}

            {/* 🌙 Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md hover:scale-110 transition"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-blue-500" />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            {/* 🌙 Toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              className="text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 flex flex-col items-center justify-center space-y-8 text-xl backdrop-blur-xl transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 scale-100 bg-white/90 dark:bg-black/90"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "transition-all duration-300",
              active === item.href
                ? "text-primary font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:text-primary"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};