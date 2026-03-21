import { setRequestLocale } from 'next-intl/server';
import { DistributorInquiryForm } from '@/components/forms/DistributorInquiryForm';

type Props = { params: Promise<{ locale: string }> };

const differentiators = [
  {
    icon: 'workspace_premium',
    title: 'Premium Product Differentiation',
    description:
      "ROLA's human-grade manufacturing standards give your sales team a compelling, defensible story in every conversation.",
  },
  {
    icon: 'description',
    title: 'Complete Documentation',
    description:
      'Full regulatory dossiers, CE and ISO certificates, clinical data packages — everything needed for market entry and regulatory approval.',
  },
  {
    icon: 'groups',
    title: 'Partnership-First Approach',
    description:
      'We invest in our distributor relationships with training, co-marketing support, and dedicated account management.',
  },
];

const tiers = [
  {
    name: 'Regional Partner',
    description:
      'For established distributors with regional reach. Includes full product range access, regional exclusivity options, and quarterly business reviews.',
  },
  {
    name: 'National Distributor',
    description:
      'For country-level distribution with the scale to drive national market penetration. Includes dedicated account management and co-marketing budget.',
  },
  {
    name: 'Strategic Alliance',
    description:
      'For multi-country or strategic market distributors. Custom commercial terms, joint product development input, and executive relationship management.',
  },
];

const requirements = [
  'Established veterinary distribution network',
  'Regulatory capability in target markets',
  'Sales force with clinical/technical background',
  'Commitment to premium segment',
  'Financial stability and track record',
];

export default async function ForDistributorsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-on-background text-on-tertiary">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-outline-variant mb-4">
            For Distributors
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Partner With the Premium Standard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-outline-variant leading-relaxed">
            ROLA seeks distribution partners who share our commitment to quality and are positioned
            to grow the veterinary medical device market in their region.
          </p>
        </div>
      </section>

      {/* Why Distribute ROLA */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-14">
            Why ROLA is Different to Distribute
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant"
              >
                <span
                  className="material-symbols-outlined text-4xl text-primary mb-4 block"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <h3 className="text-lg font-semibold text-on-surface mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-32 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-14">Partnership Structure</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className="bg-surface rounded-2xl p-8 border border-outline-variant relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                  Tier {index + 1}
                </p>
                <h3 className="text-xl font-bold text-on-surface mb-4">{tier.name}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold text-on-surface mb-8">
                What We Look For in a Partner
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                ROLA distribution partnerships are built on mutual alignment — in quality
                standards, market positioning, and long-term commitment. We look for partners
                who already have the foundation to succeed.
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="text-on-surface">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant">
              <p className="text-xs uppercase tracking-widest text-secondary mb-4">
                Our Commitment to You
              </p>
              <h3 className="text-2xl font-bold text-on-surface mb-6">
                We invest when you invest.
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                ROLA does not treat distributors as order processors. When you commit to the
                ROLA brand in your market, we commit back — with onboarding training, regulatory
                documentation support, clinical education resources, and co-marketing campaigns.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Our regional account managers are measured on your success, not just on shipment
                volume. That alignment is what makes a ROLA partnership different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Inquiry Form */}
      <section className="py-32 bg-surface-container-low">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-4">
            Start a Distribution Conversation
          </h2>
          <p className="text-on-surface-variant mb-12">
            We review all distribution inquiries within 5 business days.
          </p>
          <DistributorInquiryForm />
        </div>
      </section>
    </div>
  );
}
