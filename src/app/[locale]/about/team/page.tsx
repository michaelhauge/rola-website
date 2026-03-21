import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

const leadership = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5KilyjMdiBHHB6X8IFhSMZA9-zy2Dm82V9qg_yCnrI3sTN6EkvXn0hI_ZDDAwtBoldZjSQ1bvSSrWOVt6SxUefenSFeyalYecyQ69BckYRBanp9fzNzJ0hJqxw_aK_2DxhxvnHyRtBJgFiNPbnOC6C-rQd22xG1qvy5rlJi0_TCMuYD3ltRKfJmNy8Ro0rIrOAkwXYe-d9Y_9F0a8wNxcyDa6tTMtmuS3pvNQJaZtmogZa2ZrXEAD03tVGYOyNmv0V5ySdWnQmAw',
    name: 'Dr. Chen Wei',
    title: 'Co-Founder & Chief Medical Officer',
    bio: 'Board-certified veterinary surgeon with 18 years of clinical practice. Dr. Chen leads our clinical development program and global advisory board relationships.',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBvbEJhkyGJXZUmYieFU8n3WgJFygrdn43Wu-oT0xfZ5o2mb2oCrq8hTAa7468cChugWr5I-74YBK37WU6fyyHZeUU08LFYhlfpaJ4T6aEw8DUM3snPtKOEDPibt7Q-khNl-2o43aLoYYU1vxNEY453nHXFoDmvP7oXtYQ-HR0H4okTT0gn8H7q7OTmubrQtTLPdewhUVgq_WZZ6YT6JVsZFld1EKDx3jm0FPtm8Kbo3Oef_3YuB5CokeXdTA2uHLEC0At8KZOuyY',
    name: 'James Liu',
    title: 'Co-Founder & CEO',
    bio: 'Former senior engineer at a leading human medical device company. James brings 15 years of manufacturing excellence and regulatory expertise to ROLA\'s product development.',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMosQYTmYs6ySx8GdL0NNch4wn0dEjLYc3JvtoCenswrmTxJDKxDHxkZZgARzmHrM2GFDnUxCmuZRqCPVERLuE4r8T7RGpZopL3ykjV24hKM-7vULp1XFu7XYUjoMlf4I2I0GfzTRfvOMUZTCzXlf0dET8EcTJIOzgTdy0-3YLN7WJO_EoDFd2sKLvpAoeRIPtOw6sh6lrxNVZjqUwCOTt7ynTMIk4ZXypc1Qc35LGJ3_rL5FCpD9UVIx2w7fXYsBbzhQWfoUT8uo',
    name: 'Sarah Park',
    title: 'VP of Global Business Development',
    bio: 'With a decade of experience in veterinary market expansion across Asia-Pacific and Europe, Sarah leads ROLA\'s distributor network and strategic partnerships.',
  },
];

const advisors = [
  {
    name: 'Prof. Liu Mingzhi',
    specialty: 'Veterinary Surgery, Beijing Agricultural University',
  },
  {
    name: 'Dr. Yuki Tanaka',
    specialty: 'Small Animal Internal Medicine, Tokyo VCA',
  },
  {
    name: 'Dr. Maria Santos',
    specialty: 'Veterinary Anesthesiology, Seoul National University',
  },
  {
    name: 'Dr. Ahmed Al-Rashid',
    specialty: 'Exotic Animal Medicine, Dubai Veterinary Hospital',
  },
  {
    name: 'Dr. Emma Fischer',
    specialty: 'Veterinary Oncology, University of Zurich',
  },
  {
    name: 'Dr. Priya Nair',
    specialty: 'Critical Care Veterinary, Singapore General Animal Hospital',
  },
];

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-outline mb-4">Our Team</p>
          <h1 className="text-5xl font-bold text-on-surface leading-tight max-w-3xl">
            The Minds Behind the Mission.
          </h1>
          <p className="mt-6 max-w-2xl text-on-surface-variant leading-relaxed">
            A cross-disciplinary team of veterinary surgeons, biomedical engineers, and global
            business professionals united by a shared belief: veterinary medicine deserves better.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-14">Leadership</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl border border-outline-variant bg-surface"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-on-surface">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
                  <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-on-surface mb-4">Clinical Advisory Board</h2>
          <p className="max-w-2xl text-on-surface-variant leading-relaxed mb-14">
            ROLA&apos;s products are shaped by a network of practicing veterinary surgeons and
            specialists from leading animal hospitals across Asia and Europe.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="rounded-xl bg-surface border border-outline-variant p-6"
              >
                <p className="font-semibold text-on-surface">{advisor.name}</p>
                <p className="mt-1 text-sm text-on-surface-variant">{advisor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-24 bg-on-background text-on-tertiary">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="max-w-xl mx-auto text-outline-variant leading-relaxed mb-10">
            We&apos;re always looking for passionate professionals who believe veterinary medicine
            deserves the best.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
