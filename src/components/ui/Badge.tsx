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
          'bg-muted text-foreground border border-border': variant === 'default',
          'border border-border text-muted-foreground': variant === 'outline',
          'bg-foreground text-background': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  );
};
