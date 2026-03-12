import React from 'react'
import HeroSection from '../Sections/Perfomance/Hero'
import CoreServicesSection from '../Sections/Perfomance/SoreService'
import { PerformanceEngineeringSection } from '../Sections/Perfomance/Perfomance'
import SpecializedTuningServices from '../Sections/Perfomance/Tuning'
import TrackReadySection from '../Sections/Perfomance/TrackREady'
import Final from '../Sections/Perfomance/Final'
function Perfomance() {
  return (
   <>
   <HeroSection/>
   <CoreServicesSection/>
   <PerformanceEngineeringSection/>
   <SpecializedTuningServices/>
   <TrackReadySection/>
   <Final/>
   </>
  )
}

export default Perfomance
