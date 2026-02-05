import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="bg-navy-900 text-white py-8">
            <div className="section-container">
                <p className="text-center text-gray-300">
                    {t('footer.copyright')}
                </p>
            </div>
        </footer>
    )
}
