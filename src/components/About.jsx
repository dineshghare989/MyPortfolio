import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Menu,X,ArrowDown,Github, Linkedin, Twitter, Code2, Palette, Rocket, Users,Mail,Phone,MapPin, Send,Loader2,ExternalLink,Heart
} from 'lucide-react';

const aboutCards = [
  { icon: Code2, title: 'Clean Code', description: 'I write maintainable, scalable code following best practices.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful interfaces with great user experience.' },
  { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and smooth interactions.' },
  { icon: Users, title: 'Collaboration', description: 'Working effectively in teams and with clients.' },
];
const About = ({containerVariants,itemVariants}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title text-foreground">About <span className="text-primary">Me</span></h2>
            <p className="section-subtitle">Get to know more about my journey and what drives me as a developer.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">I'm a passionate Full Stack Developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies.</p>
                <p className="text-muted-foreground leading-relaxed mb-4">My journey started with a curiosity for how websites work, which led me to dive deep into both frontend and backend development. Today, I help businesses bring their ideas to life through elegant, efficient code.</p>
                <p className="text-muted-foreground leading-relaxed">When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.</p>
              </div>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium glow-button no-underline"
              >
                Let's Work Together
              </motion.a>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutCards.map((card) => (
                <motion.div 
                    key={card.title} 
                    variants={itemVariants} 
                    whileHover={{ scale: 1.03, y: -5 }} 
                    className="glass-card p-6 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{card.title}</h4>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About