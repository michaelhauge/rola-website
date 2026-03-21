'use client';

const inputClass =
  'border border-outline-variant rounded-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-primary bg-surface text-on-surface placeholder:text-on-surface-variant';

export function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-on-surface mb-1.5">
            First Name
          </label>
          <input id="first-name" name="first_name" type="text" placeholder="Jane" className={inputClass} />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-on-surface mb-1.5">
            Last Name
          </label>
          <input id="last-name" name="last_name" type="text" placeholder="Smith" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-on-surface mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@clinic.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-on-surface mb-1.5">
          Phone <span className="text-on-surface-variant font-normal">(optional)</span>
        </label>
        <input id="contact-phone" name="phone" type="tel" placeholder="+1 234 567 8900" className={inputClass} />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-on-surface mb-1.5">
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          placeholder="Clinic or company name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="inquiry-type" className="block text-sm font-medium text-on-surface mb-1.5">
          Inquiry Type
        </label>
        <select id="inquiry-type" name="inquiry_type" className={inputClass}>
          <option value="">Select an inquiry type</option>
          <option value="clinic-product">Clinic — Product Inquiry</option>
          <option value="distributor-partnership">Distributor — Partnership</option>
          <option value="general">General Inquiry</option>
          <option value="technical-support">Technical Support</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-on-surface mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us how we can help…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary text-on-primary px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
      >
        Send Message
      </button>
    </form>
  );
}
