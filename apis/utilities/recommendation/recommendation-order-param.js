import http from 'k6/http'

/**
 * Get Recommendation Order Param
 * @param {object} params global parameters
 * @queryparam {object} params global query parameters
 * @returns recommendation-order-param http response
 */
export const getRecommendationOrderParam = (params, queryP) => {
  params.tags.name = 'getRecommendationOrderParam'
  params.headers['Content-Type'] = 'application/json'

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-recommendation/recommendation-order-params?${queryP.toString()}`,
    params
  )

  return resp
}
