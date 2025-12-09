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
        
        // Download imediato
        window.open('/downloads/top-10-suplementos-2025.pdf', '_blank');
        
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-yellow-400 border-4 border-black shadow-[12px_12px_0_0_#000] animate-in slide-in-from-bottom-8 duration-500">
        {/* Botão Fechar */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 w-10 h-10 bg-red-500 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center"
          aria-label="Fechar"
        >
          <X className="w-6 h-6 text-white" strokeWidth={3} />
        </button>

        <div className="bg-white border-4 border-black p-8">
          {!isSubmitted ? (
            <>
              {/* Ícone + Título */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-black shadow-[6px_6px_0_0_#000] mb-4">
                  <Gift className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-black uppercase mb-2 leading-tight">
                  🎁 Presente Grátis!
                </h2>
                <p className="text-lg font-bold text-black">
                  Pegue nosso <span className="bg-yellow-400 px-2 py-1 border-2 border-black">PDF EXCLUSIVO</span>
                </p>
              </div>

              {/* Oferta */}
              <div className="bg-cyan-400 border-4 border-black p-6 mb-6 shadow-[6px_6px_0_0_#000]">
                <h3 className="text-xl font-black text-black mb-3 flex items-center gap-2 uppercase">
                  <Download className="w-5 h-5" strokeWidth={3} />
                  Top 10 Suplementos 2025
                </h3>
                <ul className="space-y-2 text-black font-bold">
                  <li className="flex items-start gap-2">
                    <span className="text-black font-black">✅</span>
                    <span>Análise completa de custo-benefício</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black font-black">✅</span>
                    <span>Doses recomendadas com tabelas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black font-black">✅</span>
                    <span>Economize até R$ 300/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black font-black">✅</span>
                    <span>Links diretos para comprar com desconto</span>
                  </li>
                </ul>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-black text-black uppercase mb-2">
                    📧 Email OU 📱 Celular:
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="seu@email.com OU (11) 99999-9999"
                    required
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold"
                  />
                  {contactType && (
                    <p className="mt-2 text-sm font-bold text-green-600">
                      {contactType === 'email' ? '✅ Email válido' : '✅ Telefone válido'}
                    </p>
                  )}
                  {error && (
                    <p className="mt-2 text-sm font-bold text-red-600">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !contactType}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black py-4 px-6 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase text-lg"
                >
                  {isSubmitting ? 'Enviando...' : '📥 Baixar PDF Grátis Agora'}
                </button>
              </form>

              {/* Garantia */}
              <p className="text-xs text-center text-gray-700 mt-4 font-bold">
                🔒 Seguro. Sem spam. Seus dados protegidos.
              </p>
            </>
          ) : (
            /* Sucesso */
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 border-4 border-black shadow-[6px_6px_0_0_#000] mb-4">
                <Download className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black text-black mb-3 uppercase">
                🎉 Sucesso!
              </h3>
              <p className="text-lg font-bold text-black">
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
