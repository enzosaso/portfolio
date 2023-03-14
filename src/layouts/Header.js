const Header = ({ dark }) => {
  return (
    <div className='header'>
      <div className='header_in'>
        <div className='logo'>
          <a href='#'>
            <img src={`img/logo/${dark ? 'light' : 'logo'}.png`} alt='' />
          </a>
        </div>
        <div className='menu'>
          <ul className='anchor_nav'>
            <li className='current'>
              <a href='#home'>Inicio</a>
            </li>
            <li>
              <a href='#about'>Sobre de mi</a>
            </li>
            <li>
              <a href='#service'>Habilidades</a>
            </li>
            <li>
              <a href='#portfolio'>Portafolio</a>
            </li>
            <li>
              <a href='#contact'>Contacto</a>
            </li>
          </ul>
          <span className='ccc' />
        </div>
        <div className='button'></div>
      </div>
    </div>
  )
}

export default Header
