import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { dataImage } from '../utilits'
import DetailsPopup from './popup/DetailsPopup'

const Projects = () => {
  const { t } = useTranslation('common')
  const PROJECTS_DATA = t('projects.data', { returnObjects: true })
  const [detailsPopup, setDetailsPopup] = useState({ open: false, data: PROJECTS_DATA[0] })

  useEffect(() => {
    dataImage()
  }, [])

  return (
    <>
      <DetailsPopup
        close={() => setDetailsPopup({ ...detailsPopup, open: false })}
        open={detailsPopup.open}
        data={detailsPopup.data}
      />
      <div className='section' id='portfolio'>
        <div className='portfolio'>
          <div className='container'>
            <div className='main_title'>
              <h3>
                <span>
                  {t('projects.title', 'Algunos de mis proyectos')}
                  <br />
                </span>
              </h3>
            </div>
            <div className='portfolio_list'>
              <Swiper
                modules={[Navigation, Autoplay]}
                className='gallery_zoom'
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                navigation={{
                  nextEl: '.next_button',
                  prevEl: '.prev_button'
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2, spaceBetween: 50 },
                  1040: { slidesPerView: 3, spaceBetween: 50 }
                }}
              >
                {PROJECTS_DATA.map(item => (
                  <SwiperSlide key={item.id}>
                    <div className='list_inner'>
                      <div className='image'>
                        <img src='img/thumbs/37-40.jpg' alt='' />
                        <div
                          className='main'
                          data-img-url={item.imageSrc}
                          style={{ backgroundImage: `url(${item.imageSrc})` }}
                        />
                      </div>
                      <div className='details'>
                        <span className='category'>{item.category}</span>
                        <h3 className='title'>
                          <span>{item.title}</span>
                        </h3>
                      </div>
                      <a
                        className='full_link details_link c-pointer'
                        onClick={() => setDetailsPopup({ open: true, data: item })}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <a className='prev_button' href='#'>
                <img className='svg' src='img/svg/prev.svg' alt='' />
              </a>
              <a className='next_button' href='#'>
                <img className='svg' src='img/svg/next.svg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
