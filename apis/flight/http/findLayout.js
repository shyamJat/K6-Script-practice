/* global __ENV */

import http from 'k6/http'

/**
 * findLayout
 * @param {object} params global parameters
 * @returns find layout http response
 */
export const findLayout = (params) => {
  params.tags.name = 'findLayout'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-flight-rme-discovery/template/find-layout`,
    params
  )

  return resp
}
