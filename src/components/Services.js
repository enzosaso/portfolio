import { useEffect, useState } from 'react'
import { Servicehashtag } from '../utilits'
import ServicePopup from './popup/ServicePopup'

const serviceData = [
  {
    name: 'Proyectos sólidos y escalables',
    img: 'img/service/1.jpg',
    description: [
      'Como Frontend developer, tengo la habilidad de diseñar y desarrollar arquitecturas de software frontend sólidas y escalables. Siempre considero aspectos como la seguridad, el rendimiento y la facilidad de mantenimiento, para asegurarme de que el proyecto sea robusto y escalable a largo plazo.'
    ]
  },
  {
    name: 'Código limpio, estructurado y mantenible',
    img: 'img/service/2.jpg',
    description: [
      'Soy responsable de escribir un código limpio, estructurado y mantenible en HTML, CSS y JavaScript. Siempre me aseguro de seguir las mejores prácticas de codificación y estándares de la industria. Además, pruebo y depuro mi trabajo regularmente para garantizar que sea funcional y cumpla con los requisitos del proyecto.'
    ]
  },
  {
    name: 'Liderar un equipo de devs',
    img: 'img/service/3.jpg',
    description: [
      'Tengo experiencia liderando equipos. Como líder, delego tareas y aseguro que los plazos se cumplan y que el trabajo se entregue a tiempo. Además, proporciono orientación y apoyo a mi equipo, y me aseguro de que tengan los recursos y herramientas necesarios para realizar su trabajo de manera efectiva.'
    ]
  },
  {
    name: 'Colaboración con diseñadores y otros devs',
    img: 'img/service/4.jpg',
    description: [
      'Trabajar en colaboración con diseñadores y otros desarrolladores es crucial para asegurar que la interfaz de usuario del proyecto sea intuitiva y diseñada de manera efectiva para garantizar una experiencia de usuario positiva. Como Frontend developer, tengo la habilidad de trabajar en equipo, comunicar mis ideas y colaborar eficazmente para lograr los objetivos del proyecto.'
    ]
  }
]

const Services = () => {
  const [current, setCurrent] = useState(0)
  const [activeData, setActiveData] = useState({})
  const [open, setOpen] = useState(false)
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
                  Lo que puedo
                  <br />
                  hacer
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
