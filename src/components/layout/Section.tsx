import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Background: 'white' | 'grey' | 'black' */
  variant?: 'white' | 'grey' | 'black';
  /** Vertical padding size */
  padding?: 'sm' | 'md' | 'lg';
};

const paddingMap = {
  sm: 'py-16 sm:py-20',
  md: 'py-20 sm:py-28',
  lg: 'py-24 sm:py-32',
};

const variantMap = {
  white: 'bg-white',
  grey: 'bg-zinc-50',
  black: 'bg-zinc-900 text-white',
};

export function Section({
  children,
  className,
  variant = 'white',
  padding = 'md',
}: SectionProps) {
  return (
    <section
      className={cn(
        variantMap[variant],
        paddingMap[padding],
        className
      )}
    >
      {children}
    </section>
  );
}
