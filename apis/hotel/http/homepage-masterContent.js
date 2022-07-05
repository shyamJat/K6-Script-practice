import http from 'k6/http'

/**
 * Homepage Master Content
 * @param {object} params global parameters
 * @returns Homepage Master Content http response
 */
export const homepageMasterContent = (params, phpSession) => {
  params.tags.name = 'homepageMasterContent'
  const resp = http.get(
    // eslint-disable-next-line no-undef
    `${__ENV.HOTEL_HOST}/ms-gateway/tix-hotel-home-api/landing-page/get-master-content`,
    params
  )

  return resp
}
