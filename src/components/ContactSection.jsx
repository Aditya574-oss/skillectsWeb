import { useState } from 'react'

const benefits = [
  { icon: '📅', title: 'Book A Free Call', desc: 'Pick a time that works best for you.' },
  { icon: '👥', title: 'Talk To An Expert', desc: 'Get personalized insights from recruiting experts.' },
  { icon: '📈', title: 'See Your Growth Plan', desc: 'Walk away with a custom plan to scale your business.' },
  { icon: '🎯', title: 'Start Scaling', desc: 'Implement, grow, and achieve next-level results.' },
]

const trust = [
  { icon: '✅', title: 'Why Recruiting Firms Trust SKILLECTS', desc: '' },
  { icon: '🛡️', title: 'No Long-Term Commitment', desc: 'Scale up or down anytime.' },
  { icon: '🔒', title: 'Risk-Free Engagement', desc: 'No upfront fees. Just results.' },
  { icon: '🏅', title: 'Proven Results', desc: 'Thousands of placements. Millions in revenue generated.' },
  { icon: '👥', title: 'Dedicated Support', desc: 'Your success is our priority.' },
]

function DateField() {
  const [type, setType] = useState('text')
  return (
    <input
      type={type}
      placeholder="Preferred Date"
      onFocus={() => setType('date')}
      onBlur={(e) => { if (!e.target.value) setType('text') }}
      className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue text-gray-500"
    />
  )
}

function IconField({ icon, children }) {
  return (
    <div className="relative flex-1">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        {icon}
      </span>
      {children}
    </div>
  )
}

export default function ContactSection() {
  return (
    <section id="book-a-call" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
            Ready To Scale Your Recruitment?{' '}
            <span className="text-brand-blue">Let's Make It Happen.</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-md">
            Book a free strategy call with our team and discover how{' '}
            <span className="font-semibold text-brand-blue">SKILLECTS</span> can help you drive
            more placements, higher margins, and maximum ROI.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">
                  {b.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{b.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-xl">
              📅
            </span>
            <div>
              <p className="font-bold text-lg">Book Your Free Strategy Call</p>
              <p className="text-sm text-gray-500">
                It's free. It's strategic. And it could be your most valuable call this month.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <IconField icon="🧑">
                <input className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue" placeholder="Full Name" />
              </IconField>
              <IconField icon="🏢">
                <input className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue" placeholder="Company Name" />
              </IconField>
            </div>
            <IconField icon="📧">
              <input type="email" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue" placeholder="Work Email" />
            </IconField>
            <IconField icon="📞">
              <input type="tel" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue" placeholder="Phone Number" />
            </IconField>
            <IconField icon="👥">
              <select className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue text-gray-500">
                <option>How Many Recruiters In Your Team?</option>
                <option>1-5</option>
                <option>6-15</option>
                <option>16-50</option>
                <option>50+</option>
              </select>
            </IconField>
            <IconField icon="💬">
              <select className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue text-gray-500">
                <option>What Are Your Biggest Recruiting Challenges?</option>
                <option>Cost</option>
                <option>Time-to-Fill</option>
                <option>Recruiter Turnover</option>
                <option>Scaling Capacity</option>
              </select>
            </IconField>
            <div className="grid sm:grid-cols-2 gap-4">
              <IconField icon="📅">
                <DateField />
              </IconField>
              <IconField icon="🕐">
                <select className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue text-gray-500">
                  <option>Preferred Time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </IconField>
            </div>
          </div>

          <button className="mt-6 w-full bg-brand-blue text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors">
            Book My Free Strategy Call →
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            🔒 Your information is 100% secure and will never be shared.
          </p>
        </form>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-300 bg-white shadow-md rounded-2xl p-8">
        {trust.map((t) => (
          <div key={t.title} className="flex items-center gap-3 lg:px-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl shrink-0">
              {t.icon}
            </div>
            <div>
              <p className="font-bold text-gray-900">{t.title}</p>
              {t.desc && <p className="text-sm text-gray-500 mt-1">{t.desc}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5 flex items-center justify-center gap-3">
        <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
        <p className="text-gray-700">
          More placements. Higher margins. Maximum growth. That's the{' '}
          <span className="font-bold text-brand-blue">SKILLECTS</span> promise.
        </p>
      </div>
    </section>
  )
}
