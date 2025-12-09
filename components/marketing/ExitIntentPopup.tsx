'use client';

import { useState, useEffect } from 'react';
import { X, Download, Gift } from 'lucide-react';
import { trackExitIntentShow, trackExitIntentConversion, trackLeadMagnetDownload } from '@/lib/facebook-pixel';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Verificar se usuário já viu o popup (localStorage)
    const hasSeenPopup = localStorage.getItem('exitIntentShown');
    if (hasSeenPopup) return;

    let exitIntentTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detectar quando mouse sai pela parte superior da tela (tentativa de fechar aba)
      if (e.clientY <= 0 && !exitIntentTriggered) {
        exitIntentTriggered = true;
        setIsVisible(true);
        trackExitIntentShow();
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Adicionar listener após 5 segundos (evitar trigger imediato)
    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar email para API/backend (você pode integrar com Mailchimp, ConvertKit, etc)
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, leadMagnet: 'top-10-suplementos-2025' }),
      });

      if (response.ok) {
        trackExitIntentConversion();
        trackLeadMagnetDownload('Top 10 Suplementos 2025');
        setIsSubmitted(true);
        
        // Redirecionar para download após 2 segundos
        setTimeout(() => {
          window.open('/downloads/top-10-suplementos-2025.pdf', '_blank');
          setIsVisible(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Erro ao capturar lead:', error);
      alert('Erro ao processar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg mx-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 animate-in slide-in-from-bottom-4 duration-300">
        {/* Botão Fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Ícone de Presente */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Título */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
              🎁 Espere! Presente Grátis Para Você
            </h2>

            {/* Descrição */}
            <p className="text-center text-gray-600 mb-6">
              Antes de sair, pegue nosso <strong className="text-emerald-600">PDF exclusivo:</strong>
            </p>

            {/* Oferta Destacada */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 mb-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Os 10 Melhores Suplementos de 2025
              </h3>
              <ul className="space-y-2 text-sm text-emerald-50">
                <li>✅ Análise completa de custo-benefício</li>
                <li>✅ Doses recomendadas (com tabelas)</li>
                <li>✅ Marcas confiáveis vs falsificações</li>
                <li>✅ Economize R$ 300/mês cortando desperdícios</li>
                <li>✅ Estudos científicos que comprovam eficácia</li>
              </ul>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : '📥 Baixar PDF Grátis Agora'}
              </button>
            </form>

            {/* Garantias */}
            <p className="text-xs text-center text-gray-500 mt-4">
              🔒 100% seguro. Sem spam. Cancele quando quiser.
            </p>
          </>
        ) : (
          /* Sucesso */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🎉 Sucesso!
            </h3>
            <p className="text-gray-600">
              Seu PDF está sendo baixado...<br />
              Verifique também sua caixa de entrada!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
