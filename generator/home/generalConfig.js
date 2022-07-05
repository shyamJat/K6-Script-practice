import { group, sleep } from 'k6'
import { getGeneralConfig } from '@apis/home/http/generalConfig'
import { assertStatus, assertSuccess } from '@utils/index.js'

export const generalConfig = () => {
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': 'ID'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  }

  group('generalConfig', () => {
    const l = getGeneralConfig(params)
    assertStatus(l, 200, true, 'getGeneralConfig')
    assertSuccess(l, 'SUCCESS', true, 'getGeneralConfig')
    sleep(0.1)
  })
}
