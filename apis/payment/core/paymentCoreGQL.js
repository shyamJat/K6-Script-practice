import http from 'k6/http'

export const qglCall = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `http://172.16.0.157:3030/`,
    JSON.stringify(body),
    params
  )
  return resp
}