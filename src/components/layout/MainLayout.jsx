import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-white/20 selection:text-white relative">
      {/* Global Background Glow effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-slate-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-primary/20 blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main className="flex-grow pt-28 pb-10 flex flex-col">
        {/* The motion.div here handles page transitions wrapper for outlet routes */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
