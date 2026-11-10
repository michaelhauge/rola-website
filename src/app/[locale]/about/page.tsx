import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

const milestones = [
  {
    year: '2018',
    title: 'Founded',
    description:
      'ROLA International established with a mission to bridge the gap in veterinary medical device quality.',
  },
  {
    year: '2019',
    title: 'First Products',
    description:
      'Launched our first IBPM and CVC product lines, validated through clinical trials with veterinary partners.',
  },
  {
    year: '2021',
    title: 'Cleanroom Expansion',
    description:
      'Completed Class 7 cleanroom expansion to support GMP manufacturing at scale.',
  },
  {
    year: '2023',
    title: 'International Distribution',
    description:
      'Established distributor partnerships across Southeast Asia, Europe, and the Middle East.',
  },
  {
    year: '2025',
    title: 'Product Portfolio Growth',
    description:
      'Expanded to ET Tube and Chest Drainage product lines, completing our critical care portfolio.',
  },
];

const values = [
  {
    icon: 'clinical_notes',
    title: 'Clinical First',
    description:
      "Every decision — from material selection to packaging design — starts with the question: does this make the clinician's job easier and the patient's outcome better?",
  },
  {
    icon: 'engineering',
    title: 'Engineering Rigor',
    description:
      'We apply human medical device manufacturing standards to veterinary products, because patients — regardless of species — deserve that level of care.',
  },
  {
    icon: 'public',
    title: 'Global Reach',
    description:
      'From our manufacturing base in China, we supply veterinary clinics and hospitals across Asia, Europe, and beyond — with the quality consistency that international markets demand.',
  },
];

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-on-background text-on-tertiary">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-outline-variant mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Closing the Gap Between Veterinary and Human Medicine.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-outline-variant leading-relaxed">
            ROLA International was founded on a belief — that veterinary patients deserve the same
            quality of medical instrumentation as their human counterparts.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/7469226/pexels-photo-7469226.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="ROLA founding team in the lab"
                className="w-full rounded-xl grayscale object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-outline mb-4">
                Founded 2018
              </p>
              <h2 className="text-4xl font-bold text-on-surface leading-snug">
                Born from Clinical Frustration
              </h2>
              <p className="mt-6 text-on-surface-variant leading-relaxed">
                Our founding team — a group of veterinary surgeons and medical device engineers —
                were tired of the compromise. Adapting human instruments that weren&apos;t built for
                veterinary anatomy. Sourcing from suppliers who didn&apos;t understand clinical
                workflow. The result was always the same: suboptimal outcomes, frustrated clinicians,
                and animals that deserved better.
              </p>
              <p className="mt-4 text-on-surface font-semibold text-lg">
                So we built ROLA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-14">What Drives Us</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded-2xl p-8 border border-outline-variant"
              >
                <span
                  className="material-symbols-outlined text-4xl text-primary mb-4 block"
                  aria-hidden="true"
                >
                  {value.icon}
                </span>
                <h3 className="text-lg font-semibold text-on-surface mb-3">{value.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-16">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant ml-[3.5rem]" />
            <div className="space-y-12">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-8 items-start">
                  <div className="relative z-10 flex flex-col items-center shrink-0 w-28">
                    <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-surface mt-1" />
                    <span className="mt-2 text-sm font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-on-surface">{milestone.title}</h3>
                    <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-on-surface mb-8">
            Meet the team behind ROLA
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/team"
              className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-outline text-on-surface px-8 py-3 text-sm font-semibold transition-colors hover:bg-surface-container-high"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
