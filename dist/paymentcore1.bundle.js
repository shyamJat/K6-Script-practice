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
  "options": () => (/* binding */ options),
  "paymentFlow": () => (/* reexport */ paymentFlow),
  "paymentFlow1": () => (/* reexport */ paymentFlow1),
  "paymentFlow2": () => (/* reexport */ paymentFlow2),
  "paymentFlow3": () => (/* reexport */ paymentFlow3),
  "paymentFlow4": () => (/* reexport */ paymentFlow4)
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
const utils_assertStatus = (res, status, verbose, name) => {
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
const utils_assertSuccess = (res, code, verbose, name) => {
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
const utils_assertSuccessGQL = (res, code, verbose, name) => {
  check(res, {
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
;// CONCATENATED MODULE: external "https://jslib.k6.io/k6-utils/1.0.0/index.js"
const _1_0_0_index_js_namespaceObject = require("https://jslib.k6.io/k6-utils/1.0.0/index.js");;
;// CONCATENATED MODULE: ./apis/payment/core/paymentCore.js

/**
 * Get payment version
 * @param {object} params global parameters
 * @returns payment http response
 */

const paymentCore_checkVersion = (host, params, queryP) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/gateway/tix-payment-core/payment/check-version?${queryP.toString()}`, params);
  return resp;
};
/**
 * payment v4 landing
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */

const paymentCore_paymentV4Landing = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/gateway/tix-payment-core/payment/v4/landing`, JSON.stringify(body), params);
  return resp;
};
/**
 * Get v4 payment group
 * @param {object} params global parameters
 * @returns payment-core http response
 */

const paymentCore_paymentV4paymentGroup = (host, params, queryP) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/gateway/tix-payment-core/payment/v4/payment-group?${queryP.toString()}`, params);
  return resp;
};
/**
 * Get v4 payment method
 * @param {object} params global parameters
 * @returns payment-core http response
 */

const paymentCore_paymentV4paymentMethod = (host, params, queryP) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/gateway/tix-payment-core/payment/v4/payment-method?${queryP.toString()}`, params);
  return resp;
};
/**
 * discount Promo Suggestion
 * @param {object} params global parameters
 * @returns discount-engine  http response
 */

const paymentCore_discountPromoSuggestion = (host, params, queryP) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.get(`${host}/tix-discount-engine/discount/promo-suggestion?${queryP.toString()}`, params);
  return resp;
};
/**
 *  discount engine discount Apply
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns discount-engine  http response
 */

const paymentCore_discountApply = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-discount-engine/discount/apply`, JSON.stringify(body), params);
  return resp;
};
const paymentCore_discountUnApply = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${host}/tix-discount-engine/discount/unApply`, JSON.stringify(body), params);
  return resp;
};
/**
 *  payment detail BCA_TRANSFER
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core  http response
 */

const paymentCore_paymentDetailVA_BCA = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().put(`${host}/gateway/tix-payment-core/payment/detail/VA_BCA`, JSON.stringify(body), params);
  return resp;
};
/**
 *  payment confirm VA_BCA
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core  http response
 */

const paymentCore_paymentConfirmVA_BCA = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/gateway/tix-payment-core/payment/confirm/VA_BCA`, JSON.stringify(body), params);
  return resp;
};
/**
 * payment inquiry
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */

const paymentInquiry = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-payment-core/payment/inquiry`, JSON.stringify(body), params);
  return resp;
};
/**
 * BCA getToken
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */

const paymentCore_bcaOauthToken = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/partner-gateway-v2/payment/tix-bank-transfer/bca/oauth/token`, JSON.stringify(body), params);
  return resp;
};
/**
 * BCA inquiry
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */

const paymentCore_bcaInquiry = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/partner-gateway-v2/payment/tix-bank-transfer/bca/inquiry`, JSON.stringify(body), params);
  return resp;
};
/**
 * BCA Notification
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns payment-core http response
 */

const paymentCore_bcaNotification = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/partner-gateway-v2/payment/tix-bank-transfer/bca/notif`, JSON.stringify(body), params);
  return resp;
};
/**
 * checkAvailability
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns discount-engine http response
 */

const paymentCore_checkAvailability = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${host}/tix-discount-engine/discount/checkAvailability`, JSON.stringify(body), params);
  return resp;
};
/**
 *  discount-cashback
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns discount-engine  http response
 */

const paymentCore_discountCashback = (host, params, body, orderID) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.put(`${host}/tix-discount-engine/discount/cashback?orderId=${orderID}`, JSON.stringify(body), params);
  return resp;
};
/**
 *  calculateDiscount
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo-code  http response
 */

const paymentCore_calculateDiscount = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${host}/tix-promocode/calculateDiscount`, JSON.stringify(body), params);
  return resp;
}; //12 API's

const paymentCore_paymentCoreConfig = (host, params) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-payment-core/config/CREDITCARD`, params);
  return resp;
};
const checkCancellable = (host, params, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/gateway/tix-payment-core/payment/checkCancellable?referenceId=${id}`, params);
  return resp;
};
const bankBin = (host, params, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-payment-core/bankBin/${id}`, params);
  return resp;
};
const paymentCore_paymentInquiryPut = (host, params, body, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.put(`${host}/tix-payment-core/payment/inquiry/${id}`, JSON.stringify(body), params);
  return resp;
};
const creditLimit = (host, params) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-pay-later/profile/credit-limit?deviceId=id&deviceModel=model`, params);
  return resp;
};
const paymentCore_transaction = (host, params, id) => {
  params.headers['Content-Type'] = 'x-www-form-urlencoded';
  const resp = http.del(`${host}/tix-pay-later/transaction/${id}`, params);
  return resp;
};
const paymentCore_profile = (host, params) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/gateway/tix-pay-later/profile?deviceId=id&deviceModel=model`, params);
  return resp;
};
const paymentCore_payLaterRegister = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/gateway/tix-pay-later/profile/register`, JSON.stringify(body), params);
  return resp;
};
const paymentCore_paymentCallback = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${host}/tix-payment-callback/payment`, JSON.stringify(body), params);
  return resp;
};
const paymentCore_paymentCallcheckPaidStatus = (host, params, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.get(`${host}/tix-payment-callback/payment/checkPaidStatus?referenceId=1200730054`, params);
  return resp;
};
const paymentCore_creditCardcheckPaidStatus = (host, params, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.get(`${host}/tix-credit-card/payment/checkPaidStatus?referenceId=${id}`, params);
  return resp;
};
const paymentCore_createPaymentList = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${host}/tix-order-aggregate/createPaymentList`, JSON.stringify(body), params);
  return resp;
};
const ApplyPaymentInquiry = (host, params, body, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().put(`${host}/tix-payment-core/payment/inquiry/${id}`, JSON.stringify(body), params);
  return resp;
};
const UnapplyPaymentInquiry = (host, params, body, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().put(`${host}/tix-payment-core/payment/inquiry/${id}`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/payment/core/promoGateway.js

/**
 * promo suggestion v2
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */

const promoGateway_promoSuggestionV2 = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/gateway/tix-discount-engine/discount/promo-suggestion/v2`, JSON.stringify(body), params);
  return resp;
};
/**
 * apply discount code
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */

const discountApplyV2 = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/gateway/tix-discount-engine/discount/apply/v2`, JSON.stringify(body), params);
  return resp;
};
/**
 * un apply discount code
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */

const promoGateway_discountUnAplyV2 = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/gateway/tix-discount-engine/discount/unApply/v2`, JSON.stringify(body), params);
  return resp;
};
/**
 * un apply discount code
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */

const discountCheckAvailabilityV2 = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/gateway/tix-discount-engine/discount/checkAvailability/v2`, JSON.stringify(body), params);
  return resp;
};
/**
* Get discount cashback
* @param {object} params global parameters
* @returns promo http response
*/

const promoGateway_discountCashback2 = (host, params, orderId, promoCode) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/gateway/tix-discount-engine/discount/cashback?orderId=${orderId}&promoCode=${promoCode}`, params);
  return resp;
};
;// CONCATENATED MODULE: external "https://jslib.k6.io/url/1.0.0/index.js"
const url_1_0_0_index_js_namespaceObject = require("https://jslib.k6.io/url/1.0.0/index.js");;
;// CONCATENATED MODULE: ./apis/payment/core/paymentOrderId.js

const paymentOrderId_cartTodo = (host, requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/legacy/add_order_cart/todo';
  return http.post(`${host}/tix-order-go/legacy/add_order_cart/todo`, JSON.stringify(requestData), params);
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
;// CONCATENATED MODULE: ./apis/payment/core/paymentCoreGQL.js

const paymentCoreGQL_qglCall = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`http://172.16.0.157:3030/`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/payment/core/paymentCore.js










const paymentCore_host = 'https://lb-perf.tiket.com';
const orderDataGlobal = parseCSV('orders', 'data/orders.csv');
var userData = parseCSV('emails', 'data/email.csv');
var objectIdData = parseCSV('objectIds', 'data/objectId.csv');
const paymentFlow = () => {
  const timeEpoch = Math.round(Date.now());
  var val = Math.floor(100000000 + Math.random() * 900000000);
  var referenceId = '1' + val; //var referenceId=2003809728;
  //var orderHash=Math.random().toString(36).slice(2);

  var orderHash = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < 24; i++) {
    orderHash += characters.charAt(Math.floor(Math.random() * charactersLength));
  } //const orderHash="tct37lmxof98tybuhyjjl"
  // var row = Math.floor(Math.random() * orderDataGlobal.length)
  // const userName=orderDataGlobal[row][3];
  //const userName = 'testing31370tiket.com'


  var row1 = Math.floor(Math.random() * userData.length);
  var userName = userData[row1][0]; //console.log(userName)

  const discountCode = randomList(['PERFTEST']);
  var totalCustomerPrice = 2000000;
  const channelId = randomList(['ANDROID', 'IOS', 'WEB', 'DESKTOP']);
  const requestId = `perf1_${__VU}_${__ITER}_${(0,_1_0_0_index_js_namespaceObject.uuidv4)()}`;
  var row2 = Math.floor(Math.random() * objectIdData.length);
  var objectId = objectIdData[row2][0]; //createPaymentListFunc(channelId,userName,requestId,referenceId);

  paymentsInquiry(referenceId, orderHash, userName, timeEpoch, channelId, requestId);
  checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentGroup(referenceId, orderHash, userName, channelId, requestId);
  const paymentGroupId = '60f52d1e0c83f60001ec5a75';
  paymentMethod(referenceId, orderHash, paymentGroupId, userName, channelId, requestId);
  paymentLandingwithMethod(referenceId, orderHash, userName, channelId, requestId); //promoSuggestion(referenceId,orderHash,userName,channelId,requestId);
  //promoSuggestion1(referenceId,orderHash)

  PromoSuggestionV2(referenceId, orderHash, userName, channelId, requestId);
  const totalPrice = 200000; //promoApply(referenceId,orderHash,totalPrice,userName,channelId);
  //applyDiscount1(referenceId,orderHash)

  DiscountApplyV2(referenceId, orderHash, totalPrice, userName, channelId, requestId);
  applyPaymentInquiryFunc(channelId, requestId, referenceId, userName); //const orderDetailId=applyDiscount.json().data.orderDetailId;

  const orderDetailId = 21473186; //promoUnApply(referenceId, orderHash, totalCustomerPrice, orderDetailId, userName,channelId);
  //unApplyDiscount1(referenceId,orderHash,orderDetailId)

  DiscountUnAplyV2(referenceId, orderHash, totalCustomerPrice, requestId, userName, channelId);
  unapplyPaymentInquiryFunc(channelId, requestId, referenceId, userName);
  checkCancellableFunc(referenceId, userName, channelId, requestId);
  paymentSubmit(referenceId, orderHash, userName, channelId, requestId);
  paymentConfirm(referenceId, orderHash, userName, channelId, requestId); // discountCheckAvailability(referenceId,orderHash,userName,channelId,requestId)
  // discountCashback1(referenceId,userName,channelId,requestId)
  //checkAvailabilityDiscount(referenceId,orderHash)
  //getPromoCashbackInfo(referenceId)
  //const calculatePromoDiscount1=calculatePromoDiscount(referenceId,userName,channelId,requestId)

  DiscountCheckAvailabilityV2(referenceId, orderHash, userName, channelId, requestId);
  DiscountCashback(referenceId, orderHash, userName, channelId, requestId);
  const bcaOauthToken = bcaOauthToken1();
  const accessToken = bcaOauthToken.json().access_token; //const requestId1="7800111001328101100134752"

  const bcaInquiry = bcaInquiry1(accessToken, requestId, referenceId);
  const totalAmount = bcaInquiry.json().TotalAmount;
  bcaNotification1(accessToken, requestId, referenceId, totalAmount);
  paymentCoreConfigFunc(userName, channelId, requestId);
  bankBinFunc(objectId, userName, channelId, requestId); //paymentInquiryPutFunc(timeEpoch,referenceId,userName,channelId,requestId);

  const lang = randomList(['en', 'id']);
  creditLimitFunc(userName, channelId, requestId, lang); //transactionFunc(referenceId,userName,channelId,requestId,lang);

  profileFunc(userName, channelId, requestId, lang);
  payLaterRegisterFunc(lang, userName, channelId, requestId); // checkPaidStatusFunc(lang,requestId,userName,channelId,referenceId);
  // creditCardcheckPaidStatusFunc(channelId,requestId,userName,referenceId); 
  //paymentFunc();
};

const PromoSuggestionV2 = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = promoGateway_promoSuggestionV2(paymentCore_host, params, body);
  utils_assertStatus(hp, 200, true, 'promoSuggestionV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'promoSuggestionV2'); // })
};

const DiscountApplyV2 = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST",
    "currency": "IDR",
    "paymentType": "VA_BCA",
    "productType": "EVENT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountApplyV2(paymentCore_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountApplyV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountApplyV2'); // })
};

const DiscountUnAplyV2 = (referenceId, orderHash, totalCustomerPrice, requestId, userName, channelId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST"
  }; // group('payment-landing-withmethod', () => {

  const hp = promoGateway_discountUnAplyV2(paymentCore_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountUnAplyV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountUnAplyV2'); // })
};

const DiscountCheckAvailabilityV2 = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST",
    "currency": "IDR",
    "paymentType": "VA_BCA",
    "productType": "EVENT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountCheckAvailabilityV2(paymentCore_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountCheckAvailabilityV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailabilityV2'); // })
};

const DiscountCashback = (referenceId, orderHash, userName, channelId, requestId) => {
  const promoCode = "PERFTEST";
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
  }; // group('payment-landing-withmethod', () => {

  const hp = promoGateway_discountCashback2(paymentCore_host, params, referenceId, promoCode);
  utils_assertStatus(hp, 200, true, 'discountCashback');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const promoSuggestion1 = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'promo-suggestion'
    }
  };
  const mutation = `mutation getPromoSuggestion($payload: String) {  getPromoSuggestion(payload: $payload) {    code    message    serverTime    data {      description      code      expiredDate      amount      position      source    }  }}`;
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
  };
  const variables = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'getPromoSuggestion'
  };
  group('promo-suggestion', () => {
    const hp = qglCall(paymentCore_host, params, body);
    assertStatus(hp, 200, true, 'getPromoSuggestion'); //assertSuccessGQL(hp, 'SUCCESS', true, 'getPromoSuggestion')
  });
};

