import React from 'react'

import HeroSection from '../Sections/about/hero'
import Section2 from '../Sections/about/Section2'
import { StickyHero } from '../Sections/about/Stickhero'
import WhatWeDo from '../Sections/about/WhatWedo'
import { Sticky } from '../Sections/about/StickHero2'
import Section5 from '../Sections/about/Section5'
import OurStory from '../Sections/about/OurStory'
import OurJourney from '../Sections/about/JourneySection'
import FinalPart from '../Sections/about/FinalSection'
import CarSection from '../Sections/about/CarsSection'

function About() {
  return (
    <>
   
      <HeroSection />
      <Section2 />


      <section className="relative min-h-[300svh] md:h-[300vh]">
        <StickyHero />


        <div className="h-screen" />

        <div className="relative z-30 -mt-[100svh] md:-mt-[100vh]">
          <WhatWeDo />
        </div>
      </section>


       <section className="relative min-h-[200svh] md:h-[200vh]">
        <Sticky />


        <div className="h-screen" />
      </section>


<section className="relative z-20">
        <Section5 />
      </section> 


      <OurStory />
        <OurJourney />
      <FinalPart />
      <CarSection />   
    </>
  )
}

export default About