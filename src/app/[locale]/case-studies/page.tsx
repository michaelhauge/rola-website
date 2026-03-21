import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { caseStudiesEn, caseStudiesZh } from '@/data/caseStudies';

type Props = { params: Promise<{ locale: string }> };

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const tCaseStudies = await getTranslations('caseStudies');
  const caseStudies = locale === 'zh' ? caseStudiesZh : caseStudiesEn;

  const cards = caseStudies.map((c) => ({
    slug: c.slug,
    title: c.title,
    summary: c.summary,
    image: c.image,
    organization: c.organization,
    productUsed: c.productUsed,
    market: c.market,
  }));

  return (
    <>
      <Section variant="white" padding="lg">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {t('caseStudies')}
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600">
            {tCaseStudies('description')}
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
