import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Uso',
  description: 'Términos y condiciones de uso del sitio web de Pallach Perez Arquitectes.',
}

const copper = '#9B7B5C'
const stone = '#8C8B7E'
const body = '#5A5A52'
const charcoal = '#1A1A1A'

export default function TerminosPage() {
  return (
    <div style={{ backgroundColor: '#F5F2EC', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <p
          className="text-xs mb-8"
          style={{ fontFamily: 'var(--font-dm-sans)', color: stone }}
        >
          <a href="/" style={{ color: copper }}>Inicio</a>
          <span className="mx-2">·</span>
          Términos de Uso
        </p>

        {/* Title */}
        <h1
          className="text-5xl font-light mb-4"
          style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
        >
          Términos de Uso
        </h1>
        <div className="h-px w-10 mb-4" style={{ backgroundColor: copper }} />
        <p
          className="text-sm mb-16"
          style={{ fontFamily: 'var(--font-dm-sans)', color: stone }}
        >
          Última actualización: mayo de 2025
        </p>

        <div className="space-y-10">

          {/* 1 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              1. Objeto
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Los presentes Términos de Uso tienen por objeto regular el acceso y utilización del sitio web <strong style={{ color: charcoal }}>www.pallachperezarquitectes.com</strong> (en adelante, el &quot;Sitio Web&quot;), titularidad de Pallach Perez Arquitectes S.L., así como las condiciones aplicables a las interacciones que los usuarios puedan establecer con el estudio a través del mismo, incluyendo la solicitud de información, la cumplimentación de formularios de contacto y la solicitud de presupuestos.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              El acceso al Sitio Web implica la aceptación plena, sin reservas, de los presentes Términos de Uso. Si usted no está de acuerdo con alguna de las condiciones aquí establecidas, le rogamos que se abstenga de utilizar el Sitio Web.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              2. Acceso al Sitio Web
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              El acceso al Sitio Web es libre y gratuito para todos los usuarios, sin perjuicio de lo dispuesto en el Aviso Legal respecto a la utilización adecuada de los contenidos. No se requiere registro previo para navegar por el Sitio Web, salvo para la utilización de determinadas funcionalidades o servicios que puedan implementarse en el futuro.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Pallach Perez Arquitectes S.L. se reserva el derecho a restringir, suspender o dar por terminado el acceso al Sitio Web o a determinadas partes del mismo, en cualquier momento y sin necesidad de preaviso, por razones técnicas, de seguridad, de mantenimiento o por causa de fuerza mayor.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              3. Uso del Formulario de Contacto
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              El formulario de contacto disponible en el Sitio Web está destinado exclusivamente a facilitar la comunicación entre los usuarios interesados en los servicios de arquitectura e interiorismo del estudio y el equipo de Pallach Perez Arquitectes S.L. Al cumplimentar y enviar el formulario, el usuario declara:
            </p>
            <ul
              className="mt-4 space-y-2 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              {[
                'Que los datos facilitados son verídicos, completos y actualizados, siendo el propio usuario el responsable de cualquier daño o perjuicio que pudiera derivarse de facilitar datos falsos o de terceros sin su consentimiento.',
                'Que ha leído y acepta la Política de Privacidad del sitio web, y consiente el tratamiento de sus datos personales para la finalidad indicada.',
                'Que no utilizará el formulario con fines ilícitos, publicitarios, spam o contrarios a la buena fe y las normas de convivencia.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span style={{ color: copper, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              El tiempo de respuesta habitual es de 24 a 48 horas laborables. La recepción de una solicitud de contacto no genera ningún tipo de vínculo contractual entre las partes ni compromiso de prestación de servicios.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              4. Solicitudes de Presupuesto
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Las solicitudes de presupuesto o información sobre servicios de arquitectura, reforma, interiorismo o cualquier otro servicio del estudio realizadas a través del Sitio Web tienen carácter meramente informativo y orientativo. En ningún caso la solicitud de un presupuesto o la recepción de un presupuesto estimado por parte del estudio supone la formalización de un contrato de servicios.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              La relación contractual entre el estudio y el cliente únicamente se formalizará mediante la firma del correspondiente contrato de servicios profesionales, que establecerá los honorarios, alcance del servicio, plazos y demás condiciones aplicables. Hasta ese momento, el estudio no asume compromiso alguno de prestación de servicio ni de precio definitivo.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              5. Protección de Datos
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              El tratamiento de los datos personales facilitados por los usuarios a través del Sitio Web se realiza de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD). Para información completa sobre cómo tratamos sus datos, sus derechos y las bases legales del tratamiento, consulte nuestra{' '}
              <a href="/privacidad" style={{ color: copper }}>
                Política de Privacidad
              </a>
              .
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              6. Propiedad Intelectual
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Todos los contenidos del Sitio Web —incluyendo, sin limitación, textos, fotografías, renders, planos, diseños, logotipos y elementos gráficos— son propiedad de Pallach Perez Arquitectes S.L. o de sus legítimos titulares, y están protegidos por la normativa española e internacional sobre propiedad intelectual e industrial. Se prohíbe expresamente cualquier reproducción, distribución, comunicación pública o transformación sin autorización previa y por escrito del titular. Para solicitudes de uso o licencia de contenidos, contacte en{' '}
              <a href="mailto:info@pallachperezarquitectes.com" style={{ color: copper }}>
                info@pallachperezarquitectes.com
              </a>
              .
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              7. Modificaciones
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Pallach Perez Arquitectes S.L. se reserva el derecho de modificar, en cualquier momento y sin previo aviso, la presentación, configuración y contenido del Sitio Web, así como los presentes Términos de Uso. Los cambios entrarán en vigor en el momento de su publicación en el Sitio Web. El uso continuado del Sitio Web tras la publicación de dichas modificaciones implicará la aceptación de las nuevas condiciones. Se recomienda al usuario revisar periódicamente los presentes Términos de Uso.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              8. Legislación Aplicable
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Los presentes Términos de Uso, así como todas las relaciones que surjan entre los usuarios y Pallach Perez Arquitectes S.L. en el ámbito del Sitio Web, se regirán por el derecho español. Para la resolución de cualquier controversia derivada de la interpretación o ejecución de estos Términos de Uso, las partes se someten expresamente a los juzgados y tribunales de Barberà del Vallès o, subsidiariamente, de Barcelona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, salvo disposición legal imperativa en contrario.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Para cualquier consulta sobre los presentes Términos de Uso, puede contactar con nosotros en{' '}
              <a href="mailto:info@pallachperezarquitectes.com" style={{ color: copper }}>
                info@pallachperezarquitectes.com
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
