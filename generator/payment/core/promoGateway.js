import {
    uuidv4
  } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { group } from 'k6'
import { promoSuggestionV2,discountApplyV2,discountUnAplyV2,discountCheckAvailabilityV2,discountCashback2 } from '@apis/payment/core/promoGateway.js'
import { assertStatus, assertSuccess } from '@utils/index.js'
const host="https://lb-perf.tiket.com"

export const PromoSuggestionV2 = () => {
    const params = {
      headers: {
        accept: '*/*',
        'channelId': 'DESKTOP',
        'requestId': '23123123',
        'serviceId': 'gateway',
        'storeId': 'TIKETCOM',
        'username': 'steven.wijaya@tiket.com'
      },
      tags: {
        name: 'promoSuggestionV2'
      }
    }
    const body = {
        "currency": "IDR",
        "productType": "FLIGHT",
        "size": 100,
        "page": 0,
        "lang": "id",
        "paymentType": "va_bca",
        "totalPrice": 708900,
        "referenceId": "1200810117",
        "orderHash": "4792E8852943BB662B48E3E"
    }
  
    // group('payment-landing-withmethod', () => {
    const hp = promoSuggestionV2(host, params, body)
    assertStatus(hp, 200, true, 'promoSuggestionV2')
    assertSuccess(hp, 'SUCCESS', true, 'promoSuggestionV2')
    // })
  }


  export const DiscountApplyV2 = () => {
    const params = {
      headers: {
        accept: '*/*',
        'channelId': 'DESKTOP',
        'requestId': '23123123',
        'serviceId': 'gateway',
        'storeId': 'TIKETCOM',
        'username': 'steven.wijaya@tiket.com'
      },
      tags: {
        name: 'discountApplyV2'
      }
    }
    const body = {
        "orderId" : "1200260111", 
        "orderHash": "478A840F30AFDCAB62B2C4E6",
        "discountCode" : "PROMOKU",
        "currency" : "IDR",
        "paymentType" : "va_bca",
        "productType" : "FLIGHT",
        "totalPrice" : 708900,
        "discountType" : "PROMOCODE"
      }
  
    // group('payment-landing-withmethod', () => {
    const hp = discountApplyV2(host, params, body)
    assertStatus(hp, 200, true, 'discountApplyV2')
    assertSuccess(hp, 'SUCCESS', true, 'discountApplyV2')
    // })
  }

  export const DiscountUnAplyV2 = () => {
    const params = {
      headers: {
        accept: '*/*',
        'channelId': 'DESKTOP',
        'requestId': '23123123',
        'serviceId': 'gateway',
        'storeId': 'TIKETCOM',
        'username': 'steven.wijaya@tiket.com'
      },
      tags: {
        name: 'discountUnAplyV2'
      }
    }
    const body = {
        "orderId": "1200260111",
        "orderHash": "478A840F30AFDCAB62B2C4E6",
        "discountCode": "PROMOKU"
    }
  
    // group('payment-landing-withmethod', () => {
    const hp = discountUnAplyV2(host, params, body)
    assertStatus(hp, 200, true, 'discountUnAplyV2')
    assertSuccess(hp, 'SUCCESS', true, 'discountUnAplyV2')
    // })
  }

  export const DiscountCheckAvailabilityV2 = () => {
    const params = {
      headers: {
        accept: '*/*',
        'channelId': 'DESKTOP',
        'requestId': '23123123',
        'serviceId': 'gateway',
        'storeId': 'TIKETCOM',
        'username': 'steven.wijaya@tiket.com'
      },
      tags: {
        name: 'discountCheckAvailabilityV2'
      }
    }
    const body = {
        "orderId" : "1200260111", 
        "orderHash": "478A840F30AFDCAB62B2C4E6",
        "discountCode" : "PROMOKU",
        "currency" : "IDR",
        "paymentType" : "va_bca",
        "productType" : "FLIGHT",
        "totalPrice" : 708900,
        "discountType" : "PROMOCODE"
      }
  
    // group('payment-landing-withmethod', () => {
    const hp = discountCheckAvailabilityV2(host, params, body)
    assertStatus(hp, 200, true, 'discountCheckAvailabilityV2')
    assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailabilityV2')
    // })
  }

  export const DiscountCashback = () => {
      const orderId="1200260111"
      const promoCode="CASHBACK2022"
    const params = {
      headers: {
        accept: '*/*',
        'channelId': 'DESKTOP',
        'requestId': '23123123',
        'serviceId': 'gateway',
        'storeId': 'TIKETCOM',
        'username': 'steven.wijaya@tiket.com'
      },
      tags: {
        name: 'discountCashback'
      }
    }
    // group('payment-landing-withmethod', () => {
    const hp = discountCashback2(host, params, orderId,promoCode)
    assertStatus(hp, 200, true, 'discountCashback')
    assertSuccess(hp, 'SUCCESS', true, 'discountCashback')
    // })
  }