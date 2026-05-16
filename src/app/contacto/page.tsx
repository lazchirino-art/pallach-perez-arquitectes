'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const SERVICES = [
  'Arquitectura residencial de nueva planta',
  'Reforma integral',
  'Interiorismo y diseño de interiores',
  'Dirección de obra',
  'Arquitectura comercial y de oficinas',
  'Rehabilitación y restauración',
  'Consultoría técnica y licencias urbanísticas',
  'Eficiencia energética y certificación',
]

const FAQS = [
  {
    q: '¿Cuánto cuesta una primera consulta?',
    a: 'La primera consulta es completamente gratuita y sin compromiso. En ella analizamos tu proyecto, resolvemos tus dudas y te orientamos sobre viabilidad, plazos y presupuesto aproximado.',
  },
  {
    q: '¿En qué zonas trabajáis?',
    a: 'Tenemos nuestro estudio en Barberà del Vallès y trabajamos principalmente en toda el área metropolitana de Barcelona, el Vallès Occidental y Vallès Oriental. Para proyectos singulares también trabajamos en otras provincias de Cataluña.',
  },
  {
    q: '¿Cuánto dura un proyecto de reforma integral?',
    a: 'Los plazos varían en función de la envergadura del proyecto. Una reforma integral de vivienda de tamaño medio (80–120 m²) suele incluir entre 4 y 8 semanas de proyecto y entre 3 y 6 meses de obra. Os facilitamos siempre una planificación detallada antes de comenzar.',
  },
]

type FormState = 'idle' | 'pending' | 'success' | 'error'

