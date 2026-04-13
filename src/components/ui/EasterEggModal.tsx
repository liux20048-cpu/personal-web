import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, MessageCircle } from 'lucide-react';
import { Button } from './Button';

export const EasterEggModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasShown = sessionStorage.getItem('easterEggShown');
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('easterEggShown', 'true');
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleContact = () => {
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="relative w-full max-w-md bg-card border border-primary/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,245,160,0.15)] text-center overflow-hidden"
          >
            {/* Decor - Confetti-like circles */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors group"
            >
              <X size={20} style={{ stroke: "url(#icon-gradient)" }} />
            </button>

            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-bounce">
                <Heart style={{ fill: "url(#icon-gradient)", stroke: "url(#icon-gradient)" }} size={32} />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-foreground">
              感谢你的停留！
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              很高兴你能看到这里。如果你觉得我的经历与你的需求契合，或者只是想聊聊技术与创意，随时欢迎联系我。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleContact} className="gap-2 group shadow-lg shadow-primary/20">
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                和我聊聊
              </Button>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                稍后再说
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