const applyDiscount1 = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'apply-promo'
    }
  };
  const mutation = `mutation applyDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {  applyDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {    code    message    data {      discountCode      discountType      orderDetailId      totalDiscount    }  }}`;
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'applyDiscount'
  };
  const hp = qglCall(paymentCore_host, params, body);
  assertStatus(hp, 200, true, 'applyDiscount'); //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  //return hp.body
  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const unApplyDiscount1 = (orderId, orderHash, orderDetailId) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'unapply-promo'
    }
  };
  const mutation = `mutation unapplyDiscount($payload: String) {  discountEngineUnapply(payload: $payload) {    code    message    data  }}`;
  const payload = {
    'orderId': orderId,
    'orderHash': orderHash,
    'productType': 'EVENT',
    'discountCode': "PERFTEST",
    'orderDetailId': orderDetailId,
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
  group('unapply-promo', () => {
    const hp = qglCall(paymentCore_host, params, body);
    assertStatus(hp, 200, true, 'discountEngineUnapply'); //assertSuccessGQL(hp, 'SUCCESS', true, 'discountEngineUnapply')
  });
};

const checkAvailabilityDiscount = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'checkAvailabilityDiscount'
    }
  };
  const mutation = `mutation checkAvailabilityDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {
    checkAvailabilityDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {
      code
      message
      data
    }
  }`;
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'checkAvailabilityDiscount'
  };
  const hp = qglCall(paymentCore_host, params, body);
  assertStatus(hp, 200, true, 'checkAvailabilityDiscount'); //assertSuccessGQL(hp, 'SUCCESS', true, 'checkAvailabilityDiscount')
  //return hp.body
  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const getPromoCashbackInfo = orderId => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'getPromoCashbackInfo'
    }
  };
  const mutation = `query getPromoCashbackInfo($payload: String) {
    getCashbackInfo(payload: $payload) {
      code
      message
      data {
        promoCode
        cashbackAmount
      }
    }
  }`;
  const payload = {
    'orderId': orderId,
    'promoCode': "PERFTEST"
  };
  const variable = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variable,
    operationName: 'getPromoCashbackInfo'
  };
  group('getPromoCashbackInfo', () => {
    const hp = qglCall(paymentCore_host, params, body);
    assertStatus(hp, 200, true, 'getCashbackInfo'); //assertSuccessGQL(hp, 'SUCCESS', true, 'getCashbackInfo')
  });
};

const checkversion = (referenceId, orderHash, userName, channelId, requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS']),
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'check-version'
    }
  };
  const queryParams = new url_1_0_0_index_js_namespaceObject.URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  (0,external_k6_namespaceObject.group)('check-version', () => {
    const res = paymentCore_checkVersion(paymentCore_host, params, queryParams);
    utils_assertStatus(res, 200, true, 'checkVersion');
    utils_assertSuccess(res, 'SUCCESS', true, 'checkVersion');
  });
};

const paymentGroup = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * orderDataGlobal.length);
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
  };
  const queryParams = new url_1_0_0_index_js_namespaceObject.URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  (0,external_k6_namespaceObject.group)('payment-group', () => {
    const res = paymentCore_paymentV4paymentGroup(paymentCore_host, params, queryParams);
    utils_assertStatus(res, 200, true, 'paymentV4paymentGroup');
    utils_assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentGroup');
  });
};

const paymentMethod = (referenceId, orderHash, paymentGroupId, userName, channelId, requestId) => {
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
  };
  const queryParams = new url_1_0_0_index_js_namespaceObject.URLSearchParams([['orderHash', orderHash], ['paymentGroupId', paymentGroupId], ['referenceId', referenceId]]);
  (0,external_k6_namespaceObject.group)('payment-Method', () => {
    const res = paymentCore_paymentV4paymentMethod(paymentCore_host, params, queryParams);
    utils_assertStatus(res, 200, true, 'paymentV4paymentMethod');
    utils_assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentMethod');
  });
};

const paymentLandingwithMethod = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash,
    paymentMethod: 'VA_BCA'
  }; // group('payment-landing-withmethod', () => {

  const hp = paymentCore_paymentV4Landing(paymentCore_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentV4Landing');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentV4Landing'); // })
};

const promoSuggestion = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * orderDataGlobal.length);
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
  };
  const queryParams = new URLSearchParams([['currency', 'IDR'], ['orderId', referenceId], ['totalAmount', 200000], ['productType', 'EVENT'], ['size', 10], ['page', 0]]);
  group('promo-suggestion', () => {
    const res = discountPromoSuggestion(paymentCore_host, params, queryParams);
    assertStatus(res, 200, true, 'discountPromoSuggestion');
    assertSuccess(res, 'SUCCESS', true, 'discountPromoSuggestion');
  });
}; // export const applyUnapplyandSubmit = () => {
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


const promoApply = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-apply', () => {

  const hp = discountApply(paymentCore_host, params, body);
  assertStatus(hp, 200, true, 'discountApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountApply'); // })

  return hp;
};

const promoUnApply = (referenceId, orderHash, totalCustomerPrice, orderDetailId, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-unapply', () => {

  const hp = discountUnApply(paymentCore_host, params, body);
  assertStatus(hp, 200, true, 'discountUnApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnApply'); // })
};

const paymentSubmit = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentCore_paymentDetailVA_BCA(paymentCore_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentDetailVA_BCA');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentDetailVA_BCA'); // })
};

const paymentConfirm = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    debitOnline: false,
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentCore_paymentConfirmVA_BCA(paymentCore_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentConfirmVA_BCA');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentConfirmVA_BCA'); // })
};

const paymentsInquiry = (referenceId, orderHash, userName, timeEpoch, channelId, requestId) => {
  var row = Math.floor(Math.random() * orderDataGlobal.length);
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
  };
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
    "paymentUnitDetails": [{
      "referenceDetailId": 1200420004,
      "productType": "EVENT",
      "orderName": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "orderNameDetail": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "createdDate": 1650309021000,
      "totalPrice": 3470332,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_4",
        "type": "product",
        "value": 3470332
      }]
    }, {
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
    }],
    "message": {
      "products": [{
        "type": "event",
        "detailId": "1200420004",
        "title": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "detail": "6 Tickets For Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "date": "Saturday, 30 April 2022 (00:00:00)",
        "ticketClass": "",
        "customers": [{
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }],
        "airportTransfer": null,
        "dateTime": "2022-04-30 00:00:00"
      }]
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
        "items": [{
          "itemId": "1200420004",
          "productTitle": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
          "currencyCode": "IDR",
          "price": "3470332",
          "quantity": "6"
        }],
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
  };
  (0,external_k6_namespaceObject.group)('payment-inquiry', () => {
    const hp = paymentInquiry(paymentCore_host, params, body);
    utils_assertStatus(hp, 200, true, 'paymentInquiry');
    utils_assertSuccess(hp, 'SUCCESS', true, 'paymentInquiry');
  });
};

const bcaOauthToken1 = () => {
  const params = {
    headers: {
      'Authorization': 'Basic NjY0ODI2MTAtMTkzMi00MTNjLWI0ZTctMWQ1MmI0OTFmN2ZmOjVjZWYzNzBkLTAyZDgtNGNjMi04ZjUxLTE3OGI0ZGMxMzc4Yw=='
    },
    tags: {
      name: 'BCA-getToken'
    }
  };
  const body = {}; //group('BCA-getToken', () => {

  const res = paymentCore_bcaOauthToken(paymentCore_host, params, body);
  utils_assertStatus(res, 200, true, 'bcaOauthToken'); // assertSuccess(res, 'SUCCESS', true, 'bcaOauthToken')
  //})

  return res;
};

const bcaInquiry1 = (at, requestId, referenceId) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-inquiry'
    }
  };
  const body = {
    "CompanyCode": "78001",
    "CustomerNumber": referenceId,
    "RequestID": requestId,
    "ChannelType": "6014",
    "TransactionDate": "11/02/2022 18:23:05",
    "AdditionalData": ""
  }; //group('bca-inquiry', () => {

  const hp = paymentCore_bcaInquiry(paymentCore_host, params, body);
  utils_assertStatus(hp, 200, true, 'bcaInquiry'); // assertSuccess(hp, 'SUCCESS', true, 'bcaInquiry')
  //})

  return hp;
};

const bcaNotification1 = (at, requestId, referenceId, totalAmount) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-notification'
    }
  };
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
  };
  (0,external_k6_namespaceObject.group)('bca-notification', () => {
    const hp = paymentCore_bcaNotification(paymentCore_host, params, body);
    utils_assertStatus(hp, 200, true, 'bcaNotification'); // assertSuccess(hp, 'SUCCESS', true, 'bcaNotification')
  });
};

const discountCheckAvailability = (referenceId, orderHash, userName, channelId, requestId) => {
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
      name: 'discountCheckAvailability'
    }
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = checkAvailability(paymentCore_host, params, body);
  assertStatus(hp, 200, true, 'discountCheckAvailability');
  assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailability'); // })
};

const discountCashback1 = (referenceId, userName, channelId, requestId) => {
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
      name: 'discountCashback'
    }
  };
  const body = {}; // group('payment-landing-withmethod', () => {

  const hp = discountCashback(paymentCore_host, params, body, referenceId);
  assertStatus(hp, 200, true, 'discountCashback');
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const calculatePromoDiscount = (referenceId, userName, channelId, requestId) => {
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
      name: 'calculatePromoDiscount'
    }
  };
  const body = {
    "code": "PERFTEST",
    "orderDetails": [{
      "amount": 1312110.1,
      "discount": 100000,
      "orderAttribute": {
        "customerCurrency": "IDR",
        "orderType": "Event",
        "userLogin": "1"
      },
      "productType": "Event",
      "referenceId": "2088121689"
    }],
    "payment": {
      "binNumber": "string",
      "cardNumber": "string",
      "paymentId": 0
    },
    "referenceId": referenceId,
    "totalPrice": 200000,
    "usedPromoCodes": []
  }; // group('payment-landing-withmethod', () => {

  const hp = calculateDiscount(paymentCore_host, params, body);
  assertStatus(hp, 200, true, 'calculatePromoDiscount');
  assertSuccess(hp, 'SUCCESS', true, 'calculatePromoDiscount'); // })
};

const paymentCoreConfigFunc = (userName, channelId, requestId) => {
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
      name: 'paymentCoreConfig'
    }
  };
  (0,external_k6_namespaceObject.group)('paymentCoreConfig', () => {
    const hp = paymentCore_paymentCoreConfig(paymentCore_host, params);
    utils_assertStatus(hp, 200, true, 'paymentCoreConfig');
    utils_assertSuccess(hp, 'SUCCESS', true, 'paymentCoreConfig');
  });
};

const checkCancellableFunc = (referenceId, userName, channelId, requestId) => {
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
      name: 'PaymentCoreCheckCancellable'
    }
  };
  (0,external_k6_namespaceObject.group)('PaymentCoreCheckCancellable', () => {
    const hp = checkCancellable(paymentCore_host, params, referenceId);
    utils_assertStatus(hp, 200, true, 'PaymentCoreCheckCancellable');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreCheckCancellable');
  });
};

const bankBinFunc = (objectId, userName, channelId, requestId) => {
  //const bid=Math.floor(Math.random()*10);
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
      name: 'PaymentCoreBankBin'
    }
  };
  (0,external_k6_namespaceObject.group)('PaymentCoreBankBin', () => {
    const hp = bankBin(paymentCore_host, params, objectId);
    utils_assertStatus(hp, 200, true, 'PaymentCoreBankBin');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreBankBin');
  });
};

const paymentInquiryPutFunc = (timeEpoch, referenceId, userName, channelId, requestId) => {
  //let id = 120073005+Math.floor(Math.random() * 10);
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
      name: 'PaymentCorePaymentInquiryPut'
    }
  };
  const body = {
    "paymentUnitDetails": [{
      "referenceDetailId": 1200920065,
      "productType": "EVENT",
      "orderName": "Konser Maroon 5 Kursi",
      "orderNameDetail": "Paket Lima Seating Otomatis Tanpa Kalender",
      "createdDate": timeEpoch,
      "totalPrice": 12000,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_1",
        "type": "product",
        "value": 12000
      }]
    }, {
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
    }],
    "secretKey": "9905a477c91b40cdabff6679815ff050"
  };
  group('PaymentCorePaymentInquiryPut', () => {
    const hp = paymentInquiryPut(paymentCore_host, params, body, referenceId);
    assertStatus(hp, 200, true, 'PaymentCorePaymentInquiryPut');
    assertSuccess(hp, 'SUCCESS', true, 'PaymentCorePaymentInquiryPut');
  });
};

const creditLimitFunc = (userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com'
    },
    tags: {
      name: 'PayLaterCreditLimit'
    }
  };
  (0,external_k6_namespaceObject.group)('PayLaterCreditLimit', () => {
    const hp = creditLimit(paymentCore_host, params);
    utils_assertStatus(hp, 200, true, 'PayLaterCreditLimit');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PayLaterCreditLimit');
  });
};

const transactionFunc = (referenceId, userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': userName
    },
    tags: {
      name: 'PayLaterTransaction'
    }
  }; //group('PayLaterTransaction', () => {

  const hp = transaction(paymentCore_host, params, referenceId);
  assertStatus(hp, 200, true, 'PayLaterTransaction'); //assertSuccess(hp, 'SUCCESS', true, 'PayLaterTransaction')
  //})
};

const profileFunc = (userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com',
      'accessToken': 'edf903e0b8f311630cd2df5d5022828c91aadddf',
      'Authorization': 'Bearer edf903e0b8f311630cd2df5d5022828c91aadddf'
    },
    tags: {
      name: 'PayLaterProfile'
    }
  };
  (0,external_k6_namespaceObject.group)('PayLaterProfile', () => {
    const hp = paymentCore_profile(paymentCore_host, params);
    utils_assertStatus(hp, 200, true, 'PayLaterProfile');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PayLaterProfile');
  });
};

const checkPaidStatusFunc = (requestId, username, channelId, referenceId) => {
  //let id = 120073005+Math.floor(Math.random() *10);
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-payment-callback/payment/checkPaidStatus'
    }
  };
  group('tix-payment-callback/payment/checkPaidStatus', () => {
    const hp = paymentCallcheckPaidStatus(paymentCore_host, params, referenceId);
    assertStatus(hp, 200, true, 'tix-payment-callback/payment/checkPaidStatus');
    assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment/checkPaidStatus');
  });
};

const paymentFunc = () => {
  const params = {
    headers: {
      Accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'tix-payment-callback/payment'
    }
  };
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
    "kredivoPaymentTypeList": [{
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
    }],
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
  };
  group('tix-payment-callback/payment', () => {
    const hp = paymentCallback(paymentCore_host, params, body);
    assertStatus(hp, 200, true, 'tix-payment-callback/payment'); //assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment')
  });
};

const creditCardcheckPaidStatusFunc = (channelId, requestId, username, referenceId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-credit-card/payment/checkPaidStatus'
    }
  };
  group('tix-credit-card/payment/checkPaidStatus', () => {
    const hp = creditCardcheckPaidStatus(paymentCore_host, params, referenceId);
    assertStatus(hp, 200, true, 'tix-credit-card/payment/checkPaidStatus');
    assertSuccess(hp, 'SUCCESS', true, 'tix-credit-card/payment/checkPaidStatus');
  });
};

