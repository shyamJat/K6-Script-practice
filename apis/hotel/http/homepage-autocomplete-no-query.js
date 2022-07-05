import http from 'k6/http'

/**
 * Homepage Autocomplete
 * @param {object} params global parameters
 * @returns Homepage Autocomplete http response
 */
export const homepageAutoComplete = (params) => {
  params.tags.name = 'homepageAutoComplete'
  const body = {
    query: ''
  }
  const resp = http.post(
    // eslint-disable-next-line no-undef
    `${__ENV.HOTEL_HOST}/ms-gateway/tix-hotel-autocomplete/autocomplete`,
    JSON.stringify(body),
    params
  )

  return resp
}
