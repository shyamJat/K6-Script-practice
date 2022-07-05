import { group, sleep } from 'k6'
import { getUserFooter } from '@apis/home/http/userFooter'
import { assertStatus, assertSuccess } from '@utils/index.js'

export const userFooter = () => {
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

  group('userFooter', () => {
    const uv = getUserFooter(params)
    assertStatus(uv, 200, true, 'getUserFooter')
    assertSuccess(uv, 'SUCCESS', true, 'getUserFooter')
  })
}
