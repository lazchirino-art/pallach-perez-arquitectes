'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown, Phone } from 'lucide-react';

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const fadeUpStagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
  },
});

const inViewProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '+ 25', label: 'Años de experiencia' },
  { value: '+ 200', label: 'Proyectos realizados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: 'BCN', label: 'Barcelona & Provincias' },
];

const services = [
  {
    num: '01',
    title: 'Arquitectura Residencial',
    desc: 'Diseñamos hogares que reflejan la personalidad de sus habitantes',
  },
  {
    num: '02',
    title: 'Arquitectura Comercial',
    desc: 'Espacios de trabajo y negocio que proyectan profesionalidad',
  },
  {
    num: '03',
    title: 'Reformas Integrales',
    desc: 'Transformamos espacios existentes con precisión y criterio',
  },
  {
    num: '04',
    title: 'Interiorismo',
    desc: 'Cada detalle cuenta para crear ambientes únicos y funcionales',
  },
  {
    num: '05',
    title: 'Dirección de Obra',
    desc: 'Supervisamos cada fase del proyecto con máxima atención',
  },
  {
    num: '06',
    title: 'Diseño 3D y Renders',
    desc: 'Visualiza tu proyecto antes de construirlo',
  },
];

const projects = [
  {
    title: 'Can Malagrida',
    category: 'Arquitectura Residencial',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=85&auto=format&fit=crop',
    alt: 'Casa Can Malagrida — arquitectura residencial contemporánea',
    large: true,
  },
  {
    title: 'Reforma Eixample',
    category: 'Reforma Integral',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=85&auto=format&fit=crop',
    alt: 'Reforma integral en el Eixample de Barcelona',
    large: false,
  },
  {
    title: 'Oficinas Arc',
    category: 'Arquitectura Comercial',
    year: '2022',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85&auto=format&fit=crop',
    alt: 'Diseño de oficinas Arc — espacios de trabajo contemporáneos',
    large: false,
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Concepto',
    desc: 'Escuchamos tu visión y definimos los objetivos del proyecto',
  },
  {
    num: '02',
    title: 'Diseño',
    desc: 'Creamos propuestas arquitectónicas adaptadas a tus necesidades',
  },
  {
    num: '03',
    title: 'Técnico',
    desc: 'Desarrollamos toda la documentación técnica y legal',
  },
  {
    num: '04',
    title: 'Construcción',
    desc: 'Supervisamos la ejecución con rigor y precisión',
  },
  {
    num: '05',
    title: 'Entrega',
    desc: 'Cumplimos plazos y expectativas. Tu proyecto, completo',
  },
];

