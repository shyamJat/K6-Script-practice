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
  "LoginToken": () => (/* reexport */ LoginToken),
  "nonLoginToken": () => (/* reexport */ nonLoginToken),
  "options": () => (/* binding */ options),
  "tiketLive": () => (/* reexport */ tiketLive),
  "v1Live": () => (/* reexport */ v1Live),
  "v1LiveJoinChat": () => (/* reexport */ v1LiveJoinChat)
});

;// CONCATENATED MODULE: external "https://jslib.k6.io/k6-utils/1.1.0/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/k6-utils/1.1.0/index.js");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/url/1.0.0/index.js"
const _1_0_0_index_js_namespaceObject = require("https://jslib.k6.io/url/1.0.0/index.js");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/tiket-live/S2S/grantEventAccess.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const grantEventAccess_grantEventAccess = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/event-gateway/tix-live/internal/v1/events/grant-access`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/tiket-live/B2C/b2cRestApi.js

/**
 * @param {object} params global parameters
 * @returns http response
 */

const getServerStatus = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/gateway-live/tix-live/api/v1/server-stats`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const getEventByHash = (params, event, watchToken) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/gateway-live/tix-live/api/v1/events/${event}/watch-tokens/${watchToken}`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const playEvent = (params, body, event, watchToken) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().patch(`${__ENV.LB_HOST}/gateway-live/tix-live/api/v1/events/${event}/watch-tokens/${watchToken}/play`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const heartBeat = (params, body, event, watchToken) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/gateway-live/tix-live/api/v1/events/${event}/watch-tokens/${watchToken}/heartbeat`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/tiket-live/S2S/v1LiveApi.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const getServerStatus1 = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/v1/live/query`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const getEventByHash1 = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/v1/live/query`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const getJoinEvent = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/v1/live/query`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const getStreamAuth = (params, hash) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/v1/live/events/${hash}/stream/auth`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const getHeartBeat = (params, body, hash) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/v1/live/events/${hash}/heartbeat`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const v1LiveApi_getJoinChat = (params, body, hash) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/v1/live/events/${hash}/join-chat`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const v1LiveApi_jobsUpdateUniqueViewers = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.get(`${__ENV.LB_HOST}/v1/live/application/jobs/update-unique-viewer`, params);
  return resp;
};
;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/papaparse/5.1.1/index.js"
const _5_1_1_index_js_namespaceObject = require("https://jslib.k6.io/papaparse/5.1.1/index.js");;
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
  console.log(JSON.stringify(data));
  return data[Math.floor(Math.random() * data.length)];
}
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10);
};
const utils_assertStatus = (res, status, verbose, name) => {
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
const utils_assertMessage = (res, code, verbose, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('message') != code && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('message') === code;
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
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
}
;// CONCATENATED MODULE: ./generator/tiket-live/S2S/grantEventAccess.js
//import { group } from 'k6'







 // const csvData = new SharedArray('accountIds', function () {
//  // Load CSV file and parse it using Papa Parse
//  return papaparse.parse(open('./data/Token/LoginToken.csv'), { header: true }).data;
// });
// const csvData1 = new SharedArray('vodData', function () {
//   // Load CSV file and parse it using Papa Parse
//   return papaparse.parse(open('./data/Token/vodData.csv'), { header: true }).data;
//  });
//  const csvData2 = new SharedArray('v1LiveData', function () {
//   // Load CSV file and parse it using Papa Parse
//   return papaparse.parse(open('./data/Token/v1LiveData.csv'), { header: true }).data;
//  });
//  const csvData3 = new SharedArray('hash', function () {
//   // Load CSV file and parse it using Papa Parse
//   return papaparse.parse(open('./data/Token/vodHashData.csv'), { header: true }).data;
//  });
//  const csvData4 = new SharedArray('liveEventData', function () {
//   // Load CSV file and parse it using Papa Parse
//   return papaparse.parse(open('./data/Token/liveEventData.csv'), { header: true }).data;
//  });

const tiketLive = () => {
  const randomUser = csvData[Math.floor(Math.random() * csvData.length)];
  let accountId = parseInt(randomUser.accountId);
  const randomUser3 = csvData3[Math.floor(Math.random() * csvData3.length)];
  const hash = randomUser3.vodEvent; //var hash = randomList(['c0b1e7ba-1aed-409f-b4fc-8409f62bde8a', 'c0b1e7ba-1aed-409f-b4fc-8409f62bde7p','c0b1e7ba-1aed-409f-b4fc-8409f62bde9s','c0b1e7ba-1aed-409f-b4fc-8409f62bdf1c','c0b1e7ba-1aed-409f-b4fc-8409f62bdf2b','c0b1e7ba-1aed-409f-b4fc-8409f62bdg3d','c0b1e7ba-1aed-409f-b4fc-8409f62bdg4p','c0b1e7ba-1aed-409f-b4fc-8409f62bdg5q','c0b1e7ba-1aed-409f-b4fc-8409f62bdg1q','c0b1e7ba-1aed-409f-b4fc-8409f62bdg2w','c0b1e7ba-1aed-409f-b4fc-8409f62bdg3e','c0b1e7ba-1aed-409f-b4fc-8409f62bdg4r','c0b1e7ba-1aed-409l-b4fc-8409f62bdg5t','c0b1e7ba-1aed-409l-b4fc-8409f62bdg6y','c0b1e7ba-1aed-409l-b4fc-8409f62bdg7u','c0b1e7ba-1aed-409l-b4fc-8409f62bdg8i','c0b1e7ba-1aed-409l-b4fc-8409f62bdg9o','c0b1e7ba-1aed-409l-b4fc-8409f62bdg0p','c0b1e7ba-1aed-409l-b4fe-8409f62bdg1a','c0b1e7ba-1aed-409l-b4fe-8409f62bdg2s','c0b1e7ba-1aed-409l-b4fe-8409f62bdg3d'])

  let datenow = new Date();
  let startDateTime = generateDatabaseDateTime(datenow);

  function generateDatabaseDateTime(date) {
    return date.toISOString().replace("T", " ").substring(0, 19);
  }

  granteventAccess(hash, startDateTime, accountId);
  granteventAccess(hash, startDateTime, accountId);
  granteventAccess(hash, startDateTime, accountId);
  granteventAccess(hash, startDateTime, accountId);
  const randomUser1 = csvData1[Math.floor(Math.random() * csvData1.length)];
  let accountId1 = parseInt(randomUser1.accountId);
  const at = randomUser1.accessToken;
  const event = randomUser1.event;
  const watchToken = randomUser1.watchToken;
  getserverStatus(at);
  getserverStatus(at);
  getserverStatus(at);
  getserverStatus(at);
  geteventByHash(at, event, watchToken);
  geteventByHash(at, event, watchToken);
  geteventByHash(at, event, watchToken);
  geteventByHash(at, event, watchToken); //  const hash1="v1Livec0b1e7ba-1aed-409f-b4fc-840l-live-event"
  //  const randomUser2 = csvData2[Math.floor(Math.random() * csvData2.length)];
  //  const userToken1=randomUser2.userToken

  const randomUser4 = csvData4[Math.floor(Math.random() * csvData4.length)]; // const hash="v1Livec0b1e7ba-1aed-409f-b4fc-840l-live-event"

  const hash1 = randomUser4.hash;
  const userToken1 = randomUser4.userToken;
  getstreamAuth1(hash1, userToken1);
  let deviceToken = `${(0,index_js_namespaceObject.uuidv4)()}`;
  playevent(at, event, watchToken, deviceToken);
  playevent(at, event, watchToken, deviceToken);
  playevent(at, event, watchToken, deviceToken);
  playevent(at, event, watchToken, deviceToken);
  heartbeat(at, event, watchToken, deviceToken);
  heartbeat(at, event, watchToken, deviceToken);
  heartbeat(at, event, watchToken, deviceToken);
  heartbeat(at, event, watchToken, deviceToken);
};

const getstreamAuth1 = (hash, userToken) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: 'gql-gatotkaca.tiket.com',
      'pragma': 'no-cache',
      'cache-control': 'no-cache',
      'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
      'sec-ch-ua-platform': 'macOS',
      'origin': 'https://video-gatotkaca.tiket.com',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': `https://video-gatotkaca.tiket.com/live?event=${hash}&ticket=${userToken}`,
      'accept-language': 'en-US,en;q=0.9'
    },
    tags: {
      name: 'stream/auth/token'
    }
  };
  const hp = getStreamAuth(params, hash);
  utils_assertStatus(hp, 200, true, 'stream/auth/token');
};

