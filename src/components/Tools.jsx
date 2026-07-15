import { useTranslation } from 'react-i18next'
import { Wrench } from 'lucide-react'

export default function Tools() {
    const { t } = useTranslation()
    const tools = t('tools.list', { returnObjects: true })

    return (
        <section className="section-container !pt-0">
            <p className="eyebrow">{t('tools.eyebrow')}</p>
            <h2 className="heading-secondary">{t('tools.title')}</h2>
            <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                    <span
                        key={tool}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-line rounded-md text-sm text-ink/75"
                    >
                        <Wrench size={14} className="text-teal-500" />
                        {tool}
                    </span>
                ))}
            </div>
        </section>
    )
}
