/* global __ENV */

import http from 'k6/http'

/**
 * unapply
 * @param {object} params global parameters
 * @param {object} applyResp apply http response
 * @returns unapply http response
 */
export const unapply = (params, applyResp) => {
  params.tags.name = 'unapply'
  params.headers['Content-Type'] = 'application/json'

  const applyRespBody = JSON.parse(applyResp)

  const adultTransactionId = applyRespBody.data.adjustmentItineraries[0].adjustmentFare.adult.transactionId
  const childTransactionId = applyRespBody.data.adjustmentItineraries[0].adjustmentFare.child.transactionId
  const transactionIds = []

  transactionIds.push(adultTransactionId)

  if (childTransactionId) {
    transactionIds.push(childTransactionId)
  }

  const reqBody = JSON.stringify(transactionIds)
  const resp = http.post(
    `${__ENV.LB_HOST}/tix-flight-rme-discovery/campaignUsage/unapply`,
    reqBody,
    params
  )

  return resp
}
