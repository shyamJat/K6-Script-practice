import { group } from 'k6'
import { getHomePages } from '@apis/home/http/homePages'
import { assertStatus, assertSuccess, parseCSV } from '@utils/index.js'

const creds = parseCSV('email', 'data/username.csv')

export const homePageLogin = () => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Push-Notification-Enabled': creds[0][4],
      'Accept-Language': 'id',
      'User-Agent': 'chrome',
      'X-Account-Id': creds[0][1],
      'X-Business-Id': 0,
      'X-Channel-Id': 'WEB',
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'X-Device-Id': '89asd89asd89asd98asd98asd98',
      'X-Login-Media': 'none',
      'X-Request-Id': 23123123,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': creds[0][0],
      tixsession: creds[0][2],
      tixtoken: creds[0][3]
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
      'X-Push-Notification-Enabled': creds[1][4],
      'Accept-Language': 'id',
      'User-Agent': 'chrome',
      'X-Account-Id': creds[1][1],
      'X-Business-Id': 0,
      'X-Channel-Id': 'WEB',
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'X-Device-Id': '89asd89asd89asd98asd98asd98',
      'X-Login-Media': 'none',
      'X-Request-Id': 23123123,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': creds[1][0],
      tixsession: creds[1][2],
      tixtoken: creds[1][3]
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
