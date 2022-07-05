import http from 'k6/http'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import { SharedArray } from 'k6/data'
import { randomDate } from '@utils/index'

/**
 * History Order
 * @param {object} params global parameters
 * @returns history order http response
 */

const dataActiveOrder = new SharedArray('data active order', function () {
// Load CSV file and parse it using Papa Parse
  return papaparse.parse(open('../data/active_order.csv'), { header: true }).data
})

export const activeOrder = (params) => {
  params.tags.name = 'historyOrder'
  params.headers['Content-Type'] = 'application/json'
  params.headers.username = dataActiveOrder[Math.floor(Math.random() * dataActiveOrder.length)].email
  params.header.userAgent = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'

  const dateNow = `${new Date().toISOString().split('T')[0]}`
  // const twoMonthLater = new Date(new Date().getFullYear(), new Date().getMonth() + 2, new Date().getDate()).toISOString().split('T')[0];
  const randDate = randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + 2, new Date().getDate()))
  const body = {
    page: 0,
    size: 10,
    orderSort: 'RECENTLY_PURCHASED',
    dateFrom: dateNow,
    // dateTo: twoMonthLater,
    dateTo: randDate,
    orderFilterTypes: ['FLIGHT', 'HOTEL', 'TRAIN', 'EVENT', 'CAR', 'ATTRACTION']
  }

  const resp = http.post(
    // eslint-disable-next-line no-undef
    `${__ENV.MYORDER_HOST}/tix-my-order-core/order-list/order-history`,
    JSON.stringify(body),
    params
  )

  return resp
}