const createPaymentListFunc = (channelId, username, requestId, referenceId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username,
      'Content-Type': 'application/json'
    },
    tags: {
      name: 'createpaymentList'
    }
  };
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
    "hotelPaymentType": null
  };
  group('createpaymentList', () => {
    const hp = createPaymentList(paymentCore_host, params, body);
    assertStatus(hp, 200, true, 'createpaymentlist'); //assertSuccess(hp, 'SUCCESS', true, 'createpaymentList')
  });
};

const payLaterRegisterFunc = (lang, userName, channelId, requestId) => {
  const params = {
    headers: {
      Accept: '*/*',
      'Accept-Language': 'en',
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': 'WEB',
      'X-Currency': 'IDR',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Username': 'username',
      'tixtoken': '56f3180e8fd6a0b11308d7132eeec9dd17e565f0'
    },
    tags: {
      name: 'pay-later/profile/register'
    }
  };
  const body = {
    "deviceId": "121212",
    "deviceModel": "iPhone Xs"
  };
  (0,external_k6_namespaceObject.group)('pay-later/profile/register', () => {
    const hp = paymentCore_payLaterRegister(paymentCore_host, params, body);
    utils_assertStatus(hp, 200, true, 'pay-later/profile/register');
    utils_assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register');
  });
};

const paymentFunc1 = () => {
  const params = {
    headers: {
      Accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'pay-later/profile/register'
    }
  };
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
    "kredivoPaymentTypeList": [{
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
    }],
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
  };
  group('pay-later/profile/register', () => {
    const hp = paymentCallback(paymentCore_host, params, body);
    assertStatus(hp, 200, true, 'pay-later/profile/register');
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register');
  });
};

const applyPaymentInquiryFunc = (channelId, requestId, referenceId, username) => {
  const params = {
    headers: {
      accept: '*/*',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': username
    },
    tags: {
      name: 'apply-put-payment-inquiry'
    }
  };
  const body = {
    "paymentUnitDetails": [{
      "referenceDetailId": 1200420005,
      "productType": "EVENT",
      "orderName": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "orderNameDetail": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "createdDate": 1653823985000,
      "totalPrice": 35000,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_4",
        "type": "product",
        "value": 35000
      }]
    }, {
      "referenceDetailId": 1200420006,
      "productType": "PROMOCODE",
      "orderName": "PERFTEST",
      "orderNameDetail": "Promo Code Worth IDR 500",
      "createdDate": 1653823985000,
      "totalPrice": -500,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": []
    }],
    "secretKey": "9905a477c91b40cdabff6679815ff050"
  };
  (0,external_k6_namespaceObject.group)('apply-put-payment-inquiry', () => {
    const hp = ApplyPaymentInquiry(paymentCore_host, params, body, referenceId);
    utils_assertStatus(hp, 200, true, 'apply-put-payment-inquiry');
    utils_assertSuccess(hp, 'SUCCESS', true, 'apply-put-payment-inquiry');
  });
};

const unapplyPaymentInquiryFunc = (channelId, requestId, referenceId, username) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username,
      'Content-Type': 'application/json'
    },
    tags: {
      name: 'unapply-put-payment-inquiry'
    }
  };
  const body = {
    "paymentUnitDetails": [{
      "referenceDetailId": 1200420005,
      "productType": "EVENT",
      "orderName": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "orderNameDetail": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "createdDate": 1653823985000,
      "totalPrice": 35000,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_4",
        "type": "product",
        "value": 35000
      }]
    }],
    "secretKey": "9905a477c91b40cdabff6679815ff050"
  };
  (0,external_k6_namespaceObject.group)('unapply-put-payment-inquiry', () => {
    const hp = UnapplyPaymentInquiry(paymentCore_host, params, body, referenceId);
    utils_assertStatus(hp, 200, true, 'unapply-put-payment-inquiry');
    utils_assertSuccess(hp, 'SUCCESS', true, 'unapply-put-payment-inquiry');
  });
};
;// CONCATENATED MODULE: ./generator/payment/core/paymentCore1.js










const paymentCore1_host = 'https://lb-perf.tiket.com';
const paymentCore1_orderDataGlobal = parseCSV('orders', 'data/orders.csv');
var paymentCore1_userData = parseCSV('emails', 'data/email.csv');
var paymentCore1_objectIdData = parseCSV('objectIds', 'data/objectId.csv');
const paymentFlow1 = () => {
  const timeEpoch = Math.round(Date.now());
  var val = Math.floor(100000000 + Math.random() * 900000000);
  var referenceId = '1' + val; //var referenceId=2003809728;
  //var orderHash=Math.random().toString(36).slice(2);

  var orderHash = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < 24; i++) {
    orderHash += characters.charAt(Math.floor(Math.random() * charactersLength));
  } //const orderHash="tct37lmxof98tybuhyjjl"
  // var row = Math.floor(Math.random() * orderDataGlobal.length)
  // const userName=orderDataGlobal[row][3];
  //const userName = 'testing31370tiket.com'


  var row1 = Math.floor(Math.random() * paymentCore1_userData.length);
  var userName = paymentCore1_userData[row1][0]; //console.log(userName)

  const discountCode = randomList(['PERFTEST']);
  var totalCustomerPrice = 2000000;
  const channelId = randomList(['ANDROID', 'IOS', 'WEB', 'DESKTOP']);
  const requestId = `perf1_${__VU}_${__ITER}_${(0,_1_0_0_index_js_namespaceObject.uuidv4)()}`;
  var row2 = Math.floor(Math.random() * paymentCore1_objectIdData.length);
  var objectId = paymentCore1_objectIdData[row2][0]; //createPaymentListFunc(channelId,userName,requestId,referenceId);

  paymentCore1_paymentsInquiry(referenceId, orderHash, userName, timeEpoch, channelId, requestId);
  paymentCore1_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore1_paymentGroup(referenceId, orderHash, userName, channelId, requestId);
  const paymentGroupId = '60f52d1e0c83f60001ec5a75';
  paymentCore1_paymentMethod(referenceId, orderHash, paymentGroupId, userName, channelId, requestId);
  paymentCore1_paymentLandingwithMethod(referenceId, orderHash, userName, channelId, requestId); // promoSuggestion(referenceId,orderHash,userName,channelId,requestId);
  // const totalPrice=200000
  // promoApply(referenceId,orderHash,totalPrice,userName,channelId);
  //promoSuggestion1(referenceId,orderHash)

  paymentCore1_PromoSuggestionV2(referenceId, orderHash, userName, channelId, requestId);
  const totalPrice = 200000; //promoApply(referenceId,orderHash,totalPrice,userName,channelId);
  //applyDiscount1(referenceId,orderHash)

  paymentCore1_DiscountApplyV2(referenceId, orderHash, totalPrice, userName, channelId, requestId); //const orderDetailId=applyDiscount.json().data.orderDetailId;

  const orderDetailId = 21473186; //const UnapplyDiscount=promoUnApply(referenceId, orderHash, totalCustomerPrice, orderDetailId, userName,channelId);

  paymentCore1_checkCancellableFunc(referenceId, userName, channelId, requestId);
  paymentCore1_paymentSubmit(referenceId, orderHash, userName, channelId, requestId);
  paymentCore1_paymentConfirm(referenceId, orderHash, userName, channelId, requestId); // discountCheckAvailability(referenceId,orderHash,userName,channelId,requestId)
  // discountCashback1(referenceId,userName,channelId,requestId)
  //checkAvailabilityDiscount(referenceId,orderHash)
  //getPromoCashbackInfo(referenceId)
  //const calculatePromoDiscount1=calculatePromoDiscount(referenceId,userName,channelId,requestId)

  paymentCore1_DiscountCheckAvailabilityV2(referenceId, orderHash, userName, channelId, requestId);
  paymentCore1_DiscountCashback(referenceId, orderHash, userName, channelId, requestId);
  const bcaOauthToken = paymentCore1_bcaOauthToken1();
  const accessToken = bcaOauthToken.json().access_token; //const requestId1="7800111001328101100134752"

  const bcaInquiry = paymentCore1_bcaInquiry1(accessToken, requestId, referenceId);
  const totalAmount = bcaInquiry.json().TotalAmount;
  const bcaNotification = paymentCore1_bcaNotification1(accessToken, requestId, referenceId, totalAmount);
  paymentCore1_paymentCoreConfigFunc(userName, channelId, requestId);
  paymentCore1_bankBinFunc(objectId, userName, channelId, requestId); //paymentInquiryPutFunc(timeEpoch,referenceId,userName,channelId,requestId);

  const lang = randomList(['en', 'id']);
  paymentCore1_creditLimitFunc(userName, channelId, requestId, lang); //transactionFunc(referenceId,userName,channelId,requestId,lang);

  paymentCore1_profileFunc(userName, channelId, requestId, lang); //payLaterRegisterFunc(lang,userName,channelId,requestId); 
  // checkPaidStatusFunc(lang,requestId,userName,channelId,referenceId);
  // creditCardcheckPaidStatusFunc(channelId,requestId,userName,referenceId); 
  //paymentFunc();
};

const paymentCore1_PromoSuggestionV2 = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = promoGateway_promoSuggestionV2(paymentCore1_host, params, body);
  utils_assertStatus(hp, 200, true, 'promoSuggestionV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'promoSuggestionV2'); // })
};

const paymentCore1_DiscountApplyV2 = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST",
    "currency": "IDR",
    "paymentType": "VA_BCA",
    "productType": "EVENT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountApplyV2(paymentCore1_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountApplyV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountApplyV2'); // })
};

const paymentCore1_DiscountUnAplyV2 = (referenceId, orderHash, totalCustomerPrice, requestId, userName, channelId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountUnAplyV2(paymentCore1_host, params, body);
  assertStatus(hp, 200, true, 'discountUnAplyV2');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnAplyV2'); // })
};

const paymentCore1_DiscountCheckAvailabilityV2 = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST",
    "currency": "IDR",
    "paymentType": "VA_BCA",
    "productType": "EVENT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountCheckAvailabilityV2(paymentCore1_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountCheckAvailabilityV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailabilityV2'); // })
};

const paymentCore1_DiscountCashback = (referenceId, orderHash, userName, channelId, requestId) => {
  const promoCode = "PERFTEST";
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
  }; // group('payment-landing-withmethod', () => {

  const hp = promoGateway_discountCashback2(paymentCore1_host, params, referenceId, promoCode);
  utils_assertStatus(hp, 200, true, 'discountCashback');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const paymentCore1_promoSuggestion1 = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'promo-suggestion'
    }
  };
  const mutation = `mutation getPromoSuggestion($payload: String) {  getPromoSuggestion(payload: $payload) {    code    message    serverTime    data {      description      code      expiredDate      amount      position      source    }  }}`;
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
  };
  const variables = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'getPromoSuggestion'
  };
  group('promo-suggestion', () => {
    const hp = qglCall(paymentCore1_host, params, body);
    assertStatus(hp, 200, true, 'getPromoSuggestion'); //assertSuccessGQL(hp, 'SUCCESS', true, 'getPromoSuggestion')
  });
};

const paymentCore1_applyDiscount1 = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'apply-promo'
    }
  };
  const mutation = `mutation applyDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {  applyDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {    code    message    data {      discountCode      discountType      orderDetailId      totalDiscount    }  }}`;
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'applyDiscount'
  };
  const hp = qglCall(paymentCore1_host, params, body);
  assertStatus(hp, 200, true, 'applyDiscount'); //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  //return hp.body
  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const paymentCore1_unApplyDiscount1 = (orderId, orderHash, orderDetailId) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'unapply-promo'
    }
  };
  const mutation = `mutation unapplyDiscount($payload: String) {  discountEngineUnapply(payload: $payload) {    code    message    data  }}`;
  const payload = {
    'orderId': orderId,
    'orderHash': orderHash,
    'productType': 'EVENT',
    'discountCode': "PERFTEST",
    'orderDetailId': orderDetailId,
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
  group('unapply-promo', () => {
    const hp = qglCall(paymentCore1_host, params, body);
    assertStatus(hp, 200, true, 'discountEngineUnapply');
    assertSuccessGQL(hp, 'SUCCESS', true, 'discountEngineUnapply');
  });
};

const paymentCore1_checkAvailabilityDiscount = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'checkAvailabilityDiscount'
    }
  };
  const mutation = `mutation checkAvailabilityDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {
    checkAvailabilityDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {
      code
      message
      data
    }
  }`;
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'checkAvailabilityDiscount'
  };
  const hp = qglCall(paymentCore1_host, params, body);
  assertStatus(hp, 200, true, 'checkAvailabilityDiscount'); //assertSuccessGQL(hp, 'SUCCESS', true, 'checkAvailabilityDiscount')
  //return hp.body
  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const paymentCore1_getPromoCashbackInfo = orderId => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'getPromoCashbackInfo'
    }
  };
  const mutation = `query getPromoCashbackInfo($payload: String) {
    getCashbackInfo(payload: $payload) {
      code
      message
      data {
        promoCode
        cashbackAmount
      }
    }
  }`;
  const payload = {
    'orderId': orderId,
    'promoCode': "PERFTEST"
  };
  const variable = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variable,
    operationName: 'getPromoCashbackInfo'
  };
  group('getPromoCashbackInfo', () => {
    const hp = qglCall(paymentCore1_host, params, body);
    assertStatus(hp, 200, true, 'getCashbackInfo');
    assertSuccessGQL(hp, 'SUCCESS', true, 'getCashbackInfo');
  });
};

const paymentCore1_checkversion = (referenceId, orderHash, userName, channelId, requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS']),
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'check-version'
    }
  };
  const queryParams = new url_1_0_0_index_js_namespaceObject.URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  (0,external_k6_namespaceObject.group)('check-version', () => {
    const res = paymentCore_checkVersion(paymentCore1_host, params, queryParams);
    utils_assertStatus(res, 200, true, 'checkVersion');
    utils_assertSuccess(res, 'SUCCESS', true, 'checkVersion');
  });
};

const paymentCore1_paymentGroup = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore1_orderDataGlobal.length);
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
  };
  const queryParams = new url_1_0_0_index_js_namespaceObject.URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  (0,external_k6_namespaceObject.group)('payment-group', () => {
    const res = paymentCore_paymentV4paymentGroup(paymentCore1_host, params, queryParams);
    utils_assertStatus(res, 200, true, 'paymentV4paymentGroup');
    utils_assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentGroup');
  });
};

const paymentCore1_paymentMethod = (referenceId, orderHash, paymentGroupId, userName, channelId, requestId) => {
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
  };
  const queryParams = new url_1_0_0_index_js_namespaceObject.URLSearchParams([['orderHash', orderHash], ['paymentGroupId', paymentGroupId], ['referenceId', referenceId]]);
  (0,external_k6_namespaceObject.group)('payment-Method', () => {
    const res = paymentCore_paymentV4paymentMethod(paymentCore1_host, params, queryParams);
    utils_assertStatus(res, 200, true, 'paymentV4paymentMethod');
    utils_assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentMethod');
  });
};

const paymentCore1_paymentLandingwithMethod = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash,
    paymentMethod: 'VA_BCA'
  }; // group('payment-landing-withmethod', () => {

  const hp = paymentCore_paymentV4Landing(paymentCore1_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentV4Landing');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentV4Landing'); // })
};

const paymentCore1_promoSuggestion = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore1_orderDataGlobal.length);
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
  };
  const queryParams = new URLSearchParams([['currency', 'IDR'], ['orderId', referenceId], ['totalAmount', 200000], ['productType', 'EVENT'], ['size', 10], ['page', 0]]);
  group('promo-suggestion', () => {
    const res = discountPromoSuggestion(paymentCore1_host, params, queryParams);
    assertStatus(res, 200, true, 'discountPromoSuggestion');
    assertSuccess(res, 'SUCCESS', true, 'discountPromoSuggestion');
  });
}; // export const applyUnapplyandSubmit = () => {
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


