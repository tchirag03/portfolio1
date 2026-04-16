import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Database, Layout, BrainCircuit } from 'lucide-react';
import { Github } from '../components/icons';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const categories = ['All', 'Machine Learning', 'Web Dev', 'Database'];

const projectsData = [
  {
    id: 1,
    title: 'Animal Classifier',
    category: 'Machine Learning',
    description: 'A deep learning model trained to classify different species of animals with high accuracy using convolutional neural networks.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    github: '#',
    demo: '#',
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />
  },
  {
    id: 2,
    title: 'Net Banking System',
    category: 'Web Dev',
    description: 'A secure banking web application featuring user authentication, seamless transaction processing, and a scalable database architecture.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    github: '#',
    demo: '#',
    icon: <Layout className="w-6 h-6 text-blue-400" />
  },
  {
    id: 3,
    title: 'Hostel Management DB',
    category: 'Database',
    description: 'A comprehensive database management system designed to track student accommodation, billing, and room allocations efficiently.',
    tech: ['MySQL', 'ER Modeling', 'SQL'],
    github: '#',
    demo: null,
    icon: <Database className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 4,
    title: 'Barter E-commerce Website',
    category: 'Web Dev',
    description: 'A modern e-commerce platform facilitating a barter system for goods alongside traditional payments. Includes real-time listings.',
    tech: ['React', 'Tailwind', 'MongoDB'],
    github: '#',
    demo: '#',
    icon: <Layout className="w-6 h-6 text-blue-400" />
  },
  {
    id: 5,
    title: 'Watch Party Website',
    category: 'Web Dev',
    description: 'A synchronized video playback platform allowing groups to watch videos concurrently with real-time chat functionality.',
    tech: ['Socket.io', 'React', 'Node.js'],
    github: '#',
    demo: '#',
    icon: <Layout className="w-6 h-6 text-blue-400" />
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto px-6 w-full"
    >
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-white rounded-full"></div>
        </div>
        
        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-white text-black' 
                  : 'bg-slate-primary/50 text-slate-400 hover:bg-slate-primary hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-slate-primary/20 border border-white/5 rounded-3xl p-6 hover:bg-slate-primary/40 transition-colors group relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-sky-secondary rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-slate-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
