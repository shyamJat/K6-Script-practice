import {
  uuidv4
} from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { group } from 'k6'
import { checkVersion, paymentV4Landing, paymentV4paymentGroup, paymentV4paymentMethod, paymentDetailVA_BCA,paymentConfirmVA_BCA,paymentInquiry,bcaOauthToken,bcaInquiry,bcaNotification,paymentCoreConfig, checkCancellable, bankBin, creditLimit, transaction, profile, payLaterRegister, paymentCallcheckPaidStatus, creditCardcheckPaidStatus, createPaymentList, paymentInquiryPut, paymentCallback} from '@apis/payment/core/paymentCore.js'
import { discountPromoSuggestion, discountApply, discountUnApply } from '@apis/payment/core/paymentCore.js'
import { checkAvailability, discountCashback, calculateDiscount } from '@apis/payment/core/paymentCore.js'
import { promoSuggestionV2,discountApplyV2,discountUnAplyV2,discountCheckAvailabilityV2,discountCashback2 } from '@apis/payment/core/promoGateway.js'
import { assertStatus, assertSuccess, parseCSV, randomList,assertSuccessGQL } from '@utils/index.js'
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';
import { createOrders } from '@generator/payment/core/paymentOrderId'
import { qglCall } from '@apis/payment/core/paymentCoreGQL.js'

const host = 'https://lb-perf.tiket.com'
const orderDataGlobal = parseCSV('orders', 'data/orders.csv')
var userData = parseCSV('emails', 'data/email.csv')
var objectIdData = parseCSV('objectIds', 'data/objectId.csv')

export const paymentFlow3 = () => {
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
  const channelId=randomList(['ANDROID','IOS','WEB','DESKTOP'])
  const requestId=`perf1_${__VU}_${__ITER}_${uuidv4()}`;
  var row2 = Math.floor(Math.random() * objectIdData.length)
  var objectId = objectIdData[row2][0]
  //createPaymentListFunc(channelId,userName,requestId,referenceId);
  paymentsInquiry(referenceId,orderHash,userName,timeEpoch,channelId,requestId);

  checkversion(referenceId,orderHash,userName,channelId,requestId);
  checkversion(referenceId,orderHash,userName,channelId,requestId);
  checkversion(referenceId,orderHash,userName,channelId,requestId);
  checkversion(referenceId,orderHash,userName,channelId,requestId);
  checkversion(referenceId,orderHash,userName,channelId,requestId);
  checkversion(referenceId,orderHash,userName,channelId,requestId);
  checkversion(referenceId,orderHash,userName,channelId,requestId);
  checkversion(referenceId,orderHash,userName,channelId,requestId);
  checkversion(referenceId,orderHash,userName,channelId,requestId);

  //const paymentGroup1=paymentGroup(referenceId,orderHash,userName,channelId,requestId);
  const paymentGroupId='60f52d1e0c83f60001ec5a75'

  //const paymentMethod1=paymentMethod(referenceId,orderHash,paymentGroupId,userName,channelId,requestId);

  paymentLandingwithMethod(referenceId,orderHash,userName,channelId,requestId);
  paymentLandingwithMethod(referenceId,orderHash,userName,channelId,requestId);
  paymentLandingwithMethod(referenceId,orderHash,userName,channelId,requestId);
  paymentLandingwithMethod(referenceId,orderHash,userName,channelId,requestId);
  paymentLandingwithMethod(referenceId,orderHash,userName,channelId,requestId);

 // const promoSuggestion1=promoSuggestion(referenceId,orderHash,userName,channelId,requestId);

  const totalPrice=200000
  //promoApply(referenceId,orderHash,totalPrice,userName,channelId);
  //applyDiscount1(referenceId,orderHash)
  DiscountApplyV2(referenceId,orderHash,totalPrice,userName,channelId,requestId)

  //const orderDetailId=applyDiscount.json().data.orderDetailId;
  const orderDetailId=21473186;
  //const UnapplyDiscount=promoUnApply(referenceId, orderHash, totalCustomerPrice, orderDetailId, userName,channelId);

  paymentSubmit(referenceId, orderHash, userName,channelId,requestId)

 // const paymentConfirm1=paymentConfirm(referenceId,orderHash,userName,channelId,requestId);

  //discountCheckAvailability(referenceId,orderHash,userName,channelId,requestId)
  //checkAvailabilityDiscount(referenceId,orderHash)
 // const discountCashback2=discountCashback1(referenceId,userName,channelId,requestId)
  //const calculatePromoDiscount1=calculatePromoDiscount(referenceId,userName,channelId,requestId)
  DiscountCheckAvailabilityV2(referenceId,orderHash,userName,channelId,requestId)

  const bcaOauthToken=bcaOauthToken1();
  const accessToken=bcaOauthToken.json().access_token;
  const requestId1="7800111001328101100134752"
  const bcaInquiry=bcaInquiry1(accessToken,requestId,referenceId)
  const totalAmount=bcaInquiry.json().TotalAmount;
  const bcaNotification=bcaNotification1(accessToken,requestId,referenceId,totalAmount)


  //paymentCoreConfigFunc(userName,channelId,requestId);
  checkCancellableFunc(referenceId,userName,channelId,requestId);
  checkCancellableFunc(referenceId,userName,channelId,requestId);
  bankBinFunc(objectId,userName,channelId,requestId);
   // paymentInquiryPutFunc(timeEpoch,referenceId,userName,channelId,requestId);
   const lang=randomList(['en', 'id'])
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);
   creditLimitFunc(userName,channelId,requestId,lang);

  //  transactionFunc(referenceId,userName,channelId,requestId,lang);
  //  transactionFunc(referenceId,userName,channelId,requestId,lang);
  //  transactionFunc(referenceId,userName,channelId,requestId,lang);
  //  transactionFunc(referenceId,userName,channelId,requestId,lang);

   //profileFunc(userName,channelId,requestId,lang);
  // payLaterRegisterFunc(lang,userName,channelId,requestId); 
  // checkPaidStatusFunc(lang,requestId,userName,channelId,referenceId);
  // checkPaidStatusFunc(lang,requestId,userName,channelId,referenceId);
  // checkPaidStatusFunc(lang,requestId,userName,channelId,referenceId);
  // creditCardcheckPaidStatusFunc(channelId,requestId,userName,referenceId);
  // creditCardcheckPaidStatusFunc(channelId,requestId,userName,referenceId);
  // creditCardcheckPaidStatusFunc(channelId,requestId,userName,referenceId); 
  //paymentFunc();
}

