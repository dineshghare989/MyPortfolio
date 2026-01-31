import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';


const projects = [
  { title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'], codeUrl: '#', demoUrl: '#' },
  { title: 'Fitness Tracker App', description: 'Track workouts, nutrition, and progress with beautiful analytics.', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop', tags: ['React Native', 'Firebase', 'TypeScript'], codeUrl: '#', demoUrl: '#' },
  { title: 'AI Content Generator', description: 'Generate marketing copy, blog posts, and social media content with AI.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', tags: ['Python', 'OpenAI', 'FastAPI', 'React'], codeUrl: '#', demoUrl: '#' },
  { title: 'Task Management System', description: 'Collaborative project management with real-time updates.', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop', tags: ['Next.js', 'Prisma', 'PostgreSQL'], codeUrl: '#', demoUrl: '#' },
  { title: 'Social Media Dashboard', description: 'Analytics and scheduling tool for multiple social platforms.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', tags: ['Vue.js', 'Node.js', 'Redis'], codeUrl: '#', demoUrl: '#' },
  { title: 'Real Estate Platform', description: 'Property listings with virtual tours and mortgage calculator.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop', tags: ['React', 'GraphQL', 'AWS'], codeUrl: '#', demoUrl: '#' },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div 
        ref={ref} 
        initial={{ opacity: 0, y: 40 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.6, delay: index * 0.15 }} 
        whileHover={{ y: -8 }} 
        className="project-card group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (<span key={tag} className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground">{tag}</span>))}
        </div>
        <div className="flex gap-3">
          <motion.a href={project.codeUrl} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors font-medium text-sm text-foreground no-underline"><Github size={16} />Code</motion.a>
          <motion.a href={project.demoUrl} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm glow-button no-underline"><ExternalLink size={16} />Demo</motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-title text-foreground">My <span className="text-primary">Projects</span></h2>
          <p className="section-subtitle">A showcase of my recent work and side projects.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (<ProjectCard key={project.title} project={project} index={index} />))}
        </div>
      </div>
    </section>
  );
};

export default Projects