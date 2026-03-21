import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

const principles = [
  {
    icon: 'biotech',
    title: 'Evidence-Based Design',
    description:
      'Every component of our technology undergoes rigorous clinical validation before entering production cycles.',
  },
  {
    icon: 'verified_user',
    title: 'Precision Integrity',
    description:
      'Tolerance levels are kept within medical-grade thresholds to ensure absolute reliability in surgical environments.',
  },
  {
    icon: 'diversity_3',
    title: 'Collaborative Insight',
    description:
      'We maintain an open feedback loop with practicing veterinarians to refine usability in high-stress clinical scenarios.',
  },
  {
    icon: 'public',
    title: 'Global Standardization',
    description:
      'Uniform quality standards across all territories, ensuring a ROLA instrument performs identically regardless of geography.',
  },
];

const partners = [
  { label: 'Clinical Partner', name: 'VET-TECH INST.' },
  { label: 'Research Affiliate', name: 'BIO-GEN SURGICAL' },
  { label: 'Supply Strategic', name: 'PRECISION LOGICS' },
  { label: 'Global Compliance', name: 'MED-CERT INT.' },
];

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="relative px-8 pt-48 pb-24 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-secondary text-xs uppercase tracking-[0.2em] mb-6 block font-bold">
            Leadership
          </span>
          <h1 className="text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-on-surface mb-8">
            Visionary Leadership in Veterinary Medtech.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
            ROLA International is led by Erica Chang, an industry expert dedicated to redefining
            the standards of animal healthcare through precision instrumentation and strategic
            clinical excellence.
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="px-8 py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-surface-container rounded-lg">
                <img
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujgjghdeypBDBkyvjz0BJOwPab-yd8hwDQNg-_RyPwukngWQ51N-2txfdCuhg7dTUwh7i2jLhe5Bgq3F_nxson8WSpFdhlVeVMVH0vzaAQ0AnNRaFXGW_9Brg-LQhoaGLVQmGvj1Jz_dEMQJEUmwF97rXs2d4geM1gJxlXtq3_4aP8WJ1A5SD-RH7AzjJ0M1Wm7LKw2OyzaKVm3jgQeHKVEjJg-v7jF9wIOxxjHjl6giW5K70DX4OQnGy0pDleSJu1fMO4PQbA6-w"
                  alt="Erica Chang — Founder and CEO of ROLA International"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">
                  Erica Chang
                </h2>
                <p className="text-secondary font-bold text-xl mb-8">Founder, CEO</p>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                  <p>
                    With over 20 years of experience at the intersection of medical strategy and
                    finance, Erica Chang brings a unique multi-disciplinary perspective to ROLA
                    International. Her career is built on a foundation of operational excellence and
                    strategic growth within the healthcare sector, having held key leadership roles
                    at industry-defining organizations including Cemma Medical, CooperVision, and
                    Charles Schwab.
                  </p>
                  <p>
                    Erica holds an MBA from the University of San Francisco (USF), where she honed
                    her expertise in navigating complex global markets. Her vision for ROLA is rooted
                    in bringing medical-grade precision to the veterinary field, ensuring that animal
                    healthcare providers have access to the same technological rigor found in human
                    medicine.
                  </p>
                  <p>
                    Beyond her professional achievements, Erica is a deeply committed advocate for
                    animal welfare. She is a long-term volunteer at Muttville Senior Dog Rescue, a
                    commitment that informs her empathetic approach to developing technology that
                    improves the quality of life for animals in their most critical moments.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary px-8 py-3 rounded-lg font-medium text-sm hover:bg-primary-dim transition-all"
                >
                  Get in Touch
                </Link>
                <a
                  href="#"
                  className="border border-outline-variant text-on-surface px-8 py-3 rounded-lg font-medium text-sm hover:bg-surface-container transition-all"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="px-8 py-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-6">
              Our Clinical Discipline.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Under Erica&apos;s leadership, we operate at the intersection of medical necessity
              and engineering excellence. Our values are protocols of precision.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
              >
                <span
                  className="material-symbols-outlined text-secondary text-3xl mb-4 block"
                  aria-hidden="true"
                >
                  {p.icon}
                </span>
                <h4 className="font-bold text-lg mb-3 text-on-surface">{p.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-8 py-24 bg-on-surface text-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Built with Veterinary Collaboration
              </h2>
              <p className="text-outline-variant text-lg">
                Our strategic partners and institutions working alongside Erica to redefine animal
                health.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-surface text-on-surface px-8 py-3 rounded-lg font-medium text-sm hover:bg-surface-container-high transition-colors"
            >
              Partner with ROLA
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center p-8 border border-white/10 rounded-lg"
              >
                <span className="text-xs tracking-widest uppercase text-outline-variant mb-4 font-bold">
                  {partner.label}
                </span>
                <div className="font-bold text-xl tracking-tighter">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
