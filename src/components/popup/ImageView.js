import { useEffect, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

const ImgViews = ({ close, src }) => {
  const domNode = useClickOutside(() => {
    close(false)
  })

  return (
    <>
      <div className='mfp-bg mfp-ready' onClick={() => close(false)}></div>
      <div
        className='mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready'
        tabIndex={-1}
        style={{ overflow: 'hidden auto' }}
      >
        <div className={`mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}>
          <div className='mfp-content' ref={domNode}>
            <div className='mfp-iframe-scaler'>
              <img className='mfp-img' src={src} />
            </div>
          </div>
          <div className='mfp-preloader'>Cargando...</div>
        </div>
      </div>
    </>
  )
}

const ImageView = () => {
  const [img, setImg] = useState(false)
  const [imgValue, setImgValue] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll('a')
      a.forEach(a => {
        if (a.href.includes('img/')) {
          if (a.getAttribute('download') === null) {
            a.addEventListener('click', e => {
              e.preventDefault()
              setImgValue(a.href)
              setImg(true)
            })
          }
        }
      })
    }, 1500)
  }, [])

  return <>{img && <ImgViews close={() => setImg(false)} src={imgValue} />}</>
}
export default ImageView
