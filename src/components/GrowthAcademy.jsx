import offshoreStrategiesImage from '../assets/images/academy-offshore-strategies.jpg'
import sourcingHacksImage from '../assets/images/academy-sourcing-hacks.jpg'
import vmsMspImage from '../assets/images/academy-vms-msp.jpg'
import recruitingTechImage from '../assets/images/academy-recruiting-tech.jpg'
import deliveryExcellenceImage from '../assets/images/academy-delivery-excellence.jpg'
import roiMaxImage from '../assets/images/academy-roi-max.jpg'
import trainingCertsImage from '../assets/images/academy-training-certs.jpg'

const topics = [
  { title: 'Offshore Recruiting Strategies', image: offshoreStrategiesImage },
  { title: 'Candidate Sourcing Hacks', image: sourcingHacksImage },
  { title: 'VMS / MSP Best Practices', image: vmsMspImage },
  { title: 'Recruiting Technology', image: recruitingTechImage },
  { title: 'Delivery Excellence', image: deliveryExcellenceImage },
  { title: 'ROI Maximization', image: roiMaxImage },
  { title: 'Training & Certification', image: trainingCertsImage },
]

const checks = [
  'Expert-Led Courses',
  'Proven Frameworks & Templates',
  'Real-World Case Studies',
  'Community of Top Recruiters',
  'Actionable Lessons You Can Use Today',
]

export default function GrowthAcademy() {
  return (
    <section id="growth-academy" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-[10px] sm:px-6">
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Actionable Insights to <span className="text-brand-blue">Scale Your Staffing Business.</span>
          </h2>
          <p className="mt-4 text-gray-600">Learn. Implement. Grow. Repeat.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {topics.map((t) => (
            <div key={t.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-center">
              <img src={t.image} alt="" className="h-24 w-full object-cover" />
              <p className="font-semibold text-sm text-gray-900 p-4">{t.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 bg-blue-50 rounded-2xl p-6">
          {checks.map((c) => (
            <div key={c} className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm flex-shrink-0">
                ✓
              </span>
              <p className="font-semibold text-gray-900 text-sm">{c}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900 to-brand-dark overflow-hidden grid lg:grid-cols-2 items-center">
          <div className="p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              What Happens In The Next 90 Days If Nothing Changes?
            </h3>
            <p className="mt-3 text-gray-300 max-w-md">
              Your competitors are building delivery capacity while you're recruiting.{' '}
              <span className="text-green-400 font-semibold">Don't fall behind.</span>
            </p>
            <a
              href="#start-free-trial"
              className="inline-block mt-6 bg-brand-blue text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors"
            >
              Start Your Free Trial Today →
            </a>
          </div>
          {/* Placeholder for the design's growth-momentum photo; no image asset exists yet. */}
          <div className="hidden lg:block h-full min-h-[220px] bg-gradient-to-br from-slate-600 to-slate-800" />
        </div>
      </div>
    </section>
  )
}
