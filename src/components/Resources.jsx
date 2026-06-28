const resources = [
  { tag: 'BLOG', color: 'bg-blue-100 text-blue-700', icon: '📝', title: 'How Top Recruiting Firms Drive Higher Margins', desc: 'Actionable strategies to improve pricing, efficiency, and profitability.', cta: 'Read More' },
  { tag: 'GUIDE', color: 'bg-green-100 text-green-700', icon: '📖', title: 'The Ultimate Guide To Offshore Recruiting', desc: 'Build high-performing offshore teams that scale your business.', cta: 'Read More' },
  { tag: 'WEBINAR', color: 'bg-purple-100 text-purple-700', icon: '▶️', title: 'Scaling Your Recruiting Firm: A Leadership Playbook', desc: 'Watch industry experts share proven scaling frameworks.', cta: 'Watch Now' },
  { tag: 'CASE STUDY', color: 'bg-orange-100 text-orange-700', icon: '📊', title: 'From 20 To 100+ Placements: A Growth Story', desc: 'See how firms like yours achieved breakout growth with SKILLECTS.', cta: 'Read More' },
  { tag: 'REPORT', color: 'bg-teal-100 text-teal-700', icon: '📈', title: '2024 Recruiting Industry Trends Report', desc: 'Key trends, benchmarks, and predictions for the year ahead.', cta: 'Download Now' },
]

export default function Resources() {
  return (
    <section id="resources" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            Resources To Help You{' '}
            <span className="text-brand-blue">Recruit Smarter &amp; Grow Faster</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-md">
            Expert insights, proven strategies, and industry trends to help your recruiting firm
            stay ahead.
          </p>
        </div>
        <div className="hidden lg:flex justify-center">
          <div className="w-64 h-40 rounded-2xl bg-gray-100 flex items-center justify-center text-5xl">
            📚
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {resources.map((r) => (
          <div key={r.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center">
            <span className={`inline-block self-start text-xs font-bold rounded-md px-3.5 py-1.5 mb-4 ${r.color}`}>
              {r.tag}
            </span>
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl mb-4">
              {r.icon}
            </div>
            <p className="font-bold text-gray-900 flex-grow text-center">{r.title}</p>
            <p className="text-sm text-gray-500 mt-2 mb-4 text-center">{r.desc}</p>
            <a href="#" className="text-brand-blue font-semibold text-sm hover:underline">
              {r.cta} →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-brand-blue p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
              ✉️
            </span>
            <div>
              <p className="font-bold text-lg">Stay Ahead. Get Insights That Matter.</p>
              <p className="text-sm text-blue-100">
                Subscribe to our newsletter for the latest recruiting insights, strategies, and
                updates.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
            <form className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your work email"
                className="rounded-lg px-5 py-3 outline-none flex-grow sm:w-64 text-left"
              />
              <button className="bg-white text-brand-blue font-semibold rounded-lg px-6 py-3 hover:bg-blue-50 transition-colors whitespace-nowrap">
                Subscribe Now →
              </button>
            </form>
            <p className="text-left text-xs text-blue-100">
              🔒 No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
