import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const { t, i18n } = useTranslation()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const items = [
        { key: 'about', href: '#about' },
        { key: 'skills', href: '#skills' },
        { key: 'projects', href: '#projects' },
        { key: 'experience', href: '#experience' },
        { key: 'contact', href: '#contact' },
    ]

    const go = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
    }

    const toggleLang = () => {
        const next = i18n.language === 'fr' ? 'en' : 'fr'
        i18n.changeLanguage(next)
        localStorage.setItem('language', next)
    }

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
                scrolled ? 'bg-ink/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="font-mono text-sm text-white">
                    <span className="text-teal-100">~/</span>ronald.noumsi
                </a>

                <div className="hidden md:flex items-center gap-7">
                    {items.map((it) => (
                        <button
                            key={it.key}
                            onClick={() => go(it.href)}
                            className="text-sm text-white/70 hover:text-white font-medium transition-colors"
                        >
                            {t(`nav.${it.key}`)}
                        </button>
                    ))}
                    <button
                        onClick={toggleLang}
                        className="font-mono text-xs px-3 py-1.5 border border-white/25 rounded text-white/80 hover:border-white/60 transition-colors"
                        aria-label="Changer de langue"
                    >
                        {i18n.language === 'fr' ? 'EN' : 'FR'}
                    </button>
                </div>

                <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white" aria-label="Menu">
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-ink border-t border-white/10"
                    >
                        <div className="px-6 py-4 space-y-3">
                            {items.map((it) => (
                                <button
                                    key={it.key}
                                    onClick={() => go(it.href)}
                                    className="block w-full text-left text-white/80 hover:text-white font-medium"
                                >
                                    {t(`nav.${it.key}`)}
                                </button>
                            ))}
                            <button onClick={toggleLang} className="font-mono text-xs px-3 py-1.5 border border-white/25 rounded text-white/80">
                                {i18n.language === 'fr' ? 'English' : 'Français'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
