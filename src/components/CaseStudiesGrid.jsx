const cases = [
  {
    icon: '🏭',
    title: 'Manufacturing Staffing Firm',
    problem: 'Delivery delays',
    solution: '8+ Recruiters',
    results: [
      ['+41%', 'Submissions'],
      ['+38%', 'Placements'],
      ['+60%', 'Cost Reduction'],
    ],
  },
  {
    icon: '💻',
    title: 'IT Staffing Firm',
    problem: 'High backlog',
    solution: '12+ Recruiters',
    results: [
      ['+40%', 'Placements'],
      ['+50%', 'Cost Reduction'],
      ['2X', 'Faster Delivery'],
    ],
  },
  {
    icon: '🧮',
    title: 'Accounting Staffing Firm',
    problem: 'Slow time-to-fill',
    solution: '5+ Recruiters',
    results: [
      ['+36%', 'Placements'],
      ['+50%', 'Cost Reduction'],
      ['1.8X', 'Faster Delivery'],
    ],
  },
]

export default function CaseStudiesGrid() {
  return (
    <section id="case-studies" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Real Results. <span className="text-brand-blue">Real Impact.</span>
        </h2>
        <p className="mt-4 text-gray-600">
          See how staffing firms are scaling faster, saving more, and winning bigger with{' '}
          <span className="font-semibold text-brand-blue">SKILLECTS</span>.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center text-3xl flex-shrink-0">
                {c.icon}
              </div>
              <div>
                <p className="font-bold text-lg">{c.title}</p>
                <p className="mt-2"><span className="text-brand-blue font-semibold">Problem</span></p>
                <p className="text-sm text-gray-500">{c.problem}</p>
                <p className="mt-2"><span className="text-brand-blue font-semibold">Solution</span></p>
                <p className="text-sm text-gray-500">{c.solution}</p>
              </div>
            </div>
            <div className="pl-20">
              <p className="text-green-600 font-semibold mb-2">Results</p>
            </div>
            <ul className="bg-gray-50 rounded-xl p-4 ml-20 space-y-2">
              {c.results.map(([value, label]) => (
                <li key={label} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="font-bold text-green-600">{value}</span>
                  <span className="text-gray-800">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border-2 border-brand-blue bg-brand-blue overflow-hidden flex flex-col sm:flex-row items-stretch">
        <div className="flex items-center gap-4 p-6 sm:flex-1 text-white">
          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl flex-shrink-0">
            📈
          </span>
          <div>
            <p className="font-bold text-lg">Your Success Story is Next</p>
            <p className="text-sm text-blue-100">
              Join leading staffing firms that trust{' '}
              <span className="font-semibold">SKILLECTS</span> to transform their recruitment
              performance.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 sm:flex-1 flex items-center gap-4">
          <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl flex-shrink-0">
            📅
          </span>
          <div className="flex-grow">
            <p className="font-bold">See What's Possible for You</p>
            <p className="text-sm text-gray-500 mb-3">Book your free strategy call today.</p>
            <a
              href="#book-a-call"
              className="inline-block bg-brand-blue text-white font-semibold rounded-xl px-5 py-2.5 hover:bg-blue-700 transition-colors"
            >
              Book Free Strategy Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
