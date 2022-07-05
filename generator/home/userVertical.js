import { group, sleep } from 'k6'
import { getUserVertical } from '@apis/home/http/userVertical'
import { assertStatus, assertSuccess } from '@utils/index.js'

export const userVertical = () => {
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

  group('userVertical', () => {
    const uv = getUserVertical(params)
    assertStatus(uv, 200, true, 'getUserVertical')
    assertSuccess(uv, 'SUCCESS', true, 'getUserVertical')
  })
}
