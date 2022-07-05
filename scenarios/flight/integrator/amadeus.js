/* global __ENV */

import { group } from 'k6'
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { randomCSV, responseFailChecker } from '@utils'
import { search } from '@apis/flight/http/integrator/search'

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

const integrator = 'tix-flight-amadeus-integrator'
const data = randomCSV('static', '@data/routes.csv')
const adult = data[0]
const child = data[1]
const infant = data[2]
const origin = data[5]
const destination = data[6]
const departureDate = data[3]
const returnDate = data[4]
const tripType = data[7]

const request = {
  adult: adult,
  blacklistMap: {},
  cabinClass: 'ECONOMY',
  child: child,
  currency: {
    departureCurrency: 'IDR',
    returnCurrency: 'IDR'
  },
  departureDate: departureDate,
  destination: destination,
  distributionType: 'amadeus',
  infant: infant,
  international: 0,
  origin: origin,
  returnDate: returnDate,
  routes: [],
  supplierMappings: [{
    account: {
      code: 'tiketcomAmadeusNDC',
      name: 'tiketcomAmadeusNDC'
    },
    airlines: [
      'SQ'
    ]
  }],
  supplierRequest: {
    accounts: [{
      code: 'tiketcomAmadeusNDC',
      name: 'tiketcomAmadeusNDC'
    }],
    airlines: [
      'SQ'
    ]
  },
  tripTypes: [
    tripType
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
  group('amadeus', () => {
    responseFailChecker(search(params, integrator, request))
  })
}