const paymentCore1_promoApply = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-apply', () => {

  const hp = discountApply(paymentCore1_host, params, body);
  assertStatus(hp, 200, true, 'discountApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountApply'); // })

  return hp;
};

const paymentCore1_promoUnApply = (referenceId, orderHash, totalCustomerPrice, orderDetailId, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-unapply', () => {

  const hp = discountUnApply(paymentCore1_host, params, body);
  assertStatus(hp, 200, true, 'discountUnApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnApply'); // })
};

const paymentCore1_paymentSubmit = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentCore_paymentDetailVA_BCA(paymentCore1_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentDetailVA_BCA');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentDetailVA_BCA'); // })
};

const paymentCore1_paymentConfirm = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    debitOnline: false,
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentCore_paymentConfirmVA_BCA(paymentCore1_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentConfirmVA_BCA');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentConfirmVA_BCA'); // })
};

const paymentCore1_paymentsInquiry = (referenceId, orderHash, userName, timeEpoch, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore1_orderDataGlobal.length);
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
  };
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
    "paymentUnitDetails": [{
      "referenceDetailId": 1200420004,
      "productType": "EVENT",
      "orderName": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "orderNameDetail": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "createdDate": 1650309021000,
      "totalPrice": 3470332,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_4",
        "type": "product",
        "value": 3470332
      }]
    }, {
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
    }],
    "message": {
      "products": [{
        "type": "event",
        "detailId": "1200420004",
        "title": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "detail": "6 Tickets For Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "date": "Saturday, 30 April 2022 (00:00:00)",
        "ticketClass": "",
        "customers": [{
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }],
        "airportTransfer": null,
        "dateTime": "2022-04-30 00:00:00"
      }]
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
        "items": [{
          "itemId": "1200420004",
          "productTitle": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
          "currencyCode": "IDR",
          "price": "3470332",
          "quantity": "6"
        }],
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
  };
  (0,external_k6_namespaceObject.group)('payment-inquiry', () => {
    const hp = paymentInquiry(paymentCore1_host, params, body);
    utils_assertStatus(hp, 200, true, 'paymentInquiry');
    utils_assertSuccess(hp, 'SUCCESS', true, 'paymentInquiry');
  });
};

const paymentCore1_bcaOauthToken1 = () => {
  const params = {
    headers: {
      'Authorization': 'Basic NjY0ODI2MTAtMTkzMi00MTNjLWI0ZTctMWQ1MmI0OTFmN2ZmOjVjZWYzNzBkLTAyZDgtNGNjMi04ZjUxLTE3OGI0ZGMxMzc4Yw=='
    },
    tags: {
      name: 'BCA-getToken'
    }
  };
  const body = {}; //group('BCA-getToken', () => {

  const res = paymentCore_bcaOauthToken(paymentCore1_host, params, body);
  utils_assertStatus(res, 200, true, 'bcaOauthToken'); // assertSuccess(res, 'SUCCESS', true, 'bcaOauthToken')
  //})

  return res;
};

const paymentCore1_bcaInquiry1 = (at, requestId, referenceId) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-inquiry'
    }
  };
  const body = {
    "CompanyCode": "78001",
    "CustomerNumber": referenceId,
    "RequestID": requestId,
    "ChannelType": "6014",
    "TransactionDate": "11/02/2022 18:23:05",
    "AdditionalData": ""
  }; //group('bca-inquiry', () => {

  const hp = paymentCore_bcaInquiry(paymentCore1_host, params, body);
  utils_assertStatus(hp, 200, true, 'bcaInquiry'); // assertSuccess(hp, 'SUCCESS', true, 'bcaInquiry')
  //})

  return hp;
};

const paymentCore1_bcaNotification1 = (at, requestId, referenceId, totalAmount) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-notification'
    }
  };
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
  };
  (0,external_k6_namespaceObject.group)('bca-notification', () => {
    const hp = paymentCore_bcaNotification(paymentCore1_host, params, body);
    utils_assertStatus(hp, 200, true, 'bcaNotification'); // assertSuccess(hp, 'SUCCESS', true, 'bcaNotification')
  });
};

const paymentCore1_discountCheckAvailability = (referenceId, orderHash, userName, channelId, requestId) => {
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
      name: 'discountCheckAvailability'
    }
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = checkAvailability(paymentCore1_host, params, body);
  assertStatus(hp, 200, true, 'discountCheckAvailability');
  assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailability'); // })
};

const paymentCore1_discountCashback1 = (referenceId, userName, channelId, requestId) => {
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
      name: 'discountCashback'
    }
  };
  const body = {}; // group('payment-landing-withmethod', () => {

  const hp = discountCashback(paymentCore1_host, params, body, referenceId);
  assertStatus(hp, 200, true, 'discountCashback');
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const paymentCore1_calculatePromoDiscount = (referenceId, userName, channelId, requestId) => {
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
      name: 'calculatePromoDiscount'
    }
  };
  const body = {
    "code": "PERFTEST",
    "orderDetails": [{
      "amount": 1312110.1,
      "discount": 100000,
      "orderAttribute": {
        "customerCurrency": "IDR",
        "orderType": "Event",
        "userLogin": "1"
      },
      "productType": "Event",
      "referenceId": "2088121689"
    }],
    "payment": {
      "binNumber": "string",
      "cardNumber": "string",
      "paymentId": 0
    },
    "referenceId": referenceId,
    "totalPrice": 200000,
    "usedPromoCodes": []
  }; // group('payment-landing-withmethod', () => {

  const hp = calculateDiscount(paymentCore1_host, params, body);
  assertStatus(hp, 200, true, 'calculatePromoDiscount');
  assertSuccess(hp, 'SUCCESS', true, 'calculatePromoDiscount'); // })
};

const paymentCore1_paymentCoreConfigFunc = (userName, channelId, requestId) => {
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
      name: 'paymentCoreConfig'
    }
  };
  (0,external_k6_namespaceObject.group)('paymentCoreConfig', () => {
    const hp = paymentCore_paymentCoreConfig(paymentCore1_host, params);
    utils_assertStatus(hp, 200, true, 'paymentCoreConfig');
    utils_assertSuccess(hp, 'SUCCESS', true, 'paymentCoreConfig');
  });
};

const paymentCore1_checkCancellableFunc = (referenceId, userName, channelId, requestId) => {
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
      name: 'PaymentCoreCheckCancellable'
    }
  };
  (0,external_k6_namespaceObject.group)('PaymentCoreCheckCancellable', () => {
    const hp = checkCancellable(paymentCore1_host, params, referenceId);
    utils_assertStatus(hp, 200, true, 'PaymentCoreCheckCancellable');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreCheckCancellable');
  });
};

const paymentCore1_bankBinFunc = (objectId, userName, channelId, requestId) => {
  //const bid=Math.floor(Math.random()*10);
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
      name: 'PaymentCoreBankBin'
    }
  };
  (0,external_k6_namespaceObject.group)('PaymentCoreBankBin', () => {
    const hp = bankBin(paymentCore1_host, params, objectId);
    utils_assertStatus(hp, 200, true, 'PaymentCoreBankBin'); //assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreBankBin')
  });
};

const paymentCore1_paymentInquiryPutFunc = (timeEpoch, referenceId, userName, channelId, requestId) => {
  //let id = 120073005+Math.floor(Math.random() * 10);
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
      name: 'PaymentCorePaymentInquiryPut'
    }
  };
  const body = {
    "paymentUnitDetails": [{
      "referenceDetailId": 1200920065,
      "productType": "EVENT",
      "orderName": "Konser Maroon 5 Kursi",
      "orderNameDetail": "Paket Lima Seating Otomatis Tanpa Kalender",
      "createdDate": timeEpoch,
      "totalPrice": 12000,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_1",
        "type": "product",
        "value": 12000
      }]
    }, {
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
    }],
    "secretKey": "9905a477c91b40cdabff6679815ff050"
  };
  group('PaymentCorePaymentInquiryPut', () => {
    const hp = paymentInquiryPut(paymentCore1_host, params, body, referenceId);
    assertStatus(hp, 200, true, 'PaymentCorePaymentInquiryPut');
    assertSuccess(hp, 'SUCCESS', true, 'PaymentCorePaymentInquiryPut');
  });
};

const paymentCore1_creditLimitFunc = (userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com'
    },
    tags: {
      name: 'PayLaterCreditLimit'
    }
  };
  (0,external_k6_namespaceObject.group)('PayLaterCreditLimit', () => {
    const hp = creditLimit(paymentCore1_host, params);
    utils_assertStatus(hp, 200, true, 'PayLaterCreditLimit');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PayLaterCreditLimit');
  });
};

const paymentCore1_transactionFunc = (referenceId, userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': userName
    },
    tags: {
      name: 'PayLaterTransaction'
    }
  };
  group('PayLaterTransaction', () => {
    const hp = transaction(paymentCore1_host, params, referenceId);
    assertStatus(hp, 200, true, 'PayLaterTransaction'); //assertSuccess(hp, 'SUCCESS', true, 'PayLaterTransaction')
  });
};

const paymentCore1_profileFunc = (userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com',
      'accessToken': 'edf903e0b8f311630cd2df5d5022828c91aadddf',
      'Authorization': 'Bearer edf903e0b8f311630cd2df5d5022828c91aadddf'
    },
    tags: {
      name: 'PayLaterProfile'
    }
  };
  (0,external_k6_namespaceObject.group)('PayLaterProfile', () => {
    const hp = paymentCore_profile(paymentCore1_host, params);
    utils_assertStatus(hp, 200, true, 'PayLaterProfile');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PayLaterProfile');
  });
};

const paymentCore1_checkPaidStatusFunc = (requestId, username, channelId, referenceId) => {
  //let id = 120073005+Math.floor(Math.random() *10);
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-payment-callback/payment/checkPaidStatus'
    }
  };
  group('tix-payment-callback/payment/checkPaidStatus', () => {
    const hp = paymentCallcheckPaidStatus(paymentCore1_host, params, referenceId);
    assertStatus(hp, 200, true, 'tix-payment-callback/payment/checkPaidStatus');
    assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment/checkPaidStatus');
  });
};

const paymentCore1_paymentFunc = () => {
  const params = {
    headers: {
      Accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'tix-payment-callback/payment'
    }
  };
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
    "kredivoPaymentTypeList": [{
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
    }],
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
  };
  group('tix-payment-callback/payment', () => {
    const hp = paymentCallback(paymentCore1_host, params, body);
    assertStatus(hp, 200, true, 'tix-payment-callback/payment'); //assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment')
  });
};

const paymentCore1_creditCardcheckPaidStatusFunc = (channelId, requestId, username, referenceId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-credit-card/payment/checkPaidStatus'
    }
  };
  group('tix-credit-card/payment/checkPaidStatus', () => {
    const hp = creditCardcheckPaidStatus(paymentCore1_host, params, referenceId);
    assertStatus(hp, 200, true, 'tix-credit-card/payment/checkPaidStatus');
    assertSuccess(hp, 'SUCCESS', true, 'tix-credit-card/payment/checkPaidStatus');
  });
};

const paymentCore1_createPaymentListFunc = (channelId, username, requestId, referenceId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username,
      'Content-Type': 'application/json'
    },
    tags: {
      name: 'createpaymentList'
    }
  };
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
    "hotelPaymentType": null
  };
  group('createpaymentList', () => {
    const hp = createPaymentList(paymentCore1_host, params, body);
    assertStatus(hp, 200, true, 'createpaymentlist'); //assertSuccess(hp, 'SUCCESS', true, 'createpaymentList')
  });
};

const paymentCore1_payLaterRegisterFunc = (lang, userName, channelId, requestId) => {
  const params = {
    headers: {
      Accept: '*/*',
      'Accept-Language': 'en',
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': 'WEB',
      'X-Currency': 'IDR',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Username': 'username',
      'tixtoken': '56f3180e8fd6a0b11308d7132eeec9dd17e565f0'
    },
    tags: {
      name: 'pay-later/profile/register'
    }
  };
  const body = {
    "deviceId": "121212",
    "deviceModel": "iPhone Xs"
  };
  group('pay-later/profile/register', () => {
    const hp = payLaterRegister(paymentCore1_host, params, body);
    assertStatus(hp, 200, true, 'pay-later/profile/register');
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register');
  });
};

const paymentCore1_paymentFunc1 = () => {
  const params = {
    headers: {
      Accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'pay-later/profile/register'
    }
  };
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
    "kredivoPaymentTypeList": [{
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
    }],
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
  };
  group('pay-later/profile/register', () => {
    const hp = paymentCallback(paymentCore1_host, params, body);
    assertStatus(hp, 200, true, 'pay-later/profile/register');
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register');
  });
};
;// CONCATENATED MODULE: ./generator/payment/core/paymentCore2.js










const paymentCore2_host = 'https://lb-perf.tiket.com';
const paymentCore2_orderDataGlobal = parseCSV('orders', 'data/orders.csv');
var paymentCore2_userData = parseCSV('emails', 'data/email.csv');
var paymentCore2_objectIdData = parseCSV('objectIds', 'data/objectId.csv');
const paymentFlow2 = () => {
  const timeEpoch = Math.round(Date.now());
  var val = Math.floor(100000000 + Math.random() * 900000000);
  var referenceId = '1' + val; //var referenceId=2003809728;
  //var orderHash=Math.random().toString(36).slice(2);

  var orderHash = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < 24; i++) {
    orderHash += characters.charAt(Math.floor(Math.random() * charactersLength));
  } //const orderHash="tct37lmxof98tybuhyjjl"
  // var row = Math.floor(Math.random() * orderDataGlobal.length)
  // const userName=orderDataGlobal[row][3];
  //const userName = 'testing31370tiket.com'


  var row1 = Math.floor(Math.random() * paymentCore2_userData.length);
  var userName = paymentCore2_userData[row1][0]; //console.log(userName)

  const discountCode = randomList(['PERFTEST']);
  var totalCustomerPrice = 2000000;
  const channelId = randomList(['ANDROID', 'IOS', 'WEB', 'DESKTOP']);
  const requestId = `perf1_${__VU}_${__ITER}_${(0,_1_0_0_index_js_namespaceObject.uuidv4)()}`;
  var row2 = Math.floor(Math.random() * paymentCore2_objectIdData.length);
  var objectId = paymentCore2_objectIdData[row2][0]; //createPaymentListFunc(channelId,userName,requestId,referenceId); 

  paymentCore2_paymentsInquiry(referenceId, orderHash, userName, timeEpoch, channelId, requestId);
  paymentCore2_checkversion(referenceId, orderHash, userName, channelId, requestId); // const paymentGroup1=paymentGroup(referenceId,orderHash,userName,channelId,requestId);
  // const paymentGroupId='60f52d1e0c83f60001ec5a75'
  // const paymentMethod1=paymentMethod(referenceId,orderHash,paymentGroupId,userName,channelId,requestId);

  paymentCore2_paymentLandingwithMethod(referenceId, orderHash, userName, channelId, requestId); //promoSuggestion(referenceId,orderHash,userName,channelId,requestId);
  //promoSuggestion1(referenceId,orderHash)

  paymentCore2_PromoSuggestionV2(referenceId, orderHash, userName, channelId, requestId);
  const totalPrice = 200000; //promoApply(referenceId,orderHash,totalPrice,userName,channelId);
  //applyDiscount1(referenceId,orderHash)

  paymentCore2_DiscountApplyV2(referenceId, orderHash, totalPrice, userName, channelId, requestId); //const orderDetailId=applyDiscount.json().data.orderDetailId;

  const orderDetailId = 21473186; //const UnapplyDiscount=promoUnApply(referenceId, orderHash, totalCustomerPrice, orderDetailId, userName,channelId);

  paymentCore2_checkCancellableFunc(referenceId, userName, channelId, requestId);
  paymentCore2_paymentSubmit(referenceId, orderHash, userName, channelId, requestId);
  paymentCore2_paymentConfirm(referenceId, orderHash, userName, channelId, requestId); // discountCheckAvailability(referenceId,orderHash,userName,channelId,requestId)
  // checkAvailabilityDiscount(referenceId,orderHash)
  //const discountCashback2=discountCashback1(referenceId,userName,channelId,requestId)
  //const calculatePromoDiscount1=calculatePromoDiscount(referenceId,userName,channelId,requestId)

  paymentCore2_DiscountCheckAvailabilityV2(referenceId, orderHash, userName, channelId, requestId);
  const bcaOauthToken = paymentCore2_bcaOauthToken1();
  const accessToken = bcaOauthToken.json().access_token; //const requestId1="7800111001328101100134752"

  const bcaInquiry = paymentCore2_bcaInquiry1(accessToken, requestId, referenceId);
  const totalAmount = bcaInquiry.json().TotalAmount;
  paymentCore2_bcaNotification1(accessToken, requestId, referenceId, totalAmount); //paymentCoreConfigFunc(userName,channelId,requestId);

  paymentCore2_bankBinFunc(objectId, userName, channelId, requestId); //paymentInquiryPutFunc(timeEpoch,referenceId,userName,channelId,requestId);

  const lang = randomList(['en', 'id']);
  paymentCore2_creditLimitFunc(userName, channelId, requestId, lang); //transactionFunc(referenceId,userName,channelId,requestId,lang);
  //profileFunc(userName,channelId,requestId,lang);
  //payLaterRegisterFunc(lang,userName,channelId,requestId); 
  // checkPaidStatusFunc(lang,requestId,userName,channelId,referenceId);
  // creditCardcheckPaidStatusFunc(channelId,requestId,userName,referenceId);
  //paymentFunc();
};

