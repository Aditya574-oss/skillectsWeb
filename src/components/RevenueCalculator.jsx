import { useState } from 'react'

const fmt = (n) => `$${Math.round(n).toLocaleString()}`

const topBadges = [
  {
    title: 'Data-Driven',
    desc: 'Projections based on real client outcomes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
      </svg>
    ),
  },
  {
    title: 'Accurate',
    desc: 'Customized to your business metrics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        <line x1="22" y1="2" x2="16" y2="8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Risk-Free',
    desc: 'No commitment. Just clarity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
]

const resultIcons = [
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" strokeWidth="3" />
    <line x1="15" y1="15" x2="15.01" y2="15" strokeLinecap="round" strokeWidth="3" />
  </svg>,
]

const bottomFeatures = [
  {
    title: 'Scale Your Team',
    desc: 'without increasing headcount cost.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Fill More Jobs',
    desc: 'and reduce time-to-fill.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Increase Revenue',
    desc: 'with more submissions and placements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Reduce Risk',
    desc: 'with a proven, KPI-driven model.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Focus On Growth',
    desc: 'while we handle the heavy lifting.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
      </svg>
    ),
  },
]

/* Stepper field with visible grey border box, no up/down buttons */
function Stepper({ label, value, setter, step, prefix }) {
  return (
    <div className="flex items-center justify-between gap-3 mb-4 last:mb-0">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="flex items-stretch border border-gray-300 rounded-lg overflow-hidden bg-white w-28 shrink-0">
        <span className="flex-1 px-2 py-2 text-sm font-semibold text-gray-900 bg-white text-right">
          {prefix}{Number(value).toLocaleString()}
        </span>
      </div>
    </div>
  )
}

