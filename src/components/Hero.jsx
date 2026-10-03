import heroTeam from '../assets/images/hero-team.jpg'

function CheckCircleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
      <polyline points="8 12 11 15 16 9" stroke="white" />
    </svg>
  )
}
function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
function TrendingUpIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
function PiggyBankIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 9V7a2 2 0 0 0-2-2h-1.1a5 5 0 0 0-9.8 0H5a2 2 0 0 0-2 2v3a3 3 0 0 0 2 2.83V16a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a4 4 0 0 0 2-3.5V9z" />
      <circle cx="16" cy="9" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IdCardIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="8" cy="12" r="2" />
      <line x1="14" y1="10" x2="19" y2="10" /><line x1="14" y1="14" x2="19" y2="14" />
    </svg>
  )
}
function ChartLineIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" />
    </svg>
  )
}
function LinkIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}
function ShieldCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  )
}
function RibbonIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" /><polyline points="8.5 13.5 7 22 12 19 17 22 15.5 13.5" />
    </svg>
  )
}
function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

const checkStats = [
  { label: 'Lower Costs', sub: 'Up to 60%' },
  { label: 'Faster Hiring', sub: '2X Delivery Speed' },
  { label: 'Better Results', sub: 'Higher Placements' },
]

const heroStats = [
  { icon: PeopleIcon, value: '17+', label: 'Staffing Firms Empowered' },
  { icon: TrendingUpIcon, value: '530+', label: 'Placements Enabled' },
  { icon: PiggyBankIcon, value: '65%+', label: 'Average Cost Savings' },
  { icon: ClockIcon, value: '2.5X', label: 'Faster Hiring Delivery' },
]

const engineBullets = [
  { icon: IdCardIcon, label: 'Dedicated Recruitment Pods' },
  { icon: PeopleIcon, label: 'Seamless Team Integration' },
  { icon: ChartLineIcon, label: 'Real-Time Visibility & Reporting' },
  { icon: LinkIcon, label: 'Scalable. Flexible. Reliable.' },
]

const trustItems = [
  { icon: ShieldCheckIcon, title: '100% Data Security', desc: 'Enterprise-grade security & NDA protected' },
  { icon: ClockIcon, title: '24x7 Support', desc: 'Always-on support from day one' },
  { icon: RibbonIcon, title: '10+ Years Expertise', desc: 'Deep experience in scaling staffing businesses' },
  { icon: StarIcon, title: 'Built for Staffing. Focused on Results.', desc: "We understand your business because we've been in it." },
]

export default function Hero() {
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-[10px] sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark leading-tight">
              Build Your Offshore<br />Recruitment Engine.
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-blue leading-tight mt-1">
              Without Building Your Overhead.
            </h2>
            <div className="w-14 h-1 rounded-full bg-brand-blue mt-4 mb-6" />

            <p className="text-gray-600 text-lg max-w-lg">
              Dedicated recruiting pods that integrate with your team, scale with your demand,
              and deliver measurable results.
            </p>

            <div className="flex flex-wrap gap-8 mt-7">
              {checkStats.map((c) => (
                <div key={c.label} className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm leading-tight">{c.label}</p>
                    <p className="text-sm text-gray-500 leading-tight">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#book-a-call"
                className="px-6 py-3.5 rounded-lg bg-brand-blue text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Book Free Strategy Call <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href="#build-pod"
                className="px-6 py-3.5 rounded-lg border border-brand-blue text-brand-blue font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Build Your Recruiting Pod <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-100 shadow-md bg-white p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-gray-100">
              {heroStats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 sm:px-4 sm:first:pl-0">
                  <s.icon className="w-6 h-6 text-brand-blue shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 leading-tight">{s.value}</p>
                    <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-2">
            <img
              src={heroTeam}
              alt="SKILLECTS offshore recruitment team collaborating in a modern office"
              className="rounded-2xl h-[420px] w-full object-cover"
            />

            <div className="absolute top-8 right-2 sm:right-4 w-64 bg-white rounded-2xl shadow-xl p-4">
              <p className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-3">
                <PeopleIcon className="w-5 h-5 text-brand-blue shrink-0" />
                Your Offshore Recruitment Engine
              </p>
              <ul className="space-y-2.5">
                {engineBullets.map((b) => (
                  <li key={b.label} className="flex items-center gap-2 text-sm text-gray-700">
                    <b.icon className="w-4 h-4 text-brand-blue shrink-0" />
                    {b.label}
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-xl bg-blue-50 p-3 flex items-start gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-blue text-sm leading-tight">7-Day Risk-Free Pilot</p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">No Long-Term Contracts. Cancel Anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 bg-blue-50/60 py-10">
        <div className="max-w-7xl mx-auto px-[10px] sm:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-300" />
            <p className="font-bold text-gray-900 text-sm sm:text-base shrink-0 text-center">
              Trusted by Staffing Firms Across the Globe
            </p>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((t) => (
              <div key={t.title} className="flex items-start gap-3">
                <t.icon className="w-6 h-6 text-brand-blue shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{t.title}</p>
                  <p className="text-xs text-gray-500 leading-snug mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
