'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Leaf,
  Users,
  Award,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const values = [
  {
    icon: Target,
    title: 'Precisión Técnica',
    text: 'Cada detalle constructivo está documentado y coordinado con precisión milimétrica. Trabajamos con metodología BIM para garantizar la coherencia entre proyecto y obra.',
  },
  {
    icon: Leaf,
    title: 'Creatividad Sostenible',
    text: 'Integramos criterios bioclimáticos y materiales sostenibles desde la primera línea de proyecto, reduciendo el impacto ambiental sin sacrificar la calidad estética.',
  },
  {
    icon: Users,
    title: 'Compromiso con el Cliente',
    text: 'Acompañamos a cada cliente durante todo el proceso, desde la primera consulta hasta la entrega de llaves, con comunicación clara y transparente en cada fase.',
  },
  {
    icon: Award,
    title: 'Calidad sin Concesiones',
    text: 'No negociamos la calidad. Seleccionamos industriales y materiales con criterio riguroso, supervisando cada etapa para que el resultado final supere las expectativas.',
  },
];

const team = [
  {
    name: 'Josep Maria Pallach',
    role: 'Arquitecto Fundador',
    bio: 'Titulado por la ETSAB en 1996, Josep Maria dirige la visión estratégica del estudio. Su experiencia abarca desde viviendas unifamiliares hasta complejos comerciales de gran envergadura, siempre con una mirada contemporánea y rigurosa.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85&auto=format&fit=crop',
  },
  {
    name: 'Núria Perez',
    role: 'Arquitecta y Directora de Proyectos',
    bio: 'Especialista en interiorismo y eficiencia energética, Núria lidera el área de proyectos residenciales y reformas integrales. Su sensibilidad por los materiales y la luz natural define la identidad estética del estudio.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85&auto=format&fit=crop',
  },
  {
    name: 'Marc Vidal',
    role: 'Arquitecto Técnico',
    bio: 'Con una sólida formación en construcción y gestión de obra, Marc coordina los equipos de industriales y garantiza que cada proyecto se ejecute dentro de los plazos y presupuestos acordados.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85&auto=format&fit=crop',
  },
];

const stats = [
  { number: '25+', label: 'Años de experiencia' },
  { number: '+200', label: 'Proyectos completados' },
  { number: '100%', label: 'Compromiso en cada obra' },
  { number: 'BCN', label: 'Barcelona & provincia' },
];

