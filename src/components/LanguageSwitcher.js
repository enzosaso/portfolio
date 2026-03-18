import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LanguageSwitcher = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const changeLanguage = (locale) => {
    router.push(router.asPath, router.asPath, { locale })
  }

  return (
    <div className="language_switcher">
      <button
        onClick={() => changeLanguage('es')}
        className={`lang-btn ${router.locale === 'es' ? 'active' : ''}`}
      >
        ES
      </button>
      <span>/</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`lang-btn ${router.locale === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
