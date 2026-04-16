import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const stats = [
  { label: 'Projects Completed', value: '5+' },
  { label: 'Cloud Deployments', value: 'AWS' },
  { label: 'Technologies', value: 'React & ML' }
];

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 w-full relative"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Hero Content */}
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-primary/50 border border-white/10 text-sm font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Internships
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Chirag T</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-400 max-w-xl">
              Data Science & Machine Learning Enthusiast.
            </p>
            <p className="text-base text-slate-500 max-w-lg leading-relaxed">
              I build scalable systems, intelligent applications, and deploy them to the cloud. Currently focused on mastering AWS and full-stack development.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <NavLink to="/projects" className="group px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 hover:bg-white/90 transition-colors">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink to="/contact" className="px-6 py-3 bg-slate-primary text-white font-semibold rounded-xl hover:bg-slate-primary/80 border border-white/5 transition-colors">
              Contact Me
            </NavLink>
          </div>

          {/* Quick Stats */}
          <div className="pt-12 grid grid-cols-3 gap-6 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Element */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-primary/40 to-transparent rounded-full blur-3xl"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full max-w-md aspect-square bg-slate-primary/30 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl flex flex-col"
          >
            {/* Terminal Mockup Header */}
            <div className="h-12 border-b border-white/10 bg-slate-primary/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Terminal className="w-3 h-3" />
                portfolio_deploy.sh
              </div>
            </div>
            
            {/* Terminal Mockup Body */}
            <div className="flex-grow p-6 font-mono text-sm overflow-hidden flex flex-col gap-3 text-slate-300">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-green-400"
              >
                $ initializing deployment sequence...
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                [AWS S3] Bucket sync completed (124 files)
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                [AWS CloudFront] Invalidating cache *
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
              >
                [AWS Route53] Verifying custom domain configuration
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
                className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-300"
              >
                ✔ System Online. Architecture verified.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
