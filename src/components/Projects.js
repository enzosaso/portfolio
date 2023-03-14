import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projectSliderProps } from '../sliderProps'
import { dataImage } from '../utilits'
import DetailsPopup from './popup/DetailsPopup'

const PROJECTS_DATA = [
  {
    id: '1',
    imageSrc: 'img/portfolio/1.jpg',
    title: 'Acordeavos',
    description: [
      'Tuve la oportunidad de liderar el desarrollo de un eCommerce completo desde cero para un cliente que requería funcionalidades complejas y personalizadas. Para este proyecto, utilizamos tecnologías avanzadas como Next.js para la tienda en línea, React.js para el panel de administración, Redux para la gestión de estado, GraphQL y Apollo para la comunicación con la base de datos Firebase.',
      'El objetivo del proyecto era crear una tienda en línea que ofreciera una experiencia de compra fluida y personalizada para los usuarios, con funcionalidades avanzadas como el bulk editor, la carga de facturas que actualizan el stock, opciones de contacto con el cliente en el detalle del pedido, informes, página de producto con variantes y precios según el rol del usuario, carrito con cupones de descuentos, medios de pago personalizados, y muchas otras características.',
      'Como desarrollador principal, trabajé para llevar a cabo el proyecto. Utilizamos Next.js para la construcción de la tienda en línea, React.js para el panel de administración, Redux para la gestión de estado, y GraphQL y Apollo para la comunicación con la base de datos Firebase.',
      'Gracias a esta experiencia, adquirí habilidades avanzadas en el desarrollo de eCommerce con tecnologías modernas como Next.js, React.js, Redux, GraphQL y Firebase. También aprendí a adaptar la solución técnica a las necesidades específicas del cliente para ofrecer una experiencia de compra fluida y personalizada para los usuarios.'
    ],
    stack: 'NextJS, ReactJS, GraphQL, Apollo, Redux, NodeJS, Firebase',
    category: 'Ecommerce',
    client: 'Acordeavos',
    url: 'https://acordeavos.com/',
    gallery: []
  },
  {
    id: '2',
    imageSrc: 'img/portfolio/2.jpeg',
    title: 'CostaLive',
    description: [
      'Esta tienda fue creada con WordPress y tenía como objetivo ofrecer una experiencia de compra personalizada y atractiva para los usuarios.',
      'Entre las funcionalidades de marketing implementadas se incluyen:',
      '* Cross-selling: se implementó una sección de productos relacionados para fomentar compras adicionales por parte de los usuarios.',
      '* Product bundles: se crearon paquetes de productos que ofrecían descuentos atractivos para los clientes que compraban varios productos juntos.',
      '* Flash and private sales: se programaron ventas flash y ventas privadas para recompensar a los clientes más fieles y ofrecer descuentos exclusivos.',
      '* Promotions and gifts: se ofrecieron promociones especiales en fechas importantes como Navidad, y se otorgaron regalos a los clientes por compras superiores a un determinado monto.',
      '* Referral and loyalty programs: se desarrolló un programa de referidos y un programa de lealtad para fomentar la recomendación de la tienda y recompensar a los clientes más fieles.',
      '* Remarketing: se utilizó remarketing para mostrar anuncios personalizados a los usuarios que visitaron la tienda pero no realizaron una compra.',
      '* Shopping cart abandonment: se implementó una estrategia para recuperar los carritos abandonados y fomentar la finalización de la compra.',
      'Mi papel en este proyecto fue el de desarrollador y gestor de la tienda en línea. Me encargué de la configuración y personalización de WordPress, la instalación y configuración de los plugins necesarios para las funcionalidades de marketing y la gestión del contenido y de los pedidos.',
      'Gracias a esta experiencia, adquirí habilidades en el desarrollo y gestión de tiendas en línea con WordPress, así como en la implementación de estrategias de marketing para mejorar la conversión y la retención de clientes.'
    ],
    stack: 'WordPress',
    category: 'Ecommerce',
    client: 'CostaLive',
    url: '',
    gallery: []
  },
  {
    id: '3',
    imageSrc: 'img/portfolio/4.jpg',
    title: 'enzosaso.com',
    description: [
      'El objetivo del sitio web page era ofrecer precios más estables a los clientes que se encontraban en Argentina, dado que la moneda del país es muy volátil.',
      'Para el desarrollo del sitio, se utilizó Next.js, el framework de React. También se integró una API de dólar que se actualizaba diariamente para obtener el tipo de cambio actualizado.',
      'Se presentaron los servicios y se permitió a los usuarios seleccionar el servicio deseado y el tiempo que se requiere para completarlo. Luego, se utilizó la API de dólar para calcular el precio en pesos argentinos, que se muestra en tiempo real.',
      'Me encargué de la programación de la paginas en Next.js, la integración de la API de dólar para el cálculo de precios, el diseño de la interfaz de usuario y la implementación de una estrategia de SEO para optimizar el posicionamiento en los motores de búsqueda.'
    ],
    stack: 'NextJS',
    category: 'Website',
    client: 'enzosaso.com',
    url: 'https://enzosaso.com/',
    gallery: []
  },
  {
    id: '4',
    imageSrc: 'img/portfolio/3.jpg',
    title: 'Imagilandia',
    description: [
      'En este proyecto, trabajé en el desarrollo de un plugin personalizado en PHP para WordPress que agregaba funcionalidades específicas a la tienda en línea. Entre las características añadidas se incluyen:',
      '* Personalización de la vista de la tienda, permitiendo mostrar productos de forma dinámica según las preferencias del usuario.',
      '* Implementación de un proceso de checkout personalizado que se adaptaba a los diferentes métodos de pago y envío disponibles.',
      'Mi papel en este proyecto fue el de desarrollador y gestor de la tienda en línea. Me encargué de la programación y personalización de WordPress, la creación del plugin personalizado en PHP, la gestión del contenido y de los pedidos, así como la resolución de problemas técnicos relacionados con el funcionamiento de la tienda en línea.',
      'Gracias a esta experiencia, adquirí habilidades avanzadas en la programación en PHP y en el desarrollo y gestión de tiendas en línea con WordPress.'
    ],
    stack: 'WordPress',
    category: 'Ecommerce',
    client: 'Imagilandia',
    url: 'https://imagilandia.com.ar/',
    gallery: []
  }
]

const Projects = () => {
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
                  Algunos de mis
                  <br />
                  proyectos
                </span>
              </h3>
            </div>
            <div className='portfolio_list'>
              <Swiper {...projectSliderProps} className='owl-carousel gallery_zoom'>
                {PROJECTS_DATA.map(item => (
                  <SwiperSlide key={item.id}>
                    <div className='list_inner'>
                      <div className='image'>
                        <img src='img/thumbs/37-40.jpg' alt='' />
                        <div className='main' data-img-url={item.imageSrc} />
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
