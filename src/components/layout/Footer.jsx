import { Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../icons';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 bg-slate-primary/30 mt-20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-xl tracking-tight text-white">
            Chirag<span className="text-white/50">T</span>
          </span>
          <p className="text-slate-400 text-sm mb-4 md:mb-0 text-center md:text-left">
            Data Science & Machine Learning Enthusiast.<br/>
            Building scalable systems and intelligent applications.
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-400 mb-6 md:mb-0">
          <NavLink to="/about" className="hover:text-white transition-colors">About</NavLink>
          <NavLink to="/projects" className="hover:text-white transition-colors">Projects</NavLink>
          <NavLink to="/skills" className="hover:text-white transition-colors">Skills</NavLink>
          <NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/tchirag03" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-primary flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/chiragt333" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-primary flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:chiragt.cd23@bmsce.ac.in" className="w-10 h-10 rounded-full bg-slate-primary flex items-center justify-center text-slate-400 hover:bg-[#EA4335] hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="border-t border-white/5 py-6 text-center text-sm text-slate-500">
        <p>&copy; {currentYear} Chirag T. All rights reserved.</p>
        <p className="mt-1 text-xs text-slate-600">Hosted on AWS (S3 + CloudFront)</p>
      </div>
    </footer>
  );
}
