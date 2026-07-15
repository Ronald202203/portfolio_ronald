import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Download, Mail, ChevronDown } from 'lucide-react'

function ManifestCard() {
    const { t } = useTranslation()
    const line = (indent, children) => (
        <div style={{ paddingLeft: indent * 16 }}>{children}</div>
    )
    return (
        <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#1B1520]">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 font-mono text-xs text-white/50">__manifest__.py</span>
            </div>
            <div className="p-5 md:p-6 font-mono text-[13px] leading-relaxed text-left overflow-x-auto">
                <div className="text-white/35">{t('hero.manifestComment')}</div>
                <div><span className="text-teal-100">{'{'}</span></div>
                {line(1, <><span className="text-[#C99AE0]">'name'</span><span className="text-white/60">: </span><span className="text-[#9ED8A5]">'Ronald F. NOUMSI'</span><span className="text-white/60">,</span></>)}
                {line(1, <><span className="text-[#C99AE0]">'category'</span><span className="text-white/60">: </span><span className="text-[#9ED8A5]">'ERP / Odoo / Security'</span><span className="text-white/60">,</span></>)}
                {line(1, <><span className="text-[#C99AE0]">'versions'</span><span className="text-white/60">: </span><span className="text-[#F0C674]">'v8 → v19'</span><span className="text-white/60">,</span></>)}
                {line(1, <><span className="text-[#C99AE0]">'depends'</span><span className="text-white/60">: [</span></>)}
                {line(2, <><span className="text-[#9ED8A5]">'python'</span><span className="text-white/60">, </span><span className="text-[#9ED8A5]">'postgresql'</span><span className="text-white/60">,</span></>)}
                {line(2, <><span className="text-[#9ED8A5]">'docker'</span><span className="text-white/60">, </span><span className="text-[#9ED8A5]">'xml'</span><span className="text-white/60">, </span><span className="text-[#9ED8A5]">'javascript'</span><span className="text-white/60">,</span></>)}
                {line(1, <span className="text-white/60">],</span>)}
                {line(1, <><span className="text-[#C99AE0]">'installable'</span><span className="text-white/60">: </span><span className="text-[#F0C674]">True</span><span className="text-white/60">,</span></>)}
                {line(1, <><span className="text-[#C99AE0]">'auto_install'</span><span className="text-white/60">: </span><span className="text-[#F0C674]">True</span><span className="text-white/60">,</span></>)}
                <div><span className="text-teal-100">{'}'}</span></div>
            </div>
        </div>
    )
}

export default function Hero() {
    const { t } = useTranslation()
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section className="relative min-h-screen flex items-center bg-ink text-white overflow-hidden">
            {/* subtle grid texture */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                }}
            />
            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-odoo-500/25 blur-[140px]" />
            <div className="absolute -bottom-52 -left-40 w-[480px] h-[480px] rounded-full bg-teal-500/15 blur-[140px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-14 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="font-mono text-xs tracking-[0.25em] uppercase text-teal-100 mb-5">
                        {t('hero.role')}
                    </p>
                    <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] mb-5">
                        {t('hero.name')}
                    </h1>
                    <p className="font-mono text-sm text-odoo-300 mb-6">{t('hero.subtitle')}</p>
                    <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
                        {t('hero.tagline')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="./Cv_Ronald.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-odoo-500 hover:bg-odoo-600 text-white rounded-md font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-100"
                        >
                            <Download size={18} />
                            {t('hero.downloadCV')}
                        </a>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 hover:border-white/60 text-white rounded-md font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-100"
                        >
                            <Mail size={18} />
                            {t('hero.contactMe')}
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="hidden md:block"
                >
                    <ManifestCard />
                </motion.div>
            </div>

            <button
                onClick={() => scrollTo('about')}
                aria-label="Scroll"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                    <ChevronDown size={26} />
                </motion.div>
            </button>
        </section>
    )
}
