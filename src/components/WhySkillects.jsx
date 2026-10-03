import lowerBarImage from '../assets/images/solutions-lower-bar.jpg'

const traditional = ['High Cost', 'Low Capacity', 'Burnout', 'Siloed Process', 'Unpredictable Results']

const skillectsWay = ['Predictable Capacity', '10x More Output', 'Cost Efficient', 'Growth Focused']

const bottomFeatures = [
  {
    title: 'Dedicated Recruiter Pods',
    desc: 'Pre-built teams aligned to your goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'KPI-Driven Delivery',
    desc: 'Real-time tracking for maximum accountability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Weekly Reporting & QBRs',
    desc: 'Transparent updates and strategic reviews.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        <rect x="7" y="14" width="3" height="3" /><rect x="14" y="14" width="3" height="3" />
      </svg>
    ),
  },
  {
    title: 'US Timezone Alignment',
    desc: 'Work in sync with your team and your market.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Built to Scale Profitably',
    desc: 'Add capacity without adding complexity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="22 10 18 6 14 10" />
      </svg>
    ),
  },
]

export default function WhySkillects() {
  return (
    <section id="solutions" className="max-w-7xl mx-auto px-[10px] sm:px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* Left: copy */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight">
            Why <span className="text-brand-blue">SKILLECTS</span> Was Built
          </h2>
          <p className="mt-6 text-gray-600 font-medium">Most offshore recruiting firms sell headcount.</p>
          <p className="mt-4 text-gray-600 font-medium">
            We built <span className="font-semibold text-brand-blue">SKILLECTS</span> because staffing
            firms weren't losing business due to lack of recruiters.
          </p>
          <p className="mt-4 text-gray-600">
            They were losing business due to delivery bottlenecks, recruiter burnout, inability to
            scale, and unpredictable recruiting economics.
          </p>
          <hr className="my-8 border-gray-200" />
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand-blue" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20v-2a8 8 0 0 1 16 0v2" strokeLinecap="round" />
                <line x1="18" y1="10" x2="22" y2="10" strokeLinecap="round" />
                <line x1="20" y1="8" x2="20" y2="12" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-xl font-bold text-brand-blue">Recruitment Solutions 2.0</p>
          </div>
        </div>

        {/* Right: comparison cards */}
        <div className="relative grid grid-cols-2 gap-4 items-stretch">

          {/* Traditional card */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md flex flex-col">
            <div className="bg-gray-600 text-white text-center font-semibold py-3 text-sm">
              Traditional Approach
            </div>
            {/* Placeholder for the design's photo of a stressed recruiter; no image asset exists yet. */}
            <div className="h-32 bg-gradient-to-br from-slate-300 to-slate-500" />
            <div className="p-4 flex flex-col gap-3 flex-1">
              {traditional.map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-500" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VS badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
            w-9 h-9 rounded-full bg-brand-blue text-white text-xs font-bold
            flex items-center justify-center shadow-lg ring-2 ring-white">
            VS
          </div>

          {/* SKILLECTS Way card */}
          <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-md flex flex-col">
            <div className="bg-brand-blue text-white text-center font-semibold py-3 text-sm">
              The SKILLECTS Way
            </div>
            {/* Placeholder for the design's photo of a SKILLECTS pod at work; no image asset exists yet. */}
            <div className="h-32 bg-gradient-to-br from-slate-300 to-slate-500" />
            <div className="p-4 flex flex-col gap-3 flex-1 bg-blue-50/40">
              {skillectsWay.map((s) => (
                <div key={s} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-brand-blue" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{s}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom features row, on a full-width photo backdrop per the design */}
      <div className="relative mt-20">
        <div className="absolute left-1/2 -translate-x-1/2 w-screen -top-16 h-56 overflow-hidden">
          <img src={lowerBarImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative rounded-2xl border border-gray-200 shadow-md py-6 px-2 bg-white
          grid sm:grid-cols-2 lg:grid-cols-5">
          {bottomFeatures.map((f) => (
            <div key={f.title} className="flex flex-col gap-2 px-6 py-4 sm:py-3 lg:py-0
              border-b border-gray-200 last:border-b-0
              sm:odd:border-r sm:last:border-r-0
              lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <p className="font-bold text-gray-900 text-sm leading-tight">{f.title}</p>
              <p className="text-xs text-gray-500 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
