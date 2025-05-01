
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm shadow-sm py-3">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-kv-navy dark:text-gold">
          KV <span className="text-kv-teal dark:text-gold/70">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-kv-gray dark:text-gold/80 hover:text-kv-blue dark:hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button and Theme Switcher */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} className="dark:text-gold" /> : <Menu size={24} className="dark:text-gold" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-white dark:bg-dark-bg z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center gap-6 pt-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-kv-gray dark:text-gold/80 hover:text-kv-blue dark:hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
