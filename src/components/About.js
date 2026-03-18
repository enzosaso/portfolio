import { useTranslation } from 'next-i18next'

const About = () => {
  const { t } = useTranslation('common')

  return (
    <div className='section' id='about'>
      <div className='about'>
        <div className='about_in'>
          <div className='left'>
            <div className='box'>
              <h3 className='year'>+5</h3>
              <span className='experience'>{t('about.experience')}</span>
              <h3 className='name'>Enzo Saso</h3>
            </div>
          </div>
          <div className='right'>
            <span className='element'>
              <img className='svg' src='img/svg/element.svg' alt='' />
            </span>
            <div className='main_title'>
              <h3>
                <span>{t('about.title')}</span>
              </h3>
            </div>
            <div className='text'>
              <p>{t('about.personalDescription')}</p>
            </div>
            <div className='short'>
              <div className='boxed_button'>
                <a href='img/cv/CV.pdf' download>
                  {t('about.download_cv_button')} <img className='svg' src='img/svg/paper.svg' alt='' />
                </a>
              </div>
              <img src='img/signature.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
