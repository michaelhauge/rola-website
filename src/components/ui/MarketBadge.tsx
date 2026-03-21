'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

type Market = 'veterinary' | 'hospital';

type MarketBadgeProps = {
  market: Market;
  className?: string;
};

export function MarketBadge({ market, className }: MarketBadgeProps) {
  const t = useTranslations('common');
  const label = market === 'veterinary' ? t('veterinary') : t('hospital');
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium',
        market === 'veterinary'
          ? 'bg-zinc-100 text-zinc-700'
          : 'bg-zinc-200 text-zinc-800',
        className
      )}
      aria-label={label}
    >
      {label}
    </span>
  );
}
