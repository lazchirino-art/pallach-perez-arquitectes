import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Pallach Perez Arquitectes. Información sobre los tipos de cookies utilizadas y cómo gestionarlas.',
}

const copper = '#9B7B5C'
const stone = '#8C8B7E'
const body = '#5A5A52'
const charcoal = '#1A1A1A'

const COOKIES_TABLE = [
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'Cookie principal de Google Analytics. Permite distinguir usuarios únicos asignando un número generado aleatoriamente como identificador de cliente.',
    duration: '2 años',
    type: 'Analítica / Persistente',
  },
  {
    name: '_ga_*',
    provider: 'Google Analytics',
    purpose: 'Utilizada por Google Analytics 4 para persistir el estado de sesión.',
    duration: '2 años',
    type: 'Analítica / Persistente',
  },
  {
    name: '_gid',
    provider: 'Google Analytics',
    purpose: 'Registra un identificador único que se utiliza para generar datos estadísticos sobre cómo utiliza el visitante el sitio web.',
    duration: '24 horas',
    type: 'Analítica / Sesión',
  },
  {
    name: '_gat',
    provider: 'Google Analytics',
    purpose: 'Limita la tasa de solicitudes al servidor. Si se despliega a través de Google Tag Manager, se denomina _dc_gtm_.',
    duration: '1 minuto',
    type: 'Analítica / Persistente',
  },
  {
    name: 'cookie_consent',
    provider: 'pallachperezarquitectes.com',
    purpose: 'Almacena las preferencias de consentimiento de cookies del usuario para no volver a mostrar el banner en visitas posteriores.',
    duration: '12 meses',
    type: 'Técnica / Persistente',
  },
  {
    name: 'PHPSESSID',
    provider: 'pallachperezarquitectes.com',
    purpose: 'Cookie de sesión de PHP que mantiene el estado de la sesión del usuario durante la navegación.',
    duration: 'Sesión',
    type: 'Técnica / Sesión',
  },
]

