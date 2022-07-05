import http from 'k6/http'

/**
 * Promo Page
 * @param {object} params global parameters
 * @returns promo page http response
 */
export const promoPage = (params) => {
  params.tags.name = 'promoPage'

  const resp = http.get(
    'https://www.tiket.com/promo', params
  )

  return resp
}
