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
            className="relative w-full max-w-md bg-card border border-border rounded-3xl p-8 text-center overflow-hidden shadow-xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X size={20} className="text-foreground" />
            </button>

            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center animate-bounce">
                <Heart className="text-foreground fill-foreground" size={32} />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-foreground">
              感谢你的停留！
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              很高兴你能看到这里。如果你觉得我的经历与你的需求契合，或者只是想聊聊技术与创意，随时欢迎联系我。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleContact} className="gap-2 group">
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
