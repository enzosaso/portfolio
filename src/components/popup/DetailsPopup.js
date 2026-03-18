import Popup from './Popup'
import { useTranslation } from 'next-i18next'

const DetailsPopup = ({ open, close, data }) => {
  const { t } = useTranslation('common')
  const { imageSrc = '', title = '', description = [], stack, category, client, url, gallery = [] } = data

  return (
    <Popup open={open} close={close}>
      <div className='popup_details'>
        <div className='top_image'>
          <img src='img/thumbs/4-2.jpg' alt='' />
          <div className='main' data-img-url='img/portfolio/4.jpg' style={{ backgroundImage: `url(${imageSrc})` }} />
        </div>
        <div className='portfolio_main_title'>
          <h3>{title}</h3>
          {url ? (
            <span>
              <a href={url} target='_blank' rel='noreferrer'>
                {t('projects.viewProject', 'Ir a ver')}
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ marginLeft: '8px', verticalAlign: 'middle', position: 'relative', top: '-1px' }}
                >
                  <path
                    d='M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15 3H21V9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M21 3L12 12'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </span>
          ) : (
            ''
          )}
        </div>
        <div className='main_details'>
          <div className='textbox'>
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className='detailbox'>
            <ul>
              <li>
                <span className='first'>{t('projects.client', 'Cliente')}</span>
                <span>{client}</span>
              </li>
              <li>
                <span className='first'>{t('projects.category', 'Categoría')}</span>
                <span>
                  <a href='#'>{category}</a>
                </span>
              </li>
              <li>
                <span className='first'>{t('projects.stack', 'Stack')}</span>
                <span>{stack}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='additional_images'>
          <ul>
            {gallery.map((image, index) => (
              <li key={index}>
                <div className='list_inner'>
                  <div className='my_image'>
                    <img src={image} alt='' />
                    <div className='main' data-img-url='img/service/1.jpg' />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Popup>
  )
}
export default DetailsPopup
