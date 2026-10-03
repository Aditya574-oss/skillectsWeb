import manufacturingImage from '../assets/images/case-study-manufacturing.jpg'
import itImage from '../assets/images/case-study-it.jpg'
import accountingImage from '../assets/images/case-study-accounting.jpg'

function TrendingUpIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
function CalendarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

const cases = [
  {
    icon: '🏭',
    image: manufacturingImage,
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
    image: itImage,
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
    image: accountingImage,
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
    <section id="case-studies" className="max-w-7xl mx-auto px-[10px] sm:px-6 py-16">
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
          <div key={c.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <img src={c.image} alt="" className="h-36 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-brand-blue text-white flex items-center justify-center text-3xl flex-shrink-0 -mt-14 relative z-10 shadow-md">
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
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch">
        <div className="flex items-center gap-4 p-6 sm:flex-1 bg-brand-dark text-white">
          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <TrendingUpIcon className="w-6 h-6 text-brand-dark" />
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
          <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
            <CalendarIcon className="w-6 h-6 text-brand-blue" />
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
