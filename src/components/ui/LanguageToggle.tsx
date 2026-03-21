'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import { useTransition } from 'react';
import { cn } from '@/lib/utils';

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
] as const;

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as 'en' | 'zh' });
    });
  }

  return (
    <div
      className={cn(
        'flex items-center gap-0.5 rounded-full border border-zinc-200 bg-white p-0.5',
        className
      )}
      role="group"
      aria-label="Switch language"
    >
      <Globe className="ml-2 h-4 w-4 text-zinc-500" aria-hidden />
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          disabled={isPending}
          className={cn(
            'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
            locale === code
              ? 'bg-zinc-900 text-white'
              : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
          )}
          aria-pressed={locale === code}
          aria-label={code === 'en' ? 'English' : '中文'}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