const testimonials = [
  {
    quote:
      'Pallach Perez transformó completamente nuestra casa. El resultado superó todas nuestras expectativas. Profesionalidad y creatividad en estado puro.',
    name: 'Maria C.',
    location: 'Sabadell',
  },
  {
    quote:
      'La dirección de obra fue impecable. Cumplieron plazos y presupuesto al detalle. Muy recomendables.',
    name: 'Josep M.',
    location: 'Barberà del Vallès',
  },
  {
    quote:
      'Reformaron nuestras oficinas y el resultado es espectacular. El equipo es cercano, profesional y muy creativo.',
    name: 'Carles R.',
    location: 'Barcelona',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ backgroundColor: '#F5F2EC' }}>

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        aria-label="Bienvenida — Pallach Perez Arquitectes"
        className="relative min-h-screen flex flex-col overflow-hidden"
      >
        {/* Background image — parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85&auto=format&fit=crop"
            alt="Arquitectura contemporánea — Pallach Perez Arquitectes"
            style={{ y: heroY, width: '100%', height: 'calc(100% + 120px)', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.72) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <motion.div
          className="relative z-20 flex flex-col justify-end flex-1 px-6 lg:px-16 xl:px-24 pb-24 lg:pb-32"
          style={{ opacity: heroOpacity }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUpStagger(0.2)}
            initial="hidden"
            animate={heroLoaded ? 'visible' : 'hidden'}
            className="text-white/55 tracking-[0.4em] uppercase mb-6 text-[10px] lg:text-[11px]"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Estudio de arquitectura en Barcelona
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUpStagger(0.38)}
            initial="hidden"
            animate={heroLoaded ? 'visible' : 'hidden'}
            className="text-white font-light leading-[1.06] max-w-4xl"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(42px, 6.5vw, 96px)',
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
            }}
          >
            Arquitectura contemporánea que transforma espacios en experiencias.
          </motion.h1>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUpStagger(0.56)}
            initial="hidden"
            animate={heroLoaded ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-[10.5px] tracking-[0.28em] uppercase font-light transition-all duration-300"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                backgroundColor: '#9B7B5C',
                color: '#fff',
                border: '1px solid #9B7B5C',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#7A5E43';
                (e.currentTarget as HTMLElement).style.borderColor = '#7A5E43';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#9B7B5C';
                (e.currentTarget as HTMLElement).style.borderColor = '#9B7B5C';
              }}
            >
              Ver Portfolio
              <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-[10.5px] tracking-[0.28em] uppercase font-light text-white transition-all duration-300"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                border: '1px solid rgba(255,255,255,0.45)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.85)';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.45)';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              }}
            >
              Contactar
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: heroLoaded ? 1 : 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-white/40" strokeWidth={1} />
          </motion.div>
          <div
            className="w-px bg-gradient-to-b from-white/40 to-transparent"
            style={{ height: '48px' }}
            role="presentation"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Cifras del estudio"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUpStagger(i * 0.1)}
                {...inViewProps}
                className="flex flex-col items-center text-center lg:px-10"
              >
                <span
                  className="text-white leading-none"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    fontWeight: 300,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-white/40 tracking-[0.25em] uppercase mt-2 text-[9px] lg:text-[9.5px]"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. EDITORIAL INTRO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="intro-heading"
        className="py-24 lg:py-36"
        style={{ backgroundColor: '#F5F2EC' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Top editorial line */}
          <motion.div
            variants={fadeUp}
            {...inViewProps}
            className="flex items-center gap-6 mb-14 justify-center"
          >
            <div className="flex-1 max-w-[160px] h-px bg-[#9B7B5C]/30" aria-hidden="true" />
            <p
              className="text-[#9B7B5C] tracking-[0.45em] uppercase text-[9px] lg:text-[10px] shrink-0"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Sobre el Estudio
            </p>
            <div className="flex-1 max-w-[160px] h-px bg-[#9B7B5C]/30" aria-hidden="true" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="intro-heading"
            variants={fadeUpStagger(0.15)}
            {...inViewProps}
            className="text-center font-light leading-[1.1] max-w-3xl mx-auto mb-10"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(34px, 4.5vw, 56px)',
              color: '#1A1A1A',
              letterSpacing: '-0.01em',
            }}
          >
            Transformamos ideas en espacios que perduran en el tiempo
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUpStagger(0.28)}
            {...inViewProps}
            className="text-center max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '17px',
              color: '#5A5A52',
              fontWeight: 300,
            }}
          >
            Somos un estudio de arquitectura con más de 25 años de experiencia en
            Barberà del Vallès, Barcelona. Nuestro enfoque combina rigor técnico con
            sensibilidad artística para crear espacios que superan las expectativas
            de nuestros clientes.
          </motion.p>

          {/* Bottom editorial line */}
          <motion.div
            variants={fadeUpStagger(0.38)}
            {...inViewProps}
            className="flex items-center gap-6 mt-14 justify-center"
          >
            <div className="flex-1 max-w-[160px] h-px bg-[#9B7B5C]/30" aria-hidden="true" />
            <Link
              href="/sobre-nosotros"
              className="shrink-0 text-[9.5px] tracking-[0.32em] uppercase text-[#9B7B5C] hover:text-[#7A5E43] transition-colors duration-300 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Conocer el estudio
              <ArrowRight size={11} strokeWidth={1.5} />
            </Link>
            <div className="flex-1 max-w-[160px] h-px bg-[#9B7B5C]/30" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. SERVICES
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="services-heading"
        className="py-24 lg:py-36"
        style={{ backgroundColor: '#EDE9E1' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 lg:mb-20">
            <motion.p
              variants={fadeUp}
              {...inViewProps}
              className="text-[#9B7B5C] tracking-[0.45em] uppercase text-[9px] lg:text-[10px] mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Nuestros Servicios
            </motion.p>
            <motion.h2
              id="services-heading"
              variants={fadeUpStagger(0.12)}
              {...inViewProps}
              className="font-light leading-[1.1] max-w-xl"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: '#1A1A1A',
              }}
            >
              Lo que hacemos
            </motion.h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#D8D3C7]">
            {services.map((svc, i) => (
              <ServiceCard key={svc.num} svc={svc} delay={i * 0.08} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeUpStagger(0.4)}
            {...inViewProps}
            className="mt-14"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 text-[10.5px] tracking-[0.28em] uppercase text-[#9B7B5C] hover:text-[#7A5E43] transition-colors duration-300 font-light group"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Ver todos los servicios
              <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={12} strokeWidth={1.5} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. FEATURED PROJECTS
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="projects-heading"
        className="py-24 lg:py-36"
        style={{ backgroundColor: '#F5F2EC' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <motion.p
                variants={fadeUp}
                {...inViewProps}
                className="text-[#9B7B5C] tracking-[0.45em] uppercase text-[9px] lg:text-[10px] mb-4"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Proyectos Destacados
              </motion.p>
              <motion.h2
                id="projects-heading"
                variants={fadeUpStagger(0.12)}
                {...inViewProps}
                className="font-light leading-tight"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  color: '#1A1A1A',
                }}
              >
                Nuestro portfolio
              </motion.h2>
            </div>
            <motion.div variants={fadeUpStagger(0.2)} {...inViewProps}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[#8C8B7E] hover:text-[#9B7B5C] transition-colors duration-300 font-light group"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Ver portfolio completo
                <ArrowRight
                  size={11}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Large left card */}
            <motion.div variants={fadeUp} {...inViewProps} className="lg:row-span-2">
              <ProjectCard project={projects[0]} className="h-[420px] lg:h-full min-h-[500px]" />
            </motion.div>

            {/* Two smaller right cards */}
            {[projects[1], projects[2]].map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUpStagger(0.15 + i * 0.1)}
                {...inViewProps}
              >
                <ProjectCard project={p} className="h-[280px] lg:h-[300px]" />
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <motion.div
            variants={fadeUpStagger(0.3)}
            {...inViewProps}
            className="mt-10 lg:hidden"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 text-[10.5px] tracking-[0.28em] uppercase text-[#9B7B5C] hover:text-[#7A5E43] transition-colors duration-300 font-light"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Explorar portfolio completo
              <ArrowRight size={12} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. PHILOSOPHY
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Filosofía del estudio"
        className="py-0 lg:py-0"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text side */}
            <motion.div
              variants={fadeUp}
              {...inViewProps}
              className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-20 lg:py-28"
            >
              {/* Decorative line */}
              <div className="w-8 h-px bg-[#9B7B5C] mb-10" aria-hidden="true" />

              <blockquote>
                <p
                  className="text-white font-light leading-[1.35] italic"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(26px, 3.2vw, 44px)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  "Creemos que la arquitectura de calidad no es un lujo, es una
                  inversión en bienestar, funcionalidad y valor duradero."
                </p>
                <footer className="mt-8">
                  <cite
                    className="not-italic text-white/40 tracking-[0.3em] uppercase text-[10px]"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    — Estudio Pallach Perez
                  </cite>
                </footer>
              </blockquote>
            </motion.div>

            {/* Image side */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 1.04 }, visible: { opacity: 1, scale: 1 } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="relative overflow-hidden h-64 sm:h-80 lg:h-auto"
              style={{ minHeight: '420px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85&auto=format&fit=crop"
                alt="Interior arquitectónico de calidad — Pallach Perez Arquitectes"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'rgba(26,26,26,0.18)' }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="process-heading"
        className="py-24 lg:py-36"
        style={{ backgroundColor: '#F5F2EC' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <motion.p
              variants={fadeUp}
              {...inViewProps}
              className="text-[#9B7B5C] tracking-[0.45em] uppercase text-[9px] lg:text-[10px] mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Metodología
            </motion.p>
            <motion.h2
              id="process-heading"
              variants={fadeUpStagger(0.12)}
              {...inViewProps}
              className="font-light"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: '#1A1A1A',
              }}
            >
              Nuestro Proceso
            </motion.h2>
          </div>

          {/* Steps — horizontal scroll on mobile */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div
              className="hidden lg:block absolute top-[28px] left-0 right-0 h-px"
              style={{ background: 'linear-gradient(to right, transparent, #D8D3C7 10%, #D8D3C7 90%, transparent)' }}
              aria-hidden="true"
            />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUpStagger(i * 0.1)}
                  {...inViewProps}
                  className="flex-1 lg:px-6 first:pl-0 last:pr-0 flex flex-col lg:items-center lg:text-center lg:min-w-[200px]"
                >
                  {/* Number with dot indicator */}
                  <div className="relative mb-6 lg:mb-8">
                    <div
                      className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-full border"
                      style={{ borderColor: '#E0DAD0', backgroundColor: '#F5F2EC' }}
                    >
                      <span
                        className="text-[#9B7B5C] leading-none"
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          fontSize: '26px',
                          fontWeight: 300,
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="mb-3 font-light"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '22px',
                      color: '#1A1A1A',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[16px] font-light leading-relaxed"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="testimonials-heading"
        className="py-24 lg:py-36"
        style={{ backgroundColor: '#EAE5DB' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-14 lg:mb-18">
            <motion.p
              variants={fadeUp}
              {...inViewProps}
              className="text-[#9B7B5C] tracking-[0.45em] uppercase text-[9px] lg:text-[10px] mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Testimonios
            </motion.p>
            <motion.h2
              id="testimonials-heading"
              variants={fadeUpStagger(0.12)}
              {...inViewProps}
              className="font-light"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(30px, 3.8vw, 50px)',
                color: '#1A1A1A',
              }}
            >
              Lo que dicen nuestros clientes
            </motion.h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                variants={fadeUpStagger(i * 0.12)}
                {...inViewProps}
                className="relative bg-white p-8 lg:p-10"
                style={{ boxShadow: '0 2px 24px rgba(26,26,26,0.06)' }}
                aria-label={`Testimonio de ${t.name}`}
              >
                {/* Decorative quote mark */}
                <span
                  className="block mb-6 leading-none select-none"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '80px',
                    color: '#9B7B5C',
                    lineHeight: 1,
                    marginTop: '-16px',
                  }}
                  aria-hidden="true"
                >
                  "
                </span>
                <blockquote>
                  <p
                    className="text-[14.5px] leading-relaxed font-light italic"
                    style={{ fontFamily: 'var(--font-dm-sans)', color: '#3A3A34' }}
                  >
                    {t.quote}
                  </p>
                  <footer className="mt-6 pt-5 border-t border-[#EDE9E1]">
                    <cite className="not-italic">
                      <span
                        className="block font-light"
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          fontSize: '18px',
                          color: '#1A1A1A',
                        }}
                      >
                        {t.name}
                      </span>
                      <span
                        className="text-[10px] tracking-[0.25em] uppercase text-[#8C8B7E] mt-0.5 block"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {t.location}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. CONTACT CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Contacto — Inicia tu proyecto"
        className="py-24 lg:py-36"
        style={{ backgroundColor: '#9B7B5C' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            {/* Decorative line */}
            <div
              className="w-10 h-px mx-auto mb-10"
              style={{ backgroundColor: 'rgba(255,255,255,0.45)' }}
              aria-hidden="true"
            />

            <h2
              className="font-light text-white leading-tight mx-auto"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                maxWidth: '720px',
                letterSpacing: '-0.01em',
              }}
            >
              ¿Listo para comenzar tu proyecto?
            </h2>

            <p
              className="text-white/65 mt-5 mx-auto"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '17px',
                fontWeight: 300,
                maxWidth: '420px',
              }}
            >
              Cuéntanos tu idea. Primera consulta sin compromiso.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[10.5px] tracking-[0.28em] uppercase font-light transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  backgroundColor: '#FFFFFF',
                  color: '#9B7B5C',
                  border: '1px solid #FFFFFF',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#F5F2EC';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF';
                }}
              >
                Solicitar Proyecto
                <ArrowRight size={12} strokeWidth={1.5} />
              </Link>

              <a
                href="tel:+34937192001"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[10.5px] tracking-[0.28em] uppercase font-light text-white transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  border: '1px solid rgba(255,255,255,0.50)',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.85)';
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.10)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.50)';
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                <Phone size={12} strokeWidth={1.5} />
                937 19 20 01
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

