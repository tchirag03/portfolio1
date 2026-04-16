import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');
    
    // Simulate API call (e.g. to AWS API Gateway + SES)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-6xl mx-auto px-6 w-full"
    >
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Let's Work Together
        </h1>
        <div className="w-20 h-1 bg-white rounded-full mx-auto md:mx-0"></div>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-8">
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-slate-primary/20 border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-slate-primary flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium mb-1">Email</div>
                <a href="mailto:chiragt.cd23@bmsce.ac.in" className="text-white hover:text-accent font-medium transition-colors break-all">
                  chiragt.cd23@bmsce.ac.in
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-slate-primary/20 border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-slate-primary flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium mb-1">Phone</div>
                <a href="tel:+916360063657" className="text-white hover:text-accent font-medium transition-colors">
                  +91 63600 63657
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-slate-primary/20 border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-slate-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium mb-1">Location</div>
                <div className="text-white font-medium">
                  Bangalore, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="bg-slate-primary/30 py-8 px-6 sm:px-10 border border-white/5 rounded-3xl backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-sky-secondary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all font-sans"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-sky-secondary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all font-sans"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-sky-secondary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none font-sans"
                  placeholder="Hi Chirag, I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {status === 'idle' && (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
                {status === 'submitting' && (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                )}
                {status === 'success' && (
                  <>Message Sent! <CheckCircle className="w-4 h-4 text-green-600" /></>
                )}
                {status === 'error' && (
                  <>Failed to send <AlertCircle className="w-4 h-4 text-red-600" /></>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
