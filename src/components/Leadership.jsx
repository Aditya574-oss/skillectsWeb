function PeopleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function PodiumIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15 8 12 11 9 8 12 2" /><path d="M7 22v-6h10v6" /><path d="M3 22v-3h4v3" /><path d="M17 22v-3h4v3" />
    </svg>
  )
}
function BuildingsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="7" height="13" /><rect x="13" y="3" width="7" height="19" />
      <line x1="7" y1="13" x2="7" y2="13.01" /><line x1="7" y1="17" x2="7" y2="17.01" />
      <line x1="16" y1="7" x2="16" y2="7.01" /><line x1="16" y1="11" x2="16" y2="11.01" /><line x1="16" y1="15" x2="16" y2="15.01" />
    </svg>
  )
}
function CheckCircleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
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

const stats = [
  { value: '10+', label: 'Years Staffing', icon: PeopleIcon },
  { value: '15+', label: 'Years in Executive Leadership', icon: PodiumIcon },
  { value: 'Fortune 500', label: 'Experience', icon: BuildingsIcon },
]

const brands = ['IBM', 'verizon', 'NTT', 'DXC TECHNOLOGY', 'HCLTech']

export default function Leadership() {
  return (
    <section id="leadership" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-[10px] sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Trusted by Leaders. <span className="text-brand-blue">Proven by Results.</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Deep industry expertise. Scalable leadership. Consistent outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-blue">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              <div className="w-8 h-0.5 bg-gray-200 mx-auto my-3" />
              <s.icon className="w-8 h-8 text-brand-blue mx-auto" />
            </div>
          ))}
          <div className="bg-blue-50 rounded-2xl p-6 text-center">
            <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center mx-auto mb-3">
              <CheckCircleIcon className="w-6 h-6" />
            </span>
            <p className="font-bold text-brand-blue">Built on Trust.</p>
            <p className="text-sm text-gray-500 mt-1">
              Led by professionals with a track record of building and scaling high-impact
              recruitment teams.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <p className="font-bold text-lg mb-2">Brands We've Supported Through Client Engagements</p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-6">
            Our leadership team has contributed to staffing and talent acquisition programs
            supporting global enterprise organizations across multiple industries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 font-bold text-lg">
            {brands.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 overflow-hidden flex flex-col sm:flex-row items-center gap-6">
          <div className="p-6 flex-1">
            <p className="font-bold text-lg">Experience You Can Count On.</p>
            <p className="text-sm text-gray-500">
              Leadership that understands staffing. Results that drive your growth.
            </p>
          </div>
          {/* Placeholder for the design's boardroom photo; no image asset exists yet. */}
          <div className="hidden sm:block w-64 h-28 shrink-0 bg-gradient-to-br from-slate-300 to-slate-500" />
          <div className="p-6 sm:pl-0">
            <a
              href="#book-a-call"
              className="bg-brand-blue text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap inline-flex items-center gap-2"
            >
              <ArrowRightIcon className="w-4 h-4" /> Partner with Proven Leaders
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
