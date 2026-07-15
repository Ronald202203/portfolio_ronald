import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Tools from './components/Tools'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-paper">
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <TechStack />
            <Skills />
            <Projects />
            <Experience />
            <Tools />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
