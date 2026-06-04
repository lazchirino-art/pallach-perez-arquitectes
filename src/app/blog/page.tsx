'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'

const posts = [
  { slug: 'tendencias-arquitectura-2024', title: 'Tendencias de Arquitectura para 2024', category: 'Tendencias', date: '15 Enero 2024', readTime: '5 min', excerpt: 'Exploramos las corrientes que están definiendo el diseño arquitectónico contemporáneo y cómo estas influyen en la manera en que concebimos y habitamos los espacios.', image: 'https://images.unsplash.com/photo-1486325212351-d6c8f60a7e7b?w=700&q=80&auto=format&fit=crop' },
  { slug: 'como-planificar-reforma', title: 'Cómo Planificar una Reforma Integral', category: 'Reformas', date: '3 Enero 2024', readTime: '8 min', excerpt: 'Guía completa para afrontar una reforma integral con éxito, sin sorpresas ni imprevistos. Desde la definición del presupuesto hasta la elección del equipo técnico adecuado.', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80&auto=format&fit=crop' },
  { slug: 'arquitectura-sostenible', title: 'Arquitectura Sostenible: El Futuro es Hoy', category: 'Sostenibilidad', date: '20 Diciembre 2023', readTime: '6 min', excerpt: 'La sostenibilidad ya no es opcional. Descubre cómo integramos criterios ecológicos en cada proyecto y qué tecnologías están transformando la construcción contemporánea.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80&auto=format&fit=crop' },
  { slug: 'interiorismo-minimalista', title: 'Interiorismo Minimalista: Menos es Más', category: 'Interiorismo', date: '5 Diciembre 2023', readTime: '4 min', excerpt: 'El minimalismo no es solo una tendencia estética, es una filosofía de vida que transforma espacios y libera la mente. Claves para aplicarlo con criterio en tu hogar.', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop' },
  { slug: 'licencias-urbanisticas', title: 'Guía de Licencias Urbanísticas en Barcelona', category: 'Legal', date: '18 Noviembre 2023', readTime: '10 min', excerpt: 'Todo lo que necesitas saber sobre licencias urbanísticas en Barcelona y el área metropolitana: tipos, plazos, documentación y cómo evitar los errores más comunes.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop' },
  { slug: 'eficiencia-energetica', title: 'Eficiencia Energética en el Hogar', category: 'Sostenibilidad', date: '1 Noviembre 2023', readTime: '7 min', excerpt: 'Cómo diseñar y reformar para reducir el consumo energético y mejorar el confort. Materiales, sistemas y estrategias que marcan la diferencia en la factura y el bienestar.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80&auto=format&fit=crop' },
]

const categories = ['Todo', 'Tendencias', 'Reformas', 'Sostenibilidad', 'Interiorismo', 'Legal']

const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todo')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = activeCategory === 'Todo'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  const featuredPost = filtered[0]
  const remainingPosts = filtered.slice(1)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <main style={{ backgroundColor: '#F5F2EC', minHeight: '100vh' }}>

      {/* Hero */}
      <section
        style={{ backgroundColor: '#F5F2EC', borderBottom: '1px solid rgba(26,26,26,0.1)' }}
        className="pt-32 pb-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
            className="max-w-2xl"
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-5"
              style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
            >
              Publicaciones
            </p>
            <h1
              className="font-light italic mb-6"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A', fontSize: 'clamp(2.2rem, 7vw, 6rem)' }}
            >
              Revista
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}
            >
              Reflexiones sobre arquitectura, diseño y espacios contemporáneos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ backgroundColor: '#F5F2EC', borderBottom: '1px solid rgba(26,26,26,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-8 overflow-x-auto py-5 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                aria-label={`Filtrar por ${cat}`}
                className="relative shrink-0 pb-2 text-sm tracking-widest uppercase transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  color: activeCategory === cat ? '#1A1A1A' : '#8C8B7E',
                }}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="blog-filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: '#9B7B5C' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
              style={{ border: '1px solid rgba(26,26,26,0.1)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Content */}
              <div
                className="flex flex-col justify-center p-10 lg:p-14"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <span
                  className="text-xs tracking-[0.3em] uppercase mb-4 block"
                  style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
                >
                  Destacado · {featuredPost.category}
                </span>
                <h2
                  className="text-4xl lg:text-5xl font-light italic text-white mb-6 leading-snug group-hover:text-[#C9A882] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {featuredPost.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div
                    className="flex gap-4 text-xs"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span
                    className="text-xs tracking-widest uppercase flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                    style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Leer más <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Posts Grid */}
      {remainingPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}>
            No hay artículos en esta categoría.
          </p>
        </div>
      )}

      {/* Newsletter CTA */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
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
              Newsletter
            </span>
            <h2
              className="text-4xl lg:text-5xl font-light italic text-white mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Suscríbete a nuestra Revista
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Recibe en tu correo artículos sobre arquitectura, tendencias y los últimos proyectos del estudio. Sin spam, solo contenido de valor.
            </p>

            {subscribed ? (
              <p
                className="text-base"
                style={{ color: '#C9A882', fontFamily: 'var(--font-dm-sans)' }}
              >
                Gracias por suscribirte. Pronto recibirás nuestros artículos.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3" aria-label="Suscripción al newsletter">
                <label htmlFor="newsletter-email" className="sr-only">Email para newsletter</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  required
                  aria-required="true"
                  className="flex-1 px-5 py-4 text-sm outline-none"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.15)',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                />
                <button
                  type="submit"
                  aria-label="Suscribirse al newsletter"
                  className="px-8 py-4 text-sm tracking-widest uppercase shrink-0 transition-colors duration-300"
                  style={{
                    backgroundColor: '#9B7B5C',
                    color: '#F5F2EC',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C9A882'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#9B7B5C'
                  }}
                >
                  Suscribirme
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function BlogCard({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: index * 0.08 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block" style={{ border: '1px solid rgba(26,26,26,0.1)' }}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
          >
            {post.category}
          </span>
          <h3
            className="text-xl font-light mt-2 mb-3 leading-snug group-hover:text-[#9B7B5C] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A' }}
          >
            {post.title}
          </h3>
          <p
            className="text-xs leading-relaxed mb-5 line-clamp-3"
            style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}
          >
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div
              className="flex gap-3 text-xs"
              style={{ color: '#8C8B7E', fontFamily: 'var(--font-dm-sans)' }}
            >
              <span className="flex items-center gap-1">
                <Calendar size={10} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={10} />
                {post.readTime}
              </span>
            </div>
            <span
              className="text-xs tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
              style={{ color: '#9B7B5C', fontFamily: 'var(--font-dm-sans)' }}
            >
              Leer más <ArrowUpRight size={11} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
