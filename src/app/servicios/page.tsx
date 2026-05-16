'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string[];
  process?: string[];
  benefits: string[];
  image?: string;
  accentBg?: string;
}

const services: Service[] = [
  {
    id: 'residencial',
    number: '01',
    title: 'Arquitectura Residencial',
    subtitle: 'Viviendas que se adaptan a quienes las habitan',
    description: [
      'Diseñamos viviendas unifamiliares y plurifamiliares que van más allá de la construcción: son espacios pensados para mejorar la calidad de vida de sus habitantes. Desde la primera conversación, escuchamos cómo vive el cliente, qué necesita hoy y qué necesitará mañana.',
      'Nuestra aproximación residencial parte del análisis del solar y su entorno —orientación solar, vistas, privacidad, relación con el exterior— para extraer el máximo partido de cada parcela. El resultado es arquitectura contemporánea, eficiente y con carácter propio.',
      'Gestionamos el proyecto completo: desde el estudio de viabilidad inicial hasta la dirección de obra y la coordinación con industriales, garantizando que el presupuesto y los plazos se respeten en cada fase.',
    ],
    process: [
      'Estudio de viabilidad',
      'Anteproyecto',
      'Proyecto básico',
      'Proyecto ejecutivo',
      'Dirección de obra',
    ],
    benefits: [
      'Diseño a medida adaptado a tu forma de vida',
      'Optimización energética desde el primer boceto',
      'Gestión integral de licencias y trámites',
      'Coordinación completa con industriales',
      'Presupuesto cerrado antes de iniciar la obra',
    ],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'comercial',
    number: '02',
    title: 'Arquitectura Comercial',
    subtitle: 'Espacios que trabajan para tu negocio',
    description: [
      'Los espacios comerciales son una extensión directa de la identidad de una marca. Diseñamos oficinas, locales de retail, restaurantes y espacios de hospitalidad que no solo funcionan con eficiencia operativa, sino que comunican los valores de la empresa a quienes los visitan.',
      'Combinamos el estudio del flujo de clientes, las necesidades logísticas y los requerimientos normativos con una visión estética coherente. El resultado son espacios que impactan en la primera visita y funcionan con eficiencia en el día a día.',
      'Trabajamos estrechamente con los responsables del negocio para entender su modelo operativo y trasladarlo a decisiones de espacio: distribución, materialidad, iluminación y señalética forman un sistema integrado y coherente.',
    ],
    benefits: [
      'Análisis de flujos y ergonomía comercial',
      'Cumplimiento normativo sectorial (accesibilidad, protección contra incendios)',
      'Diseño de imagen corporativa en el espacio',
      'Minimización de tiempos de obra para reducir pérdidas de negocio',
      'Coordinación con decoradores e interioristas',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'reformas',
    number: '03',
    title: 'Reformas Integrales',
    subtitle: 'Transformaciones que respetan la historia del espacio',
    description: [
      'Una reforma integral bien ejecutada es capaz de multiplicar el valor de un inmueble y transformar completamente la experiencia de quienes lo habitan. Abordamos cada reforma con el mismo rigor que un proyecto de obra nueva, comenzando por un diagnóstico técnico exhaustivo del estado actual.',
      'Nuestro equipo identifica las posibilidades estructurales reales del espacio, propone redistribuciones que maximizan la superficie útil y selecciona materiales y acabados que ofrecen calidad duradera. Gestionamos todos los gremios —fontanería, electricidad, albañilería, carpintería— bajo un único interlocutor.',
      'Entendemos que una reforma implica alteraciones en la vida cotidiana del cliente. Por eso planificamos la obra con plazos realistas, minimizamos los imprevistos gracias a un proyecto ejecutivo completo y mantenemos una comunicación constante durante la ejecución.',
    ],
    benefits: [
      'Diagnóstico técnico previo del estado del inmueble',
      'Proyecto ejecutivo con memoria de calidades',
      'Gestión de todos los gremios bajo una sola dirección',
      'Plazos realistas y comunicación semanal del avance',
      'Certificado energético tras la reforma',
    ],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'interiorismo',
    number: '04',
    title: 'Interiorismo',
    subtitle: 'La arquitectura de los detalles que marcan la diferencia',
    description: [
      'El interiorismo es el punto donde la arquitectura se vuelve táctil. Nos ocupamos de la definición completa del espacio interior: distribución de ambientes, selección de pavimentos y revestimientos, diseño de iluminación, mobiliario, textiles y elementos decorativos que componen una atmósfera coherente.',
      'Trabajamos tanto en proyectos de interiorismo vinculados a obra nueva o reforma como en intervenciones exclusivamente de diseño interior en espacios existentes. En ambos casos, partimos de las necesidades funcionales y el gusto del cliente para desarrollar una propuesta que sea auténtica y atemporal.',
      'Contamos con una red consolidada de proveedores y fabricantes que nos permite acceder a piezas únicas, materiales singulares y soluciones de mobiliario a medida, siempre dentro del presupuesto acordado.',
    ],
    benefits: [
      'Propuesta de materiales y acabados con muestras físicas',
      'Diseño de iluminación técnica y ambiental',
      'Mobiliario a medida y selección de piezas de diseño',
      'Coordinación con proveedores de textiles y decoración',
      'Visualizaciones fotorrealistas previas a la ejecución',
    ],
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'direccion-obra',
    number: '05',
    title: 'Dirección de Obra',
    subtitle: 'El puente entre el proyecto y la realidad construida',
    description: [
      'La dirección de obra es la garantía de que lo que está dibujado en el proyecto se construye con fidelidad, calidad y seguridad. Nos hacemos presentes en obra de forma regular, verificamos la correcta ejecución de los trabajos y resolvemos las incidencias que inevitablemente surgen durante el proceso constructivo.',
      'Como directores de obra y directores de ejecución, somos los máximos responsables técnicos ante la administración y ante el cliente. Esto nos obliga a un seguimiento riguroso de cada partida: comprobamos que los materiales corresponden a los especificados, que las dimensiones son correctas y que los sistemas constructivos se ejecutan según la normativa vigente.',
      'Al final del proceso, elaboramos el Libro del Edificio, el Certificado Final de Obra y coordinamos la obtención de la Licencia de Primera Ocupación, completando así todo el ciclo del proyecto.',
    ],
    benefits: [
      'Visitas de obra con informe fotográfico semanal',
      'Control de plazos y certificaciones económicas',
      'Resolución de incidencias técnicas en tiempo real',
      'Coordinación de seguridad y salud en obra',
      'Tramitación del Certificado Final de Obra y LPO',
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'licencias',
    number: '06',
    title: 'Gestión de Licencias',
    subtitle: 'La burocracia resuelta por quien sabe cómo',
    description: [
      'La tramitación de licencias urbanísticas y permisos de edificación es uno de los aspectos más complejos y desconocidos para los propietarios. Requiere conocimiento de la normativa municipal, planeamiento urbanístico vigente y experiencia en la interlocución con los organismos competentes.',
      'Nos encargamos de toda la gestión: análisis de la normativa aplicable, preparación de la documentación técnica, presentación ante el Ajuntament y seguimiento del expediente hasta la obtención de la licencia. También tramitamos licencias de actividad para establecimientos comerciales y comunicados previos de obra.',
      'Nuestra experiencia acumulada con los ayuntamientos del área metropolitana de Barcelona nos permite anticipar los requerimientos de cada municipio y reducir los tiempos de tramitación al mínimo posible.',
    ],
    benefits: [
      'Análisis previo de normativa urbanística aplicable',
      'Preparación completa del expediente técnico',
      'Seguimiento del expediente ante la administración',
      'Licencias de obra mayor, obra menor y actividad',
      'Tramitación de comunicados previos y declaraciones responsables',
    ],
    accentBg: '#1A1A1A',
  },
  {
    id: 'renders',
    number: '07',
    title: 'Diseño 3D y Renders',
    subtitle: 'Ver antes de construir',
    description: [
      'Las visualizaciones arquitectónicas fotorrealistas son una herramienta fundamental en el proceso de diseño: permiten al cliente aprobar materiales, colores y distribuciones con plena confianza antes de ejecutar ningún trabajo. Producimos imágenes de alta calidad que muestran el proyecto final con total fidelidad.',
      'Nuestro servicio de diseño 3D va más allá de la imagen estática: generamos recorridos virtuales interactivos, animaciones y presentaciones que facilitan la comprensión del proyecto en todas sus dimensiones. Esto resulta especialmente valioso en fases de preventa, presentaciones a inversores o consultas con la propiedad.',
      'Utilizamos software de última generación —modelado BIM integrado con motores de render como Enscape y Lumion— lo que nos permite generar imágenes realistas de forma ágil y actualizar las visualizaciones con cada revisión del proyecto.',
    ],
    benefits: [
      'Renders fotorrealistas interiores y exteriores',
      'Recorridos virtuales 360° para revisión de proyecto',
      'Animaciones de presentación para promotores',
      'Integración directa con el modelo BIM del proyecto',
      'Entregas en alta resolución para uso publicitario',
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'consultoria',
    number: '08',
    title: 'Consultoría Técnica',
    subtitle: 'Criterio experto cuando lo necesitas',
    description: [
      'No siempre se necesita un proyecto completo. A veces basta con una segunda opinión técnica, un informe pericial, el análisis de la viabilidad de una compra inmobiliaria o el asesoramiento sobre cómo enfocar una reforma. Ofrecemos consultas individuales y servicios de consultoría puntual para particulares, empresas y otros profesionales.',
      'Emitimos informes periciales arquitectónicos para procedimientos judiciales o extrajudiciales, dictámenes técnicos sobre el estado de conservación de inmuebles y certificados de habitabilidad. También asesoramos a compradores de vivienda o locales comerciales que quieren conocer el estado real del inmueble antes de formalizar la compra.',
      'Para otros estudios de arquitectura o equipos de construcción, ofrecemos apoyo técnico en fases específicas de proyecto: cálculos, revisión de proyectos de instalaciones, asesoramiento en materiales o coordinación de especialidades.',
    ],
    benefits: [
      'Informes periciales para procedimientos judiciales',
      'Diagnóstico técnico previo a la compra de un inmueble',
      'Certificados de habitabilidad y eficiencia energética',
      'Consultas puntuales sin compromiso de proyecto completo',
      'Apoyo técnico para otros estudios de arquitectura',
    ],
    accentBg: '#9B7B5C',
  },
];

const faqs = [
  {
    question: '¿Cuánto tiempo tarda un proyecto de arquitectura?',
    answer:
      'Los plazos varían significativamente según la complejidad del proyecto. Un anteproyecto de vivienda unifamiliar puede estar listo en 4-6 semanas. El proyecto completo (básico + ejecutivo) suele necesitar entre 3 y 5 meses. A eso hay que añadir el plazo de tramitación de licencias —entre 2 y 8 meses según el municipio— y la duración de la propia obra. En la primera reunión podemos darte una estimación ajustada a tu caso concreto.',
  },
  {
    question: '¿Cuál es el proceso para iniciar una reforma?',
    answer:
      'El primer paso es una visita al inmueble para tomar datos, conocer el estado actual y entender qué quieres conseguir. A partir de ahí elaboramos un presupuesto de honorarios y un planteamiento inicial. Si estás de acuerdo, iniciamos el proyecto con un anteproyecto que define distribución y acabados, aprobado por ti antes de desarrollar el proyecto ejecutivo que va a obra.',
  },
  {
    question: '¿Trabajáis fuera de Barcelona?',
    answer:
      'Sí. Aunque nuestra base es Barberà del Vallès y trabajamos principalmente en el área metropolitana de Barcelona y las cuatro provincias catalanas, hemos desarrollado proyectos en otras comunidades autónomas. Para proyectos fuera de Cataluña, evaluamos cada caso individualmente y en ocasiones colaboramos con arquitectos locales para la dirección de obra.',
  },
  {
    question: '¿Incluís la gestión de licencias?',
    answer:
      'Sí, la gestión de licencias es uno de nuestros servicios incluidos en los proyectos completos. Nos encargamos de todo el trámite ante el Ajuntament correspondiente: preparación del expediente, presentación, seguimiento y resolución de requerimientos. También tramitamos licencias de actividad y certificados de primera ocupación. Es un servicio que también ofrecemos de forma independiente para quien ya tenga proyecto propio.',
  },
];

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0;
  const hasImage = !!service.image;

  if (!hasImage) {
    return (
      <section id={service.id} className="py-20 lg:py-28" style={{ backgroundColor: service.accentBg || '#F5F2EC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <p
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, color: service.accentBg === '#1A1A1A' ? 'rgba(155,123,92,0.4)' : 'rgba(155,123,92,0.25)', lineHeight: 1, marginBottom: '0.5rem' }}
              >
                {service.number}
              </p>
              <h2
                className="mb-4"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 400, color: service.accentBg === '#1A1A1A' ? '#F5F2EC' : '#1A1A1A', lineHeight: 1.15 }}
              >
                {service.title}
              </h2>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#9B7B5C', marginBottom: '1.25rem' }} />
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', color: '#9B7B5C', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                {service.subtitle}
              </p>
              <div className="space-y-4">
                {service.description.map((para, i) => (
                  <p key={i} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: service.accentBg === '#1A1A1A' ? 'rgba(245,242,236,0.7)' : '#4A4A4A', lineHeight: 1.8, fontWeight: 300 }}>
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.15 }}
            >
              <h3
                className="mb-6"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 400, color: service.accentBg === '#1A1A1A' ? '#F5F2EC' : '#1A1A1A' }}
              >
                Beneficios
              </h3>
              <ul className="space-y-4 mb-10">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check size={16} style={{ color: '#9B7B5C', flexShrink: 0, marginTop: '3px' }} strokeWidth={2.5} />
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', color: service.accentBg === '#1A1A1A' ? 'rgba(245,242,236,0.75)' : '#4A4A4A', lineHeight: 1.65 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contacto"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9B7B5C', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #9B7B5C', paddingBottom: '3px' }}
              >
                Solicitar información →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={service.id}
      className="py-20 lg:py-28"
      style={{ backgroundColor: index % 3 === 0 ? '#F5F2EC' : index % 3 === 1 ? '#FAFAF7' : '#F5F2EC' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>

          <motion.div {...fadeUp} className={isEven ? '' : 'lg:order-2'}>
            <p
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, color: 'rgba(155,123,92,0.25)', lineHeight: 1, marginBottom: '0.5rem' }}
            >
              {service.number}
            </p>
            <h2
              className="mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.15 }}
            >
              {service.title}
            </h2>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#9B7B5C', marginBottom: '1.25rem' }} />
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', color: '#9B7B5C', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              {service.subtitle}
            </p>
            <div className="space-y-4 mb-8">
              {service.description.map((para, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.8, fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>

            {service.process && (
              <div className="mb-8">
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', fontWeight: 400, color: '#1A1A1A' }}
                >
                  Proceso
                </h3>
                <ol className="flex flex-wrap gap-2">
                  {service.process.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-center gap-2"
                    >
                      <span
                        style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 500, color: '#F5F2EC', backgroundColor: '#9B7B5C', padding: '0.2rem 0.6rem', borderRadius: '2px' }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: '#1A1A1A' }}>
                        {step}
                      </span>
                      {i < (service.process?.length ?? 0) - 1 && (
                        <span style={{ color: '#C9A882', fontSize: '0.7rem' }}>→</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <ul className="space-y-3 mb-10">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={16} style={{ color: '#9B7B5C', flexShrink: 0, marginTop: '3px' }} strokeWidth={2.5} />
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1rem', color: '#4A4A4A', lineHeight: 1.65 }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contacto"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9B7B5C', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #9B7B5C', paddingBottom: '3px' }}
            >
              Solicitar información →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className={`relative ${isEven ? '' : 'lg:order-1'}`}
          >
            <div
              className="absolute hidden sm:block"
              style={{
                top: isEven ? '-16px' : 'auto',
                bottom: isEven ? 'auto' : '-16px',
                left: isEven ? 'auto' : '-16px',
                right: isEven ? '-16px' : 'auto',
                width: '85%',
                height: '85%',
                border: '1px solid rgba(155,123,92,0.25)',
              }}
            />
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src={service.image!}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                unoptimized
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: index * 0.08 }}
      style={{ borderBottom: '1px solid rgba(26,26,26,0.15)' }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span
          style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.3 }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          style={{ color: '#9B7B5C', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-6"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.8, fontWeight: 300, paddingRight: '2rem' }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServiciosPage() {
  return (
    <main style={{ backgroundColor: '#F5F2EC' }}>

      {/* ── 1. PAGE HERO ─────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-end"
        style={{ minHeight: '50vh', backgroundColor: '#1A1A1A', overflow: 'hidden' }}
      >
        {/* Geometric background pattern */}
        <div className="absolute inset-0" style={{ opacity: 0.06 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A882" strokeWidth="0.5" />
              </pattern>
              <pattern id="diag" width="120" height="120" patternUnits="userSpaceOnUse">
                <line x1="0" y1="120" x2="120" y2="0" stroke="#C9A882" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: '60%', background: 'linear-gradient(to top, #1A1A1A 0%, transparent 100%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20 pt-36">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#9B7B5C', letterSpacing: '0.2em' }}
          >
            Inicio / Servicios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.1 }}
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 8vw, 6rem)', fontWeight: 300, color: '#F5F2EC', fontStyle: 'italic', lineHeight: 1.05, marginBottom: '1rem' }}
          >
            Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.22 }}
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', color: 'rgba(245,242,236,0.65)', fontWeight: 300 }}
          >
            Soluciones arquitectónicas integrales para cada proyecto
          </motion.p>
        </div>
      </section>

      {/* ── 2. INTRODUCCIÓN ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <p
              className="uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#9B7B5C', letterSpacing: '0.2em' }}
            >
              Lo que ofrecemos
            </p>
            <h2
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.15 }}
            >
              Un estudio de arquitectura de servicio completo
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: '#4A4A4A', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.25rem' }}>
              En Pallach Perez Arquitectes ofrecemos una gama completa de servicios arquitectónicos, desde el proyecto básico hasta la entrega de llaves. Creemos en la arquitectura como proceso continuo: cada decisión, desde la primera línea del plano hasta el último detalle de obra, define la calidad del resultado final.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: '#4A4A4A', lineHeight: 1.85, fontWeight: 300 }}>
              Trabajas siempre con el mismo equipo y el mismo interlocutor, garantizando coherencia y continuidad a lo largo de todo el proceso. No subcontratamos la responsabilidad técnica ni la relación con el cliente.
            </p>
          </motion.div>
        </div>

        {/* Service quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.25 }}
          className="mt-14 flex flex-wrap gap-3"
        >
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1A1A1A',
                textDecoration: 'none',
                border: '1px solid rgba(26,26,26,0.2)',
                padding: '0.5rem 1rem',
                display: 'inline-block',
                transition: 'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#9B7B5C';
                el.style.color = '#F5F2EC';
                el.style.borderColor = '#9B7B5C';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'transparent';
                el.style.color = '#1A1A1A';
                el.style.borderColor = 'rgba(26,26,26,0.2)';
              }}
            >
              {s.number} {s.title}
            </a>
          ))}
        </motion.div>
      </section>

      {/* ── 3. SERVICIOS ─────────────────────────────────────────────── */}
      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}

      {/* ── 4. FAQ ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F5F2EC' }} className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div {...fadeUp} className="mb-14">
            <p
              className="uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#9B7B5C', letterSpacing: '0.2em' }}
            >
              Preguntas frecuentes
            </p>
            <h2
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.15 }}
            >
              Lo que más nos preguntan
            </h2>
          </motion.div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA STRIP ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            {...fadeUp}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5F2EC', lineHeight: 1.15 }}
              >
                ¿No encuentras lo que buscas?
              </h2>
              <p
                className="mt-2"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: 'rgba(245,242,236,0.6)', fontWeight: 300 }}
              >
                Cuéntanos tu situación y buscaremos la mejor solución para tu proyecto.
              </p>
            </div>
            <Link
              href="/contacto"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.1rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#1A1A1A',
                backgroundColor: '#C9A882',
                padding: '1rem 2.5rem',
                display: 'inline-block',
                fontWeight: 500,
                textDecoration: 'none',
                flexShrink: 0,
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5F2EC';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C9A882';
              }}
            >
              Contactar con el estudio
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
