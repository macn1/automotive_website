import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Banner from '../Layouts/Banner'
import LogoSlider from '../Slider/LogoSlider'
import HomeSection1 from '../Sections/Home/HomeSection1'
import HomeSection2 from '../Sections/Home/HomeSection2'
import Projects from '../Sections/Home/Projects'
import Cars  from '../Sections/Home/Cars'
import { StickyHero } from "../Sections/Home/Sticky"
import Scroller from '../Sections/Home/scorller'

const Home = () => {
  return (
    <main className="flex flex-col gap-0">
      <Banner />
      <HomeSection1 />
      <HomeSection2/>
      <Cars/>
      <StickyHero/> 
      <Projects/>
      <Scroller/>
    </main>
  )
}

export default Home
