import { RRSS_LINKS } from '../constants'

const Home = ({ dark }) => {
  return (
    <div className='hero section' id='home'>
      <div className='container'>
        <div className='content'>
          <div className='details'>
            <div className='short'>
              <h3>
                Enzo Saso <img className='svg' src='img/svg/hi.svg' alt='' />
              </h3>
              <span className='job'>Frontend Developer</span>
            </div>
            <div className='text'>
              <p>
                Con más de 4 años de experiencia y más de 20 sitios web, construí un e-commerce completo y lideré
                proyectos complejos. Buscando nuevos desafíos.
              </p>
            </div>
            <div className='buttons'>
              <div className='boxed_button'>
                <a
                  className='anchor'
                  href='https://api.whatsapp.com/send/?phone=5492604632048&text=Hola+Enzo&type=phone_number&app_absent=0'
                  target='_blank'
                  rel='noreferrer'
                >
                  Di Hola <img className='svg' src='img/svg/send.svg' alt='' />
                </a>
              </div>
              <div className='simple_button'>
                <a className='line_effect anchor' href='#portfolio'>
                  Mis trabajos <img className='svg' src='img/svg/top-arrow.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='follow'>
          <span>Sigueme:</span>
          <ul>
            <li>
              <a href={RRSS_LINKS.linkedin} target='_blank' rel='noreferrer'>
                <img className='svg' src='img/svg/social/linkedin.svg' alt='' />
              </a>
            </li>
            <li>
              <a href={RRSS_LINKS.github} target='_blank' rel='noreferrer'>
                <img className='svg' src='img/svg/social/github.svg' alt='' />
              </a>
            </li>
            <li>
              <a href={RRSS_LINKS.instagram} target='_blank' rel='noreferrer'>
                <img className='svg' src='img/svg/social/instagram.svg' alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='down'>
        <a className='anchor' href='#about'>
          <img className='svg' src={`img/svg/${dark ? 'down_button_light' : 'down_button'}.svg`} alt='' />
        </a>
      </div>
      <div className='avatar'>
        <div className='img'>
          <img src={`img/hero/${dark ? 2 : 1}.png`} alt='' />
          <div className='video_button'>
            <a className='popup-youtube' href='https://www.youtube.com/watch?v=7e90gBu4pas'>
              <img className='anim_circle' src='img/hero/welcome.png' alt='' />
              <img className='svg' src='img/svg/play.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
