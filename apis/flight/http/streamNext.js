/* global __ENV */

import { fail } from 'k6'
import http from 'k6/http'
import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'

/**
 * streamNext
 * @param {object} params global parameters
 * @param {object} streamResp stream http response
 * @returns stream next http response
 */
export function next (params, request, streamResp) {
  params.tags.name = 'streamNext'
  params.headers['Content-Type'] = 'application/x-www-form-urlencoded'

  const streamRespBody = JSON.parse(streamResp)
  if (streamRespBody.data.searchCompleted === false) {
    fail('response: stream has finished wihout searchCompleted is true')
  }

  const departureFlights = streamRespBody.data.searchList.departureFlights[0]
  const departureDate = departureFlights.departure.date
  const returnDate = departureFlights.arrival.date
  const origin = departureFlights.departure.airportCode
  const destination = departureFlights.arrival.airportCode
  const flightId = departureFlights.flightId
  const roundTrip = departureFlights.roundTrip
  const supplierId = departureFlights.fareDetail.fares[0].supplierId
  const totalAdultPrice = departureFlights.fareDetail.fares[0].adultFare.total
  const totalChildPrice = departureFlights.fareDetail.fares[0].childFare.total
  const totalInfantPrice = departureFlights.fareDetail.fares[0].infantFare.total
  const totalMarkupAdultPrice = departureFlights.fareDetail.fares[0].adultFare
    .totalWithMarkupWithoutDiscount
  const totalMarkupChildPrice = departureFlights.fareDetail.fares[0].childFare
    .totalWithMarkupWithoutDiscount
  const totalMarkupInfantPrice = departureFlights.fareDetail.fares[0].infantFare
    .totalWithMarkupWithoutDiscount
  const adultPrice = departureFlights.fareDetail.fares[0].adultFare.totalWithoutAdjustment
  const childPrice = departureFlights.fareDetail.fares[0].childFare.totalWithoutAdjustment
  const infantPrice = departureFlights.fareDetail.fares[0].infantFare.totalWithoutAdjustment

  const nextReq = {
    flightId: flightId,
    roundTrip: roundTrip,
    departureDate: departureDate,
    returnDate: returnDate,
    origin: origin,
    destination: destination,
    originType: 'AIRPORT',
    destinationType: 'AIRPORT',
    supplierId: supplierId,
    totalAdultPrice: parseFloat(totalAdultPrice).toFixed(1),
    totalChildPrice: parseFloat(totalChildPrice).toFixed(1),
    totalInfantPrice: parseFloat(totalInfantPrice).toFixed(1),
    totalWithMarkupAdultPrice: parseFloat(totalMarkupAdultPrice).toFixed(1),
    totalWithMarkupChildPrice: parseFloat(totalMarkupChildPrice).toFixed(1),
    totalWithMarkupInfantPrice: parseFloat(totalMarkupInfantPrice).toFixed(1),
    adultPrice: parseFloat(adultPrice).toFixed(1),
    childPrice: parseFloat(childPrice).toFixed(1),
    infantPrice: parseFloat(infantPrice).toFixed(1),
    insuranceAdultPrice: 0,
    insuranceChildPrice: 0,
    insuranceInfantPrice: 0
  }
  const query = formurlencoded(nextReq)

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-flight-search/search/next?${query}`,
    params
  )

  return resp
}
