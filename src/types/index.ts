export interface AboutCard {
  id: string;
  type: 'advantage' | 'education' | 'work' | 'skill';
  title: string;
  content: string[] | WorkContent[] | SkillItem[]; // Support complex content for work and skills
  period?: string;
  subTitle?: string; // For company name or school
}

export interface WorkContent {
  title: string;
  items: string[];
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface ArticleCard {
  id: string;
  category: 'news' | 'event' | 'interview' | 'product';
  title: string;
  excerpt: string;
  cover: string;
  link: string;
}

export interface VideoCard {
  id: string;
  title: string;
  cover: string;
  link: string;
}

export interface ProjectCard {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  description: string;
  responsibility: string[];
  achievement: string[];
  link?: string;
  images: string[]; // For gallery
}
