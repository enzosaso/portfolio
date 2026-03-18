import { RRSS_LINKS, VIDEO_INTRO } from '../constants'
import { useTranslation } from 'next-i18next'

const Contact = () => {
  const { t } = useTranslation('common')

  return (
    <div className='section' id='contact'>
      <div className='contact'>
        <div className='container'>
          <div className='infobox'>
            <div className='video_button'>
              <a className='popup-youtube' href={VIDEO_INTRO}>
                <img className='anim_circle' src='img/contact/video.png' alt='' />
                <img className='svg' src='img/svg/play.svg' alt='' />
              </a>
            </div>
            <div className='text'>
              <h3>{t('contact.subtitle')}</h3>
              <p>{t('contact.description')}</p>
            </div>
            <div className='boxed_button'>
              <a href='mailto:hola@enzosaso.com'>
                {t('contact.sayHello')} <img className='svg' src='img/svg/send.svg' alt='' />
              </a>
            </div>
          </div>
          <div className='connect'>
            <div className='left'>
              <ul>
                <li>
                  <span className='name'>{t('contact.phone')}</span>
                  <p>
                    <a className='line_effect' href='tel:+5492604632048'>
                      +54 (2604) 632048
                    </a>
                  </p>
                </li>
                <li>
                  <span className='name'>{t('contact.email')}</span>
                  <p>
                    <a className='line_effect' href='mailto:enzoarielsaso@gmail.com'>
                      enzoarielsaso@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className='right'>
              <div className='follow'>
                <span>{t('contact.followMe')}</span>
                <ul>
                  <li>
                    <a href={RRSS_LINKS.linkedin} target='_blank' rel='noreferrer'>
                      <img className='svg ligth' src='img/svg/social/linkedin.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href={RRSS_LINKS.github} target='_blank' rel='noreferrer'>
                      <img className='svg ligth' src='img/svg/social/github.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href={RRSS_LINKS.instagram} target='_blank' rel='noreferrer'>
                      <img className='svg ligth' src='img/svg/social/instagram.svg' alt='' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className='element'>
          <img className='svg' src='img/svg/elements.svg' alt='' />
        </span>
        <span className='element2'>
          <img className='svg' src='img/svg/element-2.svg' alt='' />
        </span>
      </div>
    </div>
  )
}

export default Contact
