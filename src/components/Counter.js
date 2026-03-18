import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

const Counter = ({ end, decimals }) => {
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  return (
    <CountUp end={end ? end : 100} duration={3} decimals={decimals ? decimals : 0}>
      {({ countUpRef, start }) => (
        <span
          className='tonni_tm_counter'
          data-from='0'
          data-to={end}
          ref={el => {
            countUpRef.current = el
            counterRef.current = el
          }}
        >
          {isVisible ? start() : '0'}
        </span>
      )}
    </CountUp>
  )
}

export default Counter
