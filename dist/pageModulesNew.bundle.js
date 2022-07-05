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
  "heroBanner": () => (/* reexport */ heroBanner),
  "homeModulesNew": () => (/* reexport */ homeModulesNew),
  "homePageLogin": () => (/* reexport */ homePageLogin),
  "homePageNonLogin": () => (/* reexport */ homePageNonLogin),
  "homeVerticals": () => (/* reexport */ homeVerticals),
  "logo": () => (/* reexport */ logo),
  "options": () => (/* binding */ options),
  "pageModules": () => (/* reexport */ pageModules),
  "pageModulesFull": () => (/* reexport */ pageModulesFull),
  "pageModulesId": () => (/* reexport */ pageModulesId),
  "payLater": () => (/* reexport */ payLater),
  "userFooter": () => (/* reexport */ userFooter),
  "userVertical": () => (/* reexport */ userVertical)
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
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_namespaceObject);
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
;// CONCATENATED MODULE: external "https://jslib.k6.io/form-urlencoded/3.0.0/index.js"
const _3_0_0_index_js_namespaceObject = require("https://jslib.k6.io/form-urlencoded/3.0.0/index.js");;
var _3_0_0_index_js_default = /*#__PURE__*/__webpack_require__.n(_3_0_0_index_js_namespaceObject);
;// CONCATENATED MODULE: ./apis/home/http/pageModulesNew.js
/* global __ENV */


/**
 * Get Page Modules
 * @param {object} params global parameters
 * @returns home module http response
 */