const granteventAccess = (hash, startDateTime, accountId) => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: 'grantEventAccess'
    }
  };
  const body = {
    //accountId: 301524785,
    accountId: accountId,
    serviceId: 'ttd',
    eventAccess: [{
      eventHash: `${hash}`,
      startDateTime: startDateTime,
      //startDateTime:"2022-01-01 01:00:00",
      referenceId: `perf1_${__VU}_${__ITER}_${(0,index_js_namespaceObject.uuidv4)()}`,
      validityInDays: 999,
      expiryAfterPlayInHours: 9999
    }]
  }; //group('grantEventAccess', () => {

  const hp = grantEventAccess_grantEventAccess(params, body);
  utils_assertStatus(hp, 200, true, 'grantEventAccess');
  utils_assertMessage(hp, 'OK', true, 'grantEventAccess');
  return hp; //})
};

const getserverStatus = at => {
  const params = {
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${at}`
    },
    tags: {
      name: 'getServerStatus'
    }
  }; //group('getServerStatus', () => {

  const hp = getServerStatus(params);
  utils_assertStatus(hp, 200, true, 'getServerStatus');
  utils_assertMessage(hp, 'OK', true, 'getServerStatus'); //})
};

const geteventByHash = (at, event, watchToken) => {
  const params = {
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${at}`
    },
    tags: {
      name: 'getEventByHash'
    }
  }; //group('getEventByHash', () => {

  const hp = getEventByHash(params, event, watchToken);
  utils_assertStatus(hp, 200, true, 'getEventByHash');
  utils_assertMessage(hp, 'OK', true, 'getEventByHash'); //})
};

