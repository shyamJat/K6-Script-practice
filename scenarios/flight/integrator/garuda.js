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

const integrator = 'tix-flight-garuda-bumblebee-integrator'
const randRoutes = randomCSV('routes', '@data/routes.csv')
const origin = randRoutes[0]
const destination = randRoutes[1]

const { departureDate, returnDate } = randomDepartReturnDate(90, 5)

const adult = randomIntBetween(1, 3)
const child = randomIntBetween(0, 2)
const infant = 0

const request = {
  distributionType: 'garuda',
  supplierRequest: {
    accounts: [{
      name: 'Garuda Bumble bee',
      code: 'tiketcomGarudaBumblebee'
    }],
    airlines: [
      'GA'
    ]
  },
  supplierMappings: [{
    account: {
      name: 'Garuda Bumble bee',
      code: 'tiketcomGarudaBumblebee'
    },
    airlines: [
      'GA'
    ]
  }],
  origin: origin,
  destination: destination,
  adult: adult,
  child: child,
  infant: infant,
  departureDate: departureDate,
  returnDate: returnDate,
  cabinClass: 'ECONOMY',
  tripTypes: [
    'ROUND_TRIP'
  ],
  international: 0,
  currency: {
    departureCurrency: 'IDR',
    returnCurrency: 'IDR'
  },
  blacklistMap: null,
  routes: null
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
  group('garuda', () => {
    responseFailChecker(search(params, integrator, request))
  })
}