const paymentCore2_PromoSuggestionV2 = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = promoGateway_promoSuggestionV2(paymentCore2_host, params, body);
  utils_assertStatus(hp, 200, true, 'promoSuggestionV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'promoSuggestionV2'); // })
};

const paymentCore2_DiscountApplyV2 = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST",
    "currency": "IDR",
    "paymentType": "VA_BCA",
    "productType": "EVENT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountApplyV2(paymentCore2_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountApplyV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountApplyV2'); // })
};

const paymentCore2_DiscountUnAplyV2 = (referenceId, orderHash, totalCustomerPrice, requestId, userName, channelId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountUnAplyV2(paymentCore2_host, params, body);
  assertStatus(hp, 200, true, 'discountUnAplyV2');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnAplyV2'); // })
};

const paymentCore2_DiscountCheckAvailabilityV2 = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST",
    "currency": "IDR",
    "paymentType": "VA_BCA",
    "productType": "EVENT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountCheckAvailabilityV2(paymentCore2_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountCheckAvailabilityV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailabilityV2'); // })
};

const paymentCore2_DiscountCashback = (referenceId, orderHash, userName, channelId, requestId) => {
  const promoCode = "PERFTEST";
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
  }; // group('payment-landing-withmethod', () => {

  const hp = discountCashback2(paymentCore2_host, params, referenceId, promoCode);
  assertStatus(hp, 200, true, 'discountCashback');
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const paymentCore2_promoSuggestion1 = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'promo-suggestion'
    }
  };
  const mutation = `mutation getPromoSuggestion($payload: String) {  getPromoSuggestion(payload: $payload) {    code    message    serverTime    data {      description      code      expiredDate      amount      position      source    }  }}`;
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
  };
  const variables = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'getPromoSuggestion'
  };
  group('promo-suggestion', () => {
    const hp = qglCall(paymentCore2_host, params, body);
    assertStatus(hp, 200, true, 'getPromoSuggestion'); //assertSuccessGQL(hp, 'SUCCESS', true, 'getPromoSuggestion')
  });
};

const paymentCore2_applyDiscount1 = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'apply-promo'
    }
  };
  const mutation = `mutation applyDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {  applyDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {    code    message    data {      discountCode      discountType      orderDetailId      totalDiscount    }  }}`;
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'applyDiscount'
  };
  const hp = qglCall(paymentCore2_host, params, body);
  assertStatus(hp, 200, true, 'applyDiscount'); //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  //return hp.body
  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const paymentCore2_unApplyDiscount1 = (orderId, orderHash, orderDetailId) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'unapply-promo'
    }
  };
  const mutation = `mutation unapplyDiscount($payload: String) {  discountEngineUnapply(payload: $payload) {    code    message    data  }}`;
  const payload = {
    'orderId': orderId,
    'orderHash': orderHash,
    'productType': 'EVENT',
    'discountCode': "PERFTEST",
    'orderDetailId': orderDetailId,
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
  group('unapply-promo', () => {
    const hp = qglCall(paymentCore2_host, params, body);
    assertStatus(hp, 200, true, 'discountEngineUnapply');
    assertSuccessGQL(hp, 'SUCCESS', true, 'discountEngineUnapply');
  });
};

const paymentCore2_checkAvailabilityDiscount = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'checkAvailabilityDiscount'
    }
  };
  const mutation = `mutation checkAvailabilityDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {
    checkAvailabilityDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {
      code
      message
      data
    }
  }`;
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'checkAvailabilityDiscount'
  };
  const hp = qglCall(paymentCore2_host, params, body);
  assertStatus(hp, 200, true, 'checkAvailabilityDiscount'); //assertSuccessGQL(hp, 'SUCCESS', true, 'checkAvailabilityDiscount')
  //return hp.body
  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const paymentCore2_getPromoCashbackInfo = orderId => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'getPromoCashbackInfo'
    }
  };
  const mutation = `query getPromoCashbackInfo($payload: String) {
    getCashbackInfo(payload: $payload) {
      code
      message
      data {
        promoCode
        cashbackAmount
      }
    }
  }`;
  const payload = {
    'orderId': orderId,
    'promoCode': "PERFTEST"
  };
  const variable = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variable,
    operationName: 'getPromoCashbackInfo'
  };
  group('getPromoCashbackInfo', () => {
    const hp = qglCall(paymentCore2_host, params, body);
    assertStatus(hp, 200, true, 'getCashbackInfo');
    assertSuccessGQL(hp, 'SUCCESS', true, 'getCashbackInfo');
  });
};

const paymentCore2_checkversion = (referenceId, orderHash, userName, channelId, requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS']),
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'check-version'
    }
  };
  const queryParams = new url_1_0_0_index_js_namespaceObject.URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  (0,external_k6_namespaceObject.group)('check-version', () => {
    const res = paymentCore_checkVersion(paymentCore2_host, params, queryParams);
    utils_assertStatus(res, 200, true, 'checkVersion');
    utils_assertSuccess(res, 'SUCCESS', true, 'checkVersion');
  });
};

const paymentCore2_paymentGroup = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore2_orderDataGlobal.length);
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
  };
  const queryParams = new URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  group('payment-group', () => {
    const res = paymentV4paymentGroup(paymentCore2_host, params, queryParams);
    assertStatus(res, 200, true, 'paymentV4paymentGroup');
    assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentGroup');
  });
};

const paymentCore2_paymentMethod = (referenceId, orderHash, paymentGroupId, userName, channelId, requestId) => {
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
  };
  const queryParams = new URLSearchParams([['orderHash', orderHash], ['paymentGroupId', paymentGroupId], ['referenceId', referenceId]]);
  group('payment-Method', () => {
    const res = paymentV4paymentMethod(paymentCore2_host, params, queryParams);
    assertStatus(res, 200, true, 'paymentV4paymentMethod');
    assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentMethod');
  });
};

const paymentCore2_paymentLandingwithMethod = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash,
    paymentMethod: 'VA_BCA'
  }; // group('payment-landing-withmethod', () => {

  const hp = paymentCore_paymentV4Landing(paymentCore2_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentV4Landing');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentV4Landing'); // })
};

const paymentCore2_promoSuggestion = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore2_orderDataGlobal.length);
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
  };
  const queryParams = new URLSearchParams([['currency', 'IDR'], ['orderId', referenceId], ['totalAmount', 200000], ['productType', 'EVENT'], ['size', 10], ['page', 0]]);
  group('promo-suggestion', () => {
    const res = discountPromoSuggestion(paymentCore2_host, params, queryParams);
    assertStatus(res, 200, true, 'discountPromoSuggestion');
    assertSuccess(res, 'SUCCESS', true, 'discountPromoSuggestion');
  });
}; // export const applyUnapplyandSubmit = () => {
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


const paymentCore2_promoApply = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-apply', () => {

  const hp = discountApply(paymentCore2_host, params, body);
  assertStatus(hp, 200, true, 'discountApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountApply'); // })

  return hp;
};

const paymentCore2_promoUnApply = (referenceId, orderHash, totalCustomerPrice, orderDetailId, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-unapply', () => {

  const hp = discountUnApply(paymentCore2_host, params, body);
  assertStatus(hp, 200, true, 'discountUnApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnApply'); // })
};

const paymentCore2_paymentSubmit = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentCore_paymentDetailVA_BCA(paymentCore2_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentDetailVA_BCA');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentDetailVA_BCA'); // })
};

const paymentCore2_paymentConfirm = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    debitOnline: false,
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentCore_paymentConfirmVA_BCA(paymentCore2_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentConfirmVA_BCA');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentConfirmVA_BCA'); // })
};

const paymentCore2_paymentsInquiry = (referenceId, orderHash, userName, timeEpoch, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore2_orderDataGlobal.length);
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
  };
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
    "paymentUnitDetails": [{
      "referenceDetailId": 1200420004,
      "productType": "EVENT",
      "orderName": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "orderNameDetail": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "createdDate": 1650309021000,
      "totalPrice": 3470332,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_4",
        "type": "product",
        "value": 3470332
      }]
    }, {
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
    }],
    "message": {
      "products": [{
        "type": "event",
        "detailId": "1200420004",
        "title": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "detail": "6 Tickets For Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "date": "Saturday, 30 April 2022 (00:00:00)",
        "ticketClass": "",
        "customers": [{
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }],
        "airportTransfer": null,
        "dateTime": "2022-04-30 00:00:00"
      }]
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
        "items": [{
          "itemId": "1200420004",
          "productTitle": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
          "currencyCode": "IDR",
          "price": "3470332",
          "quantity": "6"
        }],
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
  };
  (0,external_k6_namespaceObject.group)('payment-inquiry', () => {
    const hp = paymentInquiry(paymentCore2_host, params, body);
    utils_assertStatus(hp, 200, true, 'paymentInquiry');
    utils_assertSuccess(hp, 'SUCCESS', true, 'paymentInquiry');
  });
};

const paymentCore2_bcaOauthToken1 = () => {
  const params = {
    headers: {
      'Authorization': 'Basic NjY0ODI2MTAtMTkzMi00MTNjLWI0ZTctMWQ1MmI0OTFmN2ZmOjVjZWYzNzBkLTAyZDgtNGNjMi04ZjUxLTE3OGI0ZGMxMzc4Yw=='
    },
    tags: {
      name: 'BCA-getToken'
    }
  };
  const body = {}; //group('BCA-getToken', () => {

  const res = paymentCore_bcaOauthToken(paymentCore2_host, params, body);
  utils_assertStatus(res, 200, true, 'bcaOauthToken'); // assertSuccess(res, 'SUCCESS', true, 'bcaOauthToken')
  //})

  return res;
};

const paymentCore2_bcaInquiry1 = (at, requestId, referenceId) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-inquiry'
    }
  };
  const body = {
    "CompanyCode": "78001",
    "CustomerNumber": referenceId,
    "RequestID": requestId,
    "ChannelType": "6014",
    "TransactionDate": "11/02/2022 18:23:05",
    "AdditionalData": ""
  }; //group('bca-inquiry', () => {

  const hp = paymentCore_bcaInquiry(paymentCore2_host, params, body);
  utils_assertStatus(hp, 200, true, 'bcaInquiry'); // assertSuccess(hp, 'SUCCESS', true, 'bcaInquiry')
  //})

  return hp;
};

const paymentCore2_bcaNotification1 = (at, requestId, referenceId, totalAmount) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-notification'
    }
  };
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
  };
  (0,external_k6_namespaceObject.group)('bca-notification', () => {
    const hp = paymentCore_bcaNotification(paymentCore2_host, params, body);
    utils_assertStatus(hp, 200, true, 'bcaNotification'); // assertSuccess(hp, 'SUCCESS', true, 'bcaNotification')
  });
};

const paymentCore2_discountCheckAvailability = (referenceId, orderHash, userName, channelId, requestId) => {
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
      name: 'discountCheckAvailability'
    }
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = checkAvailability(paymentCore2_host, params, body);
  assertStatus(hp, 200, true, 'discountCheckAvailability');
  assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailability'); // })
};

const paymentCore2_discountCashback1 = (referenceId, userName, channelId, requestId) => {
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
      name: 'discountCashback'
    }
  };
  const body = {}; // group('payment-landing-withmethod', () => {

  const hp = discountCashback(paymentCore2_host, params, body, referenceId);
  assertStatus(hp, 200, true, 'discountCashback');
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const paymentCore2_calculatePromoDiscount = (referenceId, userName, channelId, requestId) => {
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
      name: 'calculatePromoDiscount'
    }
  };
  const body = {
    "code": "PERFTEST",
    "orderDetails": [{
      "amount": 1312110.1,
      "discount": 100000,
      "orderAttribute": {
        "customerCurrency": "IDR",
        "orderType": "Event",
        "userLogin": "1"
      },
      "productType": "Event",
      "referenceId": "2088121689"
    }],
    "payment": {
      "binNumber": "string",
      "cardNumber": "string",
      "paymentId": 0
    },
    "referenceId": referenceId,
    "totalPrice": 200000,
    "usedPromoCodes": []
  }; // group('payment-landing-withmethod', () => {

  const hp = calculateDiscount(paymentCore2_host, params, body);
  assertStatus(hp, 200, true, 'calculatePromoDiscount');
  assertSuccess(hp, 'SUCCESS', true, 'calculatePromoDiscount'); // })
};

const paymentCore2_paymentCoreConfigFunc = (userName, channelId, requestId) => {
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
      name: 'paymentCoreConfig'
    }
  };
  group('paymentCoreConfig', () => {
    const hp = paymentCoreConfig(paymentCore2_host, params);
    assertStatus(hp, 200, true, 'paymentCoreConfig');
    assertSuccess(hp, 'SUCCESS', true, 'paymentCoreConfig');
  });
};

const paymentCore2_checkCancellableFunc = (referenceId, userName, channelId, requestId) => {
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
      name: 'PaymentCoreCheckCancellable'
    }
  };
  (0,external_k6_namespaceObject.group)('PaymentCoreCheckCancellable', () => {
    const hp = checkCancellable(paymentCore2_host, params, referenceId);
    utils_assertStatus(hp, 200, true, 'PaymentCoreCheckCancellable');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreCheckCancellable');
  });
};

