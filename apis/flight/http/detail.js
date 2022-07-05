/* global __ENV */

import http from 'k6/http'

/**
 * detail
 * @param {object} params global parameters
 * @param {object} streamResp stream http response
 * @param {object} streamNextResp next http response
 * @returns detail http response
 */
export const detail = (
  params,
  streamResp,
  streamNextResp
) => {
  params.tags.name = 'detail'
  params.headers['Content-Type'] = 'application/json'

  const depFlights = streamResp.data.searchList.departureFlights
  const depFlight = depFlights[Math.floor(Math.random() * depFlights.length)]
  const flightId = depFlight.flightId
  const supplierId = depFlight.fareDetail.fares[0].supplierId
  const details = [{ flightId: flightId, supplierId: supplierId }]
  let itineraryType = 'ONE_WAY'

  if (streamNextResp) {
    const returnFlights = streamNextResp.data.searchList.returnFlights
    const returnFlight =
        returnFlights[Math.floor(Math.random() * depFlights.length)]
    const returnFlightId = returnFlight.flightId
    const returnSupplierId = returnFlight.fareDetail.fares[0].supplierId
    details.push({ flightId: returnFlightId, supplierId: returnSupplierId })
    itineraryType = 'ROUND_TRIP'
  }

  const reqBody = JSON.stringify({
    details: details,
    itineraryType: itineraryType
  })

  const resp = http.post(
    `${__ENV.LB_HOST}/tix-flight-search/flightDetail`,
    reqBody,
    params
  )

  return resp
}
