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
  "generatorFive": () => (/* reexport */ generatorFive),
  "generatorFour": () => (/* reexport */ generatorFour),
  "generatorOne": () => (/* reexport */ generatorOne),
  "generatorSeven": () => (/* reexport */ generatorSeven),
  "generatorSix": () => (/* reexport */ generatorSix),
  "generatorThree": () => (/* reexport */ generatorThree),
  "options": () => (/* binding */ options)
});

;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/order/http/checkout.js

const paymentCheckout = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/checkout/payment_checkout';
  return http_default().post(`${__ENV.LB_HOST}/tix-order-go/checkout/payment_checkout`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./apis/order/http/settlement.js

const settlementNotification = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-settlement-go/settlement/notification';
  return http_default().post(`${__ENV.LB_HOST}/tix-settlement-go/settlement/notification`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./apis/order/http/updateStatus.js

const updateStatus = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/orders/update-status';
  return http_default().post(`${__ENV.LB_HOST}/tix-order-go/orders/update-status`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./apis/order/http/issued.js

const issued = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/orders/:orderId/issued';
  return http_default().put(`${__ENV.LB_HOST}/tix-order-go/orders/${requestData.orderId}/issued`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./apis/order/http/createOrder.js

const cartTodo = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/legacy/add_order_cart/todo';
  return http_default().post(`${__ENV.LB_HOST}/tix-order-go/legacy/add_order_cart/todo`, JSON.stringify(requestData), params);
};
const cartHotel = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/legacy/add_order_cart/tixhotel';
  return http_default().post(`${__ENV.LB_HOST}/tix-order-go/legacy/add_order_cart/tixhotel`, JSON.stringify(requestData), params);
};
const cartFlight = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/add_order_cart/flight';
  return http_default().post(`${__ENV.LB_HOST}/tix-order-go/add_order_cart/flight`, JSON.stringify(requestData), params);
};
const cartTrain = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/add_order_cart/train';
  return http_default().post(`${__ENV.LB_HOST}/tix-order-go/add_order_cart/train`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/papaparse/5.1.1/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/papaparse/5.1.1/index.js");;
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_namespaceObject);
;// CONCATENATED MODULE: external "k6/data"
const data_namespaceObject = require("k6/data");;
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
      if (r.status != status && verbose) {// console.log(JSON.stringify(res))
      }

      return r.status === status;
    }
  });
};
const assertSuccess = (res, code, verbose, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('code') != code && verbose) {// console.log(JSON.stringify(res))
      }

      return r.json('code') === code;
    }
  });
};
const assertSuccessOrderHotel = (res, code, verbose, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('diagnostic.confirm') != code && verbose) {// console.log(JSON.stringify(res))
      }

      return r.json('diagnostic.confirm') === code;
    }
  });
};
const assertSuccessOrderDate = (res, code, verbose, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('orderId') != null && verbose) {// console.log(JSON.stringify(res))
      }

      return r.json('orderId') !== null;
    }
  });
};
const assertSuccessSettlement = (res, code, verbose, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('message').includes(code) && verbose) {// console.log(JSON.stringify(res))
      }

      return r.json('message').includes(code);
    }
  });
};
const randomList = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};
;// CONCATENATED MODULE: external "https://jslib.k6.io/k6-utils/1.1.0/index.js"
const _1_1_0_index_js_namespaceObject = require("https://jslib.k6.io/k6-utils/1.1.0/index.js");;
;// CONCATENATED MODULE: ./generator/order/create_checkout_notif_issued_statusUpdate.js







const randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const orderEmailData = parseCSV('orderEmail', 'data/orderEmail.csv');
const generatorOne = () => {
  const data = orderEmailData[Math.floor(Math.random() * orderEmailData.length)];
  const email = data[0];
  const createOrderFlight = addCartFlight(email);
  let orderID = createOrderFlight.json().data.orderID;
  let orderHash = createOrderFlight.json().data.orderHash;
  let orderDetailId = createOrderFlight.json().data.orderDetail[0].orderDetailId;
  checkoutPayment(orderID, orderHash, email);
  settlement(orderID, email);
  processIssued(orderID, orderDetailId, email);
  statusUpdate(orderID, email);
};

