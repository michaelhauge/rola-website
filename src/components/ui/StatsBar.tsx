import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

export type StatItem = {
  value: string;
  label: string;
};

type StatsBarProps = {
  stats: StatItem[];
  variant?: 'light' | 'dark';
  className?: string;
};

export function StatsBar({
  stats,
  variant = 'light',
  className,
}: StatsBarProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'py-12 sm:py-16',
        isDark ? 'bg-zinc-900' : 'bg-zinc-50',
        className
      )}
    >
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className={cn(
                  'text-2xl font-semibold sm:text-3xl',
                  isDark ? 'text-white' : 'text-zinc-900'
                )}
              >
                {stat.value}
              </p>
              <p
                className={cn(
                  'mt-1 text-sm',
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                )}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
