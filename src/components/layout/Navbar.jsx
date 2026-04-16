import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Terminal, Mail } from 'lucide-react';
import { Github, Linkedin } from '../icons';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-sky-secondary/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2 group">
          <div className="p-2 bg-slate-primary rounded-lg group-hover:bg-white/10 transition-colors">
            <Terminal className="w-5 h-5 text-accent" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors">
            Chirag<span className="text-white/50">T</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-white ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/tchirag03" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/chiragt333" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <NavLink to="/contact" className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Hire Me
            </NavLink>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-sky-secondary border-b border-white/5 shadow-xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `block p-4 rounded-xl text-center font-medium transition-colors ${
                      isActive ? 'bg-slate-primary text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/5">
                <a href="https://github.com/tchirag03" className="text-slate-400 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/chiragt333" className="text-slate-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:chiragt.cd23@bmsce.ac.in" className="text-slate-400 hover:text-white">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