const addCartFlight = email => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_cartFlight_${__VU}_${__ITER}_${randomUUID}`,
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
    "orderCart": {
      "customerCurrency": "IDR",
      "fromEmail": email,
      "mobilePhone": "+6287774517272",
      "userLang": "id",
      "oldOrderId": null,
      "refundEstimation": null,
      "orderCore": false,
      "resellerID": "0",
      "isOrderCore": false
    },
    "orderCartDetail": [{
      "orderType": "flight",
      "orderName": "HKG (Hong Kong - Hong Kong International Apt) - KUL (Kuala Lumpur - Kuala Lumpur International Airport) ",
      "orderNameDetail": "PHILIPPINE AIRLINES (PR 307/PR 525 depart)",
      "serviceRate": 0.0,
      "serviceFix": 0.0,
      "sellingCurrency": "IDR",
      "sellingPrice": 6502400.0,
      "customerCurrency": "IDR",
      "customerPrice": 6502400.0,
      "currencyExchangeRate": 1.0,
      "orderExpiredDateTime": "2022-03-11 19:16:23",
      "contactPerson": 0,
      "ref": "5fd21801-e0be-41ba-a4c9-75419c31f167",
      "orderCartFlight": {
        "flightDate": "2022-09-19 18:00",
        "flightNumber": "PR 307/PR 525",
        "serviceClass": "ECONOMY",
        "trip": "trip",
        "airlinesMasterId": "24278938",
        "airlinesName": "PHILIPPINEAIRLINES",
        "airlineCartFlight": {
          "code": "PR",
          "name": "PHILIPPINE AIRLINES",
          "displayName": "Philippine Airlines"
        },
        "departureAirportId": 19434668,
        "departureCity": "HKG",
        "departureTime": "2022-09-19 18:00",
        "departureTz": "8.0",
        "arrivalAirportId": 185523,
        "arrivalCity": "KUL",
        "arrivalTime": "2022-09-20 12:10",
        "arrivalTz": "8.0",
        "ticketClass": "K",
        "countAdult": 1,
        "countChild": 1,
        "countInfant": 1,
        "type": "international",
        "flightInfoJSON": "[{\"flight_no\":\"PR 307\",\"dep_airport\":\"HKG\",\"arr_airport\":\"MNL\",\"dep_airport_name\":\"Hong Kong International Apt\",\"arr_airport_name\":\"Manila Ninoy Aquino International Apt\",\"dep_city_code\":\"HKGC\",\"arr_city_code\":\"MNLC\",\"dep_city_name\":\"Hong Kong\",\"arr_city_name\":\"Manila\",\"dep_time_full\":\"2022-09-19 18:00\",\"arr_time_full\":\"2022-09-19 20:15\",\"dep_timezone\":8.0,\"arr_timezone\":8.0,\"class\":\"K\",\"is_promo\":0,\"stop\":0,\"operating_carrier\":\"PR 307\",\"marketing_airline\":\"PR\",\"departure_terminal\":\"1\",\"arrival_terminal\":\"2\",\"bundling_meal\":false,\"bundling_baggage\":false,\"connecting_time\":0,\"inclusive_baggages\":[{\"unit\":30,\"measurement\":\"Kg\"}],\"dep_visa_required\":false,\"arr_visa_required\":false,\"tags\":[\"TIKET_CLEAN\"],\"flexi\":false,\"benefits\":[],\"penalty_info\":true,\"departure_airport_name\":\"Hong Kong International Apt\",\"arrival_airport_name\":\"Manila Ninoy Aquino International Apt\",\"departure_country_name\":\"Hong Kong (SAR) China\",\"arrival_country_name\":\"Malaysia\",\"departure_city_name\":\"Hong Kong\",\"arrival_city_name\":\"Manila\"},{\"flight_no\":\"PR 525\",\"dep_airport\":\"MNL\",\"arr_airport\":\"KUL\",\"dep_airport_name\":\"Manila Ninoy Aquino International Apt\",\"arr_airport_name\":\"Kuala Lumpur International Airport\",\"dep_city_code\":\"MNLC\",\"arr_city_code\":\"KULC\",\"dep_city_name\":\"Manila\",\"arr_city_name\":\"Kuala Lumpur\",\"dep_time_full\":\"2022-09-20 08:15\",\"arr_time_full\":\"2022-09-20 12:10\",\"dep_timezone\":8.0,\"arr_timezone\":8.0,\"class\":\"K\",\"is_promo\":0,\"stop\":0,\"operating_carrier\":\"PR 525\",\"marketing_airline\":\"PR\",\"departure_terminal\":\"1\",\"arrival_terminal\":\"M\",\"bundling_meal\":false,\"bundling_baggage\":false,\"connecting_time\":0,\"inclusive_baggages\":[{\"unit\":30,\"measurement\":\"Kg\"}],\"dep_visa_required\":false,\"arr_visa_required\":false,\"tags\":[\"TIKET_CLEAN\"],\"flexi\":false,\"benefits\":[],\"penalty_info\":true,\"departure_airport_name\":\"Manila Ninoy Aquino International Apt\",\"arrival_airport_name\":\"Kuala Lumpur International Airport\",\"departure_country_name\":\"Hong Kong (SAR) China\",\"arrival_country_name\":\"Malaysia\",\"departure_city_name\":\"Manila\",\"arrival_city_name\":\"Kuala Lumpur\"}]",
        "via": "MNL",
        "priceCurrency": "IDR",
        "priceAdult": 3376200.0,
        "priceChild": 2585600.0,
        "priceInfant": 540600.0,
        "priceTotal": 6502400.0,
        "priceNta": 6502400.0,
        "balanceDue": 6502400.0,
        "baseFareAdult": 2298000.0,
        "baseFareChild": 1728000.0,
        "baseFareInfant": 239000.0,
        "fareInfoJson": "{\"adult\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":2298000.0,\"original_base_fare\":0.0,\"nta\":3376200.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":1078200.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0},\"child\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":1728000.0,\"original_base_fare\":0.0,\"nta\":2585600.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":857600.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0},\"infant\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":239000.0,\"original_base_fare\":0.0,\"nta\":540600.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":301600.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0}}",
        "customerPriceCurrency": "IDR",
        "customerPriceAdult": 3376200.0,
        "customerPriceChild": 2585600.0,
        "customerPriceInfant": 540600.0,
        "customerPriceTotal": 6502400.0,
        "tax": 2237400.0,
        "airlinesFee": 0.0,
        "airlineFeeCurrency": "IDR",
        "baggageFee": 0.0,
        "baggageFeeCurrency": "IDR",
        "mealFee": 0.0,
        "mealFeeCurrency": "IDR",
        "contactTitle": "Mr",
        "contactEmail": email,
        "contactFirstName": "Apri",
        "contactLastName": "Dastan",
        "contactPhone": "+6287774517272",
        "contactPhoneCode": "62",
        "contactOtherPhone": "+6287774517272",
        "flightRef": "0",
        "airlinesAccountId": null,
        "bookingCode": "FVDADW",
        "bookExpireDateTime": "2022-03-11 19:16:23",
        "account": "aviaDirectSabre",
        "vendor": "sa",
        "referenceNumber": "",
        "additionalData": {
          "accountCode": "TGF03"
        },
        "orderDetailIdBefore": null,
        "connectingGroup": null,
        "hasInsurance": 0,
        "logReference": null,
        "orderFrom": "microservice",
        "commission": {
          "total": 0.0,
          "breakdownJson": "{\"total_adult_comission\":0.0,\"total_child_comission\":0.0,\"total_infant_comission\":0.0}"
        },
        "orderCartFlightSegment": [{
          "trip": "depart",
          "flightNumber": "PR 307/PR 525",
          "airlinesMasterId": "24278938",
          "airlinesName": "PHILIPPINEAIRLINES",
          "airlineCartFlightSegment": {
            "code": "PR",
            "name": "PHILIPPINE AIRLINES",
            "displayName": "Philippine Airlines"
          },
          "departureAirportId": 19434668,
          "departureCity": "HKG",
          "departureTime": "2022-09-19 18:00",
          "departureTimeZone": "8.0",
          "arrivalAirportId": 185523,
          "arrivalCity": "KUL",
          "arrivalTime": "2022-09-20 12:10",
          "arrivalTimeZone": "8.0",
          "serviceClass": "ECONOMY",
          "flightDate": "2022-09-19",
          "priceCurrency": "IDR",
          "priceAdult": 3376200.0,
          "priceChild": 2585600.0,
          "priceInfant": 540600.0,
          "priceTotal": 6502400.0,
          "flightInfoJson": "[{\"flight_no\":\"PR 307\",\"dep_airport\":\"HKG\",\"arr_airport\":\"MNL\",\"dep_airport_name\":\"Hong Kong International Apt\",\"arr_airport_name\":\"Manila Ninoy Aquino International Apt\",\"dep_city_code\":\"HKGC\",\"arr_city_code\":\"MNLC\",\"dep_city_name\":\"Hong Kong\",\"arr_city_name\":\"Manila\",\"dep_time_full\":\"2022-09-19 18:00\",\"arr_time_full\":\"2022-09-19 20:15\",\"dep_timezone\":8.0,\"arr_timezone\":8.0,\"class\":\"K\",\"is_promo\":0,\"stop\":0,\"operating_carrier\":\"PR 307\",\"marketing_airline\":\"PR\",\"departure_terminal\":\"1\",\"arrival_terminal\":\"2\",\"bundling_meal\":false,\"bundling_baggage\":false,\"connecting_time\":0,\"inclusive_baggages\":[{\"unit\":30,\"measurement\":\"Kg\"}],\"dep_visa_required\":false,\"arr_visa_required\":false,\"tags\":[\"TIKET_CLEAN\"],\"flexi\":false,\"benefits\":[]},{\"flight_no\":\"PR 525\",\"dep_airport\":\"MNL\",\"arr_airport\":\"KUL\",\"dep_airport_name\":\"Manila Ninoy Aquino International Apt\",\"arr_airport_name\":\"Kuala Lumpur International Airport\",\"dep_city_code\":\"MNLC\",\"arr_city_code\":\"KULC\",\"dep_city_name\":\"Manila\",\"arr_city_name\":\"Kuala Lumpur\",\"dep_time_full\":\"2022-09-20 08:15\",\"arr_time_full\":\"2022-09-20 12:10\",\"dep_timezone\":8.0,\"arr_timezone\":8.0,\"class\":\"K\",\"is_promo\":0,\"stop\":0,\"operating_carrier\":\"PR 525\",\"marketing_airline\":\"PR\",\"departure_terminal\":\"1\",\"arrival_terminal\":\"M\",\"bundling_meal\":false,\"bundling_baggage\":false,\"connecting_time\":0,\"inclusive_baggages\":[{\"unit\":30,\"measurement\":\"Kg\"}],\"dep_visa_required\":false,\"arr_visa_required\":false,\"tags\":[\"TIKET_CLEAN\"],\"flexi\":false,\"benefits\":[]}]",
          "baseFareAdult": 2298000.0,
          "baseFareChild": 1728000.0,
          "baseFareInfant": 239000.0,
          "fareInfoJson": "{\"adult\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":2298000.0,\"original_base_fare\":0.0,\"nta\":3376200.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":1078200.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0},\"child\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":1728000.0,\"original_base_fare\":0.0,\"nta\":2585600.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":857600.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0},\"infant\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":239000.0,\"original_base_fare\":0.0,\"nta\":540600.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":301600.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0}}",
          "subPriceIDR": 0.0,
          "via": "MNL",
          "class": "K"
        }],
        "orderCartFlightPassenger": [{
          "profileId": "33474974",
          "paxNumber": 10000,
          "title": "Mr",
          "firstName": "Apri",
          "lastName": "Dastan",
          "originalFirstName": "Apri",
          "originalLastName": "Dastan",
          "type": "adult",
          "birthDate": "2000-01-01",
          "passportExpiry": "2024-01-01",
          "passportIssuedDate": "2022-01-01",
          "passportIssuingCountry": "ID",
          "passportNo": "123456",
          "passportNationality": "ID",
          "idNumber": "123456",
          "adultIndex": null,
          "checkInBaggage": "30 kg",
          "checkInBaggageSize": 30,
          "checkInBaggageReturn": null,
          "checkInBaggageSizeReturn": 0,
          "checkInBaggageJson": "[{\"origin\":\"HKG\",\"destination\":\"KUL\",\"flight_number\":\"PR 307\",\"unit\":\"0\",\"measurement\":\"kg\"}]",
          "checkInBaggageReturnJson": null,
          "addOnsMealJson": "[]",
          "addonsMealReturnJson": null,
          "addOnsSeatJson": "[]",
          "addonsSeatReturnJson": null,
          "paxInsurance": null,
          "paxCancelInsurance": null,
          "pax_addons": [{
            "addons_type": "BAGGAGE",
            "addons_depart_json": "[{\"origin\":\"HKG\",\"destination\":\"KUL\",\"flight_number\":\"PR 307\",\"unit\":\"0\",\"measurement\":\"kg\"}]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }, {
            "addons_type": "MEAL",
            "addons_depart_json": "[]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }, {
            "addons_type": "SEAT",
            "addons_depart_json": "[]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }]
        }, {
          "profileId": "33474977",
          "paxNumber": 20000,
          "title": "Miss",
          "firstName": "Regina",
          "lastName": "Dastan",
          "originalFirstName": "Regina",
          "originalLastName": "Dastan",
          "type": "child",
          "birthDate": "2020-01-01",
          "passportExpiry": "2024-01-01",
          "passportIssuedDate": "2022-01-01",
          "passportIssuingCountry": "ID",
          "passportNo": "1234567",
          "passportNationality": "ID",
          "idNumber": "1234567",
          "adultIndex": null,
          "checkInBaggage": "30 kg",
          "checkInBaggageSize": 30,
          "checkInBaggageReturn": null,
          "checkInBaggageSizeReturn": 0,
          "checkInBaggageJson": "[{\"origin\":\"HKG\",\"destination\":\"KUL\",\"flight_number\":\"PR 307\",\"unit\":\"0\",\"measurement\":\"kg\"}]",
          "checkInBaggageReturnJson": null,
          "addOnsMealJson": "[]",
          "addonsMealReturnJson": null,
          "addOnsSeatJson": "[]",
          "addonsSeatReturnJson": null,
          "paxInsurance": null,
          "paxCancelInsurance": null,
          "pax_addons": [{
            "addons_type": "BAGGAGE",
            "addons_depart_json": "[{\"origin\":\"HKG\",\"destination\":\"KUL\",\"flight_number\":\"PR 307\",\"unit\":\"0\",\"measurement\":\"kg\"}]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }, {
            "addons_type": "MEAL",
            "addons_depart_json": "[]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }, {
            "addons_type": "SEAT",
            "addons_depart_json": "[]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }]
        }, {
          "profileId": "33474980",
          "paxNumber": 30000,
          "title": "Miss",
          "firstName": "Valonia",
          "lastName": "Dastan",
          "originalFirstName": "Valonia",
          "originalLastName": "Dastan",
          "type": "infant",
          "birthDate": "2022-01-01",
          "passportExpiry": "2024-01-01",
          "passportIssuedDate": "2022-01-01",
          "passportIssuingCountry": "ID",
          "passportNo": "12345678",
          "passportNationality": "ID",
          "idNumber": "12345678",
          "adultIndex": null,
          "checkInBaggage": null,
          "checkInBaggageSize": 0,
          "checkInBaggageReturn": null,
          "checkInBaggageSizeReturn": 0,
          "checkInBaggageJson": null,
          "checkInBaggageReturnJson": null,
          "addOnsMealJson": null,
          "addonsMealReturnJson": null,
          "addOnsSeatJson": null,
          "addonsSeatReturnJson": null,
          "paxInsurance": null,
          "paxCancelInsurance": null,
          "pax_addons": []
        }],
        "orderCartFlightInformationJson": null,
        "orderCartInformations": [{
          "type": "trip",
          "valueJson": "[{\"origin\":\"HKG\",\"destination\":\"MNL\",\"flight_number\":\"PR 307\",\"facilities\":{\"meal\":{\"icon\":\"https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/10/09/570f9945-2f57-46d4-bb65-80975545c62e-1602261225439-7e57494631bf21e0148c4ccdeb3fb202.png\",\"value\":\"true\"},\"aircraft\":{\"icon\":null,\"value\":\"Airbus A321\"}}},{\"origin\":\"MNL\",\"destination\":\"KUL\",\"flight_number\":\"PR 525\",\"facilities\":{\"meal\":{\"icon\":\"https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/10/09/570f9945-2f57-46d4-bb65-80975545c62e-1602261225439-7e57494631bf21e0148c4ccdeb3fb202.png\",\"value\":\"true\"},\"aircraft\":{\"icon\":null,\"value\":\"Airbus A321\"}}}]"
        }, {
          "type": "store_id",
          "valueJson": "TIKETCOM"
        }, {
          "type": "channel_id",
          "valueJson": "DESKTOP"
        }, {
          "type": "reseller_id",
          "valueJson": ""
        }, {
          "type": "order_from",
          "valueJson": "preorder"
        }],
        "hashInfo": {
          "bookingCode": "FVDADW",
          "hash": "H4sIAAAAAAAAAGWOUWrEMAxED1S0yGpTZwOF3mRREsUVieVgOyl7+7pfu6V/4r0ZRrxnnblUNgiSo7LVdBmPyvmz6ir1MqUIL+/Ue+/fOufJE8TMjxauAQCilpIlqPE/fPKWTP9yPhvQLFMtPGbZ25UsxTuMKa1qYUqzfCznzPM37PkVPXytgZAI8Aru6voBEaJtD0Q4uK5lO+qeBSH2v2I9npCjwSGolSOzTW2ItyKwi/FW7ze1JUF75xRTafq2iPwAYy8y7yYBAAA=",
          "rules": [{
            "airlines": [],
            "timeRange": 172800,
            "timeType": "SECOND",
            "action": "NONE"
          }]
        },
        "seatFee": 0.0,
        "seatFeeCurrency": "IDR",
        "departureAirportName": "Hong Kong International Apt",
        "arrivalAirportName": "Kuala Lumpur International Airport",
        "departureTimezoneName": "Asia/Hong_Kong",
        "arrivalTimezoneName": "Asia/Kuala_Lumpur",
        "subPriceIDR": 0.0
      },
      "orderDiscounts": null,
      "orderCartInsurance": null,
      "orderCartCancelInsurance": null,
      "orderCartBundlingAddons": {
        "orderName": null,
        "orderNameDetail": null,
        "productName": null,
        "sellingCurrency": null,
        "sellingPrice": 0.0,
        "customerCurrency": null,
        "customerPrice": 0.0,
        "orderExpiredDateTime": null,
        "priceValue": 0.0,
        "priceCurrency": null,
        "paramJson": null,
        "orderCartBundlingAddonsPassengers": null,
        "addonsRequests": null
      },
      "insuranceBookingRequest": null,
      "bookingNo": "FVDADW",
      "productCode": null,
      "orderMasterID": "24278938",
      "resellerID": "0"
    }, {
      "orderType": "convenience_fee",
      "orderName": "Convenience Fee",
      "orderNameDetail": "Convenience Fee",
      "serviceRate": 0.0,
      "serviceFix": 0.0,
      "sellingCurrency": "IDR",
      "sellingPrice": 12000.0,
      "customerCurrency": "IDR",
      "customerPrice": 12000.0,
      "currencyExchangeRate": 0.0,
      "orderExpiredDateTime": null,
      "contactPerson": 0,
      "ref": null,
      "orderCartFlight": null,
      "orderDiscounts": null,
      "orderCartInsurance": null,
      "orderCartCancelInsurance": null,
      "orderCartBundlingAddons": null,
      "insuranceBookingRequest": null,
      "bookingNo": null,
      "productCode": null,
      "orderMasterID": null,
      "resellerID": null
    }],
    "generalInfo": {
      "userLang": null,
      "ipUser": null,
      "customerName": "Apri Dastan",
      "customerContactNumber": "+6287774517272",
      "phoneNumber": "+6287774517272",
      "source": null,
      "currency": "IDR",
      "accountRegistDate": null,
      "accountLastUpdate": null,
      "userLogin": null,
      "email": email
    },
    "orderReceipt": {
      "subTotal": 6502400.0,
      "additional": [{
        "title": "<div style=\"\">Biaya jasa</div>",
        "value": 12000.0
      }],
      "itemDetails": [{
        "description": "<div style=\"\">Philippine Airlines (HKG - KUL)</div><div style=\" font-size: 8px; font-weight:100; color:#888888;\">Kode Booking FVDADW</div>",
        "name": "Tiket Pesawat",
        "price": "IDR 6.502.400",
        "quantity": "3"
      }],
      "deduction": []
    },
    "orderCartRescheduleReference": null,
    "orderReschedule": null
  };
  const addCartFlight = cartFlight(body, params);
  assertStatus(addCartFlight, 200, true, 'cartFlight');
  assertSuccess(addCartFlight, 'SUCCESS', true, 'cartFlight');
  return addCartFlight;
};

const checkoutPayment = (orderID, orderHash, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_paymentCheckout_${__VU}_${__ITER}_${randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    "referenceId": orderID,
    "orderHash": orderHash,
    "paymentType": "ATM_TRANSFER_JATIS",
    "subTotal": 6514400,
    "paymentCharge": 0,
    "grandTotal": 6514400,
    "userBca": "8734000700134566",
    "tenorKlikpay": null,
    "channel": "DESKTOP",
    "checkoutCreditCard": null,
    "checkoutCashOnSite": {
      "message": null,
      "paymentMethod": null
    },
    "checkoutVirtualAccount": {
      "trxId": null,
      "vaNumber": "8734000700134566"
    },
    "secretKey": "9905a477c91b40cdabff6679815ff050",
    "appsVersion": null,
    "payLaterDetail": null,
    "additionalInformation": null,
    "gbvCode": "ID",
    "paymentToGbvFxRate": "6514400.0",
    "logDescription": "Checkout Success - Customer checkout with ATM_TRANSFER_JATIS",
    "coBranding": false,
    "login": true
  };
  const checkoutPayment = paymentCheckout(body, params);
  assertStatus(checkoutPayment, 200, true, 'paymentCheckout');
  assertSuccess(checkoutPayment, 'SUCCESS', true, 'paymentCheckout');
};

const settlement = (orderID, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_settlementNotification_${__VU}_${__ITER}_${randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      //Authorization: 'Bearer 817a3f6efcb8776e82fbf4741a97e721ea08f9a2c7edd610d334449bdd713297',
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    "token": "9905a477c91b40cdabff6679815ff050",
    "amount": 6514400,
    "timestamp": 1646993823686,
    "paymentSource": "JATIS",
    "customAccount": "8734000700134566",
    "ref_id": orderID,
    "conf_id": "",
    "reconciliationId": "",
    "authorizationCode": "",
    "paymentGateway": "",
    "acquiringBank": "",
    "abtcParameters": {
      "trxId": "",
      "bank": "",
      "trxAmount": 0,
      "bankNotes": ""
    },
    "deviceInfo": null,
    "logDescription": ""
  };
  const notification = settlementNotification(body, params);
  assertStatus(notification, 200, true, 'settlementNotification');
  assertSuccessSettlement(notification, 'Success', true, 'settlementNotification');
};

const processIssued = (orderID, orderDetailId, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_issued_${__VU}_${__ITER}_${randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    "orderId": orderID,
    "orderType": "flight",
    "issuedOrderFlightRequest": {
      "orderId": `${orderID}`,
      "orderDetailId": orderDetailId,
      "statusOrder": "SUCCESS",
      "distributionType": "sabre",
      "bookingCode": "FVDADW",
      "paymentAmount": 0.0,
      "ticketType": "paxes_data",
      "pdfBase64": null,
      "sessionId": null,
      "issuedTypeRequest": "ISSUANCE",
      "paxes": [{
        "name": "mr Apri Dastan",
        "ticketNumber": "223344",
        "paxNumber": "10000"
      }, {
        "name": "miss Regina Dastan",
        "ticketNumber": "556677",
        "paxNumber": "20000"
      }, {
        "name": "miss Valonia Dastan",
        "ticketNumber": "223399",
        "paxNumber": "30000"
      }],
      "bookingCodeSabre": [{
        "flightNumber": "TK 1985",
        "bookingCode": "FLUEQM"
      }],
      "requireGetTicket": false,
      "isRequireGetTicket": false
    }
  };
  const processIssued = issued(body, params);
  assertStatus(processIssued, 200, true, 'issued');
  assertSuccess(processIssued, 'SUCCESS', true, 'issued');
};

const statusUpdate = (orderId, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_updateStatus_${__VU}_${__ITER}_${randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    orderId: orderId,
    orderStatus: 'FINISHED',
    travelFinishedDate: '2021-10-05 23:59:59'
  };
  const statusUpdate = updateStatus(body, params);
  assertStatus(statusUpdate, 200, true, 'updateStatus');
  assertSuccess(statusUpdate, 'SUCCESS', true, 'updateStatus');
};
;// CONCATENATED MODULE: ./apis/order/http/updateResellerData.js

const updateResellerData = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/payment/orders/:orderId/reseller';
  return http_default().put(`${__ENV.LB_HOST}/tix-order-go/payment/orders/${requestData}/reseller`, '', params);
};
;// CONCATENATED MODULE: ./generator/order/create_updateReseller.js




const create_updateReseller_randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const create_updateReseller_orderEmailData = parseCSV('orderEmail', 'data/orderEmail.csv');
const generatorThree = () => {
  const data = create_updateReseller_orderEmailData[Math.floor(Math.random() * create_updateReseller_orderEmailData.length)];
  const email = data[0];
  const createOrderHotel = addCartHotel(email);
  updateReseller(createOrderHotel.json('results'), email);
};

const addCartHotel = email => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_cartHotel_${__VU}_${__ITER}_${create_updateReseller_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      tixToken: '959c39ee109040e4d5b420679c747084d26cf361',
      lang: 'id'
    },
    tags: {
      name: 'cartHotel'
    },
    timeout: '3m'
  };
  const body = {
    customerIp: '114.125.246.114',
    // eslint-disable-next-line no-undef
    refId: `refId_addCartHotel_${__VU}_${__ITER}_${create_updateReseller_randomUUID}`,
    urlReferer: null,
    accountId: null,
    hotelData: {
      id: 'pop-hotel-tanjung-karang-108001534490306228',
      name: 'POP! Hotel Tanjung Karang',
      hotelChain: {
        id: 'tauzia-hotel-management-112001544186945121',
        name: 'Tauzia Hotel Management'
      },
      star: 2,
      phone: '+62721241736',
      address: 'Jl. Wolter Monginsidi No.56, Tj. Karang, Tj. Karang Pusat, Kota Bandar Lampung, Lampung 35214, Indonesia',
      latitude: -5.424513,
      longitude: 105.251163,
      policy: '<h4><b>Anak</b></h4>\n<p>Tamu umur berapa pun bisa menginap di sini.</p><p>Anak-anak 13 tahun ke atas dianggap sebagai tamu dewasa.</p><p>Pastikan umur anak yang menginap sesuai dengan detail pemesanan. Jika berbeda, tamu mungkin akan dikenakan biaya tambahan saat check-in.</p>\n<br/>\n<h4><b>Deposit</b></h4>\n<p>Tamu tidak perlu membayar deposit saat check-in.</p>\n<br/>\n<h4><b>Umur</b></h4>\n<p>Tamu umur berapa pun bisa menginap di sini.</p>\n<br/>\n<h4><b>Sarapan</b></h4>\n<p>Sarapan tersedia pukul 07:00 - 10:00 waktu lokal.</p>\n<br/>\n<h4><b>Hewan peliharaan</b></h4>\n<p>Tidak diperbolehkan membawa hewan peliharaan.</p>\n<br/>\n<h4><b>Merokok</b></h4>\n<p>Kamar bebas asap rokok.</p>\n<br/>\n<h4><b>Alkohol</b></h4>\n<p>Minuman beralkohol tidak diperbolehkan.</p>\n<br/>\n',
      checkInInstruction: '',
      specialCheckInInstruction: '',
      payUponArrival: null,
      country: {
        id: 'indonesia',
        name: 'Indonesia'
      },
      province: {
        id: 'lampung-province-108001534490301610',
        name: 'Provinsi Lampung'
      },
      city: {
        id: 'bandar-lampung-108001534490306395',
        name: 'Bandar Lampung'
      },
      area: {
        id: 'tanjung-karang-pusat-108001534490306396',
        name: 'Central Tanjung Karang'
      },
      mainImage: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/28/db084f71-dacd-4bf4-84f5-d298aec38cfd-1603888566559-ea1bf52b092d475323ff42c9c5cc028f.jpg',
      hotelProperty: 'Hotel',
      receiptReferenceId: '615b67c2aa91010510e00f6f',
      tiketPointVersion: 1
    },
    roomData: {
      id: '5b77805025a8fa6a60bc1503',
      name: 'Kamar Double atau Twin dengan Sarapan (POP! Room with Breakfast)',
      source: 'TIKET',
      breakfast: true,
      maxOccupancy: 2,
      bedType: '1 Ranjang Besar',
      smoking: 'NS',
      cancellationPolicy: 'Pembatalan gratis hingga 04 Oct 2021. Setiap pembatalan yang diajukan 3 hari sebelum tanggal check-in, akan dikenakan biaya pembatalan sebesar harga malam pertama dari total biaya menginap. Jika Anda tidak datang ke akomodasi pada tanggal check-in, Anda akan dikenakan biaya pembatalan sebesar 100%.',
      promo: 'Early Bird 5%',
      valueAdded: '',
      cancellationDetails: null,
      rateInfo: {
        currency: 'IDR',
        localCurrency: null,
        refundable: true,
        price: {
          baseRateWithTax: 378000,
          rateWithTax: 323190,
          totalBaseRateWithTax: 756000,
          totalRateWithTax: 646380
        },
        tixPoint: null,
        priceSummary: {
          total: 646380,
          totalWithoutTax: 646380,
          taxAndOtherFee: 0,
          totalCompulsory: 0,
          totalSellingRateAddOn: 0,
          totalInsurance: 0,
          net: 646380,
          originalPrice: 568815,
          markupPercentage: 0,
          markupId: [],
          surcharge: [],
          compulsory: null,
          pricePerNight: [{
            stayingDate: '2021-10-08',
            rate: 323190,
            loyaltyRate: 0
          }, {
            stayingDate: '2021-10-09',
            rate: 323190,
            loyaltyRate: 0
          }],
          totalObject: {
            label: 'Total',
            value: 646380
          },
          subsidyPrice: 0,
          subsidyId: [],
          vendorIncentive: 77565.59999999998
        },
        loyaltyMembersDeal: null
      },
      paymentType: 'pay_now',
      wifi: true,
      cancellationPolicyV2: [{
        amount: 646380,
        time: '2021-10-08T23:59:59+07:00'
      }, {
        amount: 323190,
        time: '2021-10-08T23:59:58+07:00'
      }, {
        amount: 0,
        time: '2021-10-04T23:59:58+07:00'
      }],
      paymentTypeInfo: '{\'id\':\'pay_now\',\'name\':\'\',\'subName\':\'\',\'description\':\'\',\'icon\':\'\',\'disclaimer\':\'\'}',
      mealPlanV2: {
        en: 'Breakfast (2 Pax) per room',
        id: 'Sarapan (2 Pax) per kamar'
      },
      cancellationPoliciesV3: {
        refundable: true,
        freeCancellation: false,
        html: {
          en: '<b>Cancellation & reschedule with fee</b><br>If you submit the request after <b>04 October 2021 (23:59)</b>, you will be charged IDR 323,190. <br><br><b>No refund & reschedule</b><br>If you don&#39;t show up for check-in or submit a cancellation or reschedule request on and after the check-in date: <b>08 October 2021</b>.<br><br>*The fee may change if there are Add-ons, Extra Protections, etc., or currency exchange rates.<br><br>*The time shown is based on the accommodation’s time zone.',
          id: '<b>Pembatalan & reschedule dengan biaya</b><br>Jika pengajuan dilakukan setelah <b>04 Oktober 2021 (23:59)</b>, kamu akan dikenakan biaya IDR 323.190. <br><br><b>Tidak bisa refund & reschedule</b><br>Jika kamu tidak datang saat check-in atau mengajukan pembatalan atau reschedule pada dan setelah tanggal check-in: <b>08 Oktober 2021</b>.<br><br>*Biaya pembatalan mungkin berubah jika ada tambahan Fasilitas Ekstra, Perlindungan Ekstra, dll; atau perbedaan nilai tukar mata uang.<br><br>*Waktu di atas mengikuti zona waktu di akomodasi.'
        },
        policies: [{
          charge: 646380,
          deadline: '2021-10-08T23:59:59+07:00',
          percentage: 1,
          noShowPolicy: true,
          isNoShowPolicy: true
        }, {
          charge: 323190,
          deadline: '2021-10-08T23:59:58+07:00',
          percentage: 0.5,
          noShowPolicy: false,
          isNoShowPolicy: false
        }, {
          charge: 0,
          deadline: '2021-10-04T23:59:58+07:00',
          percentage: 0,
          noShowPolicy: false,
          isNoShowPolicy: false
        }]
      }
    },
    bookingData: {
      checkInDate: '2021-10-08',
      checkOutDate: '2021-10-10',
      night: 2,
      room: 1,
      adult: 1,
      child: 0
    },
    travellerData: {
      profileId: '59734881',
      firstName: 'Fajar',
      lastName: 'Suryoko',
      idCard: null,
      title: 'Mr',
      countryId: null,
      phone: null,
      specialRequest: null
    },
    travellerDatas: [{
      profileId: '59734881',
      firstName: 'Fajar',
      lastName: 'Suryoko',
      idCard: null,
      title: 'Mr',
      countryId: null,
      phone: null,
      specialRequest: '{\'smokingPreference\':\'Bebas asap rokok\',\'connectingRoom\':null,\'highFloorRoom\':\'Lantai atas\',\'bedTypePreference\':\'1 Ranjang Besar\',\'checkIn\':null,\'checkOut\':null,\'specialRequest\':null}',
      guestNumber: 1
    }],
    contactPerson: {
      profileId: '59734881',
      firstName: 'Rika',
      lastName: 'Septianis',
      idCard: null,
      title: 'Ms',
      countryId: null,
      phone: '+6282181918972',
      email: email
    },
    totalWithoutTax: 646380,
    taxAndOtherFee: 0,
    totalWithTax: 646380,
    autoSubsidy: {
      value: 0,
      percentage: 0
    },
    expiredTime: 1633382390802,
    orderType: null,
    crossSellingSource: null,
    previousOrderId: null,
    addOns: null,
    localTotalWithTax: 0,
    localCustomerCurrency: null,
    surcharges: [],
    disclaimers: null,
    bedTypeDisclaimer: null,
    disableReviseDaysBefore: 2,
    timeZoneName: 'Asia/Jakarta',
    bookVersion: 1,
    guestInfoRevised: false,
    specialRequestRevised: false,
    orderReceipt: {
      subTotal: 646380,
      additional: [{
        title: '<div style=\'\'>Biaya Administrasi</div>',
        value: 0
      }, {
        title: '<div style=\'\'>Pajak dan Biaya Lainnya</div>',
        value: 0
      }],
      deduction: null,
      detailBox: '<div style=\'\'>*Komisi penjualan sudah termasuk PPN 10%</div>',
      itemDetails: [{
        description: '<div style=\'\'>POP! Hotel Tanjung Karang</div><div style=\' font-size: 8px; font-weight:100; color:#6b707d;\'>Kamar Double atau Twin dengan Sarapan (POP! Room with Breakfast)</div><div style=\' font-size: 8px; font-weight:100; color:#6b707d;\'>2 malam</div>',
        name: 'Hotel',
        price: 'IDR 646.380 ',
        quantity: '1',
        priceValue: 646380,
        priceType: 'BASE_PRICE',
        receiptReferenceId: '615b67c2aa91010510e00f6f'
      }]
    },
    orderDiscounts: null,
    oldOrderId: null,
    refundEstimation: null,
    orderCartInsurance: null,
    accommodationType: 'Hotel'
  };
  const addCartHotel = cartHotel(body, params);
  assertStatus(addCartHotel, 200, true, 'cartHotel');
  assertSuccessOrderHotel(addCartHotel, 'success', true, 'cartHotel');
  return addCartHotel;
};

const updateReseller = (orderData, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // IOS,ANDROID,WEB
      // eslint-disable-next-line no-undef
      requestId: `requestId_updateResellerData_${__VU}_${__ITER}_${create_updateReseller_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const updateReseller = updateResellerData(orderData.orderId, params);
  assertStatus(updateReseller, 200, true, 'updateResellerData');
  assertSuccess(updateReseller, 'SUCCESS', true, 'updateResellerData');
};
;// CONCATENATED MODULE: ./apis/order/http/travelDate.js

