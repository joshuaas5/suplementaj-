'use client'

import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react'

interface SocialShareButtonsProps {
  title?: string
  text?: string
  url?: string
  showLabel?: boolean
}

export function SocialShareButtons({
  title = 'Suplementa Já - Descubra suas deficiências nutricionais',
  text = 'Acabei de descobrir minhas deficiências nutricionais com o Suplementa Já! Faça você também, é grátis! 🚀',
  url,
  showLabel = true,
}: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  // URL atual ou fornecida
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedText = encodeURIComponent(text)
  const encodedTitle = encodeURIComponent(title)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)

      // Enviar evento para GA
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'share', {
          method: 'copy_link',
          content_type: 'url',
          item_id: shareUrl,
        })
      }

      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Erro ao copiar link:', error)
    }
  }

  const handleShare = (platform: string, url: string) => {
    // Enviar evento para GA
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'share', {
        method: platform,
        content_type: 'url',
        item_id: shareUrl,
      })
    }

    window.open(url, '_blank', 'width=600,height=400')
  }

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`,
  }

  return (
    <div className="space-y-4">
      {showLabel && (
        <div className="bg-black border-4 border-black px-4 py-2 inline-block">
          <p className="text-yellow-400 font-black text-sm uppercase">🚀 Compartilhe seus resultados</p>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {/* WhatsApp */}
        <button
          onClick={() => handleShare('whatsapp', shareLinks.whatsapp)}
          className="bg-[#25D366] hover:bg-[#1ebe57] border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all px-4 py-3 font-black text-white flex items-center gap-2 transform hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="Compartilhar no WhatsApp"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="hidden sm:inline">WhatsApp</span>
        </button>

        {/* Facebook */}
        <button
          onClick={() => handleShare('facebook', shareLinks.facebook)}
          className="bg-[#1877F2] hover:bg-[#0e68d4] border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all px-4 py-3 font-black text-white flex items-center gap-2 transform hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook className="w-5 h-5" />
          <span className="hidden sm:inline">Facebook</span>
        </button>

        {/* Twitter/X */}
        <button
          onClick={() => handleShare('twitter', shareLinks.twitter)}
          className="bg-black hover:bg-gray-900 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all px-4 py-3 font-black text-white flex items-center gap-2 transform hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="Compartilhar no X (Twitter)"
        >
          <Twitter className="w-5 h-5" />
          <span className="hidden sm:inline">X (Twitter)</span>
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => handleShare('linkedin', shareLinks.linkedin)}
          className="bg-[#0A66C2] hover:bg-[#004182] border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all px-4 py-3 font-black text-white flex items-center gap-2 transform hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="Compartilhar no LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
          <span className="hidden sm:inline">LinkedIn</span>
        </button>

        {/* Copiar Link */}
        <button
          onClick={handleCopyLink}
          className={`${
            copied ? 'bg-lime-400' : 'bg-yellow-400 hover:bg-yellow-300'
          } border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all px-4 py-3 font-black text-black flex items-center gap-2 transform hover:translate-x-[2px] hover:translate-y-[2px]`}
          aria-label="Copiar link"
        >
          {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
          <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar Link'}</span>
        </button>
      </div>

      {showLabel && (
        <div className="bg-cyan-400 border-4 border-black p-4 mt-4">
          <p className="text-black font-bold text-sm leading-relaxed">
            🎯 <span className="bg-white px-2 py-1">Ajude seus amigos!</span> Compartilhe para que
            mais pessoas descubram suas deficiências nutricionais e melhorem sua saúde.
          </p>
        </div>
      )}
    </div>
  )
}
