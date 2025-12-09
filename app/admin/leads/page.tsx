'use client';

import { useState, useEffect } from 'react';
import { Download, Mail, Phone, Calendar, ExternalLink, Lock } from 'lucide-react';

interface Lead {
  id: string;
  contact: string;
  contactType: 'email' | 'phone';
  leadMagnet: string;
  source: string;
  timestamp: string;
  userAgent?: string;
  referer?: string;
}

interface LeadsData {
  leads: Lead[];
  stats: {
    total: number;
    emails: number;
    phones: number;
    ultimoLead: Lead | null;
  };
}

export default function AdminLeadsPage() {
  const [data, setData] = useState<LeadsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const authenticated = sessionStorage.getItem('admin_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        sessionStorage.setItem('admin_authenticated', 'true');
        setIsAuthenticated(true);
        fetchLeads();
      } else {
        setAuthError('❌ Senha incorreta');
        setLoading(false);
      }
    } catch (err) {
      setAuthError('Erro ao autenticar');
      setLoading(false);
      console.error(err);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
    setPassword('');
  };

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/admin/leads');
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        setError('Erro ao carregar leads');
      }
    } catch (err) {
      setError('Erro de conexão');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const exportToJSON = () => {
    if (!data?.leads.length) return;

    const exportData = {
      exportadoEm: new Date().toLocaleString('pt-BR'),
      totalLeads: data.stats.total,
      estatisticas: {
        emails: data.stats.emails,
        telefones: data.stats.phones,
        ultimoLead: data.stats.ultimoLead ? new Date(data.stats.ultimoLead.timestamp).toLocaleString('pt-BR') : null,
      },
      leads: data.leads.map(lead => ({
        id: lead.id,
        tipo: lead.contactType === 'email' ? 'Email' : 'Telefone',
        contato: lead.contact,
        leadMagnet: lead.leadMagnet,
        dataHora: new Date(lead.timestamp).toLocaleString('pt-BR'),
        origem: lead.referer || 'Direto',
        navegador: lead.userAgent || 'Não informado',
      }))
    };

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads-suplementaja-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  // Tela de Login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-yellow-400 border-4 border-black shadow-[12px_12px_0_0_#000] p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-black border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <Lock className="w-10 h-10 text-yellow-400" strokeWidth={3} />
              </div>
              <h1 className="text-3xl font-black text-black uppercase mb-2">
                🔒 Área Restrita
              </h1>
              <p className="text-black font-bold">
                Painel Administrativo de Leads
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-black text-black uppercase mb-2">
                  Senha de Acesso:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-cyan-400 font-bold"
                  autoFocus
                />
              </div>

              {authError && (
                <div className="bg-red-500 border-4 border-black p-3">
                  <p className="text-white font-black text-center">{authError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-yellow-400 font-black py-4 px-6 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all disabled:opacity-50 uppercase text-lg"
              >
                {loading ? 'Verificando...' : '🔓 Entrar'}
              </button>
            </form>

            <div className="mt-6 bg-cyan-400 border-4 border-black p-4">
              <p className="text-xs text-black font-bold text-center">
                🔒 Acesso restrito ao administrador.<br />
                Senha configurada em .env.local
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-black font-bold">Carregando leads...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-100 border-4 border-red-600 p-8 text-center max-w-md">
          <p className="text-red-600 font-bold text-xl">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-yellow-400 border-4 border-black shadow-[8px_8px_0_0_#000] p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-black text-black uppercase mb-2">
                📊 Painel de Leads
              </h1>
              <p className="text-black font-bold">
                Todos os contatos capturados para remarketing
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportToJSON}
                className="bg-black text-yellow-400 font-black px-6 py-3 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                💾 Exportar JSON
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white font-black px-6 py-3 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
              >
                🔒 Sair
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        {data?.stats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-4 border-black p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-lime-400 border-2 border-black flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 uppercase">Total Leads</p>
                  <p className="text-3xl font-black text-black">{data.stats.total}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-cyan-400 border-2 border-black flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 uppercase">Emails</p>
                  <p className="text-3xl font-black text-black">{data.stats.emails}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-yellow-400 border-2 border-black flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 uppercase">Telefones</p>
                  <p className="text-3xl font-black text-black">{data.stats.phones}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lista de Leads */}
        <div className="bg-white border-4 border-black">
          {data?.leads && data.leads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-yellow-400">
                    <th className="px-4 py-3 text-left font-black uppercase text-sm border-b-4 border-black">
                      Tipo
                    </th>
                    <th className="px-4 py-3 text-left font-black uppercase text-sm border-b-4 border-black">
                      Contato
                    </th>
                    <th className="px-4 py-3 text-left font-black uppercase text-sm border-b-4 border-black">
                      Lead Magnet
                    </th>
                    <th className="px-4 py-3 text-left font-black uppercase text-sm border-b-4 border-black">
                      Data/Hora
                    </th>
                    <th className="px-4 py-3 text-left font-black uppercase text-sm border-b-4 border-black">
                      Origem
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.leads.map((lead, index) => (
                    <tr
                      key={lead.id}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-cyan-50'}
                    >
                      <td className="px-4 py-3 border-b-2 border-black">
                        <div className="flex items-center gap-2">
                          {lead.contactType === 'email' ? (
                            <Mail className="w-4 h-4 text-cyan-600" />
                          ) : (
                            <Phone className="w-4 h-4 text-green-600" />
                          )}
                          <span className="font-bold text-black text-xs uppercase">
                            {lead.contactType === 'email' ? 'Email' : 'Telefone'}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 border-b-2 border-black">
                        <span className="font-bold text-black">{lead.contact}</span>
                      </td>
                      <td className="px-4 py-3 border-b-2 border-black">
                        <span className="text-sm font-bold text-gray-700">
                          {lead.leadMagnet}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b-2 border-black">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-bold text-gray-700">
                            {new Date(lead.timestamp).toLocaleString('pt-BR')}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 border-b-2 border-black">
                        {lead.referer ? (
                          <div className="flex items-center gap-1">
                            <ExternalLink className="w-3 h-3 text-gray-600" />
                            <span className="text-xs font-bold text-gray-600 truncate max-w-[200px]">
                              {new URL(lead.referer).pathname}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs font-bold text-gray-500">Direto</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-2xl font-black text-gray-400 mb-2">📭</p>
              <p className="text-black font-bold">Nenhum lead capturado ainda</p>
              <p className="text-sm text-gray-600 mt-2">
                Os contatos aparecerão aqui quando alguém baixar o PDF
              </p>
            </div>
          )}
        </div>

        {/* Info sobre remarketing */}
        <div className="mt-8 bg-cyan-100 border-4 border-black p-6">
          <h3 className="text-xl font-black text-black uppercase mb-3">
            💡 Como usar esses leads:
          </h3>
          <ul className="space-y-2 text-black font-bold">
            <li className="flex items-start gap-2">
              <span>📧</span>
              <span><strong>Emails:</strong> Importar no Mailchimp/ConvertKit para campanhas</span>
            </li>
            <li className="flex items-start gap-2">
              <span>📱</span>
              <span><strong>Telefones:</strong> Criar lista de transmissão no WhatsApp Business</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🎯</span>
              <span><strong>Remarketing:</strong> Upload no Facebook Ads (Custom Audience)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>💾</span>
              <span><strong>Backup:</strong> Exportar CSV semanalmente para segurança</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
