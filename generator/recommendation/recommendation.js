import { group } from 'k6'
import { getRecommendation } from '@apis/utilities/recommendation/recommendation'
import { getRecommendationOrderParam } from '@apis/utilities/recommendation/recommendation-order-param'
import { assertStatus, assertSuccess, parseCSV, randomList } from '@utils/index.js'
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js'

const recommendationData = parseCSV('users', 'data/recommendation.csv')

export const recommendation = () => {
  const data = recommendationData[Math.floor(Math.random() * (recommendationData.length - 1))]
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'X-Account-Id': data[0],
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Currency': 'IDR',
      'X-Request-Id': '8158e195-3b92-4f6a-b4d7-a2b5e85b9874',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': data[1]
    },
    tags: {
      name: ''
    }
  }

  const queryParams = new URLSearchParams([
    ['productType', randomList(['hotel', 'nha', 'ttd'])]
  ])

  group('recommendation', () => {
    const hp = getRecommendation(params, queryParams)
    assertStatus(hp, 200, true, 'getRecommendation')
    assertSuccess(hp, 'SUCCESS', true, 'getRecommendation')
  })
}

export const recommendationOrderParam = () => {
  /*
  *  email can be dyaminc
     origin can be dynamic
     destination can be dynamic
     accountId can be dynamic
     orderId can be dynamic
     orderHash can by dynamic
  */
  const data = recommendationData[Math.floor(Math.random() * (recommendationData.length - 1))]
  const queryParams = new URLSearchParams([
    ['email', data[2]],
    ['accountId', data[0]],
    ['departureDate', '2021-10-12'],
    ['returnDate', '2021-10-13'],
    ['origin', data[3]],
    ['destination', data[4]],
    ['numPerson', '1'],
    ['totalAmount', '1'],
    ['orderType', 'flight'],
    ['orderId', data[5]],
    ['orderHash', data[6]],
    ['chipsId', randomList(['hotel', 'nha', 'ttd'])]
  ])

  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Currency': 'IDR',
      'X-Request-Id': '8158e195-3b92-4f6a-b4d7-a2b5e85b9874',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Account-Id': data[0],
      'X-Username': data[1]
    },
    tags: {
      name: ''
    }
  }

  group('getRecommendationOrderParam', () => {
    const hp = getRecommendationOrderParam(params, queryParams)
    assertStatus(hp, 200, true, 'getRecommendationOrderParam')
    assertSuccess(hp, 'SUCCESS', true, 'getRecommendationOrderParam')
  })
}