const travelDate = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/get-travel-date';
  return http_default().post(`${__ENV.LB_HOST}/tix-order-go/get-travel-date`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./generator/order/create_date.js





const create_date_randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const create_date_orderEmailData = parseCSV('orderEmail', 'data/orderEmail.csv');
const generatorFour = () => {
  const data = create_date_orderEmailData[Math.floor(Math.random() * create_date_orderEmailData.length)];
  const email = data[0];
  const createOrderFlight = create_date_addCartFlight(email);
  dateTravel(createOrderFlight.json('data'), email);
  const createOrderTrain = addCartTrain(email);
  dateTravel(createOrderTrain.json('data'), email);
};

const addCartTrain = email => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_cartTrain_${__VU}_${__ITER}_${create_date_randomUUID}`,
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
    generalInfo: {
      customerName: 'Erlita Metasari Febrianti',
      phoneNumber: '+6287887077780',
      currency: 'IDR',
      userLogin: '1',
      userLang: 'id',
      source: 'microservice'
    },
    contactPerson: {
      firstName: 'Erlita Metasari Febrianti',
      lastName: '',
      title: 'Nyonya',
      phone: '+6287887077780',
      email: email
    },
    orderCart: {
      customerCurrency: 'IDR',
      fromEmail: email,
      mobilePhone: '+6287887077780',
      userLang: 'id'
    },
    orderCartDetail: [{
      orderType: 'train',
      orderMasterID: '80572',
      orderName: 'GMR (Gambir) - SBI (Surabaya Pasarturi)',
      orderNameDetail: 'ARGO BROMO ANGGREK 4 (Executive)',
      serviceRate: 0,
      serviceFix: 0,
      sellingCurrency: 'IDR',
      sellingPrice: 507500,
      customerCurrency: 'IDR',
      customerPrice: 507500,
      currencyExchangeRate: 1,
      orderExpiredDateTime: '2021-10-06 05:42:06',
      contactPerson: 0,
      ref: 'https://www.tiket.com/ms-gateway/tix-train-trx/orders',
      commision: 0,
      orderCartTrain: {
        numCode: '212417327954505',
        // eslint-disable-next-line no-undef
        bookCode: `bookCode_${__VU}_${__ITER}_${create_date_randomUUID}`,
        trainFrom: 'GMR',
        trainTo: 'SBI',
        trainNo: '4',
        trainFromDetail: 'Gambir',
        trainToDetail: 'Surabaya Pasarturi',
        trainName: 'ARGO BROMO ANGGREK',
        trainClass: 'EKS',
        trainSubclass: 'H',
        countAdult: 1,
        countChild: 0,
        countInfant: 0,
        netAdultPrice: 500000,
        netAdultCurrency: 'IDR',
        netChildPrice: 0,
        netChildCurrency: 'IDR',
        netInfantPrice: 0,
        netInfantCurrency: 'IDR',
        sellAdultPrice: 500000,
        sellAdultCurrency: 'IDR',
        sellChildPrice: 0,
        sellChildCurrency: 'IDR',
        sellInfantPrice: 0,
        sellInfantCurrency: 'IDR',
        extraFeePrice: 7500,
        extraFeeCurrency: 'IDR',
        affiliateFee: 0,
        customerPriceTotal: 500000,
        customerPriceCurrency: 'IDR',
        customerPriceTotalGross: 500000,
        customerPriceTotalGrossCurrency: 'IDR',
        discountPrice: 0,
        arrivalDatetime: '2021-10-13 04:45',
        departureDatetime: '2021-10-12 20:35',
        contactTitle: 'Nyonya',
        contactEmail: email,
        contactFirstName: 'Erlita Metasari Febrianti',
        contactLastName: '',
        contactPhone: '+6287887077780',
        tiketSeating: 'EKS-1-3-A',
        ticketStatus: 'booked',
        linkRebookClick: 'never',
        lastUpdate: '2021-10-06 04:50:18',
        rebookingBankTransfer: 0,
        hasUpdatePax: 1,
        hasCancelBySystem: 0,
        timeCancelBySystem: '2021-10-06 05:42:06',
        dotaKaiNote: 'OW',
        bookExpireDatetime: '2021-10-06 05:57:06',
        // eslint-disable-next-line no-undef
        msBookingId: `msBookingId_${__VU}_${__ITER}_${create_date_randomUUID}`,
        orderTravellerTrain: [{
          profileId: null,
          type: 'adult',
          gender: 'F',
          fullName: 'Erlita Metasari Febrianti',
          salutation: 'Nyonya',
          birthdate: null,
          phone: null,
          idCard: '3175025202790008',
          lastUpdate: '2021-10-06 04:50:18',
          seatNumber: 'EKS-1-3-A'
        }]
      },
      orderCartInsurances: [],
      receiptReferenceId: '615cc898c3ced91592fbc427',
      tiketPointVersion: 2
    }],
    orderReceipt: {
      subtotal: 500000,
      additional: [{
        title: '<div style=\'\'>Biaya Layanan Penumpang</div>',
        value: 7500
      }],
      deduction: null,
      detailBox: '<div style=\'\'>*Komisi penjualan sudah termasuk PPN sebesar 10%</div>',
      itemDetails: [{
        name: 'Kereta',
        description: '<div style=\'\'>Argo Bromo Anggrek 4 (GMR-SBI)</div><div style=\' font-size: 8px; font-weight:100; color:#888888;\'>Kode Booking 31C4IF5</div>',
        price: '',
        quantity: '',
        priceValue: null,
        priceType: null,
        receiptReferenceId: '615cc898c3ced91592fbc427'
      }, {
        name: '',
        description: '<div style=\'\'>Dewasa</div>',
        price: 'IDR 500.000',
        quantity: '1',
        priceValue: 500000,
        priceType: 'BASE_PRICE',
        receiptReferenceId: '615cc898c3ced91592fbc427'
      }, {
        name: '',
        description: '<div style=\'\'>Bayi</div>',
        price: 'IDR 0',
        quantity: '0',
        priceValue: 0,
        priceType: 'BASE_PRICE',
        receiptReferenceId: '615cc898c3ced91592fbc427'
      }]
    }
  };
  const addCartTrain = cartTrain(body, params);
  assertStatus(addCartTrain, 200, true, 'cartTrain');
  assertSuccess(addCartTrain, 'SUCCESS', true, 'cartTrain');
  return addCartTrain;
};

const create_date_addCartFlight = email => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_cartFlight_${__VU}_${__ITER}_${create_date_randomUUID}`,
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
      customerCurrency: 'IDR',
      fromEmail: email,
      mobilePhone: '+6282225265676',
      userLang: 'id',
      resellerID: '0'
    },
    orderCartDetail: [{
      orderType: 'flight',
      orderName: 'YIA (Yogyakarta - Yogyakarta Kulon Progo) - BTH (Batam - Hang Nadim) ',
      orderNameDetail: 'LION AIR (JT 735/JT 372 depart)',
      serviceRate: 0,
      serviceFix: 0,
      sellingCurrency: 'IDR',
      sellingPrice: 844500,
      customerCurrency: 'IDR',
      customerPrice: 844500,
      currencyExchangeRate: 1,
      orderExpiredDateTime: '2021-10-05 06:04:44',
      contactPerson: 0,
      ref: '73a692cf-1a44-4937-b40b-10986dd71afe',
      orderCartFlight: {
        flightDate: '2021-10-06 11:45',
        flightNumber: 'JT 735/JT 372',
        serviceClass: 'ECONOMY',
        trip: 'trip',
        airlinesMasterId: '20864',
        airlinesName: 'LION',
        departureAirportId: 32570625,
        departureCity: 'YIA',
        departureTime: '2021-10-06 11:45',
        departureTz: '7.0',
        arrivalAirportId: 20354,
        arrivalCity: 'BTH',
        arrivalTime: '2021-10-06 17:00',
        arrivalTz: '7.0',
        ticketClass: 'X',
        countAdult: 1,
        countChild: 0,
        countInfant: 0,
        type: 'local',
        flightInfoJSON: '[{\'flight_no\':\'JT 735\',\'dep_airport\':\'YIA\',\'arr_airport\':\'CGK\',\'dep_airport_name\':\'Yogyakarta Kulon Progo\',\'arr_airport_name\':\'Soekarno Hatta\',\'dep_city_code\':\'JOGC\',\'arr_city_code\':\'JKTC\',\'dep_city_name\':\'Yogyakarta\',\'arr_city_name\':\'Jakarta\',\'dep_time_full\':\'2021-10-06 11:45\',\'arr_time_full\':\'2021-10-06 12:55\',\'dep_timezone\':7.0,\'arr_timezone\':7.0,\'class\':\'X\',\'is_promo\':0,\'stop\':0,\'operating_carrier\':\'JT 735\',\'marketing_airline\':\'JT\',\'departure_terminal\':\'1 Domestik\',\'arrival_terminal\':\'2E Domestik\',\'bundling_meal\':false,\'bundling_baggage\':false,\'connecting_time\':0,\'inclusive_baggages\':[{\'unit\':20,\'measurement\':\'kg\'}],\'dep_visa_required\':false,\'arr_visa_required\':false,\'tags\':[\'GV To Do 50K\',\'PCR 380k/Antigen 35k\',\'TIKET_CLEAN\',\'FREE_PROTECTION\'],\'flexi\':false,\'benefits\':[],\'penalty_info\':true,\'departure_airport_name\':\'Yogyakarta Kulon Progo\',\'arrival_airport_name\':\'Soekarno Hatta\',\'departure_country_name\':\'Indonesia\',\'arrival_country_name\':\'Indonesia\',\'departure_city_name\':\'Yogyakarta\',\'arrival_city_name\':\'Jakarta\'},{\'flight_no\':\'JT 372\',\'dep_airport\':\'CGK\',\'arr_airport\':\'BTH\',\'dep_airport_name\':\'Soekarno Hatta\',\'arr_airport_name\':\'Hang Nadim\',\'dep_city_code\':\'JKTC\',\'arr_city_code\':\'BTHC\',\'dep_city_name\':\'Jakarta\',\'arr_city_name\':\'Batam\',\'dep_time_full\':\'2021-10-06 15:15\',\'arr_time_full\':\'2021-10-06 17:00\',\'dep_timezone\':7.0,\'arr_timezone\':7.0,\'class\':\'V\',\'is_promo\':0,\'stop\':0,\'operating_carrier\':\'JT 372\',\'marketing_airline\':\'JT\',\'departure_terminal\':\'2D Domestik\',\'arrival_terminal\':\'1 Domestik\',\'bundling_meal\':false,\'bundling_baggage\':false,\'connecting_time\':0,\'inclusive_baggages\':[{\'unit\':20,\'measurement\':\'kg\'}],\'dep_visa_required\':false,\'arr_visa_required\':false,\'tags\':[\'GV To Do 50K\',\'PCR 380k/Antigen 35k\',\'TIKET_CLEAN\',\'FREE_PROTECTION\'],\'flexi\':false,\'benefits\':[],\'penalty_info\':true,\'departure_airport_name\':\'Soekarno Hatta\',\'arrival_airport_name\':\'Hang Nadim\',\'departure_country_name\':\'Indonesia\',\'arrival_country_name\':\'Indonesia\',\'departure_city_name\':\'Jakarta\',\'arrival_city_name\':\'Batam\'}]',
        via: 'CGK',
        priceCurrency: 'IDR',
        priceAdult: 844500,
        priceChild: 0,
        priceInfant: 0,
        priceTotal: 844500,
        priceNta: 832400,
        balanceDue: 844500,
        baseFareAdult: 645000,
        baseFareChild: 0,
        baseFareInfant: 0,
        fareInfoJson: '{\'adult\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'base_fare\':645000.0,\'original_base_fare\':645000.0,\'nta\':832400.0,\'commission\':0.0,\'original_commission\':0.0,\'original_commission_value\':0.0,\'commission_value\':0.0,\'commission_percentage\':0.0,\'original_currency\':\'IDR\',\'tax\':199500.0,\'agent_fee\':0.0,\'airport_tax\':0.0,\'unidentified\':0.0,\'admin_fee\':0.0},\'child\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'base_fare\':0.0,\'original_base_fare\':0.0,\'nta\':0.0,\'commission\':0.0,\'original_commission\':0.0,\'original_commission_value\':0.0,\'commission_value\':0.0,\'commission_percentage\':0.0,\'original_currency\':\'IDR\',\'tax\':0.0,\'agent_fee\':0.0,\'airport_tax\':0.0,\'unidentified\':0.0,\'admin_fee\':0.0},\'infant\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'base_fare\':0.0,\'original_base_fare\':0.0,\'nta\':0.0,\'commission\':0.0,\'original_commission\':0.0,\'original_commission_value\':0.0,\'commission_value\':0.0,\'commission_percentage\':0.0,\'original_currency\':\'IDR\',\'tax\':0.0,\'agent_fee\':0.0,\'airport_tax\':0.0,\'unidentified\':0.0,\'admin_fee\':0.0}}',
        customerPriceCurrency: 'IDR',
        customerPriceAdult: 844500,
        customerPriceChild: 0,
        customerPriceInfant: 0,
        customerPriceTotal: 844500,
        tax: 199500,
        airlinesFee: 0,
        airlineFeeCurrency: 'IDR',
        baggageFee: 0,
        baggageFeeCurrency: 'IDR',
        mealFee: 0,
        mealFeeCurrency: 'IDR',
        contactTitle: 'Mr',
        contactEmail: email,
        contactFirstName: 'Akkbar Qurbani',
        contactLastName: 'Kusuma',
        contactPhone: '+6282225265676',
        contactPhoneCode: '62',
        contactOtherPhone: '+6282225265676',
        flightRef: '0',
        airlinesAccountId: null,
        bookingCode: 'RDDGSH',
        bookExpireDateTime: '2021-10-05 07:49:00',
        account: 'tiketcomLionVedaleon',
        vendor: 'na',
        referenceNumber: '',
        additionalData: {},
        orderDetailIdBefore: null,
        connectingGroup: null,
        hasInsurance: 1,
        logReference: null,
        orderFrom: 'microservice',
        commission: {
          total: 0,
          breakdownJson: '{\'total_adult_comission\':0.0,\'total_child_comission\':0.0,\'total_infant_comission\':0.0}'
        },
        orderCartFlightSegment: [{
          trip: 'depart',
          flightNumber: 'JT 735/JT 372',
          airlinesMasterId: '20864',
          airlinesName: 'LION',
          departureAirportId: 32570625,
          departureCity: 'YIA',
          departureTime: '2021-10-06 11:45',
          departureTimeZone: '7.0',
          arrivalAirportId: 20354,
          arrivalCity: 'BTH',
          arrivalTime: '2021-10-06 17:00',
          arrivalTimeZone: '7.0',
          serviceClass: 'ECONOMY',
          flightDate: '2021-10-06',
          priceCurrency: 'IDR',
          priceAdult: 844500,
          priceChild: 0,
          priceInfant: 0,
          priceTotal: 844500,
          flightInfoJson: '[{\'flight_no\':\'JT 735\',\'dep_airport\':\'YIA\',\'arr_airport\':\'CGK\',\'dep_airport_name\':\'Yogyakarta Kulon Progo\',\'arr_airport_name\':\'Soekarno Hatta\',\'dep_city_code\':\'JOGC\',\'arr_city_code\':\'JKTC\',\'dep_city_name\':\'Yogyakarta\',\'arr_city_name\':\'Jakarta\',\'dep_time_full\':\'2021-10-06 11:45\',\'arr_time_full\':\'2021-10-06 12:55\',\'dep_timezone\':7.0,\'arr_timezone\':7.0,\'class\':\'X\',\'is_promo\':0,\'stop\':0,\'operating_carrier\':\'JT 735\',\'marketing_airline\':\'JT\',\'departure_terminal\':\'1 Domestik\',\'arrival_terminal\':\'2E Domestik\',\'bundling_meal\':false,\'bundling_baggage\':false,\'connecting_time\':0,\'inclusive_baggages\':[{\'unit\':20,\'measurement\':\'kg\'}],\'dep_visa_required\':false,\'arr_visa_required\':false,\'tags\':[\'GV To Do 50K\',\'PCR 380k/Antigen 35k\',\'TIKET_CLEAN\',\'FREE_PROTECTION\'],\'flexi\':false,\'benefits\':[]},{\'flight_no\':\'JT 372\',\'dep_airport\':\'CGK\',\'arr_airport\':\'BTH\',\'dep_airport_name\':\'Soekarno Hatta\',\'arr_airport_name\':\'Hang Nadim\',\'dep_city_code\':\'JKTC\',\'arr_city_code\':\'BTHC\',\'dep_city_name\':\'Jakarta\',\'arr_city_name\':\'Batam\',\'dep_time_full\':\'2021-10-06 15:15\',\'arr_time_full\':\'2021-10-06 17:00\',\'dep_timezone\':7.0,\'arr_timezone\':7.0,\'class\':\'V\',\'is_promo\':0,\'stop\':0,\'operating_carrier\':\'JT 372\',\'marketing_airline\':\'JT\',\'departure_terminal\':\'2D Domestik\',\'arrival_terminal\':\'1 Domestik\',\'bundling_meal\':false,\'bundling_baggage\':false,\'connecting_time\':0,\'inclusive_baggages\':[{\'unit\':20,\'measurement\':\'kg\'}],\'dep_visa_required\':false,\'arr_visa_required\':false,\'tags\':[\'GV To Do 50K\',\'PCR 380k/Antigen 35k\',\'TIKET_CLEAN\',\'FREE_PROTECTION\'],\'flexi\':false,\'benefits\':[]}]',
          baseFareAdult: 645000,
          baseFareChild: 0,
          baseFareInfant: 0,
          fareInfoJson: '{\'adult\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'base_fare\':645000.0,\'original_base_fare\':645000.0,\'nta\':832400.0,\'commission\':0.0,\'original_commission\':0.0,\'original_commission_value\':0.0,\'commission_value\':0.0,\'commission_percentage\':0.0,\'original_currency\':\'IDR\',\'tax\':199500.0,\'agent_fee\':0.0,\'airport_tax\':0.0,\'unidentified\':0.0,\'admin_fee\':0.0},\'child\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'base_fare\':0.0,\'original_base_fare\':0.0,\'nta\':0.0,\'commission\':0.0,\'original_commission\':0.0,\'original_commission_value\':0.0,\'commission_value\':0.0,\'commission_percentage\':0.0,\'original_currency\':\'IDR\',\'tax\':0.0,\'agent_fee\':0.0,\'airport_tax\':0.0,\'unidentified\':0.0,\'admin_fee\':0.0},\'infant\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'base_fare\':0.0,\'original_base_fare\':0.0,\'nta\':0.0,\'commission\':0.0,\'original_commission\':0.0,\'original_commission_value\':0.0,\'commission_value\':0.0,\'commission_percentage\':0.0,\'original_currency\':\'IDR\',\'tax\':0.0,\'agent_fee\':0.0,\'airport_tax\':0.0,\'unidentified\':0.0,\'admin_fee\':0.0}}',
          subPriceIDR: 0,
          via: 'CGK',
          class: 'X'
        }],
        orderCartFlightPassenger: [{
          profileId: '58813110',
          paxNumber: 10000,
          title: 'Mr',
          firstName: 'Akkbar Qurbani',
          lastName: 'Kusuma',
          originalFirstName: 'Akkbar Qurbani',
          originalLastName: 'Kusuma',
          type: 'adult',
          birthDate: null,
          passportExpiry: null,
          passportIssuedDate: null,
          passportIssuingCountry: null,
          passportNo: null,
          passportNationality: 'ID',
          idNumber: null,
          adultIndex: null,
          checkInBaggage: '20 kg',
          checkInBaggageSize: 20,
          checkInBaggageReturn: null,
          checkInBaggageSizeReturn: 0,
          checkInBaggageJson: '[{\'origin\':\'YIA\',\'destination\':\'BTH\',\'flight_number\':\'JT 735\',\'unit\':\'0\',\'measurement\':\'kg\'}]',
          checkInBaggageReturnJson: null,
          addOnsMealJson: '[]',
          addonsMealReturnJson: null,
          addOnsSeatJson: '[]',
          addonsSeatReturnJson: null,
          paxInsurance: null,
          paxCancelInsurance: null,
          pax_addons: [{
            addons_type: 'BAGGAGE',
            addons_depart_json: '[{\'origin\':\'YIA\',\'destination\':\'BTH\',\'flight_number\':\'JT 735\',\'unit\':\'0\',\'measurement\':\'kg\'}]',
            addons_return_json: null,
            created_at: 1633380584358,
            updated_at: 1633380584358
          }, {
            addons_type: 'MEAL',
            addons_depart_json: '[]',
            addons_return_json: null,
            created_at: 1633380584358,
            updated_at: 1633380584358
          }, {
            addons_type: 'SEAT',
            addons_depart_json: '[]',
            addons_return_json: null,
            created_at: 1633380584358,
            updated_at: 1633380584358
          }]
        }],
        orderCartFlightInformationJson: null,
        orderCartInformations: [{
          type: 'trip',
          valueJson: '[{\'origin\':\'YIA\',\'destination\':\'CGK\',\'flight_number\':\'JT 735\',\'facilities\':{\'averageDepartureDelayTime\':{\'icon\':null,\'value\':\'9\'},\'aircraft\':{\'icon\':null,\'value\':\'Boeing 737-900\'},\'seatPitch\':{\'icon\':\'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/string/2020/12/15/e8296c66-0a59-4c44-9523-f243902b4f93-1582621686870-f1331ceacff4618cfefae5deac68cfd7.png\',\'value\':\'73.0 cm\'},\'seatWidth\':{\'icon\':\'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/string/2020/12/15/ed522379-6ee9-4af0-9a87-5d902a8b0578-1582621839856-739930938017c7bf4742d92617b70c82.png\',\'value\':\'43.0 cm\'},\'seatTilt\':{\'icon\':\'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/string/2020/12/15/fa67d55a-0f7b-4028-9c7a-1de189bdc347-1582621963088-f2b6d666ab5a0d0f7e9b37ae2f69c966.png\',\'value\':\'90.0°\'}}},{\'origin\':\'CGK\',\'destination\':\'BTH\',\'flight_number\':\'JT 372\',\'facilities\':{\'averageDepartureDelayTime\':{\'icon\':null,\'value\':\'18\'},\'aircraft\':{\'icon\':null,\'value\':\'Boeing 737-800\'},\'seatPitch\':{\'icon\':\'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/string/2020/12/15/e8296c66-0a59-4c44-9523-f243902b4f93-1582621686870-f1331ceacff4618cfefae5deac68cfd7.png\',\'value\':\'78.0 cm\'},\'seatWidth\':{\'icon\':\'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/string/2020/12/15/ed522379-6ee9-4af0-9a87-5d902a8b0578-1582621839856-739930938017c7bf4742d92617b70c82.png\',\'value\':\'43.0 cm\'},\'seatTilt\':{\'icon\':\'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/string/2020/12/15/fa67d55a-0f7b-4028-9c7a-1de189bdc347-1582621963088-f2b6d666ab5a0d0f7e9b37ae2f69c966.png\',\'value\':\'90.0°\'}}}]'
        }, {
          type: 'store_id',
          valueJson: 'TIKETCOM'
        }, {
          type: 'channel_id',
          valueJson: 'ANDROID'
        }, {
          type: 'reseller_id',
          valueJson: '0'
        }, {
          type: 'order_from',
          valueJson: 'preorder'
        }, {
          type: 'gift_voucher',
          valueJson: '{\'depart\':{\'origin\':\'YIA\',\'destination\':\'BTH\',\'departure_date\':1633478400000,\'departure_periods\':{\'start_date\':\'2021-10-01\',\'end_date\':\'2021-12-30\'},\'issuance_periods\':{\'start_date\':\'2021-10-01\',\'end_date\':\'2021-10-31\'},\'bundling_facilities\':[{\'type\':\'GV To Do 50K\',\'description\':\'GV To Do 50K\',\'applicability\':\'ALL_PAX\',\'send_gift_voucher\':true,\'gift_voucher\':{\'currency\':\'IDR\',\'discount_amount\':50000.0,\'discount_percentage\':0.0,\'discount_type\':\'AMOUNT\',\'adjustment_code\':\'GV_50K_TTD_DOMFLIGHT\',\'maximum_voucher_amount\':0.0,\'minimum_transaction_amount\':200000.0,\'purpose\':\'CAMPAIGN\',\'gv_key\':\'d8c6246bc1b5e23bf0b0c37fef9e81d9aee4de65f89fd5b974673b65602cc834\',\'valid_from_date\':1633021200000,\'valid_until_date\':1640969999000,\'email_template_key\':\'flight_ttd_gv_50k\',\'validity_restrictions\':[\'EVENT\'],\'voucher_type\':\'ELECTRONIC\'}},{\'type\':\'PCR 380k/Antigen 35k\',\'description\':\'Harga spesial Swab PCR/Rapid Antigen untuk setiap pembelian tiket Lion Group.\',\'applicability\':\'ALL_PAX\',\'send_gift_voucher\':false,\'gift_voucher\':null},{\'type\':\'FREE_PROTECTION\',\'description\':\'Free Protection\',\'applicability\':\'ALL_PAX\',\'send_gift_voucher\':false,\'gift_voucher\':null}]}}'
        }],
        hashInfo: {
          bookingCode: 'RDDGSH',
          hash: 'H4sIAAAAAAAAAG2OUWrDMBAFD1S2SJtKLoZAbxLW8kZRZO2mshTw7ePkK5T+zryBRzlPVH97nUhS7msvBPRi+ScWSstn0AIfHr8R0aF3fvBQKv2TmRwBoKXMbW+WpHLnmRZWuTYOKlo2mFRzkhh05mOd57he4NqGg4MtERq0YA0Yb+345SDE/IZwdG7fHgb8I9xoHUzt8oaG0RhIsvZKEvjYame4sdDStlOSs0J4fpPEuz2dmR+OOVD5BQEAAA==',
          rules: [{
            airlines: [],
            timeRange: 172800,
            timeType: 'SECOND',
            action: 'NONE'
          }]
        },
        seatFee: 0,
        seatFeeCurrency: 'IDR',
        departureAirportName: 'Yogyakarta Kulon Progo',
        arrivalAirportName: 'Hang Nadim',
        subPriceIDR: 0
      },
      orderDiscounts: null,
      orderCartInsurance: null,
      orderCartCancelInsurance: null,
      orderCartBundlingAddons: {
        orderName: null,
        orderNameDetail: null,
        productName: null,
        sellingCurrency: null,
        sellingPrice: 0,
        customerCurrency: null,
        customerPrice: 0,
        orderExpiredDateTime: null,
        priceValue: 0,
        priceCurrency: null,
        paramJson: null,
        orderCartBundlingAddonsPassengers: null,
        addonsRequests: null
      },
      insuranceBookingRequest: {
        contact: {
          title: 'mr',
          firstName: 'Akkbar Qurbani',
          lastName: 'Kusuma',
          dob: null,
          email: email,
          phoneCode: null,
          phone: '+6282225265676'
        },
        bookRequests: [{
          productCode: 'FLGBP-13',
          productType: 'INSURANCE',
          qty: 1,
          dateFrom: 1633495500000,
          dateTo: 1633499700000,
          bookData: {
            general: {
              originAirport: 'YIA',
              endDepartureTime: '11:45',
              startDepartureTime: '11:45',
              originCountry: 'ID',
              airline: 'JT',
              destinationCountry: 'ID',
              routeType: 'ONEWAY'
            },
            paxes: [{
              originalLastName: 'Kusuma',
              lastName: 'Kusuma',
              originalFirstName: 'Akkbar Qurbani',
              identityExpiryDate: null,
              gender: 'male',
              title: 'mr',
              type: 'ADULT',
              firstName: 'Akkbar Qurbani',
              frequentFlyer: null,
              phoneNumber: null,
              nationality: 'ID',
              identityNumber: null,
              dob: null,
              profileId: '58813110',
              issuingCountry: null,
              phoneCode: null,
              paxNumber: '10000'
            }],
            additionalData: {
              flightType: 'ONE_WAY',
              DETAIL: '{\'distributionType\':\'lionVedaleon\',\'account\':{\'name\':\'lionVedaleon\',\'code\':\'tiketcomLionVedaleon\'},\'bookingCode\':\'RDDGSH\',\'bookingExpired\':\'2021-10-05 07:49:00\',\'invoiceNumber\':null,\'logId\':null,\'currency\':\'IDR\',\'originalCurrency\':\'IDR\',\'bookingFare\':{\'balanceDue\':844500.0,\'bookedFare\':844500.0,\'fare\':844500.0,\'adultFare\':844500.0,\'childFare\':0.0,\'infantFare\':0.0,\'commission\':12100.0,\'commissionPercent\':0.01,\'nta\':832400.0,\'agentFee\':0.0,\'ssrFee\':{\'ssrFare\':0.0,\'baggageFare\':0.0,\'mealsFare\':0.0,\'seatsFare\':0.0,\'ssrItineraries\':[{\'ssrPaxMeals\':null,\'ssrPaxSeats\':null,\'ssrPaxBaggages\':[{\'paxNumber\':10000,\'ssrBaggagesLegs\':[{\'departure\':\'YIA\',\'arrival\':\'CGK\',\'weightType\':\'KG\',\'weight\':0,\'fare\':0.0,\'success\':true},{\'departure\':\'CGK\',\'arrival\':\'BTH\',\'weightType\':\'KG\',\'weight\':0,\'fare\':0.0,\'success\':true}]}]}]},\'incentive\':0.0,\'upselling\':0.0,\'voucher\':0.0,\'voucherCode\':null,\'markup\':0.0,\'privateMarkup\':0.0,\'fareExcludeSsr\':844500.0,\'discount\':0.0,\'discountCode\':null},\'originalBookingFare\':{\'balanceDue\':844500.0,\'bookedFare\':844500.0,\'fare\':844500.0,\'adultFare\':844500.0,\'childFare\':0.0,\'infantFare\':0.0,\'commission\':12100.0,\'commissionPercent\':0.01,\'nta\':832400.0,\'agentFee\':0.0,\'ssrFee\':{\'ssrFare\':0.0,\'baggageFare\':0.0,\'mealsFare\':0.0,\'seatsFare\':0.0,\'ssrItineraries\':[{\'ssrPaxMeals\':null,\'ssrPaxSeats\':null,\'ssrPaxBaggages\':[{\'paxNumber\':10000,\'ssrBaggagesLegs\':[{\'departure\':\'YIA\',\'arrival\':\'CGK\',\'weightType\':\'KG\',\'weight\':0,\'fare\':0.0,\'success\':true},{\'departure\':\'CGK\',\'arrival\':\'BTH\',\'weightType\':\'KG\',\'weight\':0,\'fare\':0.0,\'success\':true}]}]}]},\'incentive\':0.0,\'upselling\':0.0,\'voucher\':0.0,\'voucherCode\':null,\'markup\':0.0,\'privateMarkup\':0.0,\'fareExcludeSsr\':844500.0,\'discount\':0.0,\'discountCode\':null},\'itineraries\':[{\'international\':0,\'currency\':\'IDR\',\'originalCurrency\':\'IDR\',\'fare\':844500.0,\'adultFare\':844500.0,\'childFare\':0.0,\'infantFare\':0.0,\'originalFare\':844500.0,\'originalAdultFare\':844500.0,\'originalChildFare\':0.0,\'originalInfantFare\':0.0,\'adult\':1,\'child\':0,\'infant\':0,\'cabinClass\':\'ECONOMY\',\'schedules\':[{\'departureDate\':\'2021-10-06 11:45\',\'arrivalDate\':\'2021-10-06 12:55\',\'operatingAirline\':{\'code\':\'JT\',\'number\':\'735\'},\'departureTerminal\':\'\',\'arrivalTerminal\':\'\',\'fareBasisCodes\':{\'adult\':\'XOW\',\'child\':\'\',\'infant\':\'\'},\'fareBasisCode\':null,\'fareClass\':\'X\',\'origin\':\'YIA\',\'destination\':\'CGK\',\'marketingAirline\':\'JT\',\'marketingFlightNumber\':\'735\',\'baggage\':null,\'stopQuantity\':\'0\',\'aircraftType\':\'737-900ER\',\'marriageGroup\':null,\'supplierBookingCode\':null,\'connectings\':[],\'departureTimezone\':7,\'departureTimeZoneDaylightSaving\':7.0,\'arrivalTimezone\':7,\'arrivalTimeZoneDaylightSaving\':7.0,\'isPromo\':0},{\'departureDate\':\'2021-10-06 15:15\',\'arrivalDate\':\'2021-10-06 17:00\',\'operatingAirline\':{\'code\':\'JT\',\'number\':\'372\'},\'departureTerminal\':\'\',\'arrivalTerminal\':\'\',\'fareBasisCodes\':{\'adult\':\'VOW\',\'child\':\'\',\'infant\':\'\'},\'fareBasisCode\':null,\'fareClass\':\'V\',\'origin\':\'CGK\',\'destination\':\'BTH\',\'marketingAirline\':\'JT\',\'marketingFlightNumber\':\'372\',\'baggage\':null,\'stopQuantity\':\'0\',\'aircraftType\':\'737-800\',\'marriageGroup\':null,\'supplierBookingCode\':null,\'connectings\':[],\'departureTimezone\':7,\'departureTimeZoneDaylightSaving\':7.0,\'arrivalTimezone\':7,\'arrivalTimeZoneDaylightSaving\':7.0,\'isPromo\':0}],\'markupInfo\':null,\'breakdownInfo\':{\'adult\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':645000.0,\'originalBaseFare\':645000.0,\'nta\':832400.0,\'commission\':12100.0,\'fare\':844500.0,\'tax\':199500.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'child\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':0.0,\'originalBaseFare\':0.0,\'nta\':0.0,\'commission\':0.0,\'fare\':0.0,\'tax\':0.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'infant\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':0.0,\'originalBaseFare\':0.0,\'nta\':0.0,\'commission\':0.0,\'fare\':0.0,\'tax\':0.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'baggage\':0.0,\'originalAdult\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':645000.0,\'originalBaseFare\':645000.0,\'nta\':832400.0,\'commission\':12100.0,\'fare\':844500.0,\'tax\':199500.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'originalChild\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':0.0,\'originalBaseFare\':0.0,\'nta\':0.0,\'commission\':0.0,\'fare\':0.0,\'tax\':0.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'originalInfant\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':0.0,\'originalBaseFare\':0.0,\'nta\':0.0,\'commission\':0.0,\'fare\':0.0,\'tax\':0.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'originalBaggage\':0.0}}],\'passengerFareInfo\':{\'adult\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':645000.0,\'originalBaseFare\':645000.0,\'nta\':832400.0,\'commission\':12100.0,\'fare\':844500.0,\'tax\':199500.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'child\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':0.0,\'originalBaseFare\':0.0,\'nta\':0.0,\'commission\':0.0,\'fare\':0.0,\'tax\':0.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'infant\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':0.0,\'originalBaseFare\':0.0,\'nta\':0.0,\'commission\':0.0,\'fare\':0.0,\'tax\':0.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'baggage\':0.0,\'originalAdult\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':645000.0,\'originalBaseFare\':645000.0,\'nta\':832400.0,\'commission\':12100.0,\'fare\':844500.0,\'tax\':199500.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'originalChild\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':0.0,\'originalBaseFare\':0.0,\'nta\':0.0,\'commission\':0.0,\'fare\':0.0,\'tax\':0.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'originalInfant\':{\'psc\':0.0,\'iwjr\':0.0,\'discount\':0.0,\'baseFare\':0.0,\'originalBaseFare\':0.0,\'nta\':0.0,\'commission\':0.0,\'fare\':0.0,\'tax\':0.0,\'agentFee\':0.0,\'markup\':0.0,\'privateMarkup\':0.0},\'originalBaggage\':0.0},\'transactionId\':null,\'bookingDate\':\'2021-10-05 03:49:43\'}'
            },
            priceBreakdown: {
              INFANT: {
                price: 0,
                basePrice: 0,
                nta: 0,
                tax: 0,
                commission: 0
              },
              CHILD: {
                price: 0,
                basePrice: 0,
                nta: 0,
                tax: 0,
                commission: 0
              },
              ADULT: {
                price: 645000,
                basePrice: 645000,
                nta: 832400,
                tax: 199500,
                commission: 0
              }
            },
            totalPrice: {
              price: 844500,
              basePrice: 844500,
              nta: 832400,
              tax: 199500,
              commission: 12100
            }
          }
        }],
        currency: 'IDR',
        timeLimit: '2021-10-05 06:04:44'
      },
      bookingNo: 'RDDGSH',
      productCode: null,
      orderMasterID: '20864',
      resellerID: '0'
    }, {
      orderType: 'insurance',
      orderName: 'Free Protection',
      orderNameDetail: 'LION JT 735/JT 372 YIA-BTH',
      serviceRate: 0,
      serviceFix: 0,
      sellingCurrency: 'IDR',
      sellingPrice: 0,
      customerCurrency: 'IDR',
      customerPrice: 0,
      currencyExchangeRate: 0,
      orderExpiredDateTime: '2021-10-05 06:04:44',
      contactPerson: 0,
      ref: null,
      orderCartFlight: null,
      orderDiscounts: null,
      orderCartInsurance: {
        orderMasterId: '32545216',
        orderName: 'FLGBP-13',
        orderNameDetail: 'Free Protection',
        serviceRate: 0,
        serviceFix: 0,
        sellingCurrency: 'IDR',
        sellingPrice: 0,
        customerCurrency: 'IDR',
        customerPrice: 0,
        currencyExchangeRate: 1,
        orderExpiredDateTime: '2021-10-05 07:49:44',
        priceValue: 0,
        priceCurrency: 'IDR',
        commissionType: 'percentage',
        commissionTotal: 0,
        paramJson: '{\'config_id\':5,\'insurance_master_id\':32545216,\'order_type\':\'FLIGHT\',\'trip_type\':\'ONEWAY\',\'type\':\'LOCAL\',\'price\':0.0,\'price_currency\':\'IDR\',\'code\':\'5\',\'insurance_name\':\'Free Protection\',\'is_active\':\'1\',\'depart_from\':\'indonesia\',\'commission_type\':\'PERCENTAGE\',\'commission_value\':0.0,\'total_trip\':\'1\',\'pax_count\':1.0,\'details\':null,\'price_string\':\'IDR 0,00\',\'total_price\':0.0,\'total_price_string\':\'IDR 0,00\',\'customer_currency\':\'IDR\',\'price_customer\':0.0,\'price_customer_string\':\'IDR 0,00\',\'total_price_customer\':0.0,\'total_price_customer_string\':\'IDR 0,00\',\'product_name\':[{\'lang\':\'ID\',\'content\':\'Free Protection\',\'contentOfDrawer\':\'Berikut adalah detail dari cakupan tanggungan dan kompensasi. Nominal yang ditampilkan adalah batas maksimum.\',\'name\':\'Free Protection\'},{\'lang\':\'EN\',\'content\':\'Free Protection\',\'contentOfDrawer\':\'Here are the details of the insurance coverage dan compensation. The value stated is the maximum compensation.\',\'name\':\'Free Protection\'}],\'product_code\':\'FLGBP-13\'}',
        status: 'unrequested',
        orderCartDetailInsuranceTransaction: {
          insuranceType: 'INSURANCE',
          transactionDetailID: '894687759604469760',
          transactionDetailReference: 'T3U7O9OHHY3V83TFO9JRFQ=='
        },
        orderCartInsurancePaxes: [{
          paxNumber: 10000,
          firstName: 'Akkbar Qurbani',
          lastName: 'Kusuma',
          originalFirstName: 'Akkbar Qurbani',
          originalLastName: 'Kusuma',
          title: 'mr',
          birthDate: null
        }]
      },
      orderCartCancelInsurance: null,
      orderCartBundlingAddons: null,
      insuranceBookingRequest: null,
      bookingNo: 'RDDGSH',
      productCode: 'FLGBP-13',
      orderMasterID: '32545216',
      resellerID: null
    }, {
      orderType: 'convenience_fee',
      orderName: 'Convenience Fee',
      orderNameDetail: 'Convenience Fee',
      serviceRate: 0,
      serviceFix: 0,
      sellingCurrency: 'IDR',
      sellingPrice: 11000,
      customerCurrency: 'IDR',
      customerPrice: 11000,
      currencyExchangeRate: 0,
      orderExpiredDateTime: null,
      contactPerson: 0,
      ref: null,
      orderCartFlight: null,
      orderDiscounts: null,
      orderCartInsurance: null,
      orderCartCancelInsurance: null,
      orderCartBundlingAddons: null,
      insuranceBookingRequest: null,
      bookingNo: null,
      productCode: null,
      orderMasterID: null,
      resellerID: null
    }],
    generalInfo: {
      userLang: null,
      ipUser: null,
      customerName: 'Akkbar Qurbani Kusuma',
      customerContactNumber: '+6282225265676',
      phoneNumber: '+6282225265676',
      source: null,
      currency: 'IDR',
      accountRegistDate: null,
      accountLastUpdate: null,
      userLogin: null,
      email: email
    },
    orderReceipt: {
      subTotal: 844500,
      additional: [{
        title: '<div style=\'\'>Biaya jasa</div>',
        value: 11000
      }],
      itemDetails: [{
        description: '<div style=\'\'>Lion Air (YIA - BTH)</div><div style=\' font-size: 8px; font-weight:100; color:#888888;\'>Kode Booking RDDGSH</div>',
        name: 'Tiket Pesawat',
        price: 'IDR 844.500',
        quantity: '1'
      }, {
        description: '<div style=\'\'>Free Protection</div>',
        name: 'Lainnya',
        price: 'IDR 0',
        quantity: '1'
      }],
      deduction: []
    }
  };
  const addCartFlight = cartFlight(body, params);
  assertStatus(addCartFlight, 200, true, 'cartFlight');
  assertSuccess(addCartFlight, 'SUCCESS', true, 'cartFlight');
  return addCartFlight;
};

