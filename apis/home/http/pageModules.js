/* global __ENV */

import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'
import http from 'k6/http'

/**
 * Get Page Modules
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getPageModules = (params) => {
  params.tags.name = 'getPageModules'
  params.headers['Content-Type'] = 'application/json'

  const query = formurlencoded({ pageModuleCode: 'ORDER_DETAIL' })

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home/v2/page-modules?${query}`,
    params
  )

  return resp
}

/**
 * Get Page ModuleOrder
 * @param {object} params global parameters
 * @returns home module http response
 */
export const getPageModuleOrder = (params, request) => {
  params.tags.name = 'getPageModuleOrder'
  params.headers['Content-Type'] = 'application/json'

  const queryParam = {
    accountId: request.accountId,
    email: request.email,
    origin: request.origin,
    destination: request.destination,
    orderId: request.orderId,
    orderHash: request.orderHash,
    departureDate: request.departureDate,
    returnDate: request.returnDate,
    numPerson: request.numPerson,
    totalAmount: request.totalAmount,
    orderType: request.orderType,
    chipsId: 'hotel'
  }

  const query = formurlencoded(queryParam)

  const resp = http.get(
    `${__ENV.LB_HOST}/tix-home/v2/page-modules/${request.id}?${query}`,
    params
  )

  return resp
}
