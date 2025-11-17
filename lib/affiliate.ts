/**
 * Utilities for handling affiliate links
 */

const AMAZON_AFFILIATE_TAG = '105c91-20'

/**
 * Adds Amazon affiliate tag to a product link
 * @param url - The Amazon product URL
 * @returns URL with affiliate tag appended
 */
export function addAmazonAffiliateTag(url: string): string {
  if (!url) return url

  try {
    const urlObj = new URL(url)

    // Only add tag to Amazon domains
    if (!urlObj.hostname.includes('amazon.') && !urlObj.hostname.includes('amzn.')) {
      return url
    }

    // Add the affiliate tag
    urlObj.searchParams.set('tag', AMAZON_AFFILIATE_TAG)

    return urlObj.toString()
  } catch {
    // If URL parsing fails, try simple append
    const separator = url.includes('?') ? '&' : '?'
    return `${url}${separator}tag=${AMAZON_AFFILIATE_TAG}`
  }
}

/**
 * Checks if a URL is an Amazon link
 */
export function isAmazonLink(url: string): boolean {
  if (!url) return false

  try {
    const urlObj = new URL(url)
    return urlObj.hostname.includes('amazon.') || urlObj.hostname.includes('amzn.')
  } catch {
    return url.includes('amazon.') || url.includes('amzn.')
  }
}
