import Link from 'next/link'

type NutrientLink = {
  slug: string
  title: string
  description: string
}

const fallbackLinks: NutrientLink[] = [
  {
    slug: 'creatina',
    title: 'Creatina',
    description: 'Performance, forca e ganho de massa.',
  },
  {
    slug: 'proteina',
    title: 'Proteina',
    description: 'Base para saciedade, musculos e recuperacao.',
  },
  {
    slug: 'magnesio',
    title: 'Magnesio',
    description: 'Sono, relaxamento e funcao muscular.',
  },
]

export function NutrientQuickLinks({
  title = 'Nutrientes Relacionados',
  items = fallbackLinks,
  className = '',
}: {
  title?: string
  items?: NutrientLink[]
  className?: string
}) {
  return (
    <section className={`bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8 ${className}`}>
      <h3 className="text-xl font-black text-black uppercase mb-4">{title}</h3>
      <div className="grid gap-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/nutrientes/${item.slug}`}
            className="block bg-lime-100 border-2 border-black p-3 transition-colors hover:bg-lime-200"
          >
            <p className="font-black text-black">{item.title}</p>
            <p className="text-sm font-bold text-gray-700">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
