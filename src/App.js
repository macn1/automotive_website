import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layouts/Layout'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'
import ScrollToTop from './Components/SCrolltop'
import Mechanical from './Components/Pages/Mechanical'
import Restoratoin from './Components/Pages/Restoratoin'
import Paintshop from './Components/Pages/Paintshop'
import Detail from './Components/Pages/Detail'
import Perfomance from './Components/Pages/Perfomance'
import MainBlog from './Components/Pages/MainBlog'
import Project from './Components/Pages/Project'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<MainBlog />} />
         <Route path="/projects" element={<Project />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/paint-shop" element={<Paintshop />} />
        <Route path="/detailing" element={<Detail />} />
        <Route path="/performance" element={<Perfomance />} />

        <Route path="/restoration" element={<Restoratoin />} /> 

        




        <Route path="/contact-us" element={<Contact />} />

      </Route>
    </Routes>
  )
}

export default App