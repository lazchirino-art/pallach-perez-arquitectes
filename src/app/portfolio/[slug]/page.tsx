import ProjectClient from './ProjectClient'

const slugs = [
  'can-malagrida',
  'reforma-eixample',
  'oficinas-arc',
  'villa-montserrat',
  'interior-gracia',
  'hotel-boutique',
  'casa-bages',
  'reforma-sarria',
]

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectClient slug={params.slug} />
}
