import http from 'k6/http'

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getGeneralConfig = (params) => {
  params.tags.name = 'getGeneralConfig'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.GC_HOST}/tix-general-config/settings`,
    params
  )

  return resp
}