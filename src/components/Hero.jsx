import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Download, Mail, ChevronDown, Sparkles } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import ParticlesBackground from './ParticlesBackground'

export default function Hero() {
    const { t } = useTranslation()

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 animate-gradient" />

            {/* Particles Background */}
            <ParticlesBackground />

            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Glassmorphism Card */}
                    <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg"
                        >
                            <Sparkles size={16} />
                            <span>Odoo ERP Expert</span>
                        </motion.div>

                        {/* Name with Gradient */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                                {t('hero.name')}
                            </span>
                        </h1>

                        {/* Typing Animation for Title */}
                        <div className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold mb-6 h-20 flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    t('hero.title'),
                                    3000,
                                    'Développeur ERP Odoo',
                                    2000,
                                    'Consultant Technico-Fonctionnel',
                                    2000,
                                    'Chef de Projet IT',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>

                        {/* Tagline */}
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            {t('hero.tagline')}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/Cv_Ronald.pdf"
                                download
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-glow transition-all relative overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Download size={20} className="relative z-10" />
                                <span className="relative z-10">{t('hero.downloadCV')}</span>
                            </motion.a>

                            <motion.button
                                onClick={scrollToContact}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur text-primary-700 border-2 border-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg"
                            >
                                <Mail size={20} />
                                {t('hero.contactMe')}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToAbout}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
            >
                <span className="text-sm font-medium">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.button>
        </section>
    )
}
