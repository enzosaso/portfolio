const CopyRight = () => {
  return (
    <div className='section'>
      <div className='copyright'>
        <div className='container'>
          <div className='copyright_inner'>
            <div className='logo'>
              <img src='img/logo/light.png' alt='' />
            </div>
            <div className='copy'>
              <p>
                © {new Date().getFullYear()} by{' '}
                <a href='https://enzosaso.com/' target='_blank' rel='noreferrer'>
                  EnzoSaso.
                </a>{' '}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRight
