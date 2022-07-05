import http from 'k6/http'
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js'

/**
 * Homepage Holiday
 * @param {object} params global parameters
 * @returns Homepage Holiday http response
 */

export const homepageHoliday = (params) => {
  params.tags.name = 'homepageHoliday'
  const searchParams = new URLSearchParams([
    ['startDate', `${new Date().toISOString().split('T')[0]}`],
    ['endDate', `${new Date(new Date().getFullYear() + 5, new Date().getMonth(), new Date().getDate()).toISOString().split('T')[0]}`],
    ['page', '0'],
    ['size', '100']
  ])
  const resp = http.get(
    // eslint-disable-next-line no-undef
    `${__ENV.HOTEL_HOST}/ms-gateway/tix-calendar/holiday?${searchParams.toString()}`,
    params
  )

  return resp
}
