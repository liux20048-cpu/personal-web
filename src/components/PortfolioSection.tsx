import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { articleCards, videoCards } from '../data/portfolio';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Play, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const PortfolioSection = () => {
  type Filter = 'all' | 'news' | 'event' | 'interview' | 'product';
  const [filter, setFilter] = useState<Filter>('product');

  const filteredArticles = filter === 'all' 
    ? articleCards 
    : articleCards.filter(article => article.category === filter);

  const categories: { id: Filter; label: string }[] = [
    { id: 'product', label: 'Product' },
    { id: 'interview', label: 'Interview' },
    { id: 'event', label: 'Event' },
    { id: 'news', label: 'News' },
    { id: 'all', label: 'All Works' },
  ];

  return (
    <section id="portfolio" className="py-20 container mx-auto px-4 bg-muted/30">
      <div className="mb-12 border-b border-border pb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
          <span className="text-primary">02.</span> 
          <span>Portfolio</span>
        </h2>
        <p className="text-muted-foreground text-lg">Selected Works: Articles & Live Streams</p>
      </div>

      {/* Articles */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h3 className="text-xl font-semibold text-foreground/80">Articles</h3>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-300 border",
                  filter === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(0,245,160,0.3)]"
                    : "bg-muted text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.div
                layout
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.cover} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button size="sm" className="gap-2">
                        Read Article <ArrowUpRight size={16} />
                      </Button>
                    </a>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <Badge variant="outline" className="w-fit mb-3 capitalize">
                    {article.category}
                  </Badge>
                  <h4 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                    {article.excerpt || article.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Videos */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-white/80">Live Streams</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoCards.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-xl overflow-hidden border border-white/5"
            >
              <a 
                href={video.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img 
                  src={video.cover} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/20">
                    <Play className="fill-white text-white ml-1" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{video.title}</h4>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
