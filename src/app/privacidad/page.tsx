import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Pallach Perez Arquitectes conforme al RGPD.',
}

const copper = '#9B7B5C'
const stone = '#8C8B7E'
const body = '#5A5A52'
const charcoal = '#1A1A1A'

export default function PrivacidadPage() {
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
          Política de Privacidad
        </p>

        {/* Title */}
        <h1
          className="text-5xl font-light mb-4"
          style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
        >
          Política de Privacidad
        </h1>
        <div className="h-px w-10 mb-4" style={{ backgroundColor: copper }} />
        <p
          className="text-sm mb-16"
          style={{ fontFamily: 'var(--font-dm-sans)', color: stone }}
        >
          Última actualización: mayo de 2025
        </p>

        {/* Content */}
        <div className="space-y-10">

          {/* 1 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              1. Responsable del Tratamiento
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que el responsable del tratamiento de sus datos personales es:
            </p>
            <ul
              className="mt-4 space-y-1 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              <li><span style={{ color: charcoal }}>Razón social:</span> Pallach Perez Arquitectes S.L.</li>
              <li><span style={{ color: charcoal }}>CIF:</span> B-12345678</li>
              <li><span style={{ color: charcoal }}>Domicilio:</span> Av. de la Verge de Montserrat, 80, 08210 Barberà del Vallès, Barcelona</li>
              <li><span style={{ color: charcoal }}>Teléfono:</span> +34 937 19 20 01</li>
              <li>
                <span style={{ color: charcoal }}>Email de contacto para privacidad:</span>{' '}
                <a href="mailto:privacidad@pallachperezarquitectes.com" style={{ color: copper }}>
                  privacidad@pallachperezarquitectes.com
                </a>
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              2. Finalidad del Tratamiento
            </h2>
            <p
              className="text-sm font-light leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Tratamos sus datos personales para las siguientes finalidades:
            </p>
            <ul
              className="space-y-3 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              {[
                'Gestión y atención de las solicitudes de contacto, información y presupuestos realizadas a través del formulario de contacto o por cualquier otro medio de comunicación.',
                'Gestión de la relación contractual cuando se formaliza un encargo de servicios de arquitectura, interiorismo o dirección de obra.',
                'Envío de comunicaciones comerciales sobre nuestros servicios y proyectos, previa obtención del consentimiento expreso del interesado (newsletter, novedades del estudio).',
                'Cumplimiento de las obligaciones legales y fiscales derivadas de la prestación de servicios profesionales.',
                'Gestión administrativa interna: facturación, contabilidad y archivo documental de proyectos.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span style={{ color: copper, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              3. Base Legal del Tratamiento
            </h2>
            <p
              className="text-sm font-light leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              La legitimación para el tratamiento de sus datos personales se basa en:
            </p>
            <ul
              className="space-y-3 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              {[
                'El consentimiento expreso del interesado, otorgado mediante la aceptación de la presente política de privacidad al cumplimentar los formularios de contacto o al suscribirse a comunicaciones comerciales (art. 6.1.a RGPD).',
                'La ejecución del contrato de prestación de servicios de arquitectura y actividades relacionadas (art. 6.1.b RGPD).',
                'El interés legítimo del responsable para la gestión interna del negocio y el mantenimiento de relaciones con clientes y potenciales clientes (art. 6.1.f RGPD).',
                'El cumplimiento de obligaciones legales aplicables al responsable, entre ellas las fiscales y contables (art. 6.1.c RGPD).',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span style={{ color: copper, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              4. Destinatarios de los Datos
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Con carácter general, Pallach Perez Arquitectes S.L. no cederá sus datos personales a terceros, salvo obligación legal o autorización expresa del interesado. Excepcionalmente, podrán acceder a sus datos los proveedores de servicios tecnológicos que actúan como encargados del tratamiento (hosting, plataforma de correo electrónico, herramientas de gestión de proyectos), con quienes se han formalizado los correspondientes acuerdos de encargo del tratamiento conforme al art. 28 RGPD, garantizando en todo momento niveles de protección equivalentes a los exigidos por la normativa europea.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              No se realizan transferencias internacionales de datos a países fuera del Espacio Económico Europeo, excepto cuando ello sea necesario para la prestación de servicios tecnológicos y siempre bajo las garantías adecuadas establecidas en el RGPD.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              5. Derechos del Interesado
            </h2>
            <p
              className="text-sm font-light leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              En virtud del RGPD y la LOPDGDD, usted tiene derecho a:
            </p>
            <ul
              className="space-y-3 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              {[
                'Acceso: obtener confirmación sobre si estamos tratando sus datos personales y, en su caso, acceder a los mismos.',
                'Rectificación: solicitar la corrección de datos inexactos o incompletos.',
                'Supresión: solicitar la eliminación de sus datos cuando, entre otros supuestos, ya no sean necesarios para los fines para los que fueron recogidos.',
                'Limitación del tratamiento: solicitar la restricción del tratamiento de sus datos en determinadas circunstancias.',
                'Portabilidad: recibir los datos que nos haya facilitado en un formato estructurado y de uso común.',
                'Oposición: oponerse al tratamiento de sus datos en cualquier momento, en particular cuando el tratamiento se base en el interés legítimo o en la necesidad de ejecutar una misión de interés público.',
                'Retirada del consentimiento: retirar el consentimiento prestado en cualquier momento, sin que ello afecte a la licitud del tratamiento previo a dicha retirada.',
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
              Para ejercer cualquiera de estos derechos, puede dirigirse a nosotros mediante escrito a la dirección postal indicada o por correo electrónico a{' '}
              <a href="mailto:privacidad@pallachperezarquitectes.com" style={{ color: copper }}>
                privacidad@pallachperezarquitectes.com
              </a>
              , acompañando copia de su documento de identidad. Le responderemos en el plazo máximo de un mes desde la recepción de su solicitud, prorrogable en caso de complejidad o número de solicitudes.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              6. Conservación de los Datos
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Los datos personales serán conservados durante el tiempo necesario para atender su solicitud o mantener la relación contractual, y posteriormente durante los plazos de prescripción legal aplicables. En concreto:
            </p>
            <ul
              className="mt-4 space-y-3 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              {[
                'Datos derivados de relaciones contractuales: mínimo 6 años conforme al Código de Comercio.',
                'Datos fiscales y de facturación: 4 años conforme a la normativa tributaria.',
                'Datos de solicitudes de información sin relación contractual posterior: hasta 2 años desde el último contacto.',
                'Datos de suscripción a comunicaciones comerciales: hasta que el interesado retire su consentimiento.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span style={{ color: copper, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              7. Autoridad de Control
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Si considera que el tratamiento de sus datos personales vulnera la normativa vigente, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), autoridad de control competente en España:{' '}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: copper }}
              >
                www.aepd.es
              </a>
              {'. '}
              No obstante, antes de acudir a la AEPD, le invitamos a contactar con nosotros para intentar resolver cualquier incidencia relativa a la protección de sus datos.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              8. Cookies
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Nuestro sitio web utiliza cookies propias y de terceros. Para más información sobre los tipos de cookies que utilizamos, su finalidad y cómo puede gestionarlas o revocar su consentimiento, consulte nuestra{' '}
              <a href="/cookies" style={{ color: copper }}>
                Política de Cookies
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
