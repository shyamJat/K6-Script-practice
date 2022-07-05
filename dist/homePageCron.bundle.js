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
  "HomePageCron": () => (/* reexport */ HomePageCron),
  "options": () => (/* binding */ options)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/home/http/homePageCron.js

/**
 * Get Cron
 * @param {object} params global parameters
 * @returns home module http response
 */

const getHomePageCron = params => {
  params.tags.name = 'getHomePageCron';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/home-pages/cron`, params);
  return resp;
};
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
const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1; // .toFixed() returns string, so ' * 1' is a trick to convert to number
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
} // Use this method if you want to randomize data from the complete csv per iteration

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
    console.log('assertWithFail NOT PASSED', JSON.stringify(res));
    fail(`FAIL: ${JSON.stringify(res)}`);
  }
};
const assertSuccessNotEmpty = (res, status, verbose, name) => {
  check(res, {
    [`${name} status is ${status}`]: r => {
      // Will be printed only if verbose = true
      if (r.status != status && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.status === status;
    },
    [`${name} is not empty`]: res => {
      if (res.json('data') == []) {
        console.log(JSON.stringify(res));
      }

      return res.json('data');
    }
  });
  return check;
};
const keyword = randomItem(['jakarta', 'bali', 'bandung', 'soekarno', 'hotel di bali', 'hotel di jakarta', 'refund', 'cara reschedule', 'antigen test di bandara', 'transfer 2x', 'ganti hotel kalau penuh', 'cara pake gift voucher', 'sewa mobil tanpa driver', 'sewa mobil jakarta bandung pp', 'sewa mobil di bali', 'sewa mobil di bandung', 'Pesawat ke Bandung', 'Terbang ke Bali', 'Tiket Tujuan Bali', 'Kereta ke Karang', 'PCR di jakarta', 'Konser di Jakarta', 'bakmi', 'hotel in bali', 'fly to bandung', 'fly to bali', 'PCR in jakarta']);
;// CONCATENATED MODULE: ./generator/home/homePageCron.js



const lang_array = ['id', 'en'];
const channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const HomePageCron = () => {
  const channelId = randomItem(channelId_array);
  const lang = randomItem(lang_array);
  var requestId = Math.random().toString(8).slice(12);
  var username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `tiket${username}`
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('HomePageCron', () => {
    const l = getHomePageCron(params);
    assertStatus(l, 200, true, 'getHomePageCron');
    assertSuccess(l, 'SUCCESS', true, 'getHomePageCron');
  });
};
;// CONCATENATED MODULE: ./scenarios/home/homePageCron.js


function homePageCron_distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    HomePageCron: {
      targetRate: homePageCron_distribute(1 * __ENV.X_TARGET)
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
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
        duration: '1m',
        target: config.groupServices[name].targetRate * 1
      }, {
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