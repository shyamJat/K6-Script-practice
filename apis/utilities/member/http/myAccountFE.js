import http from 'k6/http'

export const myAccount = (params) => {
  return http.get(
    `${__ENV.HOST}/myaccount`,
    params
  )
}

export const smartTraveler = (params) => {
  return http.get(
    `${__ENV.HOST}/myaccount/smart_traveler`,
    params
  )
}

export const smartPay = (params) => {
  return http.get(
    `${__ENV.HOST}/myaccount/smart_pay`,
    params
  )
}

export const settings = (params) => {
  return http.get(
    `${__ENV.HOST}/myaccount/settings`,
    params
  )
}

export const notification = (params) => {
  return http.get(
    `${__ENV.HOST}/myaccount/settings/notification`,
    params
  )
}


export const securitySettings = (params) => {
  return http.get(
    `${__ENV.HOST}/myaccount/security_settings`,
    params
  )
}


export const loyaltyProgram = (params) => {
  return http.get(
    `${__ENV.HOST}/myaccount/loyalty_program`,
    params
  )
}