const PromoSuggestionV2 = (referenceId,orderHash,userName,channelId,requestId) => {
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
      name: 'promoSuggestionV2'
    }
  }
  const body = {
      "currency": "IDR",
      "productType": "FLIGHT",
      "size": 100,
      "page": 0,
      "lang": "id",
      "paymentType": "VA_BCA",
      "totalPrice": 708900,
      "referenceId": referenceId,
      "orderHash": orderHash
  }

  // group('payment-landing-withmethod', () => {
  const hp = promoSuggestionV2(host, params, body)
  assertStatus(hp, 200, true, 'promoSuggestionV2')
  assertSuccess(hp, 'SUCCESS', true, 'promoSuggestionV2')
  // })
}


const DiscountApplyV2 = (referenceId,orderHash,totalPrice,userName,channelId,requestId) => {
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
      name: 'discountApplyV2'
    }
  }
  const body = {
      "orderId" : referenceId, 
      "orderHash": orderHash,
      "discountCode" : "PERFTEST",
      "currency" : "IDR",
      "paymentType" : "VA_BCA",
      "productType" : "EVENT",
      "totalPrice" : 708900,
      "discountType" : "PROMOCODE"
    }

  // group('payment-landing-withmethod', () => {
  const hp = discountApplyV2(host, params, body)
  assertStatus(hp, 200, true, 'discountApplyV2')
  assertSuccess(hp, 'SUCCESS', true, 'discountApplyV2')
  // })
}

const DiscountUnAplyV2 = (referenceId, orderHash, totalCustomerPrice, requestId, userName,channelId) => {
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
      name: 'discountUnAplyV2'
    }
  }
  const body = {
      "orderId": referenceId,
      "orderHash": orderHash,
      "discountCode": "PERFTEST"
  }

  // group('payment-landing-withmethod', () => {
  const hp = discountUnAplyV2(host, params, body)
  assertStatus(hp, 200, true, 'discountUnAplyV2')
  assertSuccess(hp, 'SUCCESS', true, 'discountUnAplyV2')
  // })
}

