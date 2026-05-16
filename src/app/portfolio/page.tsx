'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  { slug: 'can-malagrida', title: 'Can Malagrida', category: 'Residencial', year: '2023', location: 'Barberà del Vallès', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80&auto=format&fit=crop' },
  { slug: 'reforma-eixample', title: 'Reforma Eixample', category: 'Reformas', year: '2023', location: 'Barcelona', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80&auto=format&fit=crop' },
  { slug: 'oficinas-arc', title: 'Oficinas Arc', category: 'Comercial', year: '2022', location: 'Sabadell', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop' },
  { slug: 'villa-montserrat', title: 'Villa Montserrat', category: 'Residencial', year: '2022', location: 'Sant Cugat del Vallès', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop' },
  { slug: 'interior-gracia', title: 'Interior Gràcia', category: 'Interiorismo', year: '2022', location: 'Barcelona', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&auto=format&fit=crop' },
  { slug: 'hotel-boutique', title: 'Hotel Boutique Valles', category: 'Comercial', year: '2021', location: 'Terrassa', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&auto=format&fit=crop' },
  { slug: 'casa-bages', title: 'Casa Bages', category: 'Residencial', year: '2021', location: 'Manresa', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80&auto=format&fit=crop' },
  { slug: 'reforma-sarria', title: 'Reforma Sarrià', category: 'Reformas', year: '2021', location: 'Barcelona', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format&fit=crop' },
]

const categories = ['Todos', 'Residencial', 'Comercial', 'Reformas', 'Interiorismo']

const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <main style={{ backgroundColor: '#F5F2EC', minHeight: '100vh' }}>

      {/* Hero */}
      <section
        style={{ backgroundColor: '#1A1A1A', minHeight: '45vh' }}
        className="flex items-end pb-16 pt-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
            >
              Nuestro Trabajo
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light italic text-white mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Portfolio
            </h1>
            <p
              className="text-lg max-w-xl"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Una selección de nuestros proyectos más representativos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ backgroundColor: '#F5F2EC', borderBottom: '1px solid rgba(26,26,26,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-8 overflow-x-auto py-6 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative shrink-0 pb-2 text-sm tracking-widest uppercase transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  color: activeCategory === cat ? '#1A1A1A' : '#8C8B7E',
                }}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: '#9B7B5C' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}>
              No hay proyectos en esta categoría.
            </p>
          </div>
        )}
      </section>

      {/* CTA Strip */}
      <section
        style={{ backgroundColor: '#1A1A1A' }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing }}
            className="text-3xl lg:text-4xl font-light italic text-white"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            ¿Tienes un proyecto similar?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-300"
              style={{
                backgroundColor: '#9B7B5C',
                color: '#F5F2EC',
                fontFamily: 'var(--font-dm-sans)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C9A882'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#9B7B5C'
              }}
            >
              Solicitar Presupuesto
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: index * 0.07 }}
    >
      <Link href={`/portfolio/${project.slug}`} className="group block">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{ backgroundColor: 'rgba(26,26,26,0.45)' }}
          />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#9B7B5C' }}
            >
              <ArrowUpRight size={16} color="#F5F2EC" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="pt-5 pb-2">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
          >
            {project.category}
          </span>
          <h2
            className="text-2xl font-light mt-1 mb-2 group-hover:text-[#9B7B5C] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
          >
            {project.title}
          </h2>
          <p
            className="text-sm"
            style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}
          >
            {project.location} &middot; {project.year}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
