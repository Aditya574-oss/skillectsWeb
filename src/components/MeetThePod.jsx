import sourcerImage from '../assets/images/pod-sourcer.jpg'
import recruiterImage from '../assets/images/pod-recruiter.jpg'
import smeRecruiterImage from '../assets/images/pod-sme-recruiter.jpg'
import bdTeamImage from '../assets/images/pod-bd-team.jpg'
import hrbpImage from '../assets/images/pod-hrbp.jpg'
import onboardingImage from '../assets/images/pod-onboarding.jpg'
import crmAdminImage from '../assets/images/pod-crm-admin.jpg'
import virtualAssistantImage from '../assets/images/pod-virtual-assistant.jpg'

function SearchIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="6" /><path d="M20 20l-5.5-5.5" />
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
function StarPersonIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="4" /><path d="M2 21v-1a5 5 0 0 1 5-5h4" />
      <polygon points="18 12.5 19.1 14.8 21.6 15.2 19.8 17 20.2 19.5 18 18.3 15.8 19.5 16.2 17 14.4 15.2 16.9 14.8" />
    </svg>
  )
}
function PersonPlusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="4" /><path d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
      <line x1="19" y1="8" x2="19" y2="14" /><line x1="16" y1="11" x2="22" y2="11" />
    </svg>
  )
}
function BarChartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" />
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
function ClipboardCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="12" height="17" rx="2" /><rect x="9" y="2" width="6" height="4" rx="1" />
      <polyline points="9 13 11 15 15 11" />
    </svg>
  )
}
function HeadsetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13a9 9 0 0 1 18 0" />
      <rect x="17" y="13" width="4" height="6" rx="1" /><rect x="3" y="13" width="4" height="6" rx="1" />
      <path d="M19 19v1a2 2 0 0 1-2 2h-3" />
    </svg>
  )
}
function DatabaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" /><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  )
}
function GearIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.8 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}
function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const coreTeam = [
  { role: 'Sourcer', badge: 'Talent Finder', icon: SearchIcon, image: sourcerImage, desc: 'Finds top talent and builds strong pipelines.' },
  { role: 'Recruiter', badge: 'Placement Specialist', icon: PeopleIcon, image: recruiterImage, desc: 'Manages end-to-end recruitment and ensures right placements.' },
  { role: 'SME Recruiter', badge: 'Strategic Recruiter', icon: StarPersonIcon, image: smeRecruiterImage, desc: 'Handles niche & leadership hiring and works closely with clients.' },
  { role: 'Lead Generator', badge: 'Lead Builder', icon: PersonPlusIcon, desc: 'Identifies prospects and generates qualified leads.' },
  { role: 'Market Researcher', badge: 'Insight Finder', icon: BarChartIcon, desc: 'Researches market trends and identifies key opportunities.' },
  { role: 'Business Development Team (Independent)', badge: 'Growth Accelerator', icon: TrendingUpIcon, image: bdTeamImage, desc: 'Acquires new clients and drives sustainable business growth.' },
]

const supportTeam = [
  { role: 'HRBP (Independent)', badge: 'People Partner', icon: PeopleIcon, image: hrbpImage, desc: 'Drives HR strategies and enhances employee engagement.' },
  { role: 'On-Boarding (Independent)', badge: 'Seamless Onboarding', icon: ClipboardCheckIcon, image: onboardingImage, desc: 'Ensures seamless onboarding and 100% compliance across clients.' },
  { role: 'BD Support', badge: 'Engagement Pro', icon: HeadsetIcon, desc: 'Handles outreach, follow-ups and appointment coordination.' },
  { role: 'CRM Admin', badge: 'Data Keeper', icon: DatabaseIcon, image: crmAdminImage, desc: 'Manages CRM, updates data and maintains accurate records.' },
  { role: 'Virtual Assistant', badge: 'Operations Coordinator', icon: GearIcon, image: virtualAssistantImage, desc: 'Supports daily operations, reporting, documentation and scheduling.' },
]

function PodCard({ p }) {
  const Icon = p.icon
  return (
    <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      <div className="h-28 bg-gradient-to-br from-slate-300 to-slate-500 relative">
        {p.image && <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover" />}
        <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-md ring-4 ring-white">
          <Icon className="w-5 h-5" />
        </span>
      </div>
      <div className="pt-9 pb-5 px-4 flex flex-col items-center text-center flex-1">
        <p className="font-bold text-brand-blue">{p.role}</p>
        <p className="text-sm text-gray-500 mt-2 flex-1">{p.desc}</p>
        <span className="mt-4 border border-brand-blue text-brand-blue text-xs font-semibold rounded-md px-3 py-1.5 w-full">
          {p.badge}
        </span>
      </div>
    </div>
  )
}

export default function MeetThePod() {
  return (
    <section id="meet-the-pod" className="max-w-7xl mx-auto px-[10px] sm:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-4xl font-extrabold tracking-tight">
          The People Behind <span className="text-brand-blue">Your Success</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Your dedicated offshore recruitment pod, aligned with your goals and committed to
          results.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gray-200" />
        <p className="font-bold text-brand-blue text-sm tracking-wide shrink-0">CORE RECRUITMENT TEAM</p>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {coreTeam.map((p) => (
          <PodCard key={p.role} p={p} />
        ))}
      </div>

      <div className="flex items-center gap-4 mt-12 mb-6">
        <div className="flex-1 h-px bg-gray-200" />
        <p className="font-bold text-brand-blue text-sm tracking-wide shrink-0">INDEPENDENT SPECIALISTS &amp; SUPPORT TEAM</p>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {supportTeam.map((p) => (
          <PodCard key={p.role} p={p} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-blue-50 p-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center">
            <PeopleIcon className="w-6 h-6" />
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
          className="bg-brand-blue text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-2"
        >
          Book Free Strategy Call <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
