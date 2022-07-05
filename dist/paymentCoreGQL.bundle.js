/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PaymentSubmit": () => (/* reexport */ core_paymentCoreGQL_namespaceObject.PaymentSubmit),
  "applyUnapply": () => (/* reexport */ core_paymentCoreGQL_namespaceObject.applyUnapply),
  "applyUnapplyPaymentSubmit": () => (/* reexport */ applyUnapplyPaymentSubmit),
  "checkVersion": () => (/* reexport */ checkVersion),
  "options": () => (/* binding */ options),
  "paymentConfirm": () => (/* reexport */ paymentConfirm),
  "paymentGroup": () => (/* reexport */ paymentGroup),
  "paymentLanding": () => (/* reexport */ paymentLanding),
  "paymentMethod": () => (/* reexport */ paymentMethod),
  "promoSuggestion": () => (/* reexport */ promoSuggestion)
});

// NAMESPACE OBJECT: ./generator/payment/core/paymentCoreGQL.js
var core_paymentCoreGQL_namespaceObject = {};
__webpack_require__.r(core_paymentCoreGQL_namespaceObject);
__webpack_require__.d(core_paymentCoreGQL_namespaceObject, {
  "Q8": () => (applyUnapplyPaymentSubmit),
  "Ye": () => (checkVersion),
  "rb": () => (paymentConfirm),
  "FJ": () => (paymentGroup),
  "Um": () => (paymentLanding),
  "z9": () => (paymentMethod),
  "H8": () => (promoSuggestion)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/papaparse/5.1.1/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/papaparse/5.1.1/index.js");;
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_namespaceObject);
;// CONCATENATED MODULE: external "k6/data"
const data_namespaceObject = require("k6/data");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./utils/gql.js
/* global __ENV */

const gqlPost = (name, body, params) => {
  return http.post(`${__ENV.GQL_HOST}?profile=${name}`, JSON.stringify(body), params);
};
;// CONCATENATED MODULE: ./utils/scenario.js
const listScenarios = {
  ramping: {
    tags: {
      mode: `${__ENV.MODE}`
    },
    executor: 'ramping-vus',
    startVUs: 0,
    stages: [{
      duration: `${__ENV.DURATION * 0.1}m`,
      target: `${__ENV.VUS}`
    }, {
      duration: `${__ENV.DURATION * 0.8}m`,
      target: `${__ENV.VUS}`
    }, {
      duration: `${__ENV.DURATION * 0.1}m`,
      target: 0
    }],
    gracefulRampDown: '0s'
  },
  smoke: {
    tags: {
      mode: 'smoke'
    },
    executor: 'shared-iterations',
    vus: `${__ENV.VUS}`,
    duration: `${__ENV.DURATION}`
  },
  verify: {
    tags: {
      mode: 'verify'
    },
    executor: 'shared-iterations',
    vus: 1
  }
};
;// CONCATENATED MODULE: ./utils/index.js
/* eslint-disable import/no-absolute-path */

/**
 * K6 already have utility module to help us make script.
 * https://jslib.k6.io/ or https://k6.io/docs/javascript-api/#jslib
 *
 * Do not afraid to import it, because when you bundle the script
 * your import module will be include and flatten.
*/





const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomItem = arrayOfItems => {
  return arrayOfItems[Math.floor(Math.random() * arrayOfItems.length)];
};
const formatDate = dateObj => {
  return dateObj.toISOString().slice(0, 10);
};
const responseFailChecker = resp => {
  check(resp, {
    'is status 200': resp => {
      if (resp.status < 200 && resp.status > 399) {
        fail(`response: ${resp.status}, request: ${resp.request.url}`);
      } else {
        return resp.status === 200;
      }
    }
  });
};
const responseDataExist = resp => {
  return !!resp.json('data');
};
function randomDepartReturnDate(departRange, returnRange) {
  const today = new Date();
  const startDateNum = Math.floor(Math.random() * departRange) + 1;
  const endDateNum = Math.floor(Math.random() * returnRange) + 1;
  const startDate = new Date(today.setDate(today.getDate() + startDateNum));
  const endDate = new Date(startDate.getTime() + endDateNum * 24 * 60 * 60 * 1000);
  const departureDate = formatDate(startDate);
  const returnDate = formatDate(endDate);
  return {
    departureDate,
    returnDate
  };
}
function parseCSV(label, filePath) {
  const data = new data_namespaceObject.SharedArray(label, () => {
    let csv;
    index_js_default().parse(open(filePath), {
      complete: results => {
        csv = results;
      }
    });
    return csv.data;
  });
  return data;
}
function randomCSV(label, filePath) {
  const data = parseCSV(label, filePath);
  return data[Math.floor(Math.random() * data.length)];
}
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10);
};
const assertStatus = (res, status, verbose, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${status}`]: r => {
      // Will be printed only if verbose = true
      if (r.status != status && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.status === status;
    }
  });
};
const assertSuccess = (res, code, verbose, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('code') != code && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('code') === code;
    }
  });
};
const assertSuccessGQL = (res, code, verbose, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json().data[name].code != code && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json().data[name].code === code;
    }
  });
};
const randomList = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};
const distribute = (serverCount, value) => {
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
};
function parseJSON(label, filePath) {
  const data = new SharedArray(label, function () {
    const f = JSON.parse(open(filePath)).payload;
    console.log(f);
    return f;
  });
  return data;
}
;// CONCATENATED MODULE: ./apis/payment/core/paymentCoreGQL.js

const qglCall = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`http://172.16.0.157:3030/`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/payment/core/paymentOrderId.js

const cartTodo = (host, requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/legacy/add_order_cart/todo';
  return http_default().post(`${host}/tix-order-go/legacy/add_order_cart/todo`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./generator/payment/core/paymentOrderId.js
 // import csv from 'k6/x/csv'; //FIXME:


const host = 'https://lb1-ms.tiket.com'; // const emailData = parseCSV('emails', 'data/email.csv')  //FIXME:

const createOrders = email => {
  var num = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const amount = Math.floor(Math.random() * (500000 - 15000 + 1) + 15000); // var email = emailData[Math.floor(Math.random() * emailData.length)][0]  //FIXME:

  const data = addCartTodo(num, email, amount); //'testing@tiket.com'

  return data;
};

const addCartTodo = (num, email, amt) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      requestId: `requestId_cartTodo_${__VU}_${__ITER}_${num}`,
      serviceId: 'GATEWAY',
      username: email,
      tixToken: '959c39ee109040e4d5b420679c747084d26cf361',
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    orderCart: {
      isTbox: false,
      productType: 'EVENT',
      accountID: 0,
      orderHash: '',
      totalCustomerPrice: amt,
      customerCurrency: 'IDR',
      orderCS: 0,
      resellerID: '0',
      resellerType: 'todo',
      fromEmail: email,
      mobilePhone: '81281337228',
      ipUser: '',
      ipPrivate: '',
      userLang: 'ID',
      createdTimestamp: '',
      orderContact: {
        firstName: 'Adi',
        lastName: 'Wibowo',
        phoneNumber: '81281337228',
        salutation: 'MR',
        countryCode: '+62',
        emailAddress: email
      },
      isZeroPayment: null,
      orderId: null
    },
    orderCartDetail: [{
      orderType: 'EVENT',
      orderName: 'Appositus conforto ater voluptatem soluta viscus.',
      orderNameDetail: 'Automation Paket Uji Coba 1',
      orderMasterID: '0',
      orderExpiredDateTime: '2022-12-30 23:00:00',
      customerPrice: amt,
      sellingPrice: amt,
      sellingCurrency: 'IDR',
      customerCurrency: 'IDR',
      serviceRate: 0,
      serviceFix: 0,
      currencyExchangeRate: 1,
      commision: 100,
      ref: 'DESKTOP',
      resellerID: '0',
      orderEventConnectMs: {
        cartId: '6130ab58b702542135ce9307',
        attendDate: '2022-09-11',
        includeIntoSalesReport: 1,
        orderFrom: 'ONLINE',
        detailEventConnectMs: {
          businessId: '6130ab4cd1ef6a669f6e421b',
          tiketId: '1',
          businessPhotoPrimary: '',
          extSource: 'NATIVE',
          eventName: 'Appositus conforto ater voluptatem soluta viscus.',
          eventType: 'B',
          eventCategory: 'EVENT',
          ttdCategory: {
            code: 'ATTRACTION',
            translations: [{
              lang: 'EN',
              value: 'Attractions'
            }, {
              lang: 'ID',
              value: 'Atraksi'
            }]
          },
          tiketNameEn: 'Automation Package Testing 1',
          tiketNameLoc: 'Automation Paket Uji Coba 1',
          profileEventStart: '2022-09-01 17:00:00',
          profileEventEnd: '2022-09-10 17:00:00',
          tiketEventStart: '2022-09-11 00:00:00',
          tiketEventEnd: '2022-09-11 00:00:00',
          tiketStartSell: '2022-09-02 00:00:00',
          tiketEndSell: '2022-12-01 00:00:00',
          terms: null,
          redempProfile: null,
          currencyNetRate: 'IDR',
          voucherProvider: 'tiket.com',
          supplierId: '',
          supplierName: '',
          emailPurchaseTo: '',
          policyTicket: null,
          taxPercentInPrice: 0,
          tiketCommission: 100,
          feeInPrice: 0,
          tiketCurrency: 'IDR',
          tiketWithSeating: 'NO',
          businessAddress: null,
          cityName: 'GIANYAR',
          countryName: 'INDONESIA',
          businessLong: 106.815743,
          businessLat: -6.197251,
          queueVoucher: 0,
          location: {
            region: 'BALI',
            postalCode: null
          },
          timeslot: {
            startTime: '00:00',
            endTime: '00:00'
          }
        },
        priceTier: [{
          priceTierCode: 'ADULT',
          sellPrice: 2700,
          sellPriceNetto: 1350,
          totalSellPriceNetto: 1350,
          qty: 1
        }, {
          priceTierCode: 'SENIOR',
          sellPrice: 2700,
          sellPriceNetto: 1350,
          totalSellPriceNetto: 1350,
          qty: 1
        }],
        orderCartEvent: {
          tiketSeating: [],
          tiketAttendDate: '2022-09-11',
          tiketBoxId: 1,
          tiketSellStatus: 'regular',
          tiketCustName: 'Adi Wibowo',
          tiketNohp: '81281337228',
          tiketBirthDate: '1989-11-29',
          tiketCustId: 'Personal id',
          tiketGender: 'm',
          questionnaireAnswers: [[], []],
          otherLevelTicketsInformations: [{
            priceTierInfo: ''
          }, {
            priceTierInfo: ''
          }]
        },
        orderCartEvents: null,
        isTiketFlexi: false,
        subcategories: [],
        isRefundable: true,
        reservationInHours: 0,
        otherLevelProductInformations: {
          contact: null,
          importantInformation: '',
          questionnaireAnswersPerBooking: [],
          questionnaireAnswersPerBookingMultiLang: [],
          whatsIncluded: [],
          instantPassType: null
        },
        ticketValidity: {
          type: 'VISIT_DATE',
          days: 0,
          expiryDate: null
        },
        redemptionExpiryDate: '2022-09-11 23:59:59',
        timezone: 'Asia/Jakarta',
        travellers: null,
        version: null
      },
      orderDiscounts: null,
      receiptReferenceId: '6130ab58b702542135ce9307',
      tiketPointVersion: 10
    }],
    orderReceipt: {
      subtotal: amt,
      additional: [],
      deduction: [],
      detailBox: '*Komisi penjualan sudah termasuk PPN sebesar 10%',
      itemDetails: [{
        description: '<div style=\'\'>Appositus conforto ater voluptatem soluta viscus. Automation Paket Uji Coba 1</div><div style=\'font-size: 8px\'></div>',
        name: 'tiket ToDo',
        price: 'IDR 2,700',
        quantity: '1',
        priceType: 'BASE_PRICE',
        priceValue: 2700,
        receiptReferenceId: '6130ab58b702542135ce9307'
      }, {
        description: '<div style=\'\'>Appositus conforto ater voluptatem soluta viscus. Automation Paket Uji Coba 1</div><div style=\'font-size: 8px\'></div>',
        name: 'tiket ToDo',
        price: 'IDR 2,700',
        quantity: '1',
        priceType: 'BASE_PRICE',
        priceValue: 2700,
        receiptReferenceId: '6130ab58b702542135ce9307'
      }]
    }
  };
  const addCartTodo = cartTodo(host, body, params);
  assertStatus(addCartTodo, 200, true, 'cartTodo');
  assertSuccess(addCartTodo, 'SUCCESS', true, 'cartTodo');
  return addCartTodo;
};
;// CONCATENATED MODULE: ./generator/payment/core/paymentCoreGQL.js




const paymentCoreGQL_host = 'https://gql.tiket.com/';
const orderDataGlobal = parseCSV('orders', 'data/orders.csv'); // const username = 'testing@tiket.com'
// const eventPaymentGID = '61383e3dc7547f0001d0d451'

var userData = parseCSV('emails', 'data/email.csv');
const checkVersion = () => {
  var row = Math.floor(Math.random() * orderDataGlobal.length);
  const params = {
    headers: {
      accept: 'application/json',
      authority: paymentCoreGQL_host,
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'content-type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': paymentCoreGQL_host + 'graphiql/',
      'accept-language': 'en-US,en;q=0.9',
      'token': 'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
    },
    tags: {
      name: 'check-version'
    }
  };
  const mutation = `query checkVersion ($referenceId: Int!, $orderHash: String!, $username: String) {
    getPaymentVersion(referenceId: $referenceId, orderHash: $orderHash, username: $username) {
      code
      message
      data {
        version
      }
    }
  }`;
  const variables = {
    "orderHash": orderDataGlobal[row][1],
    "referenceId": orderDataGlobal[row][0],
    "username": orderDataGlobal[row][3]
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'checkVersion'
  };
  (0,external_k6_namespaceObject.group)('check-version', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'checkVersion');
    assertSuccessGQL(hp, 'SUCCESS', true, 'getPaymentVersion');
  });
};
const paymentLanding = () => {
  var row = Math.floor(Math.random() * orderDataGlobal.length);
  const params = {
    headers: {
      accept: 'application/json',
      authority: paymentCoreGQL_host,
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'content-type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': paymentCoreGQL_host + 'graphiql/',
      'accept-language': 'en-US,en;q=0.9',
      'token': 'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
    },
    tags: {
      name: 'payment-landing'
    }
  };
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
  }`; //const mutation =`query LandingV4 ($referenceId: Int!, $orderHash: String!, $paymentMethod: String, $cardNumber: String){\n  landingV4(referenceId: $referenceId, orderHash: $orderHash, paymentMethod: $paymentMethod, cardNumber: $cardNumber) {\n    code\n    message\n    errors\n    data {\n      paymentExpired\n      paymentExpiredDiff\n      enableTiketPoints\n      enableDiscount\n      entryPayment {\n        selected {\n          hasAccount\n          paymentMessage {\n            idID\n            enUS\n          }\n          bgColor\n          textColor\n          paymentMethod\n          status\n          title\n          icon\n          info\n          toggleMessage {\n            on\n            off\n            disabled\n          }\n          enableToggle\n          installmentDetails {\n            currency\n            grandTotal\n            installmentMonth\n            payMonthly\n            text\n            charge\n            id\n            enable\n            note\n            chargePercentage\n          }\n          disableMessage\n          labelName\n          point\n          tagLine\n          userLimit\n          tokenizationCc {\n            cardHolderExpiredMonth\n            cardHolderExpiredYear\n            cardHolderIssuer\n            cardHolderName\n            cardHolderNumber\n            cardHolderType\n            coBranding\n            createdBy\n            createdDate\n            id\n            isDeleted\n            storeId\n            token\n            updatedBy\n            updatedDate\n            username\n            version\n          }\n          tokens {\n            balance\n            coBranding\n            displayNumber\n            expiredMonth\n            expiredYear\n            holderName\n            icon\n            token\n            type\n          }\n        }\n        recommendation {\n          hasAccount\n          paymentMessage {\n            idID\n            enUS\n          }\n          bgColor\n          textColor\n          paymentMethod\n          status\n          title\n          info\n          icon\n          enableToggle\n          toggleMessage {\n            on\n            off\n            disabled\n          }\n          installmentDetails {\n            currency\n            grandTotal\n            installmentMonth\n            payMonthly\n            text\n            charge\n            id\n            enable\n            note\n            chargePercentage\n          }\n          disableMessage\n          labelName\n          point\n          tagLine\n          userLimit\n          tokenizationCc {\n            cardHolderExpiredMonth\n            cardHolderExpiredYear\n            cardHolderIssuer\n            cardHolderName\n            cardHolderNumber\n            cardHolderType\n            coBranding\n            createdBy\n            createdDate\n            id\n            isDeleted\n            storeId\n            token\n            updatedBy\n            updatedDate\n            username\n            version\n          }\n          tokens {\n            balance\n            coBranding\n            displayNumber\n            expiredMonth\n            expiredYear\n            icon\n            token\n            type\n            holderName\n          }\n        }\n      }\n      sidebarPayment {\n        default {\n          orderDetail {\n            currency\n            orderName\n            orderNameDetail\n            productType\n            referenceDetailId\n            tixPoint\n            totalPrice\n            totalPriceString\n            breakdownPrice {\n              key\n              value\n              valueString\n              title\n            }\n          }\n          referenceId\n          serviceCharge\n          serviceChargeString\n          uniqueCode\n          uniqueCodeString\n          subTotal\n          subTotalString\n          grandTotal\n          grandTotalString\n          cashback\n          cashbackString\n          cashbackTIX\n          cashbackTIXString\n          balanceAmount\n          balanceAmountString\n        }\n        recommendation {\n          orderDetail {\n            currency\n            orderName\n            orderNameDetail\n            productType\n            referenceDetailId\n            tixPoint\n            totalPrice\n            totalPriceString\n            breakdownPrice {\n              key\n              value\n              valueString\n              title\n            }\n          }\n          referenceId\n          serviceCharge\n          serviceChargeString\n          uniqueCode\n          uniqueCodeString\n          subTotal\n          subTotalString\n          grandTotal\n          grandTotalString\n          cashback\n          cashbackString\n          cashbackTIX\n          cashbackTIXString\n          balanceAmount\n          balanceAmountString\n        }\n      }\n    }\n    serverTime\n  }\n}\n`

  const variables = {
    "referenceId": orderDataGlobal[row][0],
    "orderHash": orderDataGlobal[row][1],
    "paymentMethod": "VA_BCA"
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'LandingV4'
  };
  (0,external_k6_namespaceObject.group)('payment-landing', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'landingV4');
    assertSuccessGQL(hp, 'SUCCESS', true, 'landingV4');
  });
};
const paymentGroup = () => {
  var row = Math.floor(Math.random() * orderDataGlobal.length);
  const params = {
    headers: {
      accept: 'application/json',
      authority: paymentCoreGQL_host,
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'content-type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': paymentCoreGQL_host + 'graphiql/',
      'accept-language': 'en-US,en;q=0.9',
      'token': 'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
    },
    tags: {
      name: 'payment-group'
    }
  };
  const mutation = `mutation GroupListV4($referenceId: Int, $orderHash: String) {  groupListV4(referenceId: $referenceId, orderHash: $orderHash) {    code    message    errors    data {      commonGroup {        id        title        subtitle        items {          status          icon          paymentMethod        }      }      promotedGroup {        title        subtitle        items {          paymentMethod          icon          title          subtitle          label          labelColor          targetUrl          targetType          hasAccount          balance          ableRegister          tokens {            token            balance            displayNumber            type            icon            coBranding            expiredYear            expiredMonth            holderName          }        }      }    }    serverTime  }}`;
  const variables = {
    "orderHash": orderDataGlobal[row][1],
    "referenceId": orderDataGlobal[row][0]
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'GroupListV4'
  };
  (0,external_k6_namespaceObject.group)('payment-group', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'GroupListV4');
    assertSuccessGQL(hp, 'SUCCESS', true, 'groupListV4');
  });
};
const paymentMethod = () => {
  var row = Math.floor(Math.random() * orderDataGlobal.length);
  const params = {
    headers: {
      accept: 'application/json',
      authority: paymentCoreGQL_host,
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'content-type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': paymentCoreGQL_host + 'graphiql/',
      'accept-language': 'en-US,en;q=0.9',
      'token': 'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
    },
    tags: {
      name: 'payment-method'
    }
  };
  const mutation = `mutation TypeListV4($referenceId: Int, $orderHash: String, $paymentGroupId: String) {  typeListV4(referenceId: $referenceId, orderHash: $orderHash, paymentGroupId: $paymentGroupId) {    code    message    errors    data {      title      subtitle      paymentMethods {        paymentMethod        paymentName        status        info        icon        hasAccount        balance        ableRegister        tokens {          token          balance          displayNumber          type          icon          coBranding          expiredMonth          expiredYear          holderName        }      }    }    serverTime  }}`;
  const variables = {
    "orderHash": orderDataGlobal[row][1],
    "referenceId": orderDataGlobal[row][0],
    "paymentGroupId": "61383e3dc7547f0001d0d451"
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'TypeListV4'
  };
  (0,external_k6_namespaceObject.group)('payment-method', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'TypeListV4');
    assertSuccessGQL(hp, 'SUCCESS', true, 'typeListV4');
  });
};
const promoSuggestion = () => {
  var row = Math.floor(Math.random() * orderDataGlobal.length);
  const params = {
    headers: {
      accept: 'application/json',
      authority: paymentCoreGQL_host,
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'content-type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': paymentCoreGQL_host + 'graphiql/',
      'accept-language': 'en-US,en;q=0.9',
      'token': 'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
    },
    tags: {
      name: 'promo-suggestion'
    }
  };
  const mutation = `mutation getPromoSuggestion($payload: String) {  getPromoSuggestion(payload: $payload) {    code    message    serverTime    data {      description      code      expiredDate      amount      position      source    }  }}`;
  const payload = {
    'orderId': orderDataGlobal[row][0],
    'totalAmount': orderDataGlobal[row][2],
    'productType': 'TIXHOTEL',
    'size': 100,
    'page': 0,
    'orderHash': orderDataGlobal[row][1],
    'paymentKey': 'VA_BCA',
    'currency': 'IDR'
  };
  const variables = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'getPromoSuggestion'
  };
  (0,external_k6_namespaceObject.group)('promo-suggestion', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'getPromoSuggestion');
    assertSuccessGQL(hp, 'SUCCESS', true, 'getPromoSuggestion');
  });
};

const paymentLandingwithMethod = (id, hash) => {
  const params = {
    headers: {
      accept: 'application/json',
      authority: paymentCoreGQL_host,
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'content-type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': paymentCoreGQL_host + 'graphiql/',
      'accept-language': 'en-US,en;q=0.9',
      'token': 'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
    },
    tags: {
      name: 'payment-landing-with-method'
    }
  };
  const mutation = `query LandingV4 ($referenceId: Int!, $orderHash: String!, $paymentMethod: String, $cardNumber: String){  landingV4(referenceId: $referenceId, orderHash: $orderHash, paymentMethod: $paymentMethod, cardNumber: $cardNumber) {    code    message    errors    data {      paymentExpired      paymentExpiredDiff      enableTiketPoints      enableDiscount      entryPayment {        selected {          hasAccount          paymentMessage {            idID            enUS          }          bgColor          textColor          paymentMethod          status          title          icon          info          toggleMessage {            on            off            disabled          }          enableToggle          installmentDetails {            currency            grandTotal            installmentMonth            payMonthly            text            charge            id            enable            note            chargePercentage          }          disableMessage          labelName          point          tagLine          userLimit          tokenizationCc {            cardHolderExpiredMonth            cardHolderExpiredYear            cardHolderIssuer            cardHolderName            cardHolderNumber            cardHolderType            coBranding            createdBy            createdDate            id            isDeleted            storeId            token            updatedBy            updatedDate            username            version          }          tokens {            balance            coBranding            displayNumber            expiredMonth            expiredYear            holderName            icon            token            type          }        }        recommendation {          hasAccount          paymentMessage {            idID            enUS          }          bgColor          textColor          paymentMethod          status          title          info          icon          enableToggle          toggleMessage {            on            off            disabled          }          installmentDetails {            currency            grandTotal            installmentMonth            payMonthly            text            charge            id            enable            note            chargePercentage          }          disableMessage          labelName          point          tagLine          userLimit          tokenizationCc {            cardHolderExpiredMonth            cardHolderExpiredYear            cardHolderIssuer            cardHolderName            cardHolderNumber            cardHolderType            coBranding            createdBy            createdDate            id            isDeleted            storeId            token            updatedBy            updatedDate            username            version          }          tokens {            balance            coBranding            displayNumber            expiredMonth            expiredYear            icon            token            type            holderName          }        }      }      sidebarPayment {        default {          orderDetail {            currency            orderName            orderNameDetail            productType            referenceDetailId            tixPoint            totalPrice            totalPriceString            breakdownPrice {              key              value              valueString              title            }          }          referenceId          serviceCharge          serviceChargeString          uniqueCode          uniqueCodeString          subTotal          subTotalString          grandTotal          grandTotalString          cashback          cashbackString          cashbackTIX          cashbackTIXString          balanceAmount          balanceAmountString        }        recommendation {          orderDetail {            currency            orderName            orderNameDetail            productType            referenceDetailId            tixPoint            totalPrice            totalPriceString            breakdownPrice {              key              value              valueString              title            }          }          referenceId          serviceCharge          serviceChargeString          uniqueCode          uniqueCodeString          subTotal          subTotalString          grandTotal          grandTotalString          cashback          cashbackString          cashbackTIX          cashbackTIXString          balanceAmount          balanceAmountString        }      }    }    serverTime  }}`;
  const variables = {
    "orderHash": hash,
    "referenceId": id,
    "paymentMethod": "VA_BCA"
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'LandingV4'
  };
  (0,external_k6_namespaceObject.group)('payment-landing-with-method', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'LandingV4');
    assertSuccessGQL(hp, 'SUCCESS', true, 'landingV4');
  });
};

const applyDiscount = (id, hash, price, dk) => {
  const params = {
    headers: {
      accept: 'application/json',
      authority: paymentCoreGQL_host,
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'content-type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': paymentCoreGQL_host + 'graphiql/',
      'accept-language': 'en-US,en;q=0.9',
      'token': 'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
    },
    tags: {
      name: 'apply-promo'
    }
  };
  const mutation = `mutation applyDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {  applyDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {    code    message    data {      discountCode      discountType      orderDetailId      totalDiscount    }  }}`;
  const variables = {
    "currency": "IDR",
    "discountCode": dk,
    "orderHash": hash,
    "orderId": id,
    "paymentType": "VA_BCA",
    "productType": "TIXHOTEL",
    "totalPrice": price
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'applyDiscount'
  };
  const hp = qglCall(paymentCoreGQL_host, params, body);
  assertStatus(hp, 200, true, 'applyDiscount');
  return hp.body; // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const unApplyDiscount = (id, hash, price, od, dk) => {
  const params = {
    headers: {
      accept: 'application/json',
      authority: paymentCoreGQL_host,
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'content-type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': paymentCoreGQL_host + 'graphiql/',
      'accept-language': 'en-US,en;q=0.9',
      'token': 'b99a65b0bb97add1f42e8b999e4e41d83a8ef613'
    },
    tags: {
      name: 'unapply-promo'
    }
  };
  const mutation = `mutation unapplyDiscount($payload: String) {  discountEngineUnapply(payload: $payload) {    code    message    data  }}`;
  const payload = {
    'orderId': id,
    'orderHash': hash,
    'productType': 'TIXHOTEL',
    'discountCode': dk,
    'orderDetailId': od,
    'currency': 'IDR'
  };
  const variable = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variable,
    operationName: 'unapplyDiscount'
  };
  (0,external_k6_namespaceObject.group)('unapply-promo', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'unapplyDiscount');
    assertSuccessGQL(hp, 'SUCCESS', true, 'unapplyDiscount');
  });
};

const paymentSubmit = (id, hash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: paymentCoreGQL_host,
      'x-device-fingerprint': '',
      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
      'content-type': 'application/json',
      'origin': paymentCoreGQL_host,
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'accept-language': 'en-US,en;q=0.9'
    },
    tags: {
      name: 'submit-payment'
    }
  };
  const mutation = `mutation paymentSubmitMutation($referenceId: Int!, $orderHash: String!, $paymentKey: String!, $paymentData: String!) {  paymentSubmit(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey, paymentData: $paymentData)}`;
  const variables = {
    "referenceId": id,
    "orderHash": hash,
    "paymentKey": "VA_BCA",
    "paymentData": "{}"
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'paymentSubmitMutation'
  };
  (0,external_k6_namespaceObject.group)('submit-payment', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'paymentSubmitMutation');
    assertSuccessGQL(hp, 'SUCCESS', true, 'paymentSubmitMutation');
  });
}; // export const applyUnapply = () => {
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


const applyUnapplyPaymentSubmit = () => {
  var row = Math.floor(Math.random() * userData.length);
  var user = userData[row][0];
  const discountCode = randomList(['TESTINGOTW1', 'TESTINGOTW2']);
  (0,external_k6_namespaceObject.group)('payment-submit', () => {
    var data = createOrders(user);
    const orderID = data.json().data.orderId;
    const orderHash = data.json().data.orderHash;
    const totalCustomerPrice = data.json().data.totalCustomerPrice;
    paymentLandingwithMethod(orderID, orderHash, user);
    const resp = applyDiscount(orderID, orderHash, totalCustomerPrice, discountCode); //console.log("Apply Resp: " + JSON.stringify(resp));
    //console.log("Apply Resp: " + resp);

    var oID = JSON.parse(resp).data.applyDiscount.data.orderDetailId; // var oID = resp.json().data.applyDiscount.data.orderDetailId
    //console.log(">>>" + oID);

    if (typeof oID == 'undefined') {
      oID = resp.json()[0].data.applyDiscount.data.orderDetailId;

      if (typeof oID == 'undefined') {
        console.log("oID found undefined" + JSON.stringify(resp), orderID);
      }
    }

    unApplyDiscount(orderID, orderHash, totalCustomerPrice, oID, discountCode);
    paymentSubmit(orderID, orderHash, user);
  });
};
const paymentConfirm = (id, hash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: paymentCoreGQL_host,
      'app-source': 'tix-payment-fe|1.0.20',
      channelid: 'MOBILE',
      lang: 'id',
      newsession: true,
      referer: 'https://payment-gatotkaca.tiket.com/',
      'x-device-fingerprint': '',
      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
      'content-type': 'application/json',
      'origin': 'https://payment-gatotkaca.tiket.com',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'accept-language': 'en-US,en;q=0.9',
      token: 'eyJraWQiOiIwdmNFWlFnWHUtX3gwWmE2UVpjXzZsSVUyRW9oQ004byJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MjYwY2I4MjA4ZGZjNTViZjE3NThjYzgiLCJuYmYiOjE2NTA1MTA3MjIsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1MTExNTUyMn0.6dOu8Age5w6NYj0N5pFV-rpS8PDyIGx1gUJfy-26ilzLYG7RPhvfz2KASePnFIVV'
    },
    tags: {
      name: 'confirm-payment'
    }
  };
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
  }`;
  const variables = {
    "referenceId": id,
    "orderHash": hash,
    "paymentKey": "VA_BCA"
  };
  const body = [{
    query: mutation,
    variables: variables,
    operationName: 'gqlPaymentConfirm'
  }];
  (0,external_k6_namespaceObject.group)('confirm-payment', () => {
    const hp = qglCall(paymentCoreGQL_host, params, body);
    assertStatus(hp, 200, true, 'gqlPaymentConfirm');
    assertSuccessGQL(hp, 'SUCCESS', true, 'gqlPaymentConfirm');
  });
};
;// CONCATENATED MODULE: ./scenarios/payment/paymentCoreGQL.js


 //export { createOrdersCsv } from '@generator/payment/core/CreateOrdersCsv.js'

const serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    // createOrdersCsv: { targetRate: distribute(serverCount, 1300), dist: 1 },
    checkVersion: {
      targetRate: distribute(serverCount, 2560),
      dist: 1
    },
    paymentGroup: {
      targetRate: distribute(serverCount, 380),
      dist: 1
    },
    paymentMethod: {
      targetRate: distribute(serverCount, 400),
      dist: 1
    },
    paymentLanding: {
      targetRate: distribute(serverCount, 2050),
      dist: 1
    },
    // 3190-1140
    promoSuggestion: {
      targetRate: distribute(serverCount, 680),
      dist: 1
    },
    applyUnapplyPaymentSubmit: {
      targetRate: distribute(serverCount, 1140),
      dist: 1
    },
    //creating order, payment with method,apply, unapply  and payment-submit calls
    paymentConfirm: {
      targetRate: distribute(serverCount, 680),
      dist: 1
    } //creating order, payment with method,apply, unapply  and payment-submit calls
    //applyUnapply: { targetRate: distribute(serverCount, 1140), dist: 1 }, // apply, unapply 
    // PaymentSubmit: { targetRate: distribute(serverCount, 520), dist: 1 },   //This includes creating order, payment with method, and payment-submit calls

  }
};
const options = {
  noCookiesReset: false,
  scenarios: {}
};
const services = Object.keys(config.groupServices);