const playevent = (at, event, watchToken, deviceToken) => {
  const params = {
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${at}`,
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
    deviceToken: deviceToken
  }; //group('playEvent', () => {

  const hp = playEvent(params, body, event, watchToken);
  utils_assertStatus(hp, 200, true, 'playEvent');
  utils_assertMessage(hp, 'OK', true, 'playEvent'); //})
};

const heartbeat = (at, event, watchToken, deviceToken) => {
  const params = {
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${at}`
    },
    tags: {
      name: 'heartBeat'
    }
  };
  const body = {
    deviceToken: deviceToken
  }; //group('heartBeat', () => {

  const hp = heartBeat(params, body, event, watchToken);
  utils_assertStatus(hp, 200, true, 'heartBeat');
  utils_assertMessage(hp, 'OK', true, 'heartBeat'); //})
};
;// CONCATENATED MODULE: ./generator/tiket-live/S2S/v1LiveApi.js





 // const csvData = new SharedArray('v1LiveData', function () {
//  // Load CSV file and parse it using Papa Parse
//  return papaparse.parse(open('./data/Token/v1LiveData.csv'), { header: true }).data;
// });
// const csvData1 = new SharedArray('firebaseData', function () {
//   // Load CSV file and parse it using Papa Parse
//   return papaparse.parse(open('./data/Token/fireBaseData.csv'), { header: true }).data;
//  });
//  const csvData2 = new SharedArray('liveEventData', function () {
//   // Load CSV file and parse it using Papa Parse
//   return papaparse.parse(open('./data/Token/liveEventData.csv'), { header: true }).data;
//  });

const v1Live = () => {
  const deviceToken = `perf_${__VU}_${__ITER}_${(0,index_js_namespaceObject.uuidv4)()}`;
  const randomUser1 = csvData2[Math.floor(Math.random() * csvData2.length)]; // const hash="v1Livec0b1e7ba-1aed-409f-b4fc-840l-live-event"

  const hash = randomUser1.hash;
  const userToken = randomUser1.userToken;
  getserverStatus1(hash, userToken);
  geteventByHash1(hash, userToken);
  getjoinEvent(hash, userToken, deviceToken);
  getserverStatus1(hash, userToken);
  geteventByHash1(hash, userToken);
  getjoinEvent(hash, userToken, deviceToken);
  getserverStatus1(hash, userToken);
  geteventByHash1(hash, userToken);
  getjoinEvent(hash, userToken, deviceToken);
  getserverStatus1(hash, userToken);
  geteventByHash1(hash, userToken);
  getjoinEvent(hash, userToken, deviceToken);
  getserverStatus1(hash, userToken);
  geteventByHash1(hash, userToken);
  getjoinEvent(hash, userToken, deviceToken);
  getserverStatus1(hash, userToken);
  geteventByHash1(hash, userToken);
  getjoinEvent(hash, userToken, deviceToken);
  v1LiveApi_getstreamAuth1(hash, userToken); //600

  getheartBeat(deviceToken, hash); //1800

  getheartBeat(deviceToken, hash);
  getheartBeat(deviceToken, hash); // const randomUser1 = csvData1[Math.floor(Math.random() * csvData1.length)];
  // const deviceToken1=randomUser1.deviceToken
  // const eventHash=randomUser1.eventHash
  // const response5=getjoinChat(deviceToken1,eventHash)
};

const getserverStatus1 = (hash, userToken) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: 'gql-gatotkaca.tiket.com',
      'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
      'platform-info': randomList([['ANDROID', 'MOBILE', 'IOS', 'DESKTOP']]),
      'operating-system': 'Macintosh',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
      'tix-live-public-frontend-user-token': `${userToken}`,
      'browser-version': '97.0.4692.99',
      'browser-info': 'Chrome',
      'sec-ch-ua-platform': 'macOS',
      'origin': 'https://video-gatotkaca.tiket.com',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': `https://video-gatotkaca.tiket.com/live?event=${hash}&ticket=${userToken}`,
      'accept-language': 'en-US,en;q=0.9'
    },
    tags: {
      name: 'query'
    }
  };
  const body = {
    operationName: 'getServerStats',
    variables: {},
    query: 'query getServerStats {\n  serverStats {\n    time\n    __typename\n  }\n}\n'
  };
  const hp = getServerStatus1(params, body);
  utils_assertStatus(hp, 200, true, 'queryStatus');
};

const geteventByHash1 = (hash, userToken) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: 'gql-gatotkaca.tiket.com',
      'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
      'platform-info': randomList([['ANDROID', 'MOBILE', 'IOS', 'DESKTOP']]),
      'operating-system': 'Macintosh',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
      'tix-live-public-frontend-user-token': `${userToken}`,
      'browser-version': '97.0.4692.99',
      'browser-info': 'Chrome',
      'sec-ch-ua-platform': 'macOS',
      'origin': 'https://video-gatotkaca.tiket.com',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': `https://video-gatotkaca.tiket.com/live?event=${hash}&ticket=${userToken}`,
      'accept-language': 'en-US,en;q=0.9'
    },
    tags: {
      name: 'query'
    }
  };
  const body = {
    operationName: 'eventByHashWithServerStats',
    variables: {
      hash: `${hash}`,
      userToken: `${userToken}`
    },
    query: 'query eventByHashWithServerStats($hash: String!, $ticketId: Int, $userToken: String) {\n  eventsByHash(hash: $hash, ticketId: $ticketId, userToken: $userToken) {\n    id\n    name\n    url\n    description\n    startTime\n    endTime\n    hash\n    createdAt\n    timeToStart\n    isVod\n    isLiveLogoEnabled\n    isViewersCountEnabled\n    isPublic\n    timezoneName\n    host {\n      name\n      profession\n      profileImg\n      __typename\n    }\n    coverImg\n    sponsor {\n      img\n      link\n      __typename\n    }\n    sponsor1 {\n      img\n      link\n      __typename\n    }\n    sponsor2 {\n      img\n      link\n      __typename\n    }\n    preRecordedVideo\n    isReactionButtonEnabled\n    __typename\n  }\n}\n'
  };
  const hp = getEventByHash1(params, body);
  utils_assertStatus(hp, 200, true, 'queryHash');
};

const getjoinEvent = (hash, userToken, deviceToken) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: 'gql-gatotkaca.tiket.com',
      'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
      'platform-info': randomList([['ANDROID', 'MOBILE', 'IOS', 'DESKTOP']]),
      'operating-system': 'Macintosh',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
      'tix-live-public-frontend-user-token': `${userToken}`,
      'browser-version': '97.0.4692.99',
      'browser-info': 'Chrome',
      'sec-ch-ua-platform': 'macOS',
      'origin': 'https://video-gatotkaca.tiket.com',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': `https://video-gatotkaca.tiket.com/live?event=${hash}&ticket=${userToken}`,
      'accept-language': 'en-US,en;q=0.9'
    },
    tags: {
      name: 'query'
    }
  };
  const body = {
    operationName: 'JoinEventMutation',
    variables: {
      hash: `${hash}`,
      userToken: `${userToken}`,
      deviceToken: `${deviceToken}`
    },
    query: 'mutation JoinEventMutation($hash: String!, $userToken: String!, $deviceToken: String!) {\n  __typename\n  joinEvent(inputJoinEvent: {eventHash: $hash, userToken: $userToken, cookie: \"deprecated\", deviceToken: $deviceToken}) {\n    event {\n      id\n      name\n      url\n      description\n      startTime\n      endTime\n      hash\n      createdAt\n      hostName\n      hostProfession\n      isPublic\n      timezoneName\n      __typename\n    }\n    userSignInToken\n    __typename\n  }\n}\n'
  };
  const hp = getJoinEvent(params, body);
  utils_assertStatus(hp, 200, true, 'queryJoin');
};

const v1LiveApi_getstreamAuth1 = (hash, userToken) => {
  const params = {
    headers: {
      accept: '*/*',
      authority: 'gql-gatotkaca.tiket.com',
      'pragma': 'no-cache',
      'cache-control': 'no-cache',
      'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
      'sec-ch-ua-platform': 'macOS',
      'origin': 'https://video-gatotkaca.tiket.com',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': `https://video-gatotkaca.tiket.com/live?event=${hash}&ticket=${userToken}`,
      'accept-language': 'en-US,en;q=0.9'
    },
    tags: {
      name: 'stream/auth'
    }
  };
  const hp = getStreamAuth(params, hash);
  utils_assertStatus(hp, 200, true, 'stream/auth');
};

const getheartBeat = (deviceToken, hash) => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: 'heartBeatV1'
    }
  };
  const body = {
    deviceToken: `${deviceToken}`
  };
  const hp = getHeartBeat(params, body, hash);
  utils_assertStatus(hp, 200, true, 'heartBeatV1');
  utils_assertMessage(hp, 'OK', true, 'heartBeatV1');
};

const getjoinChat = (deviceToken, hash) => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: 'joinChat'
    }
  };
  const body = {
    deviceToken: `${deviceToken}`,
    userId: 12345,
    userName: 'Songoku'
  };
  const hp = getJoinChat(params, body, hash);
  assertStatus(hp, 200, true, 'joinChat');
  assertMessage(hp, 'OK', true, 'joinChat');
};

const jobsupdateUniqueViewers = () => {
  const params = {
    headers: {
      'Admin-Token': '285BDF8C-8A82-47AB-92A1-0A8C9F055EEF'
    },
    tags: {
      name: 'uniqueViewer'
    }
  };
  const hp = jobsUpdateUniqueViewers(params);
  assertStatus(hp, 200, true, 'uniqueViewer');
  assertMessage(hp, 'OK', true, 'uniqueViewer');
};
;// CONCATENATED MODULE: ./apis/utilities/member/session/sessionLogin.js

/**
 * Get Session Data
 * @param {object} params global parameters
 * @returns session http response
 */

const getSessionLogin = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.get(`${__ENV.LB_HOST}/tix-member-session/v1/session`, params);
  return resp;
};
/**
 * Get session and validate jwt
 * @param {object} params global parameters
 * @returns session http response
 */

const validateSessionLogin = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.get(`${__ENV.LB_HOST}/tix-member-session/v1/session/validate`, params);
  return resp;
};
/**
 * Create empty session data
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */

const createSessionLogin = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-member-session/v1/session`, JSON.stringify(body), params);
  return resp;
};
/**
 * Refresh token
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */

const refreshTokenLogin = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/tix-member-session/v1/session/refresh`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/utilities/member/core/core.js

/**
 * v2PasswordLevel
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */

const v2PasswordLevel = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/tix-member-core/v2/password/level`, JSON.stringify(body), params);
  return resp;
};
/**
 * v2AuthLogin 
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */

const core_v2AuthLogin = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-member-core/v2/auth/login`, JSON.stringify(body), params);
  return resp;
};
/**
 * v2AuthSocial
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */

const v2AuthSocial = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/tix-member-core/v2/auth/social`, JSON.stringify(body), params);
  return resp;
};
/**
 * v2AuthRegister
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */

const core_v2AuthRegister = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/tix-member-core/v2/auth/register`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: external "k6/x/csv"
const csv_namespaceObject = require("k6/x/csv");;
var csv_default = /*#__PURE__*/__webpack_require__.n(csv_namespaceObject);
;// CONCATENATED MODULE: ./generator/tiket-live/loginToken.js







 // const csvData = new SharedArray('randomtoken', function () {
//  // Load CSV file and parse it using Papa Parse
//  return papaparse.parse(open('./data/Token/LoginToken.csv'), { header: true }).data;
// });  
//var userData = parseCSV('dummy_email', 'data/dummyToken.csv')

const LoginToken = () => {
  //var num=Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  //const session1=v2authRegister(num)
  const session = createsessionLogin();
  let at = session.json().data.accessToken;
  const session2 = v2authLogin(at);
  let accessToken = session2.json().data.accessToken; //console.log(accessToken)

  let accountId = session2.json().data.accountId; //console.log(accountId)

  const email1 = `teamorder13@mailinator.com`;
  csv_default().append('./data/Token/LoginToken.csv', [email1, accountId, accessToken]); //const randomUser = csvData[Math.floor(Math.random() * csvData.length)];
  //const hash=randomUser.vodEvent
  // console.log("vod event "+ hash)
  //var hash = randomList(['c0b1e7ba-1aed-409f-b4fc-8409f62bde8a', 'c0b1e7ba-1aed-409f-b4fc-8409f62bde7p','c0b1e7ba-1aed-409f-b4fc-8409f62bde9s','c0b1e7ba-1aed-409f-b4fc-8409f62bdf1c','c0b1e7ba-1aed-409f-b4fc-8409f62bdf2b','c0b1e7ba-1aed-409f-b4fc-8409f62bdg3d','c0b1e7ba-1aed-409f-b4fc-8409f62bdg4p','c0b1e7ba-1aed-409f-b4fc-8409f62bdg5q','c0b1e7ba-1aed-409f-b4fc-8409f62bdg1q','c0b1e7ba-1aed-409f-b4fc-8409f62bdg2w','c0b1e7ba-1aed-409f-b4fc-8409f62bdg3e','c0b1e7ba-1aed-409f-b4fc-8409f62bdg4r','c0b1e7ba-1aed-409l-b4fc-8409f62bdg5t','c0b1e7ba-1aed-409l-b4fc-8409f62bdg6y','c0b1e7ba-1aed-409l-b4fc-8409f62bdg7u','c0b1e7ba-1aed-409l-b4fc-8409f62bdg8i','c0b1e7ba-1aed-409l-b4fc-8409f62bdg9o','c0b1e7ba-1aed-409l-b4fc-8409f62bdg0p','c0b1e7ba-1aed-409l-b4fe-8409f62bdg1a','c0b1e7ba-1aed-409l-b4fe-8409f62bdg2s','c0b1e7ba-1aed-409l-b4fe-8409f62bdg3d'])
  //let datenow = new Date();
  // console.log(datenow); // "2021-07-28T18:11:11.282Z"
  // console.log(generateDatabaseDateTime(datenow)); // "2021-07-28 14:11:33"
  //let startDateTime=generateDatabaseDateTime(datenow);
  // function generateDatabaseDateTime(date) {
  //   return date.toISOString().replace("T"," ").substring(0, 19);
  // }
  //    const response=granteventAccess(hash,startDateTime,accountId)
  //    let watchURL = response.json().data.eventsAccess[0].watchURL;
  //    var url = new URL(watchURL);
  //    let event = url.searchParams.get('event');
  //    let watchToken = url.searchParams.get('watchToken');
  //    //csv.append('./dist/data/Token/vodData.csv',[accountId,accessToken,event,watchToken])
};

const loginToken_granteventAccess = (hash, startDateTime, accountId) => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: 'grantEventAccess'
    }
  };
  const body = {
    //accountId: 301524785,
    accountId: accountId,
    serviceId: 'ttd',
    eventAccess: [{
      eventHash: `${hash}`,
      startDateTime: startDateTime,
      //startDateTime:"2022-01-01 01:00:00",
      referenceId: `perf1_${__VU}_${__ITER}_${uuidv4()}`,
      validityInDays: 999,
      expiryAfterPlayInHours: 9999
    }]
  }; //group('grantEventAccess', () => {

  const hp = grantEventAccess(params, body);
  assertStatus(hp, 200, true, 'grantEventAccess');
  assertMessage(hp, 'OK', true, 'grantEventAccess');
  return hp; //})
};

