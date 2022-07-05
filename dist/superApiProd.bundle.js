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
  "generalConfig": () => (/* reexport */ generalConfig),
  "heroBanner": () => (/* reexport */ heroBanner),
  "homeModules": () => (/* reexport */ homeModules),
  "homePageLogin": () => (/* reexport */ homePageLogin),
  "homePageNonLogin": () => (/* reexport */ homePageNonLogin),
  "homeVerticals": () => (/* reexport */ homeVerticals),
  "logo": () => (/* reexport */ logo),
  "options": () => (/* binding */ options),
  "userFooter": () => (/* reexport */ userFooter),
  "userVertical": () => (/* reexport */ userVertical)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/home/http/heroBanner.js

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */

const getHeroBanner = params => {
  params.tags.name = 'getHeroBanner';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/hero-banners?platform=MOBILE`, params);
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
const randomItem = arrayOfItems => {
  return arrayOfItems[Math.floor(Math.random() * arrayOfItems.length)];
};
const formatDate = dateObj => {
  return dateObj.toISOString().slice(0, 10);
};
const responseFailChecker = resp => {
  (0,external_k6_namespaceObject.check)(resp, {
    'is status 200': resp => {
      if (resp.status < 200 && resp.status > 399) {
        (0,external_k6_namespaceObject.fail)(`response: ${resp.status}, request: ${resp.request.url}`);
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
;// CONCATENATED MODULE: ./generator/home/heroBanner.js



const heroBanner = () => {
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': 'ID',
      'X-Account-Id': '123456',
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'username',
      'X-Currency': 'IDR'
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
;// CONCATENATED MODULE: external "https://jslib.k6.io/form-urlencoded/3.0.0/index.js"
const _3_0_0_index_js_namespaceObject = require("https://jslib.k6.io/form-urlencoded/3.0.0/index.js");;
var _3_0_0_index_js_default = /*#__PURE__*/__webpack_require__.n(_3_0_0_index_js_namespaceObject);
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
;// CONCATENATED MODULE: ./apis/home/http/homeModulesAsync.js
/* global __ENV */


/**
 * Get home modules async
 * @param {object} homeModulesResponse home modules response body
 * @returns array of async home modules
 */

const getHomeModulesAsync = homeModulesResponse => {
  const homeModulesAsync = [];

  for (const homeModule of homeModulesResponse.json('data')) {
    if (homeModule.processType === 'ASYNC' && homeModule.templateCode !== 'BANNER_PUSH_NOTIF' && homeModule.templateCode !== 'BANNER_LOCATION') {
      homeModulesAsync.push(homeModule);
    }
  }

  return homeModulesAsync;
};
/**
 * Home Module Async
 * @param {object} params global paramaters
 * @param {string} asyncId home modules async id
 * @returns home module async http response
 */

const homeModulesAsync = (params, asyncId) => {
  params.tags.name = 'homeModulesAsync';
  params.headers['Content-Type'] = 'application/json';
  const queryParams = {
    page: 0,
    size: 1
  };
  const query = _3_0_0_index_js_default()(queryParams);
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-home/v2/home-modules/async/${asyncId}?${query}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/homeModules.js




function homeModules() {
  const phpsessid = '1ce5ae53-93ac-426a-b6e2-044631f38ed7';
  /**
   * GLOBAL PARAMETERS
   * if you have specific header in api,
   * please add it in your apis directory by extend this global parameters.
   */

  const params = {
    headers: {
      lang: 'id',
      'Accept-Language': 'ID',
      'x-Account-Id': '0',
      'x-Channel-Id': 'WEB',
      'x-Country-Code': 'IDN',
      'x-Request-Id': '23123121',
      'x-Service-Id': 'gateway',
      'x-Store-Id': 'TIKETCOM',
      'x-Username': 'testing@tiket.com',
      Cookie: 'PHPSESSID=' + phpsessid
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

  (0,external_k6_namespaceObject.group)('home', () => {
    const hm = getHomeModules(params);
    responseFailChecker(hm);

    if (responseDataExist(hm)) {
      const asyncItems = getHomeModulesAsync(hm);

      for (const asyncItem of asyncItems) {
        const hma = homeModulesAsync(params, asyncItem.id);
        assertStatus(hma, 200, true, 'homeModulesAsync');
        assertSuccess(hma, 'SUCCESS', true, 'homeModulesAsync');
      }
    }
  });
}
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
;// CONCATENATED MODULE: ./generator/home/homeVerticals.js



function homeVerticals() {
  const phpsessid = '1ce5ae53-93ac-426a-b6e2-044631f38ed7';
  /**
   * GLOBAL PARAMETERS
   * if you have specific header in api,
   * please add it in your apis directory by extend this global parameters.
   */

  const params = {
    headers: {
      lang: 'id',
      'Accept-Language': 'ID',
      'x-Account-Id': '0',
      'x-Channel-Id': 'WEB',
      'x-Country-Code': 'IDN',
      'x-Request-Id': '23123121',
      'x-Service-Id': 'gateway',
      'x-Store-Id': 'TIKETCOM',
      'x-Username': 'testing@tiket.com',
      Cookie: 'PHPSESSID=' + phpsessid
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

  (0,external_k6_namespaceObject.group)('home', () => {
    responseFailChecker(getHomeVerticals(params));
  });
}
;// CONCATENATED MODULE: ./apis/home/http/generalConfig.js

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */

const getGeneralConfig = params => {
  params.tags.name = 'getGeneralConfig';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.GC_HOST}/tix-general-config/settings`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/generalConfig.js



const generalConfig = () => {
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': 'ID'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('generalConfig', () => {
    const l = getGeneralConfig(params);
    assertStatus(l, 200, true, 'getGeneralConfig');
    assertSuccess(l, 'SUCCESS', true, 'getGeneralConfig');
    (0,external_k6_namespaceObject.sleep)(0.1);
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



const logo = () => {
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': 'ID',
      'X-Account-Id': '123456',
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'username',
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
 * Get Logo
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



const userFooter = () => {
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': 'ID',
      'X-Account-Id': '123456',
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'username',
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



const userVertical = () => {
  const params = {
    headers: {
      lang: 'id',
      accept: '*/*',
      'Accept-Language': 'ID',
      'X-Account-Id': '123456',
      'X-Channel-Id': 'MOBILE',
      'X-Country-Code': 'IDN',
      'X-Request-Id': '23123123',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'username',
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
;// CONCATENATED MODULE: ./apis/home/http/homePages.js

/**
 * Get Logo
 * @param {object} params global parameters
 * @returns home module http response
 */

const getHomePages = params => {
  params.tags.name = 'getHomePages';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.HOME_HOST}/tix-home/v2/home-pages?availablePlatforms=ANDROID&platform=MOBILE&vertical=HOME`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/home/homePageProd.js



const creds = randomCSV('email', 'data/SuperAPI_username_prod.csv');
const homePageLogin = () => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'User-Agent': 'chrome',
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'Authorization': 'Bearer ' + creds[1]
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('homePageLogin', () => {
    const hp = getHomePages(params);
    assertStatus(hp, 200, true, 'getHomePages');
    assertSuccess(hp, 'SUCCESS', true, 'getHomePages');
  });
};
const homePageNonLogin = () => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'User-Agent': 'chrome',
      'X-Country-Code': 'IDN',
      'X-Currency': 'IDR'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('homePageNonLogin', () => {
    const hp = getHomePages(params);
    assertStatus(hp, 200, true, 'getHomePages');
    assertSuccess(hp, 'SUCCESS', true, 'getHomePages');
  });
};
;// CONCATENATED MODULE: ./scenarios/home/superApiProd.js









function superApiProd_distribute(serverCount, value) {
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
}

const serverCount = 5;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    generalConfig: {
      targetRate: superApiProd_distribute(serverCount, 100000),
      dist: 1
    },
    homePageNonLogin: {
      targetRate: superApiProd_distribute(serverCount, 55000),
      dist: 1
    },
    homePageLogin: {
      targetRate: superApiProd_distribute(serverCount, 45000),
      dist: 1
    },
    homeModules: {
      targetRate: superApiProd_distribute(serverCount, 7272),
      dist: 1
    },
    heroBanner: {
      targetRate: superApiProd_distribute(serverCount, 5180),
      dist: 1
    },
    homeVerticals: {
      targetRate: superApiProd_distribute(serverCount, 5300),
      dist: 1
    },
    logo: {
      targetRate: superApiProd_distribute(serverCount, 24312),
      dist: 1
    },
    userFooter: {
      targetRate: superApiProd_distribute(serverCount, 18400),
      dist: 1
    },
    userVertical: {
      targetRate: superApiProd_distribute(serverCount, 17900),
      dist: 1
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
  } else {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS * config.groupServices[name].dist,
      // #7 #8: all test that target 100k RPM
      // stages: [
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
      //   { duration: '20m', target: Math.round(config.groupServices[name].targetRate) },
      //   { duration: '3m', target: 0 }
      // ]
      // #9: Endurance
      // stages: [
      //   { duration: '10m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
      //   { duration: '120m', target: Math.round(config.groupServices[name].targetRate) },
      //   { duration: '3m', target: 0 }
      // ]
      // #10: Break Point
      stages: [{
        duration: '8m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, {
        duration: '2m',
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
      }, // 130k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, // 140k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, // 150k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, // 160k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, // 170k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, // 180k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, // 190k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, // 200k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, // 210k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, // 220k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, // 230k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.4)
      }, // 240k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, // 250k
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.0)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.0)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.5)
      }, {
        duration: '20m',
        target: Math.round(config.groupServices[name].targetRate * 3.5)
      }, // 300k
      {
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