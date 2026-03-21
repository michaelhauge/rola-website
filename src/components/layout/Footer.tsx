import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

const productLinks = [
  { label: 'IBPM Systems', href: '/products/ibpm' },
  { label: 'CVC Kits', href: '/products/cvc' },
  { label: 'ET Tubes', href: '/products/endotracheal' },
  { label: 'Chest Drainage', href: '/products/chest-drainage' },
];

const companyLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'For Clinics', href: '/for-clinics' },
  { label: 'For Distributors', href: '/for-distributors' },
  { label: 'Insights', href: '/news' },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-20 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <Link href="/" className="mb-4 block">
            <Image
              src="/images/rola-logo.png"
              alt="ROLA International"
              width={60}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
          <p className="text-slate-500 text-xs tracking-wide leading-relaxed">
            Defining the next generation of veterinary medical technology with clinical precision and unwavering reliability.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-4">
          <h5 className="text-slate-900 font-bold text-xs tracking-wide">Products</h5>
          <ul className="space-y-3">
            {productLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-slate-500 text-xs tracking-wide hover:text-slate-900 underline-offset-4 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h5 className="text-slate-900 font-bold text-xs tracking-wide">Company</h5>
          <ul className="space-y-3">
            {companyLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-slate-500 text-xs tracking-wide hover:text-slate-900 underline-offset-4 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h5 className="text-slate-900 font-bold text-xs tracking-wide">Newsletter</h5>
          <p className="text-slate-500 text-xs tracking-wide">Clinical updates and product releases.</p>
          <NewsletterForm />
        </div>
      </div>

      {/* Copyright bar */}
      <div className="px-8 py-8 border-t border-slate-100 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-xs tracking-wide">
          © {new Date().getFullYear()} ROLA International. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-600 text-xs tracking-wide hover:text-slate-900">Privacy Policy</a>
          <a href="#" className="text-slate-600 text-xs tracking-wide hover:text-slate-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