const createsessionLogin = () => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf1_${__VU}_${__ITER}_${(0,index_js_namespaceObject.uuidv4)()}`,
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'create-session'
    }
  };
  /*From Ticket 
  Empty request body {} is intentional, since we are going to create new empty session here*/

  const body = {}; // group('createSession', () => {

  const hp = createSessionLogin(params, body);
  utils_assertStatus(hp, 200, true, 'createSession');
  utils_assertSuccess(hp, 'SUCCESS', true, 'createSession'); // })

  return hp;
};

const v2authRegister = num => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf1_${__VU}_${__ITER}_${uuidv4()}`,
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'v2AuthRegister'
    }
  };
  const body = {
    createSession: true,
    email: `tiket${num}@mailinator.com`,
    fullName: `Coba Tiket`,
    fullPhoneNumber: ``,
    otpToken: '7599',
    otpTokenPhone: 7599,
    otpTrxId: '6166a1ccbcf4401151587e27',
    otpTrxIdPhone: '6166a1ccbcf4401151587e27',
    password: 'CobaTiket123',
    referrer: 'XFACTOR',
    registerSource: 'string',
    skipOtp: true
  }; //group('v2AuthRegister', () => {

  const hp = v2AuthRegister(params, body);
  assertStatus(hp, 200, true, 'v2AuthRegister');
  assertSuccess(hp, 'SUCCESS', true, 'v2AuthRegister'); // })

  return hp;
};

const v2authLogin = at => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf1_${__VU}_${__ITER}_${(0,index_js_namespaceObject.uuidv4)()}`,
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST',
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'v2AuthLogin'
    }
  };
  const body = {
    loginType: 'PASSWORD',
    password: 'P@ssw0rd11',
    username: `teamorder13@mailinator.com`
  }; //group('v2AuthLogin', () => {

  const hp = core_v2AuthLogin(params, body);
  utils_assertStatus(hp, 200, true, 'v2AuthLogin');
  utils_assertSuccess(hp, 'SUCCESS', true, 'v2AuthLogin'); //})

  return hp;
};
;// CONCATENATED MODULE: ./generator/tiket-live/S2S/joinChat.js



 // const csvData1 = new SharedArray('firebaseData', function () {
//   // Load CSV file and parse it using Papa Parse
//   return papaparse.parse(open('./data/Token/fireBaseData.csv'), { header: true }).data;
//  });

const v1LiveJoinChat = () => {
  const randomUser1 = csvData1[Math.floor(Math.random() * csvData1.length)];
  const deviceToken = randomUser1.deviceToken;
  const eventHash = randomUser1.eventHash;
  joinChat_getjoinChat(deviceToken, eventHash);
};

const joinChat_getjoinChat = (deviceToken, hash) => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: 'joinChat'
    }
  };
  const body = {
    deviceToken: `${deviceToken}`,
    userId: 12345,
    userName: 'Songoku'
  };
  const hp = v1LiveApi_getJoinChat(params, body, hash);
  utils_assertStatus(hp, 200, true, 'joinChat');
  utils_assertMessage(hp, 'OK', true, 'joinChat');
};
;// CONCATENATED MODULE: ./generator/tiket-live/nonLoginToken.js







 // const csvData = new SharedArray('randomtoken', function () {
//  // Load CSV file and parse it using Papa Parse
//  return papaparse.parse(open('./data/Token/LoginToken.csv'), { header: true }).data;
// });

const nonLoginToken = () => {
  const session = nonLoginToken_createsessionLogin();
  let at = session.json().data.accessToken;
  csv_default().append('./data/Token/nonLoginToken.csv', [at]);
};

const nonLoginToken_granteventAccess = (hash, startDateTime, accountId) => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: 'grantEventAccess'
    }
  };
  const body = {
    //accountId: 301524785,
    accountId: accountId,
    serviceId: 'ttd',
    eventAccess: [{
      eventHash: `${hash}`,
      startDateTime: startDateTime,
      //startDateTime:"2022-01-01 01:00:00",
      referenceId: `perf1_${__VU}_${__ITER}_${uuidv4()}`,
      validityInDays: 999,
      expiryAfterPlayInHours: 9999
    }]
  }; //group('grantEventAccess', () => {

  const hp = grantEventAccess(params, body);
  assertStatus(hp, 200, true, 'grantEventAccess');
  assertMessage(hp, 'OK', true, 'grantEventAccess');
  return hp; //})
};

const nonLoginToken_createsessionLogin = () => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf1_${__VU}_${__ITER}_${(0,index_js_namespaceObject.uuidv4)()}`,
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'create-session'
    }
  };
  /*From Ticket 
  Empty request body {} is intentional, since we are going to create new empty session here*/

  const body = {}; // group('createSession', () => {

  const hp = createSessionLogin(params, body);
  utils_assertStatus(hp, 200, true, 'createSession');
  utils_assertSuccess(hp, 'SUCCESS', true, 'createSession'); // })

  return hp;
};

const nonLoginToken_v2authRegister = num => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf1_${__VU}_${__ITER}_${uuidv4()}`,
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'v2AuthRegister'
    }
  };
  const body = {
    createSession: true,
    email: `home${num}@mailinator.com`,
    fullName: `Coba Tiket`,
    fullPhoneNumber: ``,
    otpToken: '7599',
    otpTokenPhone: 7599,
    otpTrxId: '6166a1ccbcf4401151587e27',
    otpTrxIdPhone: '6166a1ccbcf4401151587e27',
    password: 'CobaTiket123',
    referrer: 'XFACTOR',
    registerSource: 'string',
    skipOtp: true
  }; //group('v2AuthRegister', () => {

  const hp = v2AuthRegister(params, body);
  assertStatus(hp, 200, true, 'v2AuthRegister');
  assertSuccess(hp, 'SUCCESS', true, 'v2AuthRegister'); // })

  return hp;
};

const nonLoginToken_v2authLogin = (at, num) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf1_${__VU}_${__ITER}_${uuidv4()}`,
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST',
      'Authorization': `Bearer ${at}`
    },
    tags: {
      name: 'v2AuthLogin'
    }
  };
  const body = {
    loginType: 'PASSWORD',
    password: 'CobaTiket123',
    username: `home${num}@mailinator.com`
  }; //group('v2AuthLogin', () => {

  const hp = v2AuthLogin(params, body);
  assertStatus(hp, 200, true, 'v2AuthLogin');
  assertSuccess(hp, 'SUCCESS', true, 'v2AuthLogin'); //})

  return hp;
};
;// CONCATENATED MODULE: ./scenarios/tiket-live/s2sAndB2c.js
//export { getserverStatus,geteventByHash,playevent,heartbeat } from "../../generator/tiket-live/B2C/b2cRestApi.js";






function s2sAndB2c_distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    LoginToken: {
      targetRate: s2sAndB2c_distribute(100 * __ENV.X_TARGET)
    },
    nonLoginToken: {
      targetRate: s2sAndB2c_distribute(1000 * __ENV.X_TARGET)
    } // tiketLive: { targetRate: distribute(250 * __ENV.X_TARGET) },
    // v1Live: { targetRate: distribute(300 * __ENV.X_TARGET) },
    // v1LiveJoinChat: { targetRate: distribute(10000 * __ENV.X_TARGET) },

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
      iterations: 10
    };
  } else if (config.scenario == "load") {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [// { duration: '5m', target: Math.round(config.groupServices[name].targetRate * .6) }, 
      // { duration: '600m', target: Math.round(config.groupServices[name].targetRate * .6) }, 
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * .4) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * .4) }, 
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * .6) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * .6) }, 
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * .7) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * .7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * .8) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * .8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * .9) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * .9) }, 
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '600m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.1) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.3) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.3) }, 
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.5) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.5) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.7) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.7) }, 
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.3) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.3) }, 
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.4)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.5) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.5) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.6)
      }, {
        duration: '600m',
        target: Math.round(config.groupServices[name].targetRate * 2.6)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.7) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.7) }, 
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.8) }, 
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.8) }, 
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3) }, 
      // { duration: '180m', target: Math.round(config.groupServices[name].targetRate * 3) },
      {
        duration: '5m',
        target: 0
      }]
    };
  } else if (config.scenario == "capacity") {
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