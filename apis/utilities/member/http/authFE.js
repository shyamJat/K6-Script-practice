import http from 'k6/http'

export const login = (params) => {
  return http.get(
    `${__ENV.HOST}/login`,
    params
  )
}

export const loginMobile = (params) => {
  return http.get(
    `${__ENV.M_HOST}/login`,
    params
  )
}

export const forgetPassword = (params) => {
  return http.get(
    `${__ENV.HOST}/auth/forget_password`,
    params
  )
}

export const forgetPasswordMobile = (params) => {
  return http.get(
    `${__ENV.M_HOST}/auth/forget_password`,
    params
  )
}