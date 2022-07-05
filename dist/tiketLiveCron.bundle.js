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
  "jobsupdateUniqueViewers": () => (/* reexport */ jobsupdateUniqueViewers),
  "options": () => (/* binding */ options)
});

;// CONCATENATED MODULE: external "https://jslib.k6.io/k6-utils/1.1.0/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/k6-utils/1.1.0/index.js");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/url/1.0.0/index.js"
const _1_0_0_index_js_namespaceObject = require("https://jslib.k6.io/url/1.0.0/index.js");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/tiket-live/S2S/v1LiveApi.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const v1LiveApi_getServerStatus1 = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/v1/live/query`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const v1LiveApi_getEventByHash1 = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/v1/live/query`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const v1LiveApi_getJoinEvent = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/v1/live/query`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const v1LiveApi_getStreamAuth = (params, hash) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.get(`${__ENV.LB_HOST}/v1/live/events/${hash}/stream/auth`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const v1LiveApi_getHeartBeat = (params, body, hash) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/v1/live/events/${hash}/heartbeat`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const v1LiveApi_getJoinChat = (params, body, hash) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http.post(`${__ENV.LB_HOST}/v1/live/events/${hash}/join-chat`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const jobsUpdateUniqueViewers = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/v1/live/application/jobs/update-unique-viewer`, params);
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
const utils_randomList = function (list) {
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
  const deviceToken = `perf_${__VU}_${__ITER}_${uuidv4()}`;
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
  getstreamAuth1(hash, userToken); //600

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
  assertStatus(hp, 200, true, 'queryStatus');
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
  assertStatus(hp, 200, true, 'queryHash');
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
  assertStatus(hp, 200, true, 'queryJoin');
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
      name: 'stream/auth'
    }
  };
  const hp = getStreamAuth(params, hash);
  assertStatus(hp, 200, true, 'stream/auth');
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
  assertStatus(hp, 200, true, 'heartBeatV1');
  assertMessage(hp, 'OK', true, 'heartBeatV1');
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
  utils_assertStatus(hp, 200, true, 'uniqueViewer');
  utils_assertMessage(hp, 'OK', true, 'uniqueViewer');
};
;// CONCATENATED MODULE: ./scenarios/tiket-live/v1LiveCron.js


function v1LiveCron_distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    jobsupdateUniqueViewers: {
      targetRate: v1LiveCron_distribute(1 * __ENV.X_TARGET)
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