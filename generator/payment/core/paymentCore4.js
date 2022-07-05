import {
  uuidv4
} from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { group } from 'k6'
import { checkVersion, paymentV4Landing, paymentV4paymentGroup, paymentV4paymentMethod, paymentDetailVA_BCA,paymentConfirmVA_BCA,paymentInquiry,bcaOauthToken,bcaInquiry,bcaNotification,paymentCoreConfig, checkCancellable, bankBin, creditLimit, transaction, profile, payLaterRegister, paymentCallcheckPaidStatus, creditCardcheckPaidStatus, createPaymentList, paymentInquiryPut, paymentCallback } from '@apis/payment/core/paymentCore.js'
import { discountPromoSuggestion, discountApply, discountUnApply } from '@apis/payment/core/paymentCore.js'
import { checkAvailability, discountCashback, calculateDiscount } from '@apis/payment/core/paymentCore.js'
import { assertStatus, assertSuccess, parseCSV, randomList } from '@utils/index.js'
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';
import { createOrders } from '@generator/payment/core/paymentOrderId'

const host = 'https://lb-perf.tiket.com'
const orderDataGlobal = parseCSV('orders', 'data/orders.csv')
var userData = parseCSV('emails', 'data/email.csv')

export const paymentFlow4 = () => {
  const timeEpoch = Math.round(Date.now());
  var val = Math.floor(100000000 + Math.random() * 900000000);
  var referenceId='1'+val;
  //var referenceId=2003809728;

  //var orderHash=Math.random().toString(36).slice(2);

  var orderHash           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 24; i++ ) {
    orderHash += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }

  //const orderHash="tct37lmxof98tybuhyjjl"
  // var row = Math.floor(Math.random() * orderDataGlobal.length)
  // const userName=orderDataGlobal[row][3];
  //const userName = 'testing31370tiket.com'
  var row1 = Math.floor(Math.random() * userData.length)
  var userName = userData[row1][0]
  //console.log(userName)
  const discountCode = randomList(['PERFTEST'])
  var totalCustomerPrice=2000000
  const channelId=randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS', 'IOS'])
  const requestId=`perf1_${__VU}_${__ITER}_${uuidv4()}`;
  paymentsInquiry(referenceId,orderHash,userName,timeEpoch,channelId,requestId);

  // const paymentVersion=checkversion(referenceId,orderHash,userName,channelId,requestId);

  // const paymentGroup1=paymentGroup(referenceId,orderHash,userName,channelId,requestId);
  // const paymentGroupId='60f52d1e0c83f60001ec5a75'

  // const paymentMethod1=paymentMethod(referenceId,orderHash,paymentGroupId,userName,channelId,requestId);

  // const paymentLandingWithPaymentMethod=paymentLandingwithMethod(referenceId,orderHash,userName,channelId,requestId);

  // const promoSuggestion1=promoSuggestion(referenceId,orderHash,userName,channelId,requestId);

  const totalPrice=200000
  promoApply(referenceId,orderHash,totalPrice,userName,channelId);

  //const orderDetailId=applyDiscount.json().data.orderDetailId;
  // const orderDetailId=21473186;
  // const UnapplyDiscount=promoUnApply(referenceId, orderHash, totalCustomerPrice, orderDetailId, userName,channelId);

  // const paymentSubmit1=paymentSubmit(referenceId, orderHash, userName,channelId,requestId)

  // const paymentConfirm1=paymentConfirm(referenceId,orderHash,userName,channelId,requestId);

  // const discountCheckAvailability1=discountCheckAvailability(referenceId,orderHash,userName,channelId,requestId)
  // const discountCashback2=discountCashback1(referenceId,userName,channelId,requestId)
  //const calculatePromoDiscount1=calculatePromoDiscount(referenceId,userName,channelId,requestId)

  // const bcaOauthToken=bcaOauthToken1();
  // const accessToken=bcaOauthToken.json().access_token;

  //const requestId1="7800111001328101100134752"

  // const bcaInquiry=bcaInquiry1(accessToken,requestId,referenceId)
  // const totalAmount=bcaInquiry.json().TotalAmount;
  // const bcaNotification=bcaNotification1(accessToken,requestId,referenceId,totalAmount)
}

const checkversion = (referenceId,orderHash,userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS']),
      'channelId':channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'check-version'
    }
  }

  const queryParams = new URLSearchParams([
    ['orderHash', orderHash],
    ['referenceId', referenceId]
  ]);
  group('check-version', () => {
    const res = checkVersion(host, params, queryParams)
    assertStatus(res, 200, true, 'checkVersion')
    assertSuccess(res, 'SUCCESS', true, 'checkVersion')
  })
}

