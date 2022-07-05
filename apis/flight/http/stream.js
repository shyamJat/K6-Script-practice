/* global __ENV */

import { sleep } from 'k6'
import http from 'k6/http'

/**
 * stream
 *
 * iterate until searchCompleted result is true or
 * continously iterate until 30s if searchCompleted result
 * is still false
 *
 * @param {object} params global parameters
 * @param {object} searchResp search http response
 * @returns stream http response
 */
export const stream = (params, searchResp) => {
  params.tags.name = 'stream'
  params.headers['Content-Type'] = 'application/json'

  const searchRespBody = JSON.parse(searchResp.body)
  const reqBody = JSON.stringify({
    requestItems: searchRespBody.data.requestItems
  })

  let streamRespBody
  const iterNum = 30
  for (let i = 0; i < iterNum; i++) {
    const resp = http.post(
      `${__ENV.LB_HOST}/tix-flight-search/search/streaming`,
      reqBody,
      params
    )

    streamRespBody = JSON.parse(resp.body)
    if (streamRespBody.data) {
      if (streamRespBody.data.searchCompleted === true && streamRespBody.data.searchList.departureFlights.length > 0) {
        break
      }
    }
    sleep(1.0)
  }

  return streamRespBody
}
