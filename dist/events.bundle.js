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
  "options": () => (/* binding */ options),
  "productCategories": () => (/* reexport */ productCategories),
  "productCount": () => (/* reexport */ productCount),
  "sections": () => (/* reexport */ sections),
  "v1ProductCards": () => (/* reexport */ v1ProductCards),
  "v1campaigns": () => (/* reexport */ v1campaigns),
  "v1products": () => (/* reexport */ v1products),
  "v2ProductCards": () => (/* reexport */ v2ProductCards),
  "v2campaignProducts": () => (/* reexport */ v2campaignProducts)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/events/v2ProductCards.js

/**
 * Get v2 product cards
 * @param {object} params global parameters
 * @returns home module http response
 */

const getv2ProductCards = (params, pageSize, sortField, sortDirection, productCategoryCodes, sortLongLat) => {
  params.tags.name = 'v2ProductCards';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-events-v2-inventory/v2/product-cards?pageSize=${pageSize}&sortField=${sortField}&sortDirection=${sortDirection}&productCategoryCodes=${productCategoryCodes}&sortLongLat=${sortLongLat}`, params);
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
;// CONCATENATED MODULE: ./generator/events/v2ProductCards.js



const lang_array = ['ID', 'EN'];
const channelId_array = ['ANDROID', 'WEB', 'IOS'];
let loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const isVerifiedPhone_Number = randomItem(["true", "false"]);
const userAgent = randomItem(["tiketcom/android-version 1", "tiketcom/ios-version 1"]);
const v2ProductCards = () => {
  const channelId = randomItem(channelId_array);
  const lang = randomItem(lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  const pageSize = 20;
  const sortField = 'popularityScore';
  const sortDirection = 'ASC';
  const productCategoryCodes = randomItem(["TODO_ONLINE", "GAME_HOBBY", "PLAYGROUND", "TOUR", "BEAUTY_WELLNESS", "HOTEL", "EVENT", "CULINARY", "ATTRACTION", "TRANSPORT", "TRAVEL_ESSENTIAL", "CLASS_WORKSHOP", "OPENTRIP", "PONX", "PONPAPUA", "SPORT_OUTDOOR", "COVID19_TEST"]);
  const sortLong = getRandomInRange(-180, 180, 7);
  const sortLat = getRandomInRange(-90, 90, 7);
  const sortLongLat = [sortLong, sortLat];
  const params = {
    headers: {
      accept: '*/*',
      'language': `${lang}`,
      'storeId': 'TIKETCOM' + randomIntBetween(1, 10),
      'serviceId': 'GATEWAY',
      'channelId': `${channelId}`,
      'requestId': `${requestId}`,
      'x-loyalty-level': `${loyalty_level}`,
      'username': `${username}`,
      'isVerifiedPhoneNumber': `${isVerifiedPhone_Number}`,
      'true-client-ip': 'NONE',
      'userAgent': `${userAgent}`,
      'currency': 'IDR'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('v2ProductCards', () => {
    const l = getv2ProductCards(params, pageSize, sortField, sortDirection, productCategoryCodes, sortLongLat);
    assertStatus(l, 200, true, 'getv2ProductCards');
    assertSuccess(l, 'SUCCESS', true, 'getv2ProductCards');
  });
};
;// CONCATENATED MODULE: ./apis/events/v2campaignProducts.js

/**
 * Get v2 campaignProducts
 * @param {object} params global parameters
 * @returns home module http response
 */

const getv2campaignProducts = (params, campaignId) => {
  params.tags.name = 'v2campaignProducts';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-events-v2-inventory/admins/campaign-products?groupBy=category&campaignId=${campaignId}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/events/v2campaignProducts.js



const v2campaignProducts_lang_array = ['ID', 'EN'];
const v2campaignProducts_channelId_array = ['ANDROID', 'IOS'];
let v2campaignProducts_loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const v2campaignProducts_isVerifiedPhone_Number = randomItem(["true", "false"]);
const campaignId = '5f9130b86cd92d2fb0eadfd6';
const v2campaignProducts_userAgent = randomItem(["tiketcom/android-version 1", "tiketcom/ios-version 1"]);
const v2campaignProducts = () => {
  const channelId = randomItem(v2campaignProducts_channelId_array);
  const lang = randomItem(v2campaignProducts_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  const params = {
    headers: {
      accept: '*/*',
      'language': `${lang}`,
      'storeId': 'TIKETCOM' + randomIntBetween(1, 10),
      'serviceId': 'GATEWAY',
      'channelId': `${channelId}`,
      'requestId': `${requestId}`,
      'x-loyalty-level': `${v2campaignProducts_loyalty_level}`,
      'username': `${username}`,
      'isVerifiedPhoneNumber': `${v2campaignProducts_isVerifiedPhone_Number}`,
      'true-client-ip': 'NONE',
      'userAgent': `${v2campaignProducts_userAgent}`,
      'currency': 'IDR',
      'businessId': '0'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('v2campaignProducts', () => {
    const l = getv2campaignProducts(params, campaignId);
    assertStatus(l, 200, true, 'getv2campaignProducts');
    assertSuccess(l, 'SUCCESS', true, 'getv2campaignProducts');
  });
};
;// CONCATENATED MODULE: ./apis/events/v1ProductCards.js

/**
 * Get v1 product cards
 * @param {object} params global parameters
 * @returns home module http response
 */
//export const getv1productCards = (params,isOnlineExperience,hasPromo,hasExtraBenefit,isTiketClean,isTiketFlexi,showInFilter,isInstantPass,campaignId,sortLongLat,productCategoryCodes,regions,cities,countries,subcategoryCodes) => {

const getv1productCards = (params, isOnlineExperience, hasPromo, hasExtraBenefit, isTiketClean, isTiketFlexi, showInFilter, isInstantPass, campaignId, productCategoryCodes, regions, cities, countries, subcategoryCodes) => {
  params.tags.name = 'v1productCards';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get( // `${__ENV.LB_HOST}/gateway-events/tix-events-v2-inventory/v1/product-cards?isClosed=false&isOnlineExperience=${isOnlineExperience}&hasPromo=${hasPromo}&hasExtraBenefit=${hasExtraBenefit}&isTiketClean=${isTiketClean}&isTiketFlexi=${isTiketFlexi}&showInFilter=${showInFilter}&isInstantPass=${isInstantPass}&campaignId=${campaignId}&sortLongLat=${sortLongLat}&productCategoryCodes=${productCategoryCodes}&regions=${regions}&cities=${cities}&countries=${countries}&subcategoryCodes=${subcategoryCodes}`,
  `${__ENV.LB_HOST}/gateway-events/tix-events-v2-inventory/v1/product-cards?isClosed=false&isOnlineExperience=${isOnlineExperience}&hasPromo=${hasPromo}&hasExtraBenefit=${hasExtraBenefit}&isTiketClean=${isTiketClean}&isTiketFlexi=${isTiketFlexi}&showInFilter=${showInFilter}&isInstantPass=${isInstantPass}&campaignId=${campaignId}&productCategoryCodes=${productCategoryCodes}&regions=${regions}&cities=${cities}&countries=${countries}&subcategoryCodes=${subcategoryCodes}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/events/v1ProductCards.js



const v1ProductCards_lang_array = ['ID', 'EN'];
const v1ProductCards_channelId_array = ['ANDROID', 'IOS'];
let v1ProductCards_loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const v1ProductCards_isVerifiedPhone_Number = randomItem(["true", "false"]);
const v1ProductCards_userAgent = randomItem(["tiketcom/android-version 1", "tiketcom/ios-version 1"]);
const isOnlineExperience = randomItem(["true", "false"]);
const hasPromo = randomItem(["true", "false"]);
const hasExtraBenefit = randomItem(["true", "false"]);
const isTiketClean = randomItem(["true", "false"]);
const isTiketFlexi = randomItem(["true", "false"]);
const showInFilter = randomItem(["true", "false"]);
const isInstantPass = randomItem(["true", "false"]);
const v1ProductCards_campaignId = '5f9130b86cd92d2fb0eadfd6';
const productCategoryCodes = randomItem(["TODO_ONLINE", "GAME_HOBBY", "PLAYGROUND", "TOUR", "BEAUTY_WELLNESS", "HOTEL", "EVENT", "CULINARY", "ATTRACTION", "TRANSPORT", "TRAVEL_ESSENTIAL", "CLASS_WORKSHOP", "OPENTRIP", "PONX", "PONPAPUA", "SPORT_OUTDOOR", "COVID19_TEST"]);
const regions = randomItem(["JAWA_TIMUR", "JAWA_BARAT", "JAWA_TENGAH", "BALI", "BANTEN", "CALIFORNIA", "ENGLAND", "NEW_SOUTH_WALES"]);
const cities = randomItem(["SURABAYA", "MALANG", "BOGOR", "BANDUNG", "MAGELANG", "DENPASAR", "TANGERANG"]);
const countries = randomItem(["INDONESIA", "AUSTRALIA", "UNITED_KINGDOM", "AMERIKA_SERIKAT"]);
const subcategoryCodes = randomItem(["attractions", "arcades", "trampolines", "massage-spas", "beauty-treatments", "tours", "covid19-test", "pcr-test", "rapid-test"]);
const v1ProductCards = () => {
  const channelId = randomItem(v1ProductCards_channelId_array);
  const lang = randomItem(v1ProductCards_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  const params = {
    headers: {
      accept: '*/*',
      'language': `${lang}`,
      'storeId': 'TIKETCOM' + randomIntBetween(1, 10),
      'serviceId': 'GATEWAY',
      'channelId': `${channelId}`,
      'requestId': `${requestId}`,
      'x-loyalty-level': `${v1ProductCards_loyalty_level}`,
      'username': `${username}`,
      'isVerifiedPhoneNumber': `${v1ProductCards_isVerifiedPhone_Number}`,
      'true-client-ip': 'NONE',
      'userAgent': `${v1ProductCards_userAgent}`,
      'currency': 'IDR'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('v1ProductCards', () => {
    // const l = getv1productCards(params,isOnlineExperience,hasPromo,hasExtraBenefit,isTiketClean,isTiketFlexi,showInFilter,isInstantPass,campaignId,sortLongLat,productCategoryCodes,regions,cities,countries,subcategoryCodes)
    const l = getv1productCards(params, isOnlineExperience, hasPromo, hasExtraBenefit, isTiketClean, isTiketFlexi, showInFilter, isInstantPass, v1ProductCards_campaignId, productCategoryCodes, regions, cities, countries, subcategoryCodes);
    assertStatus(l, 200, true, 'getv1productCards');
    assertSuccess(l, 'SUCCESS', true, 'getv1productCards');
  });
};
;// CONCATENATED MODULE: ./apis/events/productCount.js

/**
 * Get  product count
 * @param {object} params global parameters
 * @returns home module http response
 */

const getproductCount = (params, isOnlineExperience, hasPromo, hasExtraBenefit, isTiketClean, isTiketFlexi, showInFilter, isInstantPass, campaignId, productCategoryCodes, regions, cities, countries, subcategoryCodes) => {
  params.tags.name = 'getproductCount';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/gateway-events/tix-events-v2-inventory/v1/products/count?isClosed=false&isOnlineExperience=${isOnlineExperience}&hasPromo=${hasPromo}&hasExtraBenefit=${hasExtraBenefit}&isTiketClean=${isTiketClean}&isTiketFlexi=${isTiketFlexi}&showInFilter=${showInFilter}&isInstantPass=${isInstantPass}&campaignId=${campaignId}&productCategoryCodes=${productCategoryCodes}&regions=${regions}&cities=${cities}&countries=${countries}&subcategoryCodes=${subcategoryCodes}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/events/productCount.js



const productCount_lang_array = ['ID', 'EN'];
const productCount_channelId_array = ['ANDROID', 'IOS'];
let productCount_loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const productCount_isVerifiedPhone_Number = randomItem(["true", "false"]);
const productCount_userAgent = randomItem(["tiketcom/android-version 1", "tiketcom/ios-version 1"]);
const productCount_isOnlineExperience = randomItem(["true", "false"]);
const productCount_hasPromo = randomItem(["true", "false"]);
const productCount_hasExtraBenefit = randomItem(["true", "false"]);
const productCount_isTiketClean = randomItem(["true", "false"]);
const productCount_isTiketFlexi = randomItem(["true", "false"]);
const productCount_showInFilter = randomItem(["true", "false"]);
const productCount_isInstantPass = randomItem(["true", "false"]);
const productCount_campaignId = '5f9130b86cd92d2fb0eadfd6';
const productCount_productCategoryCodes = randomItem(["TODO_ONLINE", "GAME_HOBBY", "PLAYGROUND", "TOUR", "BEAUTY_WELLNESS", "HOTEL", "EVENT", "CULINARY", "ATTRACTION", "TRANSPORT", "TRAVEL_ESSENTIAL", "CLASS_WORKSHOP", "OPENTRIP", "PONX", "PONPAPUA", "SPORT_OUTDOOR", "COVID19_TEST"]);
const productCount_regions = randomItem(["JAWA_TIMUR", "JAWA_BARAT", "JAWA_TENGAH", "BALI", "BANTEN", "CALIFORNIA", "ENGLAND", "NEW_SOUTH_WALES"]);
const productCount_cities = randomItem(["SURABAYA", "MALANG", "BOGOR", "BANDUNG", "MAGELANG", "DENPASAR", "TANGERANG"]);
const productCount_countries = randomItem(["INDONESIA", "AUSTRALIA", "UNITED_KINGDOM", "AMERIKA_SERIKAT"]);
const productCount_subcategoryCodes = randomItem(["attractions", "arcades", "trampolines", "massage-spas", "beauty-treatments", "tours", "covid19-test", "pcr-test", "rapid-test"]);
const productCount = () => {
  const channelId = randomItem(productCount_channelId_array);
  const lang = randomItem(productCount_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  const params = {
    headers: {
      accept: '*/*',
      'language': `${lang}`,
      'storeId': 'TIKETCOM' + randomIntBetween(1, 10),
      'serviceId': 'GATEWAY',
      'channelId': `${channelId}`,
      'requestId': `${requestId}`,
      'x-loyalty-level': `${productCount_loyalty_level}`,
      'username': `${username}`,
      'isVerifiedPhoneNumber': `${productCount_isVerifiedPhone_Number}`,
      'true-client-ip': 'NONE',
      'userAgent': `${productCount_userAgent}`,
      'currency': 'IDR'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('productCount', () => {
    const l = getproductCount(params, productCount_isOnlineExperience, productCount_hasPromo, productCount_hasExtraBenefit, productCount_isTiketClean, productCount_isTiketFlexi, productCount_showInFilter, productCount_isInstantPass, productCount_campaignId, productCount_productCategoryCodes, productCount_regions, productCount_cities, productCount_countries, productCount_subcategoryCodes);
    assertStatus(l, 200, true, 'getproductCount');
    assertSuccess(l, 'SUCCESS', true, 'getproductCount');
  });
};
;// CONCATENATED MODULE: ./apis/events/sections.js

/**
 * Get  v2 sections
 * @param {object} params global parameters
 * @returns home module http response
 */

const getSections = (params, excludeBanner, countryId, regionId, cityId) => {
  params.tags.name = 'getSections';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/gateway-events/tix-events-v2-inventory/v2/sections?excludeBanner=${excludeBanner}&countryId=${countryId}&regionId=${regionId}&countryId=${countryId}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/events/sections.js



const sections_lang_array = ['ID', 'EN'];
const sections_channelId_array = ['ANDROID', 'IOS'];
let sections_loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const sections_isVerifiedPhone_Number = randomItem(["true", "false"]);
const sections_userAgent = randomItem(["tiketcom/android-version 1", "tiketcom/ios-version 1"]);
const excludeBanner = randomItem(["true", "false"]);
const countryId = randomItem(['5e5686c0b51b140bf5bc755c', '5e58bddbcacdb20ffba6f05e', '5e58db5d17b783123991496d', '5e58e0bbcacdb20ffba6f06a']);
const regionId = randomItem(['5e58e73acacdb20ffba6f06c', '5e58df4317b7831239914970', '5e58c24e17b7831239914969']);
const cityId = randomItem(['5f5eee075f155a3eb0e3d2f2', '5e5c874917b7831239914988', '5f5ef068879c7b637f13350d', '5f5ef0ec879c7b637f13350e', '5e5c86f6cacdb20ffba6f076', '5fb1f87c009b325f326624ae']);
const sections = () => {
  const channelId = randomItem(sections_channelId_array);
  const lang = randomItem(sections_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  const params = {
    headers: {
      accept: '*/*',
      'language': `${lang}`,
      'storeId': 'TIKETCOM' + randomIntBetween(1, 10),
      'serviceId': 'GATEWAY',
      'channelId': `${channelId}`,
      'requestId': `${requestId}`,
      'x-loyalty-level': `${sections_loyalty_level}`,
      'username': `${username}`,
      'isVerifiedPhoneNumber': `${sections_isVerifiedPhone_Number}`,
      'true-client-ip': 'NONE',
      'userAgent': `${sections_userAgent}`,
      'currency': 'IDR'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('sections', () => {
    const l = getSections(params, excludeBanner, countryId, regionId, cityId);
    assertStatus(l, 200, true, 'getSections');
    assertSuccess(l, 'SUCCESS', true, 'getSections');
  });
};
;// CONCATENATED MODULE: ./apis/events/v1campaigns.js

/**
 * Get  v1campaigns
 * @param {object} params global parameters
 * @returns home module http response
 */

const getv1campaigns = (params, isDiscoverable, isEffectiveNow) => {
  params.tags.name = 'getv1campaigns';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/gateway-events/tix-events-v2-inventory/v1/campaigns?isDiscoverable=${isDiscoverable}&isEffectiveNow=${isEffectiveNow}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/events/v1campaigns.js



const v1campaigns_lang_array = ['ID', 'EN'];
const v1campaigns_channelId_array = ['ANDROID', 'IOS'];
let v1campaigns_loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const v1campaigns_isVerifiedPhone_Number = randomItem(["true", "false"]);
const v1campaigns_userAgent = randomItem(["tiketcom/android-version 1", "tiketcom/ios-version 1"]);
const isDiscoverable = randomItem(["true", "false"]);
const isEffectiveNow = randomItem(["true", "false"]);
const v1campaigns = () => {
  const channelId = randomItem(v1campaigns_channelId_array);
  const lang = randomItem(v1campaigns_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  const params = {
    headers: {
      accept: '*/*',
      'language': `${lang}`,
      'storeId': 'TIKETCOM' + randomIntBetween(1, 10),
      'serviceId': 'GATEWAY',
      'channelId': `${channelId}`,
      'requestId': `${requestId}`,
      'x-loyalty-level': `${v1campaigns_loyalty_level}`,
      'username': `${username}`,
      'isVerifiedPhoneNumber': `${v1campaigns_isVerifiedPhone_Number}`,
      'true-client-ip': 'NONE',
      'userAgent': `${v1campaigns_userAgent}`,
      'currency': 'IDR'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('v1campaigns', () => {
    const l = getv1campaigns(params, isDiscoverable, isEffectiveNow);
    assertStatus(l, 200, true, 'getv1campaigns');
    assertSuccess(l, 'SUCCESS', true, 'getv1campaigns');
  });
};
;// CONCATENATED MODULE: ./apis/events/v1products.js

/**
 * Get  v1 products
 * @param {object} params global parameters
 * @returns home module http response
 */

const getv1products = (params, id) => {
  params.tags.name = 'getv1products';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/gateway-events/tix-events-v2-inventory/v1/products/${id}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/events/v1products.js



const v1products_lang_array = ['ID', 'EN'];
const v1products_channelId_array = ['ANDROID', 'IOS'];
let v1products_loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const v1products_isVerifiedPhone_Number = randomItem(["true", "false"]);
const v1products_userAgent = randomItem(["tiketcom/android-version 1", "tiketcom/ios-version 1"]);
const id = randomItem(['61cac263b70c2f367fdead91', '617a3d55063bd70082b8d36b', '5ea27a65f7823d40df6ae3d6', '60794832fdf6074422b397b4', '5e5d08800dcd8875a5210a99']);
const v1products = () => {
  const channelId = randomItem(v1products_channelId_array);
  const lang = randomItem(v1products_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  const params = {
    headers: {
      accept: '*/*',
      'language': 'ID',
      'storeId': 'TIKETCOM',
      'serviceId': 'GATEWAY',
      'channelId': `${channelId}`,
      'requestId': `${requestId}`,
      'x-loyalty-level': `${v1products_loyalty_level}`,
      'username': `${username}`,
      'isVerifiedPhoneNumber': `${v1products_isVerifiedPhone_Number}`,
      'true-client-ip': 'NONE',
      'userAgent': `${v1products_userAgent}`,
      'currency': 'IDR'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('v1products', () => {
    const l = getv1products(params, id);
    assertStatus(l, 200, true, 'getv1products');
    assertSuccess(l, 'SUCCESS', true, 'getv1products');
  });
};
;// CONCATENATED MODULE: ./apis/events/productCategories.js

/**
 * Get  product categories
 * @param {object} params global parameters
 * @returns home module http response
 */

const getproductCategories = (params, regionCode, cityCode) => {
  params.tags.name = 'getproductcategories';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${__ENV.LB_HOST}/gateway-events/tix-events-v2-inventory/v2/product-categories?regionCode=${regionCode}&countryCode=INDONESIA&cityCode=${cityCode}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/events/productCategories.js



const productCategories_lang_array = ['ID', 'EN'];
const productCategories_channelId_array = ['ANDROID', 'IOS'];
let productCategories_loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const productCategories_isVerifiedPhone_Number = randomItem(["true", "false"]);
const productCategories_userAgent = randomItem(["tiketcom/android-version 1", "tiketcom/ios-version 1"]);
const regionCode = randomItem(["JAWA_TIMUR", "JAWA_BARAT", "JAWA_TENGAH", "BALI", "BANTEN"]);
const cityCode = randomItem(["SURABAYA", "MALANG", "BOGOR", "BANDUNG", "MAGELANG", "DENPASAR", "TANGERANG"]);
const productCategories = () => {
  const channelId = randomItem(productCategories_channelId_array);
  const lang = randomItem(productCategories_lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let requestId = Math.floor(20000000 + Math.random() * 90000000);
  const params = {
    headers: {
      accept: '*/*',
      'language': `${lang}`,
      'storeId': 'TIKETCOM' + randomIntBetween(1, 10),
      'serviceId': 'GATEWAY',
      'channelId': `${channelId}`,
      'requestId': `${requestId}`,
      'x-loyalty-level': `${productCategories_loyalty_level}`,
      'username': `${username}`,
      'isVerifiedPhoneNumber': `${productCategories_isVerifiedPhone_Number}`,
      'true-client-ip': 'NONE',
      'userAgent': `${productCategories_userAgent}`,
      'currency': 'IDR'
    },
    tags: {
      name: ''
    }
  };
  (0,external_k6_namespaceObject.group)('productCategories', () => {
    const l = getproductCategories(params, regionCode, cityCode);
    assertStatus(l, 200, true, 'getproductCategories');
    assertSuccess(l, 'SUCCESS', true, 'getproductCategories');
  });
};
;// CONCATENATED MODULE: ./scenarios/events/events.js









function events_distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    v2ProductCards: {
      targetRate: events_distribute(5540 * __ENV.X_TARGET)
    },
    v2campaignProducts: {
      targetRate: events_distribute(5540 * __ENV.X_TARGET)
    },
    v1ProductCards: {
      targetRate: events_distribute(5540 * __ENV.X_TARGET)
    },
    productCount: {
      targetRate: events_distribute(2900 * __ENV.X_TARGET)
    },
    sections: {
      targetRate: events_distribute(470 * __ENV.X_TARGET)
    },
    v1campaigns: {
      targetRate: events_distribute(450 * __ENV.X_TARGET)
    },
    v1products: {
      targetRate: events_distribute(1340 * __ENV.X_TARGET)
    },
    productCategories: {
      targetRate: events_distribute(1000 * __ENV.X_TARGET)
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
        target: Math.round(config.groupServices[name].targetRate * 1.0)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 1.0)
      }, {
        duration: '3m',
        target: 0
      }]
    };
  }
} // load stages
// stages : [
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.01) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.01) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.02) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.02) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.03) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.03) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.04) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.04) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.05) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.06) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.06) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.07) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.07) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.08) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.08) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.09) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.09) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.12) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.12) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.13) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.13) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.14) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.14) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.15) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.15) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.16) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.16) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.17) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.17) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.18) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.18) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.19) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.19) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.22) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.22) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.24) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.24) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.26) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.26) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.28) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.28) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.32) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.32) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.34) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.34) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.36) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.36) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.38) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.38) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.42) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.42) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.44) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.44) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.46) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.46) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.48) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.48) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.52) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.52) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.54) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.54) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.56) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.56) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.58) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.58) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.62) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.62) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.64) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.64) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.66) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.66) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.68) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.68) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.82) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.82) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.84) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.84) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.86) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.86) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.88) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.88) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.92) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.92) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.94) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.94) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.96) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.96) },
//   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.98) },
//   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.98) },
//   { duration: '3m', target: 0 }
// ]
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;