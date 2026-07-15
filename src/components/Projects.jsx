import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Projects() {
    const { t } = useTranslation()
    const projects = t('projects.list', { returnObjects: true })

    return (
        <section id="projects" className="bg-ink text-white">
            <div className="section-container">
                <p className="eyebrow !text-teal-100">{t('projects.eyebrow')}</p>
                <h2 className="heading-secondary !text-white">{t('projects.title')}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                            className="flex flex-col border border-white/10 rounded-lg p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-odoo-300/40 transition-colors"
                        >
                            <span className="font-mono text-xs text-white/35 mb-4">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-display font-semibold text-lg mb-3 leading-snug">
                                {p.name}
                            </h3>
                            <p className="text-sm text-white/65 leading-relaxed mb-5 flex-1">
                                {p.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="font-mono text-[11px] px-2.5 py-1 rounded border border-teal-500/40 text-teal-100"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
