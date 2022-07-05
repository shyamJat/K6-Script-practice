/* eslint-disable import/no-absolute-path */
/**
 * K6 already have utility module to help us make script.
 * https://jslib.k6.io/ or https://k6.io/docs/javascript-api/#jslib
 *
 * Do not afraid to import it, because when you bundle the script
 * your import module will be include and flatten.
*/
import { fail, check } from 'k6'
import Papa from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import { SharedArray } from 'k6/data'

export { gqlPost } from './gql.js'
export { listScenarios } from './scenario.js'

export const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomItem = (arrayOfItems) => {
  return arrayOfItems[Math.floor(Math.random() * arrayOfItems.length)]
}

export const formatDate = (dateObj) => {
  return dateObj.toISOString().slice(0, 10)
}

export const responseFailChecker = (resp) => {
  check(resp, {
    'is status 200': (resp) => {
      if (resp.status < 200 && resp.status > 399) {
        fail(`response: ${resp.status}, request: ${resp.request.url}`)
      } else {
        return resp.status === 200
      }
    }
  })
}

export const responseDataExist = resp => {
  return !!(resp.json('data'))
}

export function randomDepartReturnDate (departRange, returnRange) {
  const today = new Date()
  const startDateNum = Math.floor(Math.random() * departRange) + 1
  const endDateNum = Math.floor(Math.random() * returnRange) + 1

  const startDate = new Date(today.setDate(today.getDate() + startDateNum))
  const endDate = new Date(startDate.getTime() + (endDateNum * 24 * 60 * 60 * 1000))

  const departureDate = formatDate(startDate)
  const returnDate = formatDate(endDate)
  return { departureDate, returnDate }
}

export function parseCSV (label, filePath) {
  const data = new SharedArray(label, () => {
    let csv
    Papa.parse(open(filePath), { complete: results => { csv = results } })
    return csv.data
  })

  return data
}

export function randomCSV (label, filePath) {
  const data = parseCSV(label, filePath)
  return data[Math.floor(Math.random() * data.length)]
}

export const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10)
}

export const assertStatus = (res, status, verbose, name) => {
  check(res, {
    [`${name} status is ${status}`]: (r) => {
      // Will be printed only if verbose = true
      if (r.status != status && verbose) {
        console.log(JSON.stringify(res))
      }
      return r.status === status
    }
  })
}

export const assertSuccess = (res, code, verbose, name) => {
  check(res, {
    [`${name} status is ${code}`]: (r) => {
      // Will be printed only if verbose = true
      if (r.json('code') != code && verbose) {
        console.log(JSON.stringify(res))
      }
      return r.json('code') === code
    }
  })
}

export const assertSuccessGQL = (res, code, verbose, name) => {
  check(res, {
    [`${name} status is ${code}`]: (r) => {
      // Will be printed only if verbose = true
      if (r.json().data[name].code != code && verbose) {
        console.log(JSON.stringify(res))
      }
      return r.json().data[name].code === code
    }
  })
}

export const randomList = function (list) {
  return list[Math.floor((Math.random() * list.length))]
}

export const distribute = (serverCount, value) => {
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
}

export function parseJSON(label, filePath) {
  const data = new SharedArray(label, function () {
    const f = JSON.parse(open(filePath)).payload;
    console.log(f);
    return f;
  });
  return data
}