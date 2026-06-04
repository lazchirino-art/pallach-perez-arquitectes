# Pallach Perez Arquitectes — Estructura completa del proyecto

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| Lenguaje | TypeScript |
| Estilos | TailwindCSS v4 (config en CSS, sin tailwind.config.ts) |
| Animaciones | Framer Motion |
| Iconos | lucide-react |
| Fuentes | Google Fonts via next/font (Cormorant Garamond + DM Sans) |
| Imágenes | next/image + Unsplash (URLs externas) |
| Backend | Ninguno — 100% estático |

---

## Árbol de archivos

```
pallach-arquitectes/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Layout raíz: fuentes, SEO global, Navbar, Footer
│   │   ├── globals.css                 # Design system: @theme, tipografía, utilidades
│   │   ├── page.tsx                    # / → Home
│   │   ├── sitemap.ts                  # /sitemap.xml → 21 URLs
│   │   ├── robots.ts                   # /robots.txt
│   │   │
│   │   ├── sobre-nosotros/
│   │   │   └── page.tsx                # /sobre-nosotros
│   │   │
│   │   ├── servicios/
│   │   │   └── page.tsx                # /servicios
│   │   │
│   │   ├── portfolio/
│   │   │   ├── page.tsx                # /portfolio (grid con filtros)
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # /portfolio/[slug] (detalle de proyecto)
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx                # /blog (listado de artículos)
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # /blog/[slug] (artículo individual)
│   │   │
│   │   ├── contacto/
│   │   │   └── page.tsx                # /contacto (formulario + mapa)
│   │   │
│   │   ├── privacidad/
│   │   │   └── page.tsx                # /privacidad (RGPD)
│   │   │
│   │   ├── cookies/
│   │   │   └── page.tsx                # /cookies
│   │   │
│   │   ├── aviso-legal/
│   │   │   └── page.tsx                # /aviso-legal (LSSICE)
│   │   │
│   │   └── terminos/
│   │       └── page.tsx                # /terminos
│   │
│   └── components/
│       ├── Navbar.tsx                  # Navegación sticky + menú mobile
│       └── Footer.tsx                  # Footer 4 columnas + newsletter
│
├── public/
│   └── og-image.jpg                    # Imagen Open Graph (a añadir)
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── ESTRUCTURA.md                       # Este archivo
```

---

## Páginas

### `/` — Home
**Archivo:** `src/app/page.tsx` · `'use client'`

| Sección | Descripción |
|---|---|
| Hero | Imagen parallax a pantalla completa, H1, 2 CTAs |
| Stats | 4 cifras: años, proyectos, satisfacción, área |
| Editorial Intro | Texto largo + imagen lateral, link a Sobre Nosotros |
| Servicios | Grid 3 columnas, 6 servicios con numeración |
| Proyectos destacados | Layout asimétrico: 1 grande + 2 pequeños |
| Filosofía | Sección oscura (charcoal) con cita e imagen |
| Proceso | 5 pasos horizontales con scroll |
| Testimonios | Grid 1→2→3 col con 3 testimonios |
| CTA final | Banda oscura con enlace a contacto |

**Hooks:** `useScroll`, `useTransform` (parallax), `useRef`, `useState`, `useEffect`

---

### `/sobre-nosotros` — Sobre Nosotros
**Archivo:** `src/app/sobre-nosotros/page.tsx` · Server Component

| Sección | Descripción |
|---|---|
| Hero | Fondo charcoal, H1 en cursiva |
| Historia | 2 columnas: texto + imagen |
| Valores | 4 valores con numeración |
| Equipo | 3 tarjetas de miembros con foto y cargo |
| Reconocimientos | Lista de premios y certificaciones |
| CTA | Enlace a contacto |

---

### `/servicios` — Servicios
**Archivo:** `src/app/servicios/page.tsx` · Server Component

| Sección | Descripción |
|---|---|
| Hero | Fondo charcoal, H1 en cursiva |
| 8 bloques de servicio | Alternando imagen-texto y texto-imagen |
| FAQ | Acordeón con AnimatePresence (necesita `'use client'`) |
| CTA | Enlace a contacto |

**Servicios listados:**
1. Arquitectura Residencial
2. Arquitectura Comercial
3. Reformas Integrales
4. Interiorismo
5. Dirección de Obra
6. Diseño 3D y Renders
7. Legalización y Licencias
8. Consultoría Arquitectónica

---

### `/portfolio` — Portfolio (listado)
**Archivo:** `src/app/portfolio/page.tsx` · `'use client'`

| Sección | Descripción |
|---|---|
| Hero | Fondo charcoal, H1 "Portfolio" |
| Filtros | Barra de categorías con animación `layoutId` |
| Grid de proyectos | 1→2→3 col, 8 proyectos |
| CTA | Banda oscura |

**Categorías:** Todos · Residencial · Comercial · Reformas · Interiorismo

