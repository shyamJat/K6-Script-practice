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
  "hotelMarkupCalculate": () => (/* reexport */ hotelMarkupCalculate),
  "options": () => (/* binding */ options)
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
;// CONCATENATED MODULE: ./apis/hotel/markup/calculate.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const calculate = (host, params, body, cache) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-markup/markup/calculate?cache=${cache}`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/hotel/markup/calculate.js



const host = __ENV.LB_HOST || 'https://lb-perf.tiket.com'; // const host = 'https://lb1-ms.tiket.com';

var data = randomCSVData('email', './data/email.csv'); // var user = randomCSV('email', './data/email.csv')[0];

const hotelMarkupCalculate = () => {
  var user = data[Math.floor(Math.random() * data.length)][0];
  const params = {
    headers: {
      // accept: '*/*',
      accept: '*/*',
      'channelId': 'DESKTOP',
      'currency': 'IDR',
      'customerSessionId': getRandomNumberofLength(4, false),
      'lang': 'en',
      'requestId': getRandomNumberofLength(8, false),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'user-agent': 'chrome',
      'username': user,
      'verifiedPhoneNumber': '0',
      'x-forwarded-host': '127.0.0.1'
    },
    tags: {
      name: 'tix-hotel-markup/markup/calculate'
    },
    timeout: "5s"
  };
  var currentMonth = new Date().getMonth() + 1;
  var remainingMonths = 12 - currentMonth;
  var month = randomList(getArray(remainingMonths, currentMonth));
  var start = randomList(getArray(20, 2));
  var startday = new Date(2022, month, start).toISOString().slice(0, 10);
  var daysToAdd = parseInt(randomList([1, 2, 3, 4]));
  var end = start + daysToAdd;
  var endday = new Date(2022, month, end).toISOString().slice(0, 10); // console.log("Start Day" + startday);
  // console.log("Days to Add" + daysToAdd);
  // console.log("End day" + endday);

  const body = {
    "vendor": randomList(["HOTELBEDS", "RAKUTEN", "TIKET", "AGODA", "EXPEDIA_RAPID"]),
    "travelStartDate": startday,
    "travelEndDate": endday,
    "payloads": createJsonPayloads(startday, endday, daysToAdd)
  };
  var cache = true; //false means we do not read cache, direcly query to mongo & calculate again we only used it for testing only: from @mfaji30

  (0,external_k6_namespaceObject.group)('hotel-markup-calculate', () => {
    const hp = calculate(host, params, body, cache);
    assertStatus(hp, 200, true, 'Status Code');
    assertSuccess(hp, 'SUCCESS', true, 'Status');
    assertObjectArraySize(hp, 0, false, 'Response array Size');
  });
};

function createJsonPricePerNight(startDate, endDate) {
  // console.log("Inside createJsonPricePerNight");
  var pricePerNights = [];
  var days = getDays(startDate, endDate);

  for (var i = 0; i < days; i++) {
    var obj = new Object();
    obj.stayingDate = addDaystoDate(startDate, i); // obj.rate = getRandomNumberofLength(7, true);

    obj.rate = 4324123.17;
    obj.loyaltyRate = 0;
    pricePerNights.push(obj);
  } // return JSON.stringify(pricePerNights);


  return pricePerNights;
}

function createJsonPayloadDetails(startDate, endDate, rEIDstart, rEIDend, totalDays) {
  // console.log("Inside createJsonPayloadDetails");
  var days = getDays(startDate, endDate);

  if (totalDays === days) {
    var payloadDetails = [];

    for (var i = 0; i < days; i++) {
      rEIDstart = rEIDstart + i;
      rEIDend = rEIDend + i;
      var obj = new Object();
      obj.markupable = true;
      obj.enableSubsidy = randomList([true, false]);
      obj.roomExternalId = rEIDstart + "#" + rEIDend;
      obj.pricePerNights = createJsonPricePerNight(startDate, endDate);
      payloadDetails.push(obj);
    } //  return JSON.stringify(payloadDetails);


    return payloadDetails;
  } else {
    console.log("!!!!! Days difference calculates does not match, Startdate -> " + startDate + ", Enddate -> " + endDate + ", Days Added -> " + totalDays + ", Days Calculated ->" + days + "!!!!!");
  }
}

function createJsonPayloads(startDate, endDate, totalDays) {
  // console.log("Inside createJsonPayloads");
  var payloadSize = randomList(getArray(21, 10)); // var payloadSize = 100;

  var payloads = [];
  var rEIDstart = getRandomNumberofLength(7, true);
  var rEIDend = getRandomNumberofLength(6, true);

  for (var i = 0; i < payloadSize; i++) {
    var obj = new Object(); // obj.hotelExternalId = getRandomNumberofLength(8, false);

    obj.hotelExternalId = randomIntBetween(10000000, 10050000); //10000000-10050000

    obj.payloadDetails = createJsonPayloadDetails(startDate, endDate, rEIDstart, rEIDend, totalDays);
    payloads.push(obj);
  } // return JSON.stringify(payloads);


  return payloads;
}

function assertObjectArraySize(res, value, verbose, measure) {
  (0,external_k6_namespaceObject.check)(res, {
    [`${measure} is NOT ${value}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('data').responses.length == value && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('data').responses.length != value;
    }
  });
}
;// CONCATENATED MODULE: ./scenarios/hotel/markup/calculate.js


const serverCount = __ENV.SERVER_COUNT || 1;
const iteration = __ENV.ITERATION_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    hotelMarkupCalculate: {
      targetRate: distribute(serverCount, 100000),
      dist: 1
    }
  }
};
const options = {
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
      iterations: iteration
    };
  } else {
    var stages = [];

    if (config.scenario === 'load') {
      stages = [{
        duration: '2m',
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
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '40m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '5m',
        target: 0
      }];
    } else if (config.scenario === 'endurance') {
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
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '90m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'capacity') {
      stages = [{
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.017)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.017)
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
        target: Math.round(config.groupServices[name].targetRate * 0.07)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.07)
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
        target: Math.round(config.groupServices[name].targetRate * 0.15)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.15)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.17)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.17)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.19)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.19)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.213)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.213)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.225)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.225)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.238)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.238)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.25)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.25)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.263)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.263)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.275)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.275)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.288)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.288)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.313)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.313)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.325)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.325)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.338)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.338)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.35)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.35)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.363)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.363)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.375)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.375)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.388)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.388)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.413)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.413)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.425)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.425)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.438)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.438)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.45)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.45)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.463)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.463)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.475)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.475)
      }, {
        duration: '5m',
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