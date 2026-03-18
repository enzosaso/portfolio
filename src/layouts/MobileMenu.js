import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const MobileMenu = () => {
  const { t } = useTranslation('common')
  const [toggle, setToggle] = useState(false)

  return (
    <div className='mobile_menu'>
      <div className='mobile_menu_inner'>
        <div className='mobile_in'>
          <div className='logo'>
            <a href='#'>
              <img src='img/logo/logo.png' alt='' />
            </a>
          </div>
          <div className='trigger' onClick={() => setToggle(!toggle)}>
            <div className={`hamburger hamburger--slider ${toggle ? 'is-active' : ''}`}>
              <div className='hamburger-box'>
                <div className='hamburger-inner' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='dropdown' style={{ display: toggle ? 'block' : 'none' }}>
        <div className='dropdown_inner'>
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
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
