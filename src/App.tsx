import { Download } from 'lucide-react';
import { Button } from './components/ui/Button';
import { HeaderNav } from './components/HeaderNav';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectSection } from './components/ProjectSection';
import { FooterCard } from './components/FooterCard';
import { AuroraBackground } from './components/ui/AuroraBackground';

function App() {
  return (
    <div className="min-h-screen text-foreground selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden relative">
      <AuroraBackground />
      <HeaderNav />
      
      <main className="pt-24 pb-20 space-y-20">
        {/* Hero / Intro Area */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Left: Avatar */}
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-border shadow-[0_0_30px_rgba(0,245,160,0.2)]">
              <img 
                src="/images/avatar.JPG" 
                alt="Avatar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=User&background=00F5A0&color=000';
                }}
              />
            </div>

            {/* Right: Text Content */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                你好，我是<span className="text-primary">刘芯</span>。
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">链接技术与价值，让内容更有温度。</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                我是一名内容实践者，致力于打破技术与市场之间的壁垒。目前正在寻求品牌内容相关的职业机会，期待与你共同构建有深度的内容影响力。
              </p>
              
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

        <AboutSection />
        <PortfolioSection />
        <ProjectSection />
      </main>

      <FooterCard />
    </div>
  );
}

export default App;
