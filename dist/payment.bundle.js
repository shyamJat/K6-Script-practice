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
  "default": () => (/* binding */ paymentListVA)
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
  return http_default().post(`${__ENV.GQL_HOST}?profile=${name}`, JSON.stringify(body), params);
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
  const data = new SharedArray(label, () => {
    let csv;
    Papa.parse(open(filePath), {
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
  check(res, {
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
;// CONCATENATED MODULE: ./apis/payment/http/discountEngineGQL.js

const gqlApplyDiscountEngine = (requestData, params) => {
  const body = [{
    "query": "mutation applyDE($payload: String) {\n  discountEngineApply (payload:$payload) {\n    code\n    message\n    data {\n      discountCode\n      discountType\n      orderDetailId\n      totalDiscount\n    }\n  }\n}",
    "variables": {
      "payload": `{\
        \"orderId\":\"${requestData.orderID}\",\
        \"orderHash\":\"${requestData.orderHash}\",\
        \"discountCode\":\"PERFTEST\",\
        \"productType\":\"${requestData.orderType}\",\
        \"totalPrice\":${requestData.totalAmount},\
        \"currency\":\"IDR\",\
        \"paymentType\":\"${requestData.paymentType}\"
      \}`
    }
  }];
  return gqlPost("applyDE", body, params);
};
const gqlUnapplyDiscountEngine = (requestData, params) => {
  const body = [{
    "query": "mutation unapplyDE($payload: String) {\
              \n  discountEngineUnapply(payload: $payload) {\
              \n    code\n    message\n    data \n\
            } \n}",
    "variables": {
      "payload": `{\
          \"orderId\":\"${requestData.orderId}\",\
          \"orderHash\":\"${requestData.orderHash}\",\
          \"discountCode\":\"PERFTEST\",\
          \"productType\":\"${requestData.orderType}\",\
          \"totalPrice\":${requestData.totalAmount},\
          \"currency\":\"IDR\",\
          \"orderDetailId\":\"${requestData.orderDetailID}\",\
          \"paymentType\":\"${requestData.paymentType}\"\
      \}`
    }
  }];
  return gqlPost("unapplyDE", body, params);
};
;// CONCATENATED MODULE: ./apis/payment/http/paymentDetailGQL.js
/* global __ENV */

const gqlPaymentDetailQuery = (requestData, params) => {
  const body = [{
    "operationName": "paymentDetailQuery",
    "variables": {
      "referenceId": requestData.orderID,
      "orderHash": requestData.orderHash,
      "paymentKey": requestData.paymentKey
    },
    "query": "query paymentDetailQuery($referenceId: Int!, $orderHash: String!, $paymentKey: String!, $cardNumber: String) {\n  paymentDetail(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey, cardNumber: $cardNumber) {\n    data {\n      creditCardTokenization {\n        token {\n          cardHolderExpiredMonth\n          cardHolderExpiredYear\n          cardHolderName\n          cardHolderNumber\n          cardHolderType\n          coBranding\n          paymentToken\n          __typename\n        }\n        __typename\n      }\n      installmentDetails {\n        currency\n        grandTotal\n        installmentMonth\n        payMonthly\n        text\n        charge\n        id\n        enable\n        note\n        __typename\n      }\n      paymentDetailImages\n      paymentExpired\n      paymentMessage {\n        idID\n        enUS\n        __typename\n      }\n      tokenizedKredivo\n      recentKlikBCAId\n      sidebarPayment {\n        subTotal\n        grandTotal\n        convertedCurrency\n        convertedAmount\n        serviceCharge\n        uniqueCode\n        cashback\n        balanceAmount\n        cashbackTIX\n        orderDetail {\n          currency\n          orderName\n          orderNameDetail\n          referenceDetailId\n          productType\n          tixPoint\n          totalPrice\n          breakdownPrice {\n            key\n            value\n            valueString\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      oneKlikCards {\n        maxCard\n        cards {\n          xcoid\n          credentialNumber\n          maxLimit\n          __typename\n        }\n        __typename\n      }\n      checkAvailabilityDiscount {\n        code\n        message\n        data\n        __typename\n      }\n      __typename\n    }\n    code\n    message\n    serverTime\n    __typename\n  }\n  orderMs(orderId: $referenceId, orderHash: $orderHash)\n}\n"
  }, {
    "operationName": "rescheduleCashback",
    "variables": {
      "rescheduleOrderId": requestData.orderID,
      "rescheduleOrderHash": requestData.orderHash
    },
    "query": "query rescheduleCashback($rescheduleOrderId: Int!, $rescheduleOrderHash: String!) {\n  rescheduleCashback(rescheduleOrderId: $rescheduleOrderId, rescheduleOrderHash: $rescheduleOrderHash) {\n    code\n    message\n    errors\n    data {\n      bankTransfer\n      bankTransferFee\n      breakdownOldPrice {\n        additional\n        name\n        price\n        __typename\n      }\n      breakdownPrice {\n        additional\n        name\n        price\n        __typename\n      }\n      cardHolderName\n      cardNumber\n      cardType\n      cashback\n      cashbackTix\n      cashbackTixWorth\n      ccFee\n      creditcard\n      finalRescheduleCashback\n      kredivo\n      kredivoFee\n      total\n      totalBankTransfer\n      totalCc\n      totalKredivo\n      __typename\n    }\n    __typename\n  }\n}\n"
  }];
  return gqlPost("paymentDetailQuery", body, params);
};
const gqlPaymentDetailList = (requestData, params) => {
  const body = [{
    "operationName": "PaymentDetailList",
    "variables": {
      "orderId": requestData.orderID,
      "orderHash": requestData.orderHash
    },
    "query": "query PaymentDetailList($orderId: ID, $orderHash: String) {\n  paymentDetailList(orderId: $orderId, orderHash: $orderHash) {\n    code\n    message\n    errors\n    data {\n      totalPrice\n      totalCashbackIDR\n      totalCashbackTIXPoint\n      totalCurrency\n      paymentSegments {\n        segmentTitle\n        segmentKey\n        paymentLists {\n          paymentTitle\n          paymentGroups {\n            paymentTitle\n            paymentGroupDetails {\n              title\n              qty\n              currency\n              price\n              information\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      localCurrencyInfo\n      __typename\n    }\n    serverTime\n    __typename\n  }\n}\n"
  }, {
    "operationName": "rescheduleCashback",
    "variables": {
      "rescheduleOrderId": requestData.orderID,
      "rescheduleOrderHash": requestData.orderHash
    },
    "query": "query rescheduleCashback($rescheduleOrderId: Int!, $rescheduleOrderHash: String!) {\n  rescheduleCashback(rescheduleOrderId: $rescheduleOrderId, rescheduleOrderHash: $rescheduleOrderHash) {\n    code\n    message\n    errors\n    data {\n      bankTransfer\n      bankTransferFee\n      breakdownOldPrice {\n        additional\n        name\n        price\n        __typename\n      }\n      breakdownPrice {\n        additional\n        name\n        price\n        __typename\n      }\n      cardHolderName\n      cardNumber\n      cardType\n      cashback\n      cashbackTix\n      cashbackTixWorth\n      ccFee\n      creditcard\n      finalRescheduleCashback\n      kredivo\n      kredivoFee\n      total\n      totalBankTransfer\n      totalCc\n      totalKredivo\n      __typename\n    }\n    __typename\n  }\n}\n"
  }];
  return gqlPost("PaymentDetailList", body, params);
};
;// CONCATENATED MODULE: ./apis/payment/http/paymentSubmitGQL.js
/* global __ENV */

const gqlPaymentSubmitMutation = (requestData, params) => {
  const body = [{
    "operationName": "paymentSubmitMutation",
    "variables": {
      "orderHash": requestData.orderHash,
      "referenceId": requestData.orderID,
      "paymentKey": requestData.paymentKey,
      "paymentData": "{}"
    },
    "query": "mutation paymentSubmitMutation($referenceId: Int!, $orderHash: String!, $paymentKey: String!, $paymentData: String!) {\n  paymentSubmit(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey, paymentData: $paymentData)\n}\n"
  }];
  return gqlPost("paymentSubmitMutation", body, params);
};
const gqlPaymentConfirmQuery = (requestData, params) => {
  const body = [{
    "operationName": "paymentConfirmQuery",
    "variables": {
      "referenceId": requestData.orderID,
      "orderHash": requestData.orderHash,
      "paymentKey": requestData.paymentKey,
      "paymentType": requestData.paymentType
    },
    "query": "query paymentConfirmQuery($referenceId: Int!, $orderHash: String!, $paymentKey: String!) {\n  paymentConfirm(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey) {\n    data {\n      paymentConfirmImages\n      bankTransfer {\n        accountBank\n        accountName\n        accountNumber\n        __typename\n      }\n      customAccount\n      paymentExpired\n      paymentSource\n      sidebarPayment {\n        subTotal\n        grandTotal\n        convertedCurrency\n        convertedAmount\n        serviceCharge\n        uniqueCode\n        cashback\n        balanceAmount\n        cashbackTIX\n        orderDetail {\n          currency\n          orderName\n          orderNameDetail\n          referenceDetailId\n          productType\n          tixPoint\n          totalPrice\n          breakdownPrice {\n            key\n            value\n            valueString\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      gopayUrl\n      confirmPaymentUrl\n      tokenExpired\n      __typename\n    }\n    code\n    message\n    serverTime\n    __typename\n  }\n  orderMs(orderId: $referenceId, orderHash: $orderHash)\n}\n"
  }];
  return gqlPost("paymentConfirmQuery", body, params);
};
const gqlHowToPay = (requestData, params) => {
  const body = [{
    "operationName": "howToPay",
    "variables": {
      "paymentMethod": requestData.paymentMethod,
      "customAccount": requestData.vaNumber,
      "referenceId": requestData.orderID
    },
    "query": "mutation howToPay($paymentMethod: String, $customAccount: String, $referenceId: String) {\n  howToPay(paymentMethod: $paymentMethod, customAccount: $customAccount, referenceId: $referenceId) {\n    content {\n      expandCollapse\n      title\n      steps\n      __typename\n    }\n    __typename\n  }\n}\n"
  }, {
    "operationName": "rescheduleCashback",
    "variables": {
      "rescheduleOrderId": requestData.orderID,
      "rescheduleOrderHash": requestData.orderHash
    },
    "query": "query rescheduleCashback($rescheduleOrderId: Int!, $rescheduleOrderHash: String!) {\n  rescheduleCashback(rescheduleOrderId: $rescheduleOrderId, rescheduleOrderHash: $rescheduleOrderHash) {\n    code\n    message\n    errors\n    data {\n      bankTransfer\n      bankTransferFee\n      breakdownOldPrice {\n        additional\n        name\n        price\n        __typename\n      }\n      breakdownPrice {\n        additional\n        name\n        price\n        __typename\n      }\n      cardHolderName\n      cardNumber\n      cardType\n      cashback\n      cashbackTix\n      cashbackTixWorth\n      ccFee\n      creditcard\n      finalRescheduleCashback\n      kredivo\n      kredivoFee\n      total\n      totalBankTransfer\n      totalCc\n      totalKredivo\n      __typename\n    }\n    __typename\n  }\n}\n"
  }];
  return gqlPost("howToPay", body, params);
};
;// CONCATENATED MODULE: external "https://jslib.k6.io/form-urlencoded/3.0.0/index.js"
const _3_0_0_index_js_namespaceObject = require("https://jslib.k6.io/form-urlencoded/3.0.0/index.js");;
var _3_0_0_index_js_default = /*#__PURE__*/__webpack_require__.n(_3_0_0_index_js_namespaceObject);
;// CONCATENATED MODULE: ./apis/payment/http/paymentListFE.js
/* global __ENV */


const paymentListHome = (orderID, orderHash, params) => {
  const queryParam = _3_0_0_index_js_default()({
    order_id: orderID,
    order_hash: orderHash
  });
  return http_default().get(`${__ENV.PAYMENT_HOST}/?${queryParam}`, params);
};
;// CONCATENATED MODULE: ./apis/payment/http/index.js




;// CONCATENATED MODULE: ./apis/utilities/http/landingPageQueryGQL.js

const gqlLandingPageQuery = (requestData, params) => {
  const body = [{
    "operationName": "landingPageQuery",
    "variables": {
      "referenceId": `${requestData.orderID}`,
      "orderHash": `${requestData.orderHash}`
    },
    "query": "query landingPageQuery($referenceId: Int!, $orderHash: String!, $listTixpoint: Boolean) {\n  paymentListV2(referenceId: $referenceId, orderHash: $orderHash, listTixpoint: $listTixpoint) {\n    data {\n      availablePayment {\n        link\n        message\n        paymentGroup\n        paymentTitle\n        paymentType\n        scoring\n        status\n        images\n        paymentLabel\n        __typename\n      }\n      payLater {\n        limit\n        __typename\n      }\n      allowTixpoint\n      paymentGroups\n      paymentGroupDetails {\n        key\n        desc\n        title\n        __typename\n      }\n      paymentExpired\n      sidebarPayment {\n        subTotal\n        grandTotal\n        convertedCurrency\n        convertedAmount\n        serviceCharge\n        uniqueCode\n        cashback\n        balanceAmount\n        cashbackTIX\n        orderDetail {\n          currency\n          orderName\n          orderNameDetail\n          referenceDetailId\n          productType\n          tixPoint\n          totalPrice\n          breakdownPrice {\n            key\n            value\n            valueString\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      coBrandingData {\n        logo\n        background\n        title\n        description\n        url\n        urlLabel\n        __typename\n      }\n      __typename\n    }\n    code\n    message\n    __typename\n  }\n  orderMs(orderId: $referenceId, orderHash: $orderHash)\n}\n"
  }];
  return gqlPost("landingPageQuery", body, params);
};
;// CONCATENATED MODULE: ./apis/utilities/http/promoSuggestionGQL.js

const gqlPromoSuggestion = (requestData, params) => {
  const body = [{
    "operationName": "getPromoSuggestion",
    "variables": {
      "payload": `{\
                \"orderId\" : \"${requestData.orderID}\",\
                \"totalAmount\" : ${requestData.totalAmount},\
                \"productType\" : \"${requestData.productType}\",\
                \"size\" : 100,\
                \"page\" : 0,\
                \"orderHash\" : \"${requestData.orderHash}\",\
                \"paymentKey\" : \"VA_BCA\"\
            }`
    },
    "query": "mutation getPromoSuggestion($payload: String) {\n  getPromoSuggestion(payload: $payload) {\n    code\n    message\n    serverTime\n    data {\n      description\n      code\n      expiredDate\n      amount\n      position\n      source\n      __typename\n    }\n    __typename\n  }\n}\n"
  }];
  return gqlPost("getPromoSuggestion", body, params);
};
;// CONCATENATED MODULE: ./apis/utilities/http/serverTimeQueryGQL.js

const gqlServerTimeQuery = params => {
  const body = [{
    "operationName": "serverTimeQuery",
    "variables": {},
    "query": "query serverTimeQuery {\n  serverTime\n}\n"
  }];
  return gqlPost("serverTimeQuery", body, params);
};
;// CONCATENATED MODULE: ./apis/utilities/http/index.js



;// CONCATENATED MODULE: ./scenarios/payment/paymentListVA.js







const orderData = new data_namespaceObject.SharedArray("order", function () {
  return index_js_default().parse(open('./data/order.csv'), {
    header: true
  }).data;
});
/* There's a rule in using VA in this scenario:
- BCA should be hit 50% of load
- BNI should be hit 30% of load
- Mandiri should be hit 10% of load
- BRI should be hit 10% of load.

Since k6 hasn't support stateful data yet, we use manual weighted array 
and call it sequentially through loop (10x).
*/

const virtualAccounts = [{
  paymentKey: "VA_BCA",
  paymentType: "va_bca"
}, {
  paymentKey: "VA_BCA",
  paymentType: "va_bca"
}, {
  paymentKey: "VA_BCA",
  paymentType: "va_bca"
}, {
  paymentKey: "VA_BCA",
  paymentType: "va_bca"
}, {
  paymentKey: "VA_BCA",
  paymentType: "va_bca"
}, {
  paymentKey: "VA_BNI",
  paymentType: "va_bni"
}, {
  paymentKey: "VA_BNI",
  paymentType: "va_bni"
}, {
  paymentKey: "VA_BNI",
  paymentType: "va_bni"
}, {
  paymentKey: "VA_MANDIRI",
  paymentType: "va_mandiri"
}, {
  paymentKey: "VA_BRI",
  paymentType: "va_bri"
}];
/* harmony default export */ function paymentListVA() {
  const randomOrder = orderData[Math.floor(Math.random() * orderData.length)];
  const totalAmount = randomIntBetween(1, 9999999);
  const requestData = {
    orderID: randomOrder.orderId,
    orderHash: randomOrder.orderHash,
    productType: randomOrder.orderType,
    totalAmount
  }; // payment.tiket.com FE

  const home = paymentListHome(randomOrder.orderId, randomOrder.orderHash);
  assertStatus(home, 200, true);
  (0,external_k6_namespaceObject.group)("gql", () => {
    virtualAccounts.forEach(va => {
      /* since k6 uses goja as JS VM and goja is only 5.1 ES compliant,
      we cannot use spread operator. Current workaround using Object.assign
      */
      const data = Object.assign({}, requestData, {
        paymentKey: va.paymentKey,
        paymentType: va.paymentType
      });
      const serverTime = gqlServerTimeQuery();
      assertStatus(serverTime, 200, true);
      const landingPage = gqlLandingPageQuery(data);
      assertStatus(landingPage, 200, true);
      const paymentDetailList = gqlPaymentDetailList(data);
      assertStatus(paymentDetailList, 200, true);
      let paymentDetailQuery = gqlPaymentDetailQuery(data);
      assertStatus(paymentDetailQuery, 200, true);
      const promoSuggestion = gqlPromoSuggestion(data);
      assertStatus(promoSuggestion, 200, true);
      const applyDE = gqlApplyDiscountEngine(data);
      assertStatus(applyDE, 200, true);
      const paymentSubmitMutation = gqlPaymentSubmitMutation(data);
      assertStatus(paymentSubmitMutation, 200, true);
      const paymentConfirmQuery = gqlPaymentConfirmQuery(data);
      assertStatus(paymentConfirmQuery, 200, true);
      const vaNumber = paymentSubmitMutation.json("data/paymentSubmit/data/vaNumber");
      const dataHTP = Object.assign({}, data, vaNumber);
      const howToPay = gqlHowToPay(dataHTP);
      assertStatus(howToPay, 200, true);
      paymentDetailQuery = gqlPaymentDetailQuery(data);
      assertStatus(paymentDetailQuery, 200, true);
      const unapplyDE = gqlUnapplyDiscountEngine(data);
      assertStatus(unapplyDE, 200, true);
    });
  });
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;