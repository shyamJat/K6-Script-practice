/* global __ENV */

import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'
import http from 'k6/http'

/**
 * Home Verticals
 * @param {object} params global paramaters
 * @returns home verticals http response
 */
export const getHomeVerticals = (params) => {
  params.tags.name = 'getHomeVerticals'
  params.headers['Content-Type'] = 'application/json'

  const urlParams = {
    platform: 'MOBILE'
  }

  const query = formurlencoded(urlParams)

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home/v2/verticals?${query}`,
    params
  )

  return resp
}
