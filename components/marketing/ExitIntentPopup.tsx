'use client';

import { useState, useEffect } from 'react';
import { X, Download, Gift } from 'lucide-react';
import { trackExitIntentShow, trackExitIntentConversion, trackLeadMagnetDownload } from '@/lib/facebook-pixel';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [contact, setContact] = useState('');
  const [contactType, setContactType] = useState<'email' | 'phone' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Verificar se usuário já viu o popup
    const hasSeenPopup = localStorage.getItem('leadMagnetShown');
    if (hasSeenPopup) return;

    // Mostrar popup após 8 segundos na página
    const timer = setTimeout(() => {
      setIsVisible(true);
      trackExitIntentShow();
      localStorage.setItem('leadMagnetShown', 'true');
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  // Detectar tipo de contato (email ou telefone)
  useEffect(() => {
    if (!contact) {
      setContactType(null);
      setError('');
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(contact)) {
      setContactType('email');
      setError('');
      return;
    }

    // Validar telefone brasileiro (11 dígitos com DDD)
    const phoneRegex = /^(\d{2})?\s?9?\d{4}[-\s]?\d{4}$/;
    const cleanPhone = contact.replace(/\D/g, '');
    if (cleanPhone.length >= 10 && phoneRegex.test(contact)) {
      setContactType('phone');
      setError('');
      return;
    }

    // Se não é nenhum dos dois
    if (contact.length > 5) {
      setContactType(null);
      setError('Digite um email válido OU celular (11) 99999-9999');
    }
  }, [contact]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactType) {
      setError('Digite um email válido OU celular com DDD');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          contact, 
          contactType,
          leadMagnet: 'top-10-suplementos-2025' 
        }),
      });

      if (response.ok) {
        trackExitIntentConversion();
        trackLeadMagnetDownload('Top 10 Suplementos 2025');
        setIsSubmitted(true);
        
        // Download imediato - HTML com design profissional
        window.open('/downloads/top-10-suplementos-2025.html', '_blank');
        
        // Fechar popup após 3 segundos
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        setError('Erro ao processar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao capturar lead:', error);
      setError('Erro ao processar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-300 overflow-y-auto">
      <div className="relative w-full max-w-md my-8 bg-yellow-400 border-4 border-black shadow-[8px_8px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] animate-in slide-in-from-bottom-8 duration-500">
        {/* Botão Fechar */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 border-2 sm:border-4 border-black shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
        </button>

        <div className="bg-white border-4 border-black p-4 sm:p-6">
          {!isSubmitted ? (
            <>
              {/* Ícone + Título */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 border-3 sm:border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] mb-3">
                  <Gift className="w-7 h-7 sm:w-9 sm:h-9 text-white" strokeWidth={3} />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase mb-1 sm:mb-2 leading-tight">
                  🎁 Presente Grátis!
                </h2>
                <p className="text-sm sm:text-base font-bold text-black">
                  Pegue nosso <span className="bg-yellow-400 px-1 sm:px-2 py-0.5 sm:py-1 border-2 border-black text-xs sm:text-base">PDF EXCLUSIVO</span>
                </p>
              </div>

              {/* Oferta */}
              <div className="bg-cyan-400 border-3 sm:border-4 border-black p-3 sm:p-4 mb-4 sm:mb-6 shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]">
                <h3 className="text-base sm:text-lg font-black text-black mb-2 sm:mb-3 flex items-center gap-2 uppercase">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                  Top 10 Suplementos 2025
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-black font-bold text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-black font-black text-sm sm:text-base">✅</span>
                    <span>Análise completa de custo-benefício</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black font-black text-sm sm:text-base">✅</span>
                    <span>Doses recomendadas com tabelas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black font-black text-sm sm:text-base">✅</span>
                    <span>Economize até R$ 300/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black font-black text-sm sm:text-base">✅</span>
                    <span>Links diretos para comprar</span>
                  </li>
                </ul>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-black text-black uppercase mb-1.5 sm:mb-2">
                    📧 Email OU 📱 Celular:
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="email OU (11) 99999-9999"
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border-3 sm:border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold text-sm sm:text-base"
                  />
                  {contactType && (
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold text-green-600">
                      {contactType === 'email' ? '✅ Email válido' : '✅ Telefone válido'}
                    </p>
                  )}
                  {error && (
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold text-red-600">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !contactType}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black py-3 sm:py-4 px-4 sm:px-6 border-3 sm:border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] sm:hover:shadow-[3px_3px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] sm:hover:translate-x-[3px] sm:hover:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase text-sm sm:text-base"
                >
                  {isSubmitting ? 'Enviando...' : '📥 Baixar PDF Grátis'}
                </button>
              </form>

              {/* Garantia */}
              <p className="text-[10px] sm:text-xs text-center text-gray-700 mt-3 sm:mt-4 font-bold">
                🔒 Seguro. Sem spam. Seus dados protegidos.
              </p>
            </>
          ) : (
            /* Sucesso */
            <div className="text-center py-6 sm:py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-500 border-3 sm:border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] mb-3 sm:mb-4">
                <Download className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-2 sm:mb-3 uppercase">
                🎉 Sucesso!
              </h3>
              <p className="text-sm sm:text-base font-bold text-black px-4">
                Seu PDF está sendo baixado...<br />
                Verifique a pasta de Downloads!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
