import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Code2, Github, Monitor, Server, Workflow } from 'lucide-react'

const toolIcons = {
    'PyCharm': Code2,
    'VS Code': Code2,
    'GitHub': Github,
    'Ubuntu / Windows': Monitor,
    'VirtualBox / VMware': Server,
    'Trello / Jira / Azure DevOps / Slack': Workflow,
}

export default function Tools() {
    const { t } = useTranslation()
    const tools = t('tools.list', { returnObjects: true })

    return (
        <section className="section-container bg-white">
            <h2 className="heading-secondary text-center">
                {t('tools.title')}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {tools.map((tool, index) => {
                    const Icon = toolIcons[tool] || Code2
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <Icon className="text-navy-700 flex-shrink-0" size={28} />
                            <span className="text-gray-800 font-medium">{tool}</span>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
