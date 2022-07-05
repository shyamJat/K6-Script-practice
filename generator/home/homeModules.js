import { group, sleep } from 'k6'
import { getHomeModules } from '@apis/home/http/homeModules'
import { getHomeModulesAsync, homeModulesAsync } from '@apis/home/http/homeModulesAsync'
import { responseFailChecker, responseDataExist, assertStatus, assertSuccess } from '@utils'

export function homeModules () {
  const phpsessid = '1ce5ae53-93ac-426a-b6e2-044631f38ed7'

  /**
   * GLOBAL PARAMETERS
   * if you have specific header in api,
   * please add it in your apis directory by extend this global parameters.
   */

  const params = {
    headers: {
      lang: 'id',
      'Accept-Language': 'ID',
      'x-Account-Id': '0',
      'x-Channel-Id': 'WEB',
      'x-Country-Code': 'IDN',
      'x-Request-Id': '23123121',
      'x-Service-Id': 'gateway',
      'x-Store-Id': 'TIKETCOM',
      'x-Username': 'testing@tiket.com',
      Cookie: 'PHPSESSID=' + phpsessid
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  }

  /**
   * APIS EXECUTION FLOW
   * this flow will run serializely
   */
  group('home', () => {
    const hm = getHomeModules(params)
    responseFailChecker(hm)

    if (responseDataExist(hm)) {
      const asyncItems = getHomeModulesAsync(hm)
      for (const asyncItem of asyncItems) {
        const hma = homeModulesAsync(params, asyncItem.id)
        assertStatus(hma, 200, true, 'homeModulesAsync')
        assertSuccess(hma, 'SUCCESS', true, 'homeModulesAsync')
      }
    }
  })
}
