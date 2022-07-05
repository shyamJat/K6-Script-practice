/* global __ENV */

import { group } from 'k6'
import { randomIntBetween, uuidv4 } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { randomCSV, randomDepartReturnDate, responseFailChecker } from '@utils'
import { search } from '@apis/flight/http/integrator/search'
import { booking } from '@apis/flight/http/integrator/booking'

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

const integrator = 'tix-flight-xpressair-integrator'
const randRoutes = randomCSV('routes', '@data/routes.csv')
const origin = randRoutes[0]
const destination = randRoutes[1]
const { departureDate, returnDate } = randomDepartReturnDate(90, 5)
const adult = randomIntBetween(1, 3)
const child = randomIntBetween(0, 2)
const infant = 0

const searchRequest = {
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
  distributionType: 'xpressair',
  infant: infant,
  international: 0,
  origin: origin,
  returnDate: returnDate,
  routes: [{
    currency: 'string',
    departureDate: 'string',
    destination: 'string',
    origin: 'string'
  }],
  supplierMappings: [{
    account: {
      code: 'string',
      name: 'string'
    },
    airlines: [
      'string'
    ]
  }],
  supplierRequest: {
    accounts: [{
      code: 'string',
      name: 'string'
    }],
    airlines: [
      'string'
    ]
  },
  tripTypes: [
    'ROUND_TRIP'
  ]
}