const paymentGroup = (referenceId,orderHash,userName,channelId,requestId) => {
  var row = Math.floor(Math.random() * orderDataGlobal.length)
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'payment-group'
    }
  }
  const queryParams = new URLSearchParams([
    ['orderHash', orderHash],
    ['referenceId', referenceId]
  ])
  group('payment-group', () => {
    const res = paymentV4paymentGroup(host, params, queryParams)
    assertStatus(res, 200, true, 'paymentV4paymentGroup')
    assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentGroup')
  })
}

const paymentMethod = (referenceId,orderHash,paymentGroupId,userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'payment-Method'
    }
  }
  const queryParams = new URLSearchParams([
    ['orderHash', orderHash],
    ['paymentGroupId', paymentGroupId],
    ['referenceId', referenceId]
  ])
  group('payment-Method', () => {
    const res = paymentV4paymentMethod(host, params, queryParams)
    assertStatus(res, 200, true, 'paymentV4paymentMethod')
    assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentMethod')
  })
}

const paymentLandingwithMethod = (referenceId,orderHash,userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'payment-landing-with-method'
    }
  }
  const body = {
    referenceId: referenceId,
    orderHash: orderHash,
    paymentMethod: 'VA_BCA'
  }

  // group('payment-landing-withmethod', () => {
  const hp = paymentV4Landing(host, params, body)
  assertStatus(hp, 200, true, 'paymentV4Landing')
  assertSuccess(hp, 'SUCCESS', true, 'paymentV4Landing')
  // })
}

const promoSuggestion = (referenceId,orderHash,userName,channelId,requestId) => {
  var row = Math.floor(Math.random() * orderDataGlobal.length)
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': userName
    },
    tags: {
      name: 'promo-suggestion'
    }
  }
  const queryParams = new URLSearchParams([
    ['currency', 'IDR'],
    ['orderId', referenceId],
    ['totalAmount', 200000],
    ['productType', 'EVENT'],
    ['size', 10],
    ['page', 0]
  ])
  group('promo-suggestion', () => {
    const res = discountPromoSuggestion(host, params, queryParams)
    assertStatus(res, 200, true, 'discountPromoSuggestion')
    assertSuccess(res, 'SUCCESS', true, 'discountPromoSuggestion')
  })
}

// export const applyUnapplyandSubmit = () => {
//   var row = Math.floor(Math.random() * userData.length)
//   var user = userData[row][0]
//   group('apply-unapply-submit', () => {
//     var data = createOrders(user)
//     const orderID = data.json().data.orderId
//     const orderHash = data.json().data.orderHash
//     const totalCustomerPrice = data.json().data.totalCustomerPrice
//     var paymentLandingMethod = '0'
//     if (paymentLandingMethod === '0') {
//       paymentLandingwithMethod(orderID, orderHash, user)
//     } else {
//       paymentLanding(orderID, orderHash, user)
//     }
//     const resp = promoApply(orderID, orderHash, totalCustomerPrice, user)
//     promoUnApply(orderID, orderHash, totalCustomerPrice, resp.json().data.orderDetailId, user)
//     if (paymentLandingMethod === '0') {
//       paymentSubmit(orderID, orderHash, user)
//     }
//   })
// }

// export const paymentLanding = () => {
//   var row = Math.floor(Math.random() * orderDataGlobal.length)
//   const params = {
//     headers: {
//       accept: '*/*',
//       'channelId': randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS', 'MWEB']),
//       'requestId': '23123123',
//       'serviceId': 'gateway',
//       'storeId': 'TIKETCOM',
//       'username': orderDataGlobal[row][3]
//     },
//     tags: {
//       name: 'payment-landing'
//     }
//   }
//   const body = {
//     referenceId: orderDataGlobal[row][0],
//     orderHash: orderDataGlobal[row][1],
//     paymentMethod: ''
//   }

//   group('payment-landing', () => {
//   const hp = paymentV4Landing(host, params, body)
//   assertStatus(hp, 200, true, 'paymentV4Landing')
//   assertSuccess(hp, 'SUCCESS', true, 'paymentV4Landing')
//   })
// }


