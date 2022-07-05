/* global __ENV */

import { group } from 'k6'
import { randomIntBetween, uuidv4 } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { randomCSV, randomDepartReturnDate, responseFailChecker } from '@utils'
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

const integrator = 'tix-flight-lion-integrator'
const randRoutes = randomCSV('routes', '@data/routes.csv')
const origin = randRoutes[0]
const destination = randRoutes[1]

const { departureDate, returnDate } = randomDepartReturnDate(90, 5)

const adult = randomIntBetween(1, 3)
const child = randomIntBetween(0, 2)
const infant = 0

const request = {
  adult: adult,
  blacklistMap: {
    additionalProp1: [
      'string'
    ],
    additionalProp2: [
      'string'
    ],
    additionalProp3: [
      'string'
    ]
  },
  cabinClass: 'ECONOMY',
  child: child,
  currency: {
    departureCurrency: 'IDR',
    returnCurrency: 'string'
  },
  departureDate: departureDate,
  destination: destination,
  distributionType: 'lion',
  infant: infant,
  international: 0,
  origin: origin,
  returnDate: returnDate,
  routes: [
    {
      currency: 'string',
      departureDate: 'string',
      destination: 'string',
      origin: 'string'
    }
  ],
  supplierMappings: [
    {
      account: {
        code: 'string',
        name: 'string'
      },
      airlines: [
        'string'
      ]
    }
  ],
  supplierRequest: {
    accounts: [
      {
        code: 'string',
        name: 'string'
      }
    ],
    airlines: [
      'string'
    ]
  },
  tripTypes: [
    'ROUND_TRIP'
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
  group('lion', () => {
    responseFailChecker(search(params, integrator, request))
  })
}