**Proyectos (hardcodeados):**
| Slug | Título | Categoría | Año |
|---|---|---|---|
| can-malagrida | Can Malagrida | Residencial | 2023 |
| reforma-eixample | Reforma Eixample | Reformas | 2023 |
| oficinas-arc | Oficinas Arc | Comercial | 2022 |
| villa-montserrat | Villa Montserrat | Residencial | 2022 |
| interior-gracia | Interior Gràcia | Interiorismo | 2022 |
| hotel-boutique | Hotel Boutique Valles | Comercial | 2021 |
| casa-bages | Casa Bages | Residencial | 2021 |
| reforma-sarria | Reforma Sarrià | Reformas | 2021 |

---

### `/portfolio/[slug]` — Proyecto individual
**Archivo:** `src/app/portfolio/[slug]/page.tsx` · `'use client'`

| Sección | Descripción |
|---|---|
| Breadcrumb | Home → Portfolio → Nombre |
| Hero imagen | Imagen a pantalla completa |
| Info | Categoría, año, localización, descripción |
| Galería | Grid 1→2→3 col con 6 imágenes |
| CTA | Enlace a contacto |

---

### `/blog` — Blog / Revista (listado)
**Archivo:** `src/app/blog/page.tsx` · Server Component

| Sección | Descripción |
|---|---|
| Hero | Fondo charcoal, H1 "Revista" |
| Artículo destacado | Tarjeta grande con imagen |
| Grid de artículos | 5 artículos restantes en grid 2→3 col |

**Artículos (hardcodeados):**
| Slug | Título |
|---|---|
| tendencias-arquitectura-2024 | Tendencias en arquitectura residencial 2024 |
| reforma-integral-guia | Guía completa para una reforma integral |
| materiales-sostenibles | Materiales sostenibles en arquitectura |
| interiorismo-minimalista | Interiorismo minimalista: menos es más |
| licencias-obras-barcelona | Licencias de obra en Barcelona |
| arquitectura-bioclimatica | Arquitectura bioclimática en el Mediterráneo |

---

### `/blog/[slug]` — Artículo individual
**Archivo:** `src/app/blog/[slug]/page.tsx` · `'use client'`

| Sección | Descripción |
|---|---|
| Hero | Imagen + categoría + fecha + tiempo lectura |
| H1 | Título del artículo |
| Cuerpo | Texto largo simulado en párrafos |
| Compartir | Botones SVG para Twitter y LinkedIn |
| Artículos relacionados | Grid 1→2→3 col |

---

### `/contacto` — Contacto
**Archivo:** `src/app/contacto/page.tsx` · `'use client'`

| Sección | Descripción |
|---|---|
| Hero | Fondo charcoal |
| Grid principal | Formulario (izq) + info de contacto (der) |
| Formulario | Nombre, email, teléfono, servicio, mensaje, checkbox RGPD |
| Estado del formulario | pending / success / error |
| Info de contacto | Dirección, teléfono, email, horario, redes sociales |
| Mapa | iframe Google Maps responsive (16:9) |
| FAQ | Preguntas frecuentes |

**Datos de contacto:**
- Dirección: Av. de la Verge de Montserrat, 80 — Barberà del Vallès 08210
- Teléfono: +34 937 192 001
- Email: info@pallachperezarquitectes.com
- Horario: Lun–Vie 9:00–18:00

---

### Páginas legales

| Ruta | Archivo | Contenido |
|---|---|---|
| `/privacidad` | privacidad/page.tsx | Política de privacidad RGPD |
| `/cookies` | cookies/page.tsx | Política de cookies con tabla de 6 cookies |
| `/aviso-legal` | aviso-legal/page.tsx | Aviso legal LSSICE |
| `/terminos` | terminos/page.tsx | Términos y condiciones de uso |

---

## Componentes globales

### `Navbar.tsx` · `'use client'`
- Sticky, transparente sobre hero, fondo cream al hacer scroll (umbral: 80px)
- Logo: "PALLACH PEREZ" (Cormorant Garamond) + "Arquitectes" (DM Sans)
- Links: Inicio · Sobre Nosotros · Servicios · Portfolio · Revista · Contacto
- Menú mobile: overlay full-screen charcoal con AnimatePresence + stagger

### `Footer.tsx` · `'use client'`
- Grid 4 columnas (apilado en mobile)
- Col 1: Logo + descripción + redes sociales (SVG custom: Instagram, LinkedIn, Facebook)
- Col 2: Navegación principal
- Col 3: Servicios
- Col 4: Contacto + formulario newsletter
- Franja inferior: copyright + links legales

---

## Design system (`globals.css`)

### Colores
| Token | Hex | Uso |
|---|---|---|
| `--color-cream` | `#F5F2EC` | Fondo principal |
| `--color-cream-dark` | `#EAE5DB` | Fondo secundario |
| `--color-charcoal` | `#1A1A1A` | Texto principal, secciones oscuras |
| `--color-stone` | `#8C8B7E` | Texto secundario |
| `--color-copper` | `#9B7B5C` | Acento principal |
| `--color-copper-light` | `#C9A882` | Hover del acento |

