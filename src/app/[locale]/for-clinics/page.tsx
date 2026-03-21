import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ClinicInquiryForm } from '@/components/forms/ClinicInquiryForm';

type Props = { params: Promise<{ locale: string }> };

const benefits = [
  {
    icon: 'payments',
    title: 'Tiered Clinic Pricing',
    description:
      'Volume-based pricing tiers mean costs decrease as your clinic grows — with no hidden fees or minimum orders.',
  },
  {
    icon: 'support_agent',
    title: 'Dedicated Clinical Support',
    description:
      'Every clinic account includes access to our clinical support team for training, troubleshooting, and product guidance.',
  },
  {
    icon: 'local_shipping',
    title: 'Simplified Replenishment',
    description:
      'Our streamlined ordering system ensures you never run low on critical supplies — with reliable delivery and inventory tracking.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Submit an Inquiry',
    description:
      'Complete our clinic inquiry form and our team will respond within 24 hours to discuss your needs.',
  },
  {
    number: '02',
    title: 'Receive a Custom Quote',
    description:
      'Based on your clinic size and anticipated volumes, we\'ll prepare a tailored pricing proposal.',
  },
  {
    number: '03',
    title: 'Set Up Your Account',
    description:
      'Once approved, you\'ll receive access to our clinic portal for easy online ordering and account management.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'Our clinical support team is always available to assist with product training, documentation, and supply planning.',
  },
];

const products = [
  {
    slug: 'ibpm',
    tag: 'Critical Monitoring',
    name: 'IBPM System',
    description:
      'Invasive blood pressure monitoring system with clinical-grade accuracy for real-time hemodynamic assessment during critical procedures.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcT3W-cdzELEx_Pfli0X6kLYmPK2I1jcua8BA4iyv96-bpgcOke81ajlbUO8jykRA3QInwgMEsKIHZq1QtVxQ-wcbpvvmZR6Ml6hr-t22yvgMrgCGesZPQOgn78bcxH7f5LpXbxZfGM1lCcMCWjQDPKlt33Bb3NbyeeRx_qgDn9wXj3bSaAJkopx_5s5Z9lzq9R6qZT04muMFIEd7rQlzyT1gR9x83ydAJl066bAfgVIfi8NrF4IEWtflkuAeVHwXuY1GvW1ZCFcg',
    href: '/products/ibpm',
  },
  {
    slug: 'cvc',
    tag: 'Vascular Access',
    name: 'CVC Kits',
    description:
      'Central venous catheter kits optimized for anatomical variance across veterinary species, from small companion animals to large breeds.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2HtcRcxMVVDhcc4c05uPWjNi1367lhIf7CYAxkJkC9DGqtWnSOCEYtialBsu5yFkFD3EHDG8egcANmAw55IpiJ1fcGWvfl2KbOKdth1mPJDVJYcgO72PNCIVMm_kwEnU6ceFS9DMNfKfnJi-jyLrLAvMC4h-51--pWFz3BlhMdyxxi7F_0Yj76KWcXexefLU-OwyBswQ-ZooZqCvtSgJPWjE97jnpHMF3mukSDAF4ijkcG3NU6APuF6p5N7lLT_YyPRw6_cKnmBY',
    href: '/products/cvc',
  },
  {
    slug: 'endotracheal',
    tag: 'Airway Management',
    name: 'ET Tubes',
    description:
      'High-flow, low-trauma endotracheal tubes engineered for reliable airway management across the full spectrum of veterinary patient sizes.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMnEKJtHMl3SbU7cskEJLPkD-YENTmI1YXpA2wKJBV_7jLP2K7jRQXs1pn1SNILmtTE2ZB_uD1DhGN9nvV0M4Sq4TVhVOBAEazEb_ikKfwRYhFSTVQmi2SIgO7BDn5buWG7qLyhRQ_C8eunrDgzyK0F55llMwV_xRTP2-afqWTJkIN-7eu4QyzWfiJAFetWfYGbKPmir8YSslbRp2Ll05Z0pIONgeT6Rbn4ioP3qW3U5zXDiFBPDhbOAbBKHHr0bLjuAntiB9ubLw',
    href: '/products/endotracheal',
  },
  {
    slug: 'chest-drainage',
    tag: 'Thoracic Care',
    name: 'Chest Drainage',
    description:
      'Integrated thoracic drainage kits for efficient management of pleural effusion and pneumothorax in critical veterinary patients.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-61S3_tmV8Ez1zXHVgBGdoe8KsmjH_t8Z9X0la120w0mvedQeUVeef-gJny-GkrePxJVhDoyh2StH4y9_FvPDrHXc-OrmfrgezL9pgXo3H2YUmeUIB0ZCxwGTSneVkQq3KsvI75cd2zdepvmueaI5wpE2FQXV-iiazxPxBcQOWZ8swb9vqerbs160G8mMF5SbRHlF3HRQE3k12JmJFzMvQJSbQ8DffGtq1imM5NOAUPbI8p3fhk3OkcFkrMhrnRFfdt51OxJm7N0',
    href: '/products/chest-drainage',
  },
];

export default async function ForClinicsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-4">
            For Clinics
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-on-surface leading-tight max-w-4xl">
            Equip Your Clinic with Confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-on-surface-variant leading-relaxed">
            ROLA supplies veterinary clinics directly with clinical-grade devices at transparent
            pricing — with the support to match.
          </p>
        </div>
      </section>

      {/* Why Buy Direct */}
      <section className="py-32 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-14">What Clinic Partners Get</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-surface rounded-2xl p-8 border border-outline-variant"
              >
                <span
                  className="material-symbols-outlined text-4xl text-primary mb-4 block"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </span>
                <h3 className="text-lg font-semibold text-on-surface mb-3">{benefit.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-16">Getting Started is Simple</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <p className="text-5xl font-bold text-outline-variant mb-4">{step.number}</p>
                <h3 className="text-lg font-semibold text-on-surface mb-3">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-14">Products Available for Clinics</h2>
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
                  <h3 className="text-2xl font-bold text-on-surface mb-3">{product.name}</h3>
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

      {/* Clinic Inquiry Form */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-4">Apply for a Clinic Account</h2>
          <p className="text-on-surface-variant mb-12">
            Our team will respond within 1–2 business days.
          </p>
          <ClinicInquiryForm />
        </div>
      </section>
    </div>
  );
}
