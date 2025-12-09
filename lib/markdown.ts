/**
 * Processa texto Markdown simples e retorna HTML
 * Suporta: **negrito**, *itálico*, links, quebras de linha
 */
export function formatMarkdown(text: string): string {
  if (!text) return '';

  return text
    // Negrito: **texto** → <strong>texto</strong>
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Itálico: *texto* → <em>texto</em>
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Links: [texto](url) → <a href="url">texto</a>
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="text-cyan-600 hover:text-cyan-700 underline font-bold">$1</a>')
    // Quebras de linha: \n → <br/>
    .replace(/\n/g, '<br/>');
}

/**
 * Processa texto de lista com suporte a Markdown
 */
export function formatListItem(text: string): string {
  return formatMarkdown(text);
}
