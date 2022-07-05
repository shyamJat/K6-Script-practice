/* global __ENV */

import http from 'k6/http'
import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'

/**
 * summary
 * @param {object} params global parameters
 * @returns summary http response
 */
export const summary = (params) => {
  params.tags.name = 'summary'
  params.headers['Content-Type'] = 'application/json'

  // To-do: need to refactor without extra dependencies
  const startOfMonth = moment(params.departureDate).startOf('month').format('YYYY-MM-DD')
  const endOfMonth = moment(params.departureDate).endOf('month').format('YYYY-MM-DD')

  const searchReq = {
    origin: params.origin,
    destination: params.destination,
    adult: params.adult,
    child: params.child,
    infant: params.infant,
    cabinClass: 'ECONOMY',
    originType: 'AIRPORT',
    destinationType: 'AIRPORT',
    currency: 'IDR',
    startDate: '',
    endDate: '',
    flightAggregateType: ''
  }

  if (`${__ENV.SEARCHTYPE}` === 'ONE_WAY') {
    searchReq.flightAggregateType = 'OW'
    searchReq.startDate = startOfMonth
    searchReq.endDate = endOfMonth
  } else {
    searchReq.flightAggregateType = 'ALL'
    searchReq.returnDate = params.returnDate
    searchReq.startDate = startOfMonth
    searchReq.endDate = params.returnDate
  }

  const query = formurlencoded(searchReq)
  const resp = http.get(
    `${__ENV.LB_HOST}/tix-price-summary/priceSummary/priceSummary?${query}`,
    params
  )

  return resp
}
