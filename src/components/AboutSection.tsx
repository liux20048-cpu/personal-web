import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Zap, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { aboutCards } from '../data/portfolio';
import { WorkContent, SkillItem } from '../types';
import { cn } from '../lib/utils';

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    const xPct = mouseXFromCenter / width;
    const yPct = mouseYFromCenter / height;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative h-full transition-all duration-200 ease-linear transform-gpu", className)}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl pointer-events-none"
        style={{ transform: "translateZ(50px)" }}
      />
      <div style={{ transform: "translateZ(20px)" }} className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  // Categorize data
  const advantages = aboutCards.find(c => c.type === 'advantage');
  const skills = aboutCards.find(c => c.type === 'skill');
  const works = aboutCards.filter(c => c.type === 'work');
  const education = aboutCards.find(c => c.type === 'education');

  const [expandedWork, setExpandedId] = useState<string | null>(works[0]?.id || null);

  const toggleWork = (id: string) => {
    setExpandedId(expandedWork === id ? null : id);
  };

  const getSkillColor = (level: string) => {
    switch (level) {
      case '熟练':
        return 'bg-primary/20 text-primary border-primary/30';
      case '掌握':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-muted/50 text-muted-foreground border-border';
    }
  };

  return (
    <section id="about" className="py-20 container mx-auto px-4 space-y-24">
      {/* Main Section Header */}
      <div className="border-b border-border pb-8">
        <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
          <span className="text-primary">01.</span> 
          <span>About Me</span>
        </h2>
      </div>

      {/* 1. 个人优势 - Bento Grid 风格 */}
      <div className="space-y-8">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold flex items-center gap-3"
        >
          <Award className="text-primary" size={24} />
          <span>Highlights</span>
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
          {(advantages?.content as string[]).map((item, index) => {
             const [title, desc] = item.split(' | ');
             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <TiltCard className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:bg-card/80">
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                    </div>
                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform shrink-0 mt-1 self-start md:self-auto">
                      <Award size={20} />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
             );
          })}
        </div>
      </div>

      {/* 2. 工作经历 - 可折叠垂直时光轴 */}
      <div className="space-y-12">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold flex items-center gap-3"
        >
          <Briefcase className="text-primary" size={24} />
          <span>Experience</span>
        </motion.h3>

        <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-8 py-4">
          {works.map((work, index) => {
            const isExpanded = expandedWork === work.id;
            
            return (
              <motion.div 
                key={work.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className={cn(
                  "absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 transition-all duration-300",
                  isExpanded 
                    ? "bg-background border-primary shadow-[0_0_10px_rgba(0,245,160,0.5)] scale-110" 
                    : "bg-muted-foreground/20 border-transparent hover:bg-primary/50"
                )} />
                
                {/* Header (Clickable) */}
                <div 
                  onClick={() => toggleWork(work.id)}
                  className="group cursor-pointer flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 select-none"
                >
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-xl md:text-2xl font-bold mb-1 transition-colors",
                      isExpanded ? "text-primary" : "text-foreground group-hover:text-foreground/80"
                    )}>
                      {work.subTitle}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className={isExpanded ? "text-primary" : ""} />
                        {work.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className={isExpanded ? "text-primary" : ""} />
                        Beijing
                      </span>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border",
                    isExpanded 
                      ? "bg-primary/10 border-primary/50 text-primary rotate-180" 
                      : "bg-muted/50 border-border text-muted-foreground group-hover:bg-muted"
                  )}>
                    <ChevronDown size={16} />
                  </div>
                </div>

                {/* Work Details (Collapsible) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="bg-card rounded-xl p-6 md:p-8 space-y-8 border border-border mb-8">
                        {(work.content as WorkContent[]).map((section, i) => (
                          <div key={i} className="space-y-4">
                            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                              <Briefcase size={18} className="text-primary" />
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mt-2.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. 教育与技能 - 双栏布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Education */}
        <div className="lg:col-span-5 space-y-8">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold flex items-center gap-3"
          >
            <GraduationCap className="text-primary" size={24} />
            <span>Education</span>
          </motion.h3>

          {education && (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-4"
             >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">重庆大学</h3>
                    <p className="text-primary">环境工程 | 本科</p>
                  </div>
                  <GraduationCap className="text-muted-foreground" size={32} />
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar size={14} />
                  {education.period}
                </p>
             </motion.div>
          )}
        </div>

        {/* Skills */}
        <div className="lg:col-span-7 space-y-8">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold flex items-center gap-3"
          >
            <Zap className="text-primary" size={24} />
            <span>Skills</span>
          </motion.h3>

          <div className="flex flex-wrap gap-3">
            {(skills?.content as SkillItem[]).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "px-4 py-2 rounded-lg border text-sm md:text-base transition-all cursor-default flex items-center gap-2",
                  getSkillColor(skill.level)
                )}
              >
                <Zap size={14} className="currentColor" />
                <span>{skill.name}</span>
                <span className="text-xs opacity-60 ml-1">({skill.level})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
