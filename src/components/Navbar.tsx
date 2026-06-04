'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Revista' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-[#F5F2EC]/96 backdrop-blur-md border-b border-[#DDD8CC]'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ── */}
            <Link href="/" aria-label="Pallach Perez Arquitectes — Inicio" className="shrink-0">
              <img
                src="/logo-pp.svg"
                alt="Pallach Perez Arquitectes"
                style={{ height: '36px', width: 'auto', display: 'block' }}
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-9" aria-label="Navegación principal">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[10.5px] tracking-[0.22em] uppercase font-light transition-all duration-300 group ${
                      transparent ? 'text-white' : 'text-[#1A1A1A]'
                    } ${active ? 'opacity-100' : 'opacity-55 hover:opacity-100'}`}
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#9B7B5C] transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
              <a
                href="tel:+34937192001"
                className={`flex items-center gap-1.5 text-[10px] tracking-wider font-light transition-opacity duration-300 opacity-50 hover:opacity-80 ${
                  transparent ? 'text-white' : 'text-[#1A1A1A]'
                }`}
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                <Phone size={11} />
                937 19 20 01
              </a>
              <Link
                href="/contacto"
                className={`px-5 py-2.5 text-[9.5px] tracking-[0.28em] uppercase font-light border transition-all duration-300 ${
                  transparent
                    ? 'border-white/50 text-white hover:bg-white hover:text-[#1A1A1A]'
                    : 'border-[#9B7B5C] text-[#9B7B5C] hover:bg-[#9B7B5C] hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Solicitar Proyecto
              </Link>
            </nav>

            {/* ── Mobile Toggle ── */}
            <button
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                transparent ? 'text-white' : 'text-[#1A1A1A]'
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col"
          >
            {/* Close */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/10">
              <span
                className="font-display text-white/50 text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Menú
              </span>
              <button
                onClick={toggleMenu}
                aria-label="Cerrar menú"
                className="text-white/70 hover:text-white transition-colors p-2"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col justify-center flex-1 px-10 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 font-display text-4xl font-light leading-tight transition-colors duration-300 ${
                      pathname === link.href
                        ? 'text-[#9B7B5C]'
                        : 'text-white hover:text-[#C9A882]'
                    }`}
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer info */}
            <div className="px-10 pb-10 border-t border-white/10 pt-6">
              <a
                href="tel:+34937192001"
                className="block text-[11px] tracking-[0.3em] uppercase text-white/40 hover:text-white/70 transition-colors font-light"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                +34 937 19 20 01
              </a>
              <p
                className="text-[11px] tracking-[0.2em] uppercase text-white/25 font-light mt-1"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Barberà del Vallès, Barcelona
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
