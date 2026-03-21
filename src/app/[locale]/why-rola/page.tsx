import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

export default async function WhyRolaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Why ROLA
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-on-surface md:text-7xl">
            The Standard You&apos;ve Been Waiting For.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            ROLA was built on a simple premise: veterinary professionals deserve the same precision instruments as human surgeons. We&apos;re closing that gap.
          </p>
        </div>
      </section>

      {/* ── The Problem We Solve ── */}
      <section className="py-32 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            The Gap We&apos;re Closing
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-on-surface md:text-5xl">
            Veterinary medicine deserves better devices.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant">
            For decades, veterinary clinics have relied on adapted human medical instruments or consumer-grade alternatives. The result is compromised precision, inconsistent outcomes, and frustrated clinicians.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: 'engineering',
                title: 'Human-Grade Standards',
                body: 'We manufacture to the same ISO and GMP standards required for human medical devices.',
              },
              {
                icon: 'clinical_notes',
                title: 'Vet-Specific Design',
                body: 'Every dimension, material, and ergonomic detail is optimized for veterinary anatomy and clinical workflows.',
              },
              {
                icon: 'verified',
                title: 'Validated Outcomes',
                body: 'Clinical data and field feedback drive every design iteration — we test until the outcomes speak for themselves.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10"
              >
                <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden>
                  {icon}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-on-surface">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROLA's Approach — 3 Pillars ── */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <h2 className="max-w-2xl text-4xl font-bold leading-tight text-on-surface md:text-5xl">
            Built Different, By Design.
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Co-Created with Clinicians',
                body: 'Our R&D process begins and ends with practicing veterinary surgeons. Every feature request, every pain point, every edge case is captured and solved before a product reaches market.',
              },
              {
                number: '02',
                title: 'Wholly-Owned Manufacturing',
                body: 'We don\u2019t outsource our manufacturing. Our Class 7 cleanroom facility ensures every product meets the same quality standards — batch after batch, year after year.',
              },
              {
                number: '03',
                title: 'Continuous Clinical Validation',
                body: 'We maintain ongoing partnerships with leading veterinary hospitals to validate product performance in real clinical environments, driving continuous improvement.',
              },
            ].map(({ number, title, body }) => (
              <div
                key={number}
                className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-10"
              >
                <p className="text-5xl font-bold tracking-tighter text-outline-variant/60">
                  {number}
                </p>
                <h3 className="mt-6 text-xl font-semibold text-on-surface">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-24 bg-on-background text-on-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {[
              { value: 'Class 7', label: 'Cleanroom Manufacturing' },
              { value: 'EO', label: 'Validated Sterilization' },
              { value: '99.9%', label: 'Quality Consistency' },
              { value: 'GMP', label: 'Standard Compliance' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-bold tracking-tight">{value}</p>
                <p className="mt-2 text-sm text-on-tertiary/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ROLA CTA ── */}
      <section className="py-32 bg-surface-container-low">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-16">
          <h2 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl">
            Ready to experience the ROLA difference?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-on-surface-variant">
            See the full range of devices engineered for veterinary professionals, or get in touch with our team to discuss your clinic&apos;s specific needs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
            >
              Explore Our Products
              <span className="material-symbols-outlined text-base" aria-hidden>arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-8 py-4 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