const paymentCore2_bankBinFunc = (objectId, userName, channelId, requestId) => {
  //const bid=Math.floor(Math.random()*10);
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
      name: 'PaymentCoreBankBin'
    }
  };
  (0,external_k6_namespaceObject.group)('PaymentCoreBankBin', () => {
    const hp = bankBin(paymentCore2_host, params, objectId);
    utils_assertStatus(hp, 200, true, 'PaymentCoreBankBin'); //assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreBankBin')
  });
};

const paymentCore2_paymentInquiryPutFunc = (timeEpoch, referenceId, userName, channelId, requestId) => {
  //let id = 120073005+Math.floor(Math.random() * 10);
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
      name: 'PaymentCorePaymentInquiryPut'
    }
  };
  const body = {
    "paymentUnitDetails": [{
      "referenceDetailId": 1200920065,
      "productType": "EVENT",
      "orderName": "Konser Maroon 5 Kursi",
      "orderNameDetail": "Paket Lima Seating Otomatis Tanpa Kalender",
      "createdDate": timeEpoch,
      "totalPrice": 12000,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_1",
        "type": "product",
        "value": 12000
      }]
    }, {
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
    }],
    "secretKey": "9905a477c91b40cdabff6679815ff050"
  };
  group('PaymentCorePaymentInquiryPut', () => {
    const hp = paymentInquiryPut(paymentCore2_host, params, body, referenceId);
    assertStatus(hp, 200, true, 'PaymentCorePaymentInquiryPut');
    assertSuccess(hp, 'SUCCESS', true, 'PaymentCorePaymentInquiryPut');
  });
};

const paymentCore2_creditLimitFunc = (userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com'
    },
    tags: {
      name: 'PayLaterCreditLimit'
    }
  };
  (0,external_k6_namespaceObject.group)('PayLaterCreditLimit', () => {
    const hp = creditLimit(paymentCore2_host, params);
    utils_assertStatus(hp, 200, true, 'PayLaterCreditLimit');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PayLaterCreditLimit');
  });
};

const paymentCore2_transactionFunc = (referenceId, userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': userName
    },
    tags: {
      name: 'PayLaterTransaction'
    }
  };
  group('PayLaterTransaction', () => {
    const hp = transaction(paymentCore2_host, params, referenceId);
    assertStatus(hp, 200, true, 'PayLaterTransaction'); //assertSuccess(hp, 'SUCCESS', true, 'PayLaterTransaction')
  });
};

const paymentCore2_profileFunc = (userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com'
    },
    tags: {
      name: 'PayLaterProfile'
    }
  };
  group('PayLaterProfile', () => {
    const hp = profile(paymentCore2_host, params);
    assertStatus(hp, 200, true, 'PayLaterProfile');
    assertSuccess(hp, 'SUCCESS', true, 'PayLaterProfile');
  });
};

const paymentCore2_checkPaidStatusFunc = (requestId, username, channelId, referenceId) => {
  //let id = 120073005+Math.floor(Math.random() *10);
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-payment-callback/payment/checkPaidStatus'
    }
  };
  group('tix-payment-callback/payment/checkPaidStatus', () => {
    const hp = paymentCallcheckPaidStatus(paymentCore2_host, params, referenceId);
    assertStatus(hp, 200, true, 'tix-payment-callback/payment/checkPaidStatus');
    assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment/checkPaidStatus');
  });
};

const paymentCore2_paymentFunc = () => {
  const params = {
    headers: {
      Accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'tix-payment-callback/payment'
    }
  };
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
    "kredivoPaymentTypeList": [{
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
    }],
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
  };
  group('tix-payment-callback/payment', () => {
    const hp = paymentCallback(paymentCore2_host, params, body);
    assertStatus(hp, 200, true, 'tix-payment-callback/payment'); //assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment')
  });
};

const paymentCore2_creditCardcheckPaidStatusFunc = (channelId, requestId, username, referenceId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-credit-card/payment/checkPaidStatus'
    }
  };
  group('tix-credit-card/payment/checkPaidStatus', () => {
    const hp = creditCardcheckPaidStatus(paymentCore2_host, params, referenceId);
    assertStatus(hp, 200, true, 'tix-credit-card/payment/checkPaidStatus');
    assertSuccess(hp, 'SUCCESS', true, 'tix-credit-card/payment/checkPaidStatus');
  });
};

const paymentCore2_createPaymentListFunc = (channelId, username, requestId, referenceId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username,
      'Content-Type': 'application/json'
    },
    tags: {
      name: 'createpaymentList'
    }
  };
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
    "hotelPaymentType": null
  };
  group('createpaymentList', () => {
    const hp = createPaymentList(paymentCore2_host, params, body);
    assertStatus(hp, 200, true, 'createpaymentlist'); //assertSuccess(hp, 'SUCCESS', true, 'createpaymentList')
  });
};

const paymentCore2_payLaterRegisterFunc = (lang, userName, channelId, requestId) => {
  const params = {
    headers: {
      Accept: '*/*',
      'Accept-Language': 'en',
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': 'WEB',
      'X-Currency': 'IDR',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Username': 'username',
      'tixtoken': '56f3180e8fd6a0b11308d7132eeec9dd17e565f0'
    },
    tags: {
      name: 'pay-later/profile/register'
    }
  };
  const body = {
    "deviceId": "121212",
    "deviceModel": "iPhone Xs"
  };
  group('pay-later/profile/register', () => {
    const hp = payLaterRegister(paymentCore2_host, params, body);
    assertStatus(hp, 200, true, 'pay-later/profile/register');
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register');
  });
};

const paymentCore2_paymentFunc1 = () => {
  const params = {
    headers: {
      Accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'pay-later/profile/register'
    }
  };
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
    "kredivoPaymentTypeList": [{
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
    }],
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
  };
  group('pay-later/profile/register', () => {
    const hp = paymentCallback(paymentCore2_host, params, body);
    assertStatus(hp, 200, true, 'pay-later/profile/register');
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register');
  });
};
;// CONCATENATED MODULE: ./generator/payment/core/paymentCore3.js










const paymentCore3_host = 'https://lb-perf.tiket.com';
const paymentCore3_orderDataGlobal = parseCSV('orders', 'data/orders.csv');
var paymentCore3_userData = parseCSV('emails', 'data/email.csv');
var paymentCore3_objectIdData = parseCSV('objectIds', 'data/objectId.csv');
const paymentFlow3 = () => {
  const timeEpoch = Math.round(Date.now());
  var val = Math.floor(100000000 + Math.random() * 900000000);
  var referenceId = '1' + val; //var referenceId=2003809728;
  //var orderHash=Math.random().toString(36).slice(2);

  var orderHash = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < 24; i++) {
    orderHash += characters.charAt(Math.floor(Math.random() * charactersLength));
  } //const orderHash="tct37lmxof98tybuhyjjl"
  // var row = Math.floor(Math.random() * orderDataGlobal.length)
  // const userName=orderDataGlobal[row][3];
  //const userName = 'testing31370tiket.com'


  var row1 = Math.floor(Math.random() * paymentCore3_userData.length);
  var userName = paymentCore3_userData[row1][0]; //console.log(userName)

  const discountCode = randomList(['PERFTEST']);
  var totalCustomerPrice = 2000000;
  const channelId = randomList(['ANDROID', 'IOS', 'WEB', 'DESKTOP']);
  const requestId = `perf1_${__VU}_${__ITER}_${(0,_1_0_0_index_js_namespaceObject.uuidv4)()}`;
  var row2 = Math.floor(Math.random() * paymentCore3_objectIdData.length);
  var objectId = paymentCore3_objectIdData[row2][0]; //createPaymentListFunc(channelId,userName,requestId,referenceId);

  paymentCore3_paymentsInquiry(referenceId, orderHash, userName, timeEpoch, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_checkversion(referenceId, orderHash, userName, channelId, requestId); //const paymentGroup1=paymentGroup(referenceId,orderHash,userName,channelId,requestId);

  const paymentGroupId = '60f52d1e0c83f60001ec5a75'; //const paymentMethod1=paymentMethod(referenceId,orderHash,paymentGroupId,userName,channelId,requestId);

  paymentCore3_paymentLandingwithMethod(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_paymentLandingwithMethod(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_paymentLandingwithMethod(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_paymentLandingwithMethod(referenceId, orderHash, userName, channelId, requestId);
  paymentCore3_paymentLandingwithMethod(referenceId, orderHash, userName, channelId, requestId); // const promoSuggestion1=promoSuggestion(referenceId,orderHash,userName,channelId,requestId);

  const totalPrice = 200000; //promoApply(referenceId,orderHash,totalPrice,userName,channelId);
  //applyDiscount1(referenceId,orderHash)

  paymentCore3_DiscountApplyV2(referenceId, orderHash, totalPrice, userName, channelId, requestId); //const orderDetailId=applyDiscount.json().data.orderDetailId;

  const orderDetailId = 21473186; //const UnapplyDiscount=promoUnApply(referenceId, orderHash, totalCustomerPrice, orderDetailId, userName,channelId);

  paymentCore3_paymentSubmit(referenceId, orderHash, userName, channelId, requestId); // const paymentConfirm1=paymentConfirm(referenceId,orderHash,userName,channelId,requestId);
  //discountCheckAvailability(referenceId,orderHash,userName,channelId,requestId)
  //checkAvailabilityDiscount(referenceId,orderHash)
  // const discountCashback2=discountCashback1(referenceId,userName,channelId,requestId)
  //const calculatePromoDiscount1=calculatePromoDiscount(referenceId,userName,channelId,requestId)

  paymentCore3_DiscountCheckAvailabilityV2(referenceId, orderHash, userName, channelId, requestId);
  const bcaOauthToken = paymentCore3_bcaOauthToken1();
  const accessToken = bcaOauthToken.json().access_token;
  const requestId1 = "7800111001328101100134752";
  const bcaInquiry = paymentCore3_bcaInquiry1(accessToken, requestId, referenceId);
  const totalAmount = bcaInquiry.json().TotalAmount;
  const bcaNotification = paymentCore3_bcaNotification1(accessToken, requestId, referenceId, totalAmount); //paymentCoreConfigFunc(userName,channelId,requestId);

  paymentCore3_checkCancellableFunc(referenceId, userName, channelId, requestId);
  paymentCore3_checkCancellableFunc(referenceId, userName, channelId, requestId);
  paymentCore3_bankBinFunc(objectId, userName, channelId, requestId); // paymentInquiryPutFunc(timeEpoch,referenceId,userName,channelId,requestId);

  const lang = randomList(['en', 'id']);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang);
  paymentCore3_creditLimitFunc(userName, channelId, requestId, lang); //  transactionFunc(referenceId,userName,channelId,requestId,lang);
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
};

const paymentCore3_PromoSuggestionV2 = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = promoSuggestionV2(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'promoSuggestionV2');
  assertSuccess(hp, 'SUCCESS', true, 'promoSuggestionV2'); // })
};

const paymentCore3_DiscountApplyV2 = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST",
    "currency": "IDR",
    "paymentType": "VA_BCA",
    "productType": "EVENT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountApplyV2(paymentCore3_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountApplyV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountApplyV2'); // })
};

const paymentCore3_DiscountUnAplyV2 = (referenceId, orderHash, totalCustomerPrice, requestId, userName, channelId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountUnAplyV2(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'discountUnAplyV2');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnAplyV2'); // })
};

const paymentCore3_DiscountCheckAvailabilityV2 = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    "orderId": referenceId,
    "orderHash": orderHash,
    "discountCode": "PERFTEST",
    "currency": "IDR",
    "paymentType": "VA_BCA",
    "productType": "EVENT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountCheckAvailabilityV2(paymentCore3_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountCheckAvailabilityV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailabilityV2'); // })
};

const paymentCore3_DiscountCashback = (referenceId, orderHash, userName, channelId, requestId) => {
  const promoCode = "PERFTEST";
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
  }; // group('payment-landing-withmethod', () => {

  const hp = discountCashback2(paymentCore3_host, params, referenceId, promoCode);
  assertStatus(hp, 200, true, 'discountCashback');
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const paymentCore3_promoSuggestion1 = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'promo-suggestion'
    }
  };
  const mutation = `mutation getPromoSuggestion($payload: String) {  getPromoSuggestion(payload: $payload) {    code    message    serverTime    data {      description      code      expiredDate      amount      position      source    }  }}`;
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
  };
  const variables = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'getPromoSuggestion'
  };
  group('promo-suggestion', () => {
    const hp = qglCall(paymentCore3_host, params, body);
    assertStatus(hp, 200, true, 'getPromoSuggestion');
    assertSuccessGQL(hp, 'SUCCESS', true, 'getPromoSuggestion');
  });
};

const paymentCore3_applyDiscount1 = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'apply-promo'
    }
  };
  const mutation = `mutation applyDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {  applyDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {    code    message    data {      discountCode      discountType      orderDetailId      totalDiscount    }  }}`;
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'applyDiscount'
  };
  const hp = qglCall(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'applyDiscount'); //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  //return hp.body
  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const paymentCore3_unApplyDiscount1 = (orderId, orderHash, orderDetailId) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'unapply-promo'
    }
  };
  const mutation = `mutation unapplyDiscount($payload: String) {  discountEngineUnapply(payload: $payload) {    code    message    data  }}`;
  const payload = {
    'orderId': orderId,
    'orderHash': orderHash,
    'productType': 'EVENT',
    'discountCode': "PERFTEST",
    'orderDetailId': orderDetailId,
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
  group('unapply-promo', () => {
    const hp = qglCall(paymentCore3_host, params, body);
    assertStatus(hp, 200, true, 'discountEngineUnapply');
    assertSuccessGQL(hp, 'SUCCESS', true, 'discountEngineUnapply');
  });
};

const paymentCore3_checkAvailabilityDiscount = (orderId, orderHash) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'checkAvailabilityDiscount'
    }
  };
  const mutation = `mutation checkAvailabilityDiscount($orderId: String, $orderHash: String, $discountCode: String, $productType: String, $totalPrice: Int, $currency: String, $paymentType: String, $cardNumber: String, $cardNumberToken: String, $isInstallment: String, $tenor: String) {
    checkAvailabilityDiscount(orderId: $orderId, orderHash: $orderHash, discountCode: $discountCode, productType: $productType, totalPrice: $totalPrice, currency: $currency, paymentType: $paymentType, cardNumber: $cardNumber, cardNumberToken: $cardNumberToken, isInstallment: $isInstallment, tenor: $tenor) {
      code
      message
      data
    }
  }`;
  const variables = {
    "currency": "IDR",
    "discountCode": "PERFTEST",
    "orderHash": orderHash,
    "orderId": orderId,
    "paymentType": "BCA_TRANSFER",
    "productType": "EVENT",
    "totalPrice": 200000
  };
  const body = {
    query: mutation,
    variables: variables,
    operationName: 'checkAvailabilityDiscount'
  };
  const hp = qglCall(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'checkAvailabilityDiscount');
  assertSuccessGQL(hp, 'SUCCESS', true, 'checkAvailabilityDiscount'); //return hp.body
  // group('apply-promo', () => {
  // assertStatus(hp, 200, true, 'applyDiscount')
  // //assertSuccessGQL(hp, 'SUCCESS', true, 'applyDiscount')
  // return hp.body
  //  })
};

