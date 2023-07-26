const About = () => {
  return (
    <div className='section' id='about'>
      <div className='about'>
        <div className='about_in'>
          <div className='left'>
            <div className='box'>
              <h3 className='year'>+4</h3>
              <span className='experience'>Años de experiencia</span>
              <h3 className='name'>Enzo Saso</h3>
            </div>
          </div>
          <div className='right'>
            <span className='element'>
              <img className='svg' src='img/svg/element.svg' alt='' />
            </span>
            <div className='main_title'>
              <h3>
                <span>Acerca de mi</span>
              </h3>
            </div>
            <div className='text'>
              <p>
                Me gusta sentirme dueño de los proyectos en los que trabajo y no solo escribir código mantenible y
                escalable, sino también tener una visión crítica del producto, las funcionalidades y el negocio. Siempre
                busco soluciones creativas e innovadoras para mejorar la experiencia del usuario y la calidad del
                producto.
              </p>
            </div>
            <div className='short'>
              <div className='boxed_button'>
                <a href='img/cv/CV.pdf' download>
                  Descargar CV <img className='svg' src='img/svg/paper.svg' alt='' />
                </a>
              </div>
              <img src='img/signature.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