export default function SobreNosotrosPage() {
  return (
    <main style={{ backgroundColor: '#F5F2EC' }}>

      {/* ── 1. PAGE HERO ─────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-end"
        style={{ minHeight: '60vh' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=85&auto=format&fit=crop"
            alt="Interior arquitectónico Pallach Perez"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.45) 60%, rgba(26,26,26,0.2) 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 pt-32">
          <motion.p
            {...fadeUp}
            className="text-white/60 tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', letterSpacing: '0.15em' }}
          >
            Inicio / Sobre Nosotros
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.1 }}
            className="text-white"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 7vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '1rem' }}
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.25 }}
            className="text-white/75"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', fontWeight: 300 }}
          >
            Más de 25 años transformando espacios en Barcelona
          </motion.p>
        </div>
      </section>

      {/* ── 2. HISTORIA DEL ESTUDIO ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p
              className="uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#9B7B5C', letterSpacing: '0.2em' }}
            >
              Nuestra historia
            </p>
            <h2
              className="mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.15 }}
            >
              Un estudio fundado sobre la pasión por la arquitectura
            </h2>
            <div
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: '#4A4A4A', lineHeight: 1.85, fontWeight: 300 }}
              className="space-y-5"
            >
              <p>
                Pallach Perez Arquitectes nació en 1998 en Barberà del Vallès con una misión clara: crear arquitectura contemporánea que combina funcionalidad, sostenibilidad y belleza. Fundado por Josep Maria Pallach y Núria Perez, el estudio ha consolidado una trayectoria de más de 25 años en el área metropolitana de Barcelona, siendo referente en proyectos residenciales y comerciales de alta calidad.
              </p>
              <p>
                Desde nuestros inicios hemos defendido que la buena arquitectura no es un lujo reservado a pocos, sino el resultado de un proceso riguroso, una escucha atenta al cliente y un dominio técnico que convierte cada restricción en oportunidad creativa.
              </p>
              <p>
                Hoy somos un equipo multidisciplinar que abarca desde el planeamiento urbanístico hasta el detalle de mobiliario, manteniendo la escala humana y el trato personalizado que nos caracterizan desde el primer día.
              </p>
            </div>
            <div className="mt-10">
              <div
                style={{ width: '48px', height: '1px', backgroundColor: '#9B7B5C', marginBottom: '2rem' }}
              />
              <p
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 400, color: '#9B7B5C', fontStyle: 'italic' }}
              >
                "La arquitectura no es solo construir edificios. Es construir experiencias de vida."
              </p>
              <p
                className="mt-3"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: '#8C8B7E', letterSpacing: '0.1em' }}
              >
                — Josep Maria Pallach
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="relative"
          >
            <div
              className="absolute hidden sm:block"
              style={{ top: '-24px', right: '-24px', width: '100%', height: '100%', border: '1px solid #C9A882', opacity: 0.35 }}
            />
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <Image
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=85&auto=format&fit=crop"
                alt="Interior del estudio Pallach Perez Arquitectes"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. VALORES ───────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p
              className="uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#9B7B5C', letterSpacing: '0.2em' }}
            >
              Lo que nos define
            </p>
            <h2
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5F2EC', lineHeight: 1.15 }}
            >
              Nuestros valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: index * 0.1 }}
                  className="group"
                  style={{ padding: '2rem', borderTop: '1px solid rgba(155,123,92,0.3)' }}
                >
                  <Icon
                    size={28}
                    style={{ color: '#9B7B5C', marginBottom: '1.5rem' }}
                    strokeWidth={1.5}
                  />
                  <h3
                    className="mb-3"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 400, color: '#F5F2EC' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1rem', color: 'rgba(245,242,236,0.6)', lineHeight: 1.75, fontWeight: 300 }}
                  >
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. EQUIPO ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32">
        <motion.div {...fadeUp} className="mb-16">
          <p
            className="uppercase tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#9B7B5C', letterSpacing: '0.2em' }}
          >
            Las personas detrás del estudio
          </p>
          <h2
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.15 }}
          >
            Nuestro Equipo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: index * 0.12 }}
            >
              <div className="overflow-hidden mb-6" style={{ aspectRatio: '3/4', position: 'relative' }}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.3) 0%, transparent 60%)' }}
                />
              </div>
              <h3
                className="mb-1"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 400, color: '#1A1A1A' }}
              >
                {member.name}
              </h3>
              <p
                className="mb-4"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#9B7B5C', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {member.role}
              </p>
              <p
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1rem', color: '#4A4A4A', lineHeight: 1.75, fontWeight: 300 }}
              >
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 5. NÚMEROS ───────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: index * 0.1 }}
                className="text-center"
              >
                <p
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, color: '#9B7B5C', lineHeight: 1 }}
                >
                  {stat.number}
                </p>
                <div
                  style={{ width: '32px', height: '1px', backgroundColor: '#9B7B5C', margin: '1rem auto' }}
                />
                <p
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: 'rgba(245,242,236,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CERTIFICACIONES ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp}>
            <p
              className="uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#9B7B5C', letterSpacing: '0.2em' }}
            >
              Cómo trabajamos
            </p>
            <h2
              className="mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.15 }}
            >
              Metodología y Certificaciones
            </h2>
            <div
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: '#4A4A4A', lineHeight: 1.85, fontWeight: 300 }}
              className="space-y-5"
            >
              <p>
                Trabajamos íntegramente con metodología BIM (Building Information Modeling), lo que nos permite coordinar todas las disciplinas del proyecto —arquitectura, estructura, instalaciones— en un modelo tridimensional único. Esto reduce errores en obra, mejora la comunicación con los industriales y permite al cliente visualizar el resultado final antes de iniciar la construcción.
              </p>
              <p>
                Nuestro compromiso con la sostenibilidad se refleja en cada decisión de proyecto: orientación bioclimática, sistemas de ventilación natural, materiales de bajo impacto ambiental y certificación energética. Aspiramos a superar siempre la calificación energética mínima exigida por normativa.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.15 }}
          >
            <ul className="space-y-5">
              {[
                { label: 'Col·legi d\'Arquitectes de Catalunya (COAC)', text: 'Miembros colegiados con plenas garantías profesionales y cobertura de responsabilidad civil.' },
                { label: 'Metodología BIM nivel 2', text: 'Proyecto, estructura e instalaciones coordinados en entorno colaborativo digital.' },
                { label: 'Certificación energética', text: 'Todos nuestros proyectos incorporan estudio de eficiencia energética y certificación CE3X.' },
                { label: 'Gestión integral de licencias', text: 'Tramitación ante el Ajuntament y organismos competentes, sin intermediarios.' },
                { label: 'Dirección de obra presencial', text: 'Visitas de obra periódicas y disponibilidad directa con el equipo técnico en todo momento.' },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4"
                  style={{ paddingBottom: '1.25rem', borderBottom: '1px solid rgba(155,123,92,0.2)' }}
                >
                  <span
                    style={{ color: '#9B7B5C', fontSize: '1.1rem', lineHeight: 1.5, flexShrink: 0, marginTop: '2px' }}
                  >
                    ◆
                  </span>
                  <div>
                    <p
                      style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.3rem' }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: '#8C8B7E', lineHeight: 1.65, fontWeight: 300 }}
                    >
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: '#9B7B5C' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            {...fadeUp}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5F2EC', lineHeight: 1.15 }}
              >
                ¿Quieres conocernos mejor?
              </h2>
              <p
                className="mt-2"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.1rem', color: 'rgba(245,242,236,0.75)', fontWeight: 300 }}
              >
                Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
              </p>
            </div>
            <Link
              href="/contacto"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.1rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#9B7B5C',
                backgroundColor: '#F5F2EC',
                padding: '1rem 2.5rem',
                display: 'inline-block',
                fontWeight: 500,
                textDecoration: 'none',
                flexShrink: 0,
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1A1A1A';
                (e.currentTarget as HTMLAnchorElement).style.color = '#F5F2EC';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5F2EC';
                (e.currentTarget as HTMLAnchorElement).style.color = '#9B7B5C';
              }}
            >
              Contactar
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
