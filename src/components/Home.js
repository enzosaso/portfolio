import { RRSS_LINKS, VIDEO_INTRO } from '../constants'
import { useTranslation } from 'next-i18next'

const Home = ({ dark }) => {
  const { t } = useTranslation('common')

  return (
    <div className='hero section' id='home'>
      <div className='container'>
        <div className='content'>
          <div className='details'>
            <div className='short'>
              <h3>
                {t('home.name')} <img className='svg' src='img/svg/hi.svg' alt='' />
              </h3>
              <span className='job'>{t('home.role')}</span>
            </div>
            <div className='text'>
              <p>{t('home.description')}</p>
            </div>
            <div className='buttons'>
              <div className='boxed_button'>
                <a className='anchor' href='mailto:hola@enzosaso.com'>
                  {t('home.sayHello')} <img className='svg' src='img/svg/send.svg' alt='' />
                </a>
              </div>
              <div className='simple_button'>
                <a className='line_effect anchor' href='#portfolio'>
                  {t('home.myWork')} <img className='svg' src='img/svg/top-arrow.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='follow'>
          <span>{t('home.followMe')}</span>
          <ul>
            <li>
              <a href={RRSS_LINKS.linkedin} target='_blank' rel='noreferrer'>
                <img className='svg' src='img/svg/social/linkedin.svg' alt='' />
              </a>
            </li>
            <li>
              <a href={RRSS_LINKS.github} target='_blank' rel='noreferrer'>
                <img className='svg' src='img/svg/social/github.svg' alt='' />
              </a>
            </li>
            <li>
              <a href={RRSS_LINKS.instagram} target='_blank' rel='noreferrer'>
                <img className='svg' src='img/svg/social/instagram.svg' alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='down'>
        <a className='anchor' href='#about'>
          <img className='svg' src={`img/svg/${dark ? 'down_button_light' : 'down_button'}.svg`} alt='' />
        </a>
      </div>
      <div className='avatar'>
        <div className='img'>
          <img src={`img/hero/${dark ? 2 : 1}.png`} alt='' />
          <div className='video_button'>
            <a className='popup-youtube' href={VIDEO_INTRO}>
              <img className='anim_circle' src='img/hero/welcome.png' alt='' />
              <img className='svg' src='img/svg/play.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
