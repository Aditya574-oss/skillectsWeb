import deskImage from '../assets/images/resources-desk.jpg'

function PencilIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}
function BookOpenIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" /><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}
function PlayMonitorIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <polygon points="10 8 15 10 10 12.5" fill="currentColor" stroke="none" />
      <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}
function TrendingUpIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
function PieChartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}

const resources = [
  { tag: 'BLOG', color: 'bg-blue-100 text-blue-700', iconBg: 'bg-blue-600', icon: PencilIcon, title: 'How Top Recruiting Firms Drive Higher Margins', desc: 'Actionable strategies to improve pricing, efficiency, and profitability.', cta: 'Read More' },
  { tag: 'GUIDE', color: 'bg-green-100 text-green-700', iconBg: 'bg-green-600', icon: BookOpenIcon, title: 'The Ultimate Guide To Offshore Recruiting', desc: 'Build high-performing offshore teams that scale your business.', cta: 'Read More' },
  { tag: 'WEBINAR', color: 'bg-purple-100 text-purple-700', iconBg: 'bg-purple-600', icon: PlayMonitorIcon, title: 'Scaling Your Recruiting Firm: A Leadership Playbook', desc: 'Watch industry experts share proven scaling frameworks.', cta: 'Watch Now' },
  { tag: 'CASE STUDY', color: 'bg-orange-100 text-orange-700', iconBg: 'bg-orange-500', icon: TrendingUpIcon, title: 'From 20 To 100+ Placements: A Growth Story', desc: 'See how firms like yours achieved breakout growth with SKILLECTS.', cta: 'Read More' },
  { tag: 'REPORT', color: 'bg-teal-100 text-teal-700', iconBg: 'bg-teal-600', icon: PieChartIcon, title: '2024 Recruiting Industry Trends Report', desc: 'Key trends, benchmarks, and predictions for the year ahead.', cta: 'Download Now' },
]

export default function Resources() {
  return (
    <section id="resources" className="relative py-16 overflow-hidden">
      <img src={deskImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/85" />

      <div className="relative max-w-7xl mx-auto px-[10px] sm:px-6">
      <div className="relative mb-12 lg:min-h-[420px] lg:max-w-sm">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Resources To Help You{' '}
          <span className="text-brand-blue">Recruit Smarter &amp; Grow Faster</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-md">
          Expert insights, proven strategies, and industry trends to help your recruiting firm
          stay ahead.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {resources.map((r) => (
          <div key={r.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center">
            <span className={`inline-block self-start text-xs font-bold rounded-md px-3.5 py-1.5 mb-4 ${r.color}`}>
              {r.tag}
            </span>
            <div className={`w-12 h-12 rounded-full ${r.iconBg} text-white flex items-center justify-center mb-4`}>
              <r.icon className="w-6 h-6" />
            </div>
            <p className="font-bold text-gray-900 flex-grow text-center">{r.title}</p>
            <p className="text-sm text-gray-500 mt-2 mb-4 text-center">{r.desc}</p>
            <a href="#" className="text-brand-blue font-semibold text-sm hover:underline">
              {r.cta} →
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
