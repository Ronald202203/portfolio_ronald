import { useTranslation } from 'react-i18next'
import { GraduationCap, Globe } from 'lucide-react'

export default function Education() {
    const { t } = useTranslation()
    const degrees = t('education.degrees', { returnObjects: true })
    const languages = t('education.languages', { returnObjects: true })

    return (
        <section id="education" className="section-container !pt-0">
            <p className="eyebrow">{t('education.eyebrow')}</p>
            <h2 className="heading-secondary">{t('education.title')}</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-7">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="p-2.5 bg-odoo-50 text-odoo-500 rounded-md">
                            <GraduationCap size={20} />
                        </span>
                        <h3 className="font-display font-semibold text-lg">{t('education.eyebrow')}</h3>
                    </div>
                    <ul className="space-y-4">
                        {degrees.map((d, i) => (
                            <li key={i} className="flex items-baseline justify-between gap-4 border-b border-line last:border-0 pb-4 last:pb-0">
                                <span className="text-ink/80 font-medium">{d.degree}</span>
                                <span className="font-mono text-xs text-teal-600 shrink-0">{d.year}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="card p-7">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="p-2.5 bg-odoo-50 text-odoo-500 rounded-md">
                            <Globe size={20} />
                        </span>
                        <h3 className="font-display font-semibold text-lg">{t('education.languagesTitle')}</h3>
                    </div>
                    <ul className="space-y-4">
                        {languages.map((l, i) => (
                            <li key={i} className="flex items-baseline justify-between gap-4 border-b border-line last:border-0 pb-4 last:pb-0">
                                <span className="text-ink/80 font-medium">{l.name}</span>
                                <span className="font-mono text-xs text-teal-600 shrink-0">{l.level}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
