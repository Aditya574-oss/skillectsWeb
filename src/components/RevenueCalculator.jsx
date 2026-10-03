import { useEffect, useRef, useState } from 'react'
import { fmt, fmtPct } from './revenue/calc'
import { useCalculator } from './revenue/CalculatorContext'
import { downloadReportPdf } from './revenue/generateReport'
import { validateLead } from './revenue/validateLead'
import DeliveryHealthGauge from './revenue/DeliveryHealthGauge'
import RevenueGrowthChart from './revenue/RevenueGrowthChart'
import {
  BarChartIcon, TargetIcon, ShieldCheckIcon, TrendingUpIcon, DocumentIcon,
  DollarCircleIcon, MoneyBagIcon, RefreshCircleIcon, InfoIcon, RocketIcon,
  CheckIcon, LockIcon, PersonIcon, PeopleIcon, MonitorIcon, BuildingIcon,
  GraduationCapIcon, ClockIcon, ArrowRightIcon, RecalculateIcon,
} from './revenue/Icons'

function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function DemoDataNotice({ onClose, onEnterOwnNumbers }) {
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-7">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
          <InfoIcon className="w-6 h-6 text-brand-blue" />
        </div>
        <p className="text-lg font-bold text-gray-900 leading-snug">
          These Numbers Are Just a Preview
        </p>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          The figures above are sample numbers so you can see how the calculator works — not your
          real results yet. Pop in your own recruiting numbers to generate a report that's actually
          yours, or skip ahead and talk to our team directly.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="#book-a-call"
            onClick={onClose}
            className="flex-1 text-center bg-brand-blue text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
          >
            Book a Free Call <ArrowRightIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onEnterOwnNumbers}
            className="flex-1 text-center border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            I'll Enter My Numbers
          </button>
        </div>
      </div>
    </div>
  )
}

