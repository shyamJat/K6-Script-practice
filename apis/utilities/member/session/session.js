import http from 'k6/http'

/**
 * Get Session Data
 * @param {object} params global parameters
 * @returns session http response
 */
export const getSession = (params) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${__ENV.LB_HOST}/tix-member-session/v1/session`,
    params
  )
  return resp
}

/**
 * Get session and validate jwt
 * @param {object} params global parameters
 * @returns session http response
 */
export const validateSession = (params) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${__ENV.LB_HOST}/tix-member-session/v1/session/validate`,
    params
  )
  return resp
}

/**
 * Create empty session data
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */
export const createSession = (params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${__ENV.LB_HOST}/tix-member-session/v1/session`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 * Refresh token
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */
export const refreshToken = (params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${__ENV.LB_HOST}/tix-member-session/v1/session/refresh`,
    JSON.stringify(body),
    params
  )
  return resp
}
