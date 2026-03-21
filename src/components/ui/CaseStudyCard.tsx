import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { MarketBadge } from '@/components/ui/MarketBadge';
import { cn } from '@/lib/utils';

export type CaseStudyCardData = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  organization: string;
  productUsed?: string;
  market: 'veterinary' | 'hospital';
};

type CaseStudyCardProps = {
  caseStudy: CaseStudyCardData;
  className?: string;
};

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className={cn(
        'group block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5',
        className
      )}
    >
      <div className="relative aspect-video bg-zinc-100">
        <Image
          src={caseStudy.image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <MarketBadge market={caseStudy.market} className="mb-2" />
        <h3 className="text-lg font-semibold text-zinc-900">{caseStudy.title}</h3>
        <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
          {caseStudy.summary}
        </p>
        {caseStudy.productUsed && (
          <p className="mt-2 text-xs text-zinc-500">{caseStudy.productUsed}</p>
        )}
        <span className="mt-4 inline-block text-sm font-medium text-zinc-900 underline-offset-4 group-hover:underline">
          Read case study →
        </span>
      </div>
    </Link>
  );
}