const paymentCore3_getPromoCashbackInfo = orderId => {
  const params = {
    headers: {
      accept: '*/*',
      authority: "gql-gatotkaca.tiket.com",
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
      'origin': "https://payment-gatotkaca.tiket.com",
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': "https://payment-gatotkaca.tiket.com/",
      'accept-language': 'en-US,en;q=0.9',
      'token': 'eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'accountid': '0',
      'app-source': 'tix-payment-fe|1.1.0',
      'authorization': 'Bearer eyJraWQiOiJEUkZDd1dKOWFDTENtTEhJSVFoTFlKNlNEbmUzcDZmRyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MmE4MmRmMWZkOTY4ZTY1YjIwYjk2NDEiLCJuYmYiOjE2NTUxODg5NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTY1NTc5Mzc3N30.KAh9w9YN4WxVGo3FeHmWzQnBDt-9f3c0MuJ5ZlDhmdYUJBaVF6FtSURYdg67BdKQ',
      'channelid': 'ANDROID',
      'content-type': 'application/json',
      'deviceid': 'a3d2afa066efab21c24f8dad8606425a',
      'lang': 'id',
      'newsession': 'true',
      'platform': 'mweb',
      'tiketsessionid': '3b94c09a-01f5-4e2a-a46f-cae5e6b8b752',
      'x-account-id': '0'
    },
    tags: {
      name: 'getPromoCashbackInfo'
    }
  };
  const mutation = `query getPromoCashbackInfo($payload: String) {
    getCashbackInfo(payload: $payload) {
      code
      message
      data {
        promoCode
        cashbackAmount
      }
    }
  }`;
  const payload = {
    'orderId': orderId,
    'promoCode': "PERFTEST"
  };
  const variable = {
    "payload": JSON.stringify(payload)
  };
  const body = {
    query: mutation,
    variables: variable,
    operationName: 'getPromoCashbackInfo'
  };
  group('getPromoCashbackInfo', () => {
    const hp = qglCall(paymentCore3_host, params, body);
    assertStatus(hp, 200, true, 'getCashbackInfo');
    assertSuccessGQL(hp, 'SUCCESS', true, 'getCashbackInfo');
  });
};

const paymentCore3_checkversion = (referenceId, orderHash, userName, channelId, requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS']),
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'check-version'
    }
  };
  const queryParams = new url_1_0_0_index_js_namespaceObject.URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  (0,external_k6_namespaceObject.group)('check-version', () => {
    const res = paymentCore_checkVersion(paymentCore3_host, params, queryParams);
    utils_assertStatus(res, 200, true, 'checkVersion');
    utils_assertSuccess(res, 'SUCCESS', true, 'checkVersion');
  });
};

const paymentCore3_paymentGroup = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore3_orderDataGlobal.length);
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
  };
  const queryParams = new URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  group('payment-group', () => {
    const res = paymentV4paymentGroup(paymentCore3_host, params, queryParams);
    assertStatus(res, 200, true, 'paymentV4paymentGroup');
    assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentGroup');
  });
};

const paymentCore3_paymentMethod = (referenceId, orderHash, paymentGroupId, userName, channelId, requestId) => {
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
  };
  const queryParams = new URLSearchParams([['orderHash', orderHash], ['paymentGroupId', paymentGroupId], ['referenceId', referenceId]]);
  group('payment-Method', () => {
    const res = paymentV4paymentMethod(paymentCore3_host, params, queryParams);
    assertStatus(res, 200, true, 'paymentV4paymentMethod');
    assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentMethod');
  });
};

const paymentCore3_paymentLandingwithMethod = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash,
    paymentMethod: 'VA_BCA'
  }; // group('payment-landing-withmethod', () => {

  const hp = paymentCore_paymentV4Landing(paymentCore3_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentV4Landing');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentV4Landing'); // })
};

const paymentCore3_promoSuggestion = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore3_orderDataGlobal.length);
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
  };
  const queryParams = new URLSearchParams([['currency', 'IDR'], ['orderId', referenceId], ['totalAmount', 200000], ['productType', 'EVENT'], ['size', 10], ['page', 0]]);
  group('promo-suggestion', () => {
    const res = discountPromoSuggestion(paymentCore3_host, params, queryParams);
    assertStatus(res, 200, true, 'discountPromoSuggestion');
    assertSuccess(res, 'SUCCESS', true, 'discountPromoSuggestion');
  });
}; // export const applyUnapplyandSubmit = () => {
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


const paymentCore3_promoApply = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-apply', () => {

  const hp = discountApply(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'discountApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountApply'); // })

  return hp;
};

const paymentCore3_promoUnApply = (referenceId, orderHash, totalCustomerPrice, orderDetailId, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-unapply', () => {

  const hp = discountUnApply(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'discountUnApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnApply'); // })
};

const paymentCore3_paymentSubmit = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentCore_paymentDetailVA_BCA(paymentCore3_host, params, body);
  utils_assertStatus(hp, 200, true, 'paymentDetailVA_BCA');
  utils_assertSuccess(hp, 'SUCCESS', true, 'paymentDetailVA_BCA'); // })
};

const paymentCore3_paymentConfirm = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    debitOnline: false,
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentConfirmVA_BCA(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'paymentConfirmVA_BCA');
  assertSuccess(hp, 'SUCCESS', true, 'paymentConfirmVA_BCA'); // })
};

const paymentCore3_paymentsInquiry = (referenceId, orderHash, userName, timeEpoch, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore3_orderDataGlobal.length);
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
  };
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
    "paymentUnitDetails": [{
      "referenceDetailId": 1200420004,
      "productType": "EVENT",
      "orderName": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "orderNameDetail": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "createdDate": 1650309021000,
      "totalPrice": 3470332,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_4",
        "type": "product",
        "value": 3470332
      }]
    }, {
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
    }],
    "message": {
      "products": [{
        "type": "event",
        "detailId": "1200420004",
        "title": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "detail": "6 Tickets For Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "date": "Saturday, 30 April 2022 (00:00:00)",
        "ticketClass": "",
        "customers": [{
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }],
        "airportTransfer": null,
        "dateTime": "2022-04-30 00:00:00"
      }]
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
        "items": [{
          "itemId": "1200420004",
          "productTitle": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
          "currencyCode": "IDR",
          "price": "3470332",
          "quantity": "6"
        }],
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
  };
  (0,external_k6_namespaceObject.group)('payment-inquiry', () => {
    const hp = paymentInquiry(paymentCore3_host, params, body);
    utils_assertStatus(hp, 200, true, 'paymentInquiry');
    utils_assertSuccess(hp, 'SUCCESS', true, 'paymentInquiry');
  });
};

const paymentCore3_bcaOauthToken1 = () => {
  const params = {
    headers: {
      'Authorization': 'Basic NjY0ODI2MTAtMTkzMi00MTNjLWI0ZTctMWQ1MmI0OTFmN2ZmOjVjZWYzNzBkLTAyZDgtNGNjMi04ZjUxLTE3OGI0ZGMxMzc4Yw=='
    },
    tags: {
      name: 'BCA-getToken'
    }
  };
  const body = {}; //group('BCA-getToken', () => {

  const res = paymentCore_bcaOauthToken(paymentCore3_host, params, body);
  utils_assertStatus(res, 200, true, 'bcaOauthToken'); // assertSuccess(res, 'SUCCESS', true, 'bcaOauthToken')
  //})

  return res;
};

const paymentCore3_bcaInquiry1 = (at, requestId, referenceId) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-inquiry'
    }
  };
  const body = {
    "CompanyCode": "78001",
    "CustomerNumber": referenceId,
    "RequestID": requestId,
    "ChannelType": "6014",
    "TransactionDate": "11/02/2022 18:23:05",
    "AdditionalData": ""
  }; //group('bca-inquiry', () => {

  const hp = paymentCore_bcaInquiry(paymentCore3_host, params, body);
  utils_assertStatus(hp, 200, true, 'bcaInquiry'); // assertSuccess(hp, 'SUCCESS', true, 'bcaInquiry')
  //})

  return hp;
};

const paymentCore3_bcaNotification1 = (at, requestId, referenceId, totalAmount) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-notification'
    }
  };
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
  };
  (0,external_k6_namespaceObject.group)('bca-notification', () => {
    const hp = paymentCore_bcaNotification(paymentCore3_host, params, body);
    utils_assertStatus(hp, 200, true, 'bcaNotification'); // assertSuccess(hp, 'SUCCESS', true, 'bcaNotification')
  });
};

const paymentCore3_discountCheckAvailability = (referenceId, orderHash, userName, channelId, requestId) => {
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
      name: 'discountCheckAvailability'
    }
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = checkAvailability(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'discountCheckAvailability');
  assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailability'); // })
};

const paymentCore3_discountCashback1 = (referenceId, userName, channelId, requestId) => {
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
      name: 'discountCashback'
    }
  };
  const body = {}; // group('payment-landing-withmethod', () => {

  const hp = discountCashback(paymentCore3_host, params, body, referenceId);
  assertStatus(hp, 200, true, 'discountCashback');
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const paymentCore3_calculatePromoDiscount = (referenceId, userName, channelId, requestId) => {
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
      name: 'calculatePromoDiscount'
    }
  };
  const body = {
    "code": "PERFTEST",
    "orderDetails": [{
      "amount": 1312110.1,
      "discount": 100000,
      "orderAttribute": {
        "customerCurrency": "IDR",
        "orderType": "Event",
        "userLogin": "1"
      },
      "productType": "Event",
      "referenceId": "2088121689"
    }],
    "payment": {
      "binNumber": "string",
      "cardNumber": "string",
      "paymentId": 0
    },
    "referenceId": referenceId,
    "totalPrice": 200000,
    "usedPromoCodes": []
  }; // group('payment-landing-withmethod', () => {

  const hp = calculateDiscount(paymentCore3_host, params, body);
  assertStatus(hp, 200, true, 'calculatePromoDiscount');
  assertSuccess(hp, 'SUCCESS', true, 'calculatePromoDiscount'); // })
};

const paymentCore3_paymentCoreConfigFunc = (userName, channelId, requestId) => {
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
      name: 'paymentCoreConfig'
    }
  };
  group('paymentCoreConfig', () => {
    const hp = paymentCoreConfig(paymentCore3_host, params);
    assertStatus(hp, 200, true, 'paymentCoreConfig');
    assertSuccess(hp, 'SUCCESS', true, 'paymentCoreConfig');
  });
};

const paymentCore3_checkCancellableFunc = (referenceId, userName, channelId, requestId) => {
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
      name: 'PaymentCoreCheckCancellable'
    }
  };
  (0,external_k6_namespaceObject.group)('PaymentCoreCheckCancellable', () => {
    const hp = checkCancellable(paymentCore3_host, params, referenceId);
    utils_assertStatus(hp, 200, true, 'PaymentCoreCheckCancellable');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreCheckCancellable');
  });
};

const paymentCore3_bankBinFunc = (objectId, userName, channelId, requestId) => {
  //const bid=Math.floor(Math.random()*10);
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
      name: 'PaymentCoreBankBin'
    }
  };
  (0,external_k6_namespaceObject.group)('PaymentCoreBankBin', () => {
    const hp = bankBin(paymentCore3_host, params, objectId);
    utils_assertStatus(hp, 200, true, 'PaymentCoreBankBin');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PaymentCoreBankBin');
  });
};

const paymentCore3_paymentInquiryPutFunc = (timeEpoch, referenceId, userName, channelId, requestId) => {
  //let id = 120073005+Math.floor(Math.random() * 10);
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
      name: 'PaymentCorePaymentInquiryPut'
    }
  };
  const body = {
    "paymentUnitDetails": [{
      "referenceDetailId": 1200920065,
      "productType": "EVENT",
      "orderName": "Konser Maroon 5 Kursi",
      "orderNameDetail": "Paket Lima Seating Otomatis Tanpa Kalender",
      "createdDate": timeEpoch,
      "totalPrice": 12000,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_1",
        "type": "product",
        "value": 12000
      }]
    }, {
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
    }],
    "secretKey": "9905a477c91b40cdabff6679815ff050"
  };
  group('PaymentCorePaymentInquiryPut', () => {
    const hp = paymentInquiryPut(paymentCore3_host, params, body, referenceId);
    assertStatus(hp, 200, true, 'PaymentCorePaymentInquiryPut');
    assertSuccess(hp, 'SUCCESS', true, 'PaymentCorePaymentInquiryPut');
  });
};

const paymentCore3_creditLimitFunc = (userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com'
    },
    tags: {
      name: 'PayLaterCreditLimit'
    }
  };
  (0,external_k6_namespaceObject.group)('PayLaterCreditLimit', () => {
    const hp = creditLimit(paymentCore3_host, params);
    utils_assertStatus(hp, 200, true, 'PayLaterCreditLimit');
    utils_assertSuccess(hp, 'SUCCESS', true, 'PayLaterCreditLimit');
  });
};

const paymentCore3_transactionFunc = (referenceId, userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': userName
    },
    tags: {
      name: 'PayLaterTransaction'
    }
  };
  group('PayLaterTransaction', () => {
    const hp = transaction(paymentCore3_host, params, referenceId);
    assertStatus(hp, 200, true, 'PayLaterTransaction'); //assertSuccess(hp, 'SUCCESS', true, 'PayLaterTransaction')
  });
};

const paymentCore3_profileFunc = (userName, channelId, requestId, lang) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channelId,
      'X-Currency': 'IDR',
      'X-Identity': 'TIKETCOM',
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Username': 'rizky.hetari@tiket.com'
    },
    tags: {
      name: 'PayLaterProfile'
    }
  };
  group('PayLaterProfile', () => {
    const hp = profile(paymentCore3_host, params);
    assertStatus(hp, 200, true, 'PayLaterProfile');
    assertSuccess(hp, 'SUCCESS', true, 'PayLaterProfile');
  });
};

const paymentCore3_checkPaidStatusFunc = (requestId, username, channelId, referenceId) => {
  //let id = 120073005+Math.floor(Math.random() *10);
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-payment-callback/payment/checkPaidStatus'
    }
  };
  group('tix-payment-callback/payment/checkPaidStatus', () => {
    const hp = paymentCallcheckPaidStatus(paymentCore3_host, params, referenceId);
    assertStatus(hp, 200, true, 'tix-payment-callback/payment/checkPaidStatus');
    assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment/checkPaidStatus');
  });
};

const paymentCore3_paymentFunc = () => {
  const params = {
    headers: {
      Accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'tix-payment-callback/payment'
    }
  };
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
    "kredivoPaymentTypeList": [{
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
    }],
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
  };
  group('tix-payment-callback/payment', () => {
    const hp = paymentCallback(paymentCore3_host, params, body);
    assertStatus(hp, 200, true, 'tix-payment-callback/payment'); //assertSuccess(hp, 'SUCCESS', true, 'tix-payment-callback/payment')
  });
};

const paymentCore3_creditCardcheckPaidStatusFunc = (channelId, requestId, username, referenceId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username
    },
    tags: {
      name: 'tix-credit-card/payment/checkPaidStatus'
    }
  };
  group('tix-credit-card/payment/checkPaidStatus', () => {
    const hp = creditCardcheckPaidStatus(paymentCore3_host, params, referenceId);
    assertStatus(hp, 200, true, 'tix-credit-card/payment/checkPaidStatus');
    assertSuccess(hp, 'SUCCESS', true, 'tix-credit-card/payment/checkPaidStatus');
  });
};

