import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Languages as LanguagesIcon } from 'lucide-react'

export default function Languages() {
    const { t } = useTranslation()
    const languages = t('languages.list', { returnObjects: true })

    return (
        <section className="section-container bg-white">
            <h2 className="heading-secondary text-center">
                {t('languages.title')}
            </h2>

            <div className="flex justify-center gap-6 max-w-2xl mx-auto">
                {languages.map((language, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className="flex items-center gap-3 p-6 bg-gray-50 rounded-lg"
                    >
                        <LanguagesIcon className="text-navy-700" size={24} />
                        <span className="text-lg font-medium text-gray-800">{language}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
