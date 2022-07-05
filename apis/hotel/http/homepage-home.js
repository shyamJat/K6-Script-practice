import http from 'k6/http'

/**
 * Homepage Home
 * @param {object} params global parameters
 * @returns Homepage Home http response
 */
export const homepageHome = (params) => {
  params.tags.name = 'homepageHome'
  const resp = http.get(
    // eslint-disable-next-line no-undef
    `${__ENV.HOTEL_HOST}/hotel`,
    params
  )

  return resp
}