interface ServiceData {
  num: string;
  title: string;
  desc: string;
}

function ServiceCard({ svc, delay }: { svc: ServiceData; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={fadeUpStagger(delay)}
      {...inViewProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border-b border-r border-[#D8D3C7] p-8 lg:p-10 transition-colors duration-300 cursor-pointer group"
      style={{ backgroundColor: hovered ? '#E6E1D7' : 'transparent' }}
      aria-label={svc.title}
    >
      {/* Number */}
      <span
        className="block mb-5 transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '42px',
          fontWeight: 300,
          color: hovered ? '#9B7B5C' : '#C9A882',
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {svc.num}
      </span>

      {/* Title */}
      <h3
        className="mb-3 font-light leading-tight transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '22px',
          color: '#1A1A1A',
        }}
      >
        <span
          style={{
            backgroundImage: hovered
              ? 'linear-gradient(to right, #9B7B5C 0%, #9B7B5C 100%)'
              : 'none',
            backgroundSize: '100% 1px',
            backgroundPosition: '0 100%',
            backgroundRepeat: 'no-repeat',
            paddingBottom: '1px',
          }}
        >
          {svc.title}
        </span>
      </h3>

      {/* Description */}
      <p
        className="text-[16px] font-light leading-relaxed mb-6"
        style={{ fontFamily: 'var(--font-dm-sans)', color: '#8C8B7E' }}
      >
        {svc.desc}
      </p>

      {/* Arrow link */}
      <Link
        href="/servicios"
        aria-label={`Ver servicio: ${svc.title}`}
        className="inline-flex items-center gap-1.5 text-[9.5px] tracking-[0.28em] uppercase transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          color: hovered ? '#9B7B5C' : '#B8B5A8',
        }}
        tabIndex={0}
      >
        Ver más
        <ArrowRight
          size={10}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Link>
    </motion.article>
  );
}

