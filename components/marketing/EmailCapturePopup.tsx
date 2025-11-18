'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function EmailCapturePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Verificar se o usuário já fechou ou enviou o formulário
    const hasClosedPopup = localStorage.getItem('emailPopupClosed')
    const hasSubmittedEmail = localStorage.getItem('emailSubmitted')
    const popupShownThisSession = sessionStorage.getItem('emailPopupShown')

    // Se já foi mostrado, fechado ou submetido, NÃO mostrar
    if (hasClosedPopup || hasSubmittedEmail || popupShownThisSession) {
      return
    }

    // Função para abrir o popup (só abre se ainda não foi mostrado)
    const openPopup = () => {
      const alreadyShown = sessionStorage.getItem('emailPopupShown')
      const alreadyClosed = localStorage.getItem('emailPopupClosed')
      const alreadySubmitted = localStorage.getItem('emailSubmitted')

      if (!alreadyShown && !alreadyClosed && !alreadySubmitted) {
        sessionStorage.setItem('emailPopupShown', 'true')
        setIsOpen(true)
      }
    }

    // Abrir após 15 segundos
    const timer = setTimeout(openPopup, 15000)

    // Abrir quando o usuário tentar sair da página (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        openPopup()
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('emailPopupClosed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Enviar para API (que conecta com Brevo)
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          nome,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao processar email')
      }

      // Salvar flag no localStorage para não mostrar popup novamente
      localStorage.setItem('emailSubmitted', 'true')

      // Enviar evento para Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'email_popup',
          value: email,
        })
      }

      setSubmitted(true)

      // Fechar após 3 segundos
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    } catch (error) {
      console.error('Erro ao salvar lead:', error)
      alert('Erro ao processar seu cadastro. Por favor, tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative bg-white border-4 border-black shadow-[8px_8px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] max-w-md w-full p-6 sm:p-8 my-auto transform transition-all animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 transition-colors border-2 border-black"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-block bg-yellow-400 border-4 border-black px-4 py-2 mb-4 -rotate-1">
                <h3 className="text-2xl font-black uppercase">🎯 Lista VIP</h3>
              </div>
              <p className="text-lg font-bold text-gray-900 leading-relaxed">
                Entre na lista <span className="bg-lime-400 px-2 py-1 border-2 border-black">VIP</span> e
                fique por dentro de tudo sobre suplementação!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-bold text-black mb-2 uppercase">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-black mb-2 uppercase"
                >
                  Seu Melhor Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold"
                  placeholder="seu@email.com"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                disabled={loading}
                className="w-full text-lg"
              >
                {loading ? 'Enviando...' : 'Entrar na Lista VIP! 🚀'}
              </Button>

              <p className="text-xs text-gray-600 text-center font-bold">
                ✓ Sem spam. ✓ Cancele quando quiser. ✓ Conteúdo exclusivo.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-block bg-lime-400 border-4 border-black px-6 py-3 mb-4">
              <h3 className="text-3xl font-black">✅ Bem-vindo à Lista VIP!</h3>
            </div>
            <p className="text-lg font-bold text-gray-900 mb-2">
              Obrigado por se cadastrar, {nome}!
            </p>
            <p className="text-gray-600 font-bold">
              Você receberá conteúdos exclusivos em <span className="text-blue-600">{email}</span>
            </p>
            <p className="text-sm text-gray-500 mt-4 font-bold">Fique de olho na sua caixa de entrada! 📬</p>
          </div>
        )}
      </div>
    </div>
  )
}
