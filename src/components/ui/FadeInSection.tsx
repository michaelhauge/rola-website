'use client';

import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
};

export function FadeInSection({
  children,
  className,
  delay = 0,
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      transition={{
        duration: 0.4,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  );
}
