/* global __ENV */

import http from 'k6/http'

export const booking = (params, integrator, request) => {
  params.tags.name = 'booking'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.post(
    `${__ENV.LB_HOST}/${integrator}/booking`,
    JSON.stringify(request),
    params
  )

  return resp
}
