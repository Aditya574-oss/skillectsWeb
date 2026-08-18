import { useCalculator } from './revenue/CalculatorContext'

function PeopleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
function RibbonIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" /><polyline points="8.5 13.5 7 22 12 19 17 22 15.5 13.5" />
    </svg>
  )
}
function RocketIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 19 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
function DollarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5.5c0-1.93-2.24-3.5-5-3.5S7 3.57 7 5.5 9.24 8 12 8s5 1.57 5 3.5S14.76 15 12 15s-5-1.57-5-3.5" />
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

const rate = (value, avg, highIsBad = true) => {
  const ratio = value / avg
  if (highIsBad) {
    if (ratio <= 0.8) return { label: 'Good', color: 'bg-green-100 text-green-700' }
    if (ratio <= 1.2) return { label: 'Average', color: 'bg-amber-100 text-amber-700' }
    return { label: 'High', color: 'bg-red-100 text-red-700' }
  }
  if (ratio > 1.2) return { label: 'Good', color: 'bg-green-100 text-green-700' }
  if (ratio >= 0.8) return { label: 'Average', color: 'bg-amber-100 text-amber-700' }
  return { label: 'Low', color: 'bg-red-100 text-red-700' }
}

const whyItMatters = [
  { icon: ClockIcon, title: 'Save Time', desc: 'Automate & streamline processes.' },
  { icon: DollarIcon, title: 'Reduce Costs', desc: 'Lower overhead and improve margins.' },
  { icon: PeopleIcon, title: 'Scale Faster', desc: 'Add capacity without adding overhead.' },
  { icon: TargetIcon, title: 'Better Results', desc: 'Improve quality, speed, and candidate experience.' },
]

const verdictColor = {
  Excellent: 'text-green-600',
  Good: 'text-green-600',
  Fair: 'text-amber-600',
  'Needs Improvement': 'text-red-600',
}

export default function ScaleAssessment() {
  const { inputs, metrics } = useCalculator()
  const recruiters = inputs.recruiters
  const placements = inputs.placementsPerMonth
  /* No source for these in Section 4's calculator, so they stay independent illustrative figures. */
  const turnover = 27
  const costPerHire = 4500
  const timeToFill = 45

  // Mirrors Section 4's "Delivery Health Score" so the two sections never show conflicting numbers.
  const score = metrics.healthScore
  const verdict = metrics.healthRating

  const rows = [
    { icon: PeopleIcon, label: 'Number of Recruiters', value: recruiters, rating: rate(recruiters, 10, false) },
    { icon: TargetIcon, label: 'Placements / Month', value: placements, rating: rate(placements, 10, false) },
    { icon: TrendingUpIcon, label: 'Recruiter Turnover (%)', value: turnover, suffix: '%', rating: rate(turnover, 15) },
    { icon: ClockIcon, label: 'Cost-per-Hire', value: costPerHire, prefix: '$', rating: rate(costPerHire, 3000) },
    { icon: RibbonIcon, label: 'Time-to-Fill', value: timeToFill, suffix: ' Days', rating: rate(timeToFill, 30) },
  ]

  const dashOffset = 251.2 - (251.2 * score) / 100
  // Position + orientation of the small pointer marker sitting on the gauge arc
  // (radius 90, centered at (100,100) in the 200x110 viewBox) at the score's percentage.
  const theta = (Math.PI / 180) * 180 * (1 - score / 100)
  const needleX = 100 + 90 * Math.cos(theta)
  const needleY = 100 - 90 * Math.sin(theta)
  const needleAngle = -90 + (score / 100) * 180

  return (
    <section id="assessment" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
          Take Our 5-Minute Assessment.
          <br />
          Scale Your Staffing. <span className="text-brand-blue">Measure Your Impact.</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Answer a few quick questions and discover how{' '}
          <span className="font-semibold text-brand-blue">SKILLECTS</span> can accelerate your
          growth.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center text-center">
          <p className="font-bold text-lg mb-6">Your Delivery Health Score</p>
          <div className="relative w-64">
            <svg viewBox="0 0 200 110" className="w-64">
              <path d="M10 100 A 90 90 0 0 1 190 100" fill="none" stroke="#e5e7eb" strokeWidth="14" strokeLinecap="round" />
              <path
                d="M10 100 A 90 90 0 0 1 190 100"
                fill="none"
                stroke="#22c55e"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray="251.2"
                strokeDashoffset={dashOffset}
              />
            </svg>
            <div
              className="absolute w-0 h-0"
              style={{
                left: `${(needleX / 200) * 100}%`,
                top: `${(needleY / 110) * 100}%`,
                transform: `translate(-50%, -50%) rotate(${needleAngle}deg)`,
              }}
            >
              <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '13px solid #1E40FF' }} />
            </div>
          </div>
          <p className="text-5xl font-extrabold -mt-8">{score}<span className="text-2xl text-gray-400">/100</span></p>
          <p className={`font-bold mt-2 ${verdictColor[verdict] || 'text-gray-600'}`}>{verdict}</p>
          <p className="text-sm text-gray-500 mt-4 max-w-xs">
            Get your personalized report with actionable recommendations.
          </p>
          <button className="mt-4 w-full bg-brand-blue text-white font-semibold rounded-xl py-3 hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
            Send My Free Report <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="font-bold text-lg mb-4">What This Score Means</p>
          <div className="space-y-3">
            {rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0">
                <div className="flex items-center gap-3">
                  <r.icon className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm text-gray-700">{r.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-900 whitespace-nowrap">
                    {r.prefix}{r.value.toLocaleString()}{r.suffix}
                  </span>
                  <span className={`text-xs font-semibold rounded-full px-3 py-1 ${r.rating.color}`}>
                    {r.rating.label}
                  </span>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0">
              <div className="flex items-center gap-3">
                <RocketIcon className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="text-sm text-gray-700">Delivery Challenge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-900">Delivery Delay</span>
                <span className="text-xs font-semibold rounded-full px-3 py-1 bg-red-100 text-red-700">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-blue-50 p-6 grid sm:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
        <div className="lg:col-span-2 flex items-start gap-3 lg:border-r lg:border-blue-200 lg:pr-6">
          <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
            <TrendingUpIcon className="w-5 h-5" />
          </span>
          <div>
            <p className="font-bold">Why It Matters</p>
            <p className="text-sm text-gray-500">
              Small improvements today create massive impact tomorrow. Let's build a stronger,
              faster, and more scalable recruitment engine—together.
            </p>
          </div>
        </div>
        {whyItMatters.map((w) => (
          <div key={w.title}>
            <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <w.icon className="w-5 h-5 text-brand-blue" />
            </span>
            <p className="font-bold text-brand-blue">{w.title}</p>
            <p className="text-sm text-gray-500">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
