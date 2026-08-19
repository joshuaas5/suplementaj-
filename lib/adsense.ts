/**
 * Identidade pública do AdSense usada pelo site.
 *
 * O ID numérico abaixo já existia no site e também está publicado em
 * public/ads.txt. O ambiente pode sobrescrevê-lo com o mesmo ID (ou outro
 * ID válido da conta), mas valores de exemplo/placeholder nunca são usados
 * em produção.
 */
const configuredClientId = process.env.NEXT_PUBLIC_ADSENSE_ID?.trim()

export const ADSENSE_CLIENT_ID = configuredClientId && /^ca-pub-\d+$/.test(configuredClientId)
  ? configuredClientId
  : 'ca-pub-4642150915962893'
