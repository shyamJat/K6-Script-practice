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
  "createAndValidateSession": () => (/* reexport */ createAndValidateSession),
  "createAndValidateSessionLogin": () => (/* reexport */ createAndValidateSessionLogin),
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
;// CONCATENATED MODULE: ./apis/utilities/member/session/session.js

/**
 * Get Session Data
 * @param {object} params global parameters
 * @returns session http response
 */

const getSession = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-member-session/v1/session`, params);
  return resp;
};
/**
 * Get session and validate jwt
 * @param {object} params global parameters
 * @returns session http response
 */

const validateSession = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-member-session/v1/session/validate`, params);
  return resp;
};
/**
 * Create empty session data
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns session http response
 */

const createSession = (params, body) => {
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

const refreshToken = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-member-session/v1/session/refresh`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/utilities/member/session/session.js


const createAndValidateSession = () => {
  const session = createsession();
  let at = session.json().data.accessToken;
  let rt = session.json().data.refreshToken;
  getsession(at);
  getsession(at);

  for (let i = 1; i <= 9; i++) {
    validatesession(at);
  }

  refreshtoken(rt);
};

const getsession = at => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${at}`,
      'X-Audience': 'tiket.com',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'get-session'
    }
  }; // group('getSession', () => {

  const res = getSession(params);
  assertStatus(res, 200, true, 'getSession');
  assertSuccess(res, 'SUCCESS', true, 'getSession'); // })
};

const validatesession = at => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${at}`,
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'validate-session'
    }
  }; // group('validateSession', () => {

  const hp = validateSession(params);
  assertStatus(hp, 200, true, 'validateSession');
  assertSuccess(hp, 'SUCCESS', true, 'validateSession'); // })
};

const createsession = () => {
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
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
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

  const hp = createSession(params, body);
  assertStatus(hp, 200, true, 'createSession');
  assertSuccess(hp, 'SUCCESS', true, 'createSession'); // })

  return hp;
};

const refreshtoken = rt => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${rt}`,
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com/rt',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'refresh-token'
    }
  }; // -d "\"{REFRESH_TOKEN}\""

  const body = {}; // group('refreshToken', () => {

  const hp = refreshToken(params, body);
  assertStatus(hp, 200, true, 'refreshToken');
  assertSuccess(hp, 'SUCCESS', true, 'refreshToken'); // })
};
;// CONCATENATED MODULE: ./apis/utilities/member/session/sessionLogin.js

/**
 * Get Session Data
 * @param {object} params global parameters
 * @returns session http response
 */

const getSessionLogin = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-member-session/v1/session`, params);
  return resp;
};
/**
 * Get session and validate jwt
 * @param {object} params global parameters
 * @returns session http response
 */

const validateSessionLogin = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-member-session/v1/session/validate`, params);
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
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-member-session/v1/session/refresh`, JSON.stringify(body), params);
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

const v2AuthLogin = (params, body) => {
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

const v2AuthRegister = (params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-member-core/v2/auth/register`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/utilities/member/session/loginMemberSession.js



const createAndValidateSessionLogin = () => {
  //var num = Math.floor(Math.random() * 900000) + 100000;
  var num = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const session1 = v2authRegister(num);
  const session = createsessionLogin();
  let at = session.json().data.accessToken; //let email = session1.json().data.accountUsername

  const session2 = v2authLogin(at, num);
  let at2 = session2.json().data.accessToken;
  let rt2 = session2.json().data.refreshToken;
  getsessionLogin(at2);
  getsessionLogin(at2);
  getsessionLogin(at2);
  getsessionLogin(at2);

  for (let i = 1; i <= 21; i++) {
    validatesessionLogin(at2);
  }

  const session3 = refreshtokenLogin(rt2);
  let rt3 = session3.json().data.refreshToken;
  refreshtokenLogin(rt3);
};

const getsessionLogin = at => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${at}`,
      'X-Audience': 'tiket.com',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'get-session'
    }
  }; // group('getSession', () => {

  const res = getSessionLogin(params);
  assertStatus(res, 200, true, 'getSessionLogin');
  assertSuccess(res, 'SUCCESS', true, 'getSessionLogin'); // })
};

const validatesessionLogin = at => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${at}`,
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'validate-session'
    }
  }; // group('validateSession', () => {

  const hp = validateSessionLogin(params);
  assertStatus(hp, 200, true, 'validateSessionLogin');
  assertSuccess(hp, 'SUCCESS', true, 'validateSessionLogin'); // })
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
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
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
  assertStatus(hp, 200, true, 'createSessionLogin');
  assertSuccess(hp, 'SUCCESS', true, 'createSessionLogin'); // })

  return hp;
};

const refreshtokenLogin = rt => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${rt}`,
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com/rt',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'refresh-token'
    }
  }; // -d "\"{REFRESH_TOKEN}\""

  const body = {}; // group('refreshToken', () => {

  const hp = refreshTokenLogin(params, body);
  assertStatus(hp, 200, true, 'refreshTokenLogin');
  assertSuccess(hp, 'SUCCESS', true, 'refreshTokenLogin'); // })

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
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
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
    email: `khilery${num}@mailinator.com`,
    fullName: `Coba Tiket 2`,
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

const v2authLogin = (at, num) => {
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
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
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
    username: `khilery${num}@mailinator.com`
  }; //group('v2AuthLogin', () => {

  const hp = v2AuthLogin(params, body);
  assertStatus(hp, 200, true, 'v2AuthLogin');
  assertSuccess(hp, 'SUCCESS', true, 'v2AuthLogin'); //})

  return hp;
};
;// CONCATENATED MODULE: ./scenarios/utilities/member/session/session.js



const serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    createAndValidateSession: {
      targetRate: distribute(serverCount, 12000),
      dist: 1
    },
    createAndValidateSessionLogin: {
      targetRate: distribute(serverCount, 10000),
      dist: 1
    } // getsession: { targetRate: distribute(serverCount, 28100), dist: 1 },
    // validatesession: { targetRate: distribute(serverCount, 197000), dist: 1 },
    // refreshtoken: { targetRate: distribute(serverCount, 5040), dist: 1 },

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

    if (config.scenario === 'load' || config.scenario === 'endurance') {
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
        duration: '20m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
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