const dateTravel = (orderData, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_travelDate_${__VU}_${__ITER}_${create_date_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      Authorization: 'Bearer 817a3f6efcb8776e82fbf4741a97e721ea08f9a2c7edd610d334449bdd713297',
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    orderId: orderData.orderId
  };
  const dateTravel = travelDate(body, params);
  assertStatus(dateTravel, 200, true, 'travelDate');
  assertSuccessOrderDate(dateTravel, 'SUCCESS', true, 'travelDate');
};
;// CONCATENATED MODULE: ./apis/order/http/discount.js

const applyDiscount = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/apply-discount';
  return http_default().put(`${__ENV.LB_HOST}/tix-order-go/apply-discount`, JSON.stringify(requestData), params);
};
const unapplyDiscount = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/unapply-discount ';
  return http_default().put(`${__ENV.LB_HOST}/tix-order-go/unapply-discount`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./generator/order/create_checkout.js





const create_checkout_randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const create_checkout_orderEmailData = parseCSV('orderEmail', 'data/orderEmail.csv');
const generatorFive = () => {
  const data = create_checkout_orderEmailData[Math.floor(Math.random() * create_checkout_orderEmailData.length)];
  const email = data[0];
  const createOrderTTD = addCartTodo(email);
  putDiscount(createOrderTTD.json('data'), email);
  const createOrderHotel = create_checkout_addCartHotel(email);
  putDiscount(createOrderHotel.json('results'), email);
};

const create_checkout_addCartHotel = email => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_cartHotel_${__VU}_${__ITER}_${create_checkout_randomUUID}`,
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
    customerIp: '114.125.246.114',
    // eslint-disable-next-line no-undef
    refId: `refId_addCartHotel_${__VU}_${__ITER}_${create_checkout_randomUUID}`,
    urlReferer: null,
    accountId: null,
    hotelData: {
      id: 'pop-hotel-tanjung-karang-108001534490306228',
      name: 'POP! Hotel Tanjung Karang',
      hotelChain: {
        id: 'tauzia-hotel-management-112001544186945121',
        name: 'Tauzia Hotel Management'
      },
      star: 2,
      phone: '+62721241736',
      address: 'Jl. Wolter Monginsidi No.56, Tj. Karang, Tj. Karang Pusat, Kota Bandar Lampung, Lampung 35214, Indonesia',
      latitude: -5.424513,
      longitude: 105.251163,
      policy: '<h4><b>Anak</b></h4>\n<p>Tamu umur berapa pun bisa menginap di sini.</p><p>Anak-anak 13 tahun ke atas dianggap sebagai tamu dewasa.</p><p>Pastikan umur anak yang menginap sesuai dengan detail pemesanan. Jika berbeda, tamu mungkin akan dikenakan biaya tambahan saat check-in.</p>\n<br/>\n<h4><b>Deposit</b></h4>\n<p>Tamu tidak perlu membayar deposit saat check-in.</p>\n<br/>\n<h4><b>Umur</b></h4>\n<p>Tamu umur berapa pun bisa menginap di sini.</p>\n<br/>\n<h4><b>Sarapan</b></h4>\n<p>Sarapan tersedia pukul 07:00 - 10:00 waktu lokal.</p>\n<br/>\n<h4><b>Hewan peliharaan</b></h4>\n<p>Tidak diperbolehkan membawa hewan peliharaan.</p>\n<br/>\n<h4><b>Merokok</b></h4>\n<p>Kamar bebas asap rokok.</p>\n<br/>\n<h4><b>Alkohol</b></h4>\n<p>Minuman beralkohol tidak diperbolehkan.</p>\n<br/>\n',
      checkInInstruction: '',
      specialCheckInInstruction: '',
      payUponArrival: null,
      country: {
        id: 'indonesia',
        name: 'Indonesia'
      },
      province: {
        id: 'lampung-province-108001534490301610',
        name: 'Provinsi Lampung'
      },
      city: {
        id: 'bandar-lampung-108001534490306395',
        name: 'Bandar Lampung'
      },
      area: {
        id: 'tanjung-karang-pusat-108001534490306396',
        name: 'Central Tanjung Karang'
      },
      mainImage: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/28/db084f71-dacd-4bf4-84f5-d298aec38cfd-1603888566559-ea1bf52b092d475323ff42c9c5cc028f.jpg',
      hotelProperty: 'Hotel',
      receiptReferenceId: '615b67c2aa91010510e00f6f',
      tiketPointVersion: 1
    },
    roomData: {
      id: '5b77805025a8fa6a60bc1503',
      name: 'Kamar Double atau Twin dengan Sarapan (POP! Room with Breakfast)',
      source: 'TIKET',
      breakfast: true,
      maxOccupancy: 2,
      bedType: '1 Ranjang Besar',
      smoking: 'NS',
      cancellationPolicy: 'Pembatalan gratis hingga 04 Oct 2021. Setiap pembatalan yang diajukan 3 hari sebelum tanggal check-in, akan dikenakan biaya pembatalan sebesar harga malam pertama dari total biaya menginap. Jika Anda tidak datang ke akomodasi pada tanggal check-in, Anda akan dikenakan biaya pembatalan sebesar 100%.',
      promo: 'Early Bird 5%',
      valueAdded: '',
      cancellationDetails: null,
      rateInfo: {
        currency: 'IDR',
        localCurrency: null,
        refundable: true,
        price: {
          baseRateWithTax: 378000,
          rateWithTax: 323190,
          totalBaseRateWithTax: 756000,
          totalRateWithTax: 646380
        },
        tixPoint: null,
        priceSummary: {
          total: 646380,
          totalWithoutTax: 646380,
          taxAndOtherFee: 0,
          totalCompulsory: 0,
          totalSellingRateAddOn: 0,
          totalInsurance: 0,
          net: 646380,
          originalPrice: 568815,
          markupPercentage: 0,
          markupId: [],
          surcharge: [],
          compulsory: null,
          pricePerNight: [{
            stayingDate: '2021-10-08',
            rate: 323190,
            loyaltyRate: 0
          }, {
            stayingDate: '2021-10-09',
            rate: 323190,
            loyaltyRate: 0
          }],
          totalObject: {
            label: 'Total',
            value: 646380
          },
          subsidyPrice: 0,
          subsidyId: [],
          vendorIncentive: 77565.59999999998
        },
        loyaltyMembersDeal: null
      },
      paymentType: 'pay_now',
      wifi: true,
      cancellationPolicyV2: [{
        amount: 646380,
        time: '2021-10-08T23:59:59+07:00'
      }, {
        amount: 323190,
        time: '2021-10-08T23:59:58+07:00'
      }, {
        amount: 0,
        time: '2021-10-04T23:59:58+07:00'
      }],
      paymentTypeInfo: '{\'id\':\'pay_now\',\'name\':\'\',\'subName\':\'\',\'description\':\'\',\'icon\':\'\',\'disclaimer\':\'\'}',
      mealPlanV2: {
        en: 'Breakfast (2 Pax) per room',
        id: 'Sarapan (2 Pax) per kamar'
      },
      cancellationPoliciesV3: {
        refundable: true,
        freeCancellation: false,
        html: {
          en: '<b>Cancellation & reschedule with fee</b><br>If you submit the request after <b>04 October 2021 (23:59)</b>, you will be charged IDR 323,190. <br><br><b>No refund & reschedule</b><br>If you don&#39;t show up for check-in or submit a cancellation or reschedule request on and after the check-in date: <b>08 October 2021</b>.<br><br>*The fee may change if there are Add-ons, Extra Protections, etc., or currency exchange rates.<br><br>*The time shown is based on the accommodation’s time zone.',
          id: '<b>Pembatalan & reschedule dengan biaya</b><br>Jika pengajuan dilakukan setelah <b>04 Oktober 2021 (23:59)</b>, kamu akan dikenakan biaya IDR 323.190. <br><br><b>Tidak bisa refund & reschedule</b><br>Jika kamu tidak datang saat check-in atau mengajukan pembatalan atau reschedule pada dan setelah tanggal check-in: <b>08 Oktober 2021</b>.<br><br>*Biaya pembatalan mungkin berubah jika ada tambahan Fasilitas Ekstra, Perlindungan Ekstra, dll; atau perbedaan nilai tukar mata uang.<br><br>*Waktu di atas mengikuti zona waktu di akomodasi.'
        },
        policies: [{
          charge: 646380,
          deadline: '2021-10-08T23:59:59+07:00',
          percentage: 1,
          noShowPolicy: true,
          isNoShowPolicy: true
        }, {
          charge: 323190,
          deadline: '2021-10-08T23:59:58+07:00',
          percentage: 0.5,
          noShowPolicy: false,
          isNoShowPolicy: false
        }, {
          charge: 0,
          deadline: '2021-10-04T23:59:58+07:00',
          percentage: 0,
          noShowPolicy: false,
          isNoShowPolicy: false
        }]
      }
    },
    bookingData: {
      checkInDate: '2021-10-08',
      checkOutDate: '2021-10-10',
      night: 2,
      room: 1,
      adult: 1,
      child: 0
    },
    travellerData: {
      profileId: '59734881',
      firstName: 'Fajar',
      lastName: 'Suryoko',
      idCard: null,
      title: 'Mr',
      countryId: null,
      phone: null,
      specialRequest: null
    },
    travellerDatas: [{
      profileId: '59734881',
      firstName: 'Fajar',
      lastName: 'Suryoko',
      idCard: null,
      title: 'Mr',
      countryId: null,
      phone: null,
      specialRequest: '{\'smokingPreference\':\'Bebas asap rokok\',\'connectingRoom\':null,\'highFloorRoom\':\'Lantai atas\',\'bedTypePreference\':\'1 Ranjang Besar\',\'checkIn\':null,\'checkOut\':null,\'specialRequest\':null}',
      guestNumber: 1
    }],
    contactPerson: {
      profileId: '59734881',
      firstName: 'Rika',
      lastName: 'Septianis',
      idCard: null,
      title: 'Ms',
      countryId: null,
      phone: '+6282181918972',
      email: email
    },
    totalWithoutTax: 646380,
    taxAndOtherFee: 0,
    totalWithTax: 646380,
    autoSubsidy: {
      value: 0,
      percentage: 0
    },
    expiredTime: 1664918390000,
    orderType: null,
    crossSellingSource: null,
    previousOrderId: null,
    addOns: null,
    localTotalWithTax: 0,
    localCustomerCurrency: null,
    surcharges: [],
    disclaimers: null,
    bedTypeDisclaimer: null,
    disableReviseDaysBefore: 2,
    timeZoneName: 'Asia/Jakarta',
    bookVersion: 1,
    guestInfoRevised: false,
    specialRequestRevised: false,
    orderReceipt: {
      subTotal: 646380,
      additional: [{
        title: '<div style=\'\'>Biaya Administrasi</div>',
        value: 0
      }, {
        title: '<div style=\'\'>Pajak dan Biaya Lainnya</div>',
        value: 0
      }],
      deduction: null,
      detailBox: '<div style=\'\'>*Komisi penjualan sudah termasuk PPN 10%</div>',
      itemDetails: [{
        description: '<div style=\'\'>POP! Hotel Tanjung Karang</div><div style=\' font-size: 8px; font-weight:100; color:#6b707d;\'>Kamar Double atau Twin dengan Sarapan (POP! Room with Breakfast)</div><div style=\' font-size: 8px; font-weight:100; color:#6b707d;\'>2 malam</div>',
        name: 'Hotel',
        price: 'IDR 646.380 ',
        quantity: '1',
        priceValue: 646380,
        priceType: 'BASE_PRICE',
        receiptReferenceId: '615b67c2aa91010510e00f6f'
      }]
    },
    orderDiscounts: null,
    oldOrderId: null,
    refundEstimation: null,
    orderCartInsurance: null,
    accommodationType: 'Hotel'
  };
  const addCartHotel = cartHotel(body, params);
  assertStatus(addCartHotel, 200, true, 'cartHotel');
  assertSuccessOrderHotel(addCartHotel, 'success', true, 'cartHotel');
  return addCartHotel;
};

const addCartTodo = email => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_cartTodo_${__VU}_${__ITER}_${create_checkout_randomUUID}`,
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
      productType: 'event',
      accountID: 0,
      orderHash: '',
      totalCustomerPrice: 5400,
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
      orderType: 'event',
      orderName: 'Appositus conforto ater voluptatem soluta viscus.',
      orderNameDetail: 'Automation Paket Uji Coba 1',
      orderMasterID: '0',
      orderExpiredDateTime: '2022-09-02 19:00:44',
      customerPrice: 5400,
      sellingPrice: 5400,
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
        attendDate: '2021-09-11',
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
          profileEventStart: '2021-09-01 17:00:00',
          profileEventEnd: '2021-09-10 17:00:00',
          tiketEventStart: '2021-09-11 00:00:00',
          tiketEventEnd: '2021-09-11 00:00:00',
          tiketStartSell: '2021-09-02 00:00:00',
          tiketEndSell: '2021-12-01 00:00:00',
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
          tiketAttendDate: '2021-09-11',
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
        redemptionExpiryDate: '2021-09-11 23:59:59',
        timezone: 'Asia/Jakarta',
        travellers: null,
        version: null
      },
      orderDiscounts: null,
      receiptReferenceId: '6130ab58b702542135ce9307',
      tiketPointVersion: 10
    }],
    orderReceipt: {
      subtotal: 5400,
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
  const addCartTodo = cartTodo(body, params);
  assertStatus(addCartTodo, 200, true, 'cartTodo');
  assertSuccess(addCartTodo, 'SUCCESS', true, 'cartTodo');
  return addCartTodo;
};

