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
  "recommendation": () => (/* reexport */ recommendation),
  "recommendationOrderParam": () => (/* reexport */ recommendationOrderParam)
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
;// CONCATENATED MODULE: ./apis/utilities/recommendation/recommendation.js

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns recommendation http response
 */

const getRecommendation = (params, queryParams) => {
  params.tags.name = 'getRecommendation';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-recommendation/recommendation?${queryParams.toString()}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/utilities/recommendation/recommendation-order-param.js

/**
 * Get Recommendation Order Param
 * @param {object} params global parameters
 * @queryparam {object} params global query parameters
 * @returns recommendation-order-param http response
 */

const getRecommendationOrderParam = (params, queryP) => {
  params.tags.name = 'getRecommendationOrderParam';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-recommendation/recommendation-order-params?${queryP.toString()}`, params);
  return resp;
};
;// CONCATENATED MODULE: external "https://jslib.k6.io/url/1.0.0/index.js"
const _1_0_0_index_js_namespaceObject = require("https://jslib.k6.io/url/1.0.0/index.js");;
;// CONCATENATED MODULE: ./generator/recommendation/recommendation.js





const recommendationData = parseCSV('users', 'data/recommendation.csv');
const recommendation = () => {
  const data = recommendationData[Math.floor(Math.random() * (recommendationData.length - 1))];
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'X-Account-Id': data[0],
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Currency': 'IDR',
      'X-Request-Id': '8158e195-3b92-4f6a-b4d7-a2b5e85b9874',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': data[1]
    },
    tags: {
      name: ''
    }
  };
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['productType', randomList(['hotel', 'nha', 'ttd'])]]);
  (0,external_k6_namespaceObject.group)('recommendation', () => {
    const hp = getRecommendation(params, queryParams);
    assertStatus(hp, 200, true, 'getRecommendation');
    assertSuccess(hp, 'SUCCESS', true, 'getRecommendation');
  });
};
const recommendationOrderParam = () => {
  /*
  *  email can be dyaminc
     origin can be dynamic
     destination can be dynamic
     accountId can be dynamic
     orderId can be dynamic
     orderHash can by dynamic
  */
  const data = recommendationData[Math.floor(Math.random() * (recommendationData.length - 1))];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['email', data[2]], ['accountId', data[0]], ['departureDate', '2021-10-12'], ['returnDate', '2021-10-13'], ['origin', data[3]], ['destination', data[4]], ['numPerson', '1'], ['totalAmount', '1'], ['orderType', 'flight'], ['orderId', data[5]], ['orderHash', data[6]], ['chipsId', randomList(['hotel', 'nha', 'ttd'])]]);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Currency': 'IDR',
      'X-Request-Id': '8158e195-3b92-4f6a-b4d7-a2b5e85b9874',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Account-Id': data[0],
      'X-Username': data[1]
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('getRecommendationOrderParam', () => {
    const hp = getRecommendationOrderParam(params, queryParams);
    assertStatus(hp, 200, true, 'getRecommendationOrderParam');
    assertSuccess(hp, 'SUCCESS', true, 'getRecommendationOrderParam');
  });
};
;// CONCATENATED MODULE: ./scenarios/utilities/recommendation/recommendation.js


const serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    recommendation: {
      targetRate: distribute(serverCount, 55000),
      dist: 1
    },
    recommendationOrderParam: {
      targetRate: distribute(serverCount, 10000),
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
    const definedStages = {
      load: [{
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
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '20m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '3m',
        target: 0
      }],
      spike1: [{
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, // 10k
      {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, // 30k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, // 30k
      {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, // 60k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, // 60k
      {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate)
      }, // 100k
      {
        duration: '2m',
        target: 0
      }],
      spike2: [{
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, // 10k
      {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, // 30k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, // 30k
      {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, // 60k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, // 60k
      {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate)
      }, // 100k
      {
        duration: '2m',
        target: 0
      }],
      mongoDown: [{
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '15m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '2m',
        target: 0
      }],
      breakPoint: [{
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
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, {
        duration: '3m',
        target: 0
      }]
    };
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
      stages: definedStages[__ENV.STAGE || 'load']
    };
  }
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;