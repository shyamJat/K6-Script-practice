/* global __ENV */

import { group } from 'k6'
import {
  randomIntBetween,
  uuidv4
} from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import search from '@apis/flight/http/search.js'
import stream from '@apis/flight/http/stream.js'
import next from '@apis/flight/http/streamNext.js'
import { responseFailChecker, randomCSV, randomDepartReturnDate } from '@utils'

export const options = {
  scenarios: {
    test: {
      tags: { mode: `${__ENV.MODE}` },
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: `${15 * (__ENV.DURATION) / 100}m`, target: `${__ENV.VUS}` },
        { duration: `${(__ENV.DURATION) - (30 * (__ENV.DURATION) / 100)}m`, target: `${__ENV.VUS}` },
        { duration: `${15 * (__ENV.DURATION) / 100}m`, target: 0 }
      ],
      gracefulRampDown: '0s'
    }
  }
}

const randRoutes = randomCSV('routes', '@data/routes.csv')
const origin = randRoutes[0]
const destination = randRoutes[1]
const { departureDate, returnDate } = randomDepartReturnDate(90, 5)
const adult = randomIntBetween(1, 3)
const child = randomIntBetween(0, 2)
const infant = 0

const request = {
  origin: origin,
  destination: destination,
  departureDate: departureDate,
  returnDate: returnDate,
  adult: adult,
  child: child,
  infant: infant
}

export default function () {
  // default header parameter
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      requestId: uuidv4(),
      serviceId: 'gateway',
      username: 'username',
      currency: 'IDR',
      isVerifiedPhoneNumber: false,
      'Content-Type': ''
    },
    tags: {
      name: ''
    }
  }

  let searchResponse
  let streamResponse
  let nextResponse

  // trigger the test by groups sequentialy
  group('search', () => {
    searchResponse = search(params, request)
    responseFailChecker(searchResponse)
  })
  if (`${__ENV.SEARCHTYPE}` === 'ONE_WAY') {
    group('stream', () => {
      responseFailChecker(stream(params, searchResponse))
    })
  }
  if (`${__ENV.SEARCHTYPE}` === 'ROUND_TRIP') {
    group('stream', () => {
      streamResponse = stream(params, searchResponse)
      responseFailChecker(streamResponse)
    })
    group('next', () => {
      nextResponse = next(params, streamResponse)
      responseFailChecker(nextResponse)
    })
    group('stream', () => {
      responseFailChecker(stream(params, nextResponse))
    })
  }
}
