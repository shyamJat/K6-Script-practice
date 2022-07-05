import http from 'k6/http'

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getHomePages = (params) => {
  params.tags.name = 'getHomePages'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.HOME_HOST}/tix-home/v2/home-pages?availablePlatforms=ANDROID&platform=MOBILE&vertical=HOME`,
    params
  )

  return resp
}
