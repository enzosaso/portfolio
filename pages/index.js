import dynamic from 'next/dynamic'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import ExpertAreas from '../src/components/ExpertAreas'
import Home from '../src/components/Home'
import ChatBot from '../src/components/popup/ChatBot'
import Services from '../src/components/Services'
import CopyRight from '../src/layouts/CopyRight'
import Header from '../src/layouts/Header'
import Layout from '../src/layouts/Layout'
import MobileMenu from '../src/layouts/MobileMenu'
import Mouse from '../src/layouts/Mouse'
import ProgressBar from '../src/layouts/ProgressBar'
const Projects = dynamic(() => import('../src/components/Projects'), {
  ssr: false
})

const Index = () => {
  return (
    <Layout>
      <MobileMenu />
      <Header />
      <Home />
      <About />
      <ExpertAreas />
      <Services />
      <Projects />
      <Contact />
      <CopyRight />
      <Mouse />
      <ProgressBar />
      <ChatBot />
    </Layout>
  )
}

export default Index
