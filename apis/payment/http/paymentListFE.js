/* global __ENV */

import http from 'k6/http'
import formurlencoded from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js'

export const paymentListHome = (orderID, orderHash, params) => {
  const queryParam = formurlencoded({
    order_id: orderID,
    order_hash: orderHash
  })
  return http.get(
    `${__ENV.PAYMENT_HOST}/?${queryParam}`,
    params
  )
}