const DiscountCheckAvailabilityV2 = (referenceId,orderHash,userName,channelId,requestId) => {
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
      name: 'discountCheckAvailabilityV2'
    }
  }
  const body = {
      "orderId" : referenceId, 
      "orderHash": orderHash,
      "discountCode" : "PERFTEST",
      "currency" : "IDR",
      "paymentType" : "VA_BCA",
      "productType" : "EVENT",
      "totalPrice" : 708900,
      "discountType" : "PROMOCODE"
    }

  // group('payment-landing-withmethod', () => {
  const hp = discountCheckAvailabilityV2(host, params, body)
  assertStatus(hp, 200, true, 'discountCheckAvailabilityV2')
  assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailabilityV2')
  // })
}

const DiscountCashback = (referenceId,orderHash,userName,channelId,requestId) => {
    const promoCode="PERFTEST"
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
      name: 'discountCashback'
    }
  }
  // group('payment-landing-withmethod', () => {
  const hp = discountCashback2(host, params, referenceId,promoCode)
  assertStatus(hp, 200, true, 'discountCashback')
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback')
  // })
}


const promoSuggestion1 = (orderId,orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority:"gql-gatotkaca.tiket.com",
      'content-type':'application/json',
      'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin':"https://payment-gatotkaca.tiket.com",
      'sec-fetch-site':'same-site',
      'sec-fetch-mode':'cors',
      'sec-fetch-dest':'empty',
      'referer':"https://payment-gatotkaca.tiket.com/",
      'accept-language':'en-US,en;q=0.9',
      'token':'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid':'0',
      'app-source':'tix-payment-fe|1.1.0',
      'authorization':'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid':'ANDROID',
      'content-type':'application/json',
      'deviceid':'a3d2afa066efab21c24f8dad8606425a',
      'lang':'id',
      'newsession':'true',
      'platform':'mweb',
      'tiketsessionid':'3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id':'0',
    },
    tags: {
      name: 'promo-suggestion'
    }
  }
  const mutation = `mutation getPromoSuggestion($payload: String) {  getPromoSuggestion(payload: $payload) {    code    message    serverTime    data {      description      code      expiredDate      amount      position      source    }  }}`
  const payload = {
    'orderId': orderId,
    'totalAmount': 200000,
    'productType': 'EVENT',
    'size': 100,
    'page': 0,
    'orderHash': orderHash,
    'paymentKey': 'BCA_TRANSFER',
    //'paymentKey': 'BCA_TRANSFER',
    'currency': 'IDR'
  }
  const variables = {
    "payload": JSON.stringify(payload)
  }
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'getPromoSuggestion'
  }
  group('promo-suggestion', () => {
    const hp = qglCall(host, params, body)
    assertStatus(hp, 200, true, 'getPromoSuggestion')
    assertSuccessGQL(hp, 'SUCCESS', true, 'getPromoSuggestion')
  })
}

