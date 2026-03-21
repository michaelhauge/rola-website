import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  title?: string;
  className?: string;
};

export function ProcessSteps({
  steps,
  title,
  className,
}: ProcessStepsProps) {
  return (
    <div className={cn('', className)}>
      <Container>
        {title && (
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            {title}
          </h2>
        )}
        <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
            <div
              key={step.title}
              className="relative flex flex-1 flex-col sm:flex-row sm:items-start sm:gap-6"
            >
              {i < steps.length - 1 && (
                <div
                  className="absolute left-6 top-14 hidden h-0.5 w-[calc(100%-3rem)] bg-zinc-200 sm:left-[calc(1.5rem+24px)] sm:top-8 sm:block sm:h-auto sm:w-0.5 sm:self-stretch"
                  aria-hidden
                />
              )}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="mt-4 sm:mt-0">
                <p className="text-sm font-medium text-zinc-500">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
              </div>
            </div>
          );
          })}
        </div>
      </Container>
    </div>
  );
}
