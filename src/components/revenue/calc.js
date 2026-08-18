/*
 * Formulas sourced from SKILLECTS_Revenue_Intelligence_Calculator_V3.xlsx ("ROI Dashboard V3" sheet).
 * The sheet exposes 12 inputs; this calculator's UI only surfaces 5 of them (recruiters, placements,
 * salary, other costs, gross margin/placement), so the remaining sheet inputs are kept here as the
 * same fixed values the workbook defaults to.
 */

// Sheet default: Gross Margin % (B6) = 30. The workbook derives revenue from
// Revenue/Placement (B5) x Gross Margin % (B6); the UI only has a single $ gross-margin/placement
// field, so revenue/placement is backed out of it using this fixed rate.
const ASSUMED_GROSS_MARGIN_RATE = 0.30

// Sheet default: Expected Capacity Increase % (B13) = 50. Drives Projected Placements (G4).
const CAPACITY_INCREASE_PCT = 50

// Sheet default: SKILLECTS Pod Cost / Year (B12) = 26,880 ($2,240/mo). Flat, not scaled by team size.
const SKILLECTS_POD_COST_YEAR = 26880
const SKILLECTS_SEAT_MONTHLY = SKILLECTS_POD_COST_YEAR / 12

// Sheet: Recruiters Supported (K6) = Internal Recruiters (B3) + 3.
const POD_RECRUITERS_ADDED = 3

// Illustrative fully-loaded in-house overhead rates for the "In-House vs SKILLECTS" comparison.
// Not present in the workbook (which only tracks one lump "Other Recruiting Cost/Year"); chosen so
// they reproduce the design reference's numbers at the default inputs (6 recruiters, $75,000 salary).
const BENEFITS_TAXES_RATE = 0.25
const SOFTWARE_TOOLS_PER_RECRUITER = 3000
const OFFICE_OVERHEAD_PER_RECRUITER = 6500
const HIRING_TRAINING_PER_RECRUITER = 3750

const clamp = (n, min, max) => Math.min(max, Math.max(min, n))

