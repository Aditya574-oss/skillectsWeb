const stats = [
  { value: '60–75%', label: 'Cost Savings' },
  { value: '2X', label: 'Faster Hiring' },
  { value: 'KPI-Driven', label: 'Recruiting' },
  { value: 'Dedicated', label: 'Recruiter Seats' },
  { value: 'US Timezone', label: 'Aligned' },
]

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl leading-tight tracking-tight">
            <span className="font-bold">Turn One Recruiter Cost Into A Full{' '}</span>
            <span className="text-brand-blue font-extrabold">Recruitment Engine</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Scale submissions, placements, and delivery capacity without adding recruiter
            burnout, internal overhead, or hiring chaos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#book-a-call"
              className="px-6 py-3.5 rounded-lg bg-brand-blue text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors"
            >
              Book Free Strategy Call
            </a>
            <a
              href="#start-free-trial"
              className="px-6 py-3.5 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              Start 1-Week Free Trial
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 md:gap-4 mt-10 lg:mt-0">
          <div className="text-center">
            <p className="text-xs md:text-sm font-semibold text-gray-500 mb-2">Your U.S. Team</p>
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl md:text-3xl">
              🧑‍💼
            </div>
          </div>
          <span className="text-brand-blue text-xl md:text-2xl">→</span>
          <div className="text-center">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl bg-brand-blue text-white flex flex-col items-center justify-center p-2">
              <span className="text-xl md:text-2xl">👥</span>
              <p className="text-xs font-bold mt-1 leading-tight text-center">SKILLECTS<br />Recruiter Pod</p>
            </div>
          </div>
          <span className="text-brand-blue text-xl md:text-2xl">→</span>
          <div className="text-center">
            <p className="text-xs md:text-sm font-semibold text-gray-500 mb-2 leading-tight">Placements &amp;<br />Revenue Growth</p>
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl md:text-3xl">
              📈
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-gray-100 shadow-md p-5 flex items-center gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <p className="font-bold text-gray-900">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