const bookingRequest = {
  distributionType: 'xpressair',
  account: {
    name: 'xpressair',
    code: 'tiketcomXpressair'
  },
  adult: adult,
  child: child,
  infant: infant,
  promoCode: null,
  viaSelect: null,
  flightSelect: 'XN 517~XN 516',
  fareSellKey: null,
  journeySellKey: null,
  sessionGroup: null,
  sessionGroupType: null,
  contact: {
    profileId: '32703315',
    firstName: 'Dea',
    lastName: 'Dendramaya',
    dob: '',
    phoneCode: '62',
    phoneNumber: '82225638608',
    title: 'mrs',
    gender: 'female',
    email: 'customerService@tiket.com',
    emailPassenger: null,
    emailAgent: null
  },
  paxes: [{
    paxNumber: 10000,
    profileId: '32703315',
    type: 'adult',
    title: 'mrs',
    gender: 'female',
    firstName: 'Dea',
    lastName: 'Dendramaya',
    nationality: null,
    dob: null,
    phoneCode: null,
    phoneNumber: null,
    passport: {
      id: null,
      expired: null,
      country: null,
      issuingDate: null
    },
    baggage: {
      departureBaggage: 0,
      returnBaggage: 0,
      departureBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }],
      returnBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }]
    },
    meals: {
      departureMeals: [],
      returnMeals: []
    },
    seats: {
      departureSeats: [],
      returnSeats: []
    },
    frequentFlyer: null,
    insurance: false
  }, {
    paxNumber: 10001,
    profileId: '32704581',
    type: 'adult',
    title: 'ms',
    gender: 'female',
    firstName: 'Ifa',
    lastName: 'Fakhiroh',
    nationality: null,
    dob: null,
    phoneCode: null,
    phoneNumber: null,
    passport: {
      id: null,
      expired: null,
      country: null,
      issuingDate: null
    },
    baggage: {
      departureBaggage: 0,
      returnBaggage: 0,
      departureBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }],
      returnBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }]
    },
    meals: {
      departureMeals: [],
      returnMeals: []
    },
    seats: {
      departureSeats: [],
      returnSeats: []
    },
    frequentFlyer: null,
    insurance: false
  }, {
    paxNumber: 20000,
    profileId: '32703321',
    type: 'child',
    title: 'miss',
    gender: 'female',
    firstName: 'Hikmah',
    lastName: 'Mar',
    nationality: null,
    dob: '2016-04-19',
    phoneCode: null,
    phoneNumber: null,
    passport: {
      id: null,
      expired: null,
      country: null,
      issuingDate: null
    },
    baggage: {
      departureBaggage: 0,
      returnBaggage: 0,
      departureBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }],
      returnBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }]
    },
    meals: {
      departureMeals: [],
      returnMeals: []
    },
    seats: {
      departureSeats: [],
      returnSeats: []
    },
    frequentFlyer: null,
    insurance: false
  }, {
    paxNumber: 20001,
    profileId: '32705166',
    type: 'child',
    title: 'miss',
    gender: 'female',
    firstName: 'Nadya',
    lastName: 'Andriani',
    nationality: null,
    dob: '2016-04-18',
    phoneCode: null,
    phoneNumber: null,
    passport: {
      id: null,
      expired: null,
      country: null,
      issuingDate: null
    },
    baggage: {
      departureBaggage: 0,
      returnBaggage: 0,
      departureBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }],
      returnBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }]
    },
    meals: {
      departureMeals: [],
      returnMeals: []
    },
    seats: {
      departureSeats: [],
      returnSeats: []
    },
    frequentFlyer: null,
    insurance: false
  }, {
    paxNumber: 30000,
    profileId: '32705167',
    type: 'infant',
    title: 'miss',
    gender: 'female',
    firstName: 'Freya',
    lastName: 'Humaira',
    nationality: null,
    dob: '2019-03-31',
    phoneCode: null,
    phoneNumber: null,
    passport: {
      id: null,
      expired: null,
      country: null,
      issuingDate: null
    },
    baggage: {
      departureBaggage: 0,
      returnBaggage: 0,
      departureBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }],
      returnBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }]
    },
    meals: {
      departureMeals: [],
      returnMeals: []
    },
    seats: {
      departureSeats: [],
      returnSeats: []
    },
    frequentFlyer: null,
    insurance: false
  }, {
    paxNumber: 30001,
    profileId: '32703334',
    type: 'infant',
    title: 'mstr',
    gender: 'male',
    firstName: 'Muhammad',
    lastName: 'Bayhaqi',
    nationality: null,
    dob: '2019-02-26',
    phoneCode: null,
    phoneNumber: null,
    passport: {
      id: null,
      expired: null,
      country: null,
      issuingDate: null
    },
    baggage: {
      departureBaggage: 0,
      returnBaggage: 0,
      departureBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }],
      returnBaggages: [{
        unitOfMeasure: 'kg',
        weight: 0
      }]
    },
    meals: {
      departureMeals: [],
      returnMeals: []
    },
    seats: {
      departureSeats: [],
      returnSeats: []
    },
    frequentFlyer: null,
    insurance: false
  }],
  itineraries: [{
    airline: 'XN',
    departure: origin,
    arrival: destination,
    date: departureDate,
    connecting: '0',
    international: 0,
    cabinClass: 'ECONOMY',
    schedules: [{
      arrivalDate: departureDate + ' 11:10',
      departureDate: departureDate + ' 08:55',
      operatingAirline: {
        code: 'XN',
        number: '517'
      },
      fareClass: 'Y',
      origin: origin,
      destination: destination,
      marketingAirline: 'XN',
      flightNumber: '517',
      marriageGroup: null
    }],
    blacklistMap: {}
  }, {
    airline: 'XN',
    departure: destination,
    arrival: origin,
    date: returnDate,
    connecting: '0',
    international: 0,
    cabinClass: 'ECONOMY',
    schedules: [{
      arrivalDate: returnDate + ' 12:10',
      departureDate: returnDate + ' 11:55',
      operatingAirline: {
        code: 'XN',
        number: '516'
      },
      fareClass: 'Y',
      origin: destination,
      destination: origin,
      marketingAirline: 'XN',
      flightNumber: '516',
      marriageGroup: null
    }],
    blacklistMap: {}
  }],
  currency: 'IDR',
  countryId: 'id|id~id|id',
  commission: 0.0,
  maxBookRetry: 1
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
  group('expressair', () => {
    responseFailChecker(search(params, integrator, searchRequest))
    responseFailChecker(booking(params, integrator, bookingRequest))
  })
}
