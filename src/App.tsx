import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from './components/ui/Button';
import { HeaderNav } from './components/HeaderNav';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectSection } from './components/ProjectSection';
import { FooterCard } from './components/FooterCard';
import { EasterEggModal } from './components/ui/EasterEggModal';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isAvatarSpinning, setIsAvatarSpinning] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState('👋');

  const emojis = ['👋', '😄', '✨', '🚀', '🎨', '🐱', '💻', '🌟'];

  const handleAvatarClick = () => {
    if (isAvatarSpinning) return;
    
    setIsAvatarSpinning(true);
    setShowEmoji(true);
    setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)]);

    setTimeout(() => {
      setIsAvatarSpinning(false);
      setShowEmoji(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden relative">
      <EasterEggModal />
      <HeaderNav />
      
      <main className="pt-24 pb-16 space-y-14">
        {/* Hero / Intro Area */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Left: Avatar */}
            <div className="relative">
              <motion.div 
                className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border border-border bg-card cursor-pointer"
                animate={{ rotate: isAvatarSpinning ? 360 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={handleAvatarClick}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/images/avatar.JPG" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=User&background=111111&color=ffffff';
                  }}
                />
              </motion.div>
              
              <AnimatePresence>
                {showEmoji && (
                  <motion.div
                    initial={{ opacity: 0, y: 0, scale: 0.5 }}
                    animate={{ opacity: 1, y: -50, scale: 1.5 }}
                    exit={{ opacity: 0, y: -80 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl pointer-events-none"
                  >
                    {currentEmoji}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Text Content */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                你好，我是<span className="text-foreground/75">刘芯</span>。
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">将复杂技术转化为清晰的用户价值表达</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">内容策划｜技术转译｜品牌表达｜增长导向</p>
              
              <div className="pt-4 flex justify-center md:justify-start">
                <a href="/resume.pdf" download="刘芯_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 group">
                    <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                    下载简历
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <PortfolioSection />
        <ProjectSection />
      </main>

      <FooterCard />
    </div>
  );
}

export default App;
