/* global __ENV */

import { group } from 'k6'
import { randomIntBetween, uuidv4 } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { search } from '@apis/flight/http/integrator/search'
import { randomCSV, randomDepartReturnDate, responseFailChecker } from '@utils'

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

const integrator = 'tix-flight-airasia-integrator'
const randRoutes = randomCSV('routes', '@data/routes.csv')
const origin = randRoutes[0]
const destination = randRoutes[1]
const { departureDate, returnDate } = randomDepartReturnDate(90, 5)
const adult = randomIntBetween(1, 3)
const infant = 0

const request = {
  adult: adult,
  blacklistMap: {},
  cabinClass: 'ECONOMY',
  child: 3,
  currency: {
    departureCurrency: 'IDR',
    returnCurrency: 'IDR'
  },
  departureDate: departureDate,
  destination: destination,
  distributionType: 'airasia',
  infant: infant,
  international: 0,
  origin: origin,
  returnDate: returnDate,
  routes: [{
    currency: 'IDR',
    departureDate: departureDate,
    destination: destination,
    origin: origin
  }],
  supplierMappings: [{
    account: {
      code: 'tiketcomAirasia',
      name: 'airasia'
    },
    airlines: [
      'QZ'
    ]
  }],
  supplierRequest: {
    accounts: [{
      code: 'tiketcomAirasia',
      name: 'airasia'
    }],
    airlines: [
      'QZ'
    ]
  },
  tripTypes: [
    'DEPARTURE'
  ]
}

export default function () {
  // default header parameter
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'DESKTOP',
      requestId: uuidv4(),
      serviceId: 'gateway',
      username: 'username',
      'Content-Type': ''
    },
    tags: {
      name: ''
    }
  }

  // trigger the test by groups sequentialy
  group('airasia', () => {
    responseFailChecker(search(params, integrator, request))
  })
}
