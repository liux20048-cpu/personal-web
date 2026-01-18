import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { ThemeToggle } from './ui/ThemeToggle';

export const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div 
          className="text-xl md:text-2xl font-black tracking-tighter flex items-baseline select-none cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-foreground group-hover:text-primary transition-colors duration-300">XIN</span>
          <span className="text-primary mx-0.5 animate-pulse">.</span>
          <span className="font-light tracking-[0.2em] text-foreground/90 group-hover:tracking-[0.3em] transition-all duration-300">Space</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {['About', 'Portfolio', 'Projects'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle (Simplified for now) */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          {/* TODO: Add mobile menu */}
        </div>
      </div>
    </header>
  );
};
