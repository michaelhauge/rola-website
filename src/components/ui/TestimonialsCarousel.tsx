'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import type { TestimonialCardData } from '@/components/ui/TestimonialCard';
import { cn } from '@/lib/utils';

type TestimonialsCarouselProps = {
  testimonials: TestimonialCardData[];
  className?: string;
};

export function TestimonialsCarousel({ testimonials, className }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const hasMultiple = testimonials.length > 1;

  if (!current) return null;

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden">
        <TestimonialCard testimonial={current} />
      </div>
      {hasMultiple && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-zinc-500">
            {index + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
