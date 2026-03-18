import { useTranslation } from 'next-i18next'

const CopyRight = () => {
  const { t } = useTranslation('common')

  return (
    <div className='section'>
      <div className='copyright'>
        <div className='container'>
          <div className='copyright_inner'>
            <div className='logo'>
              <img src='img/logo/light.png' alt='' />
            </div>
            <div className='copy'>
              <p>
                {t('footer.madeBy', 'Made by')}{' '}
                <a href='https://enzosaso.com/' target='_blank' rel='noreferrer'>
                  EnzoSaso.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRight
