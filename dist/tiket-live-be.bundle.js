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
  "geteventByHash": () => (/* reexport */ geteventByHash),
  "getserverStatus": () => (/* reexport */ getserverStatus),
  "granteventAccess": () => (/* reexport */ granteventAccess),
  "heartbeat": () => (/* reexport */ heartbeat),
  "options": () => (/* binding */ options),
  "playevent": () => (/* reexport */ playevent)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/tiket-live/B2C/b2cRestApi.js

/**
 * @param {object} params global parameters
 * @returns http response
 */

const getServerStatus = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-live/api/v1/server-stats`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const getEventByHash = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-live/api/v1/events/c0b1e7ba-1aed-409f-b4fc-8409f62bde8a/watch-tokens/3cb6c1f5-a67c-4efc-946e-6d379b1a0eb3`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const playEvent = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().patch(`${__ENV.LB_HOST}/tix-live/api/v1/events/c0b1e7ba-1aed-409f-b4fc-8409f62bde8a/watch-tokens/3cb6c1f5-a67c-4efc-946e-6d379b1a0eb3/play`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const heartBeat = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-live/api/v1/events/c0b1e7ba-1aed-409f-b4fc-8409f62bde8a/watch-tokens/74e182fc-d752-41bd-a68b-2b5ff30136be/heartbeat`, JSON.stringify(body), params);
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
;// CONCATENATED MODULE: ./generator/tiket-live/B2C/b2cRestApi.js



const getserverStatus = () => {
  const params = {
    headers: {
      accept: '*/*',
      Authorization: 'Bearer eyJraWQiOiJrTXlXYTRYOXNBeFpNQ1RuMEZ1YkJqRkp3YWxJSEV2SCJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MWQ1OWFkOGQwN2NkYzMyNTlkMjk2ZmEiLCJuYmYiOjE2NDEzODg3NjAsImlzcyI6Imh0dHBzOi8vcGVyZi50aWtldC5jb20vIiwiZXhwIjoxNjQxOTkzNTYwfQ.-DsEbRrLMuTaDxGq8NgGME6kMRQiHxGRRne2mY4hZfSpGnhoVRw_dldXh-yO3J50'
    },
    tags: {
      name: 'getServerStatus'
    }
  };
  (0,external_k6_namespaceObject.group)('getServerStatus', () => {
    const hp = getServerStatus(params);
    assertStatus(hp, 200, true, 'getServerStatus');
    assertSuccess(hp, 'SUCCESS', true, 'getServerStatus');
  });
};
const geteventByHash = () => {
  const params = {
    headers: {
      accept: '*/*',
      Authorization: 'Bearer eyJraWQiOiJrTXlXYTRYOXNBeFpNQ1RuMEZ1YkJqRkp3YWxJSEV2SCJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MWQ1OWFkOGQwN2NkYzMyNTlkMjk2ZmEiLCJuYmYiOjE2NDEzODg3NjAsImlzcyI6Imh0dHBzOi8vcGVyZi50aWtldC5jb20vIiwiZXhwIjoxNjQxOTkzNTYwfQ.-DsEbRrLMuTaDxGq8NgGME6kMRQiHxGRRne2mY4hZfSpGnhoVRw_dldXh-yO3J50'
    },
    tags: {
      name: 'getEventByHash'
    }
  };
  (0,external_k6_namespaceObject.group)('getEventByHash', () => {
    const hp = getEventByHash(params);
    assertStatus(hp, 200, true, 'getEventByHash');
    assertSuccess(hp, 'SUCCESS', true, 'getEventByHash');
  });
};
const playevent = () => {
  const params = {
    headers: {
      accept: '*/*',
      Authorization: 'Bearer eyJraWQiOiJrTXlXYTRYOXNBeFpNQ1RuMEZ1YkJqRkp3YWxJSEV2SCJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MWQ1OWFkOGQwN2NkYzMyNTlkMjk2ZmEiLCJuYmYiOjE2NDEzODg3NjAsImlzcyI6Imh0dHBzOi8vcGVyZi50aWtldC5jb20vIiwiZXhwIjoxNjQxOTkzNTYwfQ.-DsEbRrLMuTaDxGq8NgGME6kMRQiHxGRRne2mY4hZfSpGnhoVRw_dldXh-yO3J50',
      'platform-info': 'desktop',
      'operating-system': 'Macintosh',
      'browser-version': '95.0.4638.54',
      'browser-info': 'Chrome'
    },
    tags: {
      name: 'playEvent'
    }
  };
  const body = {
    deviceToken: 'f8681aac-551e-4ab6-9f24-e0d859ab8e26'
  };
  (0,external_k6_namespaceObject.group)('playEvent', () => {
    const hp = playEvent(params, body);
    assertStatus(hp, 200, true, 'playEvent');
    assertSuccess(hp, 'SUCCESS', true, 'playEvent');
  });
};
const heartbeat = () => {
  const params = {
    headers: {
      accept: '*/*',
      Authorization: 'Bearer eyJraWQiOiJrTXlXYTRYOXNBeFpNQ1RuMEZ1YkJqRkp3YWxJSEV2SCJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MWQ1OWFkOGQwN2NkYzMyNTlkMjk2ZmEiLCJuYmYiOjE2NDEzODg3NjAsImlzcyI6Imh0dHBzOi8vcGVyZi50aWtldC5jb20vIiwiZXhwIjoxNjQxOTkzNTYwfQ.-DsEbRrLMuTaDxGq8NgGME6kMRQiHxGRRne2mY4hZfSpGnhoVRw_dldXh-yO3J50'
    },
    tags: {
      name: 'heartBeat'
    }
  };
  const body = {
    deviceToken: 'f8681aac-551e-4ab6-9f24-e0d859ab8e26'
  };
  (0,external_k6_namespaceObject.group)('heartBeat', () => {
    const hp = heartBeat(params, body);
    assertStatus(hp, 200, true, 'heartBeat');
    assertSuccess(hp, 'SUCCESS', true, 'heartBeat');
  });
};
;// CONCATENATED MODULE: ./apis/tiket-live/S2S/grantEventAccess.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const grantEventAccess = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-live/internal/v1/events/grant-access`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/tiket-live/S2S/grantEventAccess.js



const granteventAccess = () => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: 'grantEventAccess'
    }
  };
  const body = {
    accountId: '301524785',
    serviceId: 'ttd',
    eventAccess: {
      eventHash: 'c0b1e7ba-1aed-409f-b4fc-8409f62bde8a',
      startDateTime: '2021-12-10 02:30:58',
      referenceId: '4881ab80-ae9c-4072-aa77-93afbcbfbacc'
    }
  };
  (0,external_k6_namespaceObject.group)('grantEventAccess', () => {
    const hp = grantEventAccess(params, body);
    assertStatus(hp, 200, true, 'grantEventAccess');
    assertSuccess(hp, 'SUCCESS', true, 'grantEventAccess');
  });
};
;// CONCATENATED MODULE: ./scenarios/tiket-live/s2sAndB2c.js



function distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    granteventAccess: {
      targetRate: distribute(1000 * __ENV.X_TARGET)
    },
    getserverStatus: {
      targetRate: distribute(1000 * __ENV.X_TARGET)
    },
    geteventByHash: {
      targetRate: distribute(1000 * __ENV.X_TARGET)
    },
    playevent: {
      targetRate: distribute(1000 * __ENV.X_TARGET)
    },
    heartbeat: {
      targetRate: distribute(1000 * __ENV.X_TARGET)
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
        duration: '4m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '2m',
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