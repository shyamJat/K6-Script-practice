/* eslint-disable import/no-absolute-path */
// eslint-disable-next-line no-unused-vars
/* global __ENV */

import { group } from 'k6'
import { homepageMasterContent } from '@apis/hotel/http/homepage-masterContent.js'
import { homepageModule } from '@apis/hotel/http/homepage-module.js'
import { homepageHome } from '@apis/hotel/http/homepage-home.js'
import { homepageAutoComplete } from '@apis/hotel/http/homepage-autocomplete-no-query.js'
import { homepageHoliday } from '@apis/hotel/http/homepage-holiday.js'
import { homepageAutoCompleteQuery } from '@apis/hotel/http/homepage-autocomplete-query.js'
import { assertStatus } from '@utils'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import { SharedArray } from 'k6/data'
import { randomList } from '@utils'

/**
  * SCENARIO DURATION
  * Please comment options block below if you just want to verify your script,
  * uncomment if you want to run real test.
  */

// export const options = {
//   scenarios: {
//     test: {
//       tags: { mode: `${__ENV.MODE}` },
//       executor: 'ramping-vus',
//       startVUs: 0,
//       stages: [
//         { duration: `${15 * (__ENV.DURATION) / 100}m`, target: `${__ENV.VUS}` },
//         { duration: `${(__ENV.DURATION) - (30 * (__ENV.DURATION) / 100)}m`, target: `${__ENV.VUS}` },
//         { duration: `${15 * (__ENV.DURATION) / 100}m`, target: 0 }
//       ],
//       gracefulRampDown: '0s'
//     }
//   }
// }

const location = new SharedArray('data active order', function () {
  // Load CSV file and parse it using Papa Parse
  return papaparse.parse(open('../data/location.csv'), { header: true }).data
})

const PHPSESSID = new SharedArray("member data", ()=> { 
  return JSON.parse(open('../data/member.json')).PHPSESSID; 
});


export default function () {
  const templateId = randomList(['605a1ffd3fe68d4d8c3a8835', '605bf924f6ef9b34c02d3d70', '602535a7afbf887c435420e8', ' 601bb83da23e39841c4ffc45', '601027d5a23e39841c4ffc41', '600e8db6a23e39841c4ffc3a'])
  const params = {
    headers: {
      Cookie: `PHPSESSID=${PHPSESSID}`
    },
    tags: {
      name: ''
    }
  }

  group('homepage', () => {
    const masterContent = homepageMasterContent(params)
    assertStatus(masterContent, 200, true, 'masterContent')
    const module = homepageModule(params, templateId)
    assertStatus(module, 200, true, 'module')
    const home = homepageHome(params)
    assertStatus(home, 200, true, 'home')
    const autoComplete = homepageAutoComplete(params)
    assertStatus(autoComplete, 200, true, 'autoComplete')
    const holiday = homepageHoliday(params)
    assertStatus(holiday, 200, true, 'holiday')
    const autoCompleteQuery = homepageAutoCompleteQuery(params, location)
    assertStatus(autoCompleteQuery, 200, true, 'autoCompleteQuery')
  })
}
