import { group } from 'k6'
import { getHomePages } from '@apis/home/http/homePages'
import { assertStatus, assertSuccess, randomCSV } from '@utils/index.js'

const creds = randomCSV('email', 'data/SuperAPI_username_prod.csv')

export const homePageLogin = () => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'User-Agent': 'chrome',
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'Authorization': 'Bearer ' + creds[1]
    },
    tags: {
      name: ''
    }
  }

  group('homePageLogin', () => {
    const hp = getHomePages(params)
    assertStatus(hp, 200, true, 'getHomePages')
    assertSuccess(hp, 'SUCCESS', true, 'getHomePages')
  })
}

export const homePageNonLogin = () => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'User-Agent': 'chrome',
      'X-Country-Code': 'IDN',
      'X-Currency': 'IDR'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  }

  group('homePageNonLogin', () => {
    const hp = getHomePages(params)
    assertStatus(hp, 200, true, 'getHomePages')
    assertSuccess(hp, 'SUCCESS', true, 'getHomePages')
  })
}