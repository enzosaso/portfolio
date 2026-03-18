import LanguageSwitcher from '../components/LanguageSwitcher'
import { useTranslation } from 'next-i18next'

const Header = ({ dark }) => {
  const { t } = useTranslation('common')

  return (
    <div className='header'>
      <div className='header_in'>
        <div className='logo'>
          <a href='#'>
            <img src={`img/logo/${dark ? 'light' : 'logo'}.png`} alt='' />
          </a>
        </div>
        <div className='menu'>
          <ul className='anchor_nav'>
            <li className='current'>
              <a href='#home'>{t('navigation.home', 'Inicio')}</a>
            </li>
            <li>
              <a href='#about'>{t('navigation.about', 'Sobre mí')}</a>
            </li>
            <li>
              <a href='#service'>{t('navigation.services', 'Servicios')}</a>
            </li>
            <li>
              <a href='#portfolio'>Portafolio</a>
            </li>
            <li>
              <a href='#contact'>{t('navigation.contact', 'Contacto')}</a>
            </li>
          </ul>
          <span className='ccc' />
        </div>
        <div className='button'>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Header
