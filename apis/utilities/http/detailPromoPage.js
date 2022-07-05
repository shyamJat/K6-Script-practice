import http from 'k6/http'

/**
 * Detail Promo Page
 * @param {string} path promo page path
 * @returns promo page http response
 */
export const detailPromoPage = (params, path) => {
  params.tags.name = 'detailPromoPage'

  const resp = http.get(
    `https://www.tiket.com/${path}`,
    params
  )

  return resp
}
