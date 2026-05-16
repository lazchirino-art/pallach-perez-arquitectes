import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Pallach Perez Arquitectes S.L. conforme a la Ley 34/2002 de servicios de la sociedad de la información (LSSICE).',
}

const copper = '#9B7B5C'
const stone = '#8C8B7E'
const body = '#5A5A52'
const charcoal = '#1A1A1A'

export default function AvisoLegalPage() {
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
          Aviso Legal
        </p>

        {/* Title */}
        <h1
          className="text-5xl font-light mb-4"
          style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
        >
          Aviso Legal
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
              1. Datos Identificativos
            </h2>
            <p
              className="text-sm font-light leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se ponen a disposición de los usuarios los siguientes datos identificativos del titular de este sitio web:
            </p>
            <ul
              className="space-y-2 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              <li><span style={{ color: charcoal }}>Denominación social:</span> Pallach Perez Arquitectes S.L.</li>
              <li><span style={{ color: charcoal }}>CIF:</span> B-12345678</li>
              <li><span style={{ color: charcoal }}>Domicilio social:</span> Av. de la Verge de Montserrat, 80, 08210 Barberà del Vallès, Barcelona</li>
              <li><span style={{ color: charcoal }}>Teléfono:</span> +34 937 19 20 01</li>
              <li>
                <span style={{ color: charcoal }}>Email:</span>{' '}
                <a href="mailto:info@pallachperezarquitectes.com" style={{ color: copper }}>
                  info@pallachperezarquitectes.com
                </a>
              </li>
              <li><span style={{ color: charcoal }}>Colegio profesional:</span> Colegio Oficial de Arquitectos de Catalunya (COAC)</li>
              <li><span style={{ color: charcoal }}>Número de colegiado:</span> 12345</li>
              <li><span style={{ color: charcoal }}>Inscripción Registro Mercantil:</span> Registro Mercantil de Barcelona, Tomo XXXXX, Folio XX, Hoja B-XXXXXX</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              2. Objeto y Condiciones de Uso
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              El presente aviso legal regula el acceso y uso del sitio web <strong style={{ color: charcoal }}>www.pallachperezarquitectes.com</strong> (en adelante, el &quot;Sitio Web&quot;), cuya titularidad corresponde a Pallach Perez Arquitectes S.L. El acceso y uso del Sitio Web atribuye al usuario la condición de usuario (en adelante, el &quot;Usuario&quot;) e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este aviso legal, así como en la Política de Privacidad y la Política de Cookies, que podrán ser modificadas sin notificación previa. En consecuencia, el Usuario debe leer atentamente el presente aviso legal en cada ocasión que acceda al Sitio Web, ya que puede haber sufrido modificaciones.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              El acceso al Sitio Web es gratuito. No obstante, la prestación de determinados servicios puede estar condicionada a la previa cumplimentación del correspondiente formulario. El Usuario se compromete a hacer un uso adecuado y lícito del Sitio Web, de conformidad con la legislación aplicable, la buena fe, el orden público, los usos del tráfico y el presente aviso legal. El Usuario se abstendrá de:
            </p>
            <ul
              className="mt-4 space-y-2 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              {[
                'Hacer un uso no autorizado o fraudulento del Sitio Web.',
                'Acceder o intentar acceder a recursos o áreas restringidas del Sitio Web sin cumplir las condiciones de acceso.',
                'Provocar daños en los sistemas físicos e informáticos de Pallach Perez Arquitectes S.L. o de terceros.',
                'Introducir o difundir virus informáticos o cualquier otro sistema físico o lógico que sea susceptible de provocar daños.',
                'Intentar acceder, utilizar y/o manipular los datos de Pallach Perez Arquitectes S.L., otros usuarios y terceros.',
                'Reproducir o copiar, distribuir, permitir el acceso del público o cualquier otra forma de comunicación pública, transformar o modificar los contenidos sin contar con la autorización expresa del titular.',
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
              3. Propiedad Intelectual e Industrial
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Todos los contenidos del Sitio Web, entendiendo por estos, a título enunciativo pero no limitativo, los textos, fotografías, imágenes, diseños gráficos, logotipos, iconos, software, los nombres comerciales, las marcas o los signos distintivos, y en general cualquier otra creación protegida por la legislación nacional o comunitaria sobre propiedad intelectual e industrial, son titularidad exclusiva de Pallach Perez Arquitectes S.L. o de terceros que han autorizado su uso.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Queda expresamente prohibida la reproducción total o parcial de los contenidos del Sitio Web, así como su distribución, cesión o comunicación pública, sin contar con la autorización expresa y por escrito de Pallach Perez Arquitectes S.L. Cualquier vulneración de los derechos de propiedad intelectual o industrial dará lugar al ejercicio de las acciones legales oportunas. Las imágenes de proyectos arquitectónicos son propiedad del estudio y de los fotógrafos colaboradores. Ninguna fotografía podrá ser utilizada sin autorización previa y expresa.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              4. Exclusión de Garantías y Responsabilidad
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Pallach Perez Arquitectes S.L. no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web ni de los servicios habilitados en el mismo. Asimismo, no se garantiza la ausencia de errores en el acceso al Sitio Web ni en sus contenidos. Pallach Perez Arquitectes S.L. excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de cualquier naturaleza derivados de:
            </p>
            <ul
              className="mt-4 space-y-2 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              {[
                'La falta de disponibilidad o accesibilidad al Sitio Web, interrupciones en el funcionamiento o la presentación del Sitio Web causadas por fallos del sistema, del servidor, de la red de telecomunicaciones u otros.',
                'La presencia de virus o de otros elementos que puedan causar daños en los sistemas informáticos.',
                'El uso ilícito, negligente, fraudulento o contrario al presente aviso legal y condiciones de uso del Sitio Web.',
                'Los contenidos de sitios web a los que el Sitio Web enlace, sin que Pallach Perez Arquitectes S.L. sea responsable de los mismos.',
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
              La información contenida en el Sitio Web tiene carácter meramente informativo y orientativo, y no constituye en ningún caso asesoramiento profesional. Para obtener asesoramiento específico sobre proyectos arquitectónicos o urbanísticos, es necesario contactar directamente con el estudio.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              5. Política de Enlaces
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              El Sitio Web puede contener enlaces a sitios web de terceros. Pallach Perez Arquitectes S.L. no asume ninguna responsabilidad respecto al contenido, veracidad o actualidad de los sitios web de terceros. La existencia de un enlace desde el Sitio Web hacia un sitio web externo no implica ningún tipo de relación, colaboración ni dependencia entre Pallach Perez Arquitectes S.L. y el tercero propietario de dicho sitio.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Si desea establecer un enlace desde un sitio web externo hacia el Sitio Web, deberá contar con la autorización previa y expresa de Pallach Perez Arquitectes S.L. En ningún caso se permitirán enlaces desde sitios web que contengan contenidos ilícitos, contrarios a la moral o al orden público, o que puedan resultar lesivos para los intereses del estudio o de terceros.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              6. Legislación Aplicable y Jurisdicción
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Las presentes condiciones de uso del Sitio Web se rigen íntegramente por el derecho español. Para la resolución de cualquier controversia o conflicto derivado del acceso o uso del Sitio Web, las partes se someten con renuncia expresa a cualquier otro fuero que pudiera corresponderles a la jurisdicción y competencia de los juzgados y tribunales de Barberà del Vallès o, en su defecto, de Barcelona, excepto en los casos en los que la normativa aplicable establezca otro fuero obligatorio.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
