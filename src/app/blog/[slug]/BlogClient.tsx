'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Share2, Link2 } from 'lucide-react'

const posts = [
  { slug: 'tendencias-arquitectura-2024', title: 'Tendencias de Arquitectura para 2024', category: 'Tendencias', date: '15 Enero 2024', readTime: '5 min', excerpt: 'Exploramos las corrientes que están definiendo el diseño arquitectónico contemporáneo y cómo estas influyen en la manera en que concebimos y habitamos los espacios.', image: 'https://images.unsplash.com/photo-1486325212351-d6c8f60a7e7b?w=1200&q=85&auto=format&fit=crop' },
  { slug: 'como-planificar-reforma', title: 'Cómo Planificar una Reforma Integral', category: 'Reformas', date: '3 Enero 2024', readTime: '8 min', excerpt: 'Guía completa para afrontar una reforma integral con éxito, sin sorpresas ni imprevistos. Desde la definición del presupuesto hasta la elección del equipo técnico adecuado.', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85&auto=format&fit=crop' },
  { slug: 'arquitectura-sostenible', title: 'Arquitectura Sostenible: El Futuro es Hoy', category: 'Sostenibilidad', date: '20 Diciembre 2023', readTime: '6 min', excerpt: 'La sostenibilidad ya no es opcional. Descubre cómo integramos criterios ecológicos en cada proyecto y qué tecnologías están transformando la construcción contemporánea.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop' },
  { slug: 'interiorismo-minimalista', title: 'Interiorismo Minimalista: Menos es Más', category: 'Interiorismo', date: '5 Diciembre 2023', readTime: '4 min', excerpt: 'El minimalismo no es solo una tendencia estética, es una filosofía de vida que transforma espacios y libera la mente. Claves para aplicarlo con criterio en tu hogar.', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85&auto=format&fit=crop' },
  { slug: 'licencias-urbanisticas', title: 'Guía de Licencias Urbanísticas en Barcelona', category: 'Legal', date: '18 Noviembre 2023', readTime: '10 min', excerpt: 'Todo lo que necesitas saber sobre licencias urbanísticas en Barcelona y el área metropolitana: tipos, plazos, documentación y cómo evitar los errores más comunes.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&auto=format&fit=crop' },
  { slug: 'eficiencia-energetica', title: 'Eficiencia Energética en el Hogar', category: 'Sostenibilidad', date: '1 Noviembre 2023', readTime: '7 min', excerpt: 'Cómo diseñar y reformar para reducir el consumo energético y mejorar el confort. Materiales, sistemas y estrategias que marcan la diferencia en la factura y el bienestar.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85&auto=format&fit=crop' },
]

const articleContent: Record<string, string[]> = {
  'tendencias-arquitectura-2024': [
    'La arquitectura contemporánea atraviesa un momento de transformación profunda. Las tendencias que emergen para 2024 no son modas pasajeras sino respuestas culturales y técnicas a los desafíos que plantea habitar el planeta con responsabilidad. La integración de criterios bioclimáticos en la fase de diseño, la recuperación de técnicas constructivas vernáculas adaptadas a los materiales del presente y la disolución de los límites entre interior y exterior definen el horizonte de los próximos años.',
    'El regreso a lo táctil y a lo artesanal marca una reacción frente a la frialdad de décadas de predominio digital en la imagen arquitectónica. Los acabados rugosos, las superficies que muestran su proceso de fabricación y los materiales que envejece con gracia ganan terreno frente a la perfección inmaculada que dominó la estética de los años 2000 y 2010. Esta tendencia conecta con una búsqueda de autenticidad que impregna también otras disciplinas del diseño.',
    'La vivienda flexible emerge como una necesidad real después de los cambios en los patrones de uso doméstico. Los espacios que pueden transformarse según el momento del día o la etapa de la vida de sus habitantes requieren un nuevo enfoque en la distribución, la carpintería y la relación entre las distintas estancias. Los tabiques correderos, las zonas de trabajo integradas en el salón y las terrazas concebidas como habitaciones al aire libre son algunos de los elementos que articulan esta flexibilidad.',
    'La paleta cromática de 2024 se orienta hacia los tonos terrosos, los ocres y los verdes apagados que dialogan con el entorno natural y crean ambientes más cálidos y acogedores que el blanco total que dominó la estética minimalista de las décadas anteriores. Esta tendencia se combina con una mayor presencia de madera natural, piedra local y cerámica artesanal como materiales protagonistas.',
    'La tecnología, lejos de desaparecer, se integra de forma más invisible y eficiente. Los sistemas de domótica se vuelven más intuitivos y menos ostentosos, la iluminación adaptable permite transformar la atmósfera de un espacio con precisión quirúrgica y las instalaciones de gestión energética se diseñan para ser tan discretas como eficaces. La tecnología al servicio de la vida, no como protagonista sino como infraestructura invisible.',
    'En definitiva, la arquitectura de 2024 apunta hacia una síntesis entre la excelencia técnica y la calidez humana, entre la sostenibilidad y el confort, entre la contemporaneidad y el arraigo. Un equilibrio que siempre ha sido la aspiración más difícil y la más necesaria de este oficio.',
  ],
  'como-planificar-reforma': [
    'Afrontar una reforma integral es una de las decisiones más importantes que puede tomar el propietario de una vivienda. No solo por la inversión económica que supone, sino por el impacto que tendrá en la calidad de vida durante años. Una planificación rigurosa desde el inicio marca la diferencia entre un proceso ordenado con un resultado satisfactorio y una experiencia traumática llena de imprevistos.',
    'El primer paso, antes de contactar con ningún profesional, es definir con claridad qué se quiere conseguir. No basta con decir "quiero reformar la cocina". Hay que responderse preguntas concretas: ¿cuánto tiempo llevo en esta vivienda y cuánto tiempo planeo quedarme? ¿Tengo hijos o planeo tenerlos? ¿Trabajo desde casa? ¿Hay algún problema técnico que resolver —humedades, instalaciones obsoletas, pérdidas de calor— o es puramente una reforma estética? Las respuestas a estas preguntas definen el alcance real del proyecto.',
    'El presupuesto debe establecerse antes de la reunión con el arquitecto, no después. Es el parámetro que condiciona todas las decisiones posteriores. Un error frecuente es subestimar los imprevistos: en reformas de viviendas existentes, especialmente en edificios con cierta antigüedad, siempre aparecen sorpresas detrás de los tabiques o bajo los pavimentos. Reservar entre un 15% y un 20% del presupuesto total para contingencias no es pesimismo, es prudencia.',
    'La elección del equipo técnico es la decisión más importante. Trabajar con un arquitecto colegiado garantiza el respaldo legal necesario para tramitar licencias, dirigir la obra y asumir la responsabilidad técnica del proyecto. La dirección de obra no es un lujo: es la garantía de que lo que se construye coincide con lo que se diseñó y que la calidad de los materiales y la ejecución cumplen con las especificaciones acordadas.',
    'El calendario de obra debe contemplar no solo la duración prevista sino también la coordinación de los distintos gremios. Una reforma integral raramente puede ejecutarse de forma lineal: los trabajos de demolición, estructura, instalaciones, albañilería, carpintería y acabados tienen dependencias entre sí que requieren una planificación cuidadosa. Un buen jefe de obra vale su peso en oro precisamente por esta capacidad de coordinación.',
    'Por último, documentar todo. Los contratos deben ser detallados, las memorias descriptivas han de especificar marcas y modelos, y cualquier modificación sobre el proyecto acordado debe quedar registrada por escrito. Esta documentación protege tanto al propietario como al equipo técnico y evita malentendidos que suelen aparecer en el momento más delicado: justo antes de la entrega.',
  ],
  'arquitectura-sostenible': [
    'La arquitectura sostenible ha dejado de ser una especialidad de nicho para convertirse en el estándar que marca la calidad de cualquier proyecto contemporáneo. La Directiva Europea de Eficiencia Energética en Edificios y los compromisos climáticos nacionales están acelerando una transformación que el sector ya tenía pendiente desde hace décadas. Proyectar con criterios de sostenibilidad no es ya un valor añadido: es una exigencia ética y, en muchos casos, legal.',
    'La orientación sigue siendo la herramienta más barata y eficaz de la arquitectura sostenible. Un edificio bien orientado puede reducir su demanda de climatización en un 30% sin necesidad de ninguna tecnología adicional. Las fachadas sur captando el sol de invierno, los voladizos calculados para bloquear el sol de verano, las ventilaciones cruzadas que enfrían naturalmente en las noches de verano: estos son los recursos básicos del bioclimatismo que los arquitectos mediterráneos han practicado durante siglos y que la modernidad tardó décadas en redescubrir.',
    'Los materiales son el segundo gran vector de la sostenibilidad. La madera de certificación FSC, el corcho, la lana de roca, los aislamientos de fibra de celulosa, el cáñamo: la industria de los materiales sostenibles ha madurado hasta ofrecer alternativas competitivas en precio y prestaciones para casi todas las aplicaciones constructivas. La huella de carbono embebida en los materiales —el carbono emitido durante su fabricación— es hoy un parámetro que los proyectos más avanzados incorporan en sus análisis.',
    'La energía renovable integrada en el edificio —fotovoltaica, solar térmica, geotermia— ha alcanzado una madurez tecnológica y una asequibilidad económica que hace cada vez más injustificable no incorporarla en las obras nuevas. El concepto de edificio de consumo casi nulo (EECN) deja de ser una aspiración para convertirse en la norma exigida por la regulación europea.',
    'La sostenibilidad también se mide en ciclo de vida. Un edificio que dura cien años con mínimos de mantenimiento tiene una huella ambiental muy inferior a uno que requiere intervenciones frecuentes o que se derriba a los treinta años. La durabilidad, la mantenibilidad y la adaptabilidad son virtudes sostenibles que los proyectos deberían incorporar desde el inicio.',
    'En nuestro estudio, la sostenibilidad no es un capítulo del proyecto: es la base desde la que se toman todas las decisiones. El lugar, el clima, los materiales disponibles en el entorno, la cultura constructiva local: estos son los parámetros que definen la arquitectura sostenible de verdad, antes de cualquier etiqueta o certificación.',
  ],
  'interiorismo-minimalista': [
    'El minimalismo en el interiorismo no nació como una tendencia estética sino como una posición filosófica. La idea de que la acumulación de objetos genera ruido mental y que la simplicidad del entorno contribuye al bienestar del habitante tiene raíces en el pensamiento zen japonés, en el movimiento Arts and Crafts y en la Bauhaus. Hoy, a través de figuras como Donald Judd en el arte o Tadao Ando en la arquitectura, ha llegado a los hogares de personas que buscan un modo de vida más consciente.',
    'El minimalismo bien entendido no es pobreza decorativa ni frialdad clínica. Es la depuración de lo no esencial para que lo esencial brille con toda su fuerza. En un salón minimalista, la calidad de la luz, la textura de una pared de hormigón visto o la proporción de los muebles tienen un protagonismo que la saturación decorativa suele enterrar. Cada objeto presente en el espacio está justificado y cumple una función estética o práctica.',
    'La selección de materiales es el elemento más determinante del interiorismo minimalista. La madera con veta visible, el hormigón pulido, la piedra natural, el lino sin teñir: son materiales con presencia propia que no necesitan ornamento. Su calidad debe ser superior precisamente porque no hay nada que los disimule. En un espacio minimalista, la diferencia entre un buen acabado y uno mediocre se percibe con una claridad brutal.',
    'El color en el interiorismo minimalista se articula a través de una paleta reducida de tonos neutros o monocromáticos. No significa necesariamente blanco: puede ser el gris topo de una pared de estuco, el negro de una cocina con frente de acero o el verde musgo de un baño con azulejos artesanales. La clave es la coherencia y la voluntad de no introducir elementos que distraigan de la experiencia espacial.',
    'El orden no es una imposición del minimalismo sino su consecuencia natural. Cuando un espacio está bien diseñado, cuando cada cosa tiene su lugar y el almacenaje está resuelto con inteligencia, el orden se mantiene sin esfuerzo. La carpintería a medida —armarios integrados en la arquitectura, estanterías empotradas, cocinas sin tiradores— es la herramienta que permite alcanzar esta condición.',
    'Adoptar el minimalismo en el hogar es un proceso gradual que empieza por la edición: revisar lo que se tiene, conservar solo lo que aporta valor funcional o emocional, y a partir de ahí construir un entorno que refleje lo que realmente importa. No se trata de vivir con menos, sino de vivir mejor con lo justo.',
  ],
  'licencias-urbanisticas': [
    'Navegar por el sistema de licencias urbanísticas en Barcelona y su área metropolitana puede ser un ejercicio frustrante para quien no conoce su lógica interna. Los tipos de licencias, los plazos reales —no los teóricos—, los organismos que intervienen y la documentación necesaria varían según el tipo de obra, la categoría del edificio y el municipio. Esta guía pretende ofrecer una visión clara y práctica del sistema.',
    'La primera distinción fundamental es entre obras mayores y obras menores. Las obras mayores —nueva construcción, ampliaciones, intervenciones estructurales, cambios de uso— requieren proyecto técnico firmado por arquitecto, visado colegial y licencia de obras mayor otorgada por el Ayuntamiento. Las obras menores —reformas de acabados, cambio de carpinterías, trabajos que no afectan a la estructura ni a los elementos comunes— se tramitan mediante comunicado previo o licencia de obras menor, con documentación simplificada.',
    'En el municipio de Barcelona, el Ayuntamiento distingue además entre obras en edificios catalogados y en edificios no catalogados. Cualquier intervención en un edificio con algún nivel de protección —y Barcelona tiene un catálogo de patrimonio muy extenso— requiere informe favorable de la Comisió de Patrimoni antes de la concesión de la licencia. Este trámite añade tiempo y puede condicionar de forma significativa las posibilidades de intervención.',
    'Los plazos son el elemento que más sorprende a quienes no han tramitado licencias previamente. Legalmente, el Ayuntamiento de Barcelona tiene un plazo de tres meses para resolver una licencia de obras mayor. En la práctica, los plazos reales oscilan entre seis meses y más de un año, dependiendo de la complejidad del proyecto y de la carga de trabajo del departamento. Las licencias de obras menores suelen resolverse en plazos más razonables, entre uno y tres meses.',
    'La documentación básica para una licencia de obras mayor incluye: proyecto básico y de ejecución firmado por arquitecto, presupuesto detallado, estudio de gestión de residuos, estudio de seguridad y salud, y en muchos casos una memoria de sostenibilidad. Para edificios en zonas especiales —áreas de especial protecció arqueológica, zonas inundables, frentes de fachada protegidos— se requieren informes adicionales de los organismos competentes.',
    'El consejo más valioso que podemos dar es trabajar con profesionales que conozcan el sistema y mantengan una relación fluida con los servicios técnicos municipales. Un buen proyecto técnico, bien documentado y que anticipa los requerimientos del Ayuntamiento, puede reducir los plazos considerablemente. Los retrasos suelen deberse a requerimientos de subsanación que un proyecto bien preparado habría evitado.',
  ],
  'eficiencia-energetica': [
    'La eficiencia energética en el hogar es simultáneamente una cuestión económica, de confort y de responsabilidad ambiental. Una vivienda energéticamente eficiente reduce la factura eléctrica y de gas, mantiene temperaturas más estables y agradables durante todo el año, y emite menos CO₂ a la atmósfera. Los tres objetivos van de la mano y se consiguen con las mismas intervenciones.',
    'El aislamiento térmico de la envolvente —fachadas, cubierta y suelos sobre espacios no habitados— es la inversión con mayor retorno en términos de eficiencia energética. En España, una gran parte del parque edificado data de antes de la primera normativa térmica significativa, de 1979, lo que significa que muchos edificios carecen de aislamiento o lo tienen muy por debajo de los estándares actuales. Una cubierta bien aislada puede reducir las pérdidas de calor en invierno y las ganancias en verano en más de un 30%.',
    'Las carpinterías —ventanas y puertas exteriores— son el punto débil de la envolvente térmica en muchas viviendas. Una ventana de vidrio simple tiene una transmitancia térmica (U) de aproximadamente 5 W/m²K, mientras que una ventana de doble vidrio con cámara y rotura de puente térmico puede bajar a 1,2 W/m²K. La diferencia en el comportamiento térmico de una habitación es palpable. La inversión en buenas carpinterías tiene un retorno generalmente inferior a diez años.',
    'Los sistemas de climatización e instalaciones también son determinantes. Los equipos de bomba de calor aerotérmica ofrecen rendimientos de entre 3 y 5 veces superiores a los sistemas convencionales de resistencia eléctrica: por cada kWh de electricidad consumida, generan entre 3 y 5 kWh de calor o frío. Combinados con una instalación fotovoltaica, permiten llegar a una situación de autoconsumo muy significativa.',
    'La ventilación controlada es el elemento olvidado de la eficiencia energética. Una vivienda bien aislada pero sin sistema de ventilación adecuado acumula humedad, CO₂ y compuestos orgánicos volátiles que deterioran la calidad del aire interior. Los sistemas de ventilación mecánica con recuperación de calor permiten renovar el aire sin perder la energía invertida en calentarlo o enfriarlo, con eficiencias de recuperación que superan el 85%.',
    'El certificado de eficiencia energética, obligatorio en cualquier compraventa o alquiler, es una foto del estado energético del edificio que califica de A a G. Mejorar la calificación energética de un inmueble tiene impacto directo en su valor de mercado: los estudios disponibles en el mercado español muestran que la diferencia de precio entre un piso con certificado A y uno con F puede superar el 15%. La eficiencia energética no es solo un bien para el planeta: es también una inversión rentable.',
  ],
}

const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function BlogClient({ slug }: { slug: string }) {
  const postIndex = posts.findIndex((p) => p.slug === slug)
  const post = posts[postIndex]
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3)

  const content = articleContent[slug] ?? [
    'Este artículo está en proceso de edición. Vuelve pronto para leer el contenido completo.',
  ]

  if (!post) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center gap-6"
        style={{ backgroundColor: '#F5F2EC' }}
      >
        <h1
          className="text-4xl font-light italic"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
        >
          Artículo no encontrado
        </h1>
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm tracking-widest uppercase"
          style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
        >
          <ArrowLeft size={14} />
          Volver a la Revista
        </Link>
      </main>
    )
  }

  const articleUrl = typeof window !== 'undefined' ? window.location.href : `https://pallach-arquitectes.cat/blog/${slug}`
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(articleUrl)}`
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`

  return (
    <main style={{ backgroundColor: '#F5F2EC' }}>

      {/* Article Header */}
      <section
        style={{ backgroundColor: '#F5F2EC', borderBottom: '1px solid rgba(26,26,26,0.1)' }}
        className="pt-32 pb-12"
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-8 transition-opacity hover:opacity-60"
              style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
            >
              <ArrowLeft size={12} />
              Revista
            </Link>

            <span
              className="text-xs tracking-[0.3em] uppercase mb-5 block"
              style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
            >
              {post.category}
            </span>

            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-light italic mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
            >
              {post.title}
            </h1>

            <div
              className="flex flex-wrap items-center gap-6 text-sm pb-8"
              style={{
                color: '#8C8B7E',
                fontFamily: 'var(--font-dm-sans)',
                borderBottom: '1px solid rgba(26,26,26,0.1)',
              }}
            >
              <span
                className="font-medium"
                style={{ color: '#1A1A1A' }}
              >
                Pallach Perez Arquitectes
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime} de lectura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing, delay: 0.1 }}
          className="relative w-full overflow-hidden max-h-[40vh] sm:max-h-[500px]"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={500}
            className="w-full object-cover max-h-[40vh] sm:max-h-[500px]"
            priority
          />
        </motion.div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
        >
          {/* Lead / Pull quote */}
          <blockquote
            className="text-2xl lg:text-3xl font-light italic mb-10 pl-4 sm:pl-8 pr-2 leading-snug"
            style={{
              fontFamily: 'var(--font-cormorant)',
              color: '#1A1A1A',
              borderLeft: `3px solid #9B7B5C`,
            }}
          >
            {post.excerpt}
          </blockquote>

          {/* Body paragraphs */}
          <div
            className="space-y-6 text-base leading-relaxed"
            style={{ color: '#4A4A4A', fontFamily: 'var(--font-dm-sans)' }}
          >
            {content.map((paragraph, i) => {
              const isMidpoint = Math.floor(content.length / 2) === i
              return (
                <div key={i}>
                  {isMidpoint && (
                    <blockquote
                      className="text-2xl font-light italic my-10 text-center py-8"
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        color: '#1A1A1A',
                        borderTop: '1px solid rgba(26,26,26,0.1)',
                        borderBottom: '1px solid rgba(26,26,26,0.1)',
                      }}
                    >
                      &ldquo;La arquitectura es el arte de crear espacios que hagan mejores a quienes los habitan.&rdquo;
                    </blockquote>
                  )}
                  <p>{paragraph}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </article>

      {/* Share */}
      <section
        className="max-w-3xl mx-auto px-6 py-10"
        style={{ borderTop: '1px solid rgba(26,26,26,0.1)', borderBottom: '1px solid rgba(26,26,26,0.1)' }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Share2 size={16} style={{ color: '#8C8B7E' }} />
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}
            >
              Compartir artículo
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300"
              style={{
                border: '1px solid rgba(26,26,26,0.2)',
                color: '#1A1A1A',
                fontFamily: 'var(--font-dm-sans)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.backgroundColor = '#1A1A1A'
                el.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.backgroundColor = 'transparent'
                el.style.color = '#1A1A1A'
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.259 5.622 5.905-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Twitter / X
            </a>
            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300"
              style={{
                border: '1px solid rgba(26,26,26,0.2)',
                color: '#1A1A1A',
                fontFamily: 'var(--font-dm-sans)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.backgroundColor = '#1A1A1A'
                el.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.backgroundColor = 'transparent'
                el.style.color = '#1A1A1A'
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <button
              onClick={() => {
                if (typeof navigator !== 'undefined' && navigator.clipboard) {
                  navigator.clipboard.writeText(articleUrl)
                }
              }}
              aria-label="Copiar enlace del artículo"
              className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300"
              style={{
                border: '1px solid rgba(26,26,26,0.2)',
                color: '#1A1A1A',
                fontFamily: 'var(--font-dm-sans)',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement
                el.style.backgroundColor = '#1A1A1A'
                el.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement
                el.style.backgroundColor = 'transparent'
                el.style.color = '#1A1A1A'
              }}
            >
              <Link2 size={13} />
              Copiar
            </button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="mb-12"
        >
          <h2
            className="text-4xl font-light italic"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
          >
            Artículos Relacionados
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((relatedPost, i) => (
            <motion.div
              key={relatedPost.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easing, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${relatedPost.slug}`}
                className="group block"
                style={{ border: '1px solid rgba(26,26,26,0.1)' }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {relatedPost.category}
                  </span>
                  <h3
                    className="text-xl font-light mt-2 mb-3 leading-snug group-hover:text-[#9B7B5C] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
                  >
                    {relatedPost.title}
                  </h3>
                  <div
                    className="flex gap-3 text-xs"
                    style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {relatedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {relatedPost.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#9B7B5C' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <h2
              className="text-4xl font-light italic text-white"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              ¿Tienes un proyecto en mente?
            </h2>
            <p
              className="text-sm mt-2"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Hablemos de tus ideas y transformémoslas en arquitectura.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase border border-white"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                color: 'white',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.backgroundColor = 'white'
                el.style.color = '#9B7B5C'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.backgroundColor = 'transparent'
                el.style.color = 'white'
              }}
            >
              Contactar con el Estudio
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
