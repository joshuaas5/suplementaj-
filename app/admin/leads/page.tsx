'use client';

import { useState, useEffect } from 'react';
import { Download, Mail, Phone, Calendar, ExternalLink } from 'lucide-react';

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

  useEffect(() => {
    fetchLeads();
  }, []);

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

  const exportToCSV = () => {
    if (!data?.leads.length) return;

    const csv = [
      ['ID', 'Tipo', 'Contato', 'Lead Magnet', 'Data/Hora', 'Origem'],
      ...data.leads.map(lead => [
        lead.id,
        lead.contactType === 'email' ? 'Email' : 'Telefone',
        lead.contact,
        lead.leadMagnet,
        new Date(lead.timestamp).toLocaleString('pt-BR'),
        lead.referer || 'Direto',
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads-suplementaja-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

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
            <button
              onClick={exportToCSV}
              className="bg-black text-yellow-400 font-black px-6 py-3 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Exportar CSV
            </button>
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