const putDiscount = (orderData, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_applyDiscount_${__VU}_${__ITER}_${create_checkout_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    orderId: orderData.orderId,
    orderHash: orderData.orderHash,
    orderType: 'promocode',
    discountCode: 'TIKETHEMAT',
    discountAmount: -100000,
    orderName: 'Promo Code : TIKETHEMAT',
    orderNameDetail: 'Promo Code Worth IDR 100000.0',
    sellingPrice: -100000,
    sellingCurrency: 'IDR',
    customerPrice: -100000,
    customerCurrency: 'IDR',
    orderExpireDatetime: '2021-10-06 06:04:00',
    cardNumber: null,
    companyCost: 100000,
    partnerCost: 0
  };
  const putDiscount = applyDiscount(body, params);
  assertStatus(putDiscount, 200, true, 'applyDiscount');
  assertSuccess(putDiscount, 'SUCCESS', true, 'applyDiscount');
};
;// CONCATENATED MODULE: ./generator/order/checkFlightFlow.js






const checkFlightFlow_randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const checkFlightFlow_orderEmailData = parseCSV('orderEmail', 'data/orderEmail.csv');
const generatorSix = () => {
  const data = checkFlightFlow_orderEmailData[Math.floor(Math.random() * checkFlightFlow_orderEmailData.length)];
  const email = data[0];
  const createOrderFlight = checkFlightFlow_addCartFlight(email);
  let orderID = createOrderFlight.json().data.orderID;
  let orderHash = createOrderFlight.json().data.orderHash;
  let orderDetailId = createOrderFlight.json().data.orderDetail[0].orderDetailId;
  checkFlightFlow_checkoutPayment(orderID, orderHash, email);
  checkFlightFlow_settlement(orderID, email);
  checkFlightFlow_processIssued(orderID, orderDetailId, email);
};

