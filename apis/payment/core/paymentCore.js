import http from 'k6/http'

/**
 * Get payment version
 * @param {object} params global parameters
 * @returns payment http response
 */
export const checkVersion = (host, params, queryP) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/gateway/tix-payment-core/payment/check-version?${queryP.toString()}`,
    params
  )
  return resp
}

/**
 * payment v4 landing
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */
export const paymentV4Landing = (host, params, body) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.post(
      `${host}/gateway/tix-payment-core/payment/v4/landing`,
      JSON.stringify(body),
      params
    )
    return resp
  }

/**
 * Get v4 payment group
 * @param {object} params global parameters
 * @returns payment-core http response
 */
export const paymentV4paymentGroup = (host, params, queryP) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/gateway/tix-payment-core/payment/v4/payment-group?${queryP.toString()}`,
    params
  )
  return resp
}

/**
 * Get v4 payment method
 * @param {object} params global parameters
 * @returns payment-core http response
 */
export const paymentV4paymentMethod = (host, params, queryP) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/gateway/tix-payment-core/payment/v4/payment-method?${queryP.toString()}`,
    params
  )
  return resp
}

/**
 * discount Promo Suggestion
 * @param {object} params global parameters
 * @returns discount-engine  http response
 */
export const discountPromoSuggestion = (host, params, queryP) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/tix-discount-engine/discount/promo-suggestion?${queryP.toString()}`,
    params
  )
  return resp
}

/**
 *  discount engine discount Apply
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns discount-engine  http response
 */
export const discountApply = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/tix-discount-engine/discount/apply`,
    JSON.stringify(body),
    params
  )
  return resp
}

export const discountUnApply = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/tix-discount-engine/discount/unApply`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 *  payment detail BCA_TRANSFER
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core  http response
 */
export const paymentDetailVA_BCA = (host, params, body) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.put(
      `${host}/gateway/tix-payment-core/payment/detail/VA_BCA`,
      JSON.stringify(body),
      params
    )
    return resp
}

/**
 *  payment confirm VA_BCA
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core  http response
 */
 export const paymentConfirmVA_BCA = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/gateway/tix-payment-core/payment/confirm/VA_BCA`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 * payment inquiry
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */
 export const paymentInquiry = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/tix-payment-core/payment/inquiry`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 * BCA getToken
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */
 export const bcaOauthToken = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/partner-gateway-v2/payment/tix-bank-transfer/bca/oauth/token`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 * BCA inquiry
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */
 export const bcaInquiry = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/partner-gateway-v2/payment/tix-bank-transfer/bca/inquiry`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 * BCA Notification
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */
 export const bcaNotification = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/partner-gateway-v2/payment/tix-bank-transfer/bca/notif`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 * checkAvailability
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns discount-engine http response
 */
export const  checkAvailability= (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/tix-discount-engine/discount/checkAvailability`,
    JSON.stringify(body),
    params
  )
  return resp
}

/**
 *  discount-cashback
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns discount-engine  http response
 */
export const discountCashback = (host, params, body,orderID) => {
     params.headers['Content-Type'] = 'application/json'
    const resp = http.put(
      `${host}/tix-discount-engine/discount/cashback?orderId=${orderID}`,
      JSON.stringify(body),
      params
    )
    return resp
}

/**
 *  calculateDiscount
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo-code  http response
 */
 export const calculateDiscount = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/tix-promocode/calculateDiscount`,
    JSON.stringify(body),
    params
  )
  return resp
}

//12 API's
export const paymentCoreConfig = (host, params) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/tix-payment-core/config/CREDITCARD`,
    params
  )
  return resp
}

export const checkCancellable = (host, params,id) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/gateway/tix-payment-core/payment/checkCancellable?referenceId=${id}`,
    params
  )
  return resp
}



export const bankBin = (host,params,id) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/tix-payment-core/bankBin/${id}`,
    params
  )
  return resp
}


export const paymentInquiryPut = (host,params,body,id) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.put(
    `${host}/tix-payment-core/payment/inquiry/${id}`,
    JSON.stringify(body),
    params
  )
  return resp
}

export const creditLimit = (host,params) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/tix-pay-later/profile/credit-limit?deviceId=id&deviceModel=model`,
    params
  )
  return resp
}


export const transaction = (host,params,id) => {
  params.headers['Content-Type'] = 'x-www-form-urlencoded'
  const resp = http.del(
    `${host}/tix-pay-later/transaction/${id}`,
    params
  )
  return resp
}

export const profile = (host,params) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/gateway/tix-pay-later/profile?deviceId=id&deviceModel=model`,
    params
  )
  return resp
}


export const payLaterRegister = (host,params,body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/gateway/tix-pay-later/profile/register`,
    JSON.stringify(body),
    params
  )
  return resp
}

export const paymentCallback = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/tix-payment-callback/payment`,
    JSON.stringify(body),
    params
  )
  return resp
}

export const paymentCallcheckPaidStatus = (host,params,id) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/tix-payment-callback/payment/checkPaidStatus?referenceId=1200730054`,
    params
  )
  return resp
}



export const creditCardcheckPaidStatus = (host,params,id) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.get(
    `${host}/tix-credit-card/payment/checkPaidStatus?referenceId=${id}`,
    params
  )
  return resp
}

export const createPaymentList = (host,params,body) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.post(
    `${host}/tix-order-aggregate/createPaymentList`,
    JSON.stringify(body),
    params
  )
  return resp
}

export const ApplyPaymentInquiry = (host,params,body,id) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.put(
    `${host}/tix-payment-core/payment/inquiry/${id}`,
    JSON.stringify(body),
    params
  )
  return resp
}

export const UnapplyPaymentInquiry = (host,params,body,id) => {
  params.headers['Content-Type'] = 'application/json'
  const resp = http.put(
    `${host}/tix-payment-core/payment/inquiry/${id}`,
    JSON.stringify(body),
    params
  )
  return resp
}