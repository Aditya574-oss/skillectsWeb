import moneyImage from '../assets/images/problem-money.jpg'
import timeImage from '../assets/images/problem-time.jpg'
import riskImage from '../assets/images/problem-risk.jpg'
import statusImage from '../assets/images/problem-status.jpg'

const items = [
  {
    n: '01',
    title: 'MONEY',
    image: moneyImage,
    desc: 'Rising recruiter salaries and overhead are eating into your margins.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'TIME',
    image: timeImage,
    desc: 'Slow time-to-fill means delayed placements and lost revenue.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'RISK',
    image: riskImage,
    desc: 'Recruiter turnover and inconsistency kill momentum.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'STATUS',
    image: statusImage,
    desc: 'Missed delivery targets hurt your reputation and client trust.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-blue" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
      </svg>
    ),
  },
]

const DotGrid = () => (
  <div className="hidden sm:grid grid-cols-6 gap-1.5 opacity-60 shrink-0">
    {Array.from({ length: 24 }).map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300" />
    ))}
  </div>
)

export default function ProblemSection() {
  return (
    <section id="bottlenecks" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-[10px] sm:px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          You Don't Have A <span className="text-brand-blue font-extrabold">Recruiting Problem.</span>
        </h2>
        <p className="mt-4 text-gray-500 font-medium max-w-2xl mx-auto">
          You have operational bottlenecks that are costing you time, money, and growth.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.n} className="relative bg-white rounded-2xl shadow-md border border-gray-100 text-center">
              {/* Number badge — centered on top border */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-brand-blue text-white text-sm font-bold flex items-center justify-center shadow-sm">
                {item.n}
              </span>

              <img src={item.image} alt="" className="h-36 w-full rounded-t-2xl object-cover" />

              <div className="px-6 pb-6 pt-5">
                {/* Small icon circle */}
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>

                {/* Title */}
                <p className="font-extrabold text-brand-blue tracking-widest text-base">{item.title}</p>

                {/* Centered underline */}
                <div className="w-8 h-0.5 bg-brand-blue rounded mx-auto mt-2 mb-3" />

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA — dots outside the white card */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <DotGrid />

          <div className="bg-white rounded-xl shadow-md border border-gray-100 px-4 py-4 sm:px-8 sm:py-6 flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-400/30">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-gray-900">
              This is exactly where <span className="text-brand-blue">SKILLECTS</span> steps in.
            </p>
          </div>

          <DotGrid />
        </div>
      </div>
    </section>
  )
}
