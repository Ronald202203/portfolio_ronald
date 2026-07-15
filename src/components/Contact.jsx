import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
    const { t } = useTranslation()
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Portfolio — message de ${form.name}`)
        const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`)
        window.location.href = `mailto:noumsironald@gmail.com?subject=${subject}&body=${body}`
    }

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const infos = [
        { icon: Mail, label: t('contact.email'), value: 'noumsironald@gmail.com', href: 'mailto:noumsironald@gmail.com' },
        { icon: Phone, label: t('contact.phone'), value: '+237 690 33 12 95', href: 'tel:+237690331295' },
        { icon: MapPin, label: t('contact.location'), value: t('contact.locationValue') },
    ]

    const inputCls = "w-full px-4 py-3 bg-white border border-line rounded-md text-ink placeholder:text-ink/40 focus:outline-none focus:border-odoo-500 focus:ring-1 focus:ring-odoo-500 transition-colors"

    return (
        <section id="contact" className="section-container">
            <p className="eyebrow">{t('contact.eyebrow')}</p>
            <h2 className="heading-secondary !mb-4">{t('contact.title')}</h2>
            <p className="text-ink/65 text-lg mb-12 max-w-2xl">{t('contact.subtitle')}</p>

            <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-4">
                    {infos.map((info, i) => {
                        const Icon = info.icon
                        const content = (
                            <div className="flex items-center gap-4 p-5 card hover:border-odoo-300 transition-colors">
                                <span className="p-3 bg-odoo-50 text-odoo-500 rounded-md">
                                    <Icon size={20} />
                                </span>
                                <div>
                                    <p className="font-mono text-xs text-ink/50 uppercase tracking-wider mb-0.5">{info.label}</p>
                                    <p className="font-medium text-ink">{info.value}</p>
                                </div>
                            </div>
                        )
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                {info.href ? <a href={info.href} className="block">{content}</a> : content}
                            </motion.div>
                        )
                    })}
                    <div className="flex gap-3 pt-2">
                        <a
                            href="https://github.com/ronald202203"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="p-3 card text-ink/60 hover:text-odoo-500 hover:border-odoo-300 transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="p-3 card text-ink/60 hover:text-odoo-500 hover:border-odoo-300 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-7 space-y-4"
                >
                    <input
                        type="text" name="name" required value={form.name} onChange={onChange}
                        placeholder={t('contact.form.name')} className={inputCls}
                    />
                    <input
                        type="email" name="email" required value={form.email} onChange={onChange}
                        placeholder={t('contact.form.email')} className={inputCls}
                    />
                    <textarea
                        name="message" required rows={6} value={form.message} onChange={onChange}
                        placeholder={t('contact.form.message')} className={`${inputCls} resize-none`}
                    />
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-odoo-500 hover:bg-odoo-600 text-white rounded-md font-semibold transition-colors"
                    >
                        <Send size={18} />
                        {t('contact.form.send')}
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
