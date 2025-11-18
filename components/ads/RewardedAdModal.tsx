'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface RewardedAdModalProps {
  onComplete: () => void
  waitTime?: number // segundos
}

export function RewardedAdModal({ onComplete, waitTime = 8 }: RewardedAdModalProps) {
  const [timeLeft, setTimeLeft] = useState(waitTime)
  const [canClose, setCanClose] = useState(false)
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    // Carrega o ad
    if (adsenseId) {
      try {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [adsenseId])

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanClose(true)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanClose(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const handleClose = () => {
    if (canClose) {
      onComplete()
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white border-8 border-black shadow-[12px_12px_0_0_#000] max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-yellow-400 border-b-4 border-black p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase mb-2">
              ⏳ Quase lá!
            </h2>
            <p className="text-black font-bold">
              {canClose
                ? 'Seus resultados estão prontos! 🎉'
                : `Aguarde ${timeLeft}s para ver seus resultados...`}
            </p>
          </div>
          {canClose && (
            <button
              onClick={handleClose}
              className="bg-black p-3 border-2 border-black hover:scale-110 transition-transform"
              aria-label="Fechar"
            >
              <X className="w-6 h-6 text-yellow-400" />
            </button>
          )}
        </div>

        {/* Ad Content */}
        <div className="p-6">
          {!canClose && (
            <div className="bg-cyan-400 border-4 border-black p-6 mb-6 text-center">
              <p className="text-black font-bold text-lg mb-3">
                💡 Enquanto isso, confira nosso anunciante:
              </p>
              <div className="bg-white border-2 border-black p-3 inline-block">
                <p className="text-sm font-bold text-black">
                  ⏰ {timeLeft} segundo{timeLeft !== 1 ? 's' : ''} restante{timeLeft !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          )}

          {/* AdSense Ad */}
          {adsenseId ? (
            <div className="min-h-[250px] sm:min-h-[300px] bg-gray-50 border-4 border-black flex items-center justify-center">
              <ins
                className="adsbygoogle"
                style={{
                  display: 'block',
                  minHeight: '250px',
                }}
                data-ad-client={adsenseId}
                data-ad-slot="YOUR_REWARDED_AD_SLOT" // Substituir quando tiver
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-lime-400 to-cyan-400 border-4 border-black p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
              <div className="bg-black px-8 py-4 mb-6 -rotate-2">
                <h3 className="text-3xl font-black text-yellow-400 uppercase">
                  📢 Espaço Publicitário
                </h3>
              </div>
              <div className="bg-white border-4 border-black p-6 max-w-md">
                <p className="text-black font-bold mb-4">
                  Este site é 100% gratuito e se mantém através de anúncios.
                </p>
                <p className="text-sm text-black font-bold">
                  Obrigado por aguardar! Seus resultados personalizados estão sendo preparados... 🎯
                </p>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          {!canClose && (
            <div className="mt-6">
              <div className="bg-gray-300 border-4 border-black h-8 overflow-hidden">
                <div
                  className="bg-lime-400 h-full transition-all duration-1000 flex items-center justify-center"
                  style={{
                    width: `${((waitTime - timeLeft) / waitTime) * 100}%`,
                  }}
                >
                  <span className="text-black font-black text-xs uppercase">
                    {Math.round(((waitTime - timeLeft) / waitTime) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* CTA quando pode fechar */}
          {canClose && (
            <div className="mt-6 text-center">
              <Button
                variant="primary"
                size="lg"
                onClick={handleClose}
                className="text-xl px-12 py-6 w-full sm:w-auto"
              >
                ✅ Ver Meus Resultados Agora!
              </Button>
              <p className="text-sm text-gray-600 mt-4 font-bold">
                Obrigado por apoiar o Suplementa Já! 💚
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
