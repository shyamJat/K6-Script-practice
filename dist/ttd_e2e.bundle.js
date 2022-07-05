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
  "createAndGetOrder": () => (/* reexport */ createAndGetOrder),
  "createAndGetOrderV2": () => (/* reexport */ createAndGetOrderV2),
  "issuedRedeem": () => (/* reexport */ issuedRedeem),
  "options": () => (/* binding */ options),
  "orderPartner": () => (/* reexport */ orderPartner)
});

;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/ttd/http/eventOrderV1.js

const postOrder = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = "/tix-events-v2-order/v1/orders";
  return http_default().post(`${__ENV.LB_HOST}/tix-events-v2-order/v1/orders`, JSON.stringify(requestData), params);
};
const getOrder = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = "/tix-events-v2-order/v1/orders/${requestData.id}";
  return http_default().get(`${__ENV.LB_HOST}/tix-events-v2-order/v1/orders/${requestData.id}`, params);
};
const putPaymentReceived = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = "/tix-events-v2-order/admins/orders/paymentReceived";
  return http_default().put(`${__ENV.LB_HOST}/tix-events-v2-order/admins/orders/paymentReceived`, JSON.stringify(requestData), params);
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
  console.log(JSON.stringify(data));
  return data[Math.floor(Math.random() * data.length)];
}
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10);
};
const assertStatus = (res, status, verbose, name) => {
  return (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${status}`]: r => {
      // Will be printed only if verbose = true
      if (r.status != status && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.status === status;
    }
  });
};
const assertStatusNotEmpty = (res, status, verbose, name) => {
  check(res, {
    [`${name} status is ${status}`]: r => {
      // Will be printed only if verbose = true
      if (r.status != status && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.status === status;
    },
    [`${name} is not empty`]: res => {
      return res.json('data');
    }
  });
  return check;
};
const assertStatusRedeem = (res, status, verbose, name) => {
  check(res, {
    [`${name} status is ${status}`]: r => {
      // Will be printed only if verbose = true
      if (r.status != status && r.status_text == '422 Unprocessable Entity' || r.status == 200 && verbose) {
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
const randomList = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};
const distribute = (serverCount, value) => {
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
};
;// CONCATENATED MODULE: ./generator/ttd/createOrderV1.js



const data = new data_namespaceObject.SharedArray("some data name", function () {
  return JSON.parse(open('data/global_variable.json')).datas;
});
const createAndGetOrder = () => {
  const order = createOrder();
};

const createOrder = () => {
  const params = {
    headers: {
      'accept': 'application/json',
      'storeId': 'TIKETCOM',
      'serviceId': 'GATEWAY',
      'channelId': 'WEB',
      'requestId': '1234512345',
      'username': 'testuser@tiket.com',
      'true-client-ip': '139.255.110.226',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'currency': 'IDR',
      'language': 'ID',
      'x-loyalty-level': 'LV0',
      'isVerifiedPhoneNumber': 'false',
      'businessId': data[0].value,
      'tixtoken': data[1].value,
      'tixsession': data[2].value
    },
    tags: {
      name: 'createOrderV1'
    },
    timeout: '3m'
  };
  const phoneNumber = randomIntBetween(10000000, 1000000000000);
  const body = {
    "productScheduleId": data[3].value,
    "contact": {
      "lastName": "rahman",
      "firstName": "arif",
      "phoneNumber": phoneNumber,
      "salutation": "MR",
      "countryCode": "+62",
      "emailAddress": "testing@tiket.com"
    },
    "collector": {
      "lastName": "rahman",
      "firstName": "arif",
      "phoneNumber": phoneNumber,
      "emailAddress": "testing@tiket.com",
      "salutation": "MR",
      "collectorCode": 1,
      "priceTierCode": "ALL",
      "countryCode": "+62"
    },
    "priceTierQuantities": [{
      "code": "ALL",
      "quantity": 1
    }],
    "perBookingAnswers": [],
    "perPaxAnswers": []
  };
  const order = postOrder(body, params);
  assertStatus(order, 200, true, 'createOrderV1');
  return order;
};
;// CONCATENATED MODULE: ./apis/ttd/http/eventOrderV2.js

const postOrderV2 = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = "/tix-events-v2-order/v2/orders";
  return http_default().post(`${__ENV.LB_HOST}/tix-events-v2-order/v2/orders`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: external "k6/x/csv"
const csv_namespaceObject = require("k6/x/csv");;
var csv_default = /*#__PURE__*/__webpack_require__.n(csv_namespaceObject);
;// CONCATENATED MODULE: external "https://jslib.k6.io/k6-utils/1.1.0/index.js"
const _1_1_0_index_js_namespaceObject = require("https://jslib.k6.io/k6-utils/1.1.0/index.js");;
;// CONCATENATED MODULE: ./generator/ttd/createOrderV2.js







let randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const createOrderV2_data = new data_namespaceObject.SharedArray("some data name", function () {
  return JSON.parse(open('data/global_variable.json')).datas;
});
const createAndGetOrderV2 = () => {
  const order = createOrderV2_createOrder();
  (0,external_k6_namespaceObject.sleep)(1);
  const id = order.json('data').id;
  const pulling = orderDetailTillBlocked(id, 0, 10);
  const coreOrderId = pulling.json('data').coreOrderId;
  paymentReceived(parseInt(coreOrderId));
  csv_default().append('./dist/data/issuedRedeem.csv', [coreOrderId]);
};

const createOrderV2_createOrder = () => {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'storeId': 'TIKETCOM',
      'serviceId': 'GATEWAY',
      'channelId': 'WEB',
      'requestId': `perf2_unik_${__VU}_${__ITER}_${randomUUID}`,
      'username': 'testuser@tiket.com',
      'true-client-ip': '139.255.110.226',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'currency': 'IDR',
      'language': 'ID',
      'x-loyalty-level': 'LV0',
      'isVerifiedPhoneNumber': 'false',
      'businessId': createOrderV2_data[0].value,
      'tixtoken': createOrderV2_data[1].value,
      'tixsession': createOrderV2_data[2].value
    },
    tags: {
      name: 'createOrderV2'
    },
    timeout: '3m'
  };
  const phoneNumber = randomIntBetween(10000000, 1000000000000);
  const body = {
    "productScheduleId": createOrderV2_data[3].value,
    "contact": {
      "lastName": "rahman",
      "firstName": "arif",
      "phoneNumber": phoneNumber,
      "salutation": "MR",
      "countryCode": "+62",
      "emailAddress": "testing@tiket.com"
    },
    "collector": {
      "lastName": "rahman",
      "firstName": "arif",
      "phoneNumber": phoneNumber,
      "emailAddress": "testing@tiket.com",
      "salutation": "MR",
      "collectorCode": 1,
      "priceTierCode": "ALL",
      "countryCode": "+62"
    },
    "collectors": [{
      "collectorCode": 1,
      "priceTierCode": "ALL",
      "lastName": "rahman",
      "firstName": "arif",
      "phoneNumber": phoneNumber,
      "emailAddress": "testing@tiket.com",
      "salutation": "MR",
      "countryCode": "+62"
    }],
    "priceTierQuantities": [{
      "code": "ALL",
      "quantity": 1
    }],
    "perBookingAnswers": [],
    "perPaxAnswers": []
  };
  const order = postOrderV2(body, params);
  assertStatus(order, 200, true, 'createOrderV2');
  return order;
};

const orderDetail = id => {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'storeId': 'TIKETCOM',
      'serviceId': 'GATEWAY',
      'channelId': 'WEB',
      'requestId': `perf2_unik_${__VU}_${__ITER}_${randomUUID}`,
      'username': 'testuser@tiket.com',
      'true-client-ip': '139.255.110.226',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'currency': 'IDR',
      'language': 'ID',
      'x-loyalty-level': 'LV0',
      'isVerifiedPhoneNumber': 'false',
      'businessId': createOrderV2_data[0].value,
      'tixtoken': createOrderV2_data[1].value,
      'tixsession': createOrderV2_data[2].value
    },
    tags: {
      name: 'pullingOrderV2'
    },
    timeout: '3m'
  };
  const order = getOrder({
    id: id
  }, params);
  assertStatus(order, 200, true, 'pullingOrderV2');
  return order;
};

const paymentReceived = orderId => {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'storeId': 'TIKETCOM',
      'serviceId': 'GATEWAY',
      'channelId': 'WEB',
      'requestId': `perf2_unik_${__VU}_${__ITER}_${randomUUID}`,
      'username': 'testuser@tiket.com',
      'true-client-ip': '139.255.110.226',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'currency': 'IDR',
      'language': 'ID',
      'x-loyalty-level': 'LV0',
      'isVerifiedPhoneNumber': 'false',
      'businessId': createOrderV2_data[0].value,
      'tixtoken': createOrderV2_data[1].value,
      'tixsession': createOrderV2_data[2].value
    },
    tags: {
      name: 'paymentReceivedV2'
    },
    timeout: '3m'
  };
  const body = {
    'orderId': orderId,
    'status': 'SUCCESS',
    'source': '',
    'method': 'invoice',
    'virtualAccountNumber': '0',
    'totalAmount': createOrderV2_data[5].value,
    'currency': 'IDR',
    'date': '2021-09-22 07:59:52.893Z',
    'subsidies': []
  };
  const paymentReceived = putPaymentReceived(body, params);
  assertStatus(paymentReceived, 200, true, 'paymentReceivedV2');
  return paymentReceived;
};

const orderDetailTillBlocked = (id, counter = 0, maxRetry, sleepDuration = 1) => {
  // http request
  const detail = orderDetail(id);
  const success = assertStatus(detail, 200, true, 'getOrderDetail');

  if (!success) {
    console.log(`cannot_get_detail_when_pulling :${JSON.stringify(detail)}`);
    (0,external_k6_namespaceObject.fail)("cannot_get_detail_when_pulling");
  }

  const orderNotBlocked = detail.json('data').status === 'BLOCKING';
  (0,external_k6_namespaceObject.sleep)(sleepDuration);

  if (orderNotBlocked) {
    sleepDuration = sleepDuration * 2;
    counter++;
    return orderDetailTillBlocked(id, counter, maxRetry, sleepDuration);
  }

  if (counter > maxRetry - 1) {
    console.log(`k6_order_not_blocked: ${JSON.stringify(detail)}`);
    (0,external_k6_namespaceObject.fail)('k6_order_not_blocked');
  }

  return detail;
};
;// CONCATENATED MODULE: ./apis/ttd/http/orderAdmins.js

const getOrderAdminsById = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = "/tix-events-v2-order/admins/orders/coreOrderId/${requestData}";
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-events-v2-order/admins/orders/coreOrderId/${requestData}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/ttd/http/orderPartners.js

const getOrderPartners = params => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = "/tix-events-v2-order/partners/v1/orders";
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-events-v2-order/partners/v1/orders`, params);
  return resp;
};
const getOrderPartnersCount = params => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = "/tix-events-v2-order/partners/v1/orders/count";
  const resp = http.get(`${__ENV.LB_HOST}/tix-events-v2-order/partners/v1/orders/count`, params);
  return resp;
};
const putOrderPartnersredeemTickets = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  params.tags.name = "/tix-events-v2-order/partners/v1/orders/redeemTickets?ticketCodes=${requestData.ticketCode}";
  return http_default().patch(`${__ENV.LB_HOST}/tix-events-v2-order/partners/v1/orders/redeemTickets?ticketCodes=${requestData.ticketCode}`, JSON.stringify({}), params);
};
const postOrderPartner = (requestData, params) => {
  params.headers['Content-Type'] = 'application/json';
  return http.post(`${__ENV.LB_HOST}/tix-events-v2-order/partners/v1/orders`, JSON.stringify(requestData), params);
};
;// CONCATENATED MODULE: ./generator/ttd/getOrderAdmin.js





