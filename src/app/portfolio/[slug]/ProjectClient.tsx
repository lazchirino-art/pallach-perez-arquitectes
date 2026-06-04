'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, User, Layers } from 'lucide-react'

const projects = [
  { slug: 'can-malagrida', title: 'Can Malagrida', category: 'Residencial', year: '2023', location: 'Barberà del Vallès', m2: '320', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=85&auto=format&fit=crop' },
  { slug: 'reforma-eixample', title: 'Reforma Eixample', category: 'Reformas', year: '2023', location: 'Barcelona', m2: '145', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85&auto=format&fit=crop' },
  { slug: 'oficinas-arc', title: 'Oficinas Arc', category: 'Comercial', year: '2022', location: 'Sabadell', m2: '580', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&auto=format&fit=crop' },
  { slug: 'villa-montserrat', title: 'Villa Montserrat', category: 'Residencial', year: '2022', location: 'Sant Cugat del Vallès', m2: '480', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85&auto=format&fit=crop' },
  { slug: 'interior-gracia', title: 'Interior Gràcia', category: 'Interiorismo', year: '2022', location: 'Barcelona', m2: '95', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=85&auto=format&fit=crop' },
  { slug: 'hotel-boutique', title: 'Hotel Boutique Valles', category: 'Comercial', year: '2021', location: 'Terrassa', m2: '1200', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=85&auto=format&fit=crop' },
  { slug: 'casa-bages', title: 'Casa Bages', category: 'Residencial', year: '2021', location: 'Manresa', m2: '260', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1600&q=85&auto=format&fit=crop' },
  { slug: 'reforma-sarria', title: 'Reforma Sarrià', category: 'Reformas', year: '2021', location: 'Barcelona', m2: '180', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&q=85&auto=format&fit=crop' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop',
]

const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function ProjectClient({ slug }: { slug: string }) {
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  if (!project) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center gap-6"
        style={{ backgroundColor: '#F5F2EC' }}
      >
        <h1
          className="text-4xl font-light italic"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
        >
          Proyecto no encontrado
        </h1>
        <Link
          href="/portfolio"
          className="flex items-center gap-2 text-sm tracking-widest uppercase"
          style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
        >
          <ArrowLeft size={14} />
          Volver al Portfolio
        </Link>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: '#F5F2EC' }}>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.3) 50%, rgba(26,26,26,0.2) 100%)' }}
        />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-6 lg:left-12">
          <Link
            href="/portfolio"
            className="flex flex-wrap items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-dm-sans)' }}
          >
            <ArrowLeft size={12} />
            Portfolio
          </Link>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase mb-4 block"
              style={{ color: '#C9A882', fontFamily: 'var(--font-dm-sans)' }}
            >
              {project.category}
            </span>
            <h1
              className="font-light italic text-white mb-6 leading-none"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 7vw, 6rem)' }}
            >
              {project.title}
            </h1>
            <div
              className="flex flex-wrap gap-6 text-sm"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <span className="flex items-center gap-2">
                <Calendar size={13} />
                {project.year}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={13} />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Layers size={13} />
                {project.m2} m²
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easing }}
            >
              <h2
                className="text-4xl font-light italic mb-8"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
              >
                Sobre el Proyecto
              </h2>
              <div
                className="space-y-5 text-base leading-relaxed"
                style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}
              >
                <p>
                  {project.title} nació de la voluntad de crear un espacio que dialogara con su entorno inmediato sin renunciar a una contemporaneidad rigurosa. El encargo planteaba el reto de conciliar las demandas funcionales del cliente con una lectura sensible del lugar, donde la topografía, la orientación y la memoria del territorio actuaron como materiales de proyecto tan relevantes como el hormigón o la madera.
                </p>
                <p>
                  La estrategia de implantación partió de un análisis exhaustivo de las trazas preexistentes, lo que permitió establecer una secuencia de espacios que va desde lo público hacia lo íntimo con una naturalidad que rara vez se logra en proyectos de esta escala. Las estancias principales se orientaron hacia las vistas más privilegiadas, mientras que los núcleos de servicio se organizaron como elementos que liberan el resto del programa.
                </p>
                <p>
                  La materialidad fue concebida con criterios de durabilidad y honestidad constructiva. Cada acabado responde tanto a requisitos técnicos como a la voluntad de crear una experiencia táctil coherente que evolucione con el tiempo y gane carácter con el paso de los años. El resultado es una arquitectura que no busca imponerse, sino pertenecer.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
          >
            <div
              className="p-8"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <h3
                className="text-lg font-light italic text-white mb-8"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Ficha Técnica
              </h3>
              <div className="space-y-5">
                {[
                  { label: 'Cliente', value: 'Privado' },
                  { label: 'Año', value: project.year },
                  { label: 'Localización', value: project.location },
                  { label: 'Categoría', value: project.category },
                  { label: 'Servicios', value: 'Arquitectura · Dirección de obra' },
                  { label: 'Superficie', value: `${project.m2} m²` },
                ].map(({ label, value }) => (
                  <div key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="pb-5">
                    <p
                      className="text-xs tracking-widest uppercase mb-1"
                      style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm text-white"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-3xl font-light italic mb-10"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
        >
          Galería
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easing, delay: i * 0.1 }}
              className="relative overflow-hidden aspect-[3/4] group"
            >
              <Image
                src={src}
                alt={`${project.title} — imagen ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: 'rgba(26,26,26,0.25)' }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Concept */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easing }}
            >
              <span
                className="text-xs tracking-[0.3em] uppercase mb-4 block"
                style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
              >
                Concepto
              </span>
              <h2
                className="text-5xl font-light italic text-white mb-10"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                El Concepto
              </h2>
              <div
                className="space-y-5 text-base leading-relaxed text-left"
                style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-dm-sans)' }}
              >
                <p>
                  La idea generatriz del proyecto surgió de la tensión productiva entre dos lógicas aparentemente opuestas: la necesidad de enraizamiento en el lugar y la aspiración a una ligereza que permitiera que la arquitectura se convirtiera en un filtro hacia el paisaje. Esta dualidad atraviesa todas las decisiones proyectuales, desde la escala territorial hasta el detalle constructivo.
                </p>
                <p>
                  La sección, más que la planta, se convirtió en el verdadero instrumento de proyecto. A través de ella se resuelven las relaciones entre interior y exterior, entre luz y sombra, entre la masa y el vacío. El resultado es un edificio que se transforma a lo largo del día y de las estaciones, que ofrece experiencias distintas según el momento y la posición del observador, y que entiende la arquitectura no como un objeto estático sino como un dispositivo de mediación entre el ser humano y su entorno.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="mb-14"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase mb-3 block"
            style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
          >
            Metodología
          </span>
          <h2
            className="text-4xl font-light italic"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
          >
            El Proceso
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {[
            {
              num: '01',
              phase: 'Diseño',
              text: 'Escucha activa del cliente, análisis del lugar y elaboración de una propuesta conceptual que integra funcionalidad, estética y criterios de sostenibilidad. Desarrollamos el anteproyecto y el proyecto básico con toda la documentación necesaria para la obtención de licencias.',
            },
            {
              num: '02',
              phase: 'Desarrollo',
              text: 'Redacción del proyecto ejecutivo con el nivel de detalle necesario para garantizar la calidad constructiva. Coordinación con los industriales y especialistas, elaboración de pliegos de condiciones y seguimiento del proceso de contratación de las obras.',
            },
            {
              num: '03',
              phase: 'Construcción',
              text: 'Dirección de obra presencial y rigurosa que asegura la fidelidad al proyecto y la calidad de los acabados. Gestión de las certificaciones, coordinación con la propiedad y entrega final con toda la documentación legal y de mantenimiento.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easing, delay: i * 0.12 }}
            >
              <p
                className="text-5xl font-light italic mb-4"
                style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(26,26,26,0.15)' }}
              >
                {item.num}
              </p>
              <h3
                className="text-2xl font-light mb-4"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
              >
                {item.phase}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="relative overflow-hidden" style={{ minHeight: '50vh' }}>
        <Image
          src={nextProject.image}
          alt={nextProject.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26,26,26,0.75)' }}
        />
        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] text-center px-4 sm:px-6 group"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase mb-4 block"
              style={{ color: '#C9A882', fontFamily: 'var(--font-dm-sans)' }}
            >
              Siguiente Proyecto
            </span>
            <h2
              className="text-5xl lg:text-6xl font-light italic text-white mb-4 group-hover:text-[#C9A882] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {nextProject.title} →
            </h2>
            <p
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-dm-sans)' }}
            >
              {nextProject.location} &middot; {nextProject.year}
            </p>
          </motion.div>
        </Link>
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
              ¿Quieres un proyecto similar?
            </h2>
            <p
              className="text-sm mt-2"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Cuéntanos tu idea y la convertimos en arquitectura.
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
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase border border-white text-white hover:bg-white transition-colors duration-300"
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
              Contactar
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
