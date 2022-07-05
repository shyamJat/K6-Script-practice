/* global __ENV */

import http from 'k6/http'

export const gqlPost = (name, body, params) => {
  return http.post(
    `${__ENV.GQL_HOST}?profile=${name}`,
    JSON.stringify(body),
    params
  )
}
