import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

const gridArticles = [
  {
    slug: 'airway-management-success',
    image: 'https://images.pexels.com/photos/7469226/pexels-photo-7469226.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Case Study',
    title: 'Critical Airway Management: A Success Story',
    excerpt:
      'How ROLA ET Tubes optimized emergency ventilation in a high-risk thoracic procedure at a leading veterinary hospital.',
    date: 'July 2025',
  },
  {
    slug: 'sterility-by-design',
    image: 'https://images.pexels.com/photos/159541/pexels-photo-159541.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Innovation',
    title: 'Sterility by Design: The ROLA Packaging Ethos',
    excerpt:
      'Redefining the opening experience to maintain field sterility in fast-paced surgical environments.',
    date: 'June 2025',
  },
  {
    slug: 'ibpm-second-generation',
    image: 'https://images.pexels.com/photos/6234610/pexels-photo-6234610.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Product Update',
    title: 'The IBPM System: Second Generation Improvements',
    excerpt:
      'What changed in the latest IBPM generation and why it matters for clinical hemodynamic monitoring.',
    date: 'May 2025',
  },
  {
    slug: 'a-second-chance-for-rover',
    image: '/images/chest-drainage-system.jpg',
    tag: 'Case Study',
    title: 'A Second Chance for Rover: Chest Drainage in Practice',
    excerpt:
      'A touching case of a Golden Retriever\'s recovery following emergency thoracic intervention.',
    date: 'April 2025',
  },
  {
    slug: 'future-of-sterile-airway-management',
    image: 'https://images.pexels.com/photos/27107874/pexels-photo-27107874.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Innovation',
    title: 'The Future of Sterile Airway Management in Veterinary Practice',
    excerpt:
      'How advances in ET tube design are changing the standard of care for veterinary airway management.',
    date: 'March 2025',
  },
];

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-4">Insights</p>
          <h1 className="text-5xl md:text-6xl font-bold text-on-surface leading-tight max-w-4xl">
            Clinical Knowledge. Product Innovation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-on-surface-variant leading-relaxed">
            Research summaries, product updates, clinical case studies, and expert perspectives
            from the ROLA clinical community.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant">
            <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6235230/pexels-photo-6235230.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="CVC Placement Accuracy in Small Breeds"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary-container px-3 py-1 rounded-full mb-5">
                VET TECH
              </span>
              <h2 className="text-3xl font-bold text-on-surface leading-snug mb-4">
                Improving CVC Placement Accuracy in Small Breeds
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                A clinical review of technique optimization and device selection for central venous
                access in feline and small canine patients...
              </p>
              <p className="text-sm text-outline mb-6">August 2025</p>
              <Link
                href="/news/cvc-placement-accuracy"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-opacity"
              >
                Read Article
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-on-surface mb-12">Latest Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gridArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary-container px-3 py-1 rounded-full mb-4">
                    {article.tag}
                  </span>
                  <h3 className="text-lg font-bold text-on-surface mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-outline">{article.date}</span>
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:opacity-70 transition-opacity"
                    >
                      Read
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
