import http from 'k6/http'

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns recommendation http response
 */
export const getRecommendation = (params, queryParams) => {
  params.tags.name = 'getRecommendation'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-recommendation/recommendation?${queryParams.toString()}`,
    params
  )

  return resp
}
