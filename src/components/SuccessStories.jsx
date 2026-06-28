const stats = [
  {
    value: '250+',
    label: 'Recruiting Firms Empowered',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
      </svg>
    ),
  },
  {
    value: '25,000+',
    label: 'Placements Delivered',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: '$120M+',
    label: 'Additional Revenue Generated',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: '98%',
    label: 'Client Satisfaction Rate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" strokeWidth="3" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" strokeWidth="3" />
      </svg>
    ),
  },
]

const caseStudies = [
  {
    tag: 'CASE STUDY 1',
    logo: 'HD',
    logoColor: 'bg-sky-500',
    accent: 'text-sky-500',
    name: 'Hire',
    nameAccent: 'Dynamics',
    sub: 'STAFFING SOLUTIONS',
    meta: ['IT Staffing', '35 Recruiters', 'USA'],
    challenge: 'High time-to-fill and limited bandwidth were slowing growth.',
    metrics: [
      { label: 'Placements Increased', value: '57%' },
      { label: 'Time-to-Fill Reduced', value: '41%' },
      { label: 'Annual Revenue Growth', value: '$620K+' },
    ],
    quote: '"SKILLECTS helped us scale our team without increasing overhead. The results speak for themselves."',
    person: 'Jason Miller',
    role: 'COO, HireDynamics',
    avatar: '🧑‍💼',
  },
  {
    tag: 'CASE STUDY 2',
    logo: '▲',
    logoColor: 'bg-violet-500',
    accent: 'text-violet-500',
    name: 'Peak',
    nameAccent: 'Talent',
    sub: 'SOLUTIONS',
    meta: ['Engineering', '20 Recruiters', 'Australia'],
    challenge: 'Inconsistent candidate flow and recruiter bandwidth issues.',
    metrics: [
      { label: 'Placements Increased', value: '63%' },
      { label: 'Time-to-Fill Reduced', value: '48%' },
      { label: 'Annual Revenue Growth', value: '$410K+' },
    ],
    quote: '"The 1-week pilot exceeded our expectations. We onboarded a full pod within a month."',
    person: 'Sarah Thompson',
    role: 'Director, Peak Talent Solutions',
    avatar: '👩‍💼',
  },
  {
    tag: 'CASE STUDY 3',
    logo: '🌐',
    logoColor: 'bg-blue-500',
    accent: 'text-blue-500',
    name: 'Global',
    nameAccent: 'Hire',
    sub: 'PARTNERS',
    meta: ['Professional Staffing', '50 Recruiters', 'UK'],
    challenge: 'High recruiter turnover and low submission conversion rates.',
    metrics: [
      { label: 'Placements Increased', value: '71%' },
      { label: 'Submission Increase', value: '85%' },
      { label: 'Annual Revenue Growth', value: '$890K+' },
    ],
    quote: '"Our submission rates and revenue have never been better. SKILLECTS is a true growth partner."',
    person: 'Daniel Roberts',
    role: 'Managing Director, GlobalHire Partners',
    avatar: '🧑‍💼',
  },
]

const logos = ['HAYS', 'Motion Recruitment', 'Priority Talent', 'careerjet', 'TalentRise', 'STAFFING EDGE', 'CORE STAFFING', 'inspired people']

export default function SuccessStories() {
  return (
    <section id="success-stories" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Real Results. Real <span className="text-brand-blue">Impact.</span>
            </h2>
            <p className="mt-4 text-gray-600">
              See how offshore recruiting firms and staffing agencies like yours are growing
              faster with <span className="font-semibold text-brand-blue">SKILLECTS</span>.
            </p>
            <div className="mt-8 space-y-5">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-xl font-extrabold text-brand-blue">{s.value}</p>
                    <p className="text-sm text-gray-500">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.tag} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col">
                <span className="inline-block self-start text-xs font-bold text-white bg-brand-blue rounded-full px-3 py-1 mb-3">
                  {cs.tag}
                </span>
                <div className="flex items-start gap-2">
                  <span className={`w-8 h-8 rounded-lg ${cs.logoColor} text-white flex items-center justify-center text-sm font-bold shrink-0`}>
                    {cs.logo}
                  </span>
                  <div>
                    <p className="font-extrabold text-lg leading-tight">
                      {cs.name}<span className={cs.accent}>{cs.nameAccent}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 tracking-wide">{cs.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 text-[11px] text-gray-500 whitespace-nowrap">
                  {cs.meta.map((m, i) => (
                    <span key={m} className={i > 0 ? 'border-l border-gray-300 pl-2' : ''}>
                      {m}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm font-bold text-brand-blue">Challenge:</p>
                <p className="text-sm text-gray-500">{cs.challenge}</p>

                <div className="mt-4 grid grid-cols-3 gap-2 bg-gray-50 rounded-xl p-3 text-center">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-green-600 font-extrabold text-lg">{m.value}</p>
                      <p className="text-[10px] text-gray-500 mt-1 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm text-gray-600 italic flex-grow">{cs.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                    {cs.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-blue">{cs.person}</p>
                    <p className="text-xs text-gray-400">{cs.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-blue-50 p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl shrink-0">
              🏆
            </span>
            <p className="font-bold text-lg leading-tight">Your Success Story Could Be Next</p>
          </div>
          <p className="text-sm text-gray-600 lg:max-w-xs">
            Join hundreds of recruiting firms achieving more with{' '}
            <span className="font-semibold text-brand-blue">SKILLECTS</span>.
          </p>
          <div className="flex flex-col items-center gap-2 shrink-0">
            <a
              href="#book-a-call"
              className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold whitespace-nowrap hover:bg-blue-700 transition-colors"
            >
              → Book Your Free Strategy Call
            </a>
            <p className="text-xs text-gray-500">Let's discuss your goals and build your success story.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-bold text-brand-blue tracking-wide mb-6">
            TRUSTED BY GROWING RECRUITING FIRMS WORLDWIDE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 font-semibold">
            {logos.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
