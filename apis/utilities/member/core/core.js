import http from 'k6/http'

/**
 * v2PasswordLevel
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */
 export const v2PasswordLevel = (params, body) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.post(
      `${__ENV.LB_HOST}/tix-member-core/v2/password/level`,
      JSON.stringify(body),
      params
    )
    return resp
  }
  
  /**
   * v2AuthLogin 
   * @param {object} params global parameters
   * @param {object} body post body
   * @returns session http response
   */
  export const v2AuthLogin = (params, body) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.post(
      `${__ENV.LB_HOST}/tix-member-core/v2/auth/login`,
      JSON.stringify(body),
      params
    )
    return resp
  }

/**
 * v2AuthSocial
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */
export const v2AuthSocial = (params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${__ENV.LB_HOST}/tix-member-core/v2/auth/social`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 * v2AuthRegister
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */
export const v2AuthRegister = (params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${__ENV.LB_HOST}/tix-member-core/v2/auth/register`,
    JSON.stringify(body),
    params
  )
  return resp
}