export default function ContactoPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('pending')
    await new Promise(r => setTimeout(r, 1200))
    setFormState('success')
  }

  return (
    <div style={{ backgroundColor: '#F5F2EC', minHeight: '100vh' }}>
      {/* Page Header */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ borderBottom: '1px solid #E8E4DC' }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase tracking-widest text-xs mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', color: '#9B7B5C' }}
          >
            Pallach Perez Arquitectes — Contacto
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-light italic leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
          >
            Hablemos de
            <br />
            tu proyecto
          </h1>
          <p
            className="mt-4 text-base font-light"
            style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
          >
            Primera consulta sin compromiso. Cuéntanos tu proyecto.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Form */}
          <div>
            <h2
              className="text-2xl font-light mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
            >
              Formulario de contacto
            </h2>

            {formState === 'success' ? (
              <div
                className="py-12 px-8 text-center"
                style={{ border: '1px solid #9B7B5C', backgroundColor: 'rgba(155,123,92,0.06)' }}
              >
                <div
                  className="text-4xl font-light italic mb-4"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#9B7B5C' }}
                >
                  Mensaje recibido
                </div>
                <p
                  className="text-sm font-light"
                  style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                >
                  Gracias por ponerte en contacto con nosotros. Te responderemos en un plazo máximo de 24–48 horas laborables.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-transparent pb-2 text-sm outline-none transition-colors"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      color: '#1A1A1A',
                      borderBottom: '1px solid #8C8B7E',
                    }}
                    onFocus={e => (e.target.style.borderBottomColor = '#9B7B5C')}
                    onBlur={e => (e.target.style.borderBottomColor = '#8C8B7E')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
                  >
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-transparent pb-2 text-sm outline-none transition-colors"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      color: '#1A1A1A',
                      borderBottom: '1px solid #8C8B7E',
                    }}
                    onFocus={e => (e.target.style.borderBottomColor = '#9B7B5C')}
                    onBlur={e => (e.target.style.borderBottomColor = '#8C8B7E')}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full bg-transparent pb-2 text-sm outline-none transition-colors"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      color: '#1A1A1A',
                      borderBottom: '1px solid #8C8B7E',
                    }}
                    onFocus={e => (e.target.style.borderBottomColor = '#9B7B5C')}
                    onBlur={e => (e.target.style.borderBottomColor = '#8C8B7E')}
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
                  >
                    Servicio de interés *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full bg-transparent pb-2 text-sm outline-none appearance-none cursor-pointer transition-colors"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      color: '#1A1A1A',
                      borderBottom: '1px solid #8C8B7E',
                      backgroundColor: '#F5F2EC',
                    }}
                    onFocus={e => (e.target.style.borderBottomColor = '#9B7B5C')}
                    onBlur={e => (e.target.style.borderBottomColor = '#8C8B7E')}
                  >
                    <option value="">Selecciona un servicio...</option>
                    {SERVICES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
                  >
                    Cuéntanos tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-transparent pt-2 text-sm outline-none resize-none transition-colors"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      color: '#1A1A1A',
                      borderBottom: '1px solid #8C8B7E',
                    }}
                    onFocus={e => (e.target.style.borderBottomColor = '#9B7B5C')}
                    onBlur={e => (e.target.style.borderBottomColor = '#8C8B7E')}
                  />
                </div>

                {/* GDPR */}
                <div className="flex items-start gap-3">
                  <input
                    id="gdpr"
                    type="checkbox"
                    required
                    className="mt-0.5 flex-shrink-0 cursor-pointer"
                    style={{ accentColor: '#9B7B5C' }}
                  />
                  <label
                    htmlFor="gdpr"
                    className="text-xs font-light leading-relaxed cursor-pointer"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                  >
                    He leído y acepto la{' '}
                    <a
                      href="/privacidad"
                      className="underline hover:no-underline transition-all"
                      style={{ color: '#9B7B5C' }}
                    >
                      Política de Privacidad
                    </a>
                    . Consiento el tratamiento de mis datos personales para atender mi solicitud.
                  </label>
                </div>

                {formState === 'error' && (
                  <p
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#c0392b' }}
                  >
                    Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente por teléfono.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'pending'}
                  className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-medium transition-opacity"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    backgroundColor: formState === 'pending' ? '#C9A882' : '#9B7B5C',
                    color: '#fff',
                    opacity: formState === 'pending' ? 0.7 : 1,
                    cursor: formState === 'pending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {formState === 'pending' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>

          {/* Right — Contact Info */}
          <div className="space-y-10">
            {/* Studio Info */}
            <div>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
              >
                Estudio
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#9B7B5C' }}
                  />
                  <div>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                    >
                      Av. de la Verge de Montserrat, 80
                      <br />
                      08210 Barberà del Vallès, Barcelona
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone
                    size={16}
                    className="flex-shrink-0"
                    style={{ color: '#9B7B5C' }}
                  />
                  <a
                    href="tel:+34937192001"
                    className="text-sm font-light transition-colors hover:opacity-70"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                  >
                    +34 937 19 20 01
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail
                    size={16}
                    className="flex-shrink-0"
                    style={{ color: '#9B7B5C' }}
                  />
                  <a
                    href="mailto:info@pallachperezarquitectes.com"
                    className="text-sm font-light transition-colors hover:opacity-70 break-all"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                  >
                    info@pallachperezarquitectes.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2
                className="text-2xl font-light mb-4"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
              >
                Horario
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #E8E4DC' }}>
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                  >
                    Lunes – Viernes
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#1A1A1A' }}
                  >
                    9:00 – 18:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #E8E4DC' }}>
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                  >
                    Sábados
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#1A1A1A' }}
                  >
                    Previa cita
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                  >
                    Domingos y festivos
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
                  >
                    Cerrado
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div>
              <a
                href="https://wa.me/34937192001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 text-sm font-medium tracking-wide transition-opacity hover:opacity-90"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  backgroundColor: '#25D366',
                  color: '#fff',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chatear por WhatsApp
              </a>
            </div>

            {/* Social */}
            <div>
              <h2
                className="text-2xl font-light mb-4"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
              >
                Redes sociales
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/pallachperezarquitectes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B7B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  @pallachperezarquitectes
                </a>
                <a
                  href="https://www.linkedin.com/company/pallachperezarquitectes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#9B7B5C"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  Pallach Perez Arquitectes
                </a>
                <a
                  href="https://www.pinterest.com/pallachperezarquitectes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="#9B7B5C"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                  pallachperezarquitectes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div style={{ backgroundColor: '#1A1A1A', padding: '2rem' }}>
            <h2
              className="text-2xl font-light mb-6"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#F5F2EC' }}
            >
              Cómo llegar
            </h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.1!2d2.1292!3d41.5184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMxJzA2LjIiTiAywrAwNyc0NS4xIkU!5e0!3m2!1ses!2ses!4v1000000000000!5m2!1ses!2ses"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                allowFullScreen
                loading="lazy"
                title="Ubicación Pallach Perez Arquitectes"
              />
            </div>
            <p
              className="mt-4 text-xs font-light"
              style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
            >
              Av. de la Verge de Montserrat, 80 · 08210 Barberà del Vallès, Barcelona
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 pb-32" style={{ borderTop: '1px solid #E8E4DC' }}>
        <div className="max-w-3xl mx-auto pt-20">
          <h2
            className="text-3xl font-light italic mb-2"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
          >
            Preguntas frecuentes
          </h2>
          <div className="w-10 h-px mb-10" style={{ backgroundColor: '#9B7B5C' }} />

          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E8E4DC' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left py-5 flex justify-between items-center gap-4"
                >
                  <span
                    className="text-base font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#1A1A1A' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 text-lg transition-transform duration-300"
                    style={{
                      color: '#9B7B5C',
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p
                    className="pb-5 text-sm font-light leading-relaxed"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#5A5A52' }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