export function computeMetrics({ recruiters, placementsPerMonth, salary, otherCostsMonth, grossMarginPerPlacement }) {
  const otherCostsYear = otherCostsMonth * 12
  const revenuePerPlacement = grossMarginPerPlacement / ASSUMED_GROSS_MARGIN_RATE

  // G4: Projected Placements = current x (1 + capacity increase %)
  const projectedPlacementsPerMonth = Math.round(placementsPerMonth * (1 + CAPACITY_INCREASE_PCT / 100))
  // G5: Additional Placements/Year
  const additionalPlacementsPerYear = (projectedPlacementsPerMonth - placementsPerMonth) * 12

  // G6 / G7
  const additionalRevenue = additionalPlacementsPerYear * revenuePerPlacement
  const additionalGrossProfit = additionalPlacementsPerYear * grossMarginPerPlacement

  // G8 / G9 / G10
  const currentAnnualCost = recruiters * salary + otherCostsYear
  const skillectsAnnualCost = SKILLECTS_POD_COST_YEAR
  const annualCostSavings = currentAnnualCost - skillectsAnnualCost

  // G11 / G12
  const netFinancialImpact = additionalGrossProfit + annualCostSavings
  const roiPct = skillectsAnnualCost > 0 ? (netFinancialImpact / skillectsAnnualCost) * 100 : 0

  const currentAnnualRevenue = placementsPerMonth * 12 * revenuePerPlacement
  const currentAnnualGrossProfit = placementsPerMonth * 12 * grossMarginPerPlacement
  const revenueDeltaPct = currentAnnualRevenue > 0 ? (additionalRevenue / currentAnnualRevenue) * 100 : 0
  const grossProfitDeltaPct = currentAnnualGrossProfit > 0 ? (additionalGrossProfit / currentAnnualGrossProfit) * 100 : 0
  const costSavingsRatio = currentAnnualCost > 0 ? annualCostSavings / currentAnnualCost : 0

  // K6: Recruiters Supported
  const totalRecruiters = recruiters + POD_RECRUITERS_ADDED

  /* Delivery Health Score — not in the workbook, so these sub-scores are derived from the same
     input ratios the workbook already computes, each clamped to a 50-100 band. */
  const placementRateScore = clamp(60 + (placementsPerMonth / recruiters) * 26.25, 50, 100)
  const timeToFillScore = clamp(65 + otherCostsMonth / 300, 50, 100)
  const utilizationRatio = (placementsPerMonth * grossMarginPerPlacement * 12) / (recruiters * salary)
  const utilizationScore = clamp(50 + utilizationRatio * 50.4, 50, 100)
  const costEfficiencyScore = clamp(50 + costSavingsRatio * 40, 50, 100)
  const consistencyScore = (placementRateScore + timeToFillScore + utilizationScore + costEfficiencyScore) / 4
  const healthScore = Math.round(
    (placementRateScore + timeToFillScore + utilizationScore + costEfficiencyScore + consistencyScore) / 5
  )
  const healthRating =
    healthScore >= 90 ? 'Excellent' : healthScore >= 75 ? 'Good' : healthScore >= 60 ? 'Fair' : 'Needs Improvement'

  /* 3-Year Revenue Growth Projection — not in the workbook. "With SKILLECTS" compounds the Year-1
     impact forward at (a damped share of) the capacity-increase rate; "Current State" is modeled as
     flat organic growth that takes 3 years to reach what SKILLECTS delivers in Year 1. */
  const y2Growth = 1 + CAPACITY_INCREASE_PCT / 100 / 2
  const y3Growth = 1.15
  const withY1 = additionalRevenue
  const withY2Incr = withY1 * y2Growth
  const withY3Incr = withY2Incr * y3Growth
  const projection = {
    withSkillects: [withY1, withY1 + withY2Incr, withY1 + withY2Incr + withY3Incr],
    currentState: [0, additionalRevenue / 2, additionalRevenue],
  }

  /* Recommended Plan — tiered by team size; not in the workbook. */
  let plan
  if (recruiters <= 4) {
    plan = {
      name: 'Ignite',
      tagline: 'Starter Plan',
      items: ['1 Recruitment Pod', '2 Expert Recruiters', 'Standard Reporting', 'Email Support'],
    }
  } else if (recruiters <= 10) {
    plan = {
      name: 'Catalyst',
      tagline: 'Growth Plan',
      items: ['1 Recruitment Pod', '3 Expert Recruiters', '1 Team Lead (SME)', 'Advanced Reporting', 'Priority Support'],
    }
  } else {
    plan = {
      name: 'Scale',
      tagline: 'Enterprise Plan',
      items: [
        '2 Recruitment Pods',
        '6 Expert Recruiters',
        '2 Team Leads (SME)',
        'Custom Reporting & Analytics',
        'Dedicated Success Manager',
      ],
    }
  }

  /* In-House vs SKILLECTS cost comparison */
  const recruiterSalaries = recruiters * salary
  const benefitsTaxes = recruiterSalaries * BENEFITS_TAXES_RATE
  const softwareTools = recruiters * SOFTWARE_TOOLS_PER_RECRUITER
  const officeOverheads = recruiters * OFFICE_OVERHEAD_PER_RECRUITER
  const hiringTraining = recruiters * HIRING_TRAINING_PER_RECRUITER
  const inHouseTotal = recruiterSalaries + benefitsTaxes + softwareTools + officeOverheads + hiringTraining
  const skillectsTotal = SKILLECTS_POD_COST_YEAR
  const youSave = inHouseTotal - skillectsTotal

  return {
    projectedPlacementsPerMonth,
    additionalRevenue,
    additionalGrossProfit,
    annualCostSavings,
    roiPct,
    revenueDeltaPct,
    grossProfitDeltaPct,
    costSavingsRatio,
    totalRecruiters,
    capacityIncreasePct: CAPACITY_INCREASE_PCT,
    healthScore,
    healthRating,
    scoreBreakdown: [
      { label: 'Placement Rate', value: Math.round(placementRateScore) },
      { label: 'Time-to-Fill', value: Math.round(timeToFillScore) },
      { label: 'Recruiter Utilization', value: Math.round(utilizationScore) },
      { label: 'Cost Efficiency', value: Math.round(costEfficiencyScore) },
      { label: 'Delivery Consistency', value: Math.round(consistencyScore) },
    ],
    projection,
    plan,
    costComparison: {
      recruiterSalaries,
      benefitsTaxes,
      softwareTools,
      officeOverheads,
      hiringTraining,
      inHouseTotal,
      skillectsSeatMonthly: SKILLECTS_SEAT_MONTHLY,
      skillectsTotal,
      youSave,
    },
  }
}

export const fmt = (n) => `$${Math.round(n).toLocaleString('en-US')}`

export const fmtCompact = (n) => {
  const abs = Math.abs(n)
  if (abs >= 1_000_000) {
    const v = (n / 1_000_000).toFixed(2).replace(/\.?0+$/, '')
    return `$${v}M`
  }
  if (abs >= 1_000) {
    return `$${Math.round(n / 1_000)}K`
  }
  return `$${Math.round(n)}`
}

export const fmtPct = (n, decimals = 0) => `${n.toFixed(decimals)}%`
