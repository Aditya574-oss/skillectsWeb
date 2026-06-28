import { useState } from 'react'

const videos = [
  { role: 'CEO, IT Staffing Firm', quote: '"SKILLECTS helped us scale our team without increasing overhead."', emoji: '🧑‍💼' },
  { role: 'VP Delivery, Staffing Firm', quote: '"The recruiters are outstanding. Our placements jumped 40%."', emoji: '👩‍💼' },
  { role: 'Delivery Manager', quote: '"Onboarding was easy. Results were immediate and measurable."', emoji: '👩‍💻' },
  { role: 'Founder, Recruiting Agency', quote: '"SKILLECTS is now a core part of how we deliver for clients."', emoji: '🧑‍💻' },
]

export default function VideoTestimonials() {
  const [active, setActive] = useState(0)
  const visible = [videos[active], videos[(active + 1) % videos.length], videos[(active + 2) % videos.length]]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Real Clients. <span className="text-brand-blue">Real Results.</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Hear from staffing leaders who scaled faster with{' '}
            <span className="font-semibold text-brand-blue">SKILLECTS</span>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((v) => (
            <div key={v.role} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-800 h-48 flex items-center justify-center relative">
                <span className="text-6xl opacity-70">{v.emoji}</span>
                <button className="absolute w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl hover:bg-blue-700 transition-colors">
                  ▶
                </button>
              </div>
              <div className="p-5">
                <p className="font-bold mb-1">{v.role}</p>
                <p className="text-sm text-gray-500 italic">{v.quote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? 'bg-brand-blue' : 'bg-blue-200'}`}
              aria-label={`Show testimonial set ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-blue-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl">
              ▶
            </span>
            <div>
              <p className="font-bold">
                See How <span className="text-brand-blue">SKILLECTS</span> Can Transform Your
                Business
              </p>
              <p className="text-sm text-gray-500">
                Watch more success stories and start building your high-performance team.
              </p>
            </div>
          </div>
          <a
            href="#book-a-call"
            className="bg-brand-blue text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Book Free Strategy Call →
          </a>
        </div>
      </div>
    </section>
  )
}
