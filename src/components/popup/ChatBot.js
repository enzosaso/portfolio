import { useState, useRef, useEffect } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { getChatGPT } from '../../services/getChatGPT'

const SendMessageIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-send'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M10 14l11 -11'></path>
      <path d='M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5'></path>
    </svg>
  )
}

const DEFAULT_CONVERSATION = [
  {
    id: '1',
    type: 'bot',
    text: 'Hola estoy hecho con ChatGPT, un placer hablar contigo!  👋'
  },
  {
    id: '2',
    type: 'bot',
    text: 'Puedes hacerme cualquier pregunta sobre mi para conocerme.'
  }
]

const ChatBot = () => {
  const [messages, setMessages] = useState(DEFAULT_CONVERSATION)
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const container = useRef()
  useOpen(setIsOpen)

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight)
  }, [messages])

  function handleSubmit(e) {
    e.preventDefault()
    if (!inputText || loading) return

    setLoading(true)
    setInputText('')
    setMessages(messages =>
      messages.concat({
        id: String(Date.now()),
        type: 'user',
        text: inputText
      })
    )
    getChatGPT(inputText)
      .then(response => {
        setMessages(messages => messages.concat(response))
      })
      .finally(() => setLoading(false))
  }

  function openChat() {
    setIsOpen(true)
  }

  function closeChat() {
    setIsOpen(false)
  }

  if (!isOpen)
    return (
      <button className='float' onClick={openChat}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-wechat'
          width={24}
          height={24}
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z'></path>
          <path d='M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233'></path>
          <path d='M10 8h.01'></path>
          <path d='M7 8h.01'></path>
          <path d='M15 14h.01'></path>
          <path d='M18 14h.01'></path>
        </svg>
      </button>
    )

  return (
    <div className={`center ${isOpen ? 'open' : ''}`}>
      <div className='chat'>
        <div className='chat-contact bar'>
          <img className='pic bot' src='/img/contact/me.jpeg' alt='' />
          <div className='info'>
            <div>
              <span className='name'>Enzo Saso</span>
              <div className='seen'>en linea</div>
            </div>
            <button className='close-btn' onClick={closeChat}>
              X
            </button>
          </div>
        </div>
        <div ref={container} className='messages' id='chat'>
          <div className='time'>Hoy</div>
          {messages.map(message => (
            <div key={message.id} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
          {loading ? (
            <div className='message bot'>
              <div className='typing typing-1'></div>
              <div className='typing typing-2'></div>
              <div className='typing typing-3'></div>
            </div>
          ) : (
            ''
          )}
        </div>
        <form className='input' onSubmit={handleSubmit}>
          <input
            placeholder='Hazme una pregunta'
            type='text'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <button disabled={loading} type='sumbit' className={`send-btn ${loading ? 'disabled' : ''}`}>
            <SendMessageIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatBot
