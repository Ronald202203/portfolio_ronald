import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
    const { t } = useTranslation()
    const jobs = t('experience.jobs', { returnObjects: true })

    return (
        <section id="experience" className="section-container bg-gradient-to-b from-white to-gray-50 relative">
            <h2 className="heading-secondary text-center">
                {t('experience.title')}
            </h2>

            {/* Timeline Line */}
            <div className="absolute left-1/2 top-48 bottom-24 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 hidden lg:block" />

            <div className="max-w-5xl mx-auto space-y-12">
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className={`relative lg:flex lg:gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    >
                        {/* Timeline Dot */}
                        <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg z-10 ring-4 ring-white" />

                        {/* Content Card */}
                        <div className="lg:w-1/2 group">
                            <div className="relative bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            <Briefcase className="text-white" size={24} />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-1">
                                                {job.position}
                                            </h3>
                                            <p className="text-gray-700 font-semibold mb-2">
                                                {job.company}
                                            </p>
                                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                                <Calendar size={16} />
                                                <span>{job.period}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="space-y-2 mb-4">
                                        {job.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="text-gray-700 flex items-start gap-2">
                                                <span className="text-primary-600 mt-1.5 text-xs">●</span>
                                                <span className="text-sm">{resp}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    {job.modules && (
                                        <div className="p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg border border-primary-100">
                                            <p className="text-sm text-gray-700 font-medium">{job.modules}</p>
                                        </div>
                                    )}
                                    {job.tech && (
                                        <div className="p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg border border-primary-100">
                                            <p className="text-sm text-gray-700 font-medium">{job.tech}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Spacer for timeline */}
                        <div className="hidden lg:block lg:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
