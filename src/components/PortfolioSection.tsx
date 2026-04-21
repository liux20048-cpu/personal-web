import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { articleCards, shortVideoCards, videoCards } from '../data/portfolio';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Play, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

export const PortfolioSection = () => {
  type Filter = 'all' | 'news' | 'event' | 'interview' | 'product';
  const [filter, setFilter] = useState<Filter>('product');
  const [expandedShortVideoId, setExpandedShortVideoId] = useState<string | null>(null);

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
    <section id="portfolio" className="py-14 container mx-auto px-4">
      <div className="mb-10 border-b border-border pb-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
          <span>Portfolio</span>
        </h2>
      </div>

      {/* Articles */}
      <div className="mb-12">
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
                    ? "bg-foreground text-background border-foreground"
                    : "bg-muted text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground"
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
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-foreground/20 transition-colors h-full flex flex-col"
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
                  <h4 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-foreground/70 transition-colors">
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

      {/* Short Video Planning */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground/80">Short Videos</h3>
          </div>
        </div>

        <div className="space-y-6">
          {shortVideoCards.map((video, index) => {
            const isExpanded = expandedShortVideoId === video.id;

            return (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-3">
                      <Badge variant="outline" className="w-fit">短视频</Badge>
                      <button
                        type="button"
                        className="text-left w-full rounded-lg -mx-2 px-2 py-2 hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => setExpandedShortVideoId(isExpanded ? null : video.id)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-xl font-bold leading-snug">{video.title}</h4>
                          <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                            {isExpanded ? '收起' : '展开'}
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </span>
                        </div>
                      </button>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {video.watchHint}
                      </p>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden space-y-4"
                        >
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            <span className="font-medium text-foreground">选题逻辑：</span>
                            {video.topicLogic}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-foreground">视频结构</p>
                            <ul className="space-y-2">
                              {video.structure.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/50 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                      <span className="font-medium text-foreground">角色：</span>
                      {video.role}
                    </p>
                  </div>

                  <div className="w-full md:w-56 shrink-0">
                    <div className="aspect-video overflow-hidden bg-muted rounded-xl border border-border">
                      <img
                        src={video.cover}
                        alt={video.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Videos */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-foreground/80">Live Streams</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoCards
            .filter((v) => v.category === 'livestream')
            .map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-xl overflow-hidden border border-border"
            >
              <a 
                href={video.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {video.cover ? (
                  <img 
                    src={video.cover} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center px-6">
                    <div className="text-center text-muted-foreground text-sm leading-relaxed">
                      {video.title}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-border">
                    <Play className="fill-foreground text-foreground ml-1" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/55 backdrop-blur-[2px]">
                  <h4 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">{video.title}</h4>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 mt-12 text-foreground/80">Promos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoCards
            .filter((v) => v.category === 'promo')
            .map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-xl overflow-hidden border border-border"
            >
              <a 
                href={video.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {video.cover ? (
                  <img 
                    src={video.cover} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center px-6">
                    <div className="text-center text-muted-foreground text-sm leading-relaxed">
                      {video.title}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-border">
                    <Play className="fill-foreground text-foreground ml-1" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/55 backdrop-blur-[2px]">
                  <h4 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">{video.title}</h4>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