const promoApply = (referenceId,orderHash,totalPrice,userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'discount-apply'
    }
  }
  const body = {
    orderId: referenceId,
    orderHash: orderHash,
    productType: 'EVENT',
    discountCode: "PERFTEST",
    totalPrice: 200000,
    currency: 'IDR',
    paymentType: 'VA_BCA',
    cardNumber: null,
    isInstallment: null,
    tenor: null,
    binNumber: null
  }

  // group('discount-apply', () => {
    const hp = discountApply(host, params, body)
    assertStatus(hp, 200, true, 'discountApply')
    assertSuccess(hp, 'SUCCESS', true, 'discountApply')
  // })
  return hp
}

const promoUnApply = (referenceId, orderHash, totalCustomerPrice, orderDetailId, userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'discount-unapply'
    }
  }
  const body = {
    orderId: referenceId,
    orderHash: orderHash,
    orderDetailId: orderDetailId,
    productType: 'EVENT',
    discountCode: "PERFTEST",
    "totalPrice": null,
    "currency": "IDR",
    "paymentType": null,
    "cardNumber": null,
    "discountType": null,
    "totalDiscount": null,
    "orderDetailId": 21473186
  }

  // group('discount-unapply', () => {
    const hp = discountUnApply(host, params, body)
    assertStatus(hp, 200, true, 'discountUnApply')
    assertSuccess(hp, 'SUCCESS', true, 'discountUnApply')
  // })
}


const paymentSubmit = (referenceId, orderHash, userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName,
      'X-Account-Id': '0'
    },
    tags: {
      name: 'payment-submit'
    }
  }
  const body = {
    referenceId: referenceId,
    orderHash: orderHash
  }
  // group('payment-sumbit', () => {
    const hp = paymentDetailVA_BCA(host, params, body)
    assertStatus(hp, 200, true, 'paymentDetailVA_BCA')
    assertSuccess(hp, 'SUCCESS', true, 'paymentDetailVA_BCA')
  // })
}

const paymentConfirm = (referenceId, orderHash, userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName,
      'X-Account-Id': '0'
    },
    tags: {
      name: 'payment-Confirm'
    }
  }
  const body = {
    debitOnline:false,
    referenceId: referenceId,
    orderHash: orderHash
  }
  // group('payment-sumbit', () => {
    const hp = paymentConfirmVA_BCA(host, params, body)
    assertStatus(hp, 200, true, 'paymentConfirmVA_BCA')
    assertSuccess(hp, 'SUCCESS', true, 'paymentConfirmVA_BCA')
  // })
}

