import { createContext, useContext, useState } from 'react'
import { computeMetrics } from './calc'

const DEFAULTS = { recruiters: 6, placementsPerMonth: 8, salary: 75000, otherCostsMonth: 7500, grossMarginPerPlacement: 4000 }

const CalculatorContext = createContext(null)

export function CalculatorProvider({ children }) {
  const [inputs, setInputs] = useState(DEFAULTS)
  const metrics = computeMetrics(inputs)

  return (
    <CalculatorContext.Provider value={{ inputs, setInputs, metrics }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export function useCalculator() {
  const ctx = useContext(CalculatorContext)
  if (!ctx) throw new Error('useCalculator must be used within a CalculatorProvider')
  return ctx
}
