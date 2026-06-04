'use client';

import Link from 'next/link';

import { Phone, Mail, MapPin } from 'lucide-react';

const IconInstagram = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconLinkedin = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const services = [
  { label: 'Arquitectura Residencial', href: '/servicios#residencial' },
  { label: 'Arquitectura Comercial', href: '/servicios#comercial' },
  { label: 'Reformas Integrales', href: '/servicios#reformas' },
  { label: 'Interiorismo', href: '/servicios#interiorismo' },
  { label: 'Dirección de Obra', href: '/servicios#direccion-obra' },
  { label: 'Diseño 3D y Renders', href: '/servicios#renders' },
];

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Revista', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

const legalLinks = [
  { label: 'Política de Privacidad', href: '/privacidad' },
  { label: 'Política de Cookies', href: '/cookies' },
  { label: 'Aviso Legal', href: '/aviso-legal' },
  { label: 'Términos de Uso', href: '/terminos' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pallachperezarquitectes',
    icon: IconInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pallachperezarquitectes',
    icon: IconLinkedin,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/pallachperezarquitectes',
    icon: IconFacebook,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/80" role="contentinfo">
      {/* ── CTA Strip ── */}
      <div className="border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="font-display text-3xl lg:text-4xl font-light text-white leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              ¿Tienes un proyecto en mente?
            </h2>
            <p
              className="text-white/50 text-sm font-light mt-2"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Cuéntanos tu visión. Nosotros la hacemos realidad.
            </p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 px-8 py-4 border border-[#9B7B5C] text-[#C9A882] text-[10.5px] tracking-[0.28em] uppercase font-light hover:bg-[#9B7B5C] hover:text-white transition-all duration-300"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Solicitar Consulta
          </Link>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Pallach Perez Arquitectes">
              <img
                src="/logo-pp.svg"
                alt="Pallach Perez Arquitectes"
                style={{ height: '60px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p
              className="text-white/45 text-[16px] font-light leading-relaxed mt-6 max-w-[240px]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Estudio de arquitectura y diseño contemporáneo en Barberà del
              Vallès, Barcelona.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/30 hover:text-[#9B7B5C] transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
              {/* Pinterest */}
              <a
                href="https://www.pinterest.es/pallachperezarquitectes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-white/30 hover:text-[#9B7B5C] transition-colors duration-300"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
              {/* Houzz */}
              <a
                href="https://www.houzz.es/professionals/pallachperezarquitectes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Houzz"
                className="text-white/30 hover:text-[#9B7B5C] transition-colors duration-300"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M 11.26 0 L 0 6.516 L 0 24 L 7.547 24 L 7.547 16.875 L 14.5 16.875 L 14.5 24 L 24 24 L 24 11.141 L 11.26 0 Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-[9px] tracking-[0.4em] uppercase text-white/60 font-light mb-5"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Navegación
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[16px] font-light text-white/70 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-[9px] tracking-[0.4em] uppercase text-white/60 font-light mb-5"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Servicios
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[16px] font-light text-white/70 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-[9px] tracking-[0.4em] uppercase text-white/60 font-light mb-5"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+34937192001"
                  className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-[#9B7B5C]" />
                  <span
                    className="text-[16px] font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    +34 937 19 20 01
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pallachperezarquitectes.com"
                  className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-[#9B7B5C]" />
                  <span
                    className="text-[16px] font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    info@pallachperezarquitectes.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/70">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#9B7B5C]" />
                  <address
                    className="text-[16px] font-light not-italic leading-relaxed"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Av. de la Verge de Montserrat, 80
                    <br />
                    08210 Barberà del Vallès
                    <br />
                    Barcelona, España
                  </address>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Newsletter
              </p>
              <form
                className="flex"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Suscripción al newsletter"
              >
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 bg-white/5 border border-white/15 text-white placeholder-white/25 text-[12px] px-3 py-2.5 font-light focus:outline-none focus:border-[#9B7B5C] transition-colors"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                  aria-label="Email para newsletter"
                />
                <button
                  type="submit"
                  aria-label="Suscribirse al newsletter"
                  className="px-4 bg-[#9B7B5C] text-white text-[10px] tracking-widest uppercase font-light hover:bg-[#7A5E43] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[11px] text-white/50 font-light"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            © {new Date().getFullYear()} Pallach Perez Arquitectes S.L. Todos los derechos reservados.
          </p>
          <nav className="flex flex-wrap gap-5 justify-center" aria-label="Legal">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[10.5px] text-white/50 hover:text-white/60 font-light transition-colors duration-300"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
