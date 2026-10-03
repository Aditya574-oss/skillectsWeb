import { useEffect, useRef, useState } from 'react'

const navItems = [
  {
    label: 'Solutions',
    items: [
      { label: 'Offshore Recruitment Pods', href: '#build-pod' },
      { label: 'Revenue Intelligence Calculator', href: '#roi-calculator' },
      { label: 'Zero Risk Pilot', href: '#zero-risk' },
      { label: 'Meet Your Recruitment Team', href: '#meet-the-pod' },
      { label: 'Technology Integrations', href: '#tech-stack' },
    ],
  },
  {
    label: 'How It Works',
    items: [
      { label: 'Why SKILLECTS Exists', href: '#solutions' },
      { label: 'Your Recruiting Bottlenecks', href: '#bottlenecks' },
      { label: 'Our Delivery Framework', href: '#how-it-works' },
      { label: 'Book a Strategy Call', href: '#book-a-call' },
    ],
  },
  {
    label: 'Pricing',
    items: [
      { label: 'Pricing Plans', href: '#pricing' },
      { label: 'ROI Calculator', href: '#roi-calculator' },
      { label: 'Zero Risk Deployment', href: '#zero-risk' },
      { label: 'Build Your Pod', href: '#build-pod' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog & Articles', href: '#resources' },
      { label: 'Staffing Growth Academy', href: '#growth-academy' },
      { label: 'Staffing Health Assessment', href: '#assessment' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Success Stories', href: '#success-stories' },
    ],
  },
  {
    label: 'About Us',
    items: [
      { label: 'Why Choose SKILLECTS', href: '#about-us' },
      { label: 'Leadership Experience', href: '#leadership' },
      { label: 'Meet The Pod', href: '#meet-the-pod' },
      { label: 'Technology Stack', href: '#tech-stack' },
    ],
  },
]

function ChevronIcon({ className }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDesktop, setOpenDesktop] = useState(null)
  const [openMobile, setOpenMobile] = useState(null)
  const closeTimer = useRef(null)
  const navRef = useRef(null)

  const openNow = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDesktop(label)
  }

  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 150)
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDesktop(null)
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setOpenDesktop(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  useEffect(() => {
    if (isOpen) setOpenMobile(null)
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-[10px] sm:px-6 h-20 flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
              <circle cx="12" cy="7" r="4" fill="currentColor" />
              <path d="M4 21v-2a8 8 0 0116 0v2" fill="currentColor" />
            </svg>
            <div>
              <span
                className="text-2xl tracking-widest uppercase leading-none block"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
              >
                SKILLECTS
              </span>
              <span className="text-[11px] text-gray-500 tracking-wide block">
                Simplify Workforce. Amplify Business.
              </span>
            </div>
          </div>

          {/* Desktop nav + buttons */}
          <div className="ml-auto hidden lg:flex items-center gap-8">
            <nav ref={navRef} className="flex items-center gap-1 text-gray-700 font-medium">
              {navItems.map((item) => {
                const isOpenItem = openDesktop === item.label
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openNow(item.label)}
                    onMouseLeave={closeSoon}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenDesktop(isOpenItem ? null : item.label)}
                      aria-expanded={isOpenItem}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                        isOpenItem ? 'text-brand-blue' : 'hover:text-brand-blue'
                      }`}
                    >
                      {item.label}
                      <ChevronIcon
                        className={`transition-transform duration-200 ${isOpenItem ? 'rotate-180 text-brand-blue' : 'text-gray-400'}`}
                      />
                    </button>

                    {/* Invisible bridge to prevent hover gap flicker */}
                    <div className="absolute left-0 top-full w-full h-2" />

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 transition-all duration-150 origin-top ${
                        isOpenItem
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1 pointer-events-none'
                      }`}
                    >
                      <div className="rounded-xl border border-gray-100 bg-white shadow-xl shadow-gray-900/5 overflow-hidden py-2">
                        {item.items.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setOpenDesktop(null)}
                            className="block px-4 py-2.5 text-sm text-gray-700 font-normal hover:bg-blue-50 hover:text-brand-blue transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </nav>
            <a
              href="#book-a-call"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Free Strategy Call →
            </a>
          </div>

          {/* Hamburger button — mobile/tablet only */}
          <button
            onClick={() => setIsOpen(true)}
            className="ml-auto lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Spacer to offset the fixed header's height so page content isn't hidden beneath it */}
      <div className="h-20" />

      {/* Blurred backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in panel from right */}
      <div
        className={`fixed top-0 right-0 h-full z-50 w-4/5 max-w-xs lg:hidden
          bg-white/70 backdrop-blur-2xl
          border-l border-white/40
          shadow-2xl
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/30 shrink-0">
          <span
            className="text-lg tracking-widest uppercase text-gray-800"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
          >
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-gray-600 hover:bg-white/40 transition-colors"
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-2 overflow-y-auto">
          {navItems.map((item) => {
            const isExpanded = openMobile === item.label
            return (
              <div key={item.label} className="border-b border-gray-200/50 last:border-0">
                <button
                  type="button"
                  onClick={() => setOpenMobile(isExpanded ? null : item.label)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between py-3.5 text-gray-800 font-medium hover:text-brand-blue transition-colors"
                >
                  {item.label}
                  <ChevronIcon
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-brand-blue' : 'text-gray-400'}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col pb-3 pl-3">
                      {item.items.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="py-2 text-sm text-gray-600 hover:text-brand-blue transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        {/* CTA button */}
        <div className="px-6 pt-6 shrink-0">
          <a
            href="#book-a-call"
            onClick={() => setIsOpen(false)}
            className="w-full text-center block px-5 py-3 rounded-lg bg-brand-blue text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Free Strategy Call →
          </a>
        </div>
      </div>
    </>
  )
}
