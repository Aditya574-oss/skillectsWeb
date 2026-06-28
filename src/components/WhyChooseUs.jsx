const reasons = [
  {
    title: 'Results That Matter',
    desc: 'Proven strategies that drive more placements, higher margins, and maximum ROI.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <line x1="20" y1="4" x2="15" y2="9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Built For Recruiting Firms',
    desc: 'Everything we do is designed specifically for staffing and recruiting businesses.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Risk-Free Partnership',
    desc: 'No long-term contracts. Scale up or down anytime with complete flexibility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Expert Support Every Step',
    desc: 'Get dedicated support from recruiting experts who care about your success.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: 'Scalable For Growth',
    desc: 'From pilot to scale, we grow with you and your business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
      </svg>
    ),
  },
  {
    title: 'Transparency You Can Trust',
    desc: 'Clear communication, honest reporting, and complete visibility at every step.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about-us" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Why Choose <span className="text-brand-blue">SKILLECTS?</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-md">
              We're more than a solution — we're{' '}
              <span className="font-semibold text-brand-blue">your growth partner</span>. Here's
              what sets us apart.
            </p>
          </div>

          <div className="hidden lg:flex">
            <div className="w-full h-full min-h-[180px] rounded-2xl bg-white flex items-center justify-center text-6xl">
              🧑‍🤝‍🧑
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-3xl text-brand-blue mb-2">"</p>
            <p className="text-gray-700">
              "SKILLECTS has completely transformed how we scale our recruitment business. The
              results speak for themselves."
            </p>
            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="font-bold text-brand-blue">Mark Richardson</p>
              <p className="text-sm text-gray-400">Founder, ProLink Staffing</p>
              <p className="text-yellow-400 mt-1">★★★★★</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                {r.icon}
              </div>
              <p className="font-bold text-gray-900">{r.title}</p>
              <div className="w-8 h-1 bg-brand-blue rounded mt-2 mb-3" />
              <p className="text-sm text-gray-500">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-blue p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
                <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4z" />
                <path d="M7 5H4a2 2 0 0 0 2 4M17 5h3a2 2 0 0 1-2 4" />
              </svg>
            </span>
            <div>
              <p className="font-bold text-lg">Your Success Is Our Mission</p>
              <p className="text-sm text-blue-100">
                Join hundreds of recruiting firms that trust{' '}
                <span className="font-semibold">SKILLECTS</span> to scale smarter and grow
                faster.
              </p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-14 bg-white/20 shrink-0" />

          <div className="text-center sm:text-left sm:pl-3">
            <p className="text-sm text-blue-100 mb-2">Ready to take the next step?</p>
            <a
              href="#book-a-call"
              className="inline-block bg-white text-brand-blue font-semibold rounded-full px-6 py-3 hover:bg-blue-50 transition-colors"
            >
              Book Your Free Strategy Call →
            </a>
            <p className="text-xs text-blue-100 mt-2">
              📅 It's free. It's strategic. It could change everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
