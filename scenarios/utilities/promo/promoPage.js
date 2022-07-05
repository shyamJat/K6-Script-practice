/* eslint-disable import/no-absolute-path */
/* global __ENV */

import { group } from 'k6'
import { parseHTML } from 'k6/html'
import { promoPage } from '@apis/utilities/http/promopage.js'
import { detailPromoPage } from '@apis/utilities/http/detailPromoPage.js'
import { randomIntBetween, responseFailChecker } from '@utils'

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
  const params = {
    headers: {},
    tags: {
      name: ''
    }
  }

  group('promo', () => {
    const promo = promoPage(params)
    responseFailChecker(promo)
    const html = parseHTML(promo.body)
    const path = html.find('.promo-list').children().get(randomIntBetween(0, 34))
    detailPromoPage(params, path)
  })
}
