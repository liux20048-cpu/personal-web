import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
}

export const Badge = ({ children, className, variant = 'default' }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        {
          'bg-primary/20 text-primary border border-primary/20': variant === 'default',
          'border border-white/20 text-white/60': variant === 'outline',
          'bg-white/10 text-white': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  );
};
