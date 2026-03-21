import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { getCaseStudyBySlug, caseStudiesEn } from '@/data/caseStudies';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudiesEn.map((c) => ({ locale, slug: c.slug }))
  );
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function CaseStudyDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('common');
  const caseStudy = getCaseStudyBySlug(slug, locale as 'en' | 'zh');
  if (!caseStudy) notFound();

  return (
    <>
      <Section variant="white" padding="lg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-zinc-500">
              {caseStudy.organization} · {caseStudy.location}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {caseStudy.title}
            </h1>
            <p className="mt-4 text-zinc-600">
              {caseStudy.summary}
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Product:{' '}
              <Link
                href={`/products/${caseStudy.productSlug}`}
                className="font-medium text-zinc-900 underline-offset-4 hover:underline"
              >
                {caseStudy.productUsed}
              </Link>
            </p>
          </div>
          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-zinc-100">
            <Image
              src={caseStudy.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </Container>
      </Section>

      <Section variant="grey" padding="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Challenge</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Solution</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Result</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                {caseStudy.result}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {caseStudy.testimonialQuote && (
        <Section variant="white" padding="lg">
          <Container>
            <blockquote className="rounded-2xl border border-zinc-200 bg-zinc-50 p-10">
              <p className="text-lg text-zinc-700">
                &ldquo;{caseStudy.testimonialQuote}&rdquo;
              </p>
              {caseStudy.testimonialAuthor && (
                <footer className="mt-6 font-medium text-zinc-900">
                  — {caseStudy.testimonialAuthor}
                </footer>
              )}
            </blockquote>
          </Container>
        </Section>
      )}

      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <Section variant="grey" padding="md">
          <Container>
            <h2 className="text-xl font-semibold text-zinc-900">Outcomes</h2>
            <div className="mt-6 flex flex-wrap gap-10">
              {caseStudy.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-semibold text-zinc-900">
                    {m.value}
                  </p>
                  <p className="text-sm text-zinc-600">{m.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section variant="white" padding="md">
        <Container>
          <Link
            href="/case-studies"
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            ← {t('readMore')} case studies
          </Link>
        </Container>
      </Section>
    </>
  );
}