export default function RevenueCalculator() {
  const [recruiters, setRecruiters] = useState(6)
  const [placements, setPlacements] = useState(8)
  const [salary, setSalary] = useState(75000)
  const [otherCosts, setOtherCosts] = useState(7500)
  const [margin, setMargin] = useState(4000)

  /* Static, hardcoded to match the design reference exactly (formula intentionally not wired up yet) */
  const totalRecruiters = 9
  const newPlacements = 12
  const currentAnnualCost = 555000
  const skillectsAnnualCost = 268880
  const costSavingsPct = 52
  const additionalRevenue = 420000
  const additionalGrossProfit = 151120
  const roi = 212

  /* Bar heights: gray bar is always 64px, blue bar is proportional */
  const BAR_MAX_H = 64
  const skillectsBarH = Math.round(BAR_MAX_H * (skillectsAnnualCost / currentAnnualCost))

  const resultRows = [
    { label: 'Total Recruiters', sublabel: '(Your Team + Our Pod)', value: totalRecruiters, color: 'text-green-600' },
    { label: 'Placements per Month',                                value: newPlacements,   color: 'text-green-600' },
    { label: 'Additional Revenue / Year',                           value: `+${fmt(additionalRevenue)}`,     color: 'text-green-600' },
    { label: 'Additional Gross Profit / Year',                      value: `+${fmt(additionalGrossProfit)}`, color: 'text-green-600' },
    { label: 'Capacity Increase',                                   value: '+50%',          color: 'text-green-600' },
  ]

  return (
    <section id="roi-calculator" className="max-w-7xl mx-auto px-6 py-16">

      {/* Top: heading left + badges right (no card boxes, separated by dividers) */}
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-4xl font-bold tracking-tight">
            See The Revenue Impact Of Partnering With{' '}
            <span className="text-brand-blue font-extrabold">SKILLECTS</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium max-w-lg">
            Use our interactive calculator to see how our recruiting pods drive more placements,
            higher margins, and maximum ROI.
          </p>
        </div>

        {/* Badges: inline with vertical dividers, no card boxes */}
        <div className="flex items-start divide-x divide-gray-200">
          {topBadges.map((b) => (
            <div key={b.title} className="flex items-start gap-3 px-6 first:pl-0 last:pr-0">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                {b.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{b.title}</p>
                <p className="text-xs text-gray-500 leading-snug mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main grid: narrow | wide-center | narrow */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_1.5fr_minmax(0,1fr)] gap-6 items-stretch">

        {/* Left: form */}
        <div className="rounded-2xl border border-gray-200 shadow-md p-6 h-full flex flex-col">
          <p className="font-bold text-brand-blue mb-5 tracking-wide text-sm">YOUR CURRENT STATE</p>
          <Stepper label="Number of Recruiters"               value={recruiters}  setter={setRecruiters}  step={1}    prefix=""  />
          <Stepper label="Placements per Month"               value={placements}  setter={setPlacements}  step={1}    prefix=""  />
          <Stepper label="Avg. Recruiter Salary (Fully Loaded)" value={salary}    setter={setSalary}      step={1000} prefix="$" />
          <Stepper label="Other Recruiting Costs / Month"     value={otherCosts}  setter={setOtherCosts}  step={500}  prefix="$" />
          <Stepper label="Avg. Gross Margin per Placement"    value={margin}      setter={setMargin}      step={250}  prefix="$" />
          <div className="mt-auto pt-2">
            <button className="w-full bg-brand-blue text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="12" y2="14" />
              </svg>
              Calculate My Impact
            </button>
            <p className="mt-3 text-center text-xs text-gray-400 flex items-center justify-center gap-1">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Your data is 100% secure and private.
            </p>
          </div>
        </div>

        {/* Center: landscape monitor frame */}
        <div>
          <div className="rounded-2xl border-[6px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden">
            <div className="bg-slate-900 p-5">
              <p className="font-semibold text-white text-sm mb-4">Your Revenue Impact With SKILLECTS</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {/* Placements / Month */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Placements / Month</p>
                  <div className="flex items-end gap-3">
                    <div>
                      <p className="text-3xl font-bold text-white leading-none">{placements}</p>
                      <p className="text-xs text-gray-500 mt-1">Current</p>
                    </div>
                    <span className="text-gray-400 text-lg mb-4">→</span>
                    <div>
                      <p className="text-3xl font-bold text-green-400 leading-none">{newPlacements}</p>
                      <p className="text-xs text-gray-500 mt-1">With SKILLECTS</p>
                    </div>
                  </div>
                </div>

                {/* Revenue Growth */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Revenue Growth / Year</p>
                  <p className="text-3xl font-bold text-green-400 leading-none">+{fmt(additionalRevenue)}</p>
                  <p className="text-xs text-gray-500 mt-1">Additional Revenue</p>
                </div>

                {/* Annual Cost Comparison — bar chart */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Annual Cost Comparison</p>
                  <div className="flex items-start gap-3">

                    {/* Gray bar */}
                    <div className="flex flex-col items-center gap-1 flex-1">
                      <span className="text-xs text-gray-300 font-medium">{fmt(currentAnnualCost)}</span>
                      <div className="w-full flex flex-col justify-end" style={{ height: `${BAR_MAX_H}px` }}>
                        <div className="w-full bg-gray-500 rounded-t" style={{ height: `${BAR_MAX_H}px` }} />
                      </div>
                      <span className="text-xs text-gray-500 text-center">Current Cost</span>
                    </div>

                    {/* Savings label */}
                    <div className="flex flex-col items-center shrink-0 self-center">
                      <span className="text-green-400 font-bold text-sm leading-none">{costSavingsPct}%</span>
                      <span className="text-green-400 text-xs leading-none">Cost</span>
                      <span className="text-green-400 text-xs leading-none">Savings</span>
                      <svg viewBox="0 0 12 16" className="w-3 h-4 text-green-400 mt-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="6" y1="1" x2="6" y2="13" />
                        <polyline points="2 9 6 13 10 9" />
                      </svg>
                    </div>

                    {/* Blue bar */}
                    <div className="flex flex-col items-center gap-1 flex-1">
                      <span className="text-xs text-green-400 font-medium">{fmt(skillectsAnnualCost)}</span>
                      <div className="w-full flex flex-col justify-end" style={{ height: `${BAR_MAX_H}px` }}>
                        <div className="w-full bg-brand-blue rounded-t" style={{ height: `${skillectsBarH}px` }} />
                      </div>
                      <span className="text-xs text-gray-500 text-center">With SKILLECTS</span>
                    </div>

                  </div>
                </div>

                {/* Gross Profit / ROI */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Gross Profit Impact / Year</p>
                  <p className="text-3xl font-bold text-green-400 leading-none">+{fmt(additionalGrossProfit)}</p>
                  <p className="text-xs text-gray-500 mt-1">Additional Gross Profit</p>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-xs text-gray-400">ROI</span>
                    <span className="text-2xl font-bold text-green-400">{roi}%</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* Monitor stand */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-3 bg-gray-700 rounded-b-sm" />
            <div className="w-32 h-2 bg-gray-600 rounded-b-lg" />
          </div>
        </div>

        {/* Right: projected results */}
        <div className="rounded-2xl border border-gray-200 shadow-md p-6 h-full flex flex-col">
          <p className="font-bold text-brand-blue mb-5 tracking-wide text-sm">PROJECTED RESULTS WITH SKILLECTS</p>
          <ul className="space-y-0 divide-y divide-gray-100">
            {resultRows.map((r, i) => (
              <li key={r.label} className="flex items-center justify-between gap-3 py-3">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    {resultIcons[i]}
                  </div>
                  <span className="text-sm text-gray-700 font-medium leading-tight">
                    {r.label}
                    {r.sublabel && (
                      <span className="block text-xs text-gray-400 font-normal">{r.sublabel}</span>
                    )}
                  </span>
                </div>
                <span className={`font-bold text-sm shrink-0 ${r.color}`}>{r.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-2">
            <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Get My Free Report (PDF)
            </button>
            <p className="mt-3 text-center text-xs text-gray-400 flex items-center justify-center gap-1">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              No credit card required.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom feature strip */}
      <div className="mt-12 rounded-2xl border border-gray-100 shadow-md p-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center shrink-0 shadow-lg shadow-blue-400/30">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
            </svg>
          </div>
          <div className="text-left">
            <p className="font-extrabold text-gray-900 text-sm leading-tight">MORE PLACEMENTS.</p>
            <p className="font-extrabold text-gray-900 text-sm leading-tight">HIGHER MARGINS.</p>
            <p className="font-extrabold text-brand-blue text-sm leading-tight">MAXIMUM GROWTH.</p>
          </div>
        </div>

        <div className="w-px h-16 bg-gray-200 hidden lg:block shrink-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 flex-1 w-full">
          {bottomFeatures.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-brand-blue flex items-center justify-center">
                {f.icon}
              </div>
              <p className="font-bold text-gray-900 text-xs leading-tight">{f.title}</p>
              <p className="text-xs text-gray-500 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
