import { useState } from 'react'

const ROLES = [
  { id: 'sourcer', label: 'Sourcer', icon: '🧑‍💻', cost: 1500 },
  { id: 'recruiter', label: 'Recruiter', icon: '👩‍💼', cost: 2500 },
  { id: 'market_researcher', label: 'Market Researcher', icon: '🎧', cost: 1750 },
  { id: 'lead_generator', label: 'Lead Generator', icon: '👩‍💻', cost: 1750 },
  { id: 'crm_admin', label: 'CRM Admin', icon: '🧑‍💼', cost: 1500 },
  { id: 'bd_executive', label: 'BD Executive', icon: '📞', cost: 1750 },
]

const bottomFeatures = [
  {
    title: 'Dedicated Recruiters',
    desc: 'Who work like your in-house team.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'KPI-Driven Delivery',
    desc: 'Focused on submissions, placements & quality.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'US Timezone Alignment',
    desc: 'Real-time collaboration during your work hours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Managed & Supported',
    desc: 'We manage hiring, training, tools & performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
      </svg>
    ),
  },
  {
    title: 'Flexible Scaling',
    desc: 'Add or remove seats as you grow.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth="2">
        <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
]

export default function BuildPod() {
  const [selected, setSelected] = useState(
    ROLES.reduce((acc, r) => ({ ...acc, [r.id]: r.id !== 'bd_executive' }), {})
  )

  const toggle = (id) => setSelected((s) => ({ ...s, [id]: !s[id] }))

  const activeRoles = ROLES.filter((r) => selected[r.id])
  const totalSeats = activeRoles.length
  /* Static, hardcoded to match the design reference exactly until correct per-role costs are provided; replace with activeRoles.reduce((sum, r) => sum + r.cost, 0) once known */
  const monthlyInvestment = 10750
  const roi = Math.max(50, 320 - (5 - totalSeats) * 30)

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight">
                Build Your Perfect <span className="text-brand-blue font-extrabold">Recruiting Pod</span>
              </h2>
              <p className="mt-4 text-gray-500 font-medium">
                Select the roles you need. We'll show you the team, pricing, and the ROI you can
                expect.
              </p>
            </div>

            <p className="font-bold text-brand-blue mb-4 mt-10">1. SELECT THE ROLES YOU NEED</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => toggle(role.id)}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    selected[role.id]
                      ? 'border-brand-blue bg-blue-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{role.icon}</span>
                    <span
                      className={`w-5 h-5 rounded border flex items-center justify-center text-xs ${
                        selected[role.id] ? 'bg-brand-blue border-brand-blue text-white' : 'border-gray-300'
                      }`}
                    >
                      {selected[role.id] && '✓'}
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-gray-900">{role.label}</p>
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 bg-white border border-gray-100 rounded-xl p-4">
              ℹ️ You can add or remove roles anytime as your needs grow.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="font-bold text-brand-blue mb-4">2. YOUR RECRUITING POD</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {activeRoles.map((r) => (
                <div key={r.id} className="text-center w-20">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-2xl mx-auto">
                    {r.icon}
                  </div>
                  <p className="text-xs mt-1 font-medium text-gray-700">{r.label}</p>
                </div>
              ))}
              {activeRoles.length === 0 && (
                <p className="text-sm text-gray-400">Select roles to build your pod.</p>
              )}
            </div>

            <p className="font-bold text-brand-blue mb-3">3. YOUR POD IMPACT</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
              <Stat value="3-5X" label="More Submissions" />
              <Stat value="35-50%" label="More Placements" />
              <Stat value="40%" label="Faster Time-to-Fill" />
              <Stat value="60-75%" label="Cost Savings" />
            </div>

            <p className="font-bold text-brand-blue mb-3">4. YOUR INVESTMENT</p>
            <div className="rounded-xl bg-gray-50 p-4 flex items-center gap-4 mb-6">
              <div className="grid grid-cols-3 divide-x divide-gray-200 flex-1 text-center">
                <div>
                  <p className="text-xs text-gray-500">Total Seats Selected</p>
                  <p className="text-2xl font-bold mt-1">{totalSeats}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Monthly Investment</p>
                  <p className="text-2xl font-bold mt-1">${monthlyInvestment.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Estimated ROI</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">{roi}%+</p>
                </div>
              </div>
              <ROIRing percent={roi} />
            </div>

            <button className="w-full bg-brand-blue text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Build My Team →
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">
              No long-term commitment. Scale up or down anytime.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-100 shadow-md bg-white p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200">
          {bottomFeatures.map((f) => (
            <div key={f.title} className="flex items-center gap-3 lg:px-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-tight">{f.title}</p>
                <p className="text-xs text-gray-500 leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <p className="font-extrabold text-brand-blue">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  )
}

function ROIRing({ percent }) {
  const size = 72
  const stroke = 6
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const fraction = Math.min(percent / 400, 1)
  const offset = circumference * (1 - fraction)
  return (
    <div className="relative w-[72px] h-[72px] mx-auto shrink-0">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#2563EB" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#16A34A"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-tight">
        <span className="text-sm font-extrabold text-brand-blue">{percent}%</span>
        <span className="text-[10px] font-bold text-brand-blue">ROI</span>
      </div>
    </div>
  )
}
