import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: FeatureItem[];
  columns?: 3 | 4;
  className?: string;
};

export function FeatureGrid({
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  return (
    <div className={cn('', className)}>
      <Container>
        <div
          className={cn(
            'grid gap-8 sm:gap-12',
            columns === 3
              ? 'sm:grid-cols-2 lg:grid-cols-3'
              : 'sm:grid-cols-2 lg:grid-cols-4'
          )}
        >
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
