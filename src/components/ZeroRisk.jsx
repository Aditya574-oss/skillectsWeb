const timeline = [
  { icon: '✅', title: 'Week 1', desc: 'Deploy Recruiter' },
  { icon: '➕', title: 'Week 2', desc: 'Measure KPIs' },
  { icon: '🔍', title: 'Week 3', desc: 'Scale Decision' },
]

const checks = ['No Setup Fees', 'No Licenses', 'No Hidden Costs', 'No Recruiting Fees', 'Cancel Anytime']

export default function ZeroRisk() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
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
                  <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl">
                    {t.icon}
                  </span>
                  {i < timeline.length - 1 && <span className="w-0.5 flex-grow bg-blue-200 my-1" />}
                </div>
                <div className="pb-8">
                  <p className="font-bold text-lg">{t.title}</p>
                  <p className="text-gray-500">{t.desc}</p>
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
            <div className="w-56 h-64 rounded-2xl bg-brand-dark flex flex-col items-center justify-center text-white shadow-xl">
              <span className="text-5xl mb-3">🛡️</span>
              <p className="text-2xl font-extrabold tracking-wide">ZERO</p>
              <p className="text-2xl font-extrabold tracking-wide">RISK</p>
            </div>
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
