import { group, sleep } from 'k6'
import { getLogo } from '@apis/home/http/logo'
import { assertStatus, assertSuccess } from '@utils/index.js'

export const logo = () => {
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

  group('logo', () => {
    const l = getLogo(params)
    assertStatus(l, 200, true, 'getLogo')
    assertSuccess(l, 'SUCCESS', true, 'getLogo')
  })
}