interface ProjectData {
  title: string;
  category: string;
  year: string;
  img: string;
  alt: string;
  large: boolean;
}

function ProjectCard({ project, className }: { project: ProjectData; className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/portfolio"
      aria-label={`Ver proyecto: ${project.title}`}
      className={`relative overflow-hidden block ${className ?? ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.alt}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
      />

      {/* Persistent subtle overlay — slightly heavier on mobile where hover doesn't exist */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ backgroundColor: hovered ? 'rgba(26,26,26,0.55)' : 'rgba(26,26,26,0.35)' }}
        aria-hidden="true"
      />

      {/* Info overlay — always visible on mobile, slides up on hover on desktop */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-7 lg:p-9 transition-all duration-500"
        style={{
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          opacity: hovered ? 1 : 0,
        }}
        aria-hidden={!hovered}
      >
        <p
          className="text-[9px] tracking-[0.35em] uppercase text-white/60 mb-2"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          {project.category} · {project.year}
        </p>
        <div className="flex items-center justify-between">
          <h3
            className="text-white font-light leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: project.large ? '32px' : '24px',
            }}
          >
            {project.title}
          </h3>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-4"
            style={{ backgroundColor: '#9B7B5C' }}
          >
            <ArrowUpRight size={14} className="text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Mobile-always-visible info / desktop fades out on hover */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-7 lg:p-9 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
        aria-hidden={hovered}
      >
        {/* Category + year: always show on mobile, hidden on lg (handled by hover overlay above) */}
        <p
          className="lg:hidden text-[9px] tracking-[0.35em] uppercase text-white/60 mb-2"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          {project.category} · {project.year}
        </p>
        <h3
          className="text-white font-light leading-tight"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: project.large ? '32px' : '22px',
            textShadow: '0 1px 12px rgba(0,0,0,0.4)',
          }}
        >
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