const checkFlightFlow_addCartFlight = email => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_cartFlight_${__VU}_${__ITER}_${checkFlightFlow_randomUUID}`,
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
    "orderCart": {
      "customerCurrency": "IDR",
      "fromEmail": email,
      "mobilePhone": "+6287774517272",
      "userLang": "id",
      "oldOrderId": null,
      "refundEstimation": null,
      "orderCore": false,
      "resellerID": "0",
      "isOrderCore": false
    },
    "orderCartDetail": [{
      "orderType": "flight",
      "orderName": "HKG (Hong Kong - Hong Kong International Apt) - KUL (Kuala Lumpur - Kuala Lumpur International Airport) ",
      "orderNameDetail": "PHILIPPINE AIRLINES (PR 307/PR 525 depart)",
      "serviceRate": 0.0,
      "serviceFix": 0.0,
      "sellingCurrency": "IDR",
      "sellingPrice": 6502400.0,
      "customerCurrency": "IDR",
      "customerPrice": 6502400.0,
      "currencyExchangeRate": 1.0,
      "orderExpiredDateTime": "2022-03-11 19:16:23",
      "contactPerson": 0,
      "ref": "5fd21801-e0be-41ba-a4c9-75419c31f167",
      "orderCartFlight": {
        "flightDate": "2022-09-19 18:00",
        "flightNumber": "PR 307/PR 525",
        "serviceClass": "ECONOMY",
        "trip": "trip",
        "airlinesMasterId": "24278938",
        "airlinesName": "PHILIPPINEAIRLINES",
        "airlineCartFlight": {
          "code": "PR",
          "name": "PHILIPPINE AIRLINES",
          "displayName": "Philippine Airlines"
        },
        "departureAirportId": 19434668,
        "departureCity": "HKG",
        "departureTime": "2022-09-19 18:00",
        "departureTz": "8.0",
        "arrivalAirportId": 185523,
        "arrivalCity": "KUL",
        "arrivalTime": "2022-09-20 12:10",
        "arrivalTz": "8.0",
        "ticketClass": "K",
        "countAdult": 1,
        "countChild": 1,
        "countInfant": 1,
        "type": "international",
        "flightInfoJSON": "[{\"flight_no\":\"PR 307\",\"dep_airport\":\"HKG\",\"arr_airport\":\"MNL\",\"dep_airport_name\":\"Hong Kong International Apt\",\"arr_airport_name\":\"Manila Ninoy Aquino International Apt\",\"dep_city_code\":\"HKGC\",\"arr_city_code\":\"MNLC\",\"dep_city_name\":\"Hong Kong\",\"arr_city_name\":\"Manila\",\"dep_time_full\":\"2022-09-19 18:00\",\"arr_time_full\":\"2022-09-19 20:15\",\"dep_timezone\":8.0,\"arr_timezone\":8.0,\"class\":\"K\",\"is_promo\":0,\"stop\":0,\"operating_carrier\":\"PR 307\",\"marketing_airline\":\"PR\",\"departure_terminal\":\"1\",\"arrival_terminal\":\"2\",\"bundling_meal\":false,\"bundling_baggage\":false,\"connecting_time\":0,\"inclusive_baggages\":[{\"unit\":30,\"measurement\":\"Kg\"}],\"dep_visa_required\":false,\"arr_visa_required\":false,\"tags\":[\"TIKET_CLEAN\"],\"flexi\":false,\"benefits\":[],\"penalty_info\":true,\"departure_airport_name\":\"Hong Kong International Apt\",\"arrival_airport_name\":\"Manila Ninoy Aquino International Apt\",\"departure_country_name\":\"Hong Kong (SAR) China\",\"arrival_country_name\":\"Malaysia\",\"departure_city_name\":\"Hong Kong\",\"arrival_city_name\":\"Manila\"},{\"flight_no\":\"PR 525\",\"dep_airport\":\"MNL\",\"arr_airport\":\"KUL\",\"dep_airport_name\":\"Manila Ninoy Aquino International Apt\",\"arr_airport_name\":\"Kuala Lumpur International Airport\",\"dep_city_code\":\"MNLC\",\"arr_city_code\":\"KULC\",\"dep_city_name\":\"Manila\",\"arr_city_name\":\"Kuala Lumpur\",\"dep_time_full\":\"2022-09-20 08:15\",\"arr_time_full\":\"2022-09-20 12:10\",\"dep_timezone\":8.0,\"arr_timezone\":8.0,\"class\":\"K\",\"is_promo\":0,\"stop\":0,\"operating_carrier\":\"PR 525\",\"marketing_airline\":\"PR\",\"departure_terminal\":\"1\",\"arrival_terminal\":\"M\",\"bundling_meal\":false,\"bundling_baggage\":false,\"connecting_time\":0,\"inclusive_baggages\":[{\"unit\":30,\"measurement\":\"Kg\"}],\"dep_visa_required\":false,\"arr_visa_required\":false,\"tags\":[\"TIKET_CLEAN\"],\"flexi\":false,\"benefits\":[],\"penalty_info\":true,\"departure_airport_name\":\"Manila Ninoy Aquino International Apt\",\"arrival_airport_name\":\"Kuala Lumpur International Airport\",\"departure_country_name\":\"Hong Kong (SAR) China\",\"arrival_country_name\":\"Malaysia\",\"departure_city_name\":\"Manila\",\"arrival_city_name\":\"Kuala Lumpur\"}]",
        "via": "MNL",
        "priceCurrency": "IDR",
        "priceAdult": 3376200.0,
        "priceChild": 2585600.0,
        "priceInfant": 540600.0,
        "priceTotal": 6502400.0,
        "priceNta": 6502400.0,
        "balanceDue": 6502400.0,
        "baseFareAdult": 2298000.0,
        "baseFareChild": 1728000.0,
        "baseFareInfant": 239000.0,
        "fareInfoJson": "{\"adult\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":2298000.0,\"original_base_fare\":0.0,\"nta\":3376200.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":1078200.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0},\"child\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":1728000.0,\"original_base_fare\":0.0,\"nta\":2585600.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":857600.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0},\"infant\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":239000.0,\"original_base_fare\":0.0,\"nta\":540600.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":301600.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0}}",
        "customerPriceCurrency": "IDR",
        "customerPriceAdult": 3376200.0,
        "customerPriceChild": 2585600.0,
        "customerPriceInfant": 540600.0,
        "customerPriceTotal": 6502400.0,
        "tax": 2237400.0,
        "airlinesFee": 0.0,
        "airlineFeeCurrency": "IDR",
        "baggageFee": 0.0,
        "baggageFeeCurrency": "IDR",
        "mealFee": 0.0,
        "mealFeeCurrency": "IDR",
        "contactTitle": "Mr",
        "contactEmail": email,
        "contactFirstName": "Apri",
        "contactLastName": "Dastan",
        "contactPhone": "+6287774517272",
        "contactPhoneCode": "62",
        "contactOtherPhone": "+6287774517272",
        "flightRef": "0",
        "airlinesAccountId": null,
        "bookingCode": "FVDADW",
        "bookExpireDateTime": "2022-03-11 19:16:23",
        "account": "aviaDirectSabre",
        "vendor": "sa",
        "referenceNumber": "",
        "additionalData": {
          "accountCode": "TGF03"
        },
        "orderDetailIdBefore": null,
        "connectingGroup": null,
        "hasInsurance": 0,
        "logReference": null,
        "orderFrom": "microservice",
        "commission": {
          "total": 0.0,
          "breakdownJson": "{\"total_adult_comission\":0.0,\"total_child_comission\":0.0,\"total_infant_comission\":0.0}"
        },
        "orderCartFlightSegment": [{
          "trip": "depart",
          "flightNumber": "PR 307/PR 525",
          "airlinesMasterId": "24278938",
          "airlinesName": "PHILIPPINEAIRLINES",
          "airlineCartFlightSegment": {
            "code": "PR",
            "name": "PHILIPPINE AIRLINES",
            "displayName": "Philippine Airlines"
          },
          "departureAirportId": 19434668,
          "departureCity": "HKG",
          "departureTime": "2022-09-19 18:00",
          "departureTimeZone": "8.0",
          "arrivalAirportId": 185523,
          "arrivalCity": "KUL",
          "arrivalTime": "2022-09-20 12:10",
          "arrivalTimeZone": "8.0",
          "serviceClass": "ECONOMY",
          "flightDate": "2022-09-19",
          "priceCurrency": "IDR",
          "priceAdult": 3376200.0,
          "priceChild": 2585600.0,
          "priceInfant": 540600.0,
          "priceTotal": 6502400.0,
          "flightInfoJson": "[{\"flight_no\":\"PR 307\",\"dep_airport\":\"HKG\",\"arr_airport\":\"MNL\",\"dep_airport_name\":\"Hong Kong International Apt\",\"arr_airport_name\":\"Manila Ninoy Aquino International Apt\",\"dep_city_code\":\"HKGC\",\"arr_city_code\":\"MNLC\",\"dep_city_name\":\"Hong Kong\",\"arr_city_name\":\"Manila\",\"dep_time_full\":\"2022-09-19 18:00\",\"arr_time_full\":\"2022-09-19 20:15\",\"dep_timezone\":8.0,\"arr_timezone\":8.0,\"class\":\"K\",\"is_promo\":0,\"stop\":0,\"operating_carrier\":\"PR 307\",\"marketing_airline\":\"PR\",\"departure_terminal\":\"1\",\"arrival_terminal\":\"2\",\"bundling_meal\":false,\"bundling_baggage\":false,\"connecting_time\":0,\"inclusive_baggages\":[{\"unit\":30,\"measurement\":\"Kg\"}],\"dep_visa_required\":false,\"arr_visa_required\":false,\"tags\":[\"TIKET_CLEAN\"],\"flexi\":false,\"benefits\":[]},{\"flight_no\":\"PR 525\",\"dep_airport\":\"MNL\",\"arr_airport\":\"KUL\",\"dep_airport_name\":\"Manila Ninoy Aquino International Apt\",\"arr_airport_name\":\"Kuala Lumpur International Airport\",\"dep_city_code\":\"MNLC\",\"arr_city_code\":\"KULC\",\"dep_city_name\":\"Manila\",\"arr_city_name\":\"Kuala Lumpur\",\"dep_time_full\":\"2022-09-20 08:15\",\"arr_time_full\":\"2022-09-20 12:10\",\"dep_timezone\":8.0,\"arr_timezone\":8.0,\"class\":\"K\",\"is_promo\":0,\"stop\":0,\"operating_carrier\":\"PR 525\",\"marketing_airline\":\"PR\",\"departure_terminal\":\"1\",\"arrival_terminal\":\"M\",\"bundling_meal\":false,\"bundling_baggage\":false,\"connecting_time\":0,\"inclusive_baggages\":[{\"unit\":30,\"measurement\":\"Kg\"}],\"dep_visa_required\":false,\"arr_visa_required\":false,\"tags\":[\"TIKET_CLEAN\"],\"flexi\":false,\"benefits\":[]}]",
          "baseFareAdult": 2298000.0,
          "baseFareChild": 1728000.0,
          "baseFareInfant": 239000.0,
          "fareInfoJson": "{\"adult\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":2298000.0,\"original_base_fare\":0.0,\"nta\":3376200.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":1078200.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0},\"child\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":1728000.0,\"original_base_fare\":0.0,\"nta\":2585600.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":857600.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0},\"infant\":{\"psc\":0.0,\"iwjr\":0.0,\"discount\":0.0,\"base_fare\":239000.0,\"original_base_fare\":0.0,\"nta\":540600.0,\"commission\":0.0,\"original_commission\":0.0,\"original_commission_value\":0.0,\"commission_value\":0.0,\"commission_percentage\":0.0,\"original_currency\":\"IDR\",\"tax\":301600.0,\"agent_fee\":0.0,\"airport_tax\":0.0,\"unidentified\":0.0,\"admin_fee\":0.0}}",
          "subPriceIDR": 0.0,
          "via": "MNL",
          "class": "K"
        }],
        "orderCartFlightPassenger": [{
          "profileId": "33474974",
          "paxNumber": 10000,
          "title": "Mr",
          "firstName": "Apri",
          "lastName": "Dastan",
          "originalFirstName": "Apri",
          "originalLastName": "Dastan",
          "type": "adult",
          "birthDate": "2000-01-01",
          "passportExpiry": "2024-01-01",
          "passportIssuedDate": "2022-01-01",
          "passportIssuingCountry": "ID",
          "passportNo": "123456",
          "passportNationality": "ID",
          "idNumber": "123456",
          "adultIndex": null,
          "checkInBaggage": "30 kg",
          "checkInBaggageSize": 30,
          "checkInBaggageReturn": null,
          "checkInBaggageSizeReturn": 0,
          "checkInBaggageJson": "[{\"origin\":\"HKG\",\"destination\":\"KUL\",\"flight_number\":\"PR 307\",\"unit\":\"0\",\"measurement\":\"kg\"}]",
          "checkInBaggageReturnJson": null,
          "addOnsMealJson": "[]",
          "addonsMealReturnJson": null,
          "addOnsSeatJson": "[]",
          "addonsSeatReturnJson": null,
          "paxInsurance": null,
          "paxCancelInsurance": null,
          "pax_addons": [{
            "addons_type": "BAGGAGE",
            "addons_depart_json": "[{\"origin\":\"HKG\",\"destination\":\"KUL\",\"flight_number\":\"PR 307\",\"unit\":\"0\",\"measurement\":\"kg\"}]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }, {
            "addons_type": "MEAL",
            "addons_depart_json": "[]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }, {
            "addons_type": "SEAT",
            "addons_depart_json": "[]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }]
        }, {
          "profileId": "33474977",
          "paxNumber": 20000,
          "title": "Miss",
          "firstName": "Regina",
          "lastName": "Dastan",
          "originalFirstName": "Regina",
          "originalLastName": "Dastan",
          "type": "child",
          "birthDate": "2020-01-01",
          "passportExpiry": "2024-01-01",
          "passportIssuedDate": "2022-01-01",
          "passportIssuingCountry": "ID",
          "passportNo": "1234567",
          "passportNationality": "ID",
          "idNumber": "1234567",
          "adultIndex": null,
          "checkInBaggage": "30 kg",
          "checkInBaggageSize": 30,
          "checkInBaggageReturn": null,
          "checkInBaggageSizeReturn": 0,
          "checkInBaggageJson": "[{\"origin\":\"HKG\",\"destination\":\"KUL\",\"flight_number\":\"PR 307\",\"unit\":\"0\",\"measurement\":\"kg\"}]",
          "checkInBaggageReturnJson": null,
          "addOnsMealJson": "[]",
          "addonsMealReturnJson": null,
          "addOnsSeatJson": "[]",
          "addonsSeatReturnJson": null,
          "paxInsurance": null,
          "paxCancelInsurance": null,
          "pax_addons": [{
            "addons_type": "BAGGAGE",
            "addons_depart_json": "[{\"origin\":\"HKG\",\"destination\":\"KUL\",\"flight_number\":\"PR 307\",\"unit\":\"0\",\"measurement\":\"kg\"}]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }, {
            "addons_type": "MEAL",
            "addons_depart_json": "[]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }, {
            "addons_type": "SEAT",
            "addons_depart_json": "[]",
            "addons_return_json": null,
            "created_at": 1646993783633,
            "updated_at": 1646993783633
          }]
        }, {
          "profileId": "33474980",
          "paxNumber": 30000,
          "title": "Miss",
          "firstName": "Valonia",
          "lastName": "Dastan",
          "originalFirstName": "Valonia",
          "originalLastName": "Dastan",
          "type": "infant",
          "birthDate": "2022-01-01",
          "passportExpiry": "2024-01-01",
          "passportIssuedDate": "2022-01-01",
          "passportIssuingCountry": "ID",
          "passportNo": "12345678",
          "passportNationality": "ID",
          "idNumber": "12345678",
          "adultIndex": null,
          "checkInBaggage": null,
          "checkInBaggageSize": 0,
          "checkInBaggageReturn": null,
          "checkInBaggageSizeReturn": 0,
          "checkInBaggageJson": null,
          "checkInBaggageReturnJson": null,
          "addOnsMealJson": null,
          "addonsMealReturnJson": null,
          "addOnsSeatJson": null,
          "addonsSeatReturnJson": null,
          "paxInsurance": null,
          "paxCancelInsurance": null,
          "pax_addons": []
        }],
        "orderCartFlightInformationJson": null,
        "orderCartInformations": [{
          "type": "trip",
          "valueJson": "[{\"origin\":\"HKG\",\"destination\":\"MNL\",\"flight_number\":\"PR 307\",\"facilities\":{\"meal\":{\"icon\":\"https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/10/09/570f9945-2f57-46d4-bb65-80975545c62e-1602261225439-7e57494631bf21e0148c4ccdeb3fb202.png\",\"value\":\"true\"},\"aircraft\":{\"icon\":null,\"value\":\"Airbus A321\"}}},{\"origin\":\"MNL\",\"destination\":\"KUL\",\"flight_number\":\"PR 525\",\"facilities\":{\"meal\":{\"icon\":\"https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/10/09/570f9945-2f57-46d4-bb65-80975545c62e-1602261225439-7e57494631bf21e0148c4ccdeb3fb202.png\",\"value\":\"true\"},\"aircraft\":{\"icon\":null,\"value\":\"Airbus A321\"}}}]"
        }, {
          "type": "store_id",
          "valueJson": "TIKETCOM"
        }, {
          "type": "channel_id",
          "valueJson": "DESKTOP"
        }, {
          "type": "reseller_id",
          "valueJson": ""
        }, {
          "type": "order_from",
          "valueJson": "preorder"
        }],
        "hashInfo": {
          "bookingCode": "FVDADW",
          "hash": "H4sIAAAAAAAAAGWOUWrEMAxED1S0yGpTZwOF3mRREsUVieVgOyl7+7pfu6V/4r0ZRrxnnblUNgiSo7LVdBmPyvmz6ir1MqUIL+/Ue+/fOufJE8TMjxauAQCilpIlqPE/fPKWTP9yPhvQLFMtPGbZ25UsxTuMKa1qYUqzfCznzPM37PkVPXytgZAI8Aru6voBEaJtD0Q4uK5lO+qeBSH2v2I9npCjwSGolSOzTW2ItyKwi/FW7ze1JUF75xRTafq2iPwAYy8y7yYBAAA=",
          "rules": [{
            "airlines": [],
            "timeRange": 172800,
            "timeType": "SECOND",
            "action": "NONE"
          }]
        },
        "seatFee": 0.0,
        "seatFeeCurrency": "IDR",
        "departureAirportName": "Hong Kong International Apt",
        "arrivalAirportName": "Kuala Lumpur International Airport",
        "departureTimezoneName": "Asia/Hong_Kong",
        "arrivalTimezoneName": "Asia/Kuala_Lumpur",
        "subPriceIDR": 0.0
      },
      "orderDiscounts": null,
      "orderCartInsurance": null,
      "orderCartCancelInsurance": null,
      "orderCartBundlingAddons": {
        "orderName": null,
        "orderNameDetail": null,
        "productName": null,
        "sellingCurrency": null,
        "sellingPrice": 0.0,
        "customerCurrency": null,
        "customerPrice": 0.0,
        "orderExpiredDateTime": null,
        "priceValue": 0.0,
        "priceCurrency": null,
        "paramJson": null,
        "orderCartBundlingAddonsPassengers": null,
        "addonsRequests": null
      },
      "insuranceBookingRequest": null,
      "bookingNo": "FVDADW",
      "productCode": null,
      "orderMasterID": "24278938",
      "resellerID": "0"
    }, {
      "orderType": "convenience_fee",
      "orderName": "Convenience Fee",
      "orderNameDetail": "Convenience Fee",
      "serviceRate": 0.0,
      "serviceFix": 0.0,
      "sellingCurrency": "IDR",
      "sellingPrice": 12000.0,
      "customerCurrency": "IDR",
      "customerPrice": 12000.0,
      "currencyExchangeRate": 0.0,
      "orderExpiredDateTime": null,
      "contactPerson": 0,
      "ref": null,
      "orderCartFlight": null,
      "orderDiscounts": null,
      "orderCartInsurance": null,
      "orderCartCancelInsurance": null,
      "orderCartBundlingAddons": null,
      "insuranceBookingRequest": null,
      "bookingNo": null,
      "productCode": null,
      "orderMasterID": null,
      "resellerID": null
    }],
    "generalInfo": {
      "userLang": null,
      "ipUser": null,
      "customerName": "Apri Dastan",
      "customerContactNumber": "+6287774517272",
      "phoneNumber": "+6287774517272",
      "source": null,
      "currency": "IDR",
      "accountRegistDate": null,
      "accountLastUpdate": null,
      "userLogin": null,
      "email": email
    },
    "orderReceipt": {
      "subTotal": 6502400.0,
      "additional": [{
        "title": "<div style=\"\">Biaya jasa</div>",
        "value": 12000.0
      }],
      "itemDetails": [{
        "description": "<div style=\"\">Philippine Airlines (HKG - KUL)</div><div style=\" font-size: 8px; font-weight:100; color:#888888;\">Kode Booking FVDADW</div>",
        "name": "Tiket Pesawat",
        "price": "IDR 6.502.400",
        "quantity": "3"
      }],
      "deduction": []
    },
    "orderCartRescheduleReference": null,
    "orderReschedule": null
  };
  const addCartFlight = cartFlight(body, params);
  assertStatus(addCartFlight, 200, true, 'cartFlight');
  assertSuccess(addCartFlight, 'SUCCESS', true, 'cartFlight');
  return addCartFlight;
};

const checkFlightFlow_checkoutPayment = (orderID, orderHash, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_paymentCheckout_${__VU}_${__ITER}_${checkFlightFlow_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    "referenceId": orderID,
    "orderHash": orderHash,
    "paymentType": "VA_BNI",
    "subTotal": 6514400,
    "paymentCharge": 0,
    "grandTotal": 6514400,
    "userBca": "8319001003679470",
    "tenorKlikpay": null,
    "channel": "IOS",
    "checkoutCreditCard": null,
    "checkoutCashOnSite": {
      "message": null,
      "paymentMethod": null
    },
    "checkoutVirtualAccount": {
      "trxId": "TIKETBNI0102202110060400219690",
      "vaNumber": "8319001003679470"
    },
    "secretKey": "9905a477c91b40cdabff6679815ff050",
    "appsVersion": "4.21.0|IOS",
    "payLaterDetail": null,
    "additionalInformation": null,
    // "gbvCode": "ID",
    // "paymentToGbvFxRate": "6514400.0",
    // "logDescription": "Checkout Success - Customer checkout with ATM_TRANSFER_JATIS",
    "coBranding": false,
    "login": true
  };
  const checkoutPayment = paymentCheckout(body, params);
  assertStatus(checkoutPayment, 200, true, 'paymentCheckout');
  assertSuccess(checkoutPayment, 'SUCCESS', true, 'paymentCheckout');
};

const checkFlightFlow_settlement = (orderID, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_settlementNotification_${__VU}_${__ITER}_${checkFlightFlow_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      //Authorization: 'Bearer 817a3f6efcb8776e82fbf4741a97e721ea08f9a2c7edd610d334449bdd713297',
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    "token": "9905a477c91b40cdabff6679815ff050",
    "amount": 6514400,
    "timestamp": 1633856971261,
    "paymentSource": "VA_BNI",
    "customAccount": "3947101004455298",
    "ref_id": orderID,
    "conf_id": "ccec1c71f5de33009113bdcb51ac6007",
    "reconciliationId": "",
    "authorizationCode": "",
    "paymentGateway": "",
    "acquiringBank": "",
    "abtcParameters": {
      "trxId": "",
      "bank": "",
      "trxAmount": 0,
      "bankNotes": ""
    }
  };
  const notification = settlementNotification(body, params);
  assertStatus(notification, 200, true, 'settlementNotification');
  assertSuccessSettlement(notification, 'Success', true, 'settlementNotification');
};

const checkFlightFlow_processIssued = (orderID, orderDetailId, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_issued_${__VU}_${__ITER}_${checkFlightFlow_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    "orderId": orderID,
    "orderType": "flight",
    "issuedOrderFlightRequest": {
      "orderId": `${orderID}`,
      "orderDetailId": orderDetailId,
      "statusOrder": "SUCCESS",
      "distributionType": "sabre",
      "bookingCode": "FVDADW",
      "paymentAmount": 0.0,
      "ticketType": "paxes_data",
      "pdfBase64": null,
      "sessionId": null,
      "issuedTypeRequest": "ISSUANCE",
      "paxes": [{
        "name": "mr Apri Dastan",
        "ticketNumber": "223344",
        "paxNumber": "10000"
      }, {
        "name": "miss Regina Dastan",
        "ticketNumber": "556677",
        "paxNumber": "20000"
      }, {
        "name": "miss Valonia Dastan",
        "ticketNumber": "223399",
        "paxNumber": "30000"
      }],
      "bookingCodeSabre": [{
        "flightNumber": "TK 1985",
        "bookingCode": "FLUEQM"
      }],
      "requireGetTicket": false,
      "isRequireGetTicket": false
    }
  };
  const processIssued = issued(body, params);
  assertStatus(processIssued, 200, true, 'issued');
  assertSuccess(processIssued, 'SUCCESS', true, 'issued');
};
;// CONCATENATED MODULE: ./apis/order/http/resetPayment.js

const resetPayment = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = '/tix-order-go/checkout/payment_reset';
  return http_default().post(`${__ENV.LB_HOST}/tix-order-go/checkout/payment_reset`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./generator/order/testingFlow.js







const testingFlow_randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const testingFlow_orderEmailData = parseCSV('orderEmail', 'data/orderEmail.csv');
const generatorSeven = () => {
  const data = testingFlow_orderEmailData[Math.floor(Math.random() * testingFlow_orderEmailData.length)];
  const email = data[0];
  const createOrderTTD = testingFlow_addCartTodo(email);
  testingFlow_putDiscount(createOrderTTD.json('data'), email);
  unPutDiscount(createOrderTTD.json('data'), email);
  testingFlow_checkoutPayment(createOrderTTD.json('data'), email);
  paymentReset(createOrderTTD.json('data'), email);
  testingFlow_settlement(createOrderTTD.json('data'), email);
};

const testingFlow_addCartTodo = email => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_cartTodo_${__VU}_${__ITER}_${testingFlow_randomUUID}`,
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
      productType: 'event',
      accountID: 0,
      orderHash: '',
      totalCustomerPrice: 5400,
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
      orderType: 'event',
      orderName: 'Appositus conforto ater voluptatem soluta viscus.',
      orderNameDetail: 'Automation Paket Uji Coba 1',
      orderMasterID: '0',
      orderExpiredDateTime: '2022-09-02 19:00:44',
      customerPrice: 5400,
      sellingPrice: 5400,
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
        attendDate: '2021-09-11',
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
          profileEventStart: '2021-09-01 17:00:00',
          profileEventEnd: '2021-09-10 17:00:00',
          tiketEventStart: '2021-09-11 00:00:00',
          tiketEventEnd: '2021-09-11 00:00:00',
          tiketStartSell: '2021-09-02 00:00:00',
          tiketEndSell: '2021-12-01 00:00:00',
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
          tiketAttendDate: '2021-09-11',
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
        redemptionExpiryDate: '2021-09-11 23:59:59',
        timezone: 'Asia/Jakarta',
        travellers: null,
        version: null
      },
      orderDiscounts: null,
      receiptReferenceId: '6130ab58b702542135ce9307',
      tiketPointVersion: 10
    }],
    orderReceipt: {
      subtotal: 5400,
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
  const addCartTodo = cartTodo(body, params);
  assertStatus(addCartTodo, 200, true, 'cartTodo');
  assertSuccess(addCartTodo, 'SUCCESS', true, 'cartTodo');
  return addCartTodo;
};