const paymentsInquiry = (referenceId,orderHash,userName,timeEpoch,channelId,requestId) => {
  var row = Math.floor(Math.random() * orderDataGlobal.length)
  const now = Date.now(); // Unix timestamp in milliseconds
  //console.log( "current eppooch time "+now );
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'payment-inquiry'
    }
  }
  const body = { 
    "storeId": "TIKETCOM",
    "channelId": channelId,
    "referenceId": referenceId,
    "orderHash": orderHash,
    "checkoutDate": now,
    "paymentExpired": 1656131543000,
    "realPaymentExpired": 1656131543000,
    "paymentAmount": 35000,
    "paymentCurrency": "IDR",
    "paymentStatus": "SHOPPINGCART",
    "ipUser": "192.168.64.29",
    "userLang": "EN",
    "customerName": "AFFI IBRAHIM",
    "customerContactNumber": "+6281807556746",
    "username": userName,
    "paymentUnitDetails": [
        {
            "referenceDetailId": 1200420004,
            "productType": "EVENT",
            "orderName": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
            "orderNameDetail": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
            "createdDate": 1650309021000,
            "totalPrice": 3470332,
            "cashback": 0,
            "cashbackTIX": 0,
            "currency": "IDR",
            "breakdownPrice": [
                {
                    "key": "event_qty_4",
                    "type": "product",
                    "value": 3470332
                }
            ]
        },
        {
            "referenceDetailId": 1200420005,
            "productType": "PAYMENT",
            "orderName": "payment",
            "orderNameDetail": null,
            "createdDate": 1650309021530,
            "totalPrice": 0,
            "cashback": null,
            "cashbackTIX": null,
            "currency": "IDR",
            "breakdownPrice": []
        }
    ],
    "message": {
        "products": [
            {
                "type": "event",
                "detailId": "1200420004",
                "title": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
                "detail": "6 Tickets For Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
                "date": "Saturday, 30 April 2022 (00:00:00)",
                "ticketClass": "",
                "customers": [
                    {
                        "name": "",
                        "type": null
                    },
                    {
                        "name": "",
                        "type": null
                    },
                    {
                        "name": "",
                        "type": null
                    },
                    {
                        "name": "",
                        "type": null
                    },
                    {
                        "name": "",
                        "type": null
                    },
                    {
                        "name": "",
                        "type": null
                    }
                ],
                "airportTransfer": null,
                "dateTime": "2022-04-30 00:00:00"
            }
        ]
    },
    "paymentMddFields": {
        "timeBeforeEvents": "0",
        "orderType": "event",
        "custAccAge": null,
        "custPassword": "",
        "channel": "",
        "hotelRoomType": "",
        "destinationCity": "",
        "nameOfService": "",
        "starRating": "",
        "valueAdd": "",
        "cardPaste": false,
        "fbLoggedIn": false,
        "storedCardPayment": null,
        "storedCardAge": null,
        "specialRequest": "",
        "specificDetail": null,
        "customerLanguage": "english",
        "returningCustomer": "0",
        "cardHolderEditDistance": "",
        "customerDateReg": "2019-05-21 13:44:30.0",
        "customerLastUpdated": null,
        "customerFirstPurchase": null,
        "userIp": "",
        "paymentGateway": null,
        "siftScienceDataRequest": {
            "userId": null,
            "sessionId": null,
            "orderId": null,
            "userEmail": null,
            "ip": null,
            "amount": null,
            "currencyCode": null,
            "items": [
                {
                    "itemId": "1200420004",
                    "productTitle": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
                    "currencyCode": "IDR",
                    "price": "3470332",
                    "quantity": "6"
                }
            ],
            "paymentMethods": null,
            "promotions": null,
            "bankName": null,
            "bankCountry": null,
            "savedPaymentMethod": null,
            "creditCardCount": 0,
            "phoneNumber": "+6281807556746",
            "siftDaysToGo": 10,
            "flightDepartureTime": null,
            "flightDepartureAirport": null,
            "flightDepartureHour": null,
            "flightArrivalAirport": null,
            "flightNumAdults": null,
            "flightNumChild": null,
            "flightNumInfant": null,
            "flightTotalPassengers": null,
            "flightRoute": null,
            "flightPassengersName": null,
            "flightPassengers": []
        },
        "tokenisation": false
    },
    "secretKey": "9905a477c91b40cdabff6679815ff050",
    "listPayment": {
        "creditcard": "true",
        "klikbca": "true",
        "bca_klikpay": "true",
        "mandiri_clickpay": null,
        "cimb_clicks": "true",
        "epay_bri": null,
        "mandiri_transfer": "true",
        "bca_transfer": "true",
        "va_bca": "true",
        "va_mandiri": "true",
        "va_bni": "true",
        "va_bri": "true",
        "jatis": "true",
        "cash_on_site": null,
        "oneklik": "false",
        "alfamart": "false",
        "indomaret": "true",
        "kredivo": "true",
        "bni_yap": null,
        "akulaku": "true",
        "gopay": "true",
        "sakuku": "true",
        "linkaja": "true",
        "pay_at_hotel": null,
        "pay_at_hotel_without_cc": null,
        "pay_later": "true",
        "acc": null,
        "shopee_pay": "true",
        "ovo": "true",
        "corporate_deposit": null,
        "corporate_billing": null,
        "zero_payment": null
    },
    "disableMessage": {
        "creditcard": "",
        "klikbca": "",
        "bca_klikpay": "",
        "mandiri_clickpay": "",
        "cimb_clicks": "",
        "epay_bri": "",
        "mandiri_transfer": "",
        "bca_transfer": "",
        "va_bca": "",
        "va_mandiri": "",
        "va_bni": "",
        "va_bri": "",
        "jatis": "",
        "cash_on_site": "",
        "oneklik": "AMOUNT_LIMIT_ONEKLIK",
        "alfamart": "AMOUNT_LIMIT_ALFA",
        "indomaret": "",
        "kredivo": "",
        "bni_yap": "",
        "akulaku": "",
        "gopay": "",
        "sakuku": "",
        "linkaja": "",
        "pay_at_hotel": "",
        "pay_at_hotel_without_cc": "",
        "acc": "",
        "pay_later": "",
        "shopee_pay": "",
        "ovo": "",
        "corporate_deposit": "",
        "corporate_billing": "",
        "zero_payment": ""
    },
    "priceChangeDetails": null,
    "preAuth": null,
    "accountId": "300006533"
  }

  group('payment-inquiry', () => {
  const hp = paymentInquiry(host, params, body)
  assertStatus(hp, 200, true, 'paymentInquiry')
  assertSuccess(hp, 'SUCCESS', true, 'paymentInquiry')
  })
}