function ReportField({ label, name, type = 'text', required, value, error, onChange, autoComplete }) {
  return (
    <div>
      <label htmlFor={`report-${name}`} className="block text-xs font-semibold text-gray-700 mb-1.5">
        {label} {required ? <span className="text-red-500">*</span> : <span className="text-gray-400 font-normal">(optional)</span>}
      </label>
      <input
        id={`report-${name}`}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-1 ${
          error
            ? 'border-red-400 focus:border-red-400 focus:ring-red-400'
            : 'border-gray-300 focus:border-brand-blue focus:ring-brand-blue'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

function ReportModal({ stage, onSubmit, onClose, onRetry, savedLead }) {
  const [values, setValues] = useState({
    fullName: savedLead?.fullName ?? '',
    companyName: savedLead?.companyName ?? '',
    email: savedLead?.email ?? '',
    phone: savedLead?.phone ?? '',
  })
  const [errors, setErrors] = useState({})
  const locked = stage === 'loading'

  useEffect(() => {
    if (locked) return
    const handleEscape = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [locked, onClose])

  const setField = (key) => (val) => {
    setValues((v) => ({ ...v, [key]: val }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validateLead(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    onSubmit({
      fullName: values.fullName.trim(),
      companyName: values.companyName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
    })
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
        onClick={locked ? undefined : onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7">
        {!locked && (
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        )}

        {stage === 'form' && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <DocumentIcon className="w-6 h-6 text-brand-blue" />
            </div>
            <p className="text-lg font-bold text-gray-900 leading-snug">Get Your Personalized Report</p>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Enter your details to download a report built on your numbers. Fields marked
              <span className="text-red-500"> * </span>are required.
            </p>

            <div className="mt-5 space-y-4">
              <ReportField label="Full Name" name="fullName" required autoComplete="name"
                value={values.fullName} error={errors.fullName} onChange={setField('fullName')} />
              <ReportField label="Company Name" name="companyName" autoComplete="organization"
                value={values.companyName} error={errors.companyName} onChange={setField('companyName')} />
              <ReportField label="Work Email" name="email" type="email" required autoComplete="email"
                value={values.email} error={errors.email} onChange={setField('email')} />
              <ReportField label="Phone Number" name="phone" type="tel" required autoComplete="tel"
                value={values.phone} error={errors.phone} onChange={setField('phone')} />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-brand-blue text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              Download My Report <ArrowRightIcon className="w-4 h-4" />
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <LockIcon className="w-3.5 h-3.5" /> Your details are kept confidential.
            </p>
          </form>
        )}

        {stage === 'loading' && (
          <div className="py-8 flex flex-col items-center text-center" role="status" aria-live="polite">
            <div className="w-12 h-12 rounded-full border-4 border-blue-100 border-t-brand-blue animate-spin" />
            <p className="mt-5 text-lg font-bold text-gray-900">Preparing Your Report…</p>
            <p className="mt-2 text-sm text-gray-600">
              We're generating your personalized PDF. This will only take a moment.
            </p>
          </div>
        )}

        {stage === 'error' && (
          <div className="py-4 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
              <InfoIcon className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-lg font-bold text-gray-900">We Couldn't Prepare Your Report</p>
            <p className="mt-2 text-sm text-gray-600">Something went wrong while generating your PDF. Please try again.</p>
            <div className="mt-6 flex gap-3 w-full">
              <button
                onClick={onRetry}
                className="flex-1 bg-brand-blue text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="flex-1 border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const features = [
  { title: 'Data-Driven Projections', desc: 'Real outcomes based on your actual business metrics.', icon: BarChartIcon },
  { title: 'Accurate & Transparent', desc: 'No assumptions. No fluff. Just clear, reliable insights.', icon: TargetIcon },
  { title: 'Risk-Free & Confidential', desc: 'Your data is secure and never shared.', icon: ShieldCheckIcon },
  { title: 'Actionable Results', desc: 'Get a custom growth roadmap built for your business.', icon: TrendingUpIcon },
]

const bottomFeatures = [
  { title: '2X Faster Hiring', desc: 'Reduce time-to-fill by up to 50%.', icon: ClockIcon },
  { title: 'Lower Cost per Hire', desc: 'Save up to 60% on recruitment costs.', icon: DollarCircleIcon },
  { title: 'Access Top Talent', desc: 'Tap into a global talent pool of experts.', icon: PeopleIcon },
  { title: 'Scalable On Demand', desc: 'Scale your team up or down effortlessly.', icon: TrendingUpIcon },
  { title: 'Reduce Risk', desc: 'Minimize hiring risk and turnover.', icon: ShieldCheckIcon },
]

function Field({ label, value, onChange, prefix }) {
  const [text, setText] = useState(String(value))

  const handleChange = (e) => {
    const raw = e.target.value
    setText(raw)
    if (raw !== '' && !Number.isNaN(Number(raw))) {
      onChange(Number(raw))
    }
  }

  const handleBlur = () => {
    if (text === '') {
      setText('0')
      onChange(0)
    }
  }

  return (
    <div className="flex-1 min-w-[130px]">
      <label className="block text-xs font-medium text-gray-600 mb-1.5">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg bg-white px-3 py-2 focus-within:border-brand-blue focus-within:ring-1 focus-within:ring-brand-blue">
        {prefix && <span className="text-sm font-semibold text-gray-500 mr-1">{prefix}</span>}
        <input
          type="number"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full text-sm font-semibold text-gray-900 outline-none min-w-0"
        />
      </div>
    </div>
  )
}

function StatTile({ icon: Icon, iconBg, iconColor, label, value, delta, deltaColor }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center mb-3 ${iconBg}`}>
        <Icon className={`w-4.5 h-4.5 ${iconColor}`} style={{ width: 18, height: 18 }} />
      </div>
      <p className="text-xs text-gray-500 font-medium leading-tight">{label}</p>
      <p className="text-2xl font-extrabold text-gray-900 mt-1 leading-tight">{value}</p>
      <p className={`text-xs font-semibold mt-1 ${deltaColor}`}>{delta}</p>
    </div>
  )
}

function SummaryField({ label, value, prefix }) {
  return (
    <div className="flex-1 min-w-[130px]">
      <p className="text-xs font-medium text-gray-600 mb-1.5">{label}</p>
      <div className="flex items-center border border-gray-300 rounded-lg bg-white px-3 py-2">
        {prefix && <span className="text-sm font-semibold text-gray-500 mr-1">{prefix}</span>}
        <span className="text-sm font-semibold text-gray-900">{value}</span>
      </div>
    </div>
  )
}

function CostBlock({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col items-center text-center gap-1.5 shrink-0">
      <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-gray-700" />
      </div>
      <p className="text-xs font-semibold text-gray-700 leading-tight whitespace-nowrap">{label}</p>
      <p className="text-sm font-bold text-gray-900">{value}</p>
    </div>
  )
}

export default function RevenueCalculator() {
  const {
    inputs, setInputs, metrics: m, isDefault, showDemoNotice, setShowDemoNotice, leadDetails, setLeadDetails,
  } = useCalculator()
  const [draft, setDraft] = useState(inputs)
  const [generatingReport, setGeneratingReport] = useState(false)
  const [reportStage, setReportStage] = useState(null)
  const titleRef = useRef(null)
  const leftColRef = useRef(null)
  const calcCardRef = useRef(null)
  const threeUpRef = useRef(null)
  const inHouseRef = useRef(null)
  const bottomBannerRef = useRef(null)
  const footerRef = useRef(null)

  const setDraftField = (key) => (value) => setDraft((d) => ({ ...d, [key]: value }))
  const recalculate = () => setInputs(draft)

  const handleEnterOwnNumbers = () => {
    setShowDemoNotice(false)
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleGenerateReport = () => {
    if (generatingReport) return
    if (isDefault) {
      setShowDemoNotice(true)
      return
    }
    setReportStage('form')
  }

  const runReportDownload = async (lead) => {
    setLeadDetails(lead)
    setReportStage('loading')
    setGeneratingReport(true)
    try {
      await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)))
      const blocks = [
        titleRef.current,
        leftColRef.current,
        calcCardRef.current,
        threeUpRef.current,
        inHouseRef.current,
        bottomBannerRef.current,
        footerRef.current,
      ]
      await downloadReportPdf(blocks, 'skillects-revenue-report.pdf')
      setReportStage(null)
    } catch {
      setReportStage('error')
    } finally {
      setGeneratingReport(false)
    }
  }

  return (
    <section id="roi-calculator" className="max-w-7xl mx-auto px-[10px] sm:px-6 py-16">

      {/* Heading */}
      <div ref={titleRef} className="pb-1.5">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Revenue Intelligence Center</h2>
        <p className="text-3xl font-bold tracking-tight text-gray-900 mt-1">
          See Your Growth Potential. <span className="text-brand-blue">In Real Numbers.</span>
        </p>

        {/* Shown only in the downloaded PDF, with the details captured from the report form. */}
        {leadDetails && (
          <div data-pdf-show="block" className="hidden mt-5 rounded-xl border border-gray-200 p-4 text-sm text-gray-700">
            <p className="font-bold text-gray-900 mb-2">Prepared for</p>
            <p>Full Name: {leadDetails.fullName}</p>
            {leadDetails.companyName && <p>Company: {leadDetails.companyName}</p>}
            <p>Email: {leadDetails.email}</p>
            <p>Phone: {leadDetails.phone}</p>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-[0.85fr_1.7fr] gap-8 items-start mt-8">

        {/* LEFT column */}
        <div ref={leftColRef} className="pb-2">
          <p className="text-gray-500 font-medium">
            Our interactive calculator shows how partnering with SKILLECTS can increase placements,
            reduce costs, and maximize your ROI.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-6 mt-8">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-2">
                <f.icon className="w-6 h-6 text-brand-blue" />
                <p className="font-bold text-gray-900 text-sm leading-snug">{f.title}</p>
                <p className="text-xs text-gray-500 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>

          <div data-pdf-hide className="mt-8 rounded-2xl bg-blue-50 p-5 flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
              <DocumentIcon className="w-5 h-5 text-brand-blue" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                Get your personalized growth report instantly. No credit card required.
              </p>
              <button
                onClick={handleGenerateReport}
                disabled={generatingReport}
                className="mt-3 bg-brand-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {generatingReport ? 'Generating…' : 'Generate My Free Report'} <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT column */}
        <div className="flex flex-col gap-6">

          {/* Calculator card */}
          <div ref={calcCardRef}>
            <div className="inline-flex items-center bg-brand-dark text-white text-xs font-bold tracking-wide px-4 py-2 rounded-t-lg ml-4 relative z-10">
              INTERACTIVE CALCULATOR
            </div>
            <div className="rounded-2xl rounded-tl-none border border-gray-200 shadow-md p-6 -mt-px">
              <div data-pdf-hide className="flex flex-wrap items-end gap-4">
                <Field label="Number of Recruiters" value={draft.recruiters} onChange={setDraftField('recruiters')} />
                <Field label="Placements per Month" value={draft.placementsPerMonth} onChange={setDraftField('placementsPerMonth')} />
                <Field label="Avg. Recruiter Salary (Fully Loaded)" value={draft.salary} onChange={setDraftField('salary')} prefix="$" />
                <Field label="Other Recruiting Costs / Month" value={draft.otherCostsMonth} onChange={setDraftField('otherCostsMonth')} prefix="$" />
                <Field label="Avg. Gross Margin / Placement" value={draft.grossMarginPerPlacement} onChange={setDraftField('grossMarginPerPlacement')} prefix="$" />
                <button
                  onClick={recalculate}
                  className="shrink-0 bg-brand-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  <RecalculateIcon className="w-4 h-4" /> Recalculate
                </button>
              </div>

              {/* Read-only stand-in for the inputs above: html2canvas can't reliably
                  paint live <input> values, so the PDF capture swaps to this instead. */}
              <div data-pdf-show="flex" className="hidden flex-wrap items-end gap-4">
                <SummaryField label="Number of Recruiters" value={inputs.recruiters} />
                <SummaryField label="Placements per Month" value={inputs.placementsPerMonth} />
                <SummaryField label="Avg. Recruiter Salary (Fully Loaded)" value={inputs.salary} prefix="$" />
                <SummaryField label="Other Recruiting Costs / Month" value={inputs.otherCostsMonth} prefix="$" />
                <SummaryField label="Avg. Gross Margin / Placement" value={inputs.grossMarginPerPlacement} prefix="$" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <StatTile
                  icon={DollarCircleIcon} iconBg="bg-green-50" iconColor="text-green-600"
                  label="Additional Revenue / Year" value={fmt(m.additionalRevenue)}
                  delta={`+${fmtPct(m.revenueDeltaPct)} vs Current`} deltaColor="text-green-600"
                />
                <StatTile
                  icon={TrendingUpIcon} iconBg="bg-green-50" iconColor="text-green-600"
                  label="Additional Gross Profit / Year" value={fmt(m.additionalGrossProfit)}
                  delta={`+${fmtPct(m.grossProfitDeltaPct)} vs Current`} deltaColor="text-green-600"
                />
                <StatTile
                  icon={MoneyBagIcon} iconBg="bg-blue-50" iconColor="text-brand-blue"
                  label="Annual Cost Savings" value={fmt(m.annualCostSavings)}
                  delta={`+${fmtPct(m.costSavingsRatio * 100)} vs Current`} deltaColor="text-brand-blue"
                />
                <StatTile
                  icon={RefreshCircleIcon} iconBg="bg-purple-50" iconColor="text-purple-600"
                  label="Estimated ROI" value={fmtPct(m.roiPct)}
                  delta="ROI in Year 1" deltaColor="text-purple-600"
                />
              </div>
            </div>
          </div>

          {/* 3-up: health score / projection / recommended plan */}
          <div ref={threeUpRef} className="grid md:grid-cols-3 gap-6">

            <div className="rounded-2xl border border-gray-200 shadow-md p-5">
              <p className="font-bold text-brand-blue text-xs tracking-wide flex items-center gap-1.5 mb-4">
                DELIVERY HEALTH SCORE <InfoIcon className="w-3.5 h-3.5 text-gray-300" />
              </p>
              <DeliveryHealthGauge score={m.healthScore} rating={m.healthRating} />
              <div className="mt-4 space-y-2.5">
                {m.scoreBreakdown.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-500 font-medium">{s.label}</span>
                      <span className="font-bold text-gray-700">{s.value}/100</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-green-500" style={{ width: `${s.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 shadow-md p-5">
              <p className="font-bold text-brand-blue text-xs tracking-wide flex items-center gap-1.5 mb-4">
                REVENUE GROWTH PROJECTION (3 YEARS) <InfoIcon className="w-3.5 h-3.5 text-gray-300" />
              </p>
              <RevenueGrowthChart withSkillects={m.projection.withSkillects} currentState={m.projection.currentState} />
            </div>

            <div className="rounded-2xl border border-gray-200 shadow-md p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-brand-blue text-xs tracking-wide">RECOMMENDED PLAN</p>
                <span className="bg-brand-dark text-white text-[10px] font-bold px-2.5 py-1 rounded-md">BEST FIT</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <RocketIcon className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-extrabold text-gray-900 leading-tight">{m.plan.name}</p>
                  <p className="text-xs text-gray-500 leading-tight">{m.plan.tagline}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {m.plan.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon className="w-4 h-4 text-green-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Est. ROI</p>
                  <p className="font-extrabold text-brand-blue">{fmtPct(m.roiPct)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Est. Revenue Gain / Year</p>
                  <p className="font-extrabold text-brand-blue">{fmt(m.additionalRevenue)}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* In-house vs SKILLECTS */}
      <div ref={inHouseRef} className="mt-14">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="font-bold text-gray-900 text-sm tracking-wide shrink-0">IN-HOUSE VS. SKILLECTS</p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="rounded-2xl border border-gray-200 shadow-md p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">

            <div className="flex flex-col items-center gap-4">
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-md">IN-HOUSE (Traditional Model)</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <CostBlock icon={PersonIcon} label="Recruiter Salaries" value={`${fmt(m.costComparison.recruiterSalaries)}/yr`} />
                <span className="text-gray-300 font-bold text-lg">+</span>
                <CostBlock icon={ShieldCheckIcon} label="Benefits & Taxes" value={`${fmt(m.costComparison.benefitsTaxes)}/yr`} />
                <span className="text-gray-300 font-bold text-lg">+</span>
                <CostBlock icon={MonitorIcon} label="Software & Tools" value={`${fmt(m.costComparison.softwareTools)}/yr`} />
                <span className="text-gray-300 font-bold text-lg">+</span>
                <CostBlock icon={BuildingIcon} label="Office & Overheads" value={`${fmt(m.costComparison.officeOverheads)}/yr`} />
                <span className="text-gray-300 font-bold text-lg">+</span>
                <CostBlock icon={GraduationCapIcon} label="Hiring & Training" value={`${fmt(m.costComparison.hiringTraining)}/yr`} />
                <span className="text-gray-300 font-bold text-lg">=</span>
                <div className="rounded-xl border border-gray-200 px-5 py-3 text-center">
                  <p className="text-xs text-gray-400 font-medium">Total Annual Cost</p>
                  <p className="font-extrabold text-gray-900">{fmt(m.costComparison.inHouseTotal)}</p>
                </div>
              </div>
            </div>

            <div className="w-11 h-11 rounded-full bg-brand-dark text-white flex items-center justify-center font-extrabold text-sm shrink-0">
              VS
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="bg-brand-dark text-white text-xs font-bold px-3 py-1.5 rounded-md">WITH SKILLECTS (Offshore RPO Model)</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <CostBlock icon={PersonIcon} label="One Flat Monthly Investment" value={`${fmt(m.costComparison.skillectsSeatMonthly)}/seat`} />
                <span className="text-gray-300 font-bold text-lg">=</span>
                <div className="rounded-xl border border-gray-200 px-5 py-3 text-center">
                  <p className="text-xs text-gray-400 font-medium">Total Annual Cost</p>
                  <p className="font-extrabold text-brand-blue">{fmt(m.costComparison.skillectsTotal)}</p>
                </div>
              </div>
            </div>

            <ArrowRightIcon className="w-6 h-6 text-gray-300 hidden lg:block shrink-0" />

            <div className="rounded-xl bg-green-50 px-6 py-3 text-center shrink-0">
              <p className="text-xs text-gray-500 font-semibold">YOU SAVE</p>
              <p className="font-extrabold text-green-600 text-xl leading-tight">{fmt(m.costComparison.youSave)}</p>
              <p className="text-xs text-gray-500">Every Year</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div ref={bottomBannerRef} className="mt-10 rounded-2xl bg-brand-dark p-6 lg:p-8">
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 flex-1 w-full">
            {bottomFeatures.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-2">
                <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-white text-sm leading-tight">{f.title}</p>
                <p className="text-xs text-white/60 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="w-px self-stretch bg-white/15 hidden xl:block shrink-0" />

          <div data-pdf-hide className="shrink-0 text-center xl:text-left">
            <p className="font-bold text-white leading-tight">Ready to See Your Full Potential?</p>
            <p className="text-xs text-white/60 mt-1">Generate your custom report in seconds.</p>
            <button
              onClick={handleGenerateReport}
              disabled={generatingReport}
              className="mt-3 bg-white text-brand-blue text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {generatingReport ? 'Generating…' : 'Generate Free Report'} <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <p ref={footerRef} className="mt-6 py-2 text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
        <LockIcon className="w-3.5 h-3.5" /> Your data is 100% secure and confidential. We never share your information.
      </p>

      {showDemoNotice && (
        <DemoDataNotice onClose={() => setShowDemoNotice(false)} onEnterOwnNumbers={handleEnterOwnNumbers} />
      )}

      {reportStage && (
        <ReportModal
          stage={reportStage}
          onSubmit={runReportDownload}
          onClose={() => setReportStage(null)}
          onRetry={() => runReportDownload(leadDetails)}
          savedLead={leadDetails}
        />
      )}

    </section>
  )
}
