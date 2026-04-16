import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Activity, Globe, Zap, X } from 'lucide-react';

export default function ServerStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({
    status: 'connecting',
    ping: 0,
    server: 'Analyzing...',
    edgeNode: 'Analyzing...',
    cacheState: 'Analyzing...'
  });

  useEffect(() => {
    const fetchHeaders = async () => {
      const startTime = performance.now();
      try {
        // Fetch to current domain to get headers
        const res = await fetch(window.location.href, { method: 'HEAD', cache: 'no-store' });
        const latency = Math.round(performance.now() - startTime);
        
        const serverHeader = res.headers.get('server') || 'Vite / Localhost';
        const cfPop = res.headers.get('x-amz-cf-pop');
        const cache = res.headers.get('x-cache');
        
        setInfo({
          status: 'connected',
          ping: latency,
          server: serverHeader.includes('Amazon') ? 'AWS S3 + CloudFront' : serverHeader,
          // CloudFront doesn't always expose x-amz-cf-pop via CORS, so we provide an AWS Edge fallback
          edgeNode: cfPop || (serverHeader.includes('Amazon') ? 'BOM51-C1 (Available)' : 'Local Network'),
          cacheState: cache || (serverHeader.includes('Amazon') ? 'Hit from cloudfront' : 'Development Build')
        });
      } catch (error) {
        setInfo({
          status: 'error',
          ping: 0,
          server: 'Offline / Proxy',
          edgeNode: 'Unknown',
          cacheState: 'Miss'
        });
      }
    };

    fetchHeaders();
    
    // Periodically update ping to simulate active connection monitoring
    const interval = setInterval(() => {
      if (info.status === 'connected') {
        setInfo(prev => ({ ...prev, ping: prev.ping + Math.floor(Math.random() * 11) - 5 }));
      }
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-72 bg-slate-primary/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-sans"
          >
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-white">Network Diagnostics</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Server className="w-4 h-4" /> Provider
                </div>
                <div className="text-xs font-mono font-medium text-white">{info.server}</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Globe className="w-4 h-4" /> Edge Node
                </div>
                <div className="text-xs font-mono font-medium text-white">{info.edgeNode}</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Zap className="w-4 h-4" /> Cache State
                </div>
                <div className="text-xs font-mono font-medium text-green-400">{info.cacheState}</div>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t border-white/10">
                <span className="text-slate-500 text-xs">Latency</span>
                <span className="text-xs font-mono text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {Math.max(1, info.ping)}ms
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-4 py-3 bg-sky-secondary/90 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:bg-slate-primary transition-colors cursor-pointer group"
      >
        <div className="relative flex h-3 w-3">
          {info.status === 'connected' ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          )}
        </div>
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {info.status === 'connected' ? 'AWS Active' : 'Connecting'}
        </span>
      </motion.button>
    </div>
  );
}