const applyDiscount1 = (orderId,orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority:"gql-gatotkaca.tiket.com",
      'content-type':'application/json',
      'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin':"https://payment-gatotkaca.tiket.com",
      'sec-fetch-site':'same-site',
      'sec-fetch-mode':'cors',
      'sec-fetch-dest':'empty',
      'referer':"https://payment-gatotkaca.tiket.com/",
      'accept-language':'en-US,en;q=0.9',
      'token':'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid':'0',
      'app-source':'tix-payment-fe|1.1.0',
      'authorization':'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid':'ANDROID',
      'deviceid':'a3d2afa066efab21c24f8dad8606425a',
      'lang':'id',
      'newsession':'true',
      'platform':'mweb',
      'tiketsessionid':'3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id':'0',
    },
    tags: {
      name: 'apply-promo'
    }
  }
  const mutation = `mutation applyDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {  applyDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {    code    message    data {      discountCode      discountType      orderDetailId      totalDiscount    }  }}`
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  }
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'applyDiscount'
  }
  const hp = qglCall(host, params, body)
  assertStatus(hp, 200, true, 'applyDiscount')
  //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  //return hp.body

  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })

}
const unApplyDiscount1 = (orderId,orderHash,orderDetailId) => {
  const params = {
    headers: {
      accept: '*/*',
      authority:"gql-gatotkaca.tiket.com",
      'content-type':'application/json',
      'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin':"https://payment-gatotkaca.tiket.com",
      'sec-fetch-site':'same-site',
      'sec-fetch-mode':'cors',
      'sec-fetch-dest':'empty',
      'referer':"https://payment-gatotkaca.tiket.com/",
      'accept-language':'en-US,en;q=0.9',
      'token':'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid':'0',
      'app-source':'tix-payment-fe|1.1.0',
      'authorization':'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid':'ANDROID',
      'content-type':'application/json',
      'deviceid':'a3d2afa066efab21c24f8dad8606425a',
      'lang':'id',
      'newsession':'true',
      'platform':'mweb',
      'tiketsessionid':'3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id':'0',
    },
    tags: {
      name: 'unapply-promo'
    }
  }
  const mutation = `mutation unapplyDiscount($payload: String) {  discountEngineUnapply(payload: $payload) {    code    message    data  }}`
  const payload = {
    'orderId': orderId,
    'orderHash': orderHash,
    'productType': 'EVENT',
    'discountCode': "PERFTEST",
    'orderDetailId': orderDetailId,
    'currency': 'IDR',
  }
  const variable = {
    "payload": JSON.stringify(payload)
  }
  const body = {
    query: mutation,
    variables: variable,
    operationName: 'unapplyDiscount'
  }

  group('unapply-promo', () => {
    const hp = qglCall(host, params, body)
    assertStatus(hp, 200, true, 'discountEngineUnapply')
    assertSuccessGQL(hp, 'SUCCESS', true, 'discountEngineUnapply')
  })
}

const checkAvailabilityDiscount = (orderId,orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority:"gql-gatotkaca.tiket.com",
      'content-type':'application/json',
      'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin':"https://payment-gatotkaca.tiket.com",
      'sec-fetch-site':'same-site',
      'sec-fetch-mode':'cors',
      'sec-fetch-dest':'empty',
      'referer':"https://payment-gatotkaca.tiket.com/",
      'accept-language':'en-US,en;q=0.9',
      'token':'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid':'0',
      'app-source':'tix-payment-fe|1.1.0',
      'authorization':'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid':'ANDROID',
      'content-type':'application/json',
      'deviceid':'a3d2afa066efab21c24f8dad8606425a',
      'lang':'id',
      'newsession':'true',
      'platform':'mweb',
      'tiketsessionid':'3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id':'0',
    },
    tags: {
      name: 'checkAvailabilityDiscount'
    }
  }
  const mutation = `mutation checkAvailabilityDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {
    checkAvailabilityDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {
      code
      message
      data
    }
  }`
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  }
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'checkAvailabilityDiscount'
  }
  const hp = qglCall(host, params, body)
  assertStatus(hp, 200, true, 'checkAvailabilityDiscount')
  assertSuccessGQL(hp, 'SUCCESS', true, 'checkAvailabilityDiscount')
  //return hp.body

  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })

}
const getPromoCashbackInfo = (orderId) => {
  const params = {
    headers: {
      accept: '*/*',
      authority:"gql-gatotkaca.tiket.com",
      'content-type':'application/json',
      'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin':"https://payment-gatotkaca.tiket.com",
      'sec-fetch-site':'same-site',
      'sec-fetch-mode':'cors',
      'sec-fetch-dest':'empty',
      'referer':"https://payment-gatotkaca.tiket.com/",
      'accept-language':'en-US,en;q=0.9',
      'token':'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid':'0',
      'app-source':'tix-payment-fe|1.1.0',
      'authorization':'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid':'ANDROID',
      'content-type':'application/json',
      'deviceid':'a3d2afa066efab21c24f8dad8606425a',
      'lang':'id',
      'newsession':'true',
      'platform':'mweb',
      'tiketsessionid':'3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id':'0',
    },
    tags: {
      name: 'getPromoCashbackInfo'
    }
  }
  const mutation = `query getPromoCashbackInfo($payload: String) {
    getCashbackInfo(payload: $payload) {
      code
      message
      data {
        promoCode
        cashbackAmount
      }
    }
  }`
  const payload = {
    'orderId': orderId,
    'promoCode': "PERFTEST",
  }
  const variable = {
    "payload": JSON.stringify(payload)
  }
  const body = {
    query: mutation,
    variables: variable,
    operationName: 'getPromoCashbackInfo'
  }

  group('getPromoCashbackInfo', () => {
    const hp = qglCall(host, params, body)
    assertStatus(hp, 200, true, 'getCashbackInfo')
    assertSuccessGQL(hp, 'SUCCESS', true, 'getCashbackInfo')
  })
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
    "paymentExpired": 1687844638000,
    "realPaymentExpired": 1687844638000,
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



const paymentCoreConfigFunc =(userName,channelId,requestId)=>{
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
      name: 'paymentCoreConfig'
    }
  }
  group('paymentCoreConfig', () => {
  const hp = paymentCoreConfig(host, params)
  assertStatus(hp, 200, true, 'paymentCoreConfig')
  assertSuccess(hp, 'SUCCESS', true, 'paymentCoreConfig')
})
}

