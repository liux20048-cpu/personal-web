import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectCards } from '../data/portfolio';
import { Badge } from './ui/Badge';
import { ChevronDown, Layers, Award, Code2, Calendar, User, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

export const ProjectSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 container mx-auto px-4">
      <div className="mb-12 border-b border-border pb-8">
        <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
          <span className="text-primary">03.</span> 
          <span>Projects</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {projectCards.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            {/* Project Header - Always Visible */}
            <div 
              className="p-6 md:p-8 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {project.subtitle}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User size={16} className="text-primary" />
                      <span>{project.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} className="text-primary" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>

                <div className={cn(
                  "w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center transition-transform duration-300 border border-border self-start mt-1",
                  expandedId === project.id ? "rotate-180 bg-primary text-primary-foreground border-primary" : ""
                )}>
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2 space-y-8 border-t border-border">
                    
                    {/* Description */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-border">
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Layers size={18} className="text-primary" />
                        Project Description
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Responsibilities */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Code2 size={18} className="text-primary" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {project.responsibility.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Award size={18} className="text-primary" />
                          Results & Impact
                        </h4>
                        <ul className="space-y-3">
                          {project.achievement.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-foreground/90">{item}</span>
                            </li>
                          ))}
                        </ul>

                         {project.link && (
                          <div className="pt-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm" className="gap-2 group">
                                View Project Page 
                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                              </Button>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Image Gallery */}
                    {project.images && project.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                        {project.images.map((img, idx) => (
                          <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border group">
                            <img 
                              src={img} 
                              alt={`Project screenshot ${idx + 1}`} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
