import Link from 'next/link'

const calculators = [
  {
    href: '/calculadoras/calorias',
    icon: 'F',
    title: 'Calorias diarias',
    description: 'Estime seu gasto para secar ou ganhar massa.',
  },
  {
    href: '/calculadoras/macros',
    icon: 'M',
    title: 'Macros',
    description: 'Distribua proteina, carboidrato e gordura.',
  },
  {
    href: '/calculadoras/proteina',
    icon: 'P',
    title: 'Proteina diaria',
    description: 'Veja a meta de proteina por peso e objetivo.',
  },
  {
    href: '/calculadoras/creatina',
    icon: 'C',
    title: 'Creatina',
    description: 'Calcule dose de manutencao e saturacao.',
  },
]

export function CalculatorQuickLinks({ className = '' }: { className?: string }) {
  return (
    <section className={`my-10 ${className}`}>
      <div className="bg-black px-5 py-3 mb-5 inline-block border-4 border-black">
        <h2 className="text-xl sm:text-2xl font-black text-yellow-400 uppercase">
          Calculadoras Uteis
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {calculators.map((calculator) => (
          <Link key={calculator.href} href={calculator.href} className="group block">
            <div className="h-full bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[2px_2px_0_0_#000]">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border-4 border-black bg-lime-400 text-lg font-black text-black">
                  {calculator.icon}
                </span>
                <div>
                  <h3 className="font-black uppercase text-black">{calculator.title}</h3>
                  <p className="mt-1 text-sm font-bold text-gray-700">{calculator.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
