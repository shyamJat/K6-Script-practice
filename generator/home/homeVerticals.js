import { group, sleep } from 'k6'
import { getHomeVerticals } from '@apis/home/http/homeVerticals'
import { responseFailChecker } from '@utils'

export function homeVerticals () {
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
    responseFailChecker(getHomeVerticals(params))
  })
}
