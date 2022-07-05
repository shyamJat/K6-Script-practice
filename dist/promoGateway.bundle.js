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
  "DiscountApplyV2": () => (/* reexport */ DiscountApplyV2),
  "DiscountCashback": () => (/* reexport */ DiscountCashback),
  "options": () => (/* binding */ options)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/papaparse/5.1.1/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/papaparse/5.1.1/index.js");;
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
;// CONCATENATED MODULE: external "https://jslib.k6.io/k6-utils/1.0.0/index.js"
const _1_0_0_index_js_namespaceObject = require("https://jslib.k6.io/k6-utils/1.0.0/index.js");;
;// CONCATENATED MODULE: ./apis/payment/core/promoGateway.js

/**
 * promo suggestion v2
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */

const promoGateway_promoSuggestionV2 = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${host}/gateway/tix-discount-engine/discount/promo-suggestion/v2`, JSON.stringify(body), params);
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
  const resp = http.post(`${host}/gateway/tix-discount-engine/discount/unApply/v2`, JSON.stringify(body), params);
  return resp;
};
/**
 * un apply discount code
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns promo http response
 */

const promoGateway_discountCheckAvailabilityV2 = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${host}/gateway/tix-discount-engine/discount/checkAvailability/v2`, JSON.stringify(body), params);
  return resp;
};
/**
* Get discount cashback
* @param {object} params global parameters
* @returns promo http response
*/

const discountCashback2 = (host, params, orderId, promoCode) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/gateway/tix-discount-engine/discount/cashback?orderId=${orderId}&promoCode=${promoCode}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/payment/core/promoGateway.js




const host = "https://lb-perf.tiket.com";
const PromoSuggestionV2 = () => {
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
  };
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
  }; // group('payment-landing-withmethod', () => {

  const hp = promoSuggestionV2(host, params, body);
  assertStatus(hp, 200, true, 'promoSuggestionV2');
  assertSuccess(hp, 'SUCCESS', true, 'promoSuggestionV2'); // })
};
const DiscountApplyV2 = () => {
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
  };
  const body = {
    "orderId": "1200260111",
    "orderHash": "478A840F30AFDCAB62B2C4E6",
    "discountCode": "PROMOKU",
    "currency": "IDR",
    "paymentType": "va_bca",
    "productType": "FLIGHT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountApplyV2(host, params, body);
  utils_assertStatus(hp, 200, true, 'discountApplyV2');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountApplyV2'); // })
};
const DiscountUnAplyV2 = () => {
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
  };
  const body = {
    "orderId": "1200260111",
    "orderHash": "478A840F30AFDCAB62B2C4E6",
    "discountCode": "PROMOKU"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountUnAplyV2(host, params, body);
  assertStatus(hp, 200, true, 'discountUnAplyV2');
  assertSuccess(hp, 'SUCCESS', true, 'discountUnAplyV2'); // })
};
const DiscountCheckAvailabilityV2 = () => {
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
  };
  const body = {
    "orderId": "1200260111",
    "orderHash": "478A840F30AFDCAB62B2C4E6",
    "discountCode": "PROMOKU",
    "currency": "IDR",
    "paymentType": "va_bca",
    "productType": "FLIGHT",
    "totalPrice": 708900,
    "discountType": "PROMOCODE"
  }; // group('payment-landing-withmethod', () => {

  const hp = discountCheckAvailabilityV2(host, params, body);
  assertStatus(hp, 200, true, 'discountCheckAvailabilityV2');
  assertSuccess(hp, 'SUCCESS', true, 'discountCheckAvailabilityV2'); // })
};
const DiscountCashback = () => {
  const orderId = "1200260111";
  const promoCode = "CASHBACK2022";
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
  }; // group('payment-landing-withmethod', () => {

  const hp = discountCashback2(host, params, orderId, promoCode);
  utils_assertStatus(hp, 200, true, 'discountCashback');
  utils_assertSuccess(hp, 'SUCCESS', true, 'discountCashback'); // })
};
;// CONCATENATED MODULE: ./scenarios/payment/promoGateway.js


const serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    DiscountApplyV2: {
      targetRate: distribute(serverCount, 10000),
      dist: 1
    },
    DiscountCashback: {
      targetRate: distribute(serverCount, 10000),
      dist: 1
    }
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
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '200m',
        target: Math.round(config.groupServices[name].targetRate)
      }, //8 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.5) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.5) },      //17 minutes
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2) },        //31 minutes
      // { duration: '10m', target: Math.round(config.groupServices[name].targetRate * 2) },
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