const paymentCore3_createPaymentListFunc = (channelId, username, requestId, referenceId) => {
  const params = {
    headers: {
      accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'username': username,
      'Content-Type': 'application/json'
    },
    tags: {
      name: 'createpaymentList'
    }
  };
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
    "hotelPaymentType": null
  };
  group('createpaymentList', () => {
    const hp = createPaymentList(paymentCore3_host, params, body);
    assertStatus(hp, 200, true, 'createpaymentlist'); //assertSuccess(hp, 'SUCCESS', true, 'createpaymentList')
  });
};

const paymentCore3_payLaterRegisterFunc = (lang, userName, channelId, requestId) => {
  const params = {
    headers: {
      Accept: '*/*',
      'Accept-Language': 'en',
      'X-Account-Id': 'TIKETCOM',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': 'WEB',
      'X-Currency': 'IDR',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Username': 'username',
      'tixtoken': '56f3180e8fd6a0b11308d7132eeec9dd17e565f0'
    },
    tags: {
      name: 'pay-later/profile/register'
    }
  };
  const body = {
    "deviceId": "121212",
    "deviceModel": "iPhone Xs"
  };
  group('pay-later/profile/register', () => {
    const hp = payLaterRegister(paymentCore3_host, params, body);
    assertStatus(hp, 200, true, 'pay-later/profile/register');
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register');
  });
};

const paymentCore3_paymentFunc1 = () => {
  const params = {
    headers: {
      Accept: '*/*',
      'storeId': 'TIKETCOM',
      'channelId': 'WEB',
      'requestId': '23123123',
      'serviceId': 'gateway',
      'username': 'username'
    },
    tags: {
      name: 'pay-later/profile/register'
    }
  };
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
    "kredivoPaymentTypeList": [{
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
    }],
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
  };
  group('pay-later/profile/register', () => {
    const hp = paymentCallback(paymentCore3_host, params, body);
    assertStatus(hp, 200, true, 'pay-later/profile/register');
    assertSuccess(hp, 'SUCCESS', true, 'pay-later/profile/register');
  });
};
;// CONCATENATED MODULE: ./generator/payment/core/paymentCore4.js








const paymentCore4_host = 'https://lb-perf.tiket.com';
const paymentCore4_orderDataGlobal = parseCSV('orders', 'data/orders.csv');
var paymentCore4_userData = parseCSV('emails', 'data/email.csv');
const paymentFlow4 = () => {
  const timeEpoch = Math.round(Date.now());
  var val = Math.floor(100000000 + Math.random() * 900000000);
  var referenceId = '1' + val; //var referenceId=2003809728;
  //var orderHash=Math.random().toString(36).slice(2);

  var orderHash = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < 24; i++) {
    orderHash += characters.charAt(Math.floor(Math.random() * charactersLength));
  } //const orderHash="tct37lmxof98tybuhyjjl"
  // var row = Math.floor(Math.random() * orderDataGlobal.length)
  // const userName=orderDataGlobal[row][3];
  //const userName = 'testing31370tiket.com'


  var row1 = Math.floor(Math.random() * paymentCore4_userData.length);
  var userName = paymentCore4_userData[row1][0]; //console.log(userName)

  const discountCode = randomList(['PERFTEST']);
  var totalCustomerPrice = 2000000;
  const channelId = randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS', 'IOS']);
  const requestId = `perf1_${__VU}_${__ITER}_${(0,_1_0_0_index_js_namespaceObject.uuidv4)()}`;
  paymentCore4_paymentsInquiry(referenceId, orderHash, userName, timeEpoch, channelId, requestId); // const paymentVersion=checkversion(referenceId,orderHash,userName,channelId,requestId);
  // const paymentGroup1=paymentGroup(referenceId,orderHash,userName,channelId,requestId);
  // const paymentGroupId='60f52d1e0c83f60001ec5a75'
  // const paymentMethod1=paymentMethod(referenceId,orderHash,paymentGroupId,userName,channelId,requestId);
  // const paymentLandingWithPaymentMethod=paymentLandingwithMethod(referenceId,orderHash,userName,channelId,requestId);
  // const promoSuggestion1=promoSuggestion(referenceId,orderHash,userName,channelId,requestId);

  const totalPrice = 200000;
  paymentCore4_promoApply(referenceId, orderHash, totalPrice, userName, channelId); //const orderDetailId=applyDiscount.json().data.orderDetailId;
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
};

const paymentCore4_checkversion = (referenceId, orderHash, userName, channelId, requestId) => {
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'ANDROID', 'IOS']),
      'channelId': channelId,
      'requestId': requestId,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'check-version'
    }
  };
  const queryParams = new URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  group('check-version', () => {
    const res = checkVersion(paymentCore4_host, params, queryParams);
    assertStatus(res, 200, true, 'checkVersion');
    assertSuccess(res, 'SUCCESS', true, 'checkVersion');
  });
};

const paymentCore4_paymentGroup = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore4_orderDataGlobal.length);
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
  };
  const queryParams = new URLSearchParams([['orderHash', orderHash], ['referenceId', referenceId]]);
  group('payment-group', () => {
    const res = paymentV4paymentGroup(paymentCore4_host, params, queryParams);
    assertStatus(res, 200, true, 'paymentV4paymentGroup');
    assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentGroup');
  });
};

const paymentCore4_paymentMethod = (referenceId, orderHash, paymentGroupId, userName, channelId, requestId) => {
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
  };
  const queryParams = new URLSearchParams([['orderHash', orderHash], ['paymentGroupId', paymentGroupId], ['referenceId', referenceId]]);
  group('payment-Method', () => {
    const res = paymentV4paymentMethod(paymentCore4_host, params, queryParams);
    assertStatus(res, 200, true, 'paymentV4paymentMethod');
    assertSuccess(res, 'SUCCESS', true, 'paymentV4paymentMethod');
  });
};

const paymentCore4_paymentLandingwithMethod = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash,
    paymentMethod: 'VA_BCA'
  }; // group('payment-landing-withmethod', () => {

  const hp = paymentV4Landing(paymentCore4_host, params, body);
  assertStatus(hp, 200, true, 'paymentV4Landing');
  assertSuccess(hp, 'SUCCESS', true, 'paymentV4Landing'); // })
};

const paymentCore4_promoSuggestion = (referenceId, orderHash, userName, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore4_orderDataGlobal.length);
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
  };
  const queryParams = new URLSearchParams([['currency', 'IDR'], ['orderId', referenceId], ['totalAmount', 200000], ['productType', 'EVENT'], ['size', 10], ['page', 0]]);
  group('promo-suggestion', () => {
    const res = discountPromoSuggestion(paymentCore4_host, params, queryParams);
    assertStatus(res, 200, true, 'discountPromoSuggestion');
    assertSuccess(res, 'SUCCESS', true, 'discountPromoSuggestion');
  });
}; // export const applyUnapplyandSubmit = () => {
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


const paymentCore4_promoApply = (referenceId, orderHash, totalPrice, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-apply', () => {

  const hp = paymentCore_discountApply(paymentCore4_host, params, body);
  utils_assertStatus(hp, 200, true, 'discountApply');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountApply'); // })

  return hp;
};

const paymentCore4_promoUnApply = (referenceId, orderHash, totalCustomerPrice, orderDetailId, userName, channelId, requestId) => {
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
  };
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
  }; // group('discount-unapply', () => {

  const hp = discountUnApply(paymentCore4_host, params, body);
  assertStatus(hp, 200, true, 'discountUnApply');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnApply'); // })
};

const paymentCore4_paymentSubmit = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentDetailVA_BCA(paymentCore4_host, params, body);
  assertStatus(hp, 200, true, 'paymentDetailVA_BCA');
  assertSuccess(hp, 'SUCCESS', true, 'paymentDetailVA_BCA'); // })
};

const paymentCore4_paymentConfirm = (referenceId, orderHash, userName, channelId, requestId) => {
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
  };
  const body = {
    debitOnline: false,
    referenceId: referenceId,
    orderHash: orderHash
  }; // group('payment-sumbit', () => {

  const hp = paymentConfirmVA_BCA(paymentCore4_host, params, body);
  assertStatus(hp, 200, true, 'paymentConfirmVA_BCA');
  assertSuccess(hp, 'SUCCESS', true, 'paymentConfirmVA_BCA'); // })
};

const paymentCore4_paymentsInquiry = (referenceId, orderHash, userName, timeEpoch, channelId, requestId) => {
  var row = Math.floor(Math.random() * paymentCore4_orderDataGlobal.length);
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
  };
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
    "paymentUnitDetails": [{
      "referenceDetailId": 1200420004,
      "productType": "EVENT",
      "orderName": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "orderNameDetail": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
      "createdDate": 1650309021000,
      "totalPrice": 3470332,
      "cashback": 0,
      "cashbackTIX": 0,
      "currency": "IDR",
      "breakdownPrice": [{
        "key": "event_qty_4",
        "type": "product",
        "value": 3470332
      }]
    }, {
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
    }],
    "message": {
      "products": [{
        "type": "event",
        "detailId": "1200420004",
        "title": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "detail": "6 Tickets For Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
        "date": "Saturday, 30 April 2022 (00:00:00)",
        "ticketClass": "",
        "customers": [{
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }, {
          "name": "",
          "type": null
        }],
        "airportTransfer": null,
        "dateTime": "2022-04-30 00:00:00"
      }]
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
        "items": [{
          "itemId": "1200420004",
          "productTitle": "Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath Luxury SPA Relax therapy in a hot sauna with high-quality wooden bath",
          "currencyCode": "IDR",
          "price": "3470332",
          "quantity": "6"
        }],
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
  };
  (0,external_k6_namespaceObject.group)('payment-inquiry', () => {
    const hp = paymentInquiry(paymentCore4_host, params, body);
    utils_assertStatus(hp, 200, true, 'paymentInquiry');
    utils_assertSuccess(hp, 'SUCCESS', true, 'paymentInquiry');
  });
};

const paymentCore4_bcaOauthToken1 = () => {
  const params = {
    headers: {
      'Authorization': 'Basic NjY0ODI2MTAtMTkzMi00MTNjLWI0ZTctMWQ1MmI0OTFmN2ZmOjVjZWYzNzBkLTAyZDgtNGNjMi04ZjUxLTE3OGI0ZGMxMzc4Yw=='
    },
    tags: {
      name: 'BCA-getToken'
    }
  };
  const body = {}; //group('BCA-getToken', () => {

  const res = bcaOauthToken(paymentCore4_host, params, body);
  assertStatus(res, 200, true, 'bcaOauthToken'); // assertSuccess(res, 'SUCCESS', true, 'bcaOauthToken')
  //})

  return res;
};

const paymentCore4_bcaInquiry1 = (at, requestId, referenceId) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-inquiry'
    }
  };
  const body = {
    "CompanyCode": "78001",
    "CustomerNumber": referenceId,
    "RequestID": requestId,
    "ChannelType": "6014",
    "TransactionDate": "11/02/2022 18:23:05",
    "AdditionalData": ""
  }; //group('bca-inquiry', () => {

  const hp = bcaInquiry(paymentCore4_host, params, body);
  assertStatus(hp, 200, true, 'bcaInquiry'); // assertSuccess(hp, 'SUCCESS', true, 'bcaInquiry')
  //})

  return hp;
};

const paymentCore4_bcaNotification1 = (at, requestId, referenceId, totalAmount) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'bca-notification'
    }
  };
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
  };
  group('bca-notification', () => {
    const hp = bcaNotification(paymentCore4_host, params, body);
    assertStatus(hp, 200, true, 'bcaNotification'); // assertSuccess(hp, 'SUCCESS', true, 'bcaNotification')
  });
};

const paymentCore4_discountCheckAvailability = (referenceId, orderHash, userName, channelId, requestId) => {
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
      name: 'discountCheckAvailability'
    }
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = checkAvailability(paymentCore4_host, params, body);
  assertStatus(hp, 200, true, 'discountCheckAvailability');
  assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailability'); // })
};

const paymentCore4_discountCashback1 = (referenceId, userName, channelId, requestId) => {
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
      name: 'discountCashback'
    }
  };
  const body = {}; // group('payment-landing-withmethod', () => {

  const hp = discountCashback(paymentCore4_host, params, body, referenceId);
  assertStatus(hp, 200, true, 'discountCashback');
  assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};

const paymentCore4_calculatePromoDiscount = (referenceId, userName, channelId, requestId) => {
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
      name: 'calculatePromoDiscount'
    }
  };
  const body = {
    "code": "PERFTEST",
    "orderDetails": [{
      "amount": 1312110.1,
      "discount": 100000,
      "orderAttribute": {
        "customerCurrency": "IDR",
        "orderType": "Event",
        "userLogin": "1"
      },
      "productType": "Event",
      "referenceId": "2088121689"
    }],
    "payment": {
      "binNumber": "string",
      "cardNumber": "string",
      "paymentId": 0
    },
    "referenceId": referenceId,
    "totalPrice": 200000,
    "usedPromoCodes": []
  }; // group('payment-landing-withmethod', () => {

  const hp = calculateDiscount(paymentCore4_host, params, body);
  assertStatus(hp, 200, true, 'calculatePromoDiscount');
  assertSuccess(hp, 'SUCCESS', true, 'calculatePromoDiscount'); // })
};
;// CONCATENATED MODULE: ./scenarios/payment/paymentcore1.js
 // export { createOrders } from '@generator/payment/core/paymentOrderId'
// export { checkversion, paymentLanding, paymentGroup, paymentMethod, promoSuggestion } from '@generator/payment/core/paymentCore.js'
// export { applyandSubmit, applyUnapplyandSubmit } from '@generator/payment/core/paymentCore.js'






const serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    //  paymentFlow: { targetRate: distribute(serverCount, 1700), dist: 1 },
    // paymentFlow1: { targetRate: distribute(serverCount, 1700), dist: 1 },
    // paymentFlow2: { targetRate: distribute(serverCount, 1900), dist: 1 },
    paymentFlow3: {
      targetRate: distribute(serverCount, 1000),
      dist: 1
    } //paymentFlow4: { targetRate: distribute(serverCount, 2000), dist: 1 },
    // checkversion: { targetRate: distribute(serverCount, 1300), dist: 1 },
    // paymentLanding: { targetRate: distribute(serverCount, 100), dist: 1 },
    // paymentGroup: { targetRate: distribute(serverCount, 130), dist: 1 },
    // paymentMethod: { targetRate: distribute(serverCount, 120), dist: 1 },
    // promoSuggestion: { targetRate: distribute(serverCount, 320), dist: 1 },
    // applyUnapplyandSubmit: { targetRate: distribute(serverCount, 1350), dist: 1 },   //This includes creating order, payment with and w/o method, apply, unapply and payment-submit calls

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
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate) },            //8 minutes
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.1)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, //17 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2) },        //31 minutes
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, //17 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.7)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.9)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3) },        //31 minutes
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.1)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.2) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.3)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.4) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.5)
      }, //17 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.6) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.7)
      }, {
        duration: '50m',
        target: Math.round(config.groupServices[name].targetRate * 3.7)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 4.1) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 4.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 4.5) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 4.5) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 4.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 4.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate) },            //8 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 5.3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 5.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.5) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.5) },      //17 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 5.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 5.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 5.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 5.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2) },        //31 minutes
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 6.1) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 6.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 6.5) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 6.5) },      //17 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 6.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 6.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3) },        //31 minutes
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.1) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 7.3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 7.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.5) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.5) },      //17 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 7.7) },
      // { duration: '100m', target: Math.round(config.groupServices[name].targetRate * 7.7) },
      {
        duration: '3m',
        target: 0
      }];
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