const randOrderCoreId = parseCSV('orderCoreId', 'data/issuedRedeem.csv');
const getOrderAdmin_data = new data_namespaceObject.SharedArray("some data name", function () {
  return JSON.parse(open('data/global_variable.json')).datas;
});
const randInt = randomIntBetween(1, 100000000000);
const issuedRedeem = () => {
  const coreOrderId = randOrderCoreId[Math.floor(Math.random() * randOrderCoreId.length)][0];
  console.log(`issuing: ${coreOrderId}`);
  const issued = adminTillIssued(coreOrderId);
  const ticketsFound = issued.json('data.tickets').length > 0;

  if (!ticketsFound) {
    console.log("Tickets not found");
    (0,external_k6_namespaceObject.fail)("Tickets not found - fail");
  }

  const redeemedBy = issued.json('data.tickets')[0].redeemedBy;

  if (redeemedBy == null) {
    redeemTicketsorderPartner(issued);
  } else {
    console.log(`Already redeemed by ${redeemedBy}`);
    (0,external_k6_namespaceObject.fail)("Already redeemed - fail");
  }
};

const orderAdminById = orderId => {
  const params = {
    headers: {
      'accept': 'application/json',
      'storeId': 'TIKETCOM',
      'serviceId': 'GATEWAY',
      'channelId': 'WEB',
      'requestId': randInt,
      'username': 'testuser@tiket.com',
      'true-client-ip': '139.255.110.226',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'currency': 'IDR',
      'language': 'ID',
      'x-loyalty-level': 'LV0',
      'isVerifiedPhoneNumber': 'false',
      'businessId': getOrderAdmin_data[0].value,
      'tixtoken': getOrderAdmin_data[1].value,
      'tixsession': getOrderAdmin_data[2].value
    },
    tags: {
      name: 'issuedOrder'
    },
    timeout: '3m'
  };
  const orderorderAdminById = getOrderAdminsById(orderId, params);
  assertStatus(orderorderAdminById, 200, true, 'issued');
  return orderorderAdminById;
};

