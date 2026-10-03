import { useState } from 'react'
import teamImage from '../assets/images/build-pod-team.jpg'

function SourcerIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="6" /><path d="M20 20l-5.5-5.5" />
    </svg>
  )
}
function RecruiterIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="4" /><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" /><path d="M17 11l2 2 4-4" />
    </svg>
  )
}
function MarketResearcherIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" />
    </svg>
  )
}
function LeadGeneratorIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11v2a2 2 0 0 0 2 2h1l4 4V5L6 9H5a2 2 0 0 0-2 2z" /><path d="M15 8a4 4 0 0 1 0 8" /><path d="M18 5a8 8 0 0 1 0 14" />
    </svg>
  )
}
function CrmAdminIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" /><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  )
}
function BdExecutiveIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" />
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
function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function TargetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  )
}
function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
function InfoIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
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
function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const ROLES = [
  { id: 'sourcer', label: 'Sourcer', desc: 'Find and engage top talent.', icon: SourcerIcon, cost: 1500 },
  { id: 'recruiter', label: 'Recruiter', desc: 'Screen, interview and evaluate candidates.', icon: RecruiterIcon, cost: 2500 },
  { id: 'market_researcher', label: 'Market Researcher', desc: 'Research market trends and insights.', icon: MarketResearcherIcon, cost: 1750 },
  { id: 'lead_generator', label: 'Lead Generator', desc: 'Build targeted candidate pipelines.', icon: LeadGeneratorIcon, cost: 1750 },
  { id: 'crm_admin', label: 'CRM Admin', desc: 'Manage ATS, pipelines and data.', icon: CrmAdminIcon, cost: 1500 },
  { id: 'bd_executive', label: 'BD Executive', desc: 'Drive business development.', icon: BdExecutiveIcon, cost: 1750 },
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
    <section id="build-pod" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-[10px] sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold tracking-tight">
                Build Your Perfect <br />
                <span className="text-brand-blue font-extrabold">Recruiting Pod</span>
              </h2>
              <p className="mt-4 text-gray-500 font-medium">
                Select the roles you need. We'll show you the team, pricing, and the ROI you can
                expect.
              </p>
            </div>

            <div className="relative mt-8 rounded-2xl h-64 overflow-hidden">
              <img src={teamImage} alt="SKILLECTS recruiting pod collaborating" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent" />
              <div className="relative h-full flex flex-col justify-center gap-0.5 pl-6">
                <p className="text-white font-extrabold text-2xl tracking-wide leading-tight">FOCUS</p>
                <p className="text-white font-extrabold text-2xl tracking-wide leading-tight">COLLABORATE</p>
                <p className="text-white font-extrabold text-2xl tracking-wide leading-tight">DELIVER</p>
              </div>
              <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg">
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>

            <p className="font-bold text-brand-blue mb-4 mt-8">1. SELECT THE ROLES YOU NEED</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {ROLES.map((role) => {
                const Icon = role.icon
                return (
                  <button
                    key={role.id}
                    onClick={() => toggle(role.id)}
                    className={`rounded-xl border p-4 text-left transition-colors flex items-start gap-3 ${
                      selected[role.id]
                        ? 'border-brand-blue bg-blue-50'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <span
                      className={`shrink-0 mt-0.5 w-5 h-5 rounded border flex items-center justify-center ${
                        selected[role.id] ? 'bg-brand-blue border-brand-blue' : 'border-gray-300 bg-white'
                      }`}
                    >
                      {selected[role.id] && <CheckIcon className="w-3 h-3 text-white" />}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </span>
                    <span className="min-w-0">
                      <p className="font-semibold text-gray-900">{role.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{role.desc}</p>
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="mt-4 text-sm text-gray-500 bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-2">
              <InfoIcon className="w-4 h-4 text-brand-blue shrink-0" />
              You can add or remove roles anytime as your needs grow.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="font-bold text-brand-blue mb-4">2. YOUR RECRUITING POD</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {activeRoles.map((r) => (
                <div key={r.id} className="flex items-center gap-2 rounded-full border border-gray-200 bg-white pl-2 pr-3 py-1.5">
                  <span className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{r.label}</span>
                  <button
                    onClick={() => toggle(r.id)}
                    aria-label={`Remove ${r.label}`}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              {activeRoles.length === 0 && (
                <p className="text-sm text-gray-400">Select roles to build your pod.</p>
              )}
            </div>

            <p className="font-bold text-brand-blue mb-3">3. YOUR POD IMPACT</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
              <Stat icon={PeopleIcon} iconBg="bg-purple-50" iconColor="text-purple-600" value="3-5X" label="More Submissions" />
              <Stat icon={TrendingUpIcon} iconBg="bg-green-50" iconColor="text-green-600" value="35-50%" label="More Placements" />
              <Stat icon={ClockIcon} iconBg="bg-orange-50" iconColor="text-orange-500" value="40%" label="Faster Time-to-Fill" />
              <Stat icon={TargetIcon} iconBg="bg-blue-50" iconColor="text-brand-blue" value="60-75%" label="Cost Savings" />
            </div>

            <p className="font-bold text-brand-blue mb-3">4. YOUR INVESTMENT</p>
            <div className="rounded-xl bg-gray-50 p-4 flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="grid grid-cols-3 divide-x divide-gray-200 flex-1 text-center w-full">
                <div className="px-1">
                  <p className="text-xs text-gray-500">Total Seats Selected</p>
                  <p className="text-xl sm:text-2xl font-bold mt-1">{totalSeats}</p>
                </div>
                <div className="px-1">
                  <p className="text-xs text-gray-500">Monthly Investment</p>
                  <p className="text-xl sm:text-2xl font-bold mt-1">${monthlyInvestment.toLocaleString()}</p>
                </div>
                <div className="px-1">
                  <p className="text-xs text-gray-500">Estimated ROI</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600 mt-1">{roi}%+</p>
                </div>
              </div>
              <ROIRing percent={roi} />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3">
              <button className="w-full lg:flex-1 bg-brand-blue text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
                Build My Team <ArrowRightIcon className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-xs text-gray-400 text-center lg:text-left shrink-0">
                <LockIcon className="w-4 h-4 shrink-0" />
                <span className="max-w-[170px] lg:max-w-[130px]">No long-term commitment. Scale up or down anytime.</span>
              </div>
            </div>
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

function Stat({ icon: Icon, iconBg, iconColor, value, label }) {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-2 ${iconBg}`}>
        <Icon className={`w-4.5 h-4.5 ${iconColor}`} style={{ width: 18, height: 18 }} />
      </div>
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
