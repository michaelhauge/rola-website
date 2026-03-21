'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ProductCard } from '@/components/ui/ProductCard';
import type { ProductCardData } from '@/components/ui/ProductCard';
import { cn } from '@/lib/utils';

type MarketFilter = 'all' | 'veterinary' | 'hospital';

type ProductsGridProps = {
  products: ProductCardData[];
  className?: string;
};

export function ProductsGrid({ products, className }: ProductsGridProps) {
  const t = useTranslations('common');
  const [filter, setFilter] = useState<MarketFilter>('all');

  const filtered =
    filter === 'all'
      ? products
      : products.filter((p) => p.markets.includes(filter));

  const tabs: { value: MarketFilter; label: string }[] = [
    { value: 'all', label: t('all') },
    { value: 'veterinary', label: t('veterinary') },
    { value: 'hospital', label: t('hospital') },
  ];

  return (
    <div className={cn('', className)}>
      <div className="flex gap-2 border-b border-zinc-200">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setFilter(tab.value)}
            className={cn(
              'border-b-2 px-4 py-3 text-sm font-medium transition-colors',
              filter === tab.value
                ? 'border-zinc-900 text-zinc-900'
                : 'border-transparent text-zinc-600 hover:text-zinc-900'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
