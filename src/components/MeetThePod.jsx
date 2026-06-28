const pod = [
  { role: 'Recruiter', badge: 'Talent Finder', icon: '👨‍💼', desc: 'Finds top talent and builds pipelines.' },
  { role: 'Lead Generator', badge: 'Opportunity Builder', icon: '👨‍💻', desc: 'Generates leads and sets appointments.' },
  { role: 'Market Researcher', badge: 'Market Analyst', icon: '👩‍💻', desc: 'Researches market & identifies key accounts.' },
  { role: 'BD Support', badge: 'Engagement Pro', icon: '🎧', desc: 'Outreach, follow-ups & appointment support.' },
  { role: 'CRM Admin', badge: 'Data Keeper', icon: '🧑‍💼', desc: 'Manages CRM & updates data accurately.' },
  { role: 'QA Specialist', badge: 'Quality Guardian', icon: '👩‍🎧', desc: 'Ensures quality, accuracy & compliance.' },
]

export default function MeetThePod() {
  return (
    <section id="meet-the-pod" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight">
          The People Behind <span className="text-brand-blue">Your Success</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Your dedicated offshore recruitment pod, aligned with your goals and committed to
          results.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {pod.map((p) => (
          <div key={p.role} className="rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center">
            <p className="font-bold text-brand-blue mb-3">{p.role}</p>
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-3xl mb-4">
              {p.icon}
            </div>
            <p className="text-sm text-gray-500 flex-grow">{p.desc}</p>
            <span className="mt-4 border border-brand-blue text-brand-blue text-xs font-semibold rounded-md px-3 py-1.5 w-full">
              {p.badge}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-blue-50 p-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl">
            👥
          </span>
          <p className="font-bold">
            One Pod. One Goal. <span className="text-brand-blue">Your Growth.</span>
          </p>
        </div>

        <div className="hidden sm:block w-px h-10 bg-gray-300 shrink-0" />

        <p className="text-sm text-gray-600 flex-1">
          We work as an extension of your team to deliver measurable results.
        </p>

        <a
          href="#book-a-call"
          className="bg-brand-blue text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0"
        >
          Book Free Strategy Call →
        </a>
      </div>
    </section>
  )
}
