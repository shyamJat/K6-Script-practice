/* global __ENV */

import { sleep } from 'k6'
import http from 'k6/http'

/**
 * stream first chunk
 *
 * iterate until response has flightId or
 * continously iterate until 30s if searchCompleted result
 * is still false
 *
 *  @param {object} params global parameters
 * @param {object} searchResp search http response
 * @returns stream http response
 */
export const streamFirstChunk = (params, searchResp) => {
  params.tags.name = 'stream-first-chunk'
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
      const depFlights = streamRespBody.data.searchList.departureFlights
      if (depFlights) {
        const flightId = depFlights[Math.floor(Math.random() * depFlights.length)].flightId
        if (flightId) {
          break
        }
      }
    }
    sleep(1.0)
  }
  return streamRespBody
}
