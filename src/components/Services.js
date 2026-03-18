import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Servicehashtag } from '../utilits'
import ServicePopup from './popup/ServicePopup'

const Services = () => {
  const { t } = useTranslation('common')
  const [current, setCurrent] = useState(0)
  const [activeData, setActiveData] = useState({})
  const [open, setOpen] = useState(false)

  const serviceData = t('services.services', { returnObjects: true }).map((service, index) => ({
    name: service.name,
    img: `img/service/${index + 1}.jpg`,
    description: [service.description]
  }))

  useEffect(() => {
    Servicehashtag()
  }, [current])

  return (
    <>
      <ServicePopup open={open} close={() => setOpen(false)} data={activeData} />
      <div className='section' id='service'>
        <div className='service'>
          <div className='container'>
            <div className='main_title'>
              <h3>
                <span>
                  {t('services.title')}
                  <br />
                </span>
              </h3>
            </div>
            <div className='service_list'>
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? 'current' : ''} key={i}>
                    <div className='list_inner'>
                      <div className='left'>
                        <span className='number'>{`0${i + 1}`}</span>
                        <h3 className='title'>{service.name}</h3>
                      </div>
                      <div className='right'>
                        <div className='text'>
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className='arrow'>
                          <img className='svg' src='img/svg/top-arrow.svg' alt='' />
                        </div>
                      </div>
                      <a
                        className='full_link c-pointer'
                        onClick={() => {
                          setActiveData(service)
                          setOpen(true)
                          setCurrent(i)
                        }}
                      />
                      <img className='popup_service_image' src='img/service/1.jpg' alt='' />
                    </div>
                  </li>
                ))}
              </ul>
              <span className='ccc' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
