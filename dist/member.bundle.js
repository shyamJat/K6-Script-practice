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
  "default": () => (/* binding */ memberFE),
  "options": () => (/* binding */ options)
});

;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/utilities/member/http/authFE.js

const login = params => {
  return http_default().get(`${__ENV.HOST}/login`, params);
};
const loginMobile = params => {
  return http_default().get(`${__ENV.M_HOST}/login`, params);
};
const forgetPassword = params => {
  return http_default().get(`${__ENV.HOST}/auth/forget_password`, params);
};
const forgetPasswordMobile = params => {
  return http_default().get(`${__ENV.M_HOST}/auth/forget_password`, params);
};
;// CONCATENATED MODULE: ./apis/utilities/member/http/myAccountFE.js

const myAccount = params => {
  return http_default().get(`${__ENV.HOST}/myaccount`, params);
};
const smartTraveler = params => {
  return http_default().get(`${__ENV.HOST}/myaccount/smart_traveler`, params);
};
const smartPay = params => {
  return http_default().get(`${__ENV.HOST}/myaccount/smart_pay`, params);
};
const settings = params => {
  return http_default().get(`${__ENV.HOST}/myaccount/settings`, params);
};
const notification = params => {
  return http_default().get(`${__ENV.HOST}/myaccount/settings/notification`, params);
};
const securitySettings = params => {
  return http.get(`${__ENV.HOST}/myaccount/security_settings`, params);
};
const loyaltyProgram = params => {
  return http_default().get(`${__ENV.HOST}/myaccount/loyalty_program`, params);
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
;// CONCATENATED MODULE: ./scenarios/utilities/member/memberFE.js





const members = new data_namespaceObject.SharedArray("member data", () => {
  return JSON.parse(open('@data/data.json')).members;
});
const options = {
  scenarios: {
    homeFE: {
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
    }
  }
};

const sessionLoaded = (res, email, name) => {
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} page has user session (logged in)`]: r => {
      const isLoggedIn = r.body.includes(email);

      if (!isLoggedIn) {
        console.log(JSON.stringify(r.body));
      }

      return isLoggedIn;
    }
  });
};

/* harmony default export */ function memberFE() {
  const params = {
    cookies: {
      PHPSESSID: members[0].PHPSESSID,
      session_access_token: members[0].session_access_token,
      session_refresh_token: members[0].session_refresh_token
    },
    redirects: 0,
    timeout: "120s"
  };
  const loginRes = login();
  assertStatus(loginRes, 200, true, "login");
  const loginMobileRes = loginMobile();
  assertStatus(loginMobileRes, 200, true, "loginMobile");
  const forgetPasswordRes = forgetPassword();
  assertStatus(forgetPasswordRes, 200, true, "forgetPassword");
  const forgetPasswordMobileRes = forgetPasswordMobile();
  assertStatus(forgetPasswordMobileRes, 200, true, "forgetPasswordMobile");
  const myAccountRes = myAccount(params);
  assertStatus(myAccountRes, 200, true, "myAccount");
  sessionLoaded(myAccountRes, members[0].email, "myAccount");
  const smartTravelerRes = smartTraveler(params);
  assertStatus(smartTravelerRes, 200, true, "smartTraveler");
  sessionLoaded(smartTravelerRes, members[0].email, "smartTraveler");
  const smartPayRes = smartPay(params);
  assertStatus(smartPayRes, 200, true, "smartPay");
  sessionLoaded(smartPayRes, members[0].email, "smartPay");
  const settingsRes = settings(params);
  assertStatus(settingsRes, 200, true, "settings");
  sessionLoaded(settingsRes, members[0].email, "settings");
  const notificationRes = notification(params);
  assertStatus(notificationRes, 200, true, "notification");
  sessionLoaded(notificationRes, members[0].email, "notification");
  const loyaltyProgramRes = loyaltyProgram(params);
  assertStatus(loyaltyProgramRes, 200, true, "loyaltyProgram");
  sessionLoaded(loyaltyProgramRes, members[0].email, "loyaltyProgram");
  (0,external_k6_namespaceObject.sleep)(300);
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;