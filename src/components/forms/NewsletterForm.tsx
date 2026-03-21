'use client';

export function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex border border-slate-200 rounded overflow-hidden">
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-transparent border-none text-xs px-3 py-2 focus:outline-none focus:ring-0"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="bg-[#5f5e5e] px-4 py-2 text-white flex items-center"
        aria-label="Subscribe"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
      </button>
    </form>
  );
}
