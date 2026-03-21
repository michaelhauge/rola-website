import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        {/* Background image */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0UtugO1fAeWo0HzRawjjESEvNJTePlAregpmpibF2MF0FJJlMONY5euldHkglIsdZbFJg7uvgxwvrI0_CpP7P_3_vLf39tNNljOSdgHLvVoIzguoQthEiJhwfIqgAQ9yeDvWWW5_ZAOseWxXEws-osXtey-lXOkKfhwPrk6JRqU_zGC12L6ScUVPH2jadNCPSvRraDHEe5_Pv2f5ssTo7TgPOx8muvyMTlOl9qrhfl6ZOupECFYCLpTj4Xe-JG70jYbQrQypxUSo"
          alt=""
          aria-hidden
          className="grayscale-image absolute inset-0 h-full w-full object-cover brightness-90 contrast-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" aria-hidden />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-16">
          <div className="max-w-2xl">
            <h1
              className="font-bold leading-[1.05] tracking-tight text-on-surface"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
            >
              Purpose-Built Devices for Clinical Confidence
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-on-surface-variant max-w-xl">
              ROLA designs reliable veterinary medical devices that help clinics and professionals deliver safer, more efficient, more precise care.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-on-primary transition-opacity hover:opacity-90"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-surface-container-highest px-8 py-4 text-sm font-semibold tracking-wide text-on-surface transition-opacity hover:opacity-90"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-surface-container-low py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-0 sm:divide-x sm:divide-outline-variant/30">
            {[
              { icon: 'clinical_notes', label: 'Veterinary-Focused Design' },
              { icon: 'verified_user', label: 'Clinical-Grade Quality' },
              { icon: 'sanitizer', label: 'Sterile Single-Use Options' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 px-10">
                <span className="material-symbols-outlined text-2xl text-secondary" aria-hidden>
                  {icon}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-on-surface">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ROLA ── */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Precision Engineering
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-on-surface md:text-5xl">
            Defined by clinical insight and medical rigor.
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: 'biotech',
                title: 'Designed with Insight',
                body: 'Our devices are born in the surgical theater, co-developed with leading veterinary surgeons to solve real-world clinical challenges.',
              },
              {
                icon: 'shield',
                title: 'Uncompromising Quality',
                body: 'Manufacturing discipline that meets human medical standards, adapted for the unique physiological needs of veterinary patients.',
              },
              {
                icon: 'stream',
                title: 'Workflow Efficiency',
                body: 'Streamlined sterile packaging and intuitive ergonomics ensure that your focus remains on the patient, not the instrumentation.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10"
              >
                <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden>
                  {icon}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-on-surface">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-32 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                Portfolio
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-on-surface md:text-5xl">
                Advanced Critical Care Solutions.
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden items-center gap-2 text-sm font-medium text-on-surface-variant underline-offset-4 hover:text-on-surface hover:underline sm:flex"
            >
              View All Products
              <span className="material-symbols-outlined text-base" aria-hidden>arrow_forward</span>
            </Link>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'IBPM System',
                badge: 'New Generation',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcT3W-cdzELEx_Pfli0X6kLYmPK2I1jcua8BA4iyv96-bpgcOke81ajlbUO8jykRA3QInwgMEsKIHZq1QtVxQ-wcbpvvmZR6Ml6hr-t22yvgMrgCGesZPQOgn78bcxH7f5LpXbxZfGM1lCcMCWjQDPKlt33Bb3NbyeeRx_qgDn9wXj3bSaAJkopx_5s5Z9lzq9R6qZT04muMFIEd7rQlzyT1gR9x83ydAJl066bAfgVIfi8NrF4IEWtflkuAeVHwXuY1GvW1ZCFcg',
                desc: 'Invasive blood pressure monitoring with clinical-grade accuracy.',
                href: '/products/ibpm',
              },
              {
                name: 'CVC Kits',
                badge: null,
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2HtcRcxMVVDhcc4c05uPWjNi1367lhIf7CYAxkJkC9DGqtWnSOCEYtialBsu5yFkFD3EHDG8egcANmAw55IpiJ1fcGWvfl2KbOKdth1mPJDVJYcgO72PNCIVMm_kwEnU6ceFS9DMNfKfnJi-jyLrLAvMC4h-51--pWFz3BlhMdyxxi7F_0Yj76KWcXexefLU-OwyBswQ-ZooZqCvtSgJPWjE97jnpHMF3mukSDAF4ijkcG3NU6APuF6p5N7lLT_YyPRw6_cKnmBY',
                desc: 'Advanced venous access optimized for anatomical variance.',
                href: '/products/cvc',
              },
              {
                name: 'ET Tubes',
                badge: null,
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMnEKJtHMl3SbU7cskEJLPkD-YENTmI1YXpA2wKJBV_7jLP2K7jRQXs1pn1SNILmtTE2ZB_uD1DhGN9nvV0M4Sq4TVhVOBAEazEb_ikKfwRYhFSTVQmi2SIgO7BDn5buWG7qLyhRQ_C8eunrDgzyK0F55llMwV_xRTP2-afqWTJkIN-7eu4QyzWfiJAFetWfYGbKPmir8YSslbRp2Ll05Z0pIONgeT6Rbn4ioP3qW3U5zXDiFBPDhbOAbBKHHr0bLjuAntiB9ubLw',
                desc: 'High-flow, low-trauma airway management solutions.',
                href: '/products/endotracheal',
              },
              {
                name: 'Chest Drainage',
                badge: null,
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-61S3_tmV8Ez1zXHVgBGdoe8KsmjH_t8Z9X0la120w0mvedQeUVeef-gJny-GkrePxJVhDoyh2StH4y9_FvPDrHXc-OrmfrgezL9pgXo3H2YUmeUIB0ZCxwGTSneVkQq3KsvI75cd2zdepvmueaI5wpE2FQXV-iiazxPxBcQOWZ8swb9vqerbs160G8mMF5SbRHlF3HRQE3k12JmJFzMvQJSbQ8DffGtq1imM5NOAUPbI8p3fhk3OkcFkrMhrnRFfdt51OxJm7N0',
                desc: 'Integrated kits for efficient thoracic fluid management.',
                href: '/products/chest-drainage',
              },
            ].map(({ name, badge, img, desc, href }) => (
              <Link key={name} href={href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-lowest">
                  <img
                    src={img}
                    alt={name}
                    className="grayscale-image absolute inset-0 h-full w-full object-cover brightness-90 contrast-110 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/10 to-transparent" />
                  {/* Badge */}
                  {badge && (
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-on-secondary">
                        {badge}
                      </span>
                    </div>
                  )}
                  {/* Content — slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-6 p-6 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-base font-semibold text-on-tertiary">{name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-on-tertiary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-on-tertiary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn more
                      <span className="material-symbols-outlined text-sm" aria-hidden>arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant underline-offset-4 hover:text-on-surface hover:underline"
            >
              View All Products
              <span className="material-symbols-outlined text-base" aria-hidden>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Editorial Brand ── */}
      <section className="py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7trO1lxASfwV5UzvqZpIGIv8oeIw92kBvJdiF_5IBADWT3ldza1OzkfdrNVut9Wi_5xsFvBHQtBkbjuJgqJgypWUbNiyAeTK9iqytBXUCKAWOt_A5OdlTcjyd1rWx2GO1JCIT8-Y-Ys4HchxhX64e2XBzephQ9PtOg1Pd-9smXZA7Hbgd7rWU5KWgmcQF7jMyhGNaaj2_ohfs59oH7uUHLLA69Qc3dYcKfRkg1H8_ZAKPVQJtUTzMHLRb0QSs0XUqxRZ_kqQ6w"
                alt="ROLA device close-up"
                className="grayscale-image h-full w-full object-cover"
              />
            </div>
            {/* Right: text */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                Our Philosophy
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-on-surface md:text-5xl">
                Designed for Vets. Built for Better Care.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-on-surface-variant">
                Every ROLA product begins with a clinical problem — real challenges observed in surgical theaters alongside practicing veterinary professionals. We translate those insights into devices that perform when precision matters most.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { label: 'Ergonomic Precision', detail: 'Instruments shaped around how veterinarians actually work, reducing fatigue and improving control.' },
                  { label: 'Validated Outcomes', detail: 'Each product undergoes rigorous clinical testing before reaching market, ensuring predictable, reproducible results.' },
                ].map(({ label, detail }) => (
                  <li key={label} className="flex gap-4">
                    <span className="material-symbols-outlined mt-0.5 flex-shrink-0 text-xl text-secondary" aria-hidden>
                      check_circle
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{label}</p>
                      <p className="mt-0.5 text-sm text-on-surface-variant">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conversion Pathways ── */}
      <section className="py-32 bg-surface-container">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid gap-0 overflow-hidden rounded-2xl border border-outline-variant/20 lg:grid-cols-2">
            {/* Veterinary Clinics */}
            <div className="flex flex-col border-b border-outline-variant/20 lg:border-b-0 lg:border-r">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5KilyjMdiBHHB6X8IFhSMZA9-zy2Dm82V9qg_yCnrI3sTN6EkvXn0hI_ZDDAwtBoldZjSQ1bvSSrWOVt6SxUefenSFeyalYecyQ69BckYRBanp9fzNzJ0hJqxw_aK_2DxhxvnHyRtBJgFiNPbnOC6C-rQd22xG1qvy5rlJi0_TCMuYD3ltRKfJmNy8Ro0rIrOAkwXYe-d9Y_9F0a8wNxcyDa6tTMtmuS3pvNQJaZtmogZa2ZrXEAD03tVGYOyNmv0V5ySdWnQmAw"
                  alt="Veterinary clinic"
                  className="grayscale-image h-full w-full object-cover brightness-90"
                />
              </div>
              <div className="flex flex-1 flex-col bg-surface-container-lowest p-10">
                <h3 className="text-2xl font-bold text-on-surface">Veterinary Clinics</h3>
                <ul className="mt-6 space-y-3 flex-1">
                  {[
                    'Clinical-grade devices designed for veterinary anatomy',
                    'Single-use sterile options for every procedure',
                    'Dedicated clinical support and training',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined mt-0.5 flex-shrink-0 text-base text-secondary" aria-hidden>
                        check
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/for-clinics"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90 self-start"
                >
                  For Clinics
                  <span className="material-symbols-outlined text-base" aria-hidden>arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Distributors */}
            <div className="flex flex-col">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBvbEJhkyGJXZUmYieFU8n3WgJFygrdn43Wu-oT0xfZ5o2mb2oCrq8hTAa7468cChugWr5I-74YBK37WU6fyyHZeUU08LFYhlfpaJ4T6aEw8DUM3snPtKOEDPibt7Q-khNl-2o43aLoYYU1vxNEY453nHXFoDmvP7oXtYQ-HR0H4okTT0gn8H7q7OTmubrQtTLPdewhUVgq_WZZ6YT6JVsZFld1EKDx3jm0FPtm8Kbo3Oef_3YuB5CokeXdTA2uHLEC0At8KZOuyY"
                  alt="Distribution center"
                  className="grayscale-image h-full w-full object-cover brightness-90"
                />
              </div>
              <div className="flex flex-1 flex-col bg-surface-container-lowest p-10">
                <h3 className="text-2xl font-bold text-on-surface">Distributors</h3>
                <ul className="mt-6 space-y-3 flex-1">
                  {[
                    'Exclusive regional distribution partnerships available',
                    'Full product documentation and regulatory support',
                    'Co-marketing resources and clinical materials',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined mt-0.5 flex-shrink-0 text-base text-secondary" aria-hidden>
                        check
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/for-distributors"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90 self-start"
                >
                  For Distributors
                  <span className="material-symbols-outlined text-base" aria-hidden>arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality Standards ── */}
      <section className="py-32 bg-on-background text-on-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: stats */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-on-tertiary/60">
                Manufacturing Standards
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Built to the Highest Standard.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-on-tertiary/70">
                Every ROLA product is manufactured in our wholly-owned facility, under conditions that match or exceed human medical device requirements.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-8">
                {[
                  { value: 'Class 7', label: 'Cleanroom Manufacturing' },
                  { value: 'EO', label: 'Sterilization Validated' },
                  { value: '99.9%', label: 'Quality Consistency' },
                  { value: 'GMP', label: 'Standard Compliance' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-3xl font-bold tracking-tight">{value}</p>
                    <p className="mt-1 text-sm text-on-tertiary/60">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDif1Z0dEmNU5ddbarcB0BsbfQMzsFGAhWGVl_iREzxjz5Hr3oLiU-3N0lxTN0pnDA9JnViQzhNmY8fjdlo447m0mtS2XvCKumDAqGd5o2Yz64KxvWq0ZbBjA90OEYnOLXVbYszlQ3EPNYvDyxSqXJ6f33D4MJBia50R-npxuo_UZdsVC_tEdt2syVfRUAuPfJcAcxtjF53Mt7BSjLTyEQKH-2dFyBESvSEnygvTBim5Xmzz_HroKlOWCJ-Kn3_PjodEA0xc9jbrGg"
                alt="ROLA cleanroom manufacturing"
                className="grayscale-image h-full w-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights Preview ── */}
      <section className="py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Journal
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-on-surface md:text-5xl">
            Insights &amp; Innovations.
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMosQYTmYs6ySx8GdL0NNch4wn0dEjLYc3JvtoCenswrmTxJDKxDHxkZZgARzmHrM2GFDnUxCmuZRqCPVERLuE4r8T7RGpZopL3ykjV24hKM-7vULp1XFu7XYUjoMlf4I2I0GfzTRfvOMUZTCzXlf0dET8EcTJIOzgTdy0-3YLN7WJO_EoDFd2sKLvpAoeRIPtOw6sh6lrxNVZjqUwCOTt7ynTMIk4ZXypc1Qc35LGJ3_rL5FCpD9UVIx2w7fXYsBbzhQWfoUT8uo',
                tag: 'VET TECH • Aug 2025',
                title: 'Improving CVC placement accuracy in small breeds.',
                excerpt: 'Exploring the latest clinical techniques for central venous access in feline and small canine patients...',
                href: '/news/cvc-placement-accuracy',
              },
              {
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFSM6-L8ymCw_z2-nzcVNbPMEg8swNCSA4cbIXWV-TO1mhFssxBwf3ryXDioV5q0eSNefrqpR3f4CgvoXQmZnM7sHenMuqub_aNgxYbuVsm9a-E_yKAGi76hDyYTzBjBAOX_wK1cXU91XqDmydj7waOLUz_wHV6BmVh1B9Gdsi4Y1AloX4Dto90NEE-3HGPbdJ97xhIdqTV-kpH51xO4F0ONf2dyknOBrddDE-PVXGR0xkAn31bMajADuIEfAt68dIpmZXeXMTM0Q',
                tag: 'Case Study • July 2025',
                title: 'Success Story: Critical airway management.',
                excerpt: 'How ROLA ET Tubes optimized emergency ventilation in a high-risk thoracic procedure.',
                href: '/news/airway-management-success',
              },
              {
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsAzm_jU8m0SnNGQKcbXiFMuWcFrR9X7qkEJU8wZusAhsvyuMVYspGW0-f2CaY9X_9Dms8QvN9jOjweOnFZfkVsvAJu9F-RZhnC0czjkDpLgkpEvi1l-9HQvJ-_aBCvhLz6tMs1XIgtchIxu8wOPaDq_F5F4MFRXvfe94w4zIGxQ3eKW3zAXYTnYl84SmosUWIhk7CFVB9oInKqwBr8dVXp12nAQqK94Q9DBBikp1_AYcZdEADx5cH74A_wxeM-AHjdAB_FcCTQjQ',
                tag: 'Innovation • June 2025',
                title: 'Sterility by Design: The ROLA packaging ethos.',
                excerpt: 'Redefining the opening experience to maintain field sterility in fast-paced surgical environments.',
                href: '/news/sterility-by-design',
              },
            ].map(({ img, tag, title, excerpt, href }) => (
              <Link key={href} href={href} className="group block">
                <div className="overflow-hidden rounded-xl bg-surface-container-lowest">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="grayscale-image h-full w-full object-cover brightness-90 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-secondary">
                      {tag}
                    </p>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-on-surface group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                      {excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 bg-surface-container-low border-y border-outline-variant/10">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-16">
          <h2 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl">
            Ready to elevate your clinical standards?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
            >
              Request Product Information
            </Link>
            <Link
              href="/for-distributors"
              className="inline-flex items-center rounded-full border border-outline-variant bg-white px-8 py-4 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
            >
              Discuss Distribution
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
