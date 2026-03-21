'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const navLinks = [
  { label: 'Why ROLA', href: '/why-rola' },
  { label: 'Our Story', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'For Clinics', href: '/for-clinics' },
  { label: 'For Distributors', href: '/for-distributors' },
  { label: 'Insights', href: '/news' },
] as const;

export function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleLocale() {
    const next = locale === 'en' ? 'zh' : 'en';
    router.replace(pathname, { locale: next });
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#acb3b8]/10">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" aria-label="ROLA International Home" className="flex items-center">
            <Image
              src="/images/rola-logo.png"
              alt="ROLA International"
              width={80}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-slate-500 hover:text-slate-800 transition-colors text-sm tracking-tight font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Language + CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="hidden sm:flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors text-xs font-medium uppercase tracking-widest px-2 py-1 rounded border border-[#acb3b8]/30"
            aria-label="Toggle language"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>language</span>
            <span>{locale === 'en' ? 'EN/中文' : '中文/EN'}</span>
          </button>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#5f5e5e] text-[#faf7f6] text-xs font-medium uppercase tracking-widest rounded transition-all hover:bg-[#535252]"
          >
            Contact Us
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#acb3b8]/20 px-8 py-6 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-600 hover:text-slate-900 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleLocale}
            className="w-fit flex items-center gap-1 text-slate-500 text-xs font-medium uppercase tracking-widest mt-2"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>language</span>
            <span>{locale === 'en' ? 'EN/中文' : '中文/EN'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
