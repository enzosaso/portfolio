import Head from 'next/head'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import ImageView from '../components/popup/ImageView'
import VideoPopup from '../components/popup/VideoPopup'
import { dataImage, hashtag_, imgToSVG, scrollSection, stickyNav } from '../utilits'
import PreLoader from './PreLoader'

const Layout = ({ children }) => {
  const { t } = useTranslation('common')

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
        <title>{t('seo.title')}</title>
        <meta name='description' content={t('seo.description')} key='desc' />
        <meta property='og:title' content={t('seo.ogTitle')} />
        <meta property='og:description' content={t('seo.ogDescription')} />
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
