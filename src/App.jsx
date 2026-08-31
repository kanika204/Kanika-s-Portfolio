import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Particles from './components/Particles'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />

      <div className="fixed-background">
        <Particles count={50} />
      </div>

      <div className="site-content font-sans">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </div>
    </>
  )
}

export default App