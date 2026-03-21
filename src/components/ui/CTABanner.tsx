import { Link } from '@/i18n/navigation';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

type CTABannerProps = {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref?: string;
  variant?: 'default' | 'dark';
  className?: string;
};

export function CTABanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref = '/contact',
  variant = 'default',
  className,
}: CTABannerProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={cn(
        'py-20 sm:py-28',
        isDark ? 'bg-zinc-900' : 'bg-zinc-50',
        className
      )}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={cn(
              'text-2xl font-semibold sm:text-3xl',
              isDark ? 'text-white' : 'text-zinc-900'
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                'mt-4 text-base',
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              )}
            >
              {subtitle}
            </p>
          )}
          <div className="mt-8">
            <Link
              href={ctaHref}
              className={cn(
                'inline-flex rounded-full px-6 py-3 text-sm font-semibold transition-colors',
                isDark
                  ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800'
              )}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
