import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Simple theme hook implementation
function useThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return { theme, toggleTheme };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useThemeToggle();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Teachers", href: "#teachers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Instagram", href: "#instagram" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#footer" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection("/")}>
            <div className="relative w-10 h-10 overflow-hidden rounded-lg transition-transform group-hover:scale-105">
              <img
                src="/ybs-logo.png"
                alt="YBS Tuition Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-tight tracking-tight ${scrolled ? 'text-foreground' : 'text-foreground md:text-white md:mix-blend-difference'}`}>
                YBS Tuition
              </span>
              
            </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white drop-shadow-md"
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`rounded-full ${scrolled ? "" : "text-white hover:bg-white/20"}`}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg shadow-primary/25 px-6"
            onClick={() => window.open("https://forms.gle/ZLgA72nza15Rsd8b7", "_blank")}
          >
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full transition-colors ${scrolled ? "text-foreground" : "text-foreground md:text-white"}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 mt-4">
                 <Button 
                   className="w-full bg-primary font-bold"
                   onClick={() => window.open("https://forms.gle/ZLgA72nza15Rsd8b7", "_blank")}
                 >
                    Enroll Now
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