const checkCancellableFunc =(referenceId,userName,channelId,requestId)=>{
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
      name: 'PaymentCoreCheckCancellable'
    }
  }
  group('PaymentCoreCheckCancellable', () => {
  const hp = checkCancellable(host, params,referenceId)
  assertStatus(hp, 200, true, 'PaymentCoreCheckCancellable')
  assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreCheckCancellable')
})
}

const bankBinFunc =(objectId,userName,channelId,requestId)=>{
  //const bid=Math.floor(Math.random()*10);
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
      name: 'PaymentCoreBankBin'
    }
  }
  group('PaymentCoreBankBin', () => {
  const hp = bankBin(host, params,objectId)
  assertStatus(hp, 200, true, 'PaymentCoreBankBin')
  assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreBankBin')
})
}

const paymentInquiryPutFunc =(timeEpoch,referenceId,userName,channelId,requestId)=>{
  //let id = 120073005+Math.floor(Math.random() * 10);
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
        name: 'PaymentCorePaymentInquiryPut'
      }
    }
    const body={
      "paymentUnitDetails": [
        {
            "referenceDetailId": 1200920065,
            "productType": "EVENT",
            "orderName": "Konser Maroon 5 Kursi",
            "orderNameDetail": "Paket Lima Seating Otomatis Tanpa Kalender",
            "createdDate": timeEpoch,
            "totalPrice": 12000,
            "cashback": 0,
            "cashbackTIX": 0,
            "currency": "IDR",
            "breakdownPrice": [
                {
                    "key": "event_qty_1",
                    "type": "product",
                    "value": 12000
                }
            ]
        },
        {
            "referenceDetailId": 1200230040,
            "productType": "PROMOCODE",
            "orderName": "PROMOKU",
            "orderNameDetail": "Promo Code Worth IDR 2000",
            "createdDate": timeEpoch,
            "totalPrice": -2000,
            "cashback": 0,
            "cashbackTIX": 0,
            "currency": "IDR",
            "breakdownPrice": []
        }
    ],
    "secretKey": "9905a477c91b40cdabff6679815ff050"
    }
    group('PaymentCorePaymentInquiryPut', () => {
    const hp = paymentInquiryPut(host,params,body,referenceId)
    assertStatus(hp, 200, true, 'PaymentCorePaymentInquiryPut')
    assertSuccess(hp, 'SUCCESS', true, 'PaymentCorePaymentInquiryPut')
  })
  }

const creditLimitFunc =(userName,channelId,requestId,lang)=>{
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language':lang,
      'X-Account-Id':'TIKETCOM',
      'X-Store-Id':'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency':'IDR',
      'X-Identity':'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com'

    },
    tags: {
      name: 'PayLaterCreditLimit'
    }
  }
  group('PayLaterCreditLimit', () => {
  const hp = creditLimit(host, params)
  assertStatus(hp, 200, true, 'PayLaterCreditLimit')
  assertSuccess(hp, 'SUCCESS', true, 'PayLaterCreditLimit')
})
}

const transactionFunc =(referenceId,userName,channelId,requestId,lang)=>{
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language':lang,
      'X-Account-Id':'TIKETCOM',
      'X-Store-Id':'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency':'IDR',
      'X-Identity':'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': userName
    },
    tags: {
      name: 'PayLaterTransaction'
    }
  }
  group('PayLaterTransaction', () => {
  const hp = transaction(host, params,referenceId)
  assertStatus(hp, 200, true, 'PayLaterTransaction')
  //assertSuccess(hp, 'SUCCESS', true, 'PayLaterTransaction')
})
}

