/* global __ENV */

import http from 'k6/http'
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'

export const apply = (params, detailResp) => {
  params.tags.name = 'apply'
  params.headers['Content-Type'] = 'application/json'

  const detailRespBody = JSON.parse(detailResp)

  // default apply request (ONE WAY), some values will be modified if it has below condition
  const itineraryType = detailRespBody.data.itineraryType
  const flightItemGroups = detailRespBody.data.flightItemGroups[0]
  const departureDate = flightItemGroups.departureDate
  const destination = flightItemGroups.destination
  const origin = flightItemGroups.origin
  const adjustmentId =
      flightItemGroups.fareDetailBreakdown[0].fares[0].adultFare.adjustmentId
  const adultTotal =
      flightItemGroups.fareDetailBreakdown[0].fares[0].adultFare
        .totalWithoutAdjustment
  const childTotal =
      flightItemGroups.fareDetailBreakdown[0].fares[0].childFare
        .totalWithoutAdjustment
  const supplierId = flightItemGroups.fareDetailBreakdown[0].fares[0].supplierId
  const departureTime = flightItemGroups.itemDetails[0].departure.time
  const adult = flightItemGroups.itemDetails[0].adult
  const child = flightItemGroups.itemDetails[0].child
  const infant = flightItemGroups.itemDetails[0].infant
  let fareClasses = flightItemGroups.fareDetailBreakdown[0].fareClass
  fareClasses = fareClasses.split('|')
  let flightNumbers = flightItemGroups.itemDetails[0].flightSelect
  flightNumbers = flightNumbers.split('|')
  const marketingAirline = flightItemGroups.itemDetails[0].marketingAirline.name
  let adjustmentRouteType = 'ONE_WAY'
  const flightDetails = [
    {
      adjustmentId: adjustmentId,
      departureDate: departureDate,
      destination: destination,
      itineraryRequest: {
        adjustmentFare: {
          adult: {
            fareBasisCodes: ['tkta'],
            total: adultTotal
          },
          child: {
            fareBasisCodes: ['tktc'],
            total: childTotal
          },
          fareClasses: fareClasses,
          supplierId: supplierId
        },
        departureTime: departureTime,
        flightNumbers: flightNumbers,
        marketingAirline: marketingAirline,
        totalTransit: 0
      },
      origin: origin
    }
  ]

  if (itineraryType === 'ROUND_TRIP') {
    const fareDetailBreakdown = flightItemGroups.fareDetailBreakdown

    // SEPARATE
    if (fareDetailBreakdown.length === 2) {
      const departureDate = flightItemGroups.returnDate
      const destination = flightItemGroups.origin
      const origin = flightItemGroups.destination
      const adjustmentId =
          flightItemGroups.fareDetailBreakdown[1].fares[0].adultFare.adjustmentId
      const adultTotal =
          flightItemGroups.fareDetailBreakdown[1].fares[0].adultFare
            .totalWithoutAdjustment
      const childTotal =
          flightItemGroups.fareDetailBreakdown[1].fares[0].childFare
            .totalWithoutAdjustment
      const supplierId =
          flightItemGroups.fareDetailBreakdown[1].fares[0].supplierId
      const departureTime = flightItemGroups.itemDetails[1].departure.time
      const fc = flightItemGroups.fareDetailBreakdown[1].fareClass
      const fareClasses = fc.split('|')
      const fs = flightItemGroups.itemDetails[1].flightSelect
      const flightNumbers = fs.split('|')
      const marketingAirline =
          flightItemGroups.itemDetails[1].marketingAirline.code

      flightDetails.push({
        adjustmentId: adjustmentId,
        departureDate: departureDate,
        destination: destination,
        itineraryRequest: {
          adjustmentFare: {
            adult: {
              fareBasisCodes: ['tkta'],
              total: adultTotal
            },
            child: {
              fareBasisCodes: ['tktc'],
              total: childTotal
            },
            fareClasses: fareClasses,
            supplierId: supplierId
          },
          departureTime: departureTime,
          flightNumbers: flightNumbers,
          marketingAirline: marketingAirline,
          totalTransit: 0
        },
        origin: origin
      })
    }

    // SMART_TRIP
    if (fareDetailBreakdown.length === 1) {
      adjustmentRouteType = 'SMART_TRIP'
    }
  }

  const reqBody = JSON.stringify({
    adjustmentRouteType: adjustmentRouteType,
    adult: adult,
    cabinClass: 'ECONOMY',
    cartId: uuidv4(),
    child: child,
    flightDetails: flightDetails,
    infant: infant
  })

  const resp = http.post(
    `${__ENV.LB_HOST}/tix-flight-rme-discovery/campaignUsage/apply`,
    reqBody,
    params
  )

  return resp
}
