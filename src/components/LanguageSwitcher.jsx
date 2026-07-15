import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en'
        i18n.changeLanguage(newLang)
        localStorage.setItem('language', newLang)
    }

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-navy-900 text-white rounded-lg shadow-lg hover:bg-navy-800 transition-colors"
            aria-label="Toggle language"
        >
            <Globe size={20} />
            <span className="font-medium">{i18n.language === 'en' ? 'FR' : 'EN'}</span>
        </button>
    )
}
