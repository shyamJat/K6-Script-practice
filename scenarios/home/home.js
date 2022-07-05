/* eslint-disable import/no-absolute-path */
/* global __ENV */

/**
 * Please use absolute path if you want to run script without bundle it.
 * Why? because golang will throw file not found errors with relative path
 * when you are not bundle this script.
 *
 * Add @apis in your import module if you want to use relative path
 * before you bundle it, i.e: @apis/your/api/module
 */

import { group } from 'k6'
import { getHomeModules } from '@apis/home/http/homeModules.js'
import { getHomeModulesAsync, homeModulesAsync } from '@apis/home/http/homeModulesAsync.js'
import { getHomeVerticals } from '@apis/home/http/homeVerticals.js'
import { responseFailChecker, responseDataExist } from '@utils'

/**
 * SCENARIO DURATION
 * Please comment options block below if you just want to verify your script,
 * uncomment if you want to run real test.
 */
export const options = {
  scenarios: {
    test: {
      tags: { mode: `${__ENV.MODE}` },
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: `${15 * (__ENV.DURATION) / 100}m`, target: `${__ENV.VUS}` },
        { duration: `${(__ENV.DURATION) - (30 * (__ENV.DURATION) / 100)}m`, target: `${__ENV.VUS}` },
        { duration: `${15 * (__ENV.DURATION) / 100}m`, target: 0 }
      ],
      gracefulRampDown: '0s'
    }
  }
}

export default function () {
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
    }
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
        responseFailChecker(homeModulesAsync(params, asyncItem.id))
      }
    }

    responseFailChecker(getHomeVerticals(params))
  })
}