const getPageModules = params => {
  params.tags.name = 'getPageModules';
  params.headers['Content-Type'] = 'application/json'; // const query = formurlencoded({ pageModuleType: 'PARTNER_TTD' })

  const queryParams = {
    pageModuleType: 'CATEGORY_PAGE',
    referenceId: '611ddbf1315584908a4f545c'
  };
  const query = _3_0_0_index_js_default()(queryParams);
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/page-modules?${query}`, params);
  return resp;
};
const getFullPageModules = params => {
  params.tags.name = 'getFullPageModules';
  params.headers['Content-Type'] = 'application/json'; // const query = formurlencoded({ pageModuleType: 'PARTNER_TTD' })

  const queryParams = {
    pageModuleType: 'PARTNER_TTD',
    referenceId: '606425923654a63e470f9d7e'
  };
  const query = _3_0_0_index_js_default()(queryParams);
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/page-modules-full?${query}`, params);
  return resp;
};
const getPageModulesId = params => {
  params.tags.name = 'getPageModulesId';
  params.headers['Content-Type'] = 'application/json'; // const queryParams = {
  //   referenceId: '614c0f6bd528487dd73c8231',
  //  }
  // const query = formurlencoded(queryParams)

  const id = '621db9dc32488a060efa4d6a';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/page-modules/${id}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/pageModules.js



const pageModules_lang_array = ['id', 'en'];
const pageModules_channelId_array = ['ANDROID', 'MOBILE', 'IOS'];
const pageModules = () => {
  const channelId = randomItem(pageModules_channelId_array);
  const lang = randomItem(pageModules_lang_array);
  const accountId = Math.random().toString(8).slice(12);
  const requestId = Math.random().toString(8).slice(12);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': `${accountId}`,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `tiket${username}`,
      'User-Agent': 'tiketcom/android-version (twh:20296642) - v4.32.0-test-HEAD'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('pageModules', () => {
    const res1 = getPageModules(params);
    assertStatus(res1, 200, true, 'getPageModules');
    assertSuccess(res1, 'SUCCESS', true, 'getPageModules');
  });
};
const pageModulesFull = () => {
  const channelId = randomItem(pageModules_channelId_array);
  const lang = randomItem(pageModules_lang_array);
  const accountId = Math.random().toString(8).slice(12);
  const requestId = Math.random().toString(8).slice(12);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const loyalty_level = randomItem(['LV0', 'LV1', 'LV2']);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': `${accountId}`,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Currency': 'IDR',
      'X-Loyalty-Level': loyalty_level,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `tiket${username}`,
      'User-Agent': 'tiketcom/android-version (twh:20296642) - v4.32.0-test-masterfeature/HOM-8942/tiket_blibli_crosssell'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('pageModulesFull', () => {
    const res2 = getFullPageModules(params);
    assertStatus(res2, 200, true, 'getFullPageModules');
    assertSuccess(res2, 'SUCCESS', true, 'getFullPageModules');
  });
};
const pageModulesId = () => {
  const channelId = randomItem(pageModules_channelId_array);
  const lang = randomItem(pageModules_lang_array);
  const accountId = Math.random().toString(8).slice(12);
  const requestId = Math.random().toString(8).slice(12);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const loyalty_level = randomItem(['LV1', 'LV2', 'LV3']);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': `${accountId}`,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Currency': 'IDR',
      'X-Loyalty-Level': loyalty_level,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `tiket${username}`
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('pageModulesId', () => {
    const res3 = getPageModulesId(params);
    assertStatus(res3, 200, true, 'getPageModulesId');
    assertSuccess(res3, 'SUCCESS', true, 'getPageModulesId');
  });
};
;// CONCATENATED MODULE: ./apis/home/http/heroBanner.js

/**
 * Get hero banner
 * @param {object} params global parameters
 * @returns home module http response
 */

const getHeroBanner = params => {
  params.tags.name = 'getHeroBanner';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/hero-banners?platform=MOBILE`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/heroBanner.js



const heroBanner_lang_array = ['id', 'en'];
const heroBanner_channelId_array = ['ANDROID', 'MOBILE', 'IOS'];
const heroBanner = () => {
  const channelId = randomItem(heroBanner_channelId_array);
  const lang = randomItem(heroBanner_lang_array);
  const accountId = Math.random().toString(8).slice(12);
  const requestId = Math.random().toString(8).slice(12);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': `${accountId}`,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `perf${username}`,
      'X-Currency': 'IDR',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('heroBanner', () => {
    const l = getHeroBanner(params);
    assertStatus(l, 200, true, 'getHeroBanner');
    assertSuccess(l, 'SUCCESS', true, 'getHeroBanner');
  });
};
;// CONCATENATED MODULE: ./apis/home/http/homeModules.js
/* global __ENV */


/**
 * Home Modules
 * @param {object} params global parameters
 * @returns home module http response
 */

const getHomeModules = params => {
  params.tags.name = 'homeModules';
  params.headers['Content-Type'] = 'application/json';
  const queryParams = {
    availablePlatforms: 'MOBILE_WEB',
    platform: 'MOBILE',
    vertical: 'HOME'
  };
  const query = _3_0_0_index_js_default()(queryParams);
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/home-modules?${query}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/homeModuleNew.js



const homeModuleNew_lang_array = ['id', 'en'];
const homeModuleNew_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const homeModulesNew = () => {
  const channelId = randomItem(homeModuleNew_channelId_array);
  const lang = randomItem(homeModuleNew_lang_array);
  var accountId = Math.random().toString(8).slice(12);
  var requestId = Math.random().toString(8).slice(12);
  var username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': `${accountId}`,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `${username}`
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('homeModulesNew', () => {
    const l = getHomeModules(params);
    assertStatus(l, 200, true, 'getHomeModules');
    assertSuccess(l, 'SUCCESS', true, 'getHomeModules');
  });
};
;// CONCATENATED MODULE: ./apis/home/http/homeVerticals.js
/* global __ENV */


/**
 * Home Verticals
 * @param {object} params global paramaters
 * @returns home verticals http response
 */

const getHomeVerticals = params => {
  params.tags.name = 'getHomeVerticals';
  params.headers['Content-Type'] = 'application/json';
  const urlParams = {
    platform: 'MOBILE'
  };
  const query = _3_0_0_index_js_default()(urlParams);
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/verticals?${query}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/homeverticalsNew.js




const homeverticalsNew_lang_array = ['id', 'en'];
const homeverticalsNew_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const homeVerticals = () => {
  const channelId = randomItem(homeverticalsNew_channelId_array);
  const lang = randomItem(homeverticalsNew_lang_array);
  var requestId = Math.random().toString(8).slice(12);
  var username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  /**
   * GLOBAL PARAMETERS
   * if you have specific header in api,
   * please add it in your apis directory by extend this global parameters.
   */

  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `tiket${username}`
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  /**
   * APIS EXECUTION FLOW
   * this flow will run serializely
   */

  (0,external_k6_namespaceObject.group)('homeVerticals', () => {
    const uv = getHomeVerticals(params);
    assertStatus(uv, 200, true, 'getHomeVerticals');
    assertSuccess(uv, 'SUCCESS', true, 'getHomeVerticals');
  });
};
;// CONCATENATED MODULE: ./apis/home/http/logo.js

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */

const getLogo = params => {
  params.tags.name = 'getLogo';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home-admin/logo/all`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/logo.js



const logo_lang_array = ['id', 'en'];
const logo_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const logo = () => {
  const channelId = randomItem(logo_channelId_array);
  const lang = randomItem(logo_lang_array);
  var accountId = Math.random().toString(8).slice(12);
  var requestId = Math.random().toString(8).slice(12);
  var username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': `${accountId}`,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `perf${username}`,
      'X-Currency': 'IDR'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('logo', () => {
    const l = getLogo(params);
    assertStatus(l, 200, true, 'getLogo');
    assertSuccess(l, 'SUCCESS', true, 'getLogo');
  });
};
;// CONCATENATED MODULE: ./apis/home/http/userFooter.js

/**
 * Get user footer
 * @param {object} params global parameters
 * @returns home module http response
 */

const getUserFooter = params => {
  params.tags.name = 'getUserFooter';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/userFooter`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/userFooter.js



const userFooter_lang_array = ['id', 'en'];
const userFooter_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const userFooter = () => {
  const channelId = randomItem(userFooter_channelId_array);
  const lang = randomItem(userFooter_lang_array);
  var accountId = Math.random().toString(8).slice(12);
  var requestId = Math.random().toString(8).slice(12);
  var username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': lang,
      'X-Account-Id': `${accountId}`,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `perf${username}`,
      'X-Currency': 'IDR'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('userFooter', () => {
    const uv = getUserFooter(params);
    assertStatus(uv, 200, true, 'getUserFooter');
    assertSuccess(uv, 'SUCCESS', true, 'getUserFooter');
  });
};
;// CONCATENATED MODULE: ./apis/home/http/userVertical.js

/**
 * Get User Vertical
 * @param {object} params global parameters
 * @returns home module http response
 */

const getUserVertical = params => {
  params.tags.name = 'getUserVertical';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/userVertical`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/userVertical.js



const userVertical_lang_array = ['id', 'en'];
const userVertical_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const userVertical = () => {
  const channelId = randomItem(userVertical_channelId_array);
  const lang1 = randomItem(userVertical_lang_array);
  var accountId = Math.random().toString(8).slice(12);
  var requestId = Math.random().toString(8).slice(12);
  var username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      lang: lang1,
      accept: '*/*',
      'Accept-Language': lang1,
      'X-Account-Id': `${accountId}`,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `tiket${username}`,
      'X-Currency': 'IDR'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('userVertical', () => {
    const uv = getUserVertical(params);
    assertStatus(uv, 200, true, 'getUserVertical');
    assertSuccess(uv, 'SUCCESS', true, 'getUserVertical');
  });
};
;// CONCATENATED MODULE: ./apis/home/http/homePageNonLogin.js

/**
 * Get homepageNonlogin
 * @param {object} params global parameters
 * @returns home module http response
 */

const getHomePagesNonLogin = params => {
  params.tags.name = 'getHomePagesNonLogin';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/home-pages?availablePlatforms=ANDROID&platform=MOBILE&vertical=HOME`, params);
  return resp;
};
;// CONCATENATED MODULE: ./apis/home/http/homePageLogin.js

/**
 * Get homepagelogin
 * @param {object} params global parameters
 * @returns home module http response
 */

const getHomePagesLogin = params => {
  params.tags.name = 'getHomePagesLogin';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/home-pages?availablePlatforms=ANDROID&platform=MOBILE&vertical=HOME`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/homePagesNew.js



 //const creds = parseCSV('email', 'data/username.csv')

const accessToken = randomCSV('accesstoken', './data/accessToken.csv');
const homePagesNew_lang_array = ['id', 'en'];
const homePagesNew_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const homePageLogin = () => {
  const channelId = randomItem(homePagesNew_channelId_array);
  const lang = randomItem(homePagesNew_lang_array);
  var accountId = Math.random().toString(8).slice(12);
  var requestId = Math.random().toString(8).slice(12);
  var username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      accept: '*/*',
      'X-Push-Notification-Enabled': 'true',
      'Accept-Language': lang,
      'User-Agent': 'chrome',
      'X-Account-Id': `${accountId}`,
      'X-Business-Id': 0,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'X-Device-Id': '89asd89asd89asd98asd98asd98',
      'X-Login-Media': 'none',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `tiket${username}`
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('homePageLogin', () => {
    const hp = getHomePagesLogin(params);
    assertStatus(hp, 200, true, 'getHomePagesLogin');
    assertSuccess(hp, 'SUCCESS', true, 'getHomePagesLogin');
  });
};
const homePageNonLogin = () => {
  const channelId = randomItem(homePagesNew_channelId_array);
  const lang = randomItem(homePagesNew_lang_array);
  var accountId = Math.random().toString(8).slice(12);
  var requestId = Math.random().toString(8).slice(12);
  var username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const params = {
    headers: {
      accept: '*/*',
      'X-Push-Notification-Enabled': 'false',
      'Accept-Language': lang,
      'User-Agent': 'chrome',
      'X-Account-Id': `${accountId}`,
      'X-Business-Id': 0,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'X-Device-Id': '89asd89asd89asd98asd98asd98',
      'X-Login-Media': 'none',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': `tiket${username}`
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('homePageNonLogin', () => {
    const hp = getHomePagesNonLogin(params);
    assertStatus(hp, 200, true, 'getHomePagesNonLogin');
    assertSuccess(hp, 'SUCCESS', true, 'getHomePagesNonLogin');
  });
};
;// CONCATENATED MODULE: ./apis/home/http/payLater.js

/**
 * Get pay later
 * @param {object} params global parameters
 * @returns home module http response
 */

const getPayLater = (params, deviceId, deviceModel) => {
  params.tags.name = 'getPayLater';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/home-pages?availablePlatforms=ANDROID&headerVariant=newhome&platform=MOBILE&vertical=HOME`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/payLater.js



const payLater_accessToken = randomCSV('accesstoken', './data/accessToken.csv');
const payLater = () => {
  const channelId = randomItem(['ANDROID', 'MOBILE', 'IOS']);
  const lang = randomItem(['id', 'en']);
  const requestId = Math.random().toString(8).slice(12);
  const deviceId = randomIntBetween(100000, 1000000);
  const deviceModel = randomIntBetween(100000, 1000000);
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      accessToken: `${payLater_accessToken}`,
      'X-Country-Code': 'IDN',
      'X-Request-Id': `${requestId}`,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Currency': 'IDR',
      'User-Agent': 'tiketcom/android-version (twh:20296642) - v4.32.0-test-HEAD',
      'X-Loyalty-Level': randomItem(['LV1', 'LV2', 'LV3', 'LV4']),
      Authorization: 'Bearer de8273bbcfb77531c91d1c9daec850dd380c18b8'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('payLater', () => {
    const l = getPayLater(params, deviceId, deviceModel);
    assertStatus(l, 200, true, 'getPayLater');
    assertSuccess(l, 'SUCCESS', true, 'getPayLater');
  });
};
;// CONCATENATED MODULE: ./scenarios/home/PageModulesNew.js
/* eslint-disable eqeqeq */











function PageModulesNew_distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    pageModules: {
      targetRate: PageModulesNew_distribute(135 * __ENV.X_TARGET)
    },
    pageModulesId: {
      targetRate: PageModulesNew_distribute(66 * __ENV.X_TARGET)
    },
    pageModulesFull: {
      targetRate: PageModulesNew_distribute(1 * __ENV.X_TARGET)
    },
    heroBanner: {
      targetRate: PageModulesNew_distribute(131 * __ENV.X_TARGET)
    },
    homeModulesNew: {
      targetRate: PageModulesNew_distribute(134 * __ENV.X_TARGET)
    },
    homeVerticals: {
      targetRate: PageModulesNew_distribute(121 * __ENV.X_TARGET)
    },
    logo: {
      targetRate: PageModulesNew_distribute(1590 * __ENV.X_TARGET)
    },
    userFooter: {
      targetRate: PageModulesNew_distribute(1450 * __ENV.X_TARGET)
    },
    userVertical: {
      targetRate: PageModulesNew_distribute(1310 * __ENV.X_TARGET)
    },
    homePageNonLogin: {
      targetRate: PageModulesNew_distribute(600 * __ENV.X_TARGET)
    },
    // homePageLogin: { targetRate: distribute(600 * __ENV.X_TARGET) },
    payLater: {
      targetRate: PageModulesNew_distribute(1000 * __ENV.X_TARGET)
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
  } else if (config.scenario == 'load') {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [{
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, {
        duration: '3m',
        target: 0
      }]
    };
  } else if (config.scenario == 'capacity') {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [{
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
        target: Math.round(config.groupServices[name].targetRate * 0.13)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.13)
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
        target: Math.round(config.groupServices[name].targetRate * 0.16)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.16)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.17)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.17)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.18)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.18)
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
        target: Math.round(config.groupServices[name].targetRate * 0.22)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.22)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.24)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.24)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.26)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.26)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.28)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.28)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.32)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.32)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.34)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.34)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.36)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.36)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.38)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.38)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.42)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.42)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.44)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.44)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.46)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.46)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.48)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.48)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.52)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.52)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.54)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.54)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.56)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.56)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.58)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.58)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.62)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.62)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.64)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.64)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.66)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.66)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.68)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.68)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.82)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.82)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.84)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.84)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.86)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.86)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.88)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.88)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.92)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.92)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.94)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.94)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.96)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.96)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.98)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.98)
      }, {
        duration: '3m',
        target: 0
      }]
    };
  } else if (config.scenario == 'spike') {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [{
        duration: '5s',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '25m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '120m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '3m',
        target: 0
      }]
    };
  } else if (config.scenario == 'redisMongoDown') {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [{
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '30m',
        target: Math.round(config.groupServices[name].targetRate * 1)
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