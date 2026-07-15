import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import StatsCounter from './StatsCounter'

export default function About() {
    const { t } = useTranslation()

    const stats = [
        { value: 5, suffix: '+', label: t('about.stats.experience') },
        { value: 25, suffix: '+', label: t('about.stats.modules') },
        { value: 7, suffix: '', label: t('about.stats.versions') },
        { value: 10, suffix: '', label: t('about.stats.sectors') },
    ]

    return (
        <section id="about" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="eyebrow">{t('about.eyebrow')}</p>
                <h2 className="heading-secondary">{t('about.title')}</h2>

                <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
                    <p className="text-lg leading-relaxed text-ink/80 max-w-2xl">
                        {t('about.description')}
                    </p>
                    <StatsCounter stats={stats} />
                </div>
            </motion.div>
        </section>
    )
}
