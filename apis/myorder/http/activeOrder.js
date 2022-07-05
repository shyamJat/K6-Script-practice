import http from 'k6/http'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import { SharedArray } from 'k6/data'

/**
 * Active Order
 * @param {object} params global parameters
 * @returns active order http response
 */

const dataActiveOrder = new SharedArray('data active order', function () {
// Load CSV file and parse it using Papa Parse
  return papaparse.parse(open('../data/active_order.csv'), { header: true }).data
})

export const activeOrder = (params) => {
  params.tags.name = 'activeOrder'
  params.headers['Content-Type'] = 'application/json'
  params.headers.username = dataActiveOrder[Math.floor(Math.random() * dataActiveOrder.length)].email

  const body = {
    orderSort: 'RECENTLY_PURCHASED',
    orderFilterTypes: ['ALL'],
    page: 0,
    size: 10
  }

  const resp = http.post(
    // eslint-disable-next-line no-undef
    `${__ENV.MYORDER_HOST}/tix-my-order-core/order-list/active-order`,
    JSON.stringify(body),
    params
  )

  return resp
}
