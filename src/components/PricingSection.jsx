const plans = [
  {
    icon: '✈️',
    name: 'STARTER',
    desc: 'Perfect for small teams getting started.',
    price: '$1,295',
    features: ['Dedicated offshore recruiter', 'Standard tools & reporting', 'Email & Chat support'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    icon: '⭐',
    name: 'GROWTH',
    desc: 'Ideal for growing teams that need more.',
    price: '$1,695',
    features: ['All Starter features', 'Advanced tools & analytics', 'Priority support', 'Performance reviews'],
    cta: 'Get Started',
    highlight: true,
  },
  {
    icon: '🚀',
    name: 'ENTERPRISE',
    desc: 'Built for scaling teams with complex needs.',
    price: '$2,195+',
    features: ['All Growth features', 'Custom integrations', 'Dedicated account manager', 'Custom reporting & SLAs'],
    cta: 'Contact Us',
    highlight: false,
  },
]

const perks = [
  { icon: '🛡️', title: 'No Long-Term', sub: 'Contracts' },
  { icon: '💲', title: 'All-Inclusive', sub: 'Pricing' },
  { icon: '👥', title: 'Scale Up', sub: 'or Down Anytime' },
  { icon: '🔒', title: 'Cancel or Pause', sub: 'Anytime' },
  { icon: '🎧', title: '100% Satisfaction', sub: 'Commitment' },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Simple. Transparent. <span className="text-brand-blue">Value-Driven.</span>
        </h2>
        <p className="mt-4 text-gray-600">Flexible pricing that scales with your hiring goals.</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-6 flex flex-col ${
              plan.highlight ? 'border-brand-blue shadow-lg sm:-mt-4 sm:mb-[-1rem]' : 'border-gray-100 shadow-sm'
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold rounded-full px-4 py-1">
                MOST POPULAR
              </span>
            )}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-3xl mx-auto mb-4">
                {plan.icon}
              </div>
              <p className="font-extrabold text-xl">{plan.name}</p>
              <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>
            </div>
            <div className="border-t border-gray-100 mt-5 pt-5 text-center">
              <p className="text-3xl font-extrabold text-brand-blue">{plan.price}</p>
              <p className="text-sm text-gray-500">per recruiter / month</p>
            </div>
            <ul className="mt-5 space-y-2 flex-grow">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-brand-blue">✅</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#book-a-call"
              className={`mt-6 text-center font-semibold rounded-xl py-3 transition-colors ${
                plan.highlight
                  ? 'bg-brand-blue text-white hover:bg-blue-700'
                  : 'border border-brand-blue text-brand-blue hover:bg-blue-50'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-300 bg-gray-50 rounded-2xl p-6">
        {perks.map((p) => (
          <div key={p.title} className="flex items-center gap-3 lg:px-4">
            <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg shrink-0">
              {p.icon}
            </span>
            <div>
              <p className="font-bold text-gray-900 text-sm">{p.title}</p>
              <p className="text-sm text-gray-500">{p.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-brand-blue p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
        <div className="flex items-center gap-4">
          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </span>
          <div>
            <p className="font-bold text-lg">One Flat Fee. Maximum Impact.</p>
            <p className="text-sm text-blue-100">No hidden fees. Just results.</p>
          </div>
        </div>

        <div className="hidden sm:block w-px h-12 bg-white/20 shrink-0" />

        <a
          href="#book-a-call"
          className="bg-white text-brand-blue font-semibold rounded-xl px-6 py-3 hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          📅 Book a Free Strategy Call →
        </a>
      </div>
    </section>
  )
}
