import BlogClient from './BlogClient'

const slugs = [
  'tendencias-arquitectura-2024',
  'como-planificar-reforma',
  'arquitectura-sostenible',
  'interiorismo-minimalista',
  'licencias-urbanisticas',
  'eficiencia-energetica',
]

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  return <BlogClient slug={params.slug} />
}
