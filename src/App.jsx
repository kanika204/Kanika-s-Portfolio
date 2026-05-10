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

function App() {
  return (
    <div style={{backgroundColor: '#0f0f1a', minHeight: '100vh'}} className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Education />
      <Contact />
    </div>
  )
}

export default App