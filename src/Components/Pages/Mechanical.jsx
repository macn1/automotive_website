import React from 'react'
import HeroSection from '../Sections/mechanical/hero'
import Section2 from '../Sections/mechanical/Section2'
import Service from '../Sections/mechanical/Service'
import ProactiveCareSection from '../Sections/mechanical/ProactiveSecton'
import { StickyHero } from '../Sections/mechanical/StickyHero'
import EVHybridSection from '../Sections/mechanical/EvSection'
import BuyWithConfidenceSection from '../Sections/mechanical/BuySection'
import FinalPart from '../Sections/mechanical/FinalSection'
function Mechanical() {
  return (
    <>
      <HeroSection />
      <Section2 />
      <Service />
      <ProactiveCareSection />

      {/* SCROLL ZONE */}
      <div className="relative h-[200vh]">
        <StickyHero />

        {/* Content that moves OVER the sticky image */}
        <div className="relative z-20">
          <EVHybridSection />
        </div>
        <BuyWithConfidenceSection/>
        <FinalPart/>
      </div>
    </>
  )
}

export default Mechanical