### Tipografía
| Variable | Familia | Uso |
|---|---|---|
| `--font-display` | Cormorant Garamond | H1–H5, títulos, elementos editoriales |
| `--font-sans` | DM Sans | Cuerpo, etiquetas, UI |

- Body: 17px / line-height 1.7
- Párrafos: 1rem / line-height 1.75 / color stone

### Espaciado personalizado
- `--spacing-section`: 8rem (secciones principales)
- `section-py`: responsive — 4rem mobile / 6rem tablet / 8rem desktop

---

## SEO

### `layout.tsx`
- `metadataBase`: `https://www.pallachperezarquitectes.com`
- Title template: `%s | Pallach Perez Arquitectes`
- OpenGraph completo (locale es_ES, imagen 1200×630)
- Twitter Card: `summary_large_image`
- Robots: index + follow
- Canonical URL
- Geo meta tags (ES-CT, Barberà del Vallès, coordenadas)
- JSON-LD Schema.org `ArchitecturalService` con dirección, horario, servicios, redes

### `sitemap.ts`
21 URLs generadas estáticamente con `lastModified` y `changeFrequency`.

### `robots.ts`
Allow all + sitemap URL.

---

## Pendiente — sin contenido real

### Redes sociales — URLs inventadas (confirmar con el cliente)

| Red | URL actual en el código |
|---|---|
| Instagram | https://www.instagram.com/pallachperezarquitectes |
| LinkedIn | https://www.linkedin.com/company/pallachperezarquitectes |
| Pinterest (Contacto) | https://www.pinterest.com/pallachperezarquitectes |
| Pinterest (Footer) | https://www.pinterest.es/pallachperezarquitectes |
| Houzz (Footer) | https://www.houzz.es/professionals/pallachperezarquitectes |
| WhatsApp (Contacto) | https://wa.me/34937192001 |

### Formularios — sin backend, no envían nada

| Formulario | Archivo | Estado |
|---|---|---|
| Contacto | `src/app/contacto/page.tsx` | Solo visual, no envía email |
| Newsletter Footer | `src/components/Footer.tsx` | Campo decorativo |
| Newsletter Blog | `src/app/blog/page.tsx` | Campo decorativo |

### Blog — artículos con cuerpo genérico

Todos comparten el mismo texto de cuerpo. Necesitan contenido real:

| URL | Título |
|---|---|
| `/blog/tendencias-arquitectura-2024` | Tendencias en arquitectura residencial 2024 |
| `/blog/reforma-integral-guia` | Guía completa para una reforma integral |
| `/blog/materiales-sostenibles` | Materiales sostenibles en arquitectura |
| `/blog/interiorismo-minimalista` | Interiorismo minimalista: menos es más |
| `/blog/licencias-obras-barcelona` | Licencias de obra en Barcelona |
| `/blog/arquitectura-bioclimatica` | Arquitectura bioclimática en el Mediterráneo |

### Portfolio — proyectos con descripción y galería genérica

Todos usan imágenes de Unsplash y la misma descripción. Necesitan fotos y textos reales:

| URL | Proyecto |
|---|---|
| `/portfolio/can-malagrida` | Can Malagrida |
| `/portfolio/reforma-eixample` | Reforma Eixample |
| `/portfolio/oficinas-arc` | Oficinas Arc |
| `/portfolio/villa-montserrat` | Villa Montserrat |
| `/portfolio/interior-gracia` | Interior Gràcia |
| `/portfolio/hotel-boutique` | Hotel Boutique Valles |
| `/portfolio/casa-bages` | Casa Bages |
| `/portfolio/reforma-sarria` | Reforma Sarrià |

### Otros pendientes

| Elemento | Problema | Solución |
|---|---|---|
| `privacidad@pallachperezarquitectes.com` | Buzón inexistente (aparece en `/privacidad` y `/cookies`) | Crear buzón o redirigir a `info@` |
| `/public/og-image.jpg` | Archivo no existe — WhatsApp/redes mostrarán previsualización vacía | Diseñar imagen 1200×630 y subir a `/public` |

---

## Lo que falta / próximos pasos

| Funcionalidad | Prioridad | Tecnología sugerida |
|---|---|---|
| Imagen OG real (`/public/og-image.jpg`) | Alta | Diseñar 1200×630px y subir a `/public` |
| Redes sociales reales del cliente | Alta | Confirmar URLs con el cliente |
| Formulario de contacto funcional | Alta | Next.js Route Handler + Resend |
| Newsletter funcional | Media | Mailchimp / Brevo API |
| Contenido real en artículos del blog | Media | Textos del cliente o redacción |
| Fotos y textos reales en portfolio | Media | Fotografías del cliente |
| Email `privacidad@` | Media | Crear buzón en el hosting |
| Blog con CMS | Baja | Notion API / Sanity / Markdown |
| Portfolio editable | Baja | Supabase + panel de admin |
| Política de cookies interactiva | Baja | cookie-consent library |
| Analytics | Baja | Google Analytics 4 / Plausible |
| Dominio + deploy | Baja | Vercel (recomendado para Next.js) |
