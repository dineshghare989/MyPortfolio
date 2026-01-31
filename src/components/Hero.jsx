import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';


const Hero = ({containerVariants,itemVariants}) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} 
            className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" 
        />
        <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} 
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }} 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20" 
        />
      </div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="container mx-auto px-4 md:px-6 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Welcome to my Portfolio
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight text-foreground">
          Hi, I'm <span className="text-primary">Dinesh Ghare</span><br />
          <span className="text-muted-foreground">Full Stack Developer</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          I craft beautiful, performant web experiences with modern technologies. Passionate about clean code and innovative solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium glow-button w-full sm:w-auto inline-flex justify-center items-center no-underline"
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="border border-border text-foreground px-8 py-3 rounded-full font-medium hover:bg-secondary/50 transition-colors w-full sm:w-auto inline-flex justify-center items-center no-underline"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          {[{ icon: Github, href: '#' }, { icon: Linkedin, href: '#' }, { icon: Twitter, href: '#' }].map(({ icon: Icon, href }, index) => (
            <motion.a 
                key={index} 
                href={href} 
                whileHover={{ scale: 1.2, y: -3 }} 
                whileTap={{ scale: 0.9 }} 
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 md:mt-20">
          <motion.a 
            href="#about" 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors no-underline"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;