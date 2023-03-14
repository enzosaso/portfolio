import { useEffect } from 'react'
import { scrollTop } from '../utilits'

const ProgressBar = () => {
  useEffect(() => {
    window.addEventListener('scroll', scrollTop)
  }, [])

  return (
    <div className='progressbar'>
      <a href='#'>
        <span className='text' style={{ bottom: '150.75px' }}>
          Ir arriba
        </span>
      </a>
      <span className='line' />
    </div>
  )
}

export default ProgressBar
