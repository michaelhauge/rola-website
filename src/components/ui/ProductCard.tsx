import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { MarketBadge } from '@/components/ui/MarketBadge';
import { cn } from '@/lib/utils';

export type ProductCardData = {
  slug: string;
  name: string;
  description: string;
  image: string;
  markets: Array<'veterinary' | 'hospital'>;
};

type ProductCardProps = {
  product: ProductCardData;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
        className={cn(
        'group block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5',
        className
      )}
    >
      <div className="relative aspect-[4/3] bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          {product.markets.map((m) => (
            <MarketBadge key={m} market={m} />
          ))}
        </div>
        <h3 className="text-lg font-semibold text-zinc-900">{product.name}</h3>
        <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
          {product.description}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-zinc-900 underline-offset-4 group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
