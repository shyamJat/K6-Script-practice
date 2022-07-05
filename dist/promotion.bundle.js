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
  "data_generator": () => (/* reexport */ data_generator),
  "options": () => (/* binding */ options),
  "promoBanner": () => (/* reexport */ promoBanner),
  "promoFindValid": () => (/* reexport */ promoFindValid),
  "promoId": () => (/* reexport */ promoId),
  "promoQuota": () => (/* reexport */ promoQuota),
  "promoSchedulers": () => (/* reexport */ promoSchedulers),
  "promoSlug": () => (/* reexport */ promoSlug),
  "promos": () => (/* reexport */ promos)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/utilities/promotion/http/promo.js

/**
 * Get Promos
 * @param {object} params global parameters
 * @returns promos http response
 */

const getPromos = params => {
  params.tags.name = 'getPromos';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.API_HOST}/ms-gateway/tix-promotion-page/promos`, params);
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
;// CONCATENATED MODULE: ./generator/utilities/promotion/promo.js



const lang_array = ['id', 'en'];
const channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const promos = () => {
  const channelId = randomItem(channelId_array);
  const lang = randomItem(lang_array);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN'
    },
    tags: {
      name: 'promos'
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('getPromos', () => {
    const p = getPromos(params);
    assertStatus(p, 200, true, 'getPromos');
    assertSuccess(p, 'SUCCESS', true, 'getPromos');
  });
};
;// CONCATENATED MODULE: ./apis/utilities/promotion/http/promoId.js

/**
 * Get promoID
 * @param {object} params global parameters
 * @returns promo-codes http response
 */

const getPromoId = (params, data) => {
  params.tags.name = 'getPromoId';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.API_HOST}/tix-promotion-page/promos/${data.promotionId}/promo-codes?page=0&promoCodeIndex=0&size=5`, //page, promocodeindex and size set same as frontend code.
  params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/utilities/promotion/promoId.js



