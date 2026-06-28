const tools = ['Bullhorn', 'Loxo', 'JobDiva', 'LinkedIn Talent Solutions', 'Indeed', 'Google Workspace', 'Microsoft 365']

const features = [
  { icon: '☁️', title: 'Secure Integrations', desc: 'Enterprise-grade security and data protection.' },
  { icon: '⚙️', title: 'Custom Workflows', desc: 'Automations and workflows built around your process.' },
  { icon: '📈', title: 'Real-Time Sync', desc: 'Real-time data sync across your critical systems.' },
  { icon: '📄', title: 'API & Extensible', desc: 'Open API and flexible architecture for anything you need.' },
  { icon: '🎧', title: 'Dedicated Support', desc: 'Tech support that understands recruiting and moves fast.' },
]

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight">
          We Work Inside <span className="text-brand-blue">Your Ecosystem</span>
        </h2>
        <p className="mt-4 text-gray-600">Fully integrated. Secure. Built for performance.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {tools.map((t) => (
          <div key={t} className="rounded-2xl border border-gray-100 shadow-sm h-24 flex items-center justify-center font-bold text-gray-700 text-center px-2">
            {t}
          </div>
        ))}
      </div>
      <p className="text-center text-brand-blue font-semibold mt-4">....and many more</p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-3xl mx-auto mb-4">
              {f.icon}
            </div>
            <p className="font-bold text-gray-900">{f.title}</p>
            <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-blue-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl">
            ✔️
          </span>
          <div>
            <p className="font-bold">Your Tools. Our People. One Powerful System.</p>
            <p className="text-sm text-gray-500">We plug in, sync up, and help you scale.</p>
          </div>
        </div>
        <a
          href="#book-a-call"
          className="bg-brand-blue text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          See How We Integrate →
        </a>
      </div>
    </section>
  )
}