function executeStage(name, stage) {
  options.scenarios[name] = {
    exec: name,
    executor: 'ramping-arrival-rate',
    startRate: 0,
    timeUnit: '1m',
    preAllocatedVUs: 1,
    maxVUs: __ENV.TOTAL_VUS * config.groupServices[name].dist,
    tags: {
      mode: __ENV.MODE
    },
    stages: stage
  };
}

for (let i = 0; i < services.length; i++) {
  const name = services[i];

  if (config.scenario === 'verify') {
    options.scenarios[name] = {
      exec: name,
      tags: {
        mode: 'verify'
      },
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1
    };
  } else {
    var stages = [];

    if (config.scenario === 'createorder') {
      stages = [{
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }];
    } else if (config.scenario === 'load' || config.scenario === 'endurance') {
      stages = [{
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '20m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '3m',
        target: 0
      } // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
      // { duration: '4m', target: Math.round(config.groupServices[name].targetRate) },            //8 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
      // { duration: '4m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.3) },
      // { duration: '7m', target: Math.round(config.groupServices[name].targetRate * 1.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.5) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 1.5) },      //17 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.7) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 1.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2) },        //31 minutes
      // { duration: '10m', target: Math.round(config.groupServices[name].targetRate * 2) },
      ];
    } else if (config.scenario === 'capacity') {
      stages = [{
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.01)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.01)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.02)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.02)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.03)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.03)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.04)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.04)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.05)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.05)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.06)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.06)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.07)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.07)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.08)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.08)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.09)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.09)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.12)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.12)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.14)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.14)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.16)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.16)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.18)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.18)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.22)
      }, {
        duration: '20m',
        target: Math.round(config.groupServices[name].targetRate * 0.22)
      }, {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'spike1') {
      stages = [{
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'spike2') {
      stages = [{
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'mongoDown' || config.scenario === 'redisDown') {
      stages = [{
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '15m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'breakPoint') {
      stages = [{
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.4)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 2.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, {
        duration: '3m',
        target: 0
      }];
    }

    executeStage(name, stages);
  }
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;