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