const profileFunc =(userName,channelId,requestId,lang)=>{
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language':lang,
      'X-Account-Id':'TIKETCOM',
      'X-Store-Id':'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency':'IDR',
      'X-Identity':'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com'
    },
    tags: {
      name: 'PayLaterProfile'
    }
  }
  group('PayLaterProfile', () => {
  const hp = profile(host, params)
  assertStatus(hp, 200, true, 'PayLaterProfile')
  assertSuccess(hp, 'SUCCESS', true, 'PayLaterProfile')
})
}


const checkPaidStatusFunc =(requestId,username,channelId,referenceId)=>{
//let id = 120073005+Math.floor(Math.random() *10);
  const params = {
    headers: {
      accept: '*/*',
      'storeId':'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-payment-callback/payment/checkPaidStatus'
    }
  }
  group('tix-payment-callback/payment/checkPaidStatus', () => {
  const hp = paymentCallcheckPaidStatus(host, params,referenceId)
  assertStatus(hp, 200, true, 'tix-payment-callback/payment/checkPaidStatus')
  assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment/checkPaidStatus')
})
}

const paymentFunc=()=>{
  const params = {
    headers: {
      Accept: '*/*',
      'storeId':'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'tix-payment-callback/payment'
    }
  }
  const body={
    "referenceId": 700057293,
    "token": "9905a477c91b40cdabff6679815ff050",
    "acquiringBank": "null",
    "authorizationCode": "null",
    "callbackUrl": "null",
    "checkoutTimestamp": "2020-10-14T07:00:10.457Z",
    "customAccount": "3947100700057293",
    "customerContactNumber": "628128112345",
    "customerLang": "ID",
    "customerName": "Developer Tiket",
    "kredivoPaymentTypeList": [
      {
        "amount": 0,
        "discounted_monthly_installment": 0,
        "down_payment": 0,
        "id": null,
        "installment_amount": 0,
        "interest_rate_transition_term": 0,
        "monthly_installment": 0,
        "name": null,
        "rate": 0,
        "tenure": 0
      }
    ],
    "paymentAdditionalData": {
      "bankSource": "va_bca"
    },
    "paymentAmount": 402000,
    "paymentCurrency": "IDR",
    "paymentCustomerExpired": "2020-10-14T07:00:10.457Z",
    "paymentDetail": {
      "customerCurrency": "IDR",
      "customerPrice": 402000,
      "metadata": {
        "additionalProp1": null,
        "additionalProp2": null,
        "additionalProp3": null
      },
      "orderName": "Fiesta",
      "orderType": null,
      "tenor": null,
      "token": null,
      "tokenize": null,
      "userKey": null
    },
    "paymentExpired": "2020-10-14T07:00:10.457Z",
    "paymentGateway": null,
    "paymentSource": "VIRTUAL_ACCOUNT_MIDTRANS",
    "paymentStatus": "CHECKOUT",
    "reconciliationId": null,
    "trxId": "f0e8abde-aefa-4150-886c-90d73f3d2424",
    "usageTimestamp": "2020-10-14T07:00:10.457Z",
    "userIp": "192.168.64.56",
    "username": "developer@tiket.com"
}
  group('tix-payment-callback/payment', () => {
  const hp = paymentCallback(host,params,body)
  assertStatus(hp, 200, true, 'tix-payment-callback/payment')
  //assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment')
})
}


