import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Experience() {
    const { t } = useTranslation()
    const jobs = t('experience.jobs', { returnObjects: true })

    return (
        <section id="experience" className="section-container">
            <p className="eyebrow">{t('experience.eyebrow')}</p>
            <h2 className="heading-secondary">{t('experience.title')}</h2>

            <div className="relative border-l-2 border-line ml-2 md:ml-4 space-y-10">
                {jobs.map((job, i) => (
                    <motion.article
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="relative pl-8 md:pl-10"
                    >
                        <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-paper border-[3px] border-odoo-500" />
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                            <h3 className="font-display font-semibold text-lg">{job.company}</h3>
                            <span className="font-mono text-xs text-teal-600">{job.period}</span>
                        </div>
                        <p className="text-odoo-500 font-medium mb-4">{job.position}</p>
                        <ul className="space-y-2 mb-4">
                            {job.responsibilities.map((r, ri) => (
                                <li key={ri} className="flex gap-3 text-ink/75 leading-snug">
                                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-odoo-300 shrink-0" />
                                    {r}
                                </li>
                            ))}
                        </ul>
                        {job.modules && (
                            <p className="font-mono text-xs text-ink/50 bg-odoo-50 border border-line rounded px-3 py-2 inline-block leading-relaxed">
                                {job.modules}
                            </p>
                        )}
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
