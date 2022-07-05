import http from 'k6/http'

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getHeroBanner = (params) => {
  params.tags.name = 'getHeroBanner'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home/v2/hero-banners?platform=MOBILE`,
    params
  )

  return resp
}
