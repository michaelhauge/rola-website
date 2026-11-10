import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

const products = [
  {
    slug: 'ibpm',
    tag: 'Critical Monitoring',
    name: 'IBPM System',
    description:
      'Invasive blood pressure monitoring system with clinical-grade accuracy for real-time hemodynamic assessment during critical procedures.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcT3W-cdzELEx_Pfli0X6kLYmPK2I1jcua8BA4iyv96-bpgcOke81ajlbUO8jykRA3QInwgMEsKIHZq1QtVxQ-wcbpvvmZR6Ml6hr-t22yvgMrgCGesZPQOgn78bcxH7f5LpXbxZfGM1lCcMCWjQDPKlt33Bb3NbyeeRx_qgDn9wXj3bSaAJkopx_5s5Z9lzq9R6qZT04muMFIEd7rQlzyT1gR9x83ydAJl066bAfgVIfi8NrF4IEWtflkuAeVHwXuY1GvW1ZCFcg',
    href: '/products/ibpm',
  },
  {
    slug: 'cvc',
    tag: 'Vascular Access',
    name: 'CVC Kits',
    description:
      'Central venous catheter kits optimized for anatomical variance across veterinary species, from small companion animals to large breeds.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2HtcRcxMVVDhcc4c05uPWjNi1367lhIf7CYAxkJkC9DGqtWnSOCEYtialBsu5yFkFD3EHDG8egcANmAw55IpiJ1fcGWvfl2KbOKdth1mPJDVJYcgO72PNCIVMm_kwEnU6ceFS9DMNfKfnJi-jyLrLAvMC4h-51--pWFz3BlhMdyxxi7F_0Yj76KWcXexefLU-OwyBswQ-ZooZqCvtSgJPWjE97jnpHMF3mukSDAF4ijkcG3NU6APuF6p5N7lLT_YyPRw6_cKnmBY',
    href: '/products/cvc',
  },
  {
    slug: 'endotracheal',
    tag: 'Airway Management',
    name: 'ET Tubes',
    description:
      'High-flow, low-trauma endotracheal tubes engineered for reliable airway management across the full spectrum of veterinary patient sizes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMnEKJtHMl3SbU7cskEJLPkD-YENTmI1YXpA2wKJBV_7jLP2K7jRQXs1pn1SNILmtTE2ZB_uD1DhGN9nvV0M4Sq4TVhVOBAEazEb_ikKfwRYhFSTVQmi2SIgO7BDn5buWG7qLyhRQ_C8eunrDgzyK0F55llMwV_xRTP2-afqWTJkIN-7eu4QyzWfiJAFetWfYGbKPmir8YSslbRp2Ll05Z0pIONgeT6Rbn4ioP3qW3U5zXDiFBPDhbOAbBKHHr0bLjuAntiB9ubLw',
    href: '/products/endotracheal',
  },
  {
    slug: 'chest-drainage',
    tag: 'Thoracic Care',
    name: 'Chest Drainage',
    description:
      'Integrated thoracic drainage kits for efficient management of pleural effusion and pneumothorax in critical veterinary patients.',
    image: '/images/chest-drainage-system.jpg',
    href: '/products/chest-drainage',
  },
];

const qualityStats = [
  { label: 'Manufacturing Environment', value: 'Class 7 Cleanroom' },
  { label: 'Sterilization Method', value: 'EO Sterilization' },
  { label: 'Quality Pass Rate', value: '99.9% Quality' },
  { label: 'Production Standard', value: 'GMP Compliance' },
];

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-outline mb-4">
            Product Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-on-surface leading-tight max-w-4xl">
            Advanced Critical Care Solutions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-on-surface-variant leading-relaxed">
            Each ROLA product is engineered to the same exacting standards as human medical devices
            — optimized for veterinary anatomy, clinical workflow, and consistent outcomes.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-32 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.slug}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary-container px-3 py-1 rounded-full mb-4">
                    {product.tag}
                  </span>
                  <h2 className="text-2xl font-bold text-on-surface mb-3">{product.name}</h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-opacity"
                  >
                    View Details
                    <span className="material-symbols-outlined text-base" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Bar */}
      <section className="py-24 bg-on-background text-on-tertiary">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-outline-variant mb-10 text-center">
            Manufacturing Standards
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-on-tertiary">{stat.value}</p>
                <p className="mt-2 text-sm text-outline-variant">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-on-surface mb-4">
            Need help selecting the right product?
          </h2>
          <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
            Our clinical team can help you identify the best fit for your procedure and patient
            population.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            >
              Talk to Our Team
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-outline text-on-surface px-8 py-3 text-sm font-semibold transition-colors hover:bg-surface-container-high"
            >
              Download Product Catalog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
