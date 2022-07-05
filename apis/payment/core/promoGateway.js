import http from 'k6/http'

/**
 * promo suggestion v2
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */
 export const promoSuggestionV2 = (host, params, body) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.post(
      `${host}/gateway/tix-discount-engine/discount/promo-suggestion/v2`,
      JSON.stringify(body),
      params
    )
    return resp
  }


/**
 * apply discount code
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */
export const discountApplyV2 = (host, params, body) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.post(
      `${host}/gateway/tix-discount-engine/discount/apply/v2`,
      JSON.stringify(body),
      params
    )
    return resp
  }

/**
 * un apply discount code
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */
 export const discountUnAplyV2 = (host, params, body) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.post(
      `${host}/gateway/tix-discount-engine/discount/unApply/v2`,
      JSON.stringify(body),
      params
    )
    return resp
  }

/**
 * un apply discount code
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */
 export const discountCheckAvailabilityV2 = (host, params, body) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.post(
      `${host}/gateway/tix-discount-engine/discount/checkAvailability/v2`,
      JSON.stringify(body),
      params
    )
    return resp
  }

  /**
 * Get discount cashback
 * @param {object} params global parameters
 * @returns promo http response
 */
export const discountCashback2 = (host, params, orderId,promoCode) => {
    params.headers['Content-Type'] = 'application/json'
    const resp = http.get(
      `${host}/gateway/tix-discount-engine/discount/cashback?orderId=${orderId}&promoCode=${promoCode}`,
      params
    )
    return resp
  }
