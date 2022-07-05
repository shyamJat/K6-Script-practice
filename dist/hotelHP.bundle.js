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
  "default": () => (/* binding */ homepage)
});

// NAMESPACE OBJECT: ./apis/hotel/http/homepage-autocomplete-query.js
var homepage_autocomplete_query_namespaceObject = {};
__webpack_require__.r(homepage_autocomplete_query_namespaceObject);

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/hotel/http/homepage-masterContent.js

/**
 * Homepage Master Content
 * @param {object} params global parameters
 * @returns Homepage Master Content http response
 */

const homepageMasterContent = (params, phpSession) => {
  params.tags.name = 'homepageMasterContent';
  const resp = http_default().get( // eslint-disable-next-line no-undef
  `${__ENV.HOTEL_HOST}/ms-gateway/tix-hotel-home-api/landing-page/get-master-content`, params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/hotel/http/homepage-module.js

/**
 * Homepage Module
 * @param {object} params global parameters
 * @returns Homepage Module http response
 */

const homepageModule = (params, templateId) => {
  params.tags.name = 'homepageModule';
  const resp = http_default().get( // eslint-disable-next-line no-undef
  `${__ENV.HOTEL_HOST}/ms-gateway/tix-hotel-home-api/landing-page/module/${templateId}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/hotel/http/homepage-home.js

/**
 * Homepage Home
 * @param {object} params global parameters
 * @returns Homepage Home http response
 */

const homepageHome = params => {
  params.tags.name = 'homepageHome';
  const resp = http_default().get( // eslint-disable-next-line no-undef
  `${__ENV.HOTEL_HOST}/hotel`, params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/hotel/http/homepage-autocomplete-no-query.js

/**
 * Homepage Autocomplete
 * @param {object} params global parameters
 * @returns Homepage Autocomplete http response
 */

const homepageAutoComplete = params => {
  params.tags.name = 'homepageAutoComplete';
  const body = {
    query: ''
  };
  const resp = http_default().post( // eslint-disable-next-line no-undef
  `${__ENV.HOTEL_HOST}/ms-gateway/tix-hotel-autocomplete/autocomplete`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: external "https://jslib.k6.io/url/1.0.0/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/url/1.0.0/index.js");;
;// CONCATENATED MODULE: ./apis/hotel/http/homepage-holiday.js


/**
 * Homepage Holiday
 * @param {object} params global parameters
 * @returns Homepage Holiday http response
 */

const homepageHoliday = params => {
  params.tags.name = 'homepageHoliday';
  const searchParams = new index_js_namespaceObject.URLSearchParams([['startDate', `${new Date().toISOString().split('T')[0]}`], ['endDate', `${new Date(new Date().getFullYear() + 5, new Date().getMonth(), new Date().getDate()).toISOString().split('T')[0]}`], ['page', '0'], ['size', '100']]);
  const resp = http_default().get( // eslint-disable-next-line no-undef
  `${__ENV.HOTEL_HOST}/ms-gateway/tix-calendar/holiday?${searchParams.toString()}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/hotel/http/homepage-autocomplete-query.js

/**
 * Homepage Autocomplete
 * @param {object} params global parameters
 * @returns Homepage Autocomplete http response
 */

const homepage_autocomplete_query_homepageAutoComplete = (params, location) => {
  params.tags.name = 'homepageAutoComplete';
  const body = {
    query: `${location[Math.floor(Math.random() * location.length)].location}`,
    version: 2
  };
  const resp = http.post( // eslint-disable-next-line no-undef
  `${__ENV.HOTEL_HOST}/ms-gateway/tix-hotel-autocomplete/autocomplete`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: external "https://jslib.k6.io/papaparse/5.1.1/index.js"
const _5_1_1_index_js_namespaceObject = require("https://jslib.k6.io/papaparse/5.1.1/index.js");;
var _5_1_1_index_js_default = /*#__PURE__*/__webpack_require__.n(_5_1_1_index_js_namespaceObject);
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
;// CONCATENATED MODULE: ./scenarios/hotel/homepage.js
/* eslint-disable import/no-absolute-path */
// eslint-disable-next-line no-unused-vars

/* global __ENV */











/**
  * SCENARIO DURATION
  * Please comment options block below if you just want to verify your script,
  * uncomment if you want to run real test.
  */
// export const options = {
//   scenarios: {
//     test: {
//       tags: { mode: `${__ENV.MODE}` },
//       executor: 'ramping-vus',
//       startVUs: 0,
//       stages: [
//         { duration: `${15 * (__ENV.DURATION) / 100}m`, target: `${__ENV.VUS}` },
//         { duration: `${(__ENV.DURATION) - (30 * (__ENV.DURATION) / 100)}m`, target: `${__ENV.VUS}` },
//         { duration: `${15 * (__ENV.DURATION) / 100}m`, target: 0 }
//       ],
//       gracefulRampDown: '0s'
//     }
//   }
// }

const homepage_location = new data_namespaceObject.SharedArray('data active order', function () {
  // Load CSV file and parse it using Papa Parse
  return _5_1_1_index_js_default().parse(open('../data/location.csv'), {
    header: true
  }).data;
});
const PHPSESSID = new data_namespaceObject.SharedArray("member data", () => {
  return JSON.parse(open('../data/member.json')).PHPSESSID;
});
/* harmony default export */ function homepage() {
  const templateId = randomList(['605a1ffd3fe68d4d8c3a8835', '605bf924f6ef9b34c02d3d70', '602535a7afbf887c435420e8', ' 601bb83da23e39841c4ffc45', '601027d5a23e39841c4ffc41', '600e8db6a23e39841c4ffc3a']);
  const params = {
    headers: {
      Cookie: `PHPSESSID=${PHPSESSID}`
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('homepage', () => {
    const masterContent = homepageMasterContent(params);
    assertStatus(masterContent, 200, true, 'masterContent');
    const module = homepageModule(params, templateId);
    assertStatus(module, 200, true, 'module');
    const home = homepageHome(params);
    assertStatus(home, 200, true, 'home');
    const autoComplete = homepageAutoComplete(params);
    assertStatus(autoComplete, 200, true, 'autoComplete');
    const holiday = homepageHoliday(params);
    assertStatus(holiday, 200, true, 'holiday');
    const autoCompleteQuery = (0,homepage_autocomplete_query_namespaceObject.homepageAutoCompleteQuery)(params, homepage_location);
    assertStatus(autoCompleteQuery, 200, true, 'autoCompleteQuery');
  });
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;