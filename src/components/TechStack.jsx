import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SiPython, SiJavascript, SiPostgresql, SiGit, SiHtml5 } from 'react-icons/si'
import { Database, Code2, FileCode } from 'lucide-react'

const technologies = [
    { name: 'Odoo', versions: 'v8 to v18', icon: Database, level: 95, color: 'from-purple-500 to-pink-500' },
    { name: 'Python', versions: '', icon: SiPython, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'XML', versions: '', icon: FileCode, level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', versions: '', icon: SiJavascript, level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'PostgreSQL', versions: '', icon: SiPostgresql, level: 85, color: 'from-blue-600 to-indigo-600' },
    { name: 'Git/GitHub', versions: '', icon: SiGit, level: 85, color: 'from-gray-700 to-gray-900' },
    { name: 'HTML/CSS', versions: '', icon: SiHtml5, level: 80, color: 'from-red-500 to-orange-500' },
]

export default function TechStack() {
    const { t } = useTranslation()

    return (
        <section className="section-container bg-white">
            <h2 className="heading-secondary text-center">
                {t('techStack.title')}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {technologies.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -8, rotateY: 5 }}
                            className="group relative"
                        >
                            <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Icon */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="text-white" size={32} />
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-bold text-gray-900 text-lg mb-1 text-center">
                                        {tech.name}
                                    </h3>

                                    {/* Version */}
                                    {tech.versions && (
                                        <p className="text-xs text-gray-600 mb-3">{tech.versions}</p>
                                    )}

                                    {/* Skill Level Bar */}
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${tech.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{tech.level}%</p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
