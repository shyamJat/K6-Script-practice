/* global __ENV */

import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'
import http from 'k6/http'

/**
 * Home Modules
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getHomeModules = (params) => {
  params.tags.name = 'homeModules'
  params.headers['Content-Type'] = 'application/json'

  const queryParams = {
    availablePlatforms: 'MOBILE_WEB',
    platform: 'MOBILE',
    vertical: 'HOME'
  }

  const query = formurlencoded(queryParams)

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home/v2/home-modules?${query}`,
    params
  )

  return resp
}
