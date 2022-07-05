import http from 'k6/http'

/**
 * Get tix-Session Data
 * @param {object} params global parameters
 * @returns session http response
 */
export const getTixSession = (params) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${__ENV.LB_HOST}/tix-session/get_session/v4`,
    params
  )
  return resp
}

/**
 * post tix-session Monolith
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */
 export const tixSessionMonolith = (params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${__ENV.LB_HOST}/tix-session/monolith`,
    JSON.stringify(body),
    params
  )
  return resp
}