const redeemTicketsorderPartner = issued => {
  const params = {
    headers: {
      'accept': 'application/json',
      'storeId': 'TIKETCOM',
      'serviceId': 'GATEWAY',
      'channelId': 'WEB',
      'requestId': randInt,
      'username': 'testuser@tiket.com',
      'true-client-ip': '139.255.110.226',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'currency': 'IDR',
      'language': 'ID',
      'x-loyalty-level': 'LV0',
      'isVerifiedPhoneNumber': 'false',
      'businessId': getOrderAdmin_data[0].value,
      'tixtoken': getOrderAdmin_data[1].value,
      'tixsession': getOrderAdmin_data[2].value
    },
    tags: {
      name: 'redeemTicket'
    },
    timeout: '3m'
  };
  const requestData = {
    'ticketCode': issued.json('data.tickets')[0].code
  };
  const redeemTickets = putOrderPartnersredeemTickets(requestData, params);
  assertStatus(redeemTickets, 200, true, 'redeemTickets');
  return redeemTickets;
};

const adminTillIssued = (coreOrderId, counter = 0, maxRetry = 10) => {
  const retryIssued = (0,external_k6_namespaceObject.check)(counter, {
    'retry_issued': c => c < maxRetry - 1
  });

  if (!retryIssued) {
    console.log(`max_retry_reacher for order: ${coreOrderId}`);
    (0,external_k6_namespaceObject.fail)('max_retry_reached');
  } // http request


  const adminById = orderAdminById(coreOrderId);
  (0,external_k6_namespaceObject.sleep)(1);
  counter++;
  const orderNotIssued = adminById.json('data').status !== 'ISSUED';

  if (orderNotIssued) {
    console.log("Pulling issued: " + counter);
    return adminTillIssued(coreOrderId, counter);
  }

  return adminById;
};
;// CONCATENATED MODULE: ./generator/ttd/getOrderPartners.js



const getOrderPartners_data = new data_namespaceObject.SharedArray("some data name", function () {
  return JSON.parse(open('data/global_variable.json')).datas;
});
const orderPartner = () => {
  // TODO: need to make sure.
  const params = {
    headers: {
      'accept': 'application/json',
      'storeId': 'TIKETCOM',
      'serviceId': 'GATEWAY',
      'channelId': 'WEB',
      'requestId': '1234512345',
      'username': 'testuser@tiket.com',
      'true-client-ip': '139.255.110.226',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'currency': 'IDR',
      'language': 'ID',
      'x-loyalty-level': 'LV0',
      'isVerifiedPhoneNumber': 'false',
      'businessId': getOrderPartners_data[0].value,
      'tixtoken': getOrderPartners_data[1].value,
      'tixsession': getOrderPartners_data[2].value
    },
    tags: {
      name: 'orderPartner'
    },
    timeout: '3m'
  };
  const order = getOrderPartners(params);
  assertStatus(order, 200, true, 'OrderPartners');
};
;// CONCATENATED MODULE: ./scenarios/ttd/eventOrder.js





const serverCount = 3;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    createAndGetOrderV2: {
      targetRate: distribute(serverCount, 5500),
      dist: 1,
      startTime: '0s'
    } // createAndGetOrder: { targetRate: distribute(serverCount, 1290), dist: 0.2, startTime: '0s' },
    // issuedRedeem: { targetRate: distribute(serverCount, 14300), dist: 0.2, startTime: '0s' },
    // orderPartner: { targetRate: distribute(serverCount, 40), dist: 0.2, startTime: '0s' }

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
      startTime: config.groupServices[name].startTime,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS * config.groupServices[name].dist,
      stages: [// Scenario 1 & 2 for 10x normal production load last 1 month
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '2m',
        target: 0
      }]
    }; // console.log(JSON.stringify(options))
  }
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;