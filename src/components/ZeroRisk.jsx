import shieldImage from '../assets/images/zero-risk-shield.jpg'

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function TargetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}
function BarChartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

const timeline = [
  { icon: CheckIcon, title: 'Week 1', desc: 'Deploy Recruiter', sub: 'Quick kickoff and seamless team integration.' },
  { icon: TargetIcon, title: 'Week 2', desc: 'Measure KPIs', sub: 'Track performance and align on goals.' },
  { icon: BarChartIcon, title: 'Week 3', desc: 'Scale Decision', sub: 'Review results and scale with confidence.' },
]

const checks = ['No Setup Fees', 'No Licenses', 'No Hidden Costs', 'No Recruiting Fees', 'Cancel Anytime']

export default function ZeroRisk() {
  return (
    <section id="zero-risk" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-[10px] sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-brand-blue">ZERO RISK</span> DEPLOYMENT
          </h2>
          <p className="mt-4 text-gray-600">Try before you commit. Scale with confidence.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={t.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <t.icon className="w-5 h-5" />
                  </span>
                  {i < timeline.length - 1 && <span className="w-0.5 flex-grow bg-blue-200 my-1" />}
                </div>
                <div className="pb-8">
                  <p className="font-bold text-lg">{t.title}</p>
                  <p className="font-semibold text-gray-900">{t.desc}</p>
                  <p className="text-gray-500 text-sm mt-1">{t.sub}</p>
                  {i < timeline.length - 1 && <div className="w-28 h-px bg-gray-200 mt-4" />}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <ul className="inline-block text-left space-y-4">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-3 font-bold text-gray-900">
                  <span className="text-green-500 text-xl">✔️</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={shieldImage}
              alt="Zero Risk Deployment"
              className="w-64 h-72 rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 bg-blue-50 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-lg flex-shrink-0">
              🛡️
            </span>
            <div>
              <p className="font-bold text-gray-900">Your Success, Our Guarantee</p>
              <p className="text-sm text-gray-500">
                If you're not satisfied in the first 3 weeks, you owe us nothing.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:border-l sm:border-blue-200 sm:pl-6">
            <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-lg flex-shrink-0">
              📅
            </span>
            <div>
              <p className="font-bold text-gray-900">Start Risk-Free Today</p>
              <p className="text-sm text-gray-500">
                Experience the SKILLECTS difference with zero risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
