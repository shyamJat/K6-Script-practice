/* global __ENV */

import http from 'k6/http'

export const search = (params, integrator, request) => {
  params.tags.name = 'search'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.post(
    `${__ENV.LB_HOST}/${integrator}/search`,
    JSON.stringify(request),
    params
  )

  return resp
}
