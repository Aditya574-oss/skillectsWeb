const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const BarChartIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><polyline points="22 10 18 6 14 10" />
  </svg>
)

export const TargetIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    <line x1="22" y1="2" x2="16" y2="8" />
  </svg>
)

export const ShieldCheckIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

export const TrendingUpIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <polyline points="3 17 9 11 13 15 21 6" /><polyline points="15 6 21 6 21 12" />
  </svg>
)

export const DocumentIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
    <polyline points="15 2 15 7 20 7" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" />
  </svg>
)

export const DollarCircleIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="10" /><path d="M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1.1-3 2.5 1.3 2.2 3 2.5 3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5" />
    <line x1="12" y1="5.5" x2="12" y2="18.5" />
  </svg>
)

export const MoneyBagIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M9 4h6l1.5 3.2C18.7 9 20 11.4 20 14a7 7 0 1 1-14 0c0-2.6 1.3-5 3.5-6.8L9 4z" />
    <path d="M9.5 4 8 2h8l-1.5 2" /><line x1="12" y1="10" x2="12" y2="16" />
  </svg>
)

export const RefreshCircleIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M21 12a9 9 0 1 1-3-6.7" /><polyline points="21 3 21 8 16 8" />
  </svg>
)

export const InfoIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="11" />
    <circle cx="12" cy="8" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

export const RocketIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4.5 16.5c-1 1-1.5 3.5-1.5 3.5s2.5-.5 3.5-1.5 1-2.5 0-3.5-2.5-.5-2 1.5z" />
    <path d="M12 15l-3-3a22 22 0 0 1 4-9c4-1 7 2 6 6a22 22 0 0 1-9 4z" />
    <circle cx="15" cy="9" r="1.5" />
  </svg>
)

export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const LockIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

export const PersonIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" />
  </svg>
)

export const PeopleIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

export const MonitorIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

export const BuildingIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="4" y="2" width="16" height="20" rx="1" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" />
    <line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" />
    <line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" /><line x1="10" y1="22" x2="10" y2="18" />
    <line x1="14" y1="22" x2="14" y2="18" />
  </svg>
)

export const GraduationCapIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </svg>
)

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)

export const ArrowRightIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

export const RecalculateIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15" />
  </svg>
)
