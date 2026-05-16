import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const BASE_URL = "https://www.pallachperezarquitectes.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pallach Perez Arquitectes | Estudio de Arquitectura Barcelona",
    template: "%s | Pallach Perez Arquitectes",
  },
  description:
    "Estudio de arquitectura y diseño contemporáneo en Barberà del Vallès, Barcelona. Especialistas en arquitectura residencial, reformas integrales, interiorismo y dirección de obra.",
  keywords: [
    "arquitectura Barcelona",
    "estudio arquitectura Barcelona",
    "arquitectos Barberà del Vallès",
    "reforma integral Barcelona",
    "interiorismo Barcelona",
    "arquitectura residencial Barcelona",
    "dirección de obra Barcelona",
    "diseño arquitectónico",
    "Pallach Perez Arquitectes",
  ],
  authors: [{ name: "Pallach Perez Arquitectes" }],
  creator: "Pallach Perez Arquitectes",
  publisher: "Pallach Perez Arquitectes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    siteName: "Pallach Perez Arquitectes",
    title: "Pallach Perez Arquitectes | Estudio de Arquitectura Barcelona",
    description:
      "Arquitectura contemporánea que transforma espacios en experiencias. Barberà del Vallès, Barcelona.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pallach Perez Arquitectes — Estudio de Arquitectura en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallach Perez Arquitectes | Arquitectura Barcelona",
    description:
      "Arquitectura contemporánea que transforma espacios en experiencias.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Barberà del Vallès",
    "geo.position": "41.5184;2.1292",
    ICBM: "41.5184, 2.1292",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#F5F2EC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ArchitecturalService",
              name: "Pallach Perez Arquitectes",
              description:
                "Estudio de arquitectura y diseño contemporáneo en Barcelona",
              url: BASE_URL,
              telephone: "+34937192001",
              email: "info@pallachperezarquitectes.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. de la Verge de Montserrat, 80",
                addressLocality: "Barberà del Vallès",
                postalCode: "08210",
                addressRegion: "Barcelona",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.5184",
                longitude: "2.1292",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/pallachperezarquitectes",
                "https://www.linkedin.com/company/pallachperezarquitectes",
              ],
              areaServed: {
                "@type": "City",
                name: "Barcelona",
              },
              serviceType: [
                "Arquitectura residencial",
                "Reformas integrales",
                "Interiorismo",
                "Dirección de obra",
                "Arquitectura comercial",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
