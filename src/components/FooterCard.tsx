import { useState } from 'react';
import { Mail, Copy, Check, MessageSquare } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const FooterCard = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [showEgg, setShowEgg] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleEggClick = () => {
    if (showEgg) return;
    
    setShowEgg(true);
    setTimeout(() => {
      setShowEgg(false);
    }, 3000);
  };

  const contacts = [
    { type: 'Email', value: '15922862136@163.com', icon: <Mail size={20} /> },
    { type: 'WeChat', value: '15922862136', icon: <MessageSquare size={20} /> },
  ];

  return (
    <footer id="contact" className="py-20 container mx-auto px-4">
      <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
        {/* Decor */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">期待与你合作</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
          我目前正在寻求全职工作机会，同时也对兼职项目持开放态度。如果你对我的经历感兴趣，或有合作意向，欢迎随时联系。
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact) => (
            <div 
              key={contact.type}
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors group min-w-[280px]"
            >
              <div className="p-3 rounded-full bg-background text-primary shadow-sm">
                {contact.icon}
              </div>
              <div className="text-left flex-grow">
                <p className="text-xs text-muted-foreground">{contact.type}</p>
                <p className="font-medium text-foreground">{contact.value}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 hover:bg-primary/20 hover:text-primary"
                onClick={() => handleCopy(contact.value, contact.type)}
              >
                {copied === contact.type ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleEggClick}>
            <p>Designed & Built with</p>
            <motion.div
              animate={showEgg ? { 
                scale: [1, 1.5, 1],
                rotate: [0, 10, -10, 0],
                color: '#ef4444'
              } : {}}
              className="relative"
            >
              ❤️
              <AnimatePresence>
                {showEgg && (
                  <motion.div
                    initial={{ opacity: 0, y: 0, x: '-50%' }}
                    animate={{ opacity: 1, y: -30 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-1/2 -top-2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold"
                  >
                    再点我就要请你喝咖啡啦！☕️
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
