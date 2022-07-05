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
  "hotelDeals": () => (/* reexport */ hotelDeals),
  "options": () => (/* binding */ options)
});

;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/hotel-deals/calculated.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const calculated = (params, body) => {
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-hotel-deals/hotel-deals/calculate`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/papaparse/5.1.1/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/papaparse/5.1.1/index.js");;
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
} //Use this method if you want to randomize data from the complete csv per iteration

function randomCSVData(label, filePath) {
  const data = parseCSV(label, filePath);
  return data;
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
const assertResponseStatus = (res, code, verbose, name) => {
  check(res, {
    [`Response ${name} is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json(name) != code && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json(name) === code;
    }
  });
};
const distribute = (serverCount, value) => {
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
};
const assertSuccessGQL = (res, code, verbose, name) => {
  check(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json(`0.data.${name}.code`) != code && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json(`0.data.${name}.code`) === code;
    }
  });
};
const randomList = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};
const assertWithFail = ({
  res = null,
  status = 200,
  verbose = false,
  name
}) => {
  const pass = assertStatus(res, status, verbose, name);

  if (!pass) {
    console.log("assertWithFail NOT PASSED", JSON.stringify(res));
    fail(`FAIL: ${JSON.stringify(res)}`);
  }
};
const getArray = (lengthy, startFrom) => {
  return Array.from({
    length: lengthy
  }, (_, i) => i + startFrom);
};
/**
 * @length {number} number of digits in random number
 * @asNumber {boolean} return as number(true) or as String(false)
 * @returns provided length of number as String or number format based on @asNumber
 */

const getRandomNumberofLength = (length, asNumber) => {
  var min = parseInt(1 .toString().padEnd(length, '0'));
  var max = parseInt(9 .toString().padEnd(length, '0'));

  if (asNumber) {
    return Math.floor(min + Math.random() * max);
  } else {
    return Math.floor(min + Math.random() * max).toString();
  }
};
/**
 * @startDate {String} start date
 * @endDate {String} end date
 * @returns number of days between startdate and enddate in number format 
 * getDays('2022-06-01','2022-06-10')
 *  9
 */

const getDays = (startDate, endDate) => {
  //initialize dates with Date object
  const date1 = new Date(startDate);
  const date2 = new Date(endDate); // calculation for converting a day into milliseconds

  const oneDay = 1000 * 60 * 60 * 24; // calculation for the time difference between start and last

  const diffTime = date2.getTime() - date1.getTime(); // calculation for the days between start and last

  const diffDays = Math.round(diffTime / oneDay); // return number of days

  return diffDays;
};
const addDaystoDate = (startDate, daycount) => {
  var date = new Date(startDate);
  date.setDate(date.getDate() + daycount);
  return formatDate(date);
};
;// CONCATENATED MODULE: ./generator/hotel-deals/calculated.js


const channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const requestId_array = [12345, 13231, 13451, 56754, 98721];
const username_array = ["test", "peter", "seter", "pat", "test", "peter", "aeter", "bat", "cest", "deter", "eeter", "fat", "gest", "heter", "ieter", "jat"];
const userAgent_array = (/* unused pure expression or super */ null && (["chrome", "mozilla", "brave", "safari"]));
const loyalty_level = ["L1", "L2", "L3", "L4"];
const ratekey_array = ["CORPORATE", "AFFILIATE", "CROSS_SELL"];
const channelId = randomItem(channelId_array);
const requestId = randomItem(requestId_array);
const username = randomItem(username_array);
const loyaltyLevel = randomItem(loyalty_level);
const ratekey = randomItem(ratekey_array);
let month = randomIntBetween(4, 12);
let checkInDateYear = 2022;
let days = randomIntBetween(1, 30);
const x = randomIntBetween(1, 7);
var list = [];

for (let i = 1; i <= x; i++) {
  list.push({
    "date": checkInDateYear + "-" + month + "-" + (days + i),
    "netprice": randomIntBetween(10000, 12000),
    "sellPrice": randomIntBetween(19000, 23000)
  });
}

const hotelDeals = () => {
  const params = {
    headers: {
      "login": Math.floor(Math.random() * 2),
      //0 and 1
      "storeId": "TIKETCOM",
      // no changes 
      "channelId": channelId,
      // 'ANDROID', 'MOBILE', 'IOS', 'DESKTOP'
      "currency": "IDR",
      // no changes
      "customerSessionId": "d41d" + Math.floor(Math.random() * 10) + "cd98f00b204e9800998ecf8427",
      // can be dynamic
      "lang": "id",
      //cannot be changed
      "requestId": requestId,
      "serviceId": "gateway",
      "username": `${username}` + "@tiket.com",
      "x-forwarded-host": "192.168.1." + Math.floor(Math.random() * 4),
      "user-agent": "chrome",
      "x-loyalty-level": loyaltyLevel,
      // can be changed, values: LV1, LV2, LV3, LV4
      "x-rate-key": ratekey,
      'Content-Type': 'application/json' // 'StoreId':'TIKETCOM',
      // 'channelId':'ANDROID',
      // 'currency':'IDR',
      // 'customerSessionId':'d41d8cd98f00b204e9800998ecf8427',
      // 'lang':'id',
      // 'requestId':'12345',
      // 'serviceId':'gateway',
      // 'username':'testing@tiket.com',
      // 'x-forwarded-host':'192.168.1.3',
      // 'user-agent':'chrome',
      // 'x-loyalty-level':'L4',
      // 'x-rate-key':'AFFILIATE',
      // 'Login':'0'

    },
    tags: {
      name: 'hotelDeals'
    }
  };
  const body = {
    "adult": 1,
    "checkInDate": "2022-04-01",
    "child": 0,
    "hotels": [{
      "commission": 10,
      "currency": "IDR",
      "hotelId": 24596970,
      "rooms": [{
        "adultPaid": 1,
        "childPaid": 0,
        "pricing": [{
          "date": "2022-04-01",
          "netPrice": 900000,
          "sellPrice": 1000000
        }],
        "ratePlanId": 31946,
        "roomId": 2095852,
        "roomTypeId": 8
      }],
      "star": 3,
      "tariffMode": "sell",
      "timezone": "+07:00"
    }, {
      "commission": 10,
      "currency": "IDR",
      "hotelId": 121135,
      "rooms": [{
        "adultPaid": 1,
        "childPaid": 0,
        "pricing": [{
          "date": "2022-04-01",
          "netPrice": 900000,
          "sellPrice": 1000000
        }],
        "ratePlanId": 31786,
        "roomId": 2233300,
        "roomTypeId": 8
      }, {
        "adultPaid": 1,
        "childPaid": 0,
        "pricing": [{
          "date": "2022-04-01",
          "netPrice": 900000,
          "sellPrice": 1000000
        }],
        "ratePlanId": 15727,
        "roomId": 2232,
        "roomTypeId": 8
      }],
      "star": 2,
      "tariffMode": "sell",
      "timezone": "+07:00"
    }],
    "loyaltyTierValue": "Loyalty",
    "night": 1,
    "room": 1
  };
  const res = calculated(params, body);
  assertStatus(res, 200, true, 'Status Code');
};
;// CONCATENATED MODULE: ./scenarios/hotel-deals/calculated.js


function calculated_distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    hotelDeals: {
      targetRate: calculated_distribute(1 * __ENV.X_TARGET)
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
  } else if (config.scenario == "load") {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [{
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.0)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.0)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.0)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 5.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '5m',
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