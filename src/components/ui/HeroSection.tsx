import { Link } from '@/i18n/navigation';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional background image path (from /images/) */
  image?: string;
  /** Size variant */
  size?: 'default' | 'large';
  className?: string;
};

export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref = '/contact',
  image,
  size = 'default',
  className,
}: HeroSectionProps) {
  const isLarge = size === 'large';

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        image ? 'bg-zinc-100' : 'bg-white',
        isLarge ? 'py-24 sm:py-32' : 'py-16 sm:py-24',
        className
      )}
    >
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
      )}
      <Container className="relative">
        <div className={cn('max-w-3xl', isLarge && 'max-w-4xl')}>
          <h1
            className={cn(
              'font-semibold tracking-tight text-zinc-900',
              isLarge ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                'mt-4 text-zinc-600',
                isLarge ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              )}
            >
              {subtitle}
            </p>
          )}
          {ctaLabel && (
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
