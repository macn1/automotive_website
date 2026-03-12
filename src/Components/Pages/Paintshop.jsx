import React from 'react'
import Hero from '../Sections/Paintshop/Hero'
import Choosepaint from '../Sections/Paintshop/ChoosePaint'
import PaintConsultationSection from '../Sections/Paintshop/PaintCunsultation'
import About from '../Sections/Paintshop/About'
import PaintProcess from '../Sections/Paintshop/PaintProcess'
import PaintHero from '../Sections/Paintshop/Painthero'
export default function Paintshop() {
  return (
    <>
     <Hero/> 
     <Choosepaint/>
     <PaintConsultationSection/>
     <About/>
     <PaintProcess/>
     <PaintHero/>
    </>
  )
}
