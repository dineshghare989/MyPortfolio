import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a href="#home" whileHover={{ scale: 1.05 }} className="text-2xl font-bold font-display text-foreground no-underline">
            Portfolio<span className="text-primary">.</span>
          </motion.a>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a 
                key={label} 
                href={href} 
                aria-label={label} 
                whileHover={{ scale: 1.2, y: -3 }} 
                whileTap={{ scale: 0.9 }} 
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">Made with <Heart className="w-4 h-4 text-primary fill-primary" /> © 2026</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer