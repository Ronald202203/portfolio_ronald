import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Code2, Database, Server, Users } from 'lucide-react'

const icons = [Code2, Database, Server, Users]

export default function Skills() {
    const { t } = useTranslation()
    const groups = t('skills.groups', { returnObjects: true })

    return (
        <section id="skills" className="section-container">
            <p className="eyebrow">{t('skills.eyebrow')}</p>
            <h2 className="heading-secondary">{t('skills.title')}</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {groups.map((group, gi) => {
                    const Icon = icons[gi % icons.length]
                    return (
                        <motion.div
                            key={gi}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: gi * 0.08 }}
                            className="card p-7"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="p-2.5 bg-odoo-50 text-odoo-500 rounded-md">
                                    <Icon size={20} />
                                </span>
                                <h3 className="font-display font-semibold text-lg">{group.name}</h3>
                            </div>
                            <ul className="space-y-2.5">
                                {group.items.map((item, ii) => (
                                    <li key={ii} className="flex gap-3 text-ink/75 leading-snug">
                                        <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
