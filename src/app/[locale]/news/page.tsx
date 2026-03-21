import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

const gridArticles = [
  {
    slug: 'airway-management-success',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFSM6-L8ymCw_z2-nzcVNbPMEg8swNCSA4cbIXWV-TO1mhFssxBwf3ryXDioV5q0eSNefrqpR3f4CgvoXQmZnM7sHenMuqub_aNgxYbuVsm9a-E_yKAGi76hDyYTzBjBAOX_wK1cXU91XqDmydj7waOLUz_wHV6BmVh1B9Gdsi4Y1AloX4Dto90NEE-3HGPbdJ97xhIdqTV-kpH51xO4F0ONf2dyknOBrddDE-PVXGR0xkAn31bMajADuIEfAt68dIpmZXeXMTM0Q',
    tag: 'Case Study',
    title: 'Critical Airway Management: A Success Story',
    excerpt:
      'How ROLA ET Tubes optimized emergency ventilation in a high-risk thoracic procedure at a leading veterinary hospital.',
    date: 'July 2025',
  },
  {
    slug: 'sterility-by-design',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsAzm_jU8m0SnNGQKcbXiFMuWcFrR9X7qkEJU8wZusAhsvyuMVYspGW0-f2CaY9X_9Dms8QvN9jOjweOnFZfkVsvAJu9F-RZhnC0czjkDpLgkpEvi1l-9HQvJ-_aBCvhLz6tMs1XIgtchIxu8wOPaDq_F5F4MFRXvfe94w4zIGxQ3eKW3zAXYTnYl84SmosUWIhk7CFVB9oInKqwBr8dVXp12nAQqK94Q9DBBikp1_AYcZdEADx5cH74A_wxeM-AHjdAB_FcCTQjQ',
    tag: 'Innovation',
    title: 'Sterility by Design: The ROLA Packaging Ethos',
    excerpt:
      'Redefining the opening experience to maintain field sterility in fast-paced surgical environments.',
    date: 'June 2025',
  },
  {
    slug: 'ibpm-second-generation',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7trO1lxASfwV5UzvqZpIGIv8oeIw92kBvJdiF_5IBADWT3ldza1OzkfdrNVut9Wi_5xsFvBHQtBkbjuJgqJgypWUbNiyAeTK9iqytBXUCKAWOt_A5OdlTcjyd1rWx2GO1JCIT8-Y-Ys4HchxhX64e2XBzephQ9PtOg1Pd-9smXZA7Hbgd7rWU5KWgmcQF7jMyhGNaaj2_ohfs59oH7uUHLLA69Qc3dYcKfRkg1H8_ZAKPVQJtUTzMHLRb0QSs0XUqxRZ_kqQ6w',
    tag: 'Product Update',
    title: 'The IBPM System: Second Generation Improvements',
    excerpt:
      'What changed in the latest IBPM generation and why it matters for clinical hemodynamic monitoring.',
    date: 'May 2025',
  },
  {
    slug: 'a-second-chance-for-rover',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5KilyjMdiBHHB6X8IFhSMZA9-zy2Dm82V9qg_yCnrI3sTN6EkvXn0hI_ZDDAwtBoldZjSQ1bvSSrWOVt6SxUefenSFeyalYecyQ69BckYRBanp9fzNzJ0hJqxw_aK_2DxhxvnHyRtBJgFiNPbnOC6C-rQd22xG1qvy5rlJi0_TCMuYD3ltRKfJmNy8Ro0rIrOAkwXYe-d9Y_9F0a8wNxcyDa6tTMtmuS3pvNQJaZtmogZa2ZrXEAD03tVGYOyNmv0V5ySdWnQmAw',
    tag: 'Case Study',
    title: 'A Second Chance for Rover: Chest Drainage in Practice',
    excerpt:
      'A touching case of a Golden Retriever\'s recovery following emergency thoracic intervention.',
    date: 'April 2025',
  },
  {
    slug: 'future-of-sterile-airway-management',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBvbEJhkyGJXZUmYieFU8n3WgJFygrdn43Wu-oT0xfZ5o2mb2oCrq8hTAa7468cChugWr5I-74YBK37WU6fyyHZeUU08LFYhlfpaJ4T6aEw8DUM3snPtKOEDPibt7Q-khNl-2o43aLoYYU1vxNEY453nHXFoDmvP7oXtYQ-HR0H4okTT0gn8H7q7OTmubrQtTLPdewhUVgq_WZZ6YT6JVsZFld1EKDx3jm0FPtm8Kbo3Oef_3YuB5CokeXdTA2uHLEC0At8KZOuyY',
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMosQYTmYs6ySx8GdL0NNch4wn0dEjLYc3JvtoCenswrmTxJDKxDHxkZZgARzmHrM2GFDnUxCmuZRqCPVERLuE4r8T7RGpZopL3ykjV24hKM-7vULp1XFu7XYUjoMlf4I2I0GfzTRfvOMUZTCzXlf0dET8EcTJIOzgTdy0-3YLN7WJO_EoDFd2sKLvpAoeRIPtOw6sh6lrxNVZjqUwCOTt7ynTMIk4ZXypc1Qc35LGJ3_rL5FCpD9UVIx2w7fXYsBbzhQWfoUT8uo"
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