export default function CookiesPage() {
  return (
    <div style={{ backgroundColor: '#F5F2EC', minHeight: '100vh' }}>
      {/* Cookie preference notice */}
      <div
        className="px-6 py-4 text-sm font-light text-center"
        style={{
          backgroundColor: '#1A1A1A',
          fontFamily: 'var(--font-dm-sans)',
          color: '#C9A882',
        }}
      >
        Puede actualizar sus preferencias de cookies en cualquier momento. Consulte la sección &quot;Cómo revocar el consentimiento&quot; a continuación.
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <p
          className="text-xs mb-8"
          style={{ fontFamily: 'var(--font-dm-sans)', color: stone }}
        >
          <a href="/" style={{ color: copper }}>Inicio</a>
          <span className="mx-2">·</span>
          Política de Cookies
        </p>

        {/* Title */}
        <h1
          className="text-5xl font-light mb-4"
          style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
        >
          Política de Cookies
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
              1. ¿Qué son las cookies?
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador del usuario cuando este los visita. Se utilizan ampliamente para hacer que los sitios web funcionen correctamente o de manera más eficiente, así como para proporcionar información a los propietarios del sitio. Las cookies pueden ser de sesión (se eliminan al cerrar el navegador) o persistentes (permanecen en el dispositivo durante un período determinado o hasta que el usuario las elimina manualmente).
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              En España, el uso de cookies está regulado por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSICE) y el Reglamento (UE) 2016/679 (RGPD). Conforme a esta normativa, las cookies que no sean estrictamente necesarias para la prestación del servicio requieren el consentimiento previo del usuario.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              2. Tipos de cookies que utilizamos
            </h2>
            <p
              className="text-sm font-light leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              En este sitio web utilizamos los siguientes tipos de cookies, clasificadas según su titularidad, duración y finalidad:
            </p>
            <ul
              className="space-y-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              <li className="flex gap-3">
                <span style={{ color: copper, flexShrink: 0 }}>—</span>
                <span>
                  <span style={{ color: charcoal }}>Cookies propias:</span> Son las establecidas por el propio sitio web que el usuario visita. Se utilizan para garantizar el funcionamiento correcto del sitio y recordar las preferencias del usuario.
                </span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: copper, flexShrink: 0 }}>—</span>
                <span>
                  <span style={{ color: charcoal }}>Cookies de terceros:</span> Son establecidas por dominios distintos al sitio que el usuario visita, como Google Analytics. Estos terceros tienen sus propias políticas de privacidad.
                </span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: copper, flexShrink: 0 }}>—</span>
                <span>
                  <span style={{ color: charcoal }}>Cookies técnicas o estrictamente necesarias:</span> Imprescindibles para el funcionamiento del sitio web. No requieren consentimiento del usuario.
                </span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: copper, flexShrink: 0 }}>—</span>
                <span>
                  <span style={{ color: charcoal }}>Cookies analíticas:</span> Permiten analizar el comportamiento de los usuarios con el fin de mejorar el funcionamiento del sitio web. Requieren el consentimiento del usuario.
                </span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: copper, flexShrink: 0 }}>—</span>
                <span>
                  <span style={{ color: charcoal }}>Cookies de sesión:</span> Se eliminan automáticamente al cerrar el navegador.
                </span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: copper, flexShrink: 0 }}>—</span>
                <span>
                  <span style={{ color: charcoal }}>Cookies persistentes:</span> Permanecen en el dispositivo del usuario durante un período definido una vez finalizada la sesión de navegación.
                </span>
              </li>
            </ul>
          </section>

          {/* 3 — Table */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              3. Tabla de cookies utilizadas
            </h2>
            <div className="overflow-x-auto">
              <table
                className="w-full text-xs font-light"
                style={{ fontFamily: 'var(--font-dm-sans)', borderCollapse: 'collapse' }}
              >
                <thead>
                  <tr style={{ borderBottom: '2px solid #9B7B5C' }}>
                    {['Nombre', 'Proveedor', 'Finalidad', 'Duración', 'Tipo'].map(h => (
                      <th
                        key={h}
                        className="text-left py-3 pr-4 font-medium uppercase tracking-wider"
                        style={{ color: charcoal }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COOKIES_TABLE.map((row, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: '1px solid #E8E4DC' }}
                    >
                      <td className="py-3 pr-4 font-medium" style={{ color: charcoal, whiteSpace: 'nowrap' }}>{row.name}</td>
                      <td className="py-3 pr-4" style={{ color: body }}>{row.provider}</td>
                      <td className="py-3 pr-4 leading-relaxed" style={{ color: body }}>{row.purpose}</td>
                      <td className="py-3 pr-4" style={{ color: body, whiteSpace: 'nowrap' }}>{row.duration}</td>
                      <td className="py-3" style={{ color: body }}>{row.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              4. Cookies de Google Analytics
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Este sitio web utiliza Google Analytics, un servicio de análisis web prestado por Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, EE.UU.). Google Analytics utiliza cookies para analizar cómo los usuarios interactúan con el sitio web. La información generada por la cookie sobre el uso del sitio web es transmitida y almacenada por Google en servidores de los Estados Unidos.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Hemos activado la anonimización de IP en Google Analytics (función <em>anonymizeIp</em>), de manera que la dirección IP del usuario se recorta antes de ser enviada a los servidores de Google, lo que impide la identificación directa del usuario. Asimismo, hemos configurado la retención de datos en Google Analytics a 14 meses.
            </p>
            <p
              className="mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Puede conocer más sobre la política de privacidad de Google en{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: copper }}
              >
                policies.google.com/privacy
              </a>
              . Puede impedir el registro de los datos generados por la cookie relativa a su uso del sitio web (incluida su dirección IP) por parte de Google, y el tratamiento de tales datos, descargando e instalando el complemento de inhabilitación de Google Analytics disponible en{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: copper }}
              >
                tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              5. Cómo gestionar las cookies desde el navegador
            </h2>
            <p
              className="text-sm font-light leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Puede configurar su navegador para aceptar o rechazar cookies, así como para eliminar las ya almacenadas. Tenga en cuenta que deshabilitar determinadas cookies puede afectar al correcto funcionamiento del sitio web. A continuación, le indicamos cómo gestionar las cookies en los principales navegadores:
            </p>
            <ul
              className="space-y-2 text-sm font-light"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              {[
                { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web' },
                { name: 'Safari (macOS)', url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
                { name: 'Safari (iOS)', url: 'https://support.apple.com/es-es/HT201265' },
                { name: 'Microsoft Edge', url: 'https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d' },
              ].map(b => (
                <li key={b.name} className="flex gap-3">
                  <span style={{ color: copper, flexShrink: 0 }}>—</span>
                  <a href={b.url} target="_blank" rel="noopener noreferrer" style={{ color: copper }}>
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              6. Cómo revocar el consentimiento
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Puede revocar su consentimiento al uso de cookies en cualquier momento eliminando las cookies almacenadas en su navegador siguiendo las instrucciones del apartado anterior, o contactando con nosotros a través del correo{' '}
              <a href="mailto:privacidad@pallachperezarquitectes.com" style={{ color: copper }}>
                privacidad@pallachperezarquitectes.com
              </a>
              {' '}para que podamos asistirle. La revocación del consentimiento no afecta a la licitud del tratamiento previo.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: charcoal }}
            >
              7. Contacto
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)', color: body }}
            >
              Si tiene cualquier pregunta sobre el uso de cookies en este sitio web, puede ponerse en contacto con nosotros en{' '}
              <a href="mailto:privacidad@pallachperezarquitectes.com" style={{ color: copper }}>
                privacidad@pallachperezarquitectes.com
              </a>{' '}
              o consultar nuestra{' '}
              <a href="/privacidad" style={{ color: copper }}>
                Política de Privacidad
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
