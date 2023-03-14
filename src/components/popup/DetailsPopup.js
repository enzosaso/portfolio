import Popup from './Popup'

const DetailsPopup = ({ open, close, data }) => {
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
                Ir a ver
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
                <span className='first'>Cliente</span>
                <span>{client}</span>
              </li>
              <li>
                <span className='first'>Categoría</span>
                <span>
                  <a href='#'>{category}</a>
                </span>
              </li>
              <li>
                <span className='first'>Stack</span>
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
