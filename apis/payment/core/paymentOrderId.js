import http from 'k6/http'

export const cartTodo = (host, requestData, params) => {
  params.headers['Content-Type'] = 'application/json'
  params.tags.name = '/tix-order-go/legacy/add_order_cart/todo'

  return http.post(
    `${host}/tix-order-go/legacy/add_order_cart/todo`,
    JSON.stringify(requestData),
    params
  )
}
