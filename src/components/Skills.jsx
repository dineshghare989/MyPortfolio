import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const skills = [
  { name: 'React', icon: '⚛️', proficiency: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', icon: '📘', proficiency: 90, color: 'from-blue-400 to-blue-600' },
  { name: 'Node.js', icon: '🟢', proficiency: 88, color: 'from-green-400 to-green-600' },
  { name: 'Tailwind CSS', icon: '🎨', proficiency: 92, color: 'from-cyan-400 to-teal-500' },
  { name: 'Next.js', icon: '▲', proficiency: 85, color: 'from-gray-400 to-gray-600' },
  { name: 'MongoDB', icon: '🍃', proficiency: 80, color: 'from-green-500 to-green-700' },
  { name: 'PostgreSQL', icon: '🐘', proficiency: 78, color: 'from-blue-500 to-indigo-600' },
  { name: 'Python', icon: '🐍', proficiency: 75, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Docker', icon: '🐳', proficiency: 70, color: 'from-blue-400 to-cyan-500' },
  { name: 'AWS', icon: '☁️', proficiency: 72, color: 'from-orange-400 to-orange-600' },
  { name: 'GraphQL', icon: '◈', proficiency: 80, color: 'from-pink-400 to-pink-600' },
  { name: 'Framer Motion', icon: '🎬', proficiency: 88, color: 'from-purple-400 to-pink-500' },
];

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
   <motion.div 
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ scale: 1.03, y: -5 }}
  whileTap={{ scale: 0.99 }}
  hoverTransition={{ duration: 0.13, ease: "easeOut" }}
  className="skill-card group"
>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">{skill.icon}</div>
        <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="text-primary font-medium">{skill.proficiency}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }} 
            animate={isInView ? { width: `${skill.proficiency}%` } : {}} 
            transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }} 
            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`} 
          />
        </div>
      </div>
      <motion.div 
        initial={{ scaleX: 0 }} 
        animate={isInView ? { scaleX: 1 } : {}} 
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }} 
        className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary/50 origin-left" 
      />
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-title text-foreground">My <span className="text-primary">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (<SkillCard key={skill.name} skill={skill} index={index} />))}
        </div>
      </div>
    </section>
  );
};

export default Skills