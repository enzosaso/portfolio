import useClickOutside from '../../hooks/useClickOutside'

const Popup = ({ open, close, children }) => {
  const domNode = useClickOutside(() => {
    close()
  })

  return (
    <div className={`modalbox ${open ? 'opened' : ''}`}>
      <div className='box_inner' ref={domNode}>
        <div className='close'>
          <a className='c-pointer' onClick={close}>
            <i className='icon-cancel' />
          </a>
        </div>
        <div className='description_wrap'>{children}</div>
      </div>
    </div>
  )
}
export default Popup
