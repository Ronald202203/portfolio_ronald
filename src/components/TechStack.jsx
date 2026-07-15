import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SiPython, SiJavascript, SiPostgresql, SiGit, SiHtml5, SiDocker, SiLinux } from 'react-icons/si'
import { Database, FileCode } from 'lucide-react'

const technologies = [
    { name: 'Odoo', detail: 'v8 → v19', icon: Database },
    { name: 'Python 3', detail: 'ORM, API, scripts', icon: SiPython },
    { name: 'PostgreSQL', detail: 'SQL avancé, dumps', icon: SiPostgresql },
    { name: 'Docker', detail: 'multi-instances', icon: SiDocker },
    { name: 'XML / QWeb', detail: 'vues, rapports', icon: FileCode },
    { name: 'JavaScript', detail: 'OWL, widgets', icon: SiJavascript },
    { name: 'Git / GitHub', detail: 'workflow d\u00e9quipe', icon: SiGit },
    { name: 'Linux', detail: 'Ubuntu Server', icon: SiLinux },
]

export default function TechStack() {
    const { t } = useTranslation()

    return (
        <section className="section-container !pt-0">
            <p className="eyebrow">{t('techStack.eyebrow')}</p>
            <h2 className="heading-secondary">{t('techStack.title')}</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden">
                {technologies.map((tech, i) => {
                    const Icon = tech.icon
                    return (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.05 }}
                            className="bg-white p-6 flex flex-col items-start gap-3 hover:bg-odoo-50 transition-colors"
                        >
                            <Icon size={26} className="text-odoo-500" />
                            <div>
                                <h3 className="font-semibold text-ink">{tech.name}</h3>
                                <p className="font-mono text-xs text-ink/50 mt-0.5">{tech.detail}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
