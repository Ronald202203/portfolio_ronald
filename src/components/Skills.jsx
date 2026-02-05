import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles } from 'lucide-react'

export default function Skills() {
    const { t } = useTranslation()
    const skills = t('skills.list', { returnObjects: true })

    return (
        <section id="skills" className="section-container bg-gradient-to-b from-gray-50 to-white">
            <h2 className="heading-secondary text-center">
                {t('skills.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="group relative"
                    >
                        <div className="relative flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Icon */}
                            <div className="relative z-10 p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle2 className="text-white" size={24} />
                            </div>

                            {/* Text */}
                            <span className="relative z-10 text-gray-800 font-semibold text-lg flex-1">
                                {skill}
                            </span>

                            {/* Sparkle on Hover */}
                            <Sparkles className="relative z-10 text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
