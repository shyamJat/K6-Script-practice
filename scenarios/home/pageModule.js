import { group, sleep } from 'k6'
import { getPageModules, getPageModuleOrder } from '@apis/home/http/pageModules.js'
import {
  responseFailChecker, responseDataExist, randomCSV, parseCSV,
  assertStatus, randomIntBetween, assertSuccess, listScenarios
} from '@utils/index.js'

export const options = {
  scenarios: {
    getPageModules: listScenarios[__ENV.SCENARIO]
  }
}

const data = parseCSV('data', 'data/home-page-module.csv')
const email = randomCSV('email', 'data/email.csv')[0]

export default function () {
  const randData = data[__ITER % data.length]
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': 'ID',
      'X-Account-Id': '123456',
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'username',
      'X-Currency': 'IDR',
      'User-Agent': 'tiketcom/ios-version (twh:20420882) - v1.0',
      Cookie: 'userlang=id'
    },
    tags: {
      name: ''
    }
  }

  group('home', () => {
    const request = {
      accountId: randData[0],
      email: email,
      origin: randData[2],
      destination: randData[3],
      orderId: randomIntBetween(1, 4999999),
      orderHash: randomIntBetween(5000000, 9999999),
      departureDate: randData[6],
      returnDate: randData[7],
      numPerson: randData[8],
      totalAmount: randData[9],
      orderType: randData[10]
    }

    const pm = getPageModules(params)
    responseFailChecker(pm)

    if (responseDataExist(pm)) {
      request.id = pm.json('data')[0].id
      const pmo = getPageModuleOrder(params, request)
      assertStatus(pmo, 200, true, 'pageModuleOrder')
      assertSuccess(pmo, 'SUCCESS', true, 'pageModuleOrder')
    }
    sleep(0.3)
  })
}
