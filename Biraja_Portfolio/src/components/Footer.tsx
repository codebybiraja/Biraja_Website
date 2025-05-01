
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-kv-navy dark:bg-dark-bg text-white dark:text-gold py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">KV Student Portfolio</h2>
            <p className="text-blue-200 dark:text-gold/70">Showcasing academic excellence and achievements</p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 dark:bg-gold/20 flex items-center justify-center hover:bg-white/20 dark:hover:bg-gold/30 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 dark:bg-gold/20 flex items-center justify-center hover:bg-white/20 dark:hover:bg-gold/30 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 dark:bg-gold/20 flex items-center justify-center hover:bg-white/20 dark:hover:bg-gold/30 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 dark:bg-gold/20 flex items-center justify-center hover:bg-white/20 dark:hover:bg-gold/30 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <hr className="border-white/10 dark:border-gold/30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 dark:text-gold/70 text-sm">
            &copy; {currentYear} Rahul Sharma. All rights reserved.
          </p>
          
          <nav className="flex gap-6 mt-4 md:mt-0">
            <a href="#hero" className="text-sm text-blue-200 dark:text-gold/70 hover:text-white dark:hover:text-gold transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-blue-200 dark:text-gold/70 hover:text-white dark:hover:text-gold transition-colors">
              About
            </a>
            <a href="#education" className="text-sm text-blue-200 dark:text-gold/70 hover:text-white dark:hover:text-gold transition-colors">
              Education
            </a>
            <a href="#contact" className="text-sm text-blue-200 dark:text-gold/70 hover:text-white dark:hover:text-gold transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
