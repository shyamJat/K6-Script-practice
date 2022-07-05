import http from 'k6/http'

/**
 * Homepage Module
 * @param {object} params global parameters
 * @returns Homepage Module http response
 */
export const homepageModule = (params, templateId) => {
  params.tags.name = 'homepageModule'
  const resp = http.get(
    // eslint-disable-next-line no-undef
    `${__ENV.HOTEL_HOST}/ms-gateway/tix-hotel-home-api/landing-page/module/${templateId}`,
    params
  )

  return resp
}
