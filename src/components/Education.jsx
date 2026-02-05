import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
    const { t } = useTranslation()
    const degrees = t('education.degrees', { returnObjects: true })

    return (
        <section id="education" className="section-container bg-gray-50">
            <h2 className="heading-secondary text-center">
                {t('education.title')}
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
                {degrees.map((degree, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm"
                    >
                        <div className="p-3 bg-navy-100 rounded-lg">
                            <GraduationCap className="text-navy-700" size={28} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-navy-900">
                                {degree.degree}
                            </h3>
                            <p className="text-gray-600">{degree.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