const bcaOauthToken1 = () => {
  const params = {
    headers: {
      'Authorization': 'Basic NjY0ODI2MTAtMTkzMi00MTNjLWI0ZTctMWQ1MmI0OTFmN2ZmOjVjZWYzNzBkLTAyZDgtNGNjMi04ZjUxLTE3OGI0ZGMxMzc4Yw=='
    },
    tags: {
      name: 'BCA-getToken'
    }
  }
  const body = { 
  }
  //group('BCA-getToken', () => {
    const res = bcaOauthToken(host, params,body)
    assertStatus(res, 200, true, 'bcaOauthToken')
    // assertSuccess(res, 'SUCCESS', true, 'bcaOauthToken')
  //})
  return res
}

const bcaInquiry1 = (at,requestId,referenceId) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`,
    },
    tags: {
      name: 'bca-inquiry'
    }
  }
  const body = { 
    "CompanyCode": "78001",
    "CustomerNumber": referenceId,
    "RequestID": requestId,
    "ChannelType": "6014",
    "TransactionDate": "11/02/2022 18:23:05",
    "AdditionalData": "" 
  }

  //group('bca-inquiry', () => {
  const hp = bcaInquiry(host, params, body)
  assertStatus(hp, 200, true, 'bcaInquiry')
  // assertSuccess(hp, 'SUCCESS', true, 'bcaInquiry')
  //})
  return hp
}

const bcaNotification1 = (at,requestId,referenceId,totalAmount) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`,
    },
    tags: {
      name: 'bca-notification'
    }
  }
  const body = { 
    "CompanyCode": "78001",
    "CustomerNumber": referenceId,
    "RequestID": requestId,
    "ChannelType": "6014",
    "CustomerName": "Customer BCA Virtual Account",
    "CurrencyCode": "IDR",
    "PaidAmount": totalAmount,
    "TotalAmount": totalAmount,
    "SubCompany": "00000",
    "TransactionDate": "11/02/2022 16:59:05",
    "Reference": "12345",
    "DetailBills": null,
    "FlagAdvice": "N",
    "Additionaldata": ""
  }

  group('bca-notification', () => {
  const hp = bcaNotification(host, params, body)
  assertStatus(hp, 200, true, 'bcaNotification')
  // assertSuccess(hp, 'SUCCESS', true, 'bcaNotification')
  })
}

const discountCheckAvailability = (referenceId,orderHash,userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId':'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': userName
    },
    tags: {
      name: 'discountCheckAvailability'
    }
  }
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "productType": "EVENT",
    "discountCode": "PERFTEST",
    "totalPrice": 200000,
    "currency": "IDR",
    "paymentType": null,
    "cardNumber": null,
    "isInstallment": null,
    "tenor": null,
    "binNumber": null
}

  // group('payment-landing-withmethod', () => {
  const hp = checkAvailability(host, params, body)
  assertStatus(hp, 200, true, 'discountCheckAvailability')
  assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailability')
  // })
}

const discountCashback1 = (referenceId,userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId':'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': userName
    },
    tags: {
      name: 'discountCashback'
    }
  }
  const body = {
}

  // group('payment-landing-withmethod', () => {
  const hp = discountCashback(host, params, body,referenceId)
  assertStatus(hp, 200, true, 'discountCashback')
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback')
  // })
}

const calculatePromoDiscount = (referenceId,userName,channelId,requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId':'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': userName
    },
    tags: {
      name: 'calculatePromoDiscount'
    }
  }
  const body = {
    "code": "PERFTEST",
    "orderDetails": [
        {
            "amount": 1312110.1,
            "discount": 100000,
            "orderAttribute": {
                "customerCurrency": "IDR",
                "orderType": "Event",
                "userLogin": "1"
            },
            "productType": "Event",
            "referenceId": "2088121689"
        }
    ],
    "payment": {
        "binNumber": "string",
        "cardNumber": "string",
        "paymentId": 0
    },
    "referenceId": referenceId,
    "totalPrice": 200000,
    "usedPromoCodes": []
}

  // group('payment-landing-withmethod', () => {
  const hp = calculateDiscount(host, params, body)
  assertStatus(hp, 200, true, 'calculatePromoDiscount')
  assertSuccess(hp, 'SUCCESS', true, 'calculatePromoDiscount')
  // })
}