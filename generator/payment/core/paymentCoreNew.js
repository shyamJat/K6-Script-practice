import { group } from 'k6'
import { checkVersion, paymentV4Landing, paymentV4paymentGroup, paymentV4paymentMethod, paymentDetailVA_BCA,paymentInquiry,bcaOauthToken,bcaInquiry,bcaNotification } from '@apis/payment/core/paymentCore.js'
import { discountPromoSuggestion, discountApply, discountUnApply } from '@apis/payment/core/paymentCore.js'
import { assertStatus, assertSuccess, parseCSV, randomList } from '@utils/index.js'
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';
import { createOrders } from '@generator/payment/core/paymentOrderId'

const host = 'https://lb1-ms.tiket.com'
const orderDataGlobal = parseCSV('orders', 'data/orders.csv')
const username = 'testing@tiket.com'
const discountCode = randomList(['TESTINGPERFOTW1', 'TESTINGPERFOTW2'])
const eventPaymentGID = '61383e3dc7547f0001d0d451'

export const paymentFlow = () => {
    const timeEpoch = Math.round(Date.now());
    var val = Math.floor(100000000 + Math.random() * 900000000);
    var referenceId='1'+val;
    var orderHash=Math.random().toString(36).slice(2);
    var row = Math.floor(Math.random() * orderDataGlobal.length)
    const userName=orderDataGlobal[row][3];
    const discountCode = randomList(['TESTINGOTW1', 'TESTINGOTW2'])
    const paymentInquiry=paymentsInquiry(referenceId,orderHash,userName,timeEpoch);
    const checkVersion1=checkVersion(referenceId,orderHash,userName);
    const groupListV4=paymentGroup(referenceId,orderHash,userName);
    const paymentGroupId='60f52d1e0c83f60001ec5a75'
    const typeListV4=paymentMethod(referenceId,orderHash,paymentGroupId);
    const paymentLanding1=paymentLanding(referenceId,orderHash,userName);
    const promoSuggestion1=promoSuggestion(referenceId,orderHash,userName);
    const applyDiscount1=applyDiscount(referenceId,orderHash,totalPrice,discountCode);
    
    const applyUnapplyPaymentSubmit1=applyUnapplyPaymentSubmit(referenceId,orderHash,userName);
    const paymentConfirm1=paymentConfirm(referenceId,orderHash,userName);
    const bcaOauthToken=bcaOauthToken1(referenceId,orderHash,userName);

}
const paymentsInquiry = (referenceId,orderHash,userName,timeEpoch) => {
  var row = Math.floor(Math.random() * orderDataGlobal.length)
  const params = {
    headers: {
      accept: '*/*',
      'channelId': randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS', 'WEB']),
      'requestId': '23123123',
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
    "channelId": randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS', 'WEB']),
    "referenceId": referenceId,
    "orderHash": orderHash,
    "checkoutDate": timeEpoch,
    "paymentExpired": 1653045942000,
    "realPaymentExpired": 1653045942000,
    "paymentAmount": 35000,
    "paymentCurrency": "IDR",
    "paymentStatus": "SHOPPINGCART",
    "ipUser": "192.168.64.29",
    "userLang": "EN",
    "customerName": "AFFI IBRAHIM",
    "customerContactNumber": "+6281807556746",
    "username": orderDataGlobal[row][3],
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
    "accountId": "30000653"
  }

  group('payment-inquiry', () => {
  const hp = paymentInquiry(host, params, body)
  assertStatus(hp, 200, true, 'paymentInquiry')
  assertSuccess(hp, 'SUCCESS', true, 'paymentInquiry')
  })
}

const checkVersion = (referenceId,orderHash,userName) => {
    var row = Math.floor(Math.random() * orderDataGlobal.length)
    const params = {
      headers: {
        accept: 'application/json',
        authority:host,
        'sec-ch-ua':'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'content-type':'application/json',
        'sec-ch-ua-mobile':'?0',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform':'"macOS"',
        'origin':host,
        'sec-fetch-site':'same-origin',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'referer':host+'graphiql/',
        'accept-language':'en-US,en;q=0.9',
        'token':'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
      },
      tags: {
        name: 'check-version'
      }
    }
    const mutation = `query checkVersion ($referenceId: Int!, $orderHash: String!, $username: String) {
      getPaymentVersion(referenceId: $referenceId, orderHash: $orderHash, username: $username) {
        code
        message
        data {
          version
        }
      }
    }`
    const variables = {
      "orderHash": orderHash,
      "referenceId": referenceId,
      "username": userName
    }
    const body = {
      query: mutation,
      variables: variables,
      operationName: 'checkVersion'
    }
  
    group('check-version', () => {
      const hp = qglCall(host, params, body)
      assertStatus(hp, 200, true, 'checkVersion')
      assertSuccessGQL(hp, 'SUCCESS', true, 'getPaymentVersion')
    })
  }
  
  
  export const paymentLanding = (referenceId,orderHash,userName) => {
    var row = Math.floor(Math.random() * orderDataGlobal.length)
    const params = {
      headers: {
        accept: 'application/json',
        authority:host,
        'sec-ch-ua':'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'content-type':'application/json',
        'sec-ch-ua-mobile':'?0',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform':'"macOS"',
        'origin':host,
        'sec-fetch-site':'same-origin',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'referer':host+'graphiql/',
        'accept-language':'en-US,en;q=0.9',
        'token':'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
      },
      tags: {
        name: 'payment-landing'
      }
    }
    const mutation = `query LandingV4 ($referenceId: Int!, $orderHash: String!, $paymentMethod: String, $cardNumber: String){
      landingV4(referenceId: $referenceId, orderHash: $orderHash, paymentMethod: $paymentMethod, cardNumber: $cardNumber) {
        code
        message
        errors
        data {
          paymentExpired
          paymentExpiredDiff
          enableTiketPoints
          enableDiscount
          entryPayment {
            selected {
              hasAccount
              paymentMessage {
                idID
                enUS
              }
              bgColor
              textColor
              paymentMethod
              status
              title
              icon
              info
              toggleMessage {
                on
                off
                disabled
              }
              enableToggle
              installmentDetails {
                currency
                grandTotal
                installmentMonth
                payMonthly
                text
                charge
                id
                enable
                note
                chargePercentage
              }
              disableMessage
              labelName
              point
              tagLine
              userLimit
              tokenizationCc {
                cardHolderExpiredMonth
                cardHolderExpiredYear
                cardHolderIssuer
                cardHolderName
                cardHolderNumber
                cardHolderType
                coBranding
                createdBy
                createdDate
                id
                isDeleted
                storeId
                token
                updatedBy
                updatedDate
                username
                version
              }
              tokens {
                balance
                coBranding
                displayNumber
                expiredMonth
                expiredYear
                holderName
                icon
                token
                type
              }
            }
            recommendation {
              hasAccount
              paymentMessage {
                idID
                enUS
              }
              bgColor
              textColor
              paymentMethod
              status
              title
              info
              icon
              enableToggle
              toggleMessage {
                on
                off
                disabled
              }
              installmentDetails {
                currency
                grandTotal
                installmentMonth
                payMonthly
                text
                charge
                id
                enable
                note
                chargePercentage
              }
              disableMessage
              labelName
              point
              tagLine
              userLimit
              tokenizationCc {
                cardHolderExpiredMonth
                cardHolderExpiredYear
                cardHolderIssuer
                cardHolderName
                cardHolderNumber
                cardHolderType
                coBranding
                createdBy
                createdDate
                id
                isDeleted
                storeId
                token
                updatedBy
                updatedDate
                username
                version
              }
              tokens {
                balance
                coBranding
                displayNumber
                expiredMonth
                expiredYear
                icon
                token
                type
                holderName
              }
            }
          }
          sidebarPayment {
            default {
              orderDetail {
                currency
                orderName
                orderNameDetail
                productType
                referenceDetailId
                tixPoint
                totalPrice
                totalPriceString
                breakdownPrice {
                  key
                  value
                  valueString
                  title
                }
              }
              referenceId
              serviceCharge
              serviceChargeString
              uniqueCode
              uniqueCodeString
              subTotal
              subTotalString
              grandTotal
              grandTotalString
              cashback
              cashbackString
              cashbackTIX
              cashbackTIXString
              balanceAmount
              balanceAmountString
            }
            recommendation {
              orderDetail {
                currency
                orderName
                orderNameDetail
                productType
                referenceDetailId
                tixPoint
                totalPrice
                totalPriceString
                breakdownPrice {
                  key
                  value
                  valueString
                  title
                }
              }
              referenceId
              serviceCharge
              serviceChargeString
              uniqueCode
              uniqueCodeString
              subTotal
              subTotalString
              grandTotal
              grandTotalString
              cashback
              cashbackString
              cashbackTIX
              cashbackTIXString
              balanceAmount
              balanceAmountString
            }
          }
        }
        serverTime
      }
    }`
  
    //const mutation =`query LandingV4 ($referenceId: Int!, $orderHash: String!, $paymentMethod: String, $cardNumber: String){\n  landingV4(referenceId: $referenceId, orderHash: $orderHash, paymentMethod: $paymentMethod, cardNumber: $cardNumber) {\n    code\n    message\n    errors\n    data {\n      paymentExpired\n      paymentExpiredDiff\n      enableTiketPoints\n      enableDiscount\n      entryPayment {\n        selected {\n          hasAccount\n          paymentMessage {\n            idID\n            enUS\n          }\n          bgColor\n          textColor\n          paymentMethod\n          status\n          title\n          icon\n          info\n          toggleMessage {\n            on\n            off\n            disabled\n          }\n          enableToggle\n          installmentDetails {\n            currency\n            grandTotal\n            installmentMonth\n            payMonthly\n            text\n            charge\n            id\n            enable\n            note\n            chargePercentage\n          }\n          disableMessage\n          labelName\n          point\n          tagLine\n          userLimit\n          tokenizationCc {\n            cardHolderExpiredMonth\n            cardHolderExpiredYear\n            cardHolderIssuer\n            cardHolderName\n            cardHolderNumber\n            cardHolderType\n            coBranding\n            createdBy\n            createdDate\n            id\n            isDeleted\n            storeId\n            token\n            updatedBy\n            updatedDate\n            username\n            version\n          }\n          tokens {\n            balance\n            coBranding\n            displayNumber\n            expiredMonth\n            expiredYear\n            holderName\n            icon\n            token\n            type\n          }\n        }\n        recommendation {\n          hasAccount\n          paymentMessage {\n            idID\n            enUS\n          }\n          bgColor\n          textColor\n          paymentMethod\n          status\n          title\n          info\n          icon\n          enableToggle\n          toggleMessage {\n            on\n            off\n            disabled\n          }\n          installmentDetails {\n            currency\n            grandTotal\n            installmentMonth\n            payMonthly\n            text\n            charge\n            id\n            enable\n            note\n            chargePercentage\n          }\n          disableMessage\n          labelName\n          point\n          tagLine\n          userLimit\n          tokenizationCc {\n            cardHolderExpiredMonth\n            cardHolderExpiredYear\n            cardHolderIssuer\n            cardHolderName\n            cardHolderNumber\n            cardHolderType\n            coBranding\n            createdBy\n            createdDate\n            id\n            isDeleted\n            storeId\n            token\n            updatedBy\n            updatedDate\n            username\n            version\n          }\n          tokens {\n            balance\n            coBranding\n            displayNumber\n            expiredMonth\n            expiredYear\n            icon\n            token\n            type\n            holderName\n          }\n        }\n      }\n      sidebarPayment {\n        default {\n          orderDetail {\n            currency\n            orderName\n            orderNameDetail\n            productType\n            referenceDetailId\n            tixPoint\n            totalPrice\n            totalPriceString\n            breakdownPrice {\n              key\n              value\n              valueString\n              title\n            }\n          }\n          referenceId\n          serviceCharge\n          serviceChargeString\n          uniqueCode\n          uniqueCodeString\n          subTotal\n          subTotalString\n          grandTotal\n          grandTotalString\n          cashback\n          cashbackString\n          cashbackTIX\n          cashbackTIXString\n          balanceAmount\n          balanceAmountString\n        }\n        recommendation {\n          orderDetail {\n            currency\n            orderName\n            orderNameDetail\n            productType\n            referenceDetailId\n            tixPoint\n            totalPrice\n            totalPriceString\n            breakdownPrice {\n              key\n              value\n              valueString\n              title\n            }\n          }\n          referenceId\n          serviceCharge\n          serviceChargeString\n          uniqueCode\n          uniqueCodeString\n          subTotal\n          subTotalString\n          grandTotal\n          grandTotalString\n          cashback\n          cashbackString\n          cashbackTIX\n          cashbackTIXString\n          balanceAmount\n          balanceAmountString\n        }\n      }\n    }\n    serverTime\n  }\n}\n`
    
    const variables = {
      "referenceId": referenceId,
      "orderHash": orderHash,
      "paymentMethod": "VA_BCA"
    }
    const body = {
      query: mutation,
      variables: variables,
      operationName: 'LandingV4'
    }
  
    group('payment-landing', () => {
      const hp = qglCall(host, params, body)
      assertStatus(hp, 200, true, 'landingV4')
      assertSuccessGQL(hp, 'SUCCESS', true, 'landingV4')
    })
  }
  
const paymentGroup = (referenceId,orderHash,userName) => {
    const params = {
      headers: {
        accept: 'application/json',
        authority:host,
        'sec-ch-ua':'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'content-type':'application/json',
        'sec-ch-ua-mobile':'?0',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform':'"macOS"',
        'origin':host,
        'sec-fetch-site':'same-origin',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'referer':host+'graphiql/',
        'accept-language':'en-US,en;q=0.9',
        'token':'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
      },
      tags: {
        name: 'payment-group'
      }
    }
    const mutation = `mutation GroupListV4($referenceId: Int, $orderHash: String) {  groupListV4(referenceId: $referenceId, orderHash: $orderHash) {    code    message    errors    data {      commonGroup {        id        title        subtitle        items {          status          icon          paymentMethod        }      }      promotedGroup {        title        subtitle        items {          paymentMethod          icon          title          subtitle          label          labelColor          targetUrl          targetType          hasAccount          balance          ableRegister          tokens {            token            balance            displayNumber            type            icon            coBranding            expiredYear            expiredMonth            holderName          }        }      }    }    serverTime  }}`
    const variables = {
      "orderHash": orderHash,
      "referenceId": referenceId
    }
    const body = {
      query: mutation,
      variables: variables,
      operationName: 'GroupListV4'
    }
  
    group('payment-group', () => {
      const hp = qglCall(host, params, body)
      assertStatus(hp, 200, true, 'GroupListV4')
      assertSuccessGQL(hp, 'SUCCESS', true, 'groupListV4')
    })
  }
  
  export const paymentMethod = (referenceId,orderHash,paymentGroupId) => {
    var row = Math.floor(Math.random() * orderDataGlobal.length)
    const params = {
      headers: {
        accept: 'application/json',
        authority:host,
        'sec-ch-ua':'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'content-type':'application/json',
        'sec-ch-ua-mobile':'?0',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform':'"macOS"',
        'origin':host,
        'sec-fetch-site':'same-origin',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'referer':host+'graphiql/',
        'accept-language':'en-US,en;q=0.9',
        'token':'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
      },
      tags: {
        name: 'payment-method'
      }
    }
    const mutation = `mutation TypeListV4($referenceId: Int, $orderHash: String, $paymentGroupId: String) {  typeListV4(referenceId: $referenceId, orderHash: $orderHash, paymentGroupId: $paymentGroupId) {    code    message    errors    data {      title      subtitle      paymentMethods {        paymentMethod        paymentName        status        info        icon        hasAccount        balance        ableRegister        tokens {          token          balance          displayNumber          type          icon          coBranding          expiredMonth          expiredYear          holderName        }      }    }    serverTime  }}`
    const variables = {
      "orderHash": orderHash,
      "referenceId": referenceId,
      "paymentGroupId": "61383e3dc7547f0001d0d451"
    }
    const body = {
      query: mutation,
      variables: variables,
      operationName: 'TypeListV4'
    }
  
    group('payment-method', () => {
      const hp = qglCall(host, params, body)
      assertStatus(hp, 200, true, 'TypeListV4')
      assertSuccessGQL(hp, 'SUCCESS', true, 'typeListV4')
    })
  }
  
  export const promoSuggestion = (referenceId,orderHash,userName) => {
    var row = Math.floor(Math.random() * orderDataGlobal.length)
    const params = {
      headers: {
        accept: 'application/json',
        authority:host,
        'sec-ch-ua':'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'content-type':'application/json',
        'sec-ch-ua-mobile':'?0',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform':'"macOS"',
        'origin':host,
        'sec-fetch-site':'same-origin',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'referer':host+'graphiql/',
        'accept-language':'en-US,en;q=0.9',
        'token':'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
      },
      tags: {
        name: 'promo-suggestion'
      }
    }
    const mutation = `mutation getPromoSuggestion($payload: String) {  getPromoSuggestion(payload: $payload) {    code    message    serverTime    data {      description      code      expiredDate      amount      position      source    }  }}`
    const payload = {
      'orderId': referenceId,
      'totalAmount': orderDataGlobal[row][2],
      'productType': 'TIXHOTEL',
      'size': 100,
      'page': 0,
      'orderHash': orderHash,
      'paymentKey': 'VA_BCA',
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
  
  const paymentLandingwithMethod = (id, hash) => {
    const params = {
      headers: {
        accept: 'application/json',
        authority:host,
        'sec-ch-ua':'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'content-type':'application/json',
        'sec-ch-ua-mobile':'?0',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform':'"macOS"',
        'origin':host,
        'sec-fetch-site':'same-origin',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'referer':host+'graphiql/',
        'accept-language':'en-US,en;q=0.9',
        'token':'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
      },
      tags: {
        name: 'payment-landing-with-method'
      }
    }
    const mutation = `query LandingV4 ($referenceId: Int!, $orderHash: String!, $paymentMethod: String, $cardNumber: String){  landingV4(referenceId: $referenceId, orderHash: $orderHash, paymentMethod: $paymentMethod, cardNumber: $cardNumber) {    code    message    errors    data {      paymentExpired      paymentExpiredDiff      enableTiketPoints      enableDiscount      entryPayment {        selected {          hasAccount          paymentMessage {            idID            enUS          }          bgColor          textColor          paymentMethod          status          title          icon          info          toggleMessage {            on            off            disabled          }          enableToggle          installmentDetails {            currency            grandTotal            installmentMonth            payMonthly            text            charge            id            enable            note            chargePercentage          }          disableMessage          labelName          point          tagLine          userLimit          tokenizationCc {            cardHolderExpiredMonth            cardHolderExpiredYear            cardHolderIssuer            cardHolderName            cardHolderNumber            cardHolderType            coBranding            createdBy            createdDate            id            isDeleted            storeId            token            updatedBy            updatedDate            username            version          }          tokens {            balance            coBranding            displayNumber            expiredMonth            expiredYear            holderName            icon            token            type          }        }        recommendation {          hasAccount          paymentMessage {            idID            enUS          }          bgColor          textColor          paymentMethod          status          title          info          icon          enableToggle          toggleMessage {            on            off            disabled          }          installmentDetails {            currency            grandTotal            installmentMonth            payMonthly            text            charge            id            enable            note            chargePercentage          }          disableMessage          labelName          point          tagLine          userLimit          tokenizationCc {            cardHolderExpiredMonth            cardHolderExpiredYear            cardHolderIssuer            cardHolderName            cardHolderNumber            cardHolderType            coBranding            createdBy            createdDate            id            isDeleted            storeId            token            updatedBy            updatedDate            username            version          }          tokens {            balance            coBranding            displayNumber            expiredMonth            expiredYear            icon            token            type            holderName          }        }      }      sidebarPayment {        default {          orderDetail {            currency            orderName            orderNameDetail            productType            referenceDetailId            tixPoint            totalPrice            totalPriceString            breakdownPrice {              key              value              valueString              title            }          }          referenceId          serviceCharge          serviceChargeString          uniqueCode          uniqueCodeString          subTotal          subTotalString          grandTotal          grandTotalString          cashback          cashbackString          cashbackTIX          cashbackTIXString          balanceAmount          balanceAmountString        }        recommendation {          orderDetail {            currency            orderName            orderNameDetail            productType            referenceDetailId            tixPoint            totalPrice            totalPriceString            breakdownPrice {              key              value              valueString              title            }          }          referenceId          serviceCharge          serviceChargeString          uniqueCode          uniqueCodeString          subTotal          subTotalString          grandTotal          grandTotalString          cashback          cashbackString          cashbackTIX          cashbackTIXString          balanceAmount          balanceAmountString        }      }    }    serverTime  }}`
    const variables = {
      "orderHash": hash,
      "referenceId": id,
      "paymentMethod": "VA_BCA"
    }
    const body = {
      query: mutation,
      variables: variables,
      operationName: 'LandingV4'
    }
  
    group('payment-landing-with-method', () => {
      const hp = qglCall(host, params, body)
      assertStatus(hp, 200, true, 'LandingV4')
      assertSuccessGQL(hp, 'SUCCESS', true, 'landingV4')
    })
  }
  
  const applyDiscount = (id, hash, price, dk) => {
    const params = {
      headers: {
        accept: 'application/json',
        authority:host,
        'sec-ch-ua':'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'content-type':'application/json',
        'sec-ch-ua-mobile':'?0',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform':'"macOS"',
        'origin':host,
        'sec-fetch-site':'same-origin',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'referer':host+'graphiql/',
        'accept-language':'en-US,en;q=0.9',
        'token':'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
      },
      tags: {
        name: 'apply-promo'
      }
    }
    const mutation = `mutation applyDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {  applyDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {    code    message    data {      discountCode      discountType      orderDetailId      totalDiscount    }  }}`
    const variables = {
      "currency": "IDR",
      "discountCode": dk,
      "orderHash": hash,
      "orderId": id,
      "paymentType": "VA_BCA",
      "productType": "TIXHOTEL",
      "totalPrice": price
    }
    const body = {
      query: mutation,
      variables: variables,
      operationName: 'applyDiscount'
    }
    const hp = qglCall(host, params, body)
    assertStatus(hp, 200, true, 'applyDiscount')
    return hp.body
  
    // group('apply-promo', () => {
    // assertStatus(hp, 200, true, 'applyDiscount')
    // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
    // return hp.body
    //  })
     
  }
  
  const unApplyDiscount = (id, hash, price, od, dk) => {
    const params = {
      headers: {
        accept: 'application/json',
        authority:host,
        'sec-ch-ua':'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'content-type':'application/json',
        'sec-ch-ua-mobile':'?0',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform':'"macOS"',
        'origin':host,
        'sec-fetch-site':'same-origin',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'referer':host+'graphiql/',
        'accept-language':'en-US,en;q=0.9',
        'token':'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
      },
      tags: {
        name: 'unapply-promo'
      }
    }
    const mutation = `mutation unapplyDiscount($payload: String) {  discountEngineUnapply(payload: $payload) {    code    message    data  }}`
    const payload = {
      'orderId': id,
      'orderHash': hash,
      'productType': 'TIXHOTEL',
      'discountCode': dk,
      'orderDetailId': od,
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
      assertStatus(hp, 200, true, 'unapplyDiscount')
      assertSuccessGQL(hp, 'SUCCESS', true, 'unapplyDiscount')
    })
  }
  
  const paymentSubmit = (id, hash) => {
    const params = {
      headers: {
        accept: '*/*',
        authority:host,
        'x-device-fingerprint':'',
        'user-agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'content-type':'application/json',
        'origin':host,
        'sec-fetch-site':'same-site',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'accept-language':'en-US,en;q=0.9'
      },
      tags: {
        name: 'submit-payment'
      }
    }
    const mutation = `mutation paymentSubmitMutation($referenceId: Int!, $orderHash: String!, $paymentKey: String!, $paymentData: String!) {  paymentSubmit(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey, paymentData: $paymentData)}`
    const variables = {
      "referenceId": id,
      "orderHash": hash,
      "paymentKey": "VA_BCA",
      "paymentData": "{}"
    }
    const body = {
      query: mutation,
      variables: variables,
      operationName: 'paymentSubmitMutation'
    }
  
    group('submit-payment', () => {
      const hp = qglCall(host, params, body)
      assertStatus(hp, 200, true, 'paymentSubmitMutation')
      assertSuccessGQL(hp, 'SUCCESS', true, 'paymentSubmitMutation')
    })
  }
  
  // export const applyUnapply = () => {
  //   var row = Math.floor(Math.random() * orderDataGlobal.length)
  //   const discountCode = randomList(['TESTINGOTW1', 'TESTINGOTW2'])
  //   group('apply-unapply', () => {
  //     const orderID = orderDataGlobal[row][0]
  //     const orderHash = orderDataGlobal[row][1]
  //     const totalCustomerPrice = orderDataGlobal[row][2]
  //     var user = orderDataGlobal[row][3]
  //     paymentLandingwithMethod(orderID, orderHash, user)
  //     // const resp = applyDiscount(orderID, orderHash, totalCustomerPrice, discountCode)
  //     // //console.log("Apply Resp: " + JSON.stringify(resp));
  //     // //console.log("Apply Resp: " + resp);
  //     // var oID =  JSON.parse(resp).data.applyDiscount.data.orderDetailId
  //     // // var oID = resp.json().data.applyDiscount.data.orderDetailId
  //     // //console.log(">>>" + oID);
  //     // if (typeof oID == 'undefined') {
  //     //   oID = resp.json()[0].data.applyDiscount.data.orderDetailId
  //     //   if (typeof oID == 'undefined') {
  //     //     console.log("oID found undefined" + JSON.stringify(resp), orderID);
  //     //   }
  //     // }
  //      //unApplyDiscount(orderID, orderHash, totalCustomerPrice, oID, discountCode)
  //      unApplyDiscount(orderID, orderHash, totalCustomerPrice, orderID, discountCode)
  //   })
  // }
  
  // export const PaymentSubmit = () => {
  //   var row = Math.floor(Math.random() * userData.length)
  //   var user = userData[row][0]
  //   group('payment-submit', () => {
  //     var data = createOrders(user)
  //     const orderID = data.json().data.orderId
  //     const orderHash = data.json().data.orderHash
  //     const totalCustomerPrice = data.json().data.totalCustomerPrice
  //     paymentLandingwithMethod(orderID, orderHash, user)
  //     paymentSubmit(orderID, orderHash, user)
  //   })
  // }
  
  export const applyUnapplyPaymentSubmit = () => {
    var row = Math.floor(Math.random() * userData.length)
    var user = userData[row][0]
    const discountCode = randomList(['TESTINGOTW1', 'TESTINGOTW2'])
    group('payment-submit', () => {
      var data = createOrders(user)
      const orderID = data.json().data.orderId
      const orderHash = data.json().data.orderHash
      const totalCustomerPrice = data.json().data.totalCustomerPrice
      paymentLandingwithMethod(orderID, orderHash, user)
  
      const resp = applyDiscount(orderID, orderHash, totalCustomerPrice, discountCode)
          //console.log("Apply Resp: " + JSON.stringify(resp));
          //console.log("Apply Resp: " + resp);
          var oID =  JSON.parse(resp).data.applyDiscount.data.orderDetailId
          // var oID = resp.json().data.applyDiscount.data.orderDetailId
          //console.log(">>>" + oID);
          if (typeof oID == 'undefined') {
            oID = resp.json()[0].data.applyDiscount.data.orderDetailId
            if (typeof oID == 'undefined') {
              console.log("oID found undefined" + JSON.stringify(resp), orderID);
            }
          }
           unApplyDiscount(orderID, orderHash, totalCustomerPrice, oID, discountCode)
           
  
      paymentSubmit(orderID, orderHash, user)
    })
  }
  
  export const paymentConfirm = (id, hash) => {
    const params = {
      headers: {
        accept: '*/*',
        authority:host,
        'app-source':'tix-payment-fe|1.0.20',
        channelid:'MOBILE',
        lang:'id',
        newsession:true,
        referer:'https://payment-gatotkaca.tiket.com/',
        'x-device-fingerprint':'',
        'user-agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'content-type':'application/json',
        'origin':'https://payment-gatotkaca.tiket.com',
        'sec-fetch-site':'same-site',
        'sec-fetch-mode':'cors',
        'sec-fetch-dest':'empty',
        'accept-language':'en-US,en;q=0.9',
        token:'eyJraWQiOiIwdmNFWlFnWHUtX3gwWmE2UVpjXzZsSVUyRW9oQ004byJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MjYwY2I4MjA4ZGZjNTViZjE3NThjYzgiLCJuYmYiOjE2NTA1MTA3MjIsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1MTExNTUyMn0.6dOu8Age5w6NYj0N5pFV-rpS8PDyIGx1gUJfy-26ilzLYG7RPhvfz2KASePnFIVV'
      },
      tags: {
        name: 'confirm-payment'
      }
    }
    const mutation = `query gqlPaymentConfirm($referenceId: Int!, $orderHash: String!, $paymentKey: String!) {
      paymentConfirm(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey) {
        data {
          bankTransfer {
            accountBank
            accountName
            accountNumber
          }
          customAccount
          paymentConfirmName
          paymentConfirmNote
          paymentConfirmImages
          paymentExpired
          paymentSource
          sidebarPayment {
            subTotal
            grandTotal
            convertedCurrency
            convertedAmount
            serviceCharge
            uniqueCode
            cashback
            balanceAmount
            cashbackTIX
            orderDetail {
              currency
              orderName
              orderNameDetail
              referenceDetailId
              productType
              tixPoint
              totalPrice
              breakdownPrice {
                key
                value
                valueString
              }
            }
          }
          gopayUrl
          confirmPaymentUrl
          tokenExpired
        }
        code
        message
        serverTime
      }
    }`
    const variables = {
      "referenceId": id,
      "orderHash": hash,
      "paymentKey": "VA_BCA"
    }
    const body = [{
      query: mutation,
      variables: variables,
      operationName: 'gqlPaymentConfirm'
    }]
  
    group('confirm-payment', () => {
      const hp = qglCall(host, params, body)
      assertStatus(hp, 200, true, 'gqlPaymentConfirm')
      assertSuccessGQL(hp, 'SUCCESS', true, 'gqlPaymentConfirm')
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
  group('BCA-getToken', () => {
    const res = bcaOauthToken(host, params,body)
    assertStatus(res, 200, true, 'bcaOauthToken')
  })
}

export const bcaInquiry1 = () => {
  const params = {
    headers: {
      'Authorization': 'Basic NjY0ODI2MTAtMTkzMi00MTNjLWI0ZTctMWQ1MmI0OTFmN2ZmOjVjZWYzNzBkLTAyZDgtNGNjMi04ZjUxLTE3OGI0ZGMxMzc4Yw==',
    },
    tags: {
      name: 'bca-inquiry'
    }
  }
  const body = { 
    "CompanyCode": "78001",
    "CustomerNumber": "1100134755",
    "RequestID": "7800111001328101100134752",
    "ChannelType": "6014",
    "TransactionDate": "11/02/2022 18:23:05",
    "AdditionalData": "" 
  }

  group('bca-inquiry', () => {
  const hp = bcaInquiry(host, params, body)
  assertStatus(hp, 200, true, 'bcaInquiry')
  assertSuccess(hp, 'SUCCESS', true, 'bcaInquiry')
  })
}

export const bcaNotification1 = () => {
  const params = {
    headers: {
      'Authorization': 'Basic NjY0ODI2MTAtMTkzMi00MTNjLWI0ZTctMWQ1MmI0OTFmN2ZmOjVjZWYzNzBkLTAyZDgtNGNjMi04ZjUxLTE3OGI0ZGMxMzc4Yw==',
      'Cookie':'PHPSESSID=njakb27br3oo066es3dhotbut77on4ci'
    },
    tags: {
      name: 'bca-notification'
    }
  }
  const body = { 
    "CompanyCode": "78001",
    "CustomerNumber": "1100134752",
    "RequestID": "7800111001328101100134752",
    "ChannelType": "6014",
    "CustomerName": "Customer BCA Virtual Account",
    "CurrencyCode": "IDR",
    "PaidAmount": "223000.00",
    "TotalAmount": "223000.00",
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
  assertSuccess(hp, 'SUCCESS', true, 'bcaNotification')
  })
}