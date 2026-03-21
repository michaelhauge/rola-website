import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

const features = [
  {
    icon: 'air',
    title: 'High-Flow Design',
    description:
      'Large inner diameter relative to outer diameter maximizes air flow while minimizing airway resistance during mechanical ventilation.',
  },
  {
    icon: 'layers',
    title: 'Low Trauma',
    description:
      'Smooth, beveled tip with low-pressure high-volume cuff minimizes mucosal trauma during intubation and extended use.',
  },
  {
    icon: 'straighten',
    title: 'Size Range',
    description:
      'Available in 2.5 mm to 14 mm internal diameter to cover the full range of veterinary patients from rabbits to large dogs.',
  },
];

const specs = [
  { name: 'ID Range', value: '2.5 mm – 14.0 mm (0.5 mm increments)' },
  { name: 'Cuff Type', value: 'High-Volume Low-Pressure (HVLP)' },
  { name: 'Tube Length', value: '25–36 cm (size dependent)' },
  { name: 'Material', value: 'Medical-Grade PVC' },
  { name: 'Murphy Eye', value: 'Yes (≥3.5 mm ID)' },
  { name: 'Pilot Balloon', value: 'Yes (spring-loaded valve)' },
  { name: 'Sterilization', value: 'EO (Ethylene Oxide)' },
  { name: 'Shelf Life', value: '5 Years' },
];

const applications = [
  { icon: 'vaccines', label: 'General Anesthesia' },
  { icon: 'emergency', label: 'Emergency Intubation' },
  { icon: 'respiratory_rate', label: 'Mechanical Ventilation' },
  { icon: 'health_and_safety', label: 'Airway Protection' },
];

export default async function EndotrachealPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-0 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center pb-24">
            {/* Left */}
            <div>
              <p className="text-xs uppercase tracking-widest text-outline mb-4">
                Airway Management
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-on-surface leading-tight mb-6">
                Endotracheal Tubes
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                High-flow, low-trauma airway management solutions designed for the full spectrum of
                veterinary patients.
              </p>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-on-secondary bg-secondary px-3 py-1 rounded-full mb-8">
                Full Size Range
              </span>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Request Information
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-outline text-on-surface px-8 py-3 text-sm font-semibold transition-colors hover:bg-surface-container-high"
                >
                  Download Spec Sheet
                </a>
              </div>
            </div>
            {/* Right */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo--CZJBYF3iHA?auto=format&fit=crop&w=1200&q=80"
                alt="Endotracheal Tubes"
                className="w-full rounded-xl grayscale object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-outline mb-4">Key Features</p>
          <h2 className="text-4xl font-bold text-on-surface mb-14">
            Designed for Safer Airways
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface rounded-2xl p-8 border border-outline-variant"
              >
                <span
                  className="material-symbols-outlined text-4xl text-primary mb-4 block"
                  aria-hidden="true"
                >
                  {feature.icon}
                </span>
                <h3 className="text-lg font-semibold text-on-surface mb-3">{feature.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-outline mb-4">
            Technical Data
          </p>
          <h2 className="text-4xl font-bold text-on-surface mb-14">
            Specifications
          </h2>
          <div className="max-w-2xl">
            <div className="rounded-2xl overflow-hidden border border-outline-variant">
              {specs.map((spec, index) => (
                <div
                  key={spec.name}
                  className={`flex items-center justify-between px-6 py-4 ${
                    index % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'
                  }`}
                >
                  <span className="text-sm font-medium text-on-surface-variant">{spec.name}</span>
                  <span className="text-sm font-semibold text-on-surface text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-24 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-outline mb-4">
            Where It&apos;s Used
          </p>
          <h2 className="text-4xl font-bold text-on-surface mb-14">
            Clinical Applications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((app) => (
              <div
                key={app.label}
                className="bg-surface rounded-2xl p-8 text-center border border-outline-variant"
              >
                <span
                  className="material-symbols-outlined text-4xl text-primary mb-4 block"
                  aria-hidden="true"
                >
                  {app.icon}
                </span>
                <p className="text-sm font-semibold text-on-surface">{app.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-16 bg-on-background text-on-tertiary">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl font-bold text-on-tertiary">
            Ready to Order or Learn More?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-on-tertiary text-on-background px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            >
              Request Information
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-outline-variant text-on-tertiary px-8 py-3 text-sm font-semibold transition-colors hover:bg-surface/10"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
