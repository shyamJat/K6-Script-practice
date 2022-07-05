import http from 'k6/http'

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getUserFooter = (params) => {
  params.tags.name = 'getUserFooter'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home/userFooter`,
    params
  )

  return resp
}
