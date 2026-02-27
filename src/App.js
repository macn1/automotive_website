import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layouts/Layout'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'
import ScrollToTop from './Components/SCrolltop'
import Mechanical from './Components/Pages/Mechanical'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Blog />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/bodyshop" element={<Blog />} />
        <Route path="/detailing" element={<Blog />} />
        <Route path="/performance" element={<Blog />} />

        <Route path="/restoration" element={<Blog />} />

        




        <Route path="/contact-us" element={<Contact />} />

      </Route>
    </Routes>
  )
}

export default App