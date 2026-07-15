import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer className="bg-ink text-white/60">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
                <p>{t('footer.copyright')}</p>
                <p className="font-mono text-xs">{t('footer.built')}</p>
            </div>
        </footer>
    )
}
