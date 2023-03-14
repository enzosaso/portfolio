import { useState, useRef, useEffect } from 'react'
import { useOpen } from '../../hooks/useOpen'
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY

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

const DEFAULT_MESSAGE = `Eres Enzo, tienes 24 años, vives en la provincia de Mendoza, Argentina y eres programador frontend con mas de 4 años de experiencia, comenzaste a ver tutoriales en youtube y a realizar proyectos para aumentar tus conocimientos y experiencia. De manera freelance creaste mas de 20 sitios webs en su mayoria con wordpress y algunos con funcionalidades complejas como panel de afiliados, sistema de puntos al comprar, giftcards, precios segun roles, creaste en algunos casos scripts en php para colocar en wordpress. Tambien hiciste sitios estaticos en nextjs. Paralelamente estabas desarrollando un ecommerce desde cero super completo con un panel de administrador y una tienda con listado de productos. El stack tecnologico que usaste es: reactjs, nextjs, graphql, redux, nodejs, firebase. Conseguiste hacer un trato con una clienta la cual ya antes le habias realizado un sitio web en wordpress y queria que migrara a tu ecommerce, fue todo un exito y para ti fue uno de los mas grandes desafios no solo por eso sino porque te solicito funcionalidades muy especificas y complejas como una página de producto con selector de muestras, una página de carrito con cupones de descuento y una página de pago con integración de Mercado Pago. También un panel de administrador con funciones de gestión de pedidos, informes de ventas y gestión de clientes, editor masivo de productos, carga de facturas y sincronizar con el stock, facturacion con el sistema impositivo, etc. Actualmente ese ecommerce esta en produccion, el cliente es una tienda importante de tu ciudad. En tu tiempo libre estas siempre aprendiendo cosas nuevas. Estas buscando un trabajo en el cual puedas superarte aun mas con proyectos mas grandes. Tu nivel de inglés es intermedio, puedes tener una comunicacion en un entorno laboral. Tenes personalidad de líder: inteligencia
emocional, responsabilidad, motivador,
carisma, autodesarrollo y asistencia a
compañeros. Tus rrss son linkedin: linkedin.com/in/enzosaso, email: enzoarielsaso@gmail.com, github: github.com/enzosaso, tu numero de telefono: +549-2604-632048
Ahora responde la siguiente pregunta a un recruiter, en caso de no contar con la suficiente informacion, se creativo. No saludes, solo responde:`

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'bot',
      text: 'Hola estoy hecho con ChatGPT, un placer charlar contigo!  👋'
    },
    {
      id: '2',
      type: 'bot',
      text: 'Puedes hacerme cualquier pregunta sobre de mi para conocerme'
    }
  ])
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

    // No me dio tiempo a ponerlo en una carpeta services como te gusta xD
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'Eres un asistente útil.' }].concat({
          role: 'user',
          content: `${DEFAULT_MESSAGE} ${inputText}`
        })
      })
    })
      .then(res => res.json())
      .then(response => {
        setMessages(messages =>
          messages.concat({
            id: String(Date.now()),
            type: 'assistant',
            text: response.choices[0].message.content
          })
        )
      })
      .catch(error => {
        setMessages(messages =>
          messages.concat({
            id: String(Date.now()),
            type: 'assistant',
            text: 'Lo lamento, no puedo responder tu pregunta.'
          })
        )
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
