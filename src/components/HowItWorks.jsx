const steps = [
  {
    n: '1',
    icon: '🖥️',
    title: 'Discovery Call',
    desc: 'We learn about your goals, challenges, and current recruitment process.',
  },
  {
    n: '2',
    icon: '📅',
    title: '1-Week Pilot',
    desc: 'We deploy a recruiter and you experience our process, communication, and results.',
  },
  {
    n: '3',
    icon: '💻',
    title: 'Deploy Recruiter Seat',
    desc: 'Once aligned, we deploy your dedicated recruiter and onboarding is completed in just a few days.',
  },
  {
    n: '4',
    icon: '🧑‍🤝‍🧑',
    title: 'Scale Your Team',
    desc: 'Add more seats, build your pod, and scale submissions, placements, and revenue.',
  },
]

const features = [
  { icon: '🚀', title: 'Fast Onboarding', desc: 'Get started in just a few days.' },
  { icon: '👥', title: 'Risk-Free Pilot', desc: 'Test us first with our 1-week free trial.' },
  { icon: '🛡️', title: 'Dedicated Support', desc: 'A success manager with you always.' },
  { icon: '📈', title: 'Results Focused', desc: 'We are accountable for your success.' },
  { icon: '🔄', title: 'Scale Effortlessly', desc: 'Add seats as your business grows.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Simple Process. <span className="text-brand-blue">Powerful Results.</span>
        </h2>
        <p className="mt-4 text-gray-600">
          From discovery to deployment and beyond — we make scaling your recruitment team
          effortless.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.n} className="text-center relative">
            <span className="inline-flex w-9 h-9 rounded-full bg-brand-blue text-white font-bold items-center justify-center mb-3">
              {step.n}
            </span>
            <p className="font-bold mb-4">{step.title}</p>
            <div className="rounded-2xl bg-gray-50 h-32 flex items-center justify-center text-5xl mb-4">
              {step.icon}
            </div>
            <p className="text-sm text-gray-500">{step.desc}</p>
            {i < steps.length - 1 && (
              <span className="hidden lg:block absolute top-4 -right-6 text-brand-blue text-xl">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 bg-gray-50 rounded-2xl p-8">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-3">
              {f.icon}
            </div>
            <p className="font-bold text-gray-900">{f.title}</p>
            <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5 flex items-center justify-center gap-3">
        <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
          🛡️
        </span>
        <p className="text-gray-700 text-center">
          Our process is built for speed, transparency, and results — so you can focus on what
          matters most: growing your business.
        </p>
      </div>
    </section>
  )
}
