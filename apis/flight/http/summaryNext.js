/* global __ENV */

import { fail } from 'k6'
import http from 'k6/http'
import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'

/**
 * summaryNext
 * @param {object} params global parameters
 * @param {object} streamResp stream http response
 * @returns summary next http response
 */
export const summaryNext = (params, streamResp) => {
  params.tags.name = 'summaryNext'
  params.headers['Content-Type'] = 'application/json'

  const streamRespBody = JSON.parse(streamResp)

  if (Object.values(streamRespBody.data.searchList) === 0) {
    fail('stream next response searchList is empty')
  }

  const departureFlights = streamRespBody.data.searchList.departureFlights[0]
  const departureDate = departureFlights.departure.date
  const returnDate = departureFlights.arrival.date
  const origin = departureFlights.departure.airportCode
  const destination = departureFlights.arrival.airportCode
  const airline = departureFlights.marketingAirline.code
  const price = departureFlights.fareDetail.fares[0].adultFare.total
  // To-do: need to refactor without extra dependencies
  const endOfMonth = moment(params.departureDate).endOf('month').format('YYYY-MM-DD')

  let flightAggregateType
  if (departureFlights.roundTrip) {
    flightAggregateType = 'RTC'
  } else {
    flightAggregateType = 'RTS'
  }

  const summaryNextReq = {
    origin: destination,
    destination: origin,
    departureDate: departureDate,
    returnDate: returnDate,
    startDate: departureDate,
    endDate: endOfMonth,
    adult: params.adult,
    child: params.child,
    infant: params.infant,
    cabinClass: 'ECONOMY',
    originType: 'AIRPORT',
    destinationType: 'AIRPORT',
    currency: 'IDR',
    flightAggregateType: flightAggregateType,
    airline: airline,
    price: price
  }

  const query = formurlencoded(summaryNextReq)
  const resp = http.get(
    `${__ENV.LB_HOST}/tix-price-summary/priceSummary/priceSummaryNext?${query}`,
    params
  )
  return resp
}
