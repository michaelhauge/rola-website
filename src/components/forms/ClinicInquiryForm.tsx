'use client';

const inputClass =
  'w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary';

export function ClinicInquiryForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="clinic-name">
            Clinic Name
          </label>
          <input id="clinic-name" type="text" className={inputClass} placeholder="Greenfield Veterinary Hospital" />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="contact-name">
            Contact Name
          </label>
          <input id="contact-name" type="text" className={inputClass} placeholder="Dr. Sarah Chen" />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="clinic-email">
            Email
          </label>
          <input id="clinic-email" type="email" className={inputClass} placeholder="sarah@greenfield.vet" />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="clinic-phone">
            Phone
          </label>
          <input id="clinic-phone" type="tel" className={inputClass} placeholder="+1 555 000 0000" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="city-country">
          City / Country
        </label>
        <input id="city-country" type="text" className={inputClass} placeholder="Amsterdam, Netherlands" />
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="clinic-type">
          Clinic Type
        </label>
        <select
          id="clinic-type"
          className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select clinic type</option>
          <option value="general">General Practice</option>
          <option value="specialist">Specialist</option>
          <option value="emergency">Emergency</option>
          <option value="academic">Academic</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="volume">
          Monthly Volume Estimate
        </label>
        <input id="volume" type="text" className={inputClass} placeholder="e.g. 50–100 procedures per month" />
      </div>
      <div>
        <label className="block text-sm font-medium text-on-surface mb-2" htmlFor="clinic-message">
          Message
        </label>
        <textarea
          id="clinic-message"
          rows={5}
          className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us about your clinic and what you're looking for..."
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary text-on-primary px-10 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
      >
        Submit Clinic Application
      </button>
    </form>
  );
}
