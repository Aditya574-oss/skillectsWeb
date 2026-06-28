import { useState } from 'react'

const links = ['Solutions', 'How It Works', 'Pricing', 'Resources', 'About Us']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
              <circle cx="12" cy="7" r="4" fill="currentColor" />
              <path d="M4 21v-2a8 8 0 0116 0v2" fill="currentColor" />
            </svg>
            <span
              className="text-2xl tracking-widest uppercase"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
            >
              SKILLECTS
            </span>
          </div>

          {/* Desktop nav + buttons */}
          <div className="ml-auto hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8 text-gray-700 font-medium">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-brand-blue transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#book-a-call"
                className="inline-flex items-center px-5 py-2.5 rounded-lg border border-brand-blue text-brand-blue font-semibold hover:bg-blue-50 transition-colors"
              >
                Book a Call
              </a>
              <a
                href="#start-free-trial"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-blue text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </a>
            </div>
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
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/30">
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
        <nav className="flex flex-col px-6 pt-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsOpen(false)}
              className="py-3.5 text-gray-800 font-medium hover:text-brand-blue transition-colors border-b border-gray-200/50 last:border-0"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3 px-6 pt-6">
          <a
            href="#book-a-call"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3 rounded-lg border border-brand-blue text-brand-blue font-semibold hover:bg-blue-50/60 transition-colors"
          >
            Book a Call
          </a>
          <a
            href="#start-free-trial"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3 rounded-lg bg-brand-blue text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </>
  )
}