const testingFlow_putDiscount = (orderData, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_applyDiscount_${__VU}_${__ITER}_${testingFlow_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    orderId: orderData.orderId,
    orderHash: orderData.orderHash,
    orderType: 'promocode',
    discountCode: 'TIKETHEMAT',
    discountAmount: -100000,
    orderName: 'Promo Code : TIKETHEMAT',
    orderNameDetail: 'Promo Code Worth IDR 100000.0',
    sellingPrice: -100000,
    sellingCurrency: 'IDR',
    customerPrice: -100000,
    customerCurrency: 'IDR',
    orderExpireDatetime: '2021-10-06 06:04:00',
    cardNumber: null,
    companyCost: 100000,
    partnerCost: 0
  };
  const putDiscount = applyDiscount(body, params);
  assertStatus(putDiscount, 200, true, 'applyDiscount');
  assertSuccess(putDiscount, 'SUCCESS', true, 'applyDiscount');
};

const unPutDiscount = (orderData, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_unapplyDiscount_${__VU}_${__ITER}_${testingFlow_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    orderId: orderData.orderId,
    orderHash: orderData.orderHash,
    orderType: 'promocode'
  };
  const unPutDiscount = unapplyDiscount(body, params);
  assertStatus(unPutDiscount, 200, true, 'unapplyDiscount');
  assertSuccess(unPutDiscount, 'SUCCESS', true, 'unapplyDiscount');
};

