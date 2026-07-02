import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineRefresh } from 'react-icons/hi'
 
// ─── CONFIGURACIÓN ────────────────────────────────────────────────────────────
const EMAIL = 'tu@email.com' // ← reemplazá con tu email real
const GITHUB = 'https://github.com/tu-usuario' // ← reemplazá con tu GitHub
// ──────────────────────────────────────────────────────────────────────────────
 
const ADVENTURE = {
  start: {
    scene: 'Las llamas del terminal parpadean a lo lejos.',
    text: 'Un programador full-stack emerge de entre las líneas de código y te observa en silencio. ¿Cuál es tu misión?',
    choices: [
      { emoji: '⚔️', label: 'Vengo a ofrecerte oro a cambio de tus servicios', next: 'a_type' },
      { emoji: '💡', label: 'Tengo una idea legendaria pero mis bolsillos están vacíos', next: 'b_path' },
      { emoji: '🗺️', label: 'Solo estoy explorando tu portfolio, forastero', next: 'c_path' },
    ],
  },
 
  // ── RAMA A: tiene presupuesto ───────────────────────────────────────────────
  a_type: {
    scene: 'El programador esboza una sonrisa.',
    text: 'El oro siempre es bienvenido en estas tierras. ¿Qué tipo de misión traes?',
    choices: [
      { emoji: '🏗️', label: 'Necesito una web o app construida desde cero', next: 'a1_form' },
      { emoji: '🔧', label: 'Tengo algo existente que necesita mejoras urgentes', next: 'a2_form' },
      { emoji: '🤝', label: 'Busco un aliado para un proyecto a largo plazo', next: 'a3_form' },
    ],
  },
  a1_form: {
    scene: 'Construir desde cero. El desafío más puro.',
    text: 'El programador desenvaina el teclado y asiente gravemente. Dejá tus datos y el pergamino llegará pronto.',
    type: 'form',
    subject: 'Proyecto nuevo desde cero',
  },
  a2_form: {
    scene: 'Un proyecto herido que necesita ser rescatado.',
    text: 'El programador ya está analizando el campo de batalla. Contame los detalles y lo evaluamos.',
    type: 'form',
    subject: 'Mejoras a proyecto existente',
  },
  a3_form: {
    scene: 'Una alianza. Las mejores historias siempre empiezan así.',
    text: 'El programador extiende la mano. ¿Cómo te llamás, futuro aliado?',
    type: 'form',
    subject: 'Propuesta de colaboración a largo plazo',
  },
 
  // ── RAMA B: idea sin presupuesto ────────────────────────────────────────────
  b_path: {
    scene: '*El programador se recuesta en su silla y cruza los brazos*',
    text: 'Una idea legendaria. Esas son las más interesantes... y las más peligrosas. ¿De qué tipo?',
    choices: [
      { emoji: '🌍', label: 'Es un proyecto open source. La gloria será nuestra recompensa', next: 'b1_end' },
      { emoji: '🚀', label: 'Seré tu socio. Los beneficios vendrán después', next: 'b2_form' },
      { emoji: '😅', label: 'Bueno... en realidad sí tengo algo de oro guardado', next: 'a_type' },
    ],
  },
  b1_end: {
    scene: 'El espíritu del open source. Noble causa.',
    text: 'El programador te señala el camino hacia el repositorio sagrado. Allí encontrarás sus proyectos... y quizás un lugar para colaborar.',
    type: 'end',
    links: [
      { emoji: '🔗', label: 'Ir al repositorio sagrado', href: GITHUB, external: true },
      { emoji: '🔄', label: 'Volver al inicio del reino', restart: true },
    ],
  },
  b2_form: {
    scene: 'Socio, decís. Eso requiere una conversación más profunda.',
    text: 'Mandá tu propuesta y la evaluamos en el consejo.',
    type: 'form',
    subject: 'Propuesta de colaboración / sociedad',
  },
 
  // ── RAMA C: solo explorando ─────────────────────────────────────────────────
  c_path: {
    scene: '*El programador te observa desde la distancia sin decir nada*',
    text: 'Minutos pasan... ¿Qué encontraste en estas tierras, forastero?',
    choices: [
      { emoji: '👀', label: 'Me detuvo tu trabajo. Quiero ver más proyectos', next: 'c1_end' },
      { emoji: '✉️', label: 'Quiero dejar un mensaje antes de partir', next: 'c2_form' },
      { emoji: '🌫️', label: 'Continúo mi camino. Fue un honor, programador', next: 'c3_end' },
    ],
  },
  c1_end: {
    scene: 'Una persona de buen gusto.',
    text: 'El programador sonríe y señala hacia el este, donde el sol de los proyectos brilla con más fuerza.',
    type: 'end',
    links: [
      { emoji: '👉', label: 'Ir a ver los proyectos', to: '/proyectos' },
      { emoji: '🔄', label: 'Volver al inicio del reino', restart: true },
    ],
  },
  c2_form: {
    scene: 'Un mensaje en una botella digital.',
    text: 'El programador siempre los lee. Dejá el tuyo.',
    type: 'form',
    subject: 'Mensaje de un explorador del portfolio',
  },
  c3_end: {
    scene: 'El forastero se pierde en la niebla del servidor.',
    text: 'El programador lo observa partir con respeto. Pero en el fondo... sabe que volverá.',
    type: 'end',
    links: [
      { emoji: '😏', label: 'En realidad... quiero quedarme', restart: true },
    ],
  },
}
 
// ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
const ContactAdventure = () => {
  const [nodeId, setNodeId] = useState('start')
  const [history, setHistory] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [fadeKey, setFadeKey] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
 
  const node = ADVENTURE[nodeId]
 
  const go = (nextId) => {
    setHistory(h => [...h, nodeId])
    setNodeId(nextId)
    setFadeKey(k => k + 1)
  }
 
  const back = () => {
    if (history.length === 0) return
    setNodeId(history[history.length - 1])
    setHistory(h => h.slice(0, -1))
    setFadeKey(k => k + 1)
  }
 
  const restart = () => {
    setHistory([])
    setNodeId('start')
    setSubmitted(false)
    setFadeKey(k => k + 1)
    setForm({ name: '', email: '', message: '' })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    // ── Para conectar con Formspree, reemplazá esto:
    // const res = await fetch('https://formspree.io/f/TU_ID', { method: 'POST', body: JSON.stringify(form) })
    // ── Por ahora usa mailto como fallback:
    const subject = encodeURIComponent(node.subject || 'Contacto desde portfolio')
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }
 
  // ── Pantalla de éxito ────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className='px-6 lg:px-12 py-10 lg:py-14 flex flex-col items-center'>
        <SectionHeader />
        <div className='w-full max-w-2xl bg-[#1E1E1E] border border-[#00ADE6] p-8 lg:p-12 text-center mt-8'>
          <p className='text-[#00ADE6] text-xs uppercase tracking-widest mb-4 italic'>Misión completada</p>
          <h2 className='text-2xl lg:text-3xl font-bold text-[#ECECEC] mb-4'>El pergamino fue enviado.</h2>
          <p className='text-[#878787] mb-8 leading-relaxed'>
            El programador lo recibirá pronto y responderá con la velocidad de un{' '}
            <code className='text-[#00ADE6] bg-[#2a2a2a] px-1.5 py-0.5 rounded text-sm'>git push --force</code>.
          </p>
          <button
            onClick={restart}
            className='flex items-center gap-2 mx-auto bg-[#404040] hover:bg-[#00ADE6] text-[#ECECEC] px-6 py-3 rounded-xl transition-all duration-300 active:scale-95'
          >
            <HiOutlineRefresh size={16} />
            <span>Volver a comenzar la aventura</span>
          </button>
        </div>
      </div>
    )
  }
 
  // ── Aventura principal ───────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @keyframes adventureFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .adventure-fade { animation: adventureFadeIn 0.25s ease-out both; }
      `}</style>
 
      <div className='px-6 lg:px-12 py-10 lg:py-14 flex flex-col items-center'>
        <SectionHeader />
 
        <div
          key={fadeKey}
          className='adventure-fade w-full max-w-2xl bg-[#1E1E1E] border border-[#878787] p-8 lg:p-10 mt-8'
        >
          {/* Botón volver */}
          {history.length > 0 && (
            <button
              onClick={back}
              className='flex items-center gap-2 text-[#878787] hover:text-[#ECECEC] text-xs mb-6 transition-colors duration-200 group'
            >
              <HiOutlineArrowLeft size={14} className='group-hover:-translate-x-0.5 transition-transform' />
              <span>Retroceder</span>
            </button>
          )}
 
          {/* Indicador de progreso */}
          {history.length > 0 && (
            <div className='flex gap-1.5 mb-6'>
              {[...history, nodeId].map((_, i) => (
                <div
                  key={i}
                  className={`h-0.5 rounded-full transition-all duration-300 ${
                    i === history.length
                      ? 'bg-[#00ADE6] w-8'
                      : 'bg-[#404040] w-3'
                  }`}
                />
              ))}
            </div>
          )}
 
          {/* Escena (texto de ambiente) */}
          <p className='text-[#00ADE6] text-sm italic mb-3 opacity-80'>{node.scene}</p>
 
          {/* Texto principal */}
          <p className='text-[#ECECEC] text-lg lg:text-xl leading-relaxed mb-8'>{node.text}</p>
 
          {/* OPCIONES */}
          {!node.type && node.choices && (
            <div className='flex flex-col gap-3'>
              {node.choices.map((choice, i) => (
                <button
                  key={i}
                  onClick={() => go(choice.next)}
                  className='group flex items-center gap-4 border border-[#404040] hover:border-[#00ADE6] bg-transparent text-left p-4 transition-all duration-300 w-full'
                >
                  <span className='text-xl shrink-0'>{choice.emoji}</span>
                  <span className='text-[#ECECEC] text-sm lg:text-base group-hover:text-[#00ADE6] transition-colors duration-300 leading-snug'>
                    {choice.label}
                  </span>
                  <HiOutlineArrowRight
                    size={16}
                    className='ml-auto text-[#404040] group-hover:text-[#00ADE6] group-hover:translate-x-0.5 transition-all duration-300 shrink-0'
                  />
                </button>
              ))}
            </div>
          )}
 
          {/* FORMULARIO */}
          {node.type === 'form' && (
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-2 flex-1'>
                  <label className='text-[#878787] text-xs uppercase tracking-wider'>Tu nombre</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder='Viajero desconocido...'
                    className='bg-[#2a2a2a] border border-[#404040] focus:border-[#00ADE6] text-[#ECECEC] px-4 py-3 outline-none text-sm transition-colors duration-200 placeholder:text-[#555] w-full'
                  />
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label className='text-[#878787] text-xs uppercase tracking-wider'>Tu email</label>
                  <input
                    required
                    type='email'
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder='correo@reino.com'
                    className='bg-[#2a2a2a] border border-[#404040] focus:border-[#00ADE6] text-[#ECECEC] px-4 py-3 outline-none text-sm transition-colors duration-200 placeholder:text-[#555] w-full'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-[#878787] text-xs uppercase tracking-wider'>Tu mensaje</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder='Contá tu historia...'
                  className='bg-[#2a2a2a] border border-[#404040] focus:border-[#00ADE6] text-[#ECECEC] px-4 py-3 outline-none text-sm transition-colors duration-200 resize-none placeholder:text-[#555]'
                />
              </div>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2'>
                <p className='text-[#555] text-xs'>
                  Asunto: <span className='text-[#878787]'>{node.subject}</span>
                </p>
                <button
                  type='submit'
                  className='flex items-center justify-center gap-2 bg-[#404040] hover:bg-[#00ADE6] text-[#ECECEC] px-6 py-3 transition-all duration-300 active:scale-95 text-sm'
                >
                  <span>Enviar pergamino</span>
                  <HiOutlineArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
 
          {/* PANTALLAS FINALES (sin formulario) */}
          {node.type === 'end' && (
            <div className='flex flex-col gap-3'>
              {node.links.map((link, i) => {
                const base =
                  'group flex items-center gap-4 border border-[#404040] hover:border-[#00ADE6] p-4 transition-all duration-300'
                const label = (
                  <>
                    <span className='text-xl shrink-0'>{link.emoji}</span>
                    <span className='text-[#ECECEC] text-sm group-hover:text-[#00ADE6] transition-colors duration-300 leading-snug'>
                      {link.label}
                    </span>
                    <HiOutlineArrowRight
                      size={16}
                      className='ml-auto text-[#404040] group-hover:text-[#00ADE6] group-hover:translate-x-0.5 transition-all duration-300 shrink-0'
                    />
                  </>
                )
 
                if (link.restart) return (
                  <button key={i} onClick={restart} className={`${base} bg-transparent text-left w-full`}>
                    {label}
                  </button>
                )
 
                if (link.to) return (
                  <Link key={i} to={link.to} className={base}>
                    {label}
                  </Link>
                )
 
                if (link.external) return (
                  <a key={i} href={link.href} target='_blank' rel='noreferrer' className={base}>
                    {label}
                  </a>
                )
 
                return null
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
 
// ─── HEADER DE SECCIÓN ─────────────────────────────────────────────────────────
const SectionHeader = () => (
  <div className='w-full max-w-2xl'>
    <div className='flex items-center gap-4 mb-2'>
      <div className='hidden md:block h-0.5 lg:h-1 w-15 rounded-2xl bg-[#1e1e1eb6]' />
      <span className='text-xs md:text-lg'>Elige tu propia aventura</span>
    </div>
    <h1 className='font-bold tracking-tight text-[#00ADE6] text-5xl sm:text-6xl lg:text-7xl'>
      Contacto
    </h1>
  </div>
)
 
export default ContactAdventure