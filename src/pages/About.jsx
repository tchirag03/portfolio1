import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Download, GraduationCap } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-5xl mx-auto px-6 w-full"
    >
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          About Me
        </h1>
        <div className="w-20 h-1 bg-white rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Left Column: Personal Info Card */}
        <div className="md:col-span-1">
          <div className="bg-slate-primary/30 border border-white/5 rounded-3xl p-8 backdrop-blur-sm sticky top-32">
            <div className="w-32 h-32 bg-sky-secondary rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-slate-primary overflow-hidden">
              <User className="w-12 h-12 text-slate-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-center text-white mb-2">Chirag T</h2>
            <p className="text-center text-slate-400 text-sm mb-8">Data Science & ML</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 rounded-full bg-sky-secondary flex items-center justify-center text-slate-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">USN</div>
                  <div className="font-medium font-mono text-white">1BM23CD013</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 rounded-full bg-sky-secondary flex items-center justify-center text-slate-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-slate-500">Email</div>
                  <a href="mailto:chiragt.cd23@bmsce.ac.in" className="font-medium hover:text-white transition-colors truncate block">
                    chiragt.cd23@bmsce.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 rounded-full bg-sky-secondary flex items-center justify-center text-slate-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Phone</div>
                  <a href="tel:6360063657" className="font-medium hover:text-white transition-colors">
                    +91 63600 63657
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 rounded-full bg-sky-secondary flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="font-medium">Bangalore, India</div>
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Column: Bio & Experience */}
        <div className="md:col-span-2 space-y-12">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              I am a passionate Data Science & Machine Learning enthusiast with a strong foundation in computer science principles. My interest lies in bridging the gap between complex analytical models and robust, scalable web architectures.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg mt-4">
              I enjoy building full-stack applications that leverage data insights, and I am particularly focused on deploying these solutions using cloud infrastructure, specifically AWS, to ensure they are performant, secure, and accessible globally.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Education & Milestones</h3>
            
            <div className="relative border-l border-white/10 ml-3 md:ml-0 md:pl-0">
              {/* Timeline Items */}
              <div className="mb-10 ml-8 relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-white border-4 border-sky-secondary"></div>
                <div className="bg-slate-primary/20 border border-white/5 rounded-2xl p-6">
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-1 block">Current</span>
                  <h4 className="text-lg font-bold text-white">Undergraduate Program</h4>
                  <p className="text-slate-400 mt-2 text-sm">BMS College of Engineering</p>
                  <p className="text-slate-500 mt-2 text-sm">Pursuing specialized studies in Data Science, focusing on advanced algorithms, machine learning models, and software engineering practices.</p>
                </div>
              </div>

              <div className="mb-10 ml-8 relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-slate-primary border-4 border-sky-secondary"></div>
                <div className="bg-slate-primary/20 border border-white/5 rounded-2xl p-6">
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-1 block">2023</span>
                  <h4 className="text-lg font-bold text-white">Cloud Deployment Exploration</h4>
                  <p className="text-slate-400 mt-2 text-sm">Self-Taught</p>
                  <p className="text-slate-500 mt-2 text-sm">Began extensive learning of AWS core services (EC2, S3, CloudFront) to understand robust infrastructure deployment and CI/CD pipelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
