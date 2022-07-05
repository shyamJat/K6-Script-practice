/* global __ENV */

import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'
import http from 'k6/http'

/**
 * Get home modules async
 * @param {object} homeModulesResponse home modules response body
 * @returns array of async home modules
 */
export const getHomeModulesAsync = (homeModulesResponse) => {
  const homeModulesAsync = []
  for (const homeModule of homeModulesResponse.json('data')) {
    if (homeModule.processType === 'ASYNC' && homeModule.templateCode !== 'BANNER_PUSH_NOTIF' && homeModule.templateCode !== 'BANNER_LOCATION') {
      homeModulesAsync.push(homeModule)
    }
  }
  return homeModulesAsync
}

/**
 * Home Module Async
 * @param {object} params global paramaters
 * @param {string} asyncId home modules async id
 * @returns home module async http response
 */
export const homeModulesAsync = (params, asyncId) => {
  params.tags.name = 'homeModulesAsync'
  params.headers['Content-Type'] = 'application/json'

  const queryParams = {
    page: 0,
    size: 1
  }

  const query = formurlencoded(queryParams)

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home/v2/home-modules/async/${asyncId}?${query}`,
    params
  )

  return resp
}
