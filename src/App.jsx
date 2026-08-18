import { CalculatorProvider } from './components/revenue/CalculatorContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySkillects from './components/WhySkillects'
import ProblemSection from './components/ProblemSection'
import RevenueCalculator from './components/RevenueCalculator'
import BuildPod from './components/BuildPod'
import HowItWorks from './components/HowItWorks'
import SuccessStories from './components/SuccessStories'
import ContactSection from './components/ContactSection'
import Resources from './components/Resources'
import WhyChooseUs from './components/WhyChooseUs'
import PricingSection from './components/PricingSection'
import ZeroRisk from './components/ZeroRisk'
import CaseStudiesGrid from './components/CaseStudiesGrid'
import VideoTestimonials from './components/VideoTestimonials'
import MeetThePod from './components/MeetThePod'
import TechStack from './components/TechStack'
import Leadership from './components/Leadership'
import ScaleAssessment from './components/ScaleAssessment'
import GrowthAcademy from './components/GrowthAcademy'

const sections = [
  ['Navbar', Navbar],
  ['Hero', Hero],
  ['WhySkillects', WhySkillects],
  ['ProblemSection', ProblemSection],
  ['RevenueCalculator', RevenueCalculator],
  ['BuildPod', BuildPod],
  ['HowItWorks', HowItWorks],
  ['SuccessStories', SuccessStories],
  ['ContactSection', ContactSection],
  ['Resources', Resources],
  ['WhyChooseUs', WhyChooseUs],
  ['PricingSection', PricingSection],
  ['ZeroRisk', ZeroRisk],
  ['CaseStudiesGrid', CaseStudiesGrid],
  ['VideoTestimonials', VideoTestimonials],
  ['MeetThePod', MeetThePod],
  ['TechStack', TechStack],
  ['Leadership', Leadership],
  ['ScaleAssessment', ScaleAssessment],
  ['GrowthAcademy', GrowthAcademy],
]

function App() {
  return (
    <CalculatorProvider>
      <div className="min-h-screen bg-white">
        {sections.map(([name, Section]) => (
          <div key={name} data-section={name}>
            <Section />
          </div>
        ))}
      </div>
    </CalculatorProvider>
  )
}

export default App
