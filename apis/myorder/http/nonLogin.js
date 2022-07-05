import http from 'k6/http'

/**
 * Non Login
 * @param {object} params global parameters
 * @returns non login http response
 */

export const activeOrder = (params, order) => {
  params.tags.name = 'activeOrder'
  params.headers['Content-Type'] = 'application/json'
  params.headers.username = 'username'
  params.header.userAgent = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
  const body = {
    active: true,
    orders: [
      {
        orderHash: order.orderHash,
        orderId: order.orderId
      }
    ]
  }

  const resp = http.post(
    // eslint-disable-next-line no-undef
    `${__ENV.MYORDER_HOST}/tix-my-order-core/order-list/non-login`,
    JSON.stringify(body),
    params
  )

  return resp
}
