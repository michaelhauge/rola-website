import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ContactForm } from '@/components/forms/ContactForm';

type Props = { params: Promise<{ locale: string }> };

const contactDetails = [
  {
    icon: 'location_on',
    label: 'Headquarters',
    value: 'No. 88 Innovation Road, Suzhou Industrial Park, Jiangsu Province, China 215000',
  },
  {
    icon: 'email',
    label: 'Email',
    value: 'info@rolainternational.com',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+86 512 8888 0000',
  },
  {
    icon: 'schedule',
    label: 'Business Hours',
    value: 'Monday – Friday, 9:00 AM – 6:00 PM CST',
  },
];

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-outline mb-4">Contact</p>
          <h1 className="text-5xl font-bold text-on-surface leading-tight max-w-2xl">
            Let&apos;s Start a Conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-on-surface-variant leading-relaxed">
            Whether you&apos;re a clinic looking to optimize your supply chain or a distributor
            seeking to add premium veterinary devices to your portfolio, we&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* LEFT: Form */}
            <div>
              <h2 className="text-2xl font-bold text-on-surface mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* RIGHT: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-on-surface mb-10">Reach Us Directly</h2>

              <div className="space-y-8">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span
                      className="material-symbols-outlined text-2xl text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{item.label}</p>
                      <p className="mt-0.5 text-sm text-on-surface-variant leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clinic inquiry box */}
              <div className="mt-10 rounded-xl bg-surface-container-low border border-outline-variant p-6">
                <p className="text-sm font-semibold text-on-surface mb-2">For Clinic Inquiries</p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Looking to stock ROLA products? Visit our Clinic Portal for pricing, ordering, and
                  clinical support.
                </p>
                <Link
                  href="/for-clinics"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  Visit Clinic Portal
                  <span className="material-symbols-outlined text-base ml-1" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Distributor inquiry box */}
              <div className="mt-4 rounded-xl bg-surface-container-low border border-outline-variant p-6">
                <p className="text-sm font-semibold text-on-surface mb-2">
                  For Distribution Inquiries
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Interested in representing ROLA in your market? Our distribution team is ready to
                  discuss partnership opportunities.
                </p>
                <Link
                  href="/for-distributors"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  Learn About Distribution
                  <span className="material-symbols-outlined text-base ml-1" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
