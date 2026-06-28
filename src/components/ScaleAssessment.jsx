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
  { icon: '⏱️', title: 'Save Time', desc: 'Automate & streamline processes.' },
  { icon: '💲', title: 'Reduce Costs', desc: 'Lower overhead and improve margins.' },
  { icon: '👥', title: 'Scale Faster', desc: 'Add capacity without adding overhead.' },
  { icon: '🎯', title: 'Better Results', desc: 'Improve quality, speed, and candidate experience.' },
]

export default function ScaleAssessment() {
  const recruiters = 10
  const placements = 12
  const turnover = 27
  const costPerHire = 4500
  const timeToFill = 45

  /* Static, hardcoded to match the design reference exactly until the scoring formula's weights are confirmed; the formula above (currently yielding 49) is intentionally not wired up to the displayed score yet */
  const score = 62
  const verdict =
    score >= 75 ? 'Strong Delivery' : score >= 50 ? 'Needs Improvement' : 'Critical Bottlenecks'
  const verdictColor = score >= 75 ? 'text-green-600' : score >= 50 ? 'text-amber-600' : 'text-red-600'

  const rows = [
    { icon: '👥', label: 'Number of Recruiters', value: recruiters, rating: rate(recruiters, 10, false) },
    { icon: '🎯', label: 'Placements / Month', value: placements, rating: rate(placements, 10, false) },
    { icon: '📈', label: 'Recruiter Turnover (%)', value: turnover, suffix: '%', rating: rate(turnover, 15) },
    { icon: '⏱️', label: 'Cost-per-Hire', value: costPerHire, prefix: '$', rating: rate(costPerHire, 3000) },
    { icon: '🏅', label: 'Time-to-Fill', value: timeToFill, suffix: ' Days', rating: rate(timeToFill, 30) },
  ]

  const dashOffset = 251.2 - (251.2 * score) / 100

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
          <p className="text-5xl font-extrabold -mt-8">{score}<span className="text-2xl text-gray-400">/100</span></p>
          <p className={`font-bold mt-2 ${verdictColor}`}>{verdict}</p>
          <p className="text-sm text-gray-500 mt-4 max-w-xs">
            Get your personalized report with actionable recommendations.
          </p>
          <button className="mt-4 w-full bg-brand-blue text-white font-semibold rounded-xl py-3 hover:bg-blue-700 transition-colors">
            Send My Free Report →
          </button>
        </div>

        <div className="rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="font-bold text-lg mb-4">What This Score Means</p>
          <div className="space-y-3">
            {rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{r.icon}</span>
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
                <span className="text-xl">🚚</span>
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
          <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-lg flex-shrink-0">
            📈
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
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg mb-2">
              {w.icon}
            </span>
            <p className="font-bold text-brand-blue">{w.title}</p>
            <p className="text-sm text-gray-500">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
