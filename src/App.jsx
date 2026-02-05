import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Tools from './components/Tools'
import Education from './components/Education'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-white">
            <ScrollProgress />
            <Navbar />
            <LanguageSwitcher />
            <Hero />
            <About />
            <TechStack />
            <Skills />
            <Experience />
            <Tools />
            <Education />
            <Languages />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
