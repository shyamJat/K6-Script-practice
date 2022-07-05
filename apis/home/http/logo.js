import http from 'k6/http'

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getLogo = (params) => {
  params.tags.name = 'getLogo'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home-admin/logo/all`,
    params
  )

  return resp
}
