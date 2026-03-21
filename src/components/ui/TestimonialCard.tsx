import { cn } from '@/lib/utils';

export type TestimonialCardData = {
  quote: string;
  author: string;
  title: string;
  organization: string;
  image?: string;
};

type TestimonialCardProps = {
  testimonial: TestimonialCardData;
  className?: string;
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        'rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm',
        className
      )}
    >
      <p className="text-lg text-zinc-700">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-6">
        <p className="font-semibold text-zinc-900">{testimonial.author}</p>
        <p className="text-sm text-zinc-600">
          {testimonial.title}
          {testimonial.organization && `, ${testimonial.organization}`}
        </p>
      </footer>
    </blockquote>
  );
}
