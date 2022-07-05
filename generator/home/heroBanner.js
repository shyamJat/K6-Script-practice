import { group, sleep } from 'k6'
import { getHeroBanner } from '@apis/home/http/heroBanner'
import { assertStatus, assertSuccess } from '@utils/index.js'

export const heroBanner = () => {
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
      'X-Currency': 'IDR'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  }

  group('heroBanner', () => {
    const l = getHeroBanner(params)
    assertStatus(l, 200, true, 'getHeroBanner')
    assertSuccess(l, 'SUCCESS', true, 'getHeroBanner')
  })
}
