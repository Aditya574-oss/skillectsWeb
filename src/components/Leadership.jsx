const stats = [
  { value: '10+', label: 'Years Staffing', icon: '👥' },
  { value: '15+', label: 'Years in Executive Leadership', icon: '🏆' },
  { value: 'Fortune 500', label: 'Experience', icon: '🏢' },
]

const brands = ['IBM', 'verizon', 'NTT', 'DXC TECHNOLOGY', 'HCLTech']

export default function Leadership() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Trusted by Leaders. <span className="text-brand-blue">Proven by Results.</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Deep industry expertise. Scalable leadership. Consistent outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-blue">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              <div className="w-8 h-0.5 bg-gray-200 mx-auto my-3" />
              <span className="text-3xl">{s.icon}</span>
            </div>
          ))}
          <div className="bg-blue-50 rounded-2xl p-6 text-center">
            <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl mx-auto mb-3">
              ✔️
            </span>
            <p className="font-bold text-brand-blue">Built on Trust.</p>
            <p className="text-sm text-gray-500 mt-1">
              Led by professionals with a track record of building and scaling high-impact
              recruitment teams.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <p className="font-bold mb-4">Trusted by Leading Brands</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 font-bold text-lg">
            {brands.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Experience You Can Count On.</p>
            <p className="text-sm text-gray-500">
              Leadership that understands staffing. Results that drive your growth.
            </p>
          </div>
          <div className="flex -space-x-2 text-3xl">
            <span>🧑‍💼</span>
            <span>👩‍💼</span>
            <span>🧑‍💻</span>
          </div>
          <a
            href="#book-a-call"
            className="bg-brand-blue text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            → Partner with Proven Leaders
          </a>
        </div>
      </div>
    </section>
  )
}