const paymentReset = (orderData, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_resetPayment_${__VU}_${__ITER}_${testingFlow_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    referenceId: orderData.orderId,
    orderHash: orderData.orderHash,
    secretKey: '9905a477c91b40cdabff6679815ff050'
  };
  const api = resetPayment(body, params);
  assertStatus(api, 200, true, 'resetPayment');
  assertSuccess(api, 'SUCCESS', true, 'resetPayment');
};

const testingFlow_checkoutPayment = (orderData, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_paymentCheckout_${__VU}_${__ITER}_${testingFlow_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    referenceId: orderData.orderId,
    orderHash: orderData.orderHash,
    paymentType: 'VA_BNI',
    subTotal: orderData.totalCustomerPrice,
    paymentCharge: 0,
    grandTotal: orderData.totalCustomerPrice,
    userBca: '8319001003679470',
    tenorKlikpay: null,
    channel: 'IOS',
    checkoutCreditCard: null,
    checkoutCashOnSite: {
      message: null,
      paymentMethod: null
    },
    checkoutVirtualAccount: {
      trxId: 'TIKETBNI0102202110060400219690',
      vaNumber: '8319001003679470'
    },
    secretKey: '9905a477c91b40cdabff6679815ff050',
    appsVersion: '4.21.0|IOS',
    payLaterDetail: null,
    additionalInformation: null,
    coBranding: false,
    login: true
  };
  const checkoutPayment = paymentCheckout(body, params);
  assertStatus(checkoutPayment, 200, true, 'paymentCheckout');
  assertSuccess(checkoutPayment, 'SUCCESS', true, 'paymentCheckout');
};

const testingFlow_settlement = (orderData, email) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      // eslint-disable-next-line no-undef
      requestId: `requestId_settlementNotification_${__VU}_${__ITER}_${testingFlow_randomUUID}`,
      serviceId: 'GATEWAY',
      username: email,
      Authorization: 'Bearer 817a3f6efcb8776e82fbf4741a97e721ea08f9a2c7edd610d334449bdd713297',
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  const body = {
    token: '9905a477c91b40cdabff6679815ff050',
    amount: orderData.totalCustomerPrice,
    timestamp: 1633856971261,
    paymentSource: 'VA_BNI',
    customAccount: '3947101004455298',
    ref_id: orderData.orderId,
    conf_id: 'ccec1c71f5de33009113bdcb51ac6007',
    reconciliationId: '',
    authorizationCode: '',
    paymentGateway: '',
    acquiringBank: '',
    abtcParameters: {
      trxId: '',
      bank: '',
      trxAmount: 0,
      bankNotes: ''
    }
  };
  const notification = settlementNotification(body, params);
  assertStatus(notification, 200, true, 'settlementNotification');
  assertSuccessSettlement(notification, 'Success', true, 'settlementNotification');
};
;// CONCATENATED MODULE: ./scenarios/order/create.js







function distribute(serverCount, value) {
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
}

const serverCount = 2;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    // generatorOne: { targetRate: distribute(serverCount, 10), dist: 1 },
    // generatorSix: { targetRate: distribute(serverCount, 350), dist: 1 },
    generatorSeven: {
      targetRate: distribute(serverCount, 140),
      dist: 1
    },
    generatorThree: {
      targetRate: distribute(serverCount, 300),
      dist: 1
    },
    generatorFour: {
      targetRate: distribute(serverCount, 80),
      dist: 1
    },
    generatorFive: {
      targetRate: distribute(serverCount, 100),
      dist: 1
    }
  }
};
const options = {
  scenarios: {}
};
const services = Object.keys(config.groupServices);

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
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS * config.groupServices[name].dist,
      stages: [{
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, //10x
      {
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
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, //12x
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, //15x
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, //18x
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '20m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, //20x
      {
        duration: '3m',
        target: 0
      }]
    };
  }
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;