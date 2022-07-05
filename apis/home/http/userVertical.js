import http from 'k6/http'

/**
 * Get User Vertical
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getUserVertical = (params) => {
  params.tags.name = 'getUserVertical'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home/userVertical`,
    params
  )

  return resp
}
