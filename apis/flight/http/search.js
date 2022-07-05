/* global __ENV */

import http from 'k6/http'
import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'

/**
 * search
 * @param {onject} params global parameters
 * @returns search http response
 */
export const search = (params, request) => {
  params.tags.name = 'search'
  params.headers['Content-Type'] = 'application/x-www-form-urlencoded'

  const searchReq = {
    origin: request.origin,
    destination: request.destination,
    departureDate: request.departureDate,
    returnDate: null,
    adult: request.adult,
    child: request.child,
    infant: request.infant,
    cabinClass: 'ECONOMY',
    originType: 'AIRPORT',
    destinationType: 'AIRPORT',
    searchType: `${__ENV.SEARCHTYPE}`,
    resultType: 'ALL',
    async: 'true'
  }

  if (searchReq.searchType === 'ROUND_TRIP') {
    searchReq.returnDate = request.returnDate
    searchReq.resultType = 'DEPARTURE'
  }

  const query = formurlencoded(searchReq)
  const resp = http.get(
    `${__ENV.LB_HOST}/tix-flight-search/search?${query}`,
    params
  )

  return resp
}
