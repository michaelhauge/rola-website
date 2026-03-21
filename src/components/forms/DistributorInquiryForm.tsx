'use client';

const inputClass =
  'w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary';

const revenueRanges = [
  'Under $1M USD',
  '$1M – $5M USD',
  '$5M – $20M USD',
  '$20M – $50M USD',
  'Over $50M USD',
];

export function DistributorInquiryForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="company-name">
            Company Name
          </label>
          <input id="company-name" type="text" className={inputClass} placeholder="Meridian Vet Supplies" />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="dist-contact-name">
            Contact Name
          </label>
          <input id="dist-contact-name" type="text" className={inputClass} placeholder="James Okafor" />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="dist-email">
            Email
          </label>
          <input id="dist-email" type="email" className={inputClass} placeholder="james@meridianvet.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="dist-phone">
            Phone
          </label>
          <input id="dist-phone" type="tel" className={inputClass} placeholder="+44 20 0000 0000" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="country-region">
          Country / Region
        </label>
        <input id="country-region" type="text" className={inputClass} placeholder="United Kingdom / Western Europe" />
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="current-portfolio">
          Current Portfolio
        </label>
        <textarea
          id="current-portfolio"
          rows={3}
          className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Describe the brands and product categories you currently distribute..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="markets-served">
          Markets Served
        </label>
        <input id="markets-served" type="text" className={inputClass} placeholder="e.g. UK, Ireland, Benelux" />
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="revenue-range">
          Annual Revenue Range
        </label>
        <select
          id="revenue-range"
          className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select range</option>
          {revenueRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="dist-message">
          Message
        </label>
        <textarea
          id="dist-message"
          rows={5}
          className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us about your distribution network and why ROLA is a fit..."
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-on-background text-on-tertiary px-10 py-3 text-sm font-semibold transition-opacity hover:opacity-85"
      >
        Submit Distribution Inquiry
      </button>
    </form>
  );
}
