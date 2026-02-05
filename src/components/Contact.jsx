import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
    const { t } = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
        window.location.href = `mailto:noumsironald@gmail.com?subject=${subject}&body=${body}`
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="section-container bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-secondary"
                    >
                        {t('contact.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg"
                    >
                        {t('contact.subtitle')}
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10 p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="text-white" size={24} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-gray-900 mb-1">
                                        {t('contact.email')}
                                    </h3>
                                    <a
                                        href="mailto:noumsironald@gmail.com"
                                        className="text-primary-600 hover:text-accent-600 transition-colors font-medium"
                                    >
                                        noumsironald@gmail.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group"
                        >
                            <div className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10 p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="text-white" size={24} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-gray-900 mb-1">
                                        {t('contact.phone')}
                                    </h3>
                                    <a
                                        href="tel:+237690331295"
                                        className="text-primary-600 hover:text-accent-600 transition-colors font-medium"
                                    >
                                        +237 690 33 12 95
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10 p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="text-white" size={24} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-gray-900 mb-1">
                                        {t('contact.location')}
                                    </h3>
                                    <p className="text-gray-700 font-medium">{t('contact.locationValue')}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4 pt-4"
                        >
                            <motion.a
                                href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bd4%2FbuaO2SOyeyzp5J%2FsMVA%3D%3D"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl text-white shadow-lg hover:shadow-glow transition-all"
                            >
                                <Linkedin size={24} />
                            </motion.a>
                            <motion.a
                                href="https://github.com/Ronald202203"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                className="p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl text-white shadow-lg hover:shadow-xl transition-all"
                            >
                                <Github size={24} />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="relative bg-white p-8 rounded-2xl shadow-2xl space-y-6 border border-gray-100"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl" />

                        <div className="relative z-10 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none bg-white"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-glow transition-all"
                            >
                                <Send size={20} />
                                {t('contact.form.send')}
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
