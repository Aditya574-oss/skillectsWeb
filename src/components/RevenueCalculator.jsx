import { useRef, useState } from 'react'
import { fmt, fmtPct } from './revenue/calc'
import { useCalculator } from './revenue/CalculatorContext'
import { downloadReportPdf } from './revenue/generateReport'
import DeliveryHealthGauge from './revenue/DeliveryHealthGauge'
import RevenueGrowthChart from './revenue/RevenueGrowthChart'
import {
  BarChartIcon, TargetIcon, ShieldCheckIcon, TrendingUpIcon, DocumentIcon,
  DollarCircleIcon, MoneyBagIcon, RefreshCircleIcon, InfoIcon, RocketIcon,
  CheckIcon, LockIcon, PersonIcon, PeopleIcon, MonitorIcon, BuildingIcon,
  GraduationCapIcon, ClockIcon, ArrowRightIcon, RecalculateIcon,
} from './revenue/Icons'

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
  const { inputs, setInputs, metrics: m } = useCalculator()
  const [draft, setDraft] = useState(inputs)
  const [generatingReport, setGeneratingReport] = useState(false)
  const titleRef = useRef(null)
  const leftColRef = useRef(null)
  const calcCardRef = useRef(null)
  const threeUpRef = useRef(null)
  const inHouseRef = useRef(null)
  const bottomBannerRef = useRef(null)
  const footerRef = useRef(null)

  const setDraftField = (key) => (value) => setDraft((d) => ({ ...d, [key]: value }))
  const recalculate = () => setInputs(draft)

  const handleGenerateReport = async () => {
    if (generatingReport) return
    setGeneratingReport(true)
    try {
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
    } finally {
      setGeneratingReport(false)
    }
  }

  return (
    <section id="roi-calculator" className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div ref={titleRef} className="pb-1.5">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Revenue Intelligence Center</h2>
        <p className="text-3xl font-bold tracking-tight text-gray-900 mt-1">
          See Your Growth Potential. <span className="text-brand-blue">In Real Numbers.</span>
        </p>
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

    </section>
  )
}
