import { motion } from 'framer-motion';
import { Cloud, Code, Database, Layout, Server, Boxes } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const skillCategories = [
  {
    title: 'Programming Core',
    icon: <Code className="w-6 h-6 text-slate-300" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 85 }
    ]
  },
  {
    title: 'Data Science',
    icon: <Boxes className="w-6 h-6 text-slate-300" />,
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 },
      { name: 'Scikit-learn', level: 75 }
    ]
  },
  {
    title: 'Frontend Web',
    icon: <Layout className="w-6 h-6 text-slate-300" />,
    skills: [
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-slate-300" />,
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Express', level: 65 }
    ]
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6 text-slate-300" />,
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'DynamoDB', level: 60 }
    ]
  }
];

export default function Skills() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto px-6 w-full"
    >
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Technical Proficiency
        </h1>
        <div className="w-20 h-1 bg-white rounded-full"></div>
      </div>

      {/* Cloud Architecture Highlight */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-slate-primary/50 to-sky-secondary/50 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Cloud className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white mb-6">
              <Cloud className="w-4 h-4 text-orange-400" />
              AWS Cloud Deployment
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Cloud Architecture & Hosting</h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              Understanding deployment is critical. My projects demonstrate an end-to-end understanding of modern cloud infrastructure hosted entirely on Amazon Web Services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['EC2', 'S3 (Static Hosting)', 'CloudFront (CDN)', 'IAM', 'Route 53', 'CloudWatch'].map((service, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-sm font-medium text-slate-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* General Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="bg-slate-primary/20 border border-white/5 rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-sky-secondary flex items-center justify-center border border-white/5">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-slate-400 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
