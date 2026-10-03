function RocketIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
function TrendingUpIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
function CrownIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18h18l-1.5-9-4.5 4-3-6-3 6-4.5-4L3 18z" />
    </svg>
  )
}
function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function PlusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  )
}
function DollarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
function PeopleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function LockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
function HeadsetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}
function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const plans = [
  {
    icon: RocketIcon,
    name: 'FOUNDATION',
    role: 'Dedicated Sourcer',
    badge: '1 – 3 Years Experience',
    price: '$1,700',
    originalPrice: '$1,900',
    bestFor: ['Candidate sourcing', 'Resume screening', 'Talent mapping', 'Pipeline building', 'Candidate engagement'],
    includesLabel: 'Includes',
    includes: ['Dedicated offshore Sourcer', 'KPI-driven performance tracking', 'Weekly reporting', 'Email & Chat support', 'US timezone alignment'],
    addOnsLabel: 'Optional Add-Ons',
    addOns: ['HRBP Support', 'Onboarding Support'],
    ideal: 'Staffing firms looking to increase candidate flow without increasing recruiter headcount.',
    highlight: false,
  },
  {
    icon: TrendingUpIcon,
    name: 'CATALYST',
    role: 'Dedicated Recruiter',
    badge: '3 – 7 Years Experience',
    price: '$2,060',
    originalPrice: '$2,375',
    bestFor: ['End-to-end recruiting', 'ATS management', 'Candidate screening', 'Client requirement fulfillment', 'Submission generation'],
    includesLabel: 'Includes Everything In Foundation',
    includes: ['Dedicated Recruiter', 'Advanced recruiting tools', 'Weekly QBRs', 'Priority support', 'Performance reviews'],
    addOnsLabel: 'Optional Bundle',
    addOns: ['Onboarding Support', 'Business Development Support'],
    addOnsNote: '(Each + $1,700)',
    ideal: 'Staffing firms seeking more submissions, placements, and delivery capacity.',
    highlight: true,
  },
  {
    icon: CrownIcon,
    name: 'APEX',
    role: 'Talent Acquisition SME',
    badge: '7+ Years Experience',
    price: '$2,420',
    originalPrice: '$2,750',
    bestFor: ['Strategic recruiting', 'Client-facing delivery', 'Team leadership', 'Niche hiring', 'Workforce planning'],
    includesLabel: 'Includes Everything In Catalyst',
    includes: ['Senior Talent Acquisition SME', 'Strategic hiring consultation', 'Dedicated account management', 'Custom reporting', 'Process optimization support'],
    bundleLabel: 'Full Talent Growth Bundle',
    bundleDesc: 'Recruitment + Onboarding + BD Support',
    bundlePrice: '$5,840',
    ideal: 'High-growth staffing firms requiring strategic recruiting leadership and scalable delivery.',
    highlight: false,
  },
]

const perks = [
  { icon: ShieldIcon, title: 'No Long-Term', sub: 'Contracts' },
  { icon: DollarIcon, title: 'All-Inclusive', sub: 'Pricing' },
  { icon: PeopleIcon, title: 'Scale Up', sub: 'or Down Anytime' },
  { icon: LockIcon, title: 'Cancel or Pause', sub: 'Anytime' },
  { icon: HeadsetIcon, title: '100% Satisfaction', sub: 'Commitment' },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-[10px] sm:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Simple. Transparent. <span className="text-brand-blue">Value-Driven.</span>
        </h2>
        <p className="mt-4 text-gray-600">Flexible investment plans designed to scale with your hiring goals.</p>
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
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold rounded-full px-4 py-1 whitespace-nowrap">
                PREFERRED PARTNER PLAN
              </span>
            )}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center mx-auto mb-4">
                <plan.icon className="w-7 h-7" />
              </div>
              <p className="font-extrabold text-xl text-brand-blue">{plan.name}</p>
              <p className="text-gray-700 font-medium mt-1">{plan.role}</p>
              <span className="inline-block mt-3 text-xs font-semibold text-brand-blue bg-blue-50 rounded-full px-3 py-1">
                {plan.badge}
              </span>
            </div>
            <div className="mt-5 text-center">
              <p className="text-3xl font-extrabold text-brand-blue">
                {plan.price} <span className="text-base font-semibold text-gray-500">/ month</span>
              </p>
              <p className="text-sm text-gray-400 line-through">{plan.originalPrice} / month</p>
            </div>

            <div className="mt-5 bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-bold text-brand-blue">Best For</p>
              <ul className="mt-2 space-y-1.5">
                {plan.bestFor.map((f) => (
                  <li key={f} className="text-sm text-gray-600">• {f}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-sm font-bold text-brand-blue">{plan.includesLabel}</p>
              <ul className="mt-2 space-y-1.5">
                {plan.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {plan.addOns && (
              <div className="mt-5">
                <p className="text-sm font-bold text-brand-blue">{plan.addOnsLabel}</p>
                <ul className="mt-2 space-y-1.5">
                  {plan.addOns.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <PlusIcon className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.addOnsNote && <p className="text-xs text-gray-400 mt-1">{plan.addOnsNote}</p>}
              </div>
            )}

            {plan.bundleLabel && (
              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-sm font-bold text-brand-blue">{plan.bundleLabel}</p>
                <p className="text-sm text-gray-600 mt-1">{plan.bundleDesc}</p>
                <p className="text-xl font-extrabold text-brand-blue mt-1">
                  {plan.bundlePrice} <span className="text-sm font-semibold text-gray-500">/ month</span>
                </p>
              </div>
            )}

            <div className="mt-5 border-t border-gray-100 pt-4 flex-grow">
              <p className="text-sm font-bold text-brand-blue">Ideal For</p>
              <p className="text-sm text-gray-600 mt-1">{plan.ideal}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-300 bg-gray-50 rounded-2xl p-6">
        {perks.map((p) => (
          <div key={p.title} className="flex items-center gap-3 lg:px-4">
            <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5" />
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
            <ShieldIcon className="w-6 h-6 text-brand-blue" />
          </span>
          <div>
            <p className="font-bold text-lg">One Flat Monthly Investment. Unlimited Growth Potential.</p>
            <p className="text-sm text-blue-100">
              No hiring headaches. No recruiter burnout. No long-term contracts. Just predictable
              recruiting capacity, measurable outcomes, and scalable growth.
            </p>
          </div>
        </div>

        <div className="hidden sm:block w-px h-12 bg-white/20 shrink-0" />

        <a
          href="#book-a-call"
          className="bg-white text-brand-blue font-semibold rounded-xl px-6 py-3 hover:bg-blue-50 transition-colors whitespace-nowrap inline-flex items-center gap-2"
        >
          Book a Free Strategy Call <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