const creditCardcheckPaidStatusFunc =(channelId,requestId,username,referenceId)=>{
    const params = {
      headers: {
        accept: '*/*',
        'storeId':'TIKETCOM',
        'channelId': channelId,
        'requestId': requestId,
        'serviceId': 'gateway',
        'username': username
      },
      tags: {
        name: 'tix-credit-card/payment/checkPaidStatus'
      }
    }
    group('tix-credit-card/payment/checkPaidStatus', () => {
    const hp = creditCardcheckPaidStatus(host, params,referenceId)
    assertStatus(hp, 200, true, 'tix-credit-card/payment/checkPaidStatus')
    assertSuccess(hp, 'SUCCESS', true, 'tix-credit-card/payment/checkPaidStatus')
  })
  }

  const createPaymentListFunc = (channelId,username,requestId,referenceId) => {
    const params = {
      headers: {
        accept: '*/*',
        'storeId':'TIKETCOM',
        'channelId': channelId,
        'requestId': requestId,
        'serviceId': 'gateway',
        'username': username,
        'Content-Type':'application/json'
      },
      tags: {
        name: 'createpaymentList'
      }
    }
    const body = {
      "referenceId": referenceId,
      "userId": "2813861",
      "sessionUserData": "yesnila.hutabarat@tiket.com",
      "resellerId": "0",
      "hotelSource": null,
      "hotelIsLmh": null,
      "eventTiketId": null,
      "flightDepartureTime": "2020-11-06 15:30:00",
      "trainDepartureTime": null,
      "price": 626700,
      "paymentExpired": 1595842466000,
      "orderType": "FLIGHT",
      "hotelPaymentType": null,
    }
 
    group('createpaymentList', () => {
    const hp = createPaymentList(host, params, body)
    assertStatus(hp, 200, true, 'createpaymentlist')
    //assertSuccess(hp, 'SUCCESS', true, 'createpaymentList')
    })
  }

  const payLaterRegisterFunc = (lang,userName,channelId,requestId) => {
    const params = {
      headers: {
        Accept: '*/*',
        'Accept-Language':'en',
        'X-Account-Id':'TIKETCOM',
        'X-Store-Id':'TIKETCOM',
        'X-Channel-Id': 'WEB',
        'X-Currency':'IDR',
        'X-Request-Id': '23123123',
        'X-Service-Id': 'gateway',
        'X-Username': 'username',
        'tixtoken': '56f3180e8fd6a0b11308d7132eeec9dd17e565f0'
      },
      tags: {
        name: 'pay-later/profile/register'
      }
    }
    const body = {
      "deviceId": "121212",
      "deviceModel": "iPhone Xs"
  }
 
    group('pay-later/profile/register', () => {
    const hp = payLaterRegister(host, params, body)
    assertStatus(hp, 200, true, 'pay-later/profile/register')
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register')
    })
  }

  const paymentFunc1 = () => {
    const params = {
      headers: {
        Accept: '*/*',
        'storeId':'TIKETCOM',
        'channelId':'WEB',
        'requestId':'23123123',
        'serviceId': 'gateway',
        'username':'username'
      },
      tags: {
        name: 'pay-later/profile/register'
      }
    }
    const body = {
      "referenceId": 700057293,
      "token": "9905a477c91b40cdabff6679815ff050",
      "acquiringBank": "null",
      "authorizationCode": "null",
      "callbackUrl": "null",
      "checkoutTimestamp": "2020-10-14T07:00:10.457Z",
      "customAccount": "3947100700057293",
      "customerContactNumber": "628128112345",
      "customerLang": "ID",
      "customerName": "Developer Tiket",
      "kredivoPaymentTypeList": [
        {
          "amount": 0,
          "discounted_monthly_installment": 0,
          "down_payment": 0,
          "id": null,
          "installment_amount": 0,
          "interest_rate_transition_term": 0,
          "monthly_installment": 0,
          "name": null,
          "rate": 0,
          "tenure": 0
        }
      ],
      "paymentAdditionalData": {
        "bankSource": "va_bca"
      },
      "paymentAmount": 402000,
      "paymentCurrency": "IDR",
      "paymentCustomerExpired": "2020-10-14T07:00:10.457Z",
      "paymentDetail": {
        "customerCurrency": "IDR",
        "customerPrice": 402000,
        "metadata": {
          "additionalProp1": null,
          "additionalProp2": null,
          "additionalProp3": null
        },
        "orderName": "Fiesta",
        "orderType": null,
        "tenor": null,
        "token": null,
        "tokenize": null,
        "userKey": null
      },
      "paymentExpired": "2020-10-14T07:00:10.457Z",
      "paymentGateway": null,
      "paymentSource": "VIRTUAL_ACCOUNT_MIDTRANS",
      "paymentStatus": "CHECKOUT",
      "reconciliationId": null,
      "trxId": "f0e8abde-aefa-4150-886c-90d73f3d2424",
      "usageTimestamp": "2020-10-14T07:00:10.457Z",
      "userIp": "192.168.64.56",
      "username": "developer@tiket.com"
 }
 
    group('pay-later/profile/register', () => {
    const hp = paymentCallback(host, params, body)
    assertStatus(hp, 200, true, 'pay-later/profile/register')
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register')
    })
  }