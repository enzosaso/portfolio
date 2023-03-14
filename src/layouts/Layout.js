import Head from 'next/head'
import { useEffect } from 'react'
import ImageView from '../components/popup/ImageView'
import VideoPopup from '../components/popup/VideoPopup'
import { dataImage, hashtag_, imgToSVG, scrollSection, stickyNav } from '../utilits'
import PreLoader from './PreLoader'

const Layout = ({ children }) => {
  useEffect(() => {
    imgToSVG()
    dataImage()
    hashtag_()
    window.addEventListener('scroll', stickyNav)
    window.addEventListener('scroll', scrollSection)
  }, [])

  return (
    <>
      <Head>
        <title>Enzo Saso | Inicio</title>
        <meta
          name='description'
          content='¡Hola! 👋 Soy Frontend Developer con más de 4 años de experiencia en el desarrollo de sitios web y aplicaciones. Me apasiona crear soluciones creativas y de alto rendimiento utilizando las últimas tecnologías.'
          key='desc'
        />
        <meta property='og:title' content='Portafolio de Enzo Saso' />
        <meta
          property='og:description'
          content='¡Hola! 👋 Soy Frontend Developer con más de 4 años de experiencia en el desarrollo de sitios web y aplicaciones. Me apasiona crear soluciones creativas y de alto rendimiento utilizando las últimas tecnologías.'
        />
        <meta property='og:image' content='https://portfolio.enzosaso.com/img/og-prev.jpg' />
      </Head>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className='all_wrap' data-magic-cursor='show'>
        {children}
      </div>
    </>
  )
}

export default Layout