const promotionData = parseCSV('data', 'data/promotion.csv');
const promoId_lang_array = ['id', 'en'];
const promoId_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const promoId = () => {
  const data = promotionData[Math.floor(Math.random() * promotionData.length) - 1];
  const channelId = randomItem(promoId_channelId_array);
  const lang = randomItem(promoId_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  let loyalty_level = randomItem(["LV1", "LV2", "LV3"]);
  const params = {
    headers: {
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'X-Loyalty-Level': loyalty_level,
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM' + randomIntBetween(1, 10),
      'X-Username': username
    },
    tags: {
      name: 'promoId'
    },
    timeout: '3m'
  };
  const query = {
    promotionId: data[0]
  };
  (0,external_k6_namespaceObject.group)('getPromoId', () => {
    const pid = getPromoId(params, query);
    assertStatus(pid, 200, true, 'getPromoId');
    assertSuccess(pid, 'SUCCESS', true, 'getPromoId');
  });
};
;// CONCATENATED MODULE: ./apis/utilities/promotion/http/promoSlug.js

/**
 * Get PromoSlug
 * @param {object} params global parameters
 * @returns promoslug http response
 */

const getPromoSlug = (params, data) => {
  params.tags.name = 'getPromoSlug';
  params.headers['Content-Type'] = 'application/json';
  params.areaSize = 10; //same value as front-end

  params.brandSize = 10; //same value as front-end

  params.inventorySize = 30; //same value as front-end

  params.promoCodeSize = 10; //same value as front-end

  const resp = http_default().get(`${__ENV.API_HOST}/tix-promotion-page/promos/${data.slug}?areaSize=${params.areaSize}&brandSize=${params.brandSize}&category=${data.category}&inventorySize=${params.inventorySize}&promoCodeSize=${params.promoCodeSize}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/utilities/promotion/promoSlug.js



const promoSlug_promotionData = parseCSV('data', 'data/promotion.csv');
const promoSlug_lang_array = ['id', 'en'];
const promoSlug_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const promoSlug = () => {
  const data = promoSlug_promotionData[Math.floor(Math.random() * promoSlug_promotionData.length) - 1];
  const channelId = randomItem(promoSlug_channelId_array);
  const lang = randomItem(promoSlug_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  let loyalty_level = randomItem(["LV1", "LV2", "LV3"]);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'X-Loyalty-Level': loyalty_level,
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM' + randomIntBetween(1, 10),
      'X-Username': username
    },
    tags: {
      name: 'promoSlug'
    },
    timeout: '3m'
  };
  const query = {
    slug: data[2],
    category: data[1]
  };
  (0,external_k6_namespaceObject.group)('getPromoSlug', () => {
    const ps = getPromoSlug(params, query);
    assertStatus(ps, 200, true, 'getPromoSlug');
  });
};
;// CONCATENATED MODULE: ./apis/utilities/promotion/http/promoBanner.js

/**
 * Get promo Banner
 * @param {object} params global parameters
 * @returns promo banner http response
 */

const getPromoBanner = params => {
  params.tags.name = 'getPromoBanner';
  params.headers['Content-Type'] = 'application/json';
  params.size = 15; //size set in front end.

  const resp = http_default().get(`${__ENV.API_HOST}/ms-gateway/tix-promotion-page/promos/banner?size=${params.size}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/utilities/promotion/promoBanner.js



const promoBanner_lang_array = ['id', 'en'];
const promoBanner_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const promoBanner = () => {
  const channelId = randomItem(promoBanner_channelId_array);
  const lang = randomItem(promoBanner_lang_array);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN'
    },
    tags: {
      name: 'promoBanner'
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('getPromoBanner', () => {
    const pb = getPromoBanner(params);
    assertStatus(pb, 200, true, 'getPromoBanner');
    assertSuccess(pb, 'SUCCESS', true, 'getPromoBanner');
  });
};
;// CONCATENATED MODULE: ./apis/utilities/promotion/http/promoQuota.js

/**
 * Get Quota
 * @param {object} params global parameters
 * @returns quota http response
 */

const getPromoQuota = params => {
  params.tags.name = 'getPromoQuota';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.API_HOST}/ms-gateway/tix-promotion-page/promos/promo-codes/quota`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/utilities/promotion/promoQuota.js



const promoQuota_lang_array = ['id', 'en'];
const promoQuota_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const promoQuota = () => {
  const channelId = randomItem(promoQuota_channelId_array);
  const lang = randomItem(promoQuota_lang_array);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN'
    },
    tags: {
      name: 'promoQuota'
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('getPromoQuota', () => {
    const pq = getPromoQuota(params);
    assertStatus(pq, 200, true, 'getPromoQuota');
    assertSuccess(pq, 'SUCCESS', true, 'getPromoQuota');
  });
};
;// CONCATENATED MODULE: ./apis/utilities/promotion/http/promoFindValid.js

/**
 * Get FindAllValid
 * @param {object} params global parameters
 * @returns findAllValid http response
 */

const getPromoFindValid = (params, query) => {
  params.tags.name = 'getPromoFindValid';
  params.headers['Content-Type'] = 'application/json';
  params.lang = query.lang;
  params.category = 'flight'; //Need to hardcode as confirmed with dev

  const resp = http_default().get(`${__ENV.API_HOST}/ms-gateway/tix-promolist/promoPages/findAllValid?lang=${query.lang}&category=${params.category}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/utilities/promotion/promoFindValid.js



const promoFindValid_lang_array = ['id', 'en'];
const promoFindValid_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const promoFindValid = () => {
  const channelId = randomItem(promoFindValid_channelId_array);
  const lang = randomItem(promoFindValid_lang_array);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      channelId: channelId,
      lang: lang
    },
    tags: {
      name: 'FindValid'
    },
    timeout: '3m'
  };
  const query = {
    channelId: channelId,
    lang: lang
  };
  (0,external_k6_namespaceObject.group)('getPromoFindValid', () => {
    const pfv = getPromoFindValid(params, query);
    assertStatus(pfv, 200, true, 'getPromoFindValid');
    assertSuccess(pfv, 'SUCCESS', true, 'getPromoFindValid');
  });
};
;// CONCATENATED MODULE: ./apis/utilities/promotion/http/promoSchedulers.js

/**
 * Get PromoSchedulers
 * @param {object} params global parameters
 * @returns schedulers http response
 */

const getPromoSchedulers = params => {
  params.tags.name = 'getPromoSchedulers';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.API_HOST}/tix-promotion-page/admin/promos/promo-codes/schedulers`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/utilities/promotion/promoSchedulers.js



const promoSchedulers_lang_array = ['id', 'en'];
const promoSchedulers_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const promoSchedulers = () => {
  const channelId = randomItem(promoSchedulers_channelId_array);
  const lang = randomItem(promoSchedulers_lang_array);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN'
    },
    tags: {
      name: 'promoSchedulers'
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('getPromoSchedulers', () => {
    const pb = getPromoSchedulers(params);
    assertStatus(pb, 200, true, 'getPromoSchedulers');
    assertSuccess(pb, 'SUCCESS', true, 'getPromoSchedulers');
  });
};
;// CONCATENATED MODULE: ./generator/utilities/promotion/data_generator.js



const data_generator_lang_array = ['id', 'en'];
const data_generator_channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const data_generator = () => {
  const channelId = randomItem(data_generator_channelId_array);
  const lang = randomItem(data_generator_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  let loyalty_level = randomItem(['LV1', 'LV2', 'LV3']);
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': lang,
      'X-Channel-Id': channelId,
      'X-Country-Code': 'IDN',
      'X-Currency': 'idr',
      'X-Loyalty-Level': loyalty_level,
      'X-Request-Id': requestId,
      'X-Service-Id': 'gateway',
      //same as front-end
      'X-Store-Id': 'TIKETCOM' + randomIntBetween(1, 10),
      'X-Username': username
    },
    tags: {
      name: 'data_generator'
    },
    timeout: '3m'
  };
  (0,external_k6_namespaceObject.group)('getPromos', () => {
    const p = getPromos(params);
    assertStatus(p, 200, true, 'getPromos');
    assertSuccess(p, 'SUCCESS', true, 'getPromos'); // To generate promotion.csv file

    const response = JSON.parse(p.body);
    const content_array = response.data.contents;
    let id, slug_string, category, slug;

    for (let i = 0; i < content_array.length; i++) {
      id = content_array[i].id;
      slug_string = content_array[i].slug; // category = slug_string.slice(slug_string.indexOf("/")+1, slug_string.lastIndexOf("/"))

      category = 'campaign'; //Need to hard-code as confirmed with dev.

      slug = slug_string.slice(slug_string.lastIndexOf('/') + 1);
      console.log(id + ',' + category + ',' + slug);
    }
  });
};
;// CONCATENATED MODULE: ./scenarios/utilities/promo/promotion.js









function promotion_distribute(serverCount, value) {
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
}

const serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    promos: {
      targetRate: promotion_distribute(serverCount, 100),
      dist: 1
    },
    promoId: {
      targetRate: promotion_distribute(serverCount, 200),
      dist: 1
    },
    promoSlug: {
      targetRate: promotion_distribute(serverCount, 400),
      dist: 1
    },
    promoBanner: {
      targetRate: promotion_distribute(serverCount, 100),
      dist: 1
    },
    promoQuota: {
      targetRate: promotion_distribute(serverCount, 100),
      dist: 1
    },
    promoFindValid: {
      targetRate: promotion_distribute(serverCount, 100),
      dist: 1
    },
    promoSchedulers: {
      targetRate: promotion_distribute(serverCount, 1),
      dist: 1
    } //data_generator: { targetRate: distribute(serverCount, 1), dist: 1 },

  }
};
const options = {
  scenarios: {}
};

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
    let stages = [];

    if (config.scenario === 'load' || config.scenario === 'spike') {
      stages = [{
        duration: '5s',
        target: Math.round(config.groupServices[name].targetRate * 5)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 10)
      }, {
        duration: '25m',
        target: Math.round(config.groupServices[name].targetRate * 10)
      }, {
        duration: '120m',
        target: Math.round(config.groupServices[name].targetRate * 10)
      }, {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'capacity') {
      stages = [{
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 5)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 9)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 10)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 10)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 11)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 11)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 12)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 12)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 13)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 13)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 14)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 14)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 15)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 15)
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