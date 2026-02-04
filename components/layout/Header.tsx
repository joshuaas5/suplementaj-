'use client'

import Link from 'next/link'
import { Pill, Menu, X, Calculator } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-yellow-400 border-b-4 border-black sticky top-0 z-50 shadow-[0_4px_0_0_#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform">
            <div className="bg-black p-1.5 sm:p-2 border-2 border-black rotate-3">
              <Pill className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            </div>
            <span className="text-xl sm:text-3xl font-black text-black uppercase tracking-tighter">
              Suplementa <span className="bg-black text-yellow-400 px-1.5 sm:px-2">Já</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <Link href="/avaliacao" className="px-4 py-2 bg-black text-yellow-400 font-black uppercase text-sm border-2 border-black hover:bg-yellow-400 hover:text-black transition-all hover:scale-105">
              Fazer Avaliação
            </Link>
            <Link href="/calculadoras" className="px-4 py-2 bg-cyan-400 text-black font-bold uppercase text-sm border-2 border-black hover:bg-cyan-500 transition-all hover:scale-105 flex items-center gap-1">
              <Calculator className="w-4 h-4" /> Calculadoras
            </Link>
            <Link href="/nutrientes" className="px-4 py-2 bg-purple-400 text-black font-bold uppercase text-sm border-2 border-black hover:bg-purple-500 transition-all hover:scale-105">
              Nutrientes
            </Link>
            <Link href="/blog" className="px-4 py-2 bg-lime-400 text-black font-bold uppercase text-sm border-2 border-black hover:bg-lime-500 transition-all hover:scale-105">
               Central de Suplementos
            </Link>
            <Link href="/sobre" className="px-4 py-2 bg-white text-black font-bold uppercase text-sm border-2 border-black hover:bg-pink-500 hover:text-white transition-all hover:scale-105">
              Sobre
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 bg-black text-yellow-400 border-2 border-black hover:scale-110 transition-transform"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t-4 border-black">
            <div className="flex flex-col gap-3">
              <Link
                href="/avaliacao"
                className="px-4 py-3 bg-black text-yellow-400 font-black uppercase text-center border-2 border-black hover:bg-white hover:text-black transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fazer Avaliação
              </Link>
              <Link
                href="/calculadoras"
                className="px-4 py-3 bg-cyan-400 text-black font-bold uppercase text-center border-2 border-black hover:bg-cyan-500 transition-all flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calculator className="w-5 h-5" /> Calculadoras
              </Link>
              <Link
                href="/nutrientes"
                className="px-4 py-3 bg-purple-400 text-black font-bold uppercase text-center border-2 border-black hover:bg-purple-500 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nutrientes
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 bg-lime-400 text-black font-bold uppercase text-center border-2 border-black hover:bg-lime-500 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                 Central de Suplementos
              </Link>
              <Link
                href="/sobre"
                className="px-4 py-3 bg-white text-black font-bold uppercase text-center border-2 border-black hover:bg-pink-500 hover:text-white transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
