import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import StatsCounter from './StatsCounter'

export default function About() {
    const { t } = useTranslation()

    const stats = [
        { value: 4, suffix: '+', label: t('about.stats.experience') },
        { value: 15, suffix: '+', label: t('about.stats.modules') },
        { value: 50, suffix: '+', label: t('about.stats.projects') },
        { value: 10, suffix: '+', label: t('about.stats.technologies') },
    ]

    return (
        <section id="about" className="section-container bg-gradient-to-b from-white to-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="heading-secondary text-center">
                    {t('about.title')}
                </h2>

                <div className="max-w-4xl mx-auto mb-16">
                    <p className="text-body text-lg text-center leading-relaxed">
                        {t('about.description')}
                    </p>
                </div>

                {/* Stats Counter */}
                <StatsCounter stats={stats} />
            </motion.div>
        </section>
    )
}
