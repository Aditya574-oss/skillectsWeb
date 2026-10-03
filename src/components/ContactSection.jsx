import { useState } from 'react'
import officeImage from '../assets/images/contact-office.jpg'

function CalendarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
function PeopleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
function TargetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}
function CheckCircleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
      <polyline points="8 12 11 15 16 9" stroke="white" />
    </svg>
  )
}
function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
function LockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
function RibbonIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" /><polyline points="8.5 13.5 7 22 12 19 17 22 15.5 13.5" />
    </svg>
  )
}
function UserIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" /><path d="M4 20v-1a8 8 0 0 1 16 0v1" />
    </svg>
  )
}
function BuildingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1" /><line x1="9" y1="8" x2="9" y2="8" />
      <line x1="8" y1="8" x2="8" y2="8.01" /><line x1="12" y1="8" x2="12" y2="8.01" /><line x1="16" y1="8" x2="16" y2="8.01" />
      <line x1="8" y1="12" x2="8" y2="12.01" /><line x1="12" y1="12" x2="12" y2="12.01" /><line x1="16" y1="12" x2="16" y2="12.01" />
      <line x1="9" y1="21" x2="9" y2="16" /><line x1="15" y1="21" x2="15" y2="16" />
    </svg>
  )
}
function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2 6 12 13 22 6" />
    </svg>
  )
}
function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function ChatIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}
function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const benefits = [
  { icon: CalendarIcon, title: 'Book A Free Call', desc: 'Pick a time that works best for you.' },
  { icon: PeopleIcon, title: 'Talk To An Expert', desc: 'Get personalized insights from recruiting experts.' },
  { icon: TrendingUpIcon, title: 'See Your Growth Plan', desc: 'Walk away with a custom plan to scale your business.' },
  { icon: TargetIcon, title: 'Start Scaling', desc: 'Implement, grow, and achieve next-level results.' },
]

const trust = [
  { icon: CheckCircleIcon, title: 'Why Recruiting Firms Trust SKILLECTS', desc: '' },
  { icon: ShieldIcon, title: 'No Long-Term Commitment', desc: 'Scale up or down anytime.' },
  { icon: LockIcon, title: 'Risk-Free Engagement', desc: 'No upfront fees. Just results.' },
  { icon: RibbonIcon, title: 'Proven Results', desc: 'Thousands of placements. Millions in revenue generated.' },
  { icon: PeopleIcon, title: 'Dedicated Support', desc: 'Your success is our priority.' },
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

function IconField({ icon: Icon, children }) {
  return (
    <div className="relative flex-1">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      {children}
    </div>
  )
}

export default function ContactSection() {
  return (
    <section id="book-a-call" className="max-w-7xl mx-auto px-[10px] sm:px-6 py-16">
      <div className="relative">
        <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none">
          <div className="ml-auto w-[40%] h-full overflow-hidden">
            <img src={officeImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-12 items-start">
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
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{b.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pt-6 flex justify-center">
          <form className="relative bg-white rounded-2xl border border-gray-100 shadow-lg p-6 w-full max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <CalendarIcon className="w-5 h-5 text-brand-blue" />
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
                <IconField icon={UserIcon}>
                  <input className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue" placeholder="Full Name" />
                </IconField>
                <IconField icon={BuildingIcon}>
                  <input className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue" placeholder="Company Name" />
                </IconField>
              </div>
              <IconField icon={MailIcon}>
                <input type="email" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue" placeholder="Work Email" />
              </IconField>
              <IconField icon={PhoneIcon}>
                <input type="tel" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue" placeholder="Phone Number" />
              </IconField>
              <IconField icon={PeopleIcon}>
                <select className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue text-gray-500">
                  <option>How Many Recruiters In Your Team?</option>
                  <option>1-5</option>
                  <option>6-15</option>
                  <option>16-50</option>
                  <option>50+</option>
                </select>
              </IconField>
              <IconField icon={ChatIcon}>
                <select className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-brand-blue text-gray-500">
                  <option>What Are Your Biggest Recruiting Challenges?</option>
                  <option>Cost</option>
                  <option>Time-to-Fill</option>
                  <option>Recruiter Turnover</option>
                  <option>Scaling Capacity</option>
                </select>
              </IconField>
              <div className="grid sm:grid-cols-2 gap-4">
                <IconField icon={CalendarIcon}>
                  <DateField />
                </IconField>
                <IconField icon={ClockIcon}>
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
            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-gray-400 mt-3">
              <LockIcon className="w-3.5 h-3.5" /> Your information is 100% secure and will never be shared.
            </p>
          </form>
        </div>
        </div>

        <div className="relative mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-300 bg-white shadow-md rounded-2xl p-8">
          {trust.map((t) => (
            <div key={t.title} className="flex items-center gap-3 lg:px-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <t.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{t.title}</p>
                {t.desc && <p className="text-sm text-gray-500 mt-1">{t.desc}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-8 rounded-2xl bg-blue-50 p-5 flex items-center justify-center gap-3">
          <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
            <ArrowRightIcon className="w-5 h-5" />
          </span>
          <p className="text-gray-700">
            More placements. Higher margins. Maximum growth. That's the{' '}
            <span className="font-bold text-brand-blue">SKILLECTS</span> promise.
          </p>
        </div>
      </div>
    </section>
  )
}
