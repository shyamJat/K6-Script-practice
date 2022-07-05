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
  "autoCompletev2": () => (/* reexport */ autoCompletev2),
  "autoCompletev2Login": () => (/* reexport */ autoCompletev2Login),
  "autoCompletev3": () => (/* reexport */ autoCompletev3),
  "autoCompletev3Login": () => (/* reexport */ autoCompletev3Login),
  "bookRoomLogin": () => (/* reexport */ bookRoomLogin),
  "cheapestPerHotel": () => (/* reexport */ cheapestPerHotel),
  "cheapestPerHotelLogin": () => (/* reexport */ cheapestPerHotelLogin),
  "cheapestPerLocation": () => (/* reexport */ cheapestPerLocation),
  "cheapestPerLocationLogin": () => (/* reexport */ cheapestPerLocationLogin),
  "getContentandModule": () => (/* reexport */ getContentandModule),
  "getContentandModuleLogin": () => (/* reexport */ getContentandModuleLogin),
  "getv2Module": () => (/* reexport */ getv2Module),
  "getv2ModuleLogin": () => (/* reexport */ getv2ModuleLogin),
  "groupFilter": () => (/* reexport */ groupFilter),
  "groupFilterLogin": () => (/* reexport */ groupFilterLogin),
  "hotelInfo": () => (/* reexport */ hotelInfo),
  "hotelInfoLogin": () => (/* reexport */ hotelInfoLogin),
  "hotelLandingSearch": () => (/* reexport */ hotelLandingSearch),
  "hotelLandingSearchLogin": () => (/* reexport */ hotelLandingSearchLogin),
  "hotelSearch": () => (/* reexport */ hotelSearch),
  "hotelSearchData": () => (/* reexport */ hotelSearchData),
  "hotelSearchLogin": () => (/* reexport */ hotelSearchLogin),
  "hotelSearchLoginData": () => (/* reexport */ hotelSearchLoginData),
  "imageGallery": () => (/* reexport */ imageGallery),
  "imageGalleryLogin": () => (/* reexport */ imageGalleryLogin),
  "loyaltyInfo": () => (/* reexport */ loyaltyInfo),
  "loyaltyInfoLogin": () => (/* reexport */ loyaltyInfoLogin),
  "nearestArea": () => (/* reexport */ nearestArea),
  "nearestAreaLogin": () => (/* reexport */ nearestAreaLogin),
  "nearestCity": () => (/* reexport */ nearestCity),
  "nearestCityLogin": () => (/* reexport */ nearestCityLogin),
  "nearestRegion": () => (/* reexport */ nearestRegion),
  "nearestRegionLogin": () => (/* reexport */ nearestRegionLogin),
  "options": () => (/* binding */ options),
  "roomFaq_post": () => (/* reexport */ roomFaq_post),
  "roomFaq_postLogin": () => (/* reexport */ roomFaq_postLogin),
  "searchContent": () => (/* reexport */ searchContent),
  "searchContentLogin": () => (/* reexport */ searchContentLogin),
  "searchFilter": () => (/* reexport */ searchFilter),
  "searchFilterLogin": () => (/* reexport */ searchFilterLogin),
  "searchSimilar": () => (/* reexport */ searchSimilar),
  "searchSimilarLogin": () => (/* reexport */ searchSimilarLogin),
  "searchVoucher": () => (/* reexport */ searchVoucher),
  "searchVoucherLogin": () => (/* reexport */ searchVoucherLogin),
  "searchv2Room": () => (/* reexport */ searchv2Room),
  "searchv2RoomLogin": () => (/* reexport */ searchv2RoomLogin),
  "tiketFlexi": () => (/* reexport */ tiketFlexi),
  "tiketFlexiLogin": () => (/* reexport */ tiketFlexiLogin)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/papaparse/5.1.1/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/papaparse/5.1.1/index.js");;
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_namespaceObject);
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
const utils_assertStatus = (res, status, verbose, name) => {
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
function parseJSON(label, filePath) {
  const data = new SharedArray(label, function () {
    const f = JSON.parse(open(filePath)).payload;
    console.log(f);
    return f;
  });
  return data;
}
const getRandomNumberofLength = (length, asNumber) => {
  var min = parseInt(1 .toString().padEnd(length, '0'));
  var max = parseInt(9 .toString().padEnd(length, '0'));

  if (asNumber) {
    return Math.floor(min + Math.random() * max);
  } else {
    return Math.floor(min + Math.random() * max).toString();
  }
};
const incrementDate = (dateInput, increment) => {
  var dateFormatTotime = new Date(dateInput);
  return new Date(dateFormatTotime.getTime() + increment * 86400000).toISOString().slice(0, 10);
  ;
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
const utils_randomList = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};
const assertWithFail = ({
  res = null,
  status = 200,
  verbose = false,
  name
}) => {
  const pass = utils_assertStatus(res, status, verbose, name);

  if (!pass) {
    console.log('assertWithFail NOT PASSED', JSON.stringify(res));
    fail(`FAIL: ${JSON.stringify(res)}`);
  }
};
const getArray = (lengthy, startFrom) => {
  return Array.from({
    length: lengthy
  }, (_, i) => i + startFrom);
};
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/hotel-search/v2.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchcontent = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/content`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchv2room = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/v2/room`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const roomfaq_post = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/room/faq`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const v2_searchroom = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/room`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const v2_prebook = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-cart/hotel/v2/prebook`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const nearestcity = (host, params, location, query) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-search/nearest-city/${location}?${query.toString()}`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const nearestarea = (host, params, location, query) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-search/nearest-area/${location}?${query.toString()}`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const nearestregion = (host, params, location, query) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-search/nearest-region/${location}?${query.toString()}`, params);
  return resp;
};
;// CONCATENATED MODULE: external "https://jslib.k6.io/url/1.0.0/index.js"
const _1_0_0_index_js_namespaceObject = require("https://jslib.k6.io/url/1.0.0/index.js");;
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-search/v2.js




const host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const verbose = __ENV.VERBOSITY || true;
const reg = parseCSV('region', './data/hotel/regionData.csv');
const hotelID = parseCSV('hotelid', './data/hotel/hotelid.csv');
const accessTokenList = parseCSV('access', './data/hotel/NloginAccess.csv');
const user = 'guest';
let vphone = 'false';
let lvl = 'null';
const searchv2Room = () => {
  const accessToken = accessTokenList[Math.floor(Math.random() * accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'showColor': utils_randomList(['true', 'false']),
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      'user-agent': 'Chrome',
      'username': user,
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      //One of 2, 3, or 4
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/v2/room'
    },
    timeout: "6s"
  };
  const adultCount = getAdultCount(3);
  const body = {
    'adult': adultCount,
    'childAges': getChildCount(adultCount),
    'hotelId': utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', hotelID[Math.floor(Math.random() * hotelID.length)][0]]),
    'night': utils_randomList([1, 2, 3]),
    'room': getRoomCount(adultCount),
    'startDate': getStartDate()
  };
  (0,external_k6_namespaceObject.group)('searchv2-room', () => {
    const hp = searchv2room(host, params, body);
    utils_assertStatus(hp, 200, verbose, 'searchv2room');
    utils_assertSuccess(hp, 'SUCCESS', verbose, 'searchv2room');
  });
};
const searchContent = () => {
  const accessToken = accessTokenList[Math.floor(Math.random() * accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': user,
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/content'
    },
    timeout: "6s"
  };
  const body = {
    'hotelId': utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', hotelID[Math.floor(Math.random() * hotelID.length)][0]])
  };
  (0,external_k6_namespaceObject.group)('search-content', () => {
    const hp = searchcontent(host, params, body);
    utils_assertStatus(hp, 200, verbose, 'searchcontent');
    assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', verbose, 'searchcontent');
  });
};
const roomFaq_post = () => {
  const accessToken = accessTokenList[Math.floor(Math.random() * accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': user,
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/room/faq'
    },
    timeout: "6s"
  };
  const body = {
    'hotelId': utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', hotelID[Math.floor(Math.random() * hotelID.length)][0]])
  };
  (0,external_k6_namespaceObject.group)('room-faq_post', () => {
    const hp = roomfaq_post(host, params, body);
    utils_assertStatus(hp, 200, verbose, 'roomfaq_post');
    assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', verbose, 'roomfaq_post');
  });
};
const bookRoom = () => {
  const accessToken = accessTokenList[Math.floor(Math.random() * accessTokenList.length)][0];
  group('bookRoom', () => {
    var adultCount = getAdultCount(3);
    var hotel = randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', hotelID[Math.floor(Math.random() * hotelID.length)][0]]);
    var cA = getChildCount(adultCount);
    var night = randomList([1, 2, 3]);
    var room = getRoomCount(adultCount);
    var date = getStartDate();
    const roomdata = searchRoom(adultCount, cA, hotel, night, room, date, accessToken);
    const randomroom = randomList(Array.from(Array(roomdata.json().data.roomList.length).keys()));
    let rID = roomdata.json().data.roomList[randomroom].roomId;
    let rRate = roomdata.json().data.roomList[randomroom].rateCode;
    preBook(rID, rRate, adultCount, cA, hotel, night, room, date, accessToken);
  });
};

const searchRoom = (adultCount, cA, hotel, night, room, date, accessToken) => {
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'showColor': randomList(['true', 'false']),
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      'username': user,
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      //One of 2, 3, or 4
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/room'
    },
    timeout: "6s"
  };
  const body = {
    'adult': adultCount,
    'childAges': cA,
    'hotelId': hotel,
    'night': night,
    'room': room,
    'startDate': date
  }; // group('search-room', () => {

  const hp = searchroom(host, params, body);
  assertStatus(hp, 200, verbose, 'searchroom');
  assertSuccess(hp, 'SUCCESS', verbose, 'searchroom'); // })

  return hp;
};

const preBook = (roomid, ratecode, adultCount, cA, hotel, night, room, date, accessToken) => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Loyalty-Level': lvl,
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'isVerifiedPhoneNumber': vphone,
      'lang': randomList(['en', 'id']),
      'Accept-Lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': user,
      'version': 3,
      'X-Account-Id': '30150683',
      'x-forwarded-host': '192.168.1.1',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-cart/hotel/v2/prebook'
    },
    timeout: "6s"
  };
  const body = {
    'adult': adultCount,
    'childAges': cA,
    'hotelId': hotel,
    'night': night,
    'room': room,
    'roomId': roomid,
    //'5dd4d3fe0bae485eba46f07d',                // from `tix-hotel-search/room`
    'rateCode': ratecode,
    //'280144654',                             // from `tix-hotel-search/room`
    'startDate': date
  }; // group('pre-book', () => {

  const hp = prebook(host, params, body);
  assertStatus(hp, 200, verbose, 'prebook');
  assertSuccess(hp, 'SUCCESS', verbose, 'prebook'); // })
};

const nearestCity = () => {
  const accessToken = accessTokenList[Math.floor(Math.random() * accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'lang': utils_randomList(['en', 'id']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'X-Currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': user,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'Accept-Language': utils_randomList(['en', 'id']),
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/nearest-city'
    },
    timeout: "6s"
  };
  const location = reg[Math.floor(Math.random() * reg.length)][1];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['lang', utils_randomList(['en', 'id'])], ['page', utils_randomList([1, 2, 3])], ['size', utils_randomList([10, 15, 20, 23, 35, 30, 50])]]);
  (0,external_k6_namespaceObject.group)('nearest-city', () => {
    const hp = nearestcity(host, params, location, queryParams);
    utils_assertStatus(hp, 200, verbose, 'nearestCity');
    assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', verbose, 'nearestCity');
  });
};
const nearestArea = () => {
  const accessToken = accessTokenList[Math.floor(Math.random() * accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'lang': utils_randomList(['en', 'id']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'X-Currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': user,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'Accept-Language': utils_randomList(['en', 'id']),
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/nearest-area'
    },
    timeout: "6s"
  };
  const location = reg[Math.floor(Math.random() * reg.length)][1];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['lang', utils_randomList(['en', 'id'])], ['page', utils_randomList([1, 2, 3])], ['size', utils_randomList([10, 15, 20, 23, 35, 30, 50])]]);
  (0,external_k6_namespaceObject.group)('nearest-area', () => {
    const hp = nearestarea(host, params, location, queryParams);
    utils_assertStatus(hp, 200, verbose, 'nearestArea');
    assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', verbose, 'nearestArea');
  });
};
const nearestRegion = () => {
  const accessToken = accessTokenList[Math.floor(Math.random() * accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'lang': utils_randomList(['en', 'id']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'X-Currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': user,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'Accept-Language': utils_randomList(['en', 'id']),
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/nearest-region'
    },
    timeout: "6s"
  };
  const location = reg[Math.floor(Math.random() * reg.length)][1];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['lang', utils_randomList(['en', 'id'])], ['page', utils_randomList([1, 2, 3])], ['size', utils_randomList([10, 15, 20, 23, 35, 30, 50])]]);
  (0,external_k6_namespaceObject.group)('nearest-region', () => {
    const hp = nearestregion(host, params, location, queryParams);
    utils_assertStatus(hp, 200, verbose, 'nearestRegion');
    assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', verbose, 'nearestRegion');
  });
}; //Custom checks and helper functions

const assertMultiSuccess = (res, code, verbose, name) => {
  //If response is Pass on two status codes
  var statuss = code.split('|');
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if ((r.json('code') != statuss[0] || r.json('code') != statuss[1]) && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('code') === statuss[0] || r.json('code') === statuss[1];
    }
  });
};

function getAdultCount(count) {
  return utils_randomList(getArray(count, 1));
} //Always send 1, 2 or 3 as adult count


function getChildCount(adultCount) {
  var childAgeArray = [];

  if (adultCount == 2) {
    childAgeArray.push(utils_randomList([1, 4, 7]));
  } else if (adultCount == 1) {
    childAgeArray.push(utils_randomList([1, 4, 7]));
    childAgeArray.push(utils_randomList([1, 4, 7]));
  }

  return childAgeArray;
}

function getRoomCount(adultCount) {
  return utils_randomList(Array.from({
    length: adultCount
  }, (_, i) => i + 1));
} //Date


function getStartDate() {
  var currentMonth = new Date().getMonth() + 1;
  var currentYear = new Date().getFullYear();
  var remainingMonths = 12 - currentMonth;
  var month = utils_randomList(getArray(remainingMonths, currentMonth));
  var startday = new Date(currentYear, month, utils_randomList(getArray(20, 2))).toISOString().slice(0, 10);
  return startday;
}
;// CONCATENATED MODULE: external "k6/x/csv"
const csv_namespaceObject = require("k6/x/csv");;
var csv_default = /*#__PURE__*/__webpack_require__.n(csv_namespaceObject);
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/hotel-search/v3.js

/**
 * @param {object} params global parameters
 * @returns http response
 */

const groupfilter = (host, params, query) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-search/v3/group-filter?${query.toString()}`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const hotelsearch = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/search`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const imagegallery = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/v3/image-gallery`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchfilter = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/v3/search/filters`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const loyaltyinfo = (host, params) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-search/v3/loyalty/info`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchsimilar = (host, params, body, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/similar/${id}`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchvoucher = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/search/voucher?cache=false`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const tiketflexi = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-search/search/tiket-flexi`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-search/v3.js





const v3_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const v3_verbose = __ENV.VERBOSITY || true;
const oldCondition = __ENV.OLD_CONDITION || true;
const hot = parseCSV('vhotel', './data/hotel/voucherHotelId.csv');
const v3_hotelID = parseCSV('hotelid', './data/hotel/hotelid.csv');
const v3_reg = parseCSV('region', './data/hotel/regionData.csv');
const srpData = parseCSV('content', './data/hotel/SRP_Content.csv');
const v3_accessTokenList = parseCSV('access', './data/hotel/NloginAccess.csv');
var groupFiters = ["Elite Rewards", "OTW", "OTW", "Bali Nusra Jatin Longtail", "MotoGP", "tiket CLEAN", "Budget"];
const v3_user = 'guest';
let v3_vphone = 'false';
let v3_lvl = 'null';
const groupFilter = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'lang': utils_randomList(['en', 'id']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'X-Currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': v3_user,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3_vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'Accept-Language': utils_randomList(['en', 'id']),
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/v3/group-filter'
    },
    timeout: "6s"
  };
  const regData = v3_reg[Math.floor(Math.random() * v3_reg.length)];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['locationType', regData[0]], ['locationId', regData[1]], ['accommodation', 'HOTEL']]);
  (0,external_k6_namespaceObject.group)('group-filter', () => {
    const hp = groupfilter(v3_host, params, queryParams);
    utils_assertStatus(hp, 200, v3_verbose, 'groupfilter');
    utils_assertSuccess(hp, 'SUCCESS', v3_verbose, 'groupfilter');
  });
}; //To run test, to write payload in the sheet method 'hotelSearch'

const hotelSearchData = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      'channelId': utils_randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'username': v3_user,
      'X-Loyalty-Level': v3_lvl,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3_vphone,
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/search'
    },
    timeout: "10s"
  };
  /*
  if condition updates, child age, fllter, sorting, start date
  else use as it is static data
  */

  if (oldCondition == true) {
    const v3Data = srpData[Math.floor(Math.random() * srpData.length)];
    var cAge = [];

    if (v3Data[1].indexOf(',') !== -1) {
      cAge.push(utils_randomList([3, 4, 9]));
      cAge.push(utils_randomList([1, 3, 7]));
    } else {
      cAge.push(parseInt(v3Data[1]));
    }

    var selection = utils_randomList([1, 1, 1, 2, 3, 3]);

    if (selection == 1) {
      var groupF = "";
      var filters = {};
    } else if (selection == 2) {
      var groupF = utils_randomList(groupFiters);
      var filters = {};
    } else {
      var groupF = "";
      var filters = getFilterObject();
    }

    var pages = parseInt(v3Data[12]); //FIXME: Use this random page logic when using static data only

    if (pages > 5) {
      pages -= 2;
      pages = utils_randomList(Array.from({
        length: pages
      }, (_, i) => i + 1));
    } else {
      pages = 1;
    }

    var body = {
      // 'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
      'adult': parseInt(v3Data[0]),
      'childAges': cAge,
      "filter": filters,
      "groupFilterKeyword": groupF,
      'night': parseInt(v3Data[2]),
      'page': pages,
      'priorityRankingType': 'NORMAL_SEARCH',
      'room': parseInt(v3Data[3]),
      'searchType': v3Data[4],
      'searchValue': v3Data[5],
      'searchVariant': utils_randomList(['normal', 'fornax']),
      'showAlternate': utils_randomList([true, false]),
      'sort': getSorting(),
      // 'startDate': incrementDate(v3Data[9], randomList([0, 1, 2, 3, 4, 5, 6]))
      'startDate': v3_getStartDate() // 'startDate': v3Data[9]

    };
  } else {
    const v3Data = srpData[Math.floor(Math.random() * srpData.length)];
    var ChildAges = v3Data[1];
    var cAge = [];

    if (ChildAges.indexOf(',') !== -1) {
      const myArray = ChildAges.split(',');
      cAge.push(parseInt(myArray[0]));
      cAge.push(parseInt(myArray[1]));
    } else {
      cAge.push(parseInt(ChildAges));
    }

    let showAlt = v3Data[7].toLowerCase() === 'true';
    var body = {
      // 'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
      'adult': parseInt(v3Data[0]),
      'childAges': cAge,
      // "filter": {},
      "filter": createFilterObject(v3Data[14], parseInt(v3Data[15]), parseInt(v3Data[16]), v3Data[17], v3Data[18]),
      "groupFilterKeyword": "",
      'night': parseInt(v3Data[2]),
      'page': 1,
      'priorityRankingType': 'NORMAL_SEARCH',
      'room': parseInt(v3Data[3]),
      'searchType': v3Data[4],
      'searchValue': v3Data[5],
      'searchVariant': v3Data[6],
      'showAlternate': showAlt,
      'sort': v3Data[8],
      // 'startDate': incrementDate(v3Data[9], randomList([0, 1, 2, 3, 4, 5, 6]))
      // 'startDate': getStartDate()
      'startDate': v3Data[9]
    };
  }

  (0,external_k6_namespaceObject.group)('hotel-search', () => {
    const hp = hotelsearch(v3_host, params, body);
    utils_assertStatus(hp, 200, v3_verbose, 'hotelSearchData');
    utils_assertSuccess(hp, 'SUCCESS', v3_verbose, 'hotelSearchData');
    assertContentArrayNotEmpty2(hp, 0, false, 'hotelContentObjectSizeData');
  });
}; // To write details in the csv sheet, use above method to run the test

const hotelSearch = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      'channelId': utils_randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'username': v3_user,
      'X-Loyalty-Level': v3_lvl,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3_vphone,
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/search'
    },
    timeout: "10s"
  };
  const regData = v3_reg[Math.floor(Math.random() * v3_reg.length)];
  var adultCount = v3_getAdultCount(2);
  var childAges = v3_getChildCount(adultCount);
  var filters = getFilterObject(adultCount);
  var night = utils_randomList([1, 2, 3]);
  var roomCount = v3_getRoomCount(adultCount);
  var searchType = regData[0];
  var searchValue = regData[1];
  var searchVariant = utils_randomList(['normal', 'fornax']);
  var showAlternate = utils_randomList([true, false]);
  var sort = getSorting();
  var startdate = v3_getStartDate();
  const body = {
    // 'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
    'adult': adultCount,
    'childAges': childAges,
    // "filter": {},
    "filter": filters,
    //#TODO: from search filter api
    "groupFilterKeyword": utils_randomList(groupFiters),
    //#TODO:from group filter API
    'night': night,
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'room': roomCount,
    'searchType': searchType,
    'searchValue': searchValue,
    'searchVariant': searchVariant,
    'showAlternate': showAlternate,
    'sort': sort,
    'startDate': startdate
  };
  (0,external_k6_namespaceObject.group)('hotel-search', () => {
    const hp = hotelsearch(v3_host, params, body);
    var hotelContentLength = hp.json('data').contents.length;
    var totalDataInPage = hp.json('data').pagination.totalDataInPage;
    var totalPage = hp.json('data').pagination.totalPage;
    var totalData = hp.json('data').pagination.totalData;
    var payOptionsSize = hp.json('data').paymentOptionList.length;
    var payOptions = [];

    for (var index = 0; index < payOptionsSize; index++) {
      payOptions.push(hp.json('data').paymentOptionList[index].id);
    }

    utils_assertStatus(hp, 200, v3_verbose, 'hotelsearch');
    utils_assertSuccess(hp, 'SUCCESS', v3_verbose, 'hotelsearch');
    assertContentArrayNotEmpty(hp, 0, false, 'hotelContentObjectSize', adultCount, childAges, night, roomCount, searchType, searchValue, searchVariant, showAlternate, sort, startdate, hotelContentLength, totalDataInPage, totalPage, totalData, payOptions, filters.minPrice, filters.maxPrice, filters.reviewOptions, filters.starRatings);
  });
};
const imageGallery = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'user-agent': 'Chrome',
      'username': v3_user,
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/v3/image-gallery'
    },
    timeout: "6s"
  };
  var hotels = [];
  hotels.push(utils_randomList(['yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523']));
  hotels.push(utils_randomList(['glamping-at-taman-wisata-alam-sevillage-puncak-407001626660945675', 'havenwood-residence-tb-simatupang-305001588565854697', 'aryaduta-medan-108001534490273350', 'neo-awana-yogyakarta-201001548219475478', 'horison-suites-residences-rasuna-jakarta-404001617241517993', 'hotel-indonesia-kempinski-jakarta-108001534490372415']));
  hotels.push(utils_randomList(['vasa-hotel-surabaya-108001534490382635', 'maya-ubud-resort-spa-412001639972331220', 'merusaka-nusa-dua-formerly-inaya-putri-bali-404001617851735856', 'melia-purosani-108001534490283896', 'plataran-heritage-borobudur-hotel-108001534490357476', 'blue-sky-hotel-balikpapan-108001534490311735', 'grand-tjokro-premiere-bandung-401001611215156855']));
  hotels.push(utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982']));
  hotels.push(utils_randomList(['eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'sunway-pyramid-hotel-108001534518553681']));
  hotels.push(utils_randomList(['lacrista-hotel-melaka-406001622534960481', 'sindhorn-kempinski-hotel-bangkok-412001639977689655', 'skyview-hotel-bangkok-412001639989957591', 'chom-view-hotel-412001639982338066', 'golden-city-rayong-310001603431920012', 'zenseana-resort-spa-sha-plus-412001639987881459', 'sri-panwa-phuket-luxury-pool-villa-hotel-petfriendly-412001639977473129']));

  for (var c = 1; c <= utils_randomList([21, 22, 23]); c++) {
    hotels.push(v3_hotelID[Math.floor(Math.random() * v3_hotelID.length)][0]);
  }

  const body = {
    'hotelId': hotels
  };
  (0,external_k6_namespaceObject.group)('image-gallery', () => {
    const hp = imagegallery(v3_host, params, body);
    utils_assertStatus(hp, 200, v3_verbose, 'imagegallery');
    utils_assertSuccess(hp, 'SUCCESS', v3_verbose, 'imagegallery');
  });
};
const searchFilter = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': v3_user,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3_lvl,
      'isVerifiedPhoneNumber': v3_vphone,
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/v3/search/filters'
    },
    timeout: "6s"
  };
  const regData = v3_reg[Math.floor(Math.random() * v3_reg.length)];
  var adultCount = v3_getAdultCount(3);
  const body = {
    'accommodationTypes': [utils_randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
    'adult': adultCount,
    "childAges": v3_getChildCount(adultCount),
    "filter": getFilterObject(adultCount),
    "groupFilterKeyword": "",
    'night': utils_randomList([1, 2, 3]),
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'room': v3_getRoomCount(adultCount),
    'searchType': regData[0],
    'searchValue': regData[1],
    'searchVariant': utils_randomList(['normal', 'fornax']),
    'sort': getSorting(),
    'startDate': v3_getStartDate()
  };
  (0,external_k6_namespaceObject.group)('search-filter', () => {
    const hp = searchfilter(v3_host, params, body);
    utils_assertStatus(hp, 200, v3_verbose, 'searchfilter');
    utils_assertSuccess(hp, 'SUCCESS', v3_verbose, 'searchfilter');
  });
};
const loyaltyInfo = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': v3_user,
      'version': '2',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3_lvl,
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/v3/loyalty/info'
    },
    timeout: "6s"
  };
  (0,external_k6_namespaceObject.group)('loyalty-info', () => {
    const hp = loyaltyinfo(v3_host, params);
    utils_assertStatus(hp, 200, v3_verbose, 'loyaltyinfo');
    utils_assertSuccess(hp, 'SUCCESS', v3_verbose, 'loyaltyinfo');
  });
};
const searchSimilar = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': v3_user,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3_lvl,
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/similar/<hotel-id>'
    },
    timeout: "6s"
  };
  var adultCount = v3_getAdultCount(3);
  const body = {
    'adult': adultCount,
    'childAges': v3_getChildCount(adultCount),
    'night': utils_randomList([1, 2, 3]),
    // 'publicId': '5efe6186-e31c-4504-89a6-8bf9b41f9981',    //Can be excluded confirmed by Daniel
    'room': v3_getRoomCount(adultCount),
    'startDate': v3_getStartDate()
  };
  (0,external_k6_namespaceObject.group)('search-similar', () => {
    const hp = searchsimilar(v3_host, params, body, utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', v3_hotelID[Math.floor(Math.random() * v3_hotelID.length)][0]]));
    utils_assertStatus(hp, 200, v3_verbose, 'searchsimilar');
    v3_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v3_verbose, 'searchsimilar');
  });
};
const searchVoucher = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': v3_user,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3_vphone,
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/search/voucher'
    },
    timeout: "6s"
  };
  const hotID = utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', hot[Math.floor(Math.random() * hot.length)][0]]);
  const body = {
    'hotelId': hotID
  };
  (0,external_k6_namespaceObject.group)('search-voucher', () => {
    const hp = searchvoucher(v3_host, params, body);
    utils_assertStatus(hp, 200, v3_verbose, 'searchvoucher');
    v3_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v3_verbose, 'searchvoucher');
  });
};
const tiketFlexi = () => {
  const accessToken = v3_accessTokenList[Math.floor(Math.random() * v3_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      'channelId': utils_randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'username': v3_user,
      'X-Loyalty-Level': v3_lvl,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3_vphone,
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/search/tiket-flexi'
    },
    timeout: "6s"
  };
  const regData = v3_reg[Math.floor(Math.random() * v3_reg.length)];
  const body = {
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'searchType': regData[0],
    'searchValue': regData[1],
    'sort': getSorting()
  };
  (0,external_k6_namespaceObject.group)('tiket-flexi', () => {
    const hp = tiketflexi(v3_host, params, body);
    utils_assertStatus(hp, 200, v3_verbose, 'tiketflexi');
    utils_assertSuccess(hp, 'SUCCESS', v3_verbose, 'tiketflexi'); //assertObjectArraySize(hp, 400, false, 'HotelContentLength')
  });
};
/*
 Hotel v3 Custom Checks
*/

function assertContentArrayNotEmpty(res, value, verbose, measure, adultCount, childAges, night, roomCount, searchType, searchValue, searchVariant, showAlternate, sort, startdate, hotelContentLength, totalDataInPage, totalPage, totalData, payOptions, minPrice, maxPrice, reviewOptions, starRatings) {
  (0,external_k6_namespaceObject.check)(res, {
    [`${measure} is not ${value}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('data').contents.length == value && verbose) {
        console.log(JSON.stringify(res));
      }

      var contentLength = r.json('data').contents.length != value;

      if (contentLength) {
        /**
        Adult,ChildAges,Night,Room,Search Type,Search Value,Search Variant,Show Alternate,Sorting,Date,Hotel List Count,Data in Page,Total Page,Total Data,Payment Options, minPrice, maxPrice, reviewOptions, starRatings
        */
        csv_default().append('./data/hotel/v3SearchPayload.csv', [adultCount, childAges, night, roomCount, searchType, searchValue, searchVariant, showAlternate, sort, startdate, hotelContentLength, totalDataInPage, totalPage, totalData, payOptions, minPrice, maxPrice, reviewOptions, starRatings]);
      }

      return contentLength;
    }
  });
}

function assertContentArrayNotEmpty2(res, value, verbose, measure) {
  (0,external_k6_namespaceObject.check)(res, {
    [`${measure} is not ${value}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('data').contents.length == value && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('data').contents.length != value;
    }
  });
}

const v3_assertMultiSuccess = (res, code, verbose, name) => {
  //If response is Pass on two status codes
  var statuss = code.split('|');
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if ((r.json('code') != statuss[0] || r.json('code') != statuss[1]) && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('code') === statuss[0] || r.json('code') === statuss[1];
    }
  });
};

function v3_getAdultCount(count) {
  return utils_randomList(getArray(count, 1));
} //Always send 1, 2 or 3 as adult count


function v3_getChildCount(adultCount) {
  var childAgeArray = [];

  if (adultCount == 2) {
    childAgeArray.push(utils_randomList([1, 4, 7]));
  } else if (adultCount == 1) {
    childAgeArray.push(utils_randomList([1, 4, 7]));
    childAgeArray.push(utils_randomList([1, 4, 7]));
  }

  return childAgeArray;
}

function v3_getRoomCount(adultCount) {
  return utils_randomList(Array.from({
    length: adultCount
  }, (_, i) => i + 1));
}

function getFilterObject(adultCount) {
  var filterValues = {}; // if (adultCount == 2 || adultCount == 1) {

  if (utils_randomList([1, 2]) == 1) {
    var objFilter = new Object();
    {
      objFilter.minPrice = 0;
      objFilter.maxPrice = utils_randomList([200000, 500000]);
    }
    {
      var payOpts = [];

      if (utils_randomList([1, 2]) == 2) {
        payOpts.push('pay_at_hotel');
        payOpts.push('pay_at_hotel_without_cc');
      } else {
        payOpts.push('pay_at_hotel');
      }

      objFilter.paymentOptions = payOpts;
    }
    {
      var review = [];

      if (utils_randomList([1, 2]) == 1) {
        review.push('4.5');
        review.push('4');
      } else {
        review.push('4.5');
      }

      objFilter.reviewOptions = review;
    }
    {
      var star = [];

      if (utils_randomList([1, 2]) == 2) {
        star.push('5');
        star.push('4');
      } else {
        star.push('5');
      }

      objFilter.starRatings = star;
    } // objFilter.loyalty = randomList([true, false]);

    filterValues = objFilter;
  }

  return filterValues;
}

function convertToArray(stringValue) {
  var arrayList = [];

  if (stringValue.indexOf(',') !== -1) {
    const myArray = stringValue.split(',');
    arrayList.push(myArray[0]);
    arrayList.push(myArray[1]);
  } else {
    arrayList.push(stringValue);
  }

  return arrayList;
}

function createFilterObject(PaymentOptions, minPrice, maxPrice, reviewOptions, starRatings) {
  var filterValues = {};

  if (PaymentOptions == 'undefined' || minPrice == 'undefined' || maxPrice == 'undefined' || reviewOptions == 'undefined' || starRatings == 'undefined') {
    return filterValues;
  } else {
    filterValues.minPrice = minPrice;
    filterValues.maxPrice = maxPrice;
    filterValues.paymentOptions = convertToArray(PaymentOptions);
    filterValues.reviewOptions = convertToArray(reviewOptions);
    filterValues.starRatings = convertToArray(starRatings);
    return filterValues;
  }
} //Date


function v3_getStartDate() {
  var currentMonth = new Date().getMonth() + 1;
  var currentYear = new Date().getFullYear();
  var remainingMonths = 12 - currentMonth;
  var month = utils_randomList(getArray(remainingMonths, currentMonth));
  var startday = new Date(currentYear, month, utils_randomList(getArray(20, 2))).toISOString().slice(0, 10);
  return startday;
} //Sorting


function getSorting() {
  return utils_randomList(['lowest_price', 'highest_price', 'lowest_price', 'highest_price', 'popularity', 'review', 'lowest_price', 'highest_price', 'distance', 'lowest_star', 'highest_star']); // return randomList(['lowest_price', 'highest_price']);
}
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/hotel-analytic.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const hotelinfo = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-analytic/hotel-info`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const cheapestperhotel = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-analytic/average/cheapestperhotel`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const cheapestperlocation = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-analytic/average/cheapestperlocation`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-analytic.js


 //https://api.tiket.com/ms-gateway

const hotel_analytic_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const hotel_analytic_verbose = __ENV.VERBOSITY || true;
const hotel_analytic_user = 'guest';
const hotel_analytic_hotelID = parseCSV('hotelid', './data/hotel/hotelid.csv');
const hotel_analytic_reg = parseCSV('region', './data/hotel/regionData.csv');
const hotel_analytic_accessTokenList = parseCSV('access', './data/hotel/NloginAccess.csv');
const hotelInfo = () => {
  const accessToken = hotel_analytic_accessTokenList[Math.floor(Math.random() * hotel_analytic_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'Accept-Language': utils_randomList(['en', 'id']),
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': hotel_analytic_user,
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-analytic/hotel-info'
    },
    timeout: "6s"
  };
  var hotels = [];
  hotels.push(utils_randomList(['yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523']));
  hotels.push(utils_randomList(['glamping-at-taman-wisata-alam-sevillage-puncak-407001626660945675', 'havenwood-residence-tb-simatupang-305001588565854697', 'aryaduta-medan-108001534490273350', 'neo-awana-yogyakarta-201001548219475478', 'horison-suites-residences-rasuna-jakarta-404001617241517993', 'hotel-indonesia-kempinski-jakarta-108001534490372415']));
  hotels.push(utils_randomList(['vasa-hotel-surabaya-108001534490382635', 'maya-ubud-resort-spa-412001639972331220', 'merusaka-nusa-dua-formerly-inaya-putri-bali-404001617851735856', 'melia-purosani-108001534490283896', 'plataran-heritage-borobudur-hotel-108001534490357476', 'blue-sky-hotel-balikpapan-108001534490311735', 'grand-tjokro-premiere-bandung-401001611215156855']));
  hotels.push(utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982']));
  hotels.push(utils_randomList(['eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'sunway-pyramid-hotel-108001534518553681']));
  hotels.push(utils_randomList(['lacrista-hotel-melaka-406001622534960481', 'sindhorn-kempinski-hotel-bangkok-412001639977689655', 'skyview-hotel-bangkok-412001639989957591', 'chom-view-hotel-412001639982338066', 'golden-city-rayong-310001603431920012', 'zenseana-resort-spa-sha-plus-412001639987881459', 'sri-panwa-phuket-luxury-pool-villa-hotel-petfriendly-412001639977473129']));

  for (var c = 1; c <= utils_randomList([21, 22, 23]); c++) {
    hotels.push(hotel_analytic_hotelID[Math.floor(Math.random() * hotel_analytic_hotelID.length)][0]);
  }

  const body = {
    'hotelId': hotels
  }; //hotelId can be more than 1 hotel, max 30

  (0,external_k6_namespaceObject.group)('hotel-info', () => {
    const hp = hotelinfo(hotel_analytic_host, params, body);
    utils_assertStatus(hp, 200, hotel_analytic_verbose, 'hotelinfo');
    hotel_analytic_assertSuccess(hp, 'SUCCESS', hotel_analytic_verbose, 'hotelinfo');
  });
};
const cheapestPerHotel = () => {
  const accessToken = hotel_analytic_accessTokenList[Math.floor(Math.random() * hotel_analytic_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': hotel_analytic_user,
      'user-agent': 'Chrome',
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-analytic/average/cheapestperhotel'
    },
    timeout: "6s"
  }; //endYearMonth can be greater or equal startYearMonth (max : 3 months)
  //startYearMonth cannot be backdate

  var currentMonth = new Date().getMonth() + 1;
  var remainingMonths = 12 - currentMonth;
  var currentYear = new Date().getFullYear();
  var startmonth = utils_randomList(getArray(remainingMonths, currentMonth));

  if (startmonth > 10) {
    var endmonth = startmonth + utils_randomList([0, 1]);
  } else {
    var endmonth = startmonth + utils_randomList([0, 1, 2]);
  }

  if (startmonth < 10) {
    startmonth = '0' + startmonth;
  }

  if (endmonth < 10) {
    endmonth = '0' + endmonth;
  }

  const body = {
    'endYearMonth': currentYear + '-' + endmonth,
    'startYearMonth': currentYear + '-' + startmonth,
    'hotelId': hotel_analytic_hotelID[Math.floor(Math.random() * hotel_analytic_hotelID.length)][0],
    'resApps': utils_randomList([true, false])
  };
  (0,external_k6_namespaceObject.group)('cheapest', () => {
    const hp = cheapestperhotel(hotel_analytic_host, params, body);
    utils_assertStatus(hp, 200, hotel_analytic_verbose, 'cheapestPerHotel');
    hotel_analytic_assertSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', hotel_analytic_verbose, 'cheapestPerHotel');
  });
};
const cheapestPerLocation = () => {
  const accessToken = hotel_analytic_accessTokenList[Math.floor(Math.random() * hotel_analytic_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': hotel_analytic_user,
      'user-agent': 'Chrome',
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-analytic/average/cheapestperlocation'
    },
    timeout: "6s"
  }; // endYearMonth can be greater or equal startYearMonth (max : 3 months)
  // resApps can be true/false
  // searchType: dynamic with boundaries [region, city, area] with corresponding locationId
  // startYearMonth cannot be backdate

  var currentMonth = new Date().getMonth() + 1;
  var remainingMonths = 12 - currentMonth;
  var currentYear = new Date().getFullYear();
  var startmonth = utils_randomList(getArray(remainingMonths, currentMonth));
  var endmonth = startmonth + utils_randomList([0, 1, 2]);

  if (startmonth > 10) {
    var endmonth = startmonth + utils_randomList([0, 1]);
  } else {
    var endmonth = startmonth + utils_randomList([0, 1, 2]);
  }

  if (startmonth < 10) {
    startmonth = '0' + startmonth;
  }

  if (endmonth < 10) {
    endmonth = '0' + endmonth;
  }

  const regData = hotel_analytic_reg[Math.floor(Math.random() * hotel_analytic_reg.length)];
  const body = {
    'endYearMonth': currentYear + '-' + endmonth,
    'locationId': regData[1],
    'resApps': utils_randomList([true, false]),
    'searchType': regData[0].toLowerCase(),
    'startYearMonth': currentYear + '-' + startmonth
  };
  (0,external_k6_namespaceObject.group)('cheapest', () => {
    const hp = cheapestperlocation(hotel_analytic_host, params, body);
    utils_assertStatus(hp, 200, hotel_analytic_verbose, 'cheapestperlocation');
    hotel_analytic_assertSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', hotel_analytic_verbose, 'cheapestperlocation');
  });
}; //Custom check

const hotel_analytic_assertSuccess = (res, code, verbose, name) => {
  //If response is Pass on two status codes
  var statuss = code.split('|');
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if ((r.json('code') != statuss[0] || r.json('code') != statuss[1]) && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('code') === statuss[0] || r.json('code') === statuss[1];
    }
  });
};
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/hotel-autocomplete.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const autocompletev2 = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-autocomplete/v2/autocomplete?cache=true`, //always true confirmed bu dev
  JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const autocompletev3 = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-autocomplete/v3/autocomplete?cache=true`, //always true confirmed bu dev
  JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-autocomplete.js



const hotel_autocomplete_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const hotel_autocomplete_verbose = __ENV.VERBOSITY || true;
const hotel_autocomplete_user = 'guest';
const hotel_autocomplete_accessTokenList = parseCSV('access', './data/hotel/NloginAccess.csv');
const autoCompletev2 = () => {
  const accessToken = hotel_autocomplete_accessTokenList[Math.floor(Math.random() * hotel_autocomplete_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': hotel_autocomplete_user,
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-autocomplete/v2/autocomplete'
    },
    timeout: "6s"
  };
  const body = {
    'query': utils_randomList(['Ja', 'Jakar', 'Jakarta', 'Yo', 'Yogya', 'Yogyakarta', 'band', 'bandungMa', 'mala', 'malang', 'Lab', 'labuan', 'labuan baj', 'labuan bajo', 'Ba', 'bali', 'Lo', 'lomb', 'lombok', 'Sur', 'surab', 'surabaya', 'Ma', 'maka', 'makasar'])
  };
  (0,external_k6_namespaceObject.group)('autocomplete-v2', () => {
    const hp = autocompletev2(hotel_autocomplete_host, params, body);
    utils_assertStatus(hp, 200, hotel_autocomplete_verbose, 'autocompletev2');
    utils_assertSuccess(hp, 'SUCCESS', hotel_autocomplete_verbose, 'autocompletev2');
  });
};
const autoCompletev3 = () => {
  const accessToken = hotel_autocomplete_accessTokenList[Math.floor(Math.random() * hotel_autocomplete_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': hotel_autocomplete_user,
      'user-agent': 'Chrome',
      'X-Account-Id': '30150683',
      'x-forwarded-host': '192.168.1.1',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-autocomplete/v3/autocomplete'
    },
    timeout: "6s"
  };
  const body = {
    'query': utils_randomList(['Ja', 'Jakar', 'Jakarta', 'Yo', 'Yogya', 'Yogyakarta', 'band', 'bandungMa', 'mala', 'malang', 'Lab', 'labuan', 'labuan baj', 'labuan bajo', 'Ba', 'bali', 'Lo', 'lomb', 'lombok', 'Sur', 'surab', 'surabaya', 'Ma', 'maka', 'makasar'])
  };
  (0,external_k6_namespaceObject.group)('autocomplete-v3', () => {
    const hp = autocompletev3(hotel_autocomplete_host, params, body);
    utils_assertStatus(hp, 200, hotel_autocomplete_verbose, 'autocompletev3');
    utils_assertSuccess(hp, 'SUCCESS', hotel_autocomplete_verbose, 'autocompletev3');
  });
};
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/hotel-home-api.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const hotellandingsearch = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/tix-hotel-home-api/landing-page/search`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const getmastercontent = (host, params, type) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-home-api/landing-page/get-master-content?type=${type}`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const hotelmodule = (host, params, id) => {
  //
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-home-api/landing-page/module/${id}`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const hotelv2module = (host, params) => {
  //
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-home-api/landing_page/v2/modules?type=NHA`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const hotelv2moduleId = (host, params, id, name) => {
  //
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-home-api/landing_page/v2/module/${id}?${name.toString()}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-home-api.js




const hotel_home_api_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const hotel_home_api_verbose = __ENV.VERBOSITY || true;
const hotel_home_api_reg = parseCSV('region', './data/hotel/regionData.csv');
const hotel_home_api_accessTokenList = parseCSV('access', './data/hotel/NloginAccess.csv');
const hotel_home_api_user = 'guest';
const hotelLandingSearch = () => {
  const accessToken = hotel_home_api_accessTokenList[Math.floor(Math.random() * hotel_home_api_accessTokenList.length)][0];
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': hotel_home_api_user,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing-page/search'
    },
    timeout: "6s"
  };
  const regData = hotel_home_api_reg[Math.floor(Math.random() * hotel_home_api_reg.length)];
  const body = {
    'accommodationType': utils_randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL']),
    'publicId': regData[1],
    //Can be excluded confirmed by Daniel
    'templateCode': utils_randomList(['TIMED_PROMO', 'MULTIPLE_HOTEL_ID', 'MULTIPLE_SQUARE_CARD']),
    'type': regData[0]
  };
  (0,external_k6_namespaceObject.group)('hotel-landing-search', () => {
    const hp = hotellandingsearch(hotel_home_api_host, params, body);
    utils_assertStatus(hp, 200, hotel_home_api_verbose, 'hotellandingsearch');
    utils_assertSuccess(hp, 'SUCCESS', hotel_home_api_verbose, 'hotellandingsearch');
  });
};
const getContentandModule = () => {
  const accessToken = hotel_home_api_accessTokenList[Math.floor(Math.random() * hotel_home_api_accessTokenList.length)][0];
  (0,external_k6_namespaceObject.group)('get-content-and-module', () => {
    const mData = getMasterContent(accessToken);
    let id = mData.json().data[0].id;
    hotelModule(id, accessToken);
    hotelModule(utils_randomList(['6052bc073fe68d4d8c3a8831', '61582d6765a7c3d3d70d8c2c', '61d8184f5a0e7169d5d18aba']), accessToken);
    hotelModule(utils_randomList(['6052bc073fe68d4d8c3a8831', '61582da2fd25ad150fc077d1', '600e8db6a23e39841c4ffc3a']), accessToken);
  });
};

const getMasterContent = accessToken => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': utils_randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      // 'X-Channel-Id': 'IOS',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': hotel_home_api_user,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing-page/get-master-content'
    },
    timeout: "6s"
  };
  const type = utils_randomList(['HOTEL', 'HOTEL', 'HOTEL', 'NHA']); // group('get-master-content', () => {

  const hp = getmastercontent(hotel_home_api_host, params, type);
  utils_assertStatus(hp, 200, hotel_home_api_verbose, 'getmastercontent');
  utils_assertSuccess(hp, 'SUCCESS', hotel_home_api_verbose, 'getmastercontent'); // })

  return hp;
};

const hotelModule = (id, accessToken) => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': hotel_home_api_user,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Account-Id': '30150683',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing-page/module/<id>'
    },
    timeout: "6s"
  }; // group('hotel-module', () => {

  const hp = hotelmodule(hotel_home_api_host, params, id); //id = '602f455d835d09195fa5a741'

  utils_assertStatus(hp, 200, hotel_home_api_verbose, 'hotelmodule');
  utils_assertSuccess(hp, 'SUCCESS', hotel_home_api_verbose, 'hotelmodule'); // })
};

const getv2Module = () => {
  const accessToken = hotel_home_api_accessTokenList[Math.floor(Math.random() * hotel_home_api_accessTokenList.length)][0];
  (0,external_k6_namespaceObject.group)('get-v2-module', () => {
    getlandingv2Module(accessToken);
    var multiple_hotel_id = [['620dc90feefb0337e65a94cf', 'Jakarta'], ['6229abedeefb0337e65a94d5', 'Yogyakarta'], ['6229ac0eeefb0337e65a94d6', 'Yogyakarta']];
    var obj1 = utils_randomList(multiple_hotel_id);
    var obj2 = utils_randomList(multiple_hotel_id);
    getlandingv2ModuleID(obj1[0], obj1[1], accessToken);
    getlandingv2ModuleID(obj2[0], obj2[1], accessToken);
  });
};

const getlandingv2Module = accessToken => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': utils_randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': hotel_home_api_user,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Account-Id': '30150683',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing_page/v2/modules?type=NHA'
    },
    timeout: "6s"
  }; // group('get-master-content', () => {

  const hp = hotelv2module(hotel_home_api_host, params);
  utils_assertStatus(hp, 200, hotel_home_api_verbose, 'hotelv2module');
  utils_assertSuccess(hp, 'SUCCESS', hotel_home_api_verbose, 'hotelv2module'); // })

  return hp;
};

const getlandingv2ModuleID = (id, name, accessToken) => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': hotel_home_api_user,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Account-Id': '30150683',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing_page/v2/module/<id>?name=<name>'
    },
    timeout: "6s"
  };
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['name', name]]); // group('hotel-module', () => {

  const hp = hotelv2moduleId(hotel_home_api_host, params, id, queryParams);
  utils_assertStatus(hp, 200, hotel_home_api_verbose, 'hotelv2moduleId');
  utils_assertSuccess(hp, 'SUCCESS', hotel_home_api_verbose, 'hotelv2moduleId'); // })
};
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-search/v2Login.js




const v2Login_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const v2Login_verbose = __ENV.VERBOSITY || true;
const v2Login_reg = parseCSV('region', './data/hotel/regionData.csv');
const v2Login_hotelID = parseCSV('hotelid', './data/hotel/hotelid.csv');
const v2Login_accessTokenList = parseCSV('accessN', './data/hotel/loginAccess.csv');
const searchv2RoomLogin = () => {
  const tokenDetails = v2Login_accessTokenList[Math.floor(Math.random() * v2Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'showColor': utils_randomList(['true', 'false']),
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      'user-agent': 'Chrome',
      'username': tokenDetails[0],
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      //One of 2, 3, or 4
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/v2/room'
    },
    timeout: "6s"
  };
  const adultCount = v2Login_getAdultCount(3);
  const body = {
    'adult': adultCount,
    'childAges': v2Login_getChildCount(adultCount),
    'hotelId': utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', v2Login_hotelID[Math.floor(Math.random() * v2Login_hotelID.length)][0]]),
    'night': utils_randomList([1, 2, 3]),
    'room': v2Login_getRoomCount(adultCount),
    'startDate': v2Login_getStartDate()
  };
  (0,external_k6_namespaceObject.group)('searchv2-room', () => {
    const hp = searchv2room(v2Login_host, params, body);
    utils_assertStatus(hp, 200, v2Login_verbose, 'searchv2roomLogin');
    utils_assertSuccess(hp, 'SUCCESS', v2Login_verbose, 'searchv2roomLogin');
  });
};
const searchContentLogin = () => {
  const tokenDetails = v2Login_accessTokenList[Math.floor(Math.random() * v2Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': tokenDetails[0],
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/content'
    },
    timeout: "6s"
  };
  const body = {
    'hotelId': utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', v2Login_hotelID[Math.floor(Math.random() * v2Login_hotelID.length)][0]])
  };
  (0,external_k6_namespaceObject.group)('search-content', () => {
    const hp = searchcontent(v2Login_host, params, body);
    utils_assertStatus(hp, 200, v2Login_verbose, 'searchcontentLogin');
    v2Login_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v2Login_verbose, 'searchcontentLogin');
  });
};
const roomFaq_postLogin = () => {
  const tokenDetails = v2Login_accessTokenList[Math.floor(Math.random() * v2Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': tokenDetails[0],
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/room/faq'
    },
    timeout: "6s"
  };
  const body = {
    'hotelId': utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', v2Login_hotelID[Math.floor(Math.random() * v2Login_hotelID.length)][0]])
  };
  (0,external_k6_namespaceObject.group)('room-faq_post', () => {
    const hp = roomfaq_post(v2Login_host, params, body);
    utils_assertStatus(hp, 200, v2Login_verbose, 'roomfaq_postLogin');
    v2Login_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v2Login_verbose, 'roomfaq_postLogin');
  });
};
const bookRoomLogin = () => {
  const tokenDetails = v2Login_accessTokenList[Math.floor(Math.random() * v2Login_accessTokenList.length)];
  const accessToken = tokenDetails[2];
  const userName = tokenDetails[0];
  (0,external_k6_namespaceObject.group)('bookRoom', () => {
    var adultCount = v2Login_getAdultCount(3);
    var hotel = utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', v2Login_hotelID[Math.floor(Math.random() * v2Login_hotelID.length)][0]]);
    var cA = v2Login_getChildCount(adultCount);
    var night = utils_randomList([1, 2, 3]);
    var room = v2Login_getRoomCount(adultCount);
    var date = v2Login_getStartDate();
    const roomdata = searchRoomLogin(adultCount, cA, hotel, night, room, date, accessToken, userName);
    const roomListLength = roomdata.json().data.roomList.length;

    if (roomListLength > 0) {
      const randomroom = utils_randomList(Array.from(Array(roomListLength).keys()));
      let rID = roomdata.json().data.roomList[randomroom].roomId;
      let rRate = roomdata.json().data.roomList[randomroom].rateCode;
      preBookLogin(rID, rRate, adultCount, cA, hotel, night, room, date, accessToken, userName);
    }
  });
};

const searchRoomLogin = (adultCount, cA, hotel, night, room, date, accessToken, userName) => {
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'showColor': utils_randomList(['true', 'false']),
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': userName,
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      //One of 2, 3, or 4
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/room'
    },
    timeout: "6s"
  };
  const body = {
    'adult': adultCount,
    'childAges': cA,
    'hotelId': hotel,
    'night': night,
    'room': room,
    'startDate': date
  }; // group('search-room', () => {

  const hp = v2_searchroom(v2Login_host, params, body);
  utils_assertStatus(hp, 200, v2Login_verbose, 'searchroomLogin');
  utils_assertSuccess(hp, 'SUCCESS', v2Login_verbose, 'searchroomLogin');
  assertRoomArrayNotEmpty(hp, 0, false, 'roomListObjectSize'); // })

  return hp;
};

const preBookLogin = (roomid, ratecode, adultCount, cA, hotel, night, room, date, accessToken, userName) => {
  //var user = userList[Math.floor(Math.random() * userList.length)][0];
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      'X-Loyalty-Level': lvl,
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'isVerifiedPhoneNumber': vphone,
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': userName,
      'version': 3,
      'X-Account-Id': '30150683',
      'x-forwarded-host': '192.168.1.1',
      // 'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-cart/hotel/v2/prebook'
    },
    timeout: "6s"
  };
  const body = {
    'adult': adultCount,
    'childAges': cA,
    'hotelId': hotel,
    'night': night,
    'room': room,
    'roomId': roomid,
    //'5dd4d3fe0bae485eba46f07d',                // from `tix-hotel-search/room`
    'rateCode': ratecode,
    //'280144654',                             // from `tix-hotel-search/room`
    'startDate': date
  }; // group('pre-book', () => {

  const hp = v2_prebook(v2Login_host, params, body);
  utils_assertStatus(hp, 200, v2Login_verbose, 'prebookLogin');
  utils_assertSuccess(hp, 'SUCCESS', v2Login_verbose, 'prebookLogin'); // })
};

const nearestCityLogin = () => {
  const tokenDetails = v2Login_accessTokenList[Math.floor(Math.random() * v2Login_accessTokenList.length)];
  const accessToken = tokenDetails[2];
  const userName = tokenDetails[0];
  var vphone = utils_randomList(['true', 'false']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'lang': utils_randomList(['en', 'id']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'X-Currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'Accept-Language': utils_randomList(['en', 'id']),
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/nearest-city'
    },
    timeout: "6s"
  };
  const location = v2Login_reg[Math.floor(Math.random() * v2Login_reg.length)][1];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['lang', utils_randomList(['en', 'id'])], ['page', utils_randomList([1, 2, 3])], ['size', utils_randomList([10, 15, 20, 23, 35, 30, 50])]]);
  (0,external_k6_namespaceObject.group)('nearest-city', () => {
    const hp = nearestcity(v2Login_host, params, location, queryParams);
    utils_assertStatus(hp, 200, v2Login_verbose, 'nearestCityLogin');
    v2Login_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v2Login_verbose, 'nearestCityLogin');
  });
};
const nearestAreaLogin = () => {
  const tokenDetails = v2Login_accessTokenList[Math.floor(Math.random() * v2Login_accessTokenList.length)];
  const accessToken = tokenDetails[2];
  const userName = tokenDetails[0];
  var vphone = utils_randomList(['true', 'false']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'lang': utils_randomList(['en', 'id']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'X-Currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'Accept-Language': utils_randomList(['en', 'id']),
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/nearest-area'
    },
    timeout: "6s"
  };
  const location = v2Login_reg[Math.floor(Math.random() * v2Login_reg.length)][1];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['lang', utils_randomList(['en', 'id'])], ['page', utils_randomList([1, 2, 3])], ['size', utils_randomList([10, 15, 20, 23, 35, 30, 50])]]);
  (0,external_k6_namespaceObject.group)('nearest-area', () => {
    const hp = nearestarea(v2Login_host, params, location, queryParams);
    utils_assertStatus(hp, 200, v2Login_verbose, 'nearestAreaLogin');
    v2Login_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v2Login_verbose, 'nearestAreaLogin');
  });
};
const nearestRegionLogin = () => {
  const tokenDetails = v2Login_accessTokenList[Math.floor(Math.random() * v2Login_accessTokenList.length)];
  const accessToken = tokenDetails[2];
  const userName = tokenDetails[0];
  var vphone = utils_randomList(['true', 'false']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'lang': utils_randomList(['en', 'id']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'X-Currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName,
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'Accept-Language': utils_randomList(['en', 'id']),
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-search/nearest-region'
    },
    timeout: "6s"
  };
  const location = v2Login_reg[Math.floor(Math.random() * v2Login_reg.length)][1];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['lang', utils_randomList(['en', 'id'])], ['page', utils_randomList([1, 2, 3])], ['size', utils_randomList([10, 15, 20, 23, 35, 30, 50])]]);
  (0,external_k6_namespaceObject.group)('nearest-region', () => {
    const hp = nearestregion(v2Login_host, params, location, queryParams);
    utils_assertStatus(hp, 200, v2Login_verbose, 'nearestRegionLogin');
    v2Login_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v2Login_verbose, 'nearestRegionLogin');
  });
}; //Custom checks and helper functions

function assertRoomArrayNotEmpty(res, value, verbose, measure) {
  (0,external_k6_namespaceObject.check)(res, {
    [`${measure} is not ${value}`]: r => {
      // Will be printed only if verbose = true
      if (r.json().data.roomList.length == value && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json().data.roomList.length != value;
    }
  });
}

const v2Login_assertMultiSuccess = (res, code, verbose, name) => {
  //If response is Pass on two status codes
  var statuss = code.split('|');
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if ((r.json('code') != statuss[0] || r.json('code') != statuss[1]) && verbose) {
        // console.log("YO" + r.json('code') + ":" + r.json('code') != statuss[0] + ":" + r.json('code') != statuss[1])
        console.log(JSON.stringify(res));
      }

      return r.json('code') === statuss[0] || r.json('code') === statuss[1];
    }
  });
};

function v2Login_getAdultCount(count) {
  return utils_randomList(getArray(count, 1));
} //Always send 1, 2 or 3 as adult count


function v2Login_getChildCount(adultCount) {
  var childAgeArray = [];

  if (adultCount == 2) {
    childAgeArray.push(utils_randomList([1, 4, 7]));
  } else if (adultCount == 1) {
    childAgeArray.push(utils_randomList([1, 4, 7]));
    childAgeArray.push(utils_randomList([1, 4, 7]));
  }

  return childAgeArray;
}

function v2Login_getRoomCount(adultCount) {
  return utils_randomList(Array.from({
    length: adultCount
  }, (_, i) => i + 1));
} //Date


function v2Login_getStartDate() {
  var currentMonth = new Date().getMonth() + 1;
  var currentYear = new Date().getFullYear();
  var remainingMonths = 12 - currentMonth;
  var month = utils_randomList(getArray(remainingMonths, currentMonth));
  var startday = new Date(currentYear, month, utils_randomList(getArray(20, 2))).toISOString().slice(0, 10);
  return startday;
}
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-search/v3Login.js





const v3Login_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const v3Login_verbose = __ENV.VERBOSITY || true;
const v3Login_oldCondition = __ENV.OLD_CONDITION || true;
const v3Login_hot = parseCSV('vhotel', './data/hotel/voucherHotelId.csv');
const v3Login_hotelID = parseCSV('hotelid', './data/hotel/hotelid.csv');
const v3Login_reg = parseCSV('region', './data/hotel/regionData.csv');
const v3Login_srpData = parseCSV('content', './data/hotel/SRP_Content.csv');
const v3Login_accessTokenList = parseCSV('accessN', './data/hotel/loginAccess.csv');
var v3Login_groupFiters = ["Elite Rewards", "OTW", "OTW", "Bali Nusra Jatin Longtail", "MotoGP", "tiket CLEAN", "Budget"];
const groupFilterLogin = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'lang': utils_randomList(['en', 'id']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'X-Currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'Accept-Language': utils_randomList(['en', 'id']),
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/v3/group-filter'
    },
    timeout: "6s"
  };
  const regData = v3Login_reg[Math.floor(Math.random() * v3Login_reg.length)];
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['locationType', regData[0]], ['locationId', regData[1]], ['accommodation', 'HOTEL']]);
  (0,external_k6_namespaceObject.group)('group-filter', () => {
    const hp = groupfilter(v3Login_host, params, queryParams);
    utils_assertStatus(hp, 200, v3Login_verbose, 'groupfilterLogin');
    utils_assertSuccess(hp, 'SUCCESS', v3Login_verbose, 'groupfilterLogin');
  });
}; //To run test, to write payload in the sheet method 'hotelSearch'

const hotelSearchLoginData = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      'channelId': utils_randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'username': tokenDetails[0],
      'X-Loyalty-Level': lvl,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/search'
    },
    timeout: "10s"
  };
  /*
  if condition updates, child age, fllter, sorting, start date
  else use as it is static data
  */

  if (v3Login_oldCondition == true) {
    const v3Data = v3Login_srpData[Math.floor(Math.random() * v3Login_srpData.length)];
    var cAge = [];

    if (v3Data[1].indexOf(',') !== -1) {
      cAge.push(utils_randomList([3, 4, 9]));
      cAge.push(utils_randomList([1, 3, 7]));
    } else {
      cAge.push(parseInt(v3Data[1]));
    }

    var selection = utils_randomList([1, 1, 1, 2, 3, 3]);

    if (selection == 1) {
      var groupF = "";
      var filters = {};
    } else if (selection == 2) {
      var groupF = utils_randomList(v3Login_groupFiters);
      var filters = {};
    } else {
      var groupF = "";
      var filters = v3Login_getFilterObject();
    }

    var pages = parseInt(v3Data[12]); //FIXME: Use this random page logic when using static data only

    if (pages > 5) {
      pages -= 2;
      pages = utils_randomList(Array.from({
        length: pages
      }, (_, i) => i + 1));
    } else {
      pages = 1;
    }

    var body = {
      // 'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
      'adult': parseInt(v3Data[0]),
      'childAges': cAge,
      "filter": filters,
      "groupFilterKeyword": groupF,
      'night': parseInt(v3Data[2]),
      'page': pages,
      'priorityRankingType': 'NORMAL_SEARCH',
      'room': parseInt(v3Data[3]),
      'searchType': v3Data[4],
      'searchValue': v3Data[5],
      'searchVariant': utils_randomList(['normal', 'fornax']),
      'showAlternate': utils_randomList([true, false]),
      'sort': v3Login_getSorting(),
      // 'startDate': incrementDate(v3Data[9], randomList([0, 1, 2, 3, 4, 5, 6]))
      'startDate': v3Login_getStartDate() // 'startDate': v3Data[9]

    };
  } else {
    const v3Data = v3Login_srpData[Math.floor(Math.random() * v3Login_srpData.length)];
    var ChildAges = v3Data[1];
    var cAge = [];

    if (ChildAges.indexOf(',') !== -1) {
      const myArray = ChildAges.split(',');
      cAge.push(parseInt(myArray[0]));
      cAge.push(parseInt(myArray[1]));
    } else {
      cAge.push(parseInt(ChildAges));
    }

    let showAlt = v3Data[7].toLowerCase() === 'true';
    var body = {
      // 'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
      'adult': parseInt(v3Data[0]),
      'childAges': cAge,
      // "filter": {},
      "filter": v3Login_createFilterObject(v3Data[14], parseInt(v3Data[15]), parseInt(v3Data[16]), v3Data[17], v3Data[18]),
      "groupFilterKeyword": "",
      'night': parseInt(v3Data[2]),
      'page': 1,
      'priorityRankingType': 'NORMAL_SEARCH',
      'room': parseInt(v3Data[3]),
      'searchType': v3Data[4],
      'searchValue': v3Data[5],
      'searchVariant': v3Data[6],
      'showAlternate': showAlt,
      'sort': v3Data[8],
      // 'startDate': incrementDate(v3Data[9], randomList([0, 1, 2, 3, 4, 5, 6]))
      // 'startDate': getStartDate()
      'startDate': v3Data[9]
    };
  }

  (0,external_k6_namespaceObject.group)('hotel-search', () => {
    const hp = hotelsearch(v3Login_host, params, body);
    utils_assertStatus(hp, 200, v3Login_verbose, 'hotelsearchLoginData');
    utils_assertSuccess(hp, 'SUCCESS', v3Login_verbose, 'hotelsearchLoginData');
    v3Login_assertContentArrayNotEmpty2(hp, 0, false, 'hotelContentObjectSizeLoginData');
  });
}; // To write details in the csv sheet, use above method to run the test

const hotelSearchLogin = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      'channelId': utils_randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'username': tokenDetails[0],
      'X-Loyalty-Level': lvl,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/search'
    },
    timeout: "10s"
  };
  const regData = v3Login_reg[Math.floor(Math.random() * v3Login_reg.length)];
  var adultCount = v3Login_getAdultCount(2);
  var childAges = v3Login_getChildCount(adultCount);
  var filters = v3Login_getFilterObject(adultCount);
  var night = utils_randomList([1, 2, 3]);
  var roomCount = v3Login_getRoomCount(adultCount);
  var searchType = regData[0];
  var searchValue = regData[1];
  var searchVariant = utils_randomList(['normal', 'fornax']);
  var showAlternate = utils_randomList([true, false]);
  var sort = v3Login_getSorting();
  var startdate = v3Login_getStartDate();
  const body = {
    // 'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
    'adult': adultCount,
    'childAges': childAges,
    // "filter": {},
    "filter": filters,
    "groupFilterKeyword": utils_randomList(v3Login_groupFiters),
    'night': night,
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'room': roomCount,
    'searchType': searchType,
    'searchValue': searchValue,
    'searchVariant': searchVariant,
    'showAlternate': showAlternate,
    'sort': sort,
    'startDate': startdate
  };
  (0,external_k6_namespaceObject.group)('hotel-search', () => {
    const hp = hotelsearch(v3Login_host, params, body);
    var hotelContentLength = hp.json('data').contents.length;
    var totalDataInPage = hp.json('data').pagination.totalDataInPage;
    var totalPage = hp.json('data').pagination.totalPage;
    var totalData = hp.json('data').pagination.totalData;
    var payOptionsSize = hp.json('data').paymentOptionList.length;
    var payOptions = [];

    for (var index = 0; index < payOptionsSize; index++) {
      payOptions.push(hp.json('data').paymentOptionList[index].id);
    }

    utils_assertStatus(hp, 200, v3Login_verbose, 'hotelsearchLogin');
    utils_assertSuccess(hp, 'SUCCESS', v3Login_verbose, 'hotelsearchLogin');
    v3Login_assertContentArrayNotEmpty(hp, 0, false, 'hotelContentObjectSizeLogin', adultCount, childAges, night, roomCount, searchType, searchValue, searchVariant, showAlternate, sort, startdate, hotelContentLength, totalDataInPage, totalPage, totalData, payOptions, filters.minPrice, filters.maxPrice, filters.reviewOptions, filters.starRatings);
  });
};
const imageGalleryLogin = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'user-agent': 'Chrome',
      'username': tokenDetails[0],
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/v3/image-gallery'
    },
    timeout: "6s"
  };
  var hotels = [];
  hotels.push(utils_randomList(['yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523']));
  hotels.push(utils_randomList(['glamping-at-taman-wisata-alam-sevillage-puncak-407001626660945675', 'havenwood-residence-tb-simatupang-305001588565854697', 'aryaduta-medan-108001534490273350', 'neo-awana-yogyakarta-201001548219475478', 'horison-suites-residences-rasuna-jakarta-404001617241517993', 'hotel-indonesia-kempinski-jakarta-108001534490372415']));
  hotels.push(utils_randomList(['vasa-hotel-surabaya-108001534490382635', 'maya-ubud-resort-spa-412001639972331220', 'merusaka-nusa-dua-formerly-inaya-putri-bali-404001617851735856', 'melia-purosani-108001534490283896', 'plataran-heritage-borobudur-hotel-108001534490357476', 'blue-sky-hotel-balikpapan-108001534490311735', 'grand-tjokro-premiere-bandung-401001611215156855']));
  hotels.push(utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982']));
  hotels.push(utils_randomList(['eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'sunway-pyramid-hotel-108001534518553681']));
  hotels.push(utils_randomList(['lacrista-hotel-melaka-406001622534960481', 'sindhorn-kempinski-hotel-bangkok-412001639977689655', 'skyview-hotel-bangkok-412001639989957591', 'chom-view-hotel-412001639982338066', 'golden-city-rayong-310001603431920012', 'zenseana-resort-spa-sha-plus-412001639987881459', 'sri-panwa-phuket-luxury-pool-villa-hotel-petfriendly-412001639977473129']));

  for (var c = 1; c <= utils_randomList([21, 22, 23]); c++) {
    hotels.push(v3Login_hotelID[Math.floor(Math.random() * v3Login_hotelID.length)][0]);
  }

  const body = {
    'hotelId': hotels
  };
  (0,external_k6_namespaceObject.group)('image-gallery', () => {
    const hp = imagegallery(v3Login_host, params, body);
    utils_assertStatus(hp, 200, v3Login_verbose, 'imagegalleryLogin');
    utils_assertSuccess(hp, 'SUCCESS', v3Login_verbose, 'imagegalleryLogin');
  });
};
const searchFilterLogin = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': lvl,
      'isVerifiedPhoneNumber': vphone,
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/v3/search/filters'
    },
    timeout: "6s"
  };
  const regData = v3Login_reg[Math.floor(Math.random() * v3Login_reg.length)];
  var adultCount = v3Login_getAdultCount(3);
  const body = {
    'accommodationTypes': [utils_randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
    'adult': adultCount,
    "childAges": v3Login_getChildCount(adultCount),
    "filter": v3Login_getFilterObject(adultCount),
    "groupFilterKeyword": "",
    'night': utils_randomList([1, 2, 3]),
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'room': v3Login_getRoomCount(adultCount),
    'searchType': regData[0],
    'searchValue': regData[1],
    'searchVariant': utils_randomList(['normal', 'fornax']),
    'sort': v3Login_getSorting(),
    'startDate': v3Login_getStartDate()
  };
  (0,external_k6_namespaceObject.group)('search-filter', () => {
    const hp = searchfilter(v3Login_host, params, body);
    utils_assertStatus(hp, 200, v3Login_verbose, 'searchfilterLogin');
    utils_assertSuccess(hp, 'SUCCESS', v3Login_verbose, 'searchfilterLogin');
  });
};
const loyaltyInfoLogin = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'version': '2',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': lvl,
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/v3/loyalty/info'
    },
    timeout: "6s"
  };
  (0,external_k6_namespaceObject.group)('loyalty-info', () => {
    const hp = loyaltyinfo(v3Login_host, params);
    utils_assertStatus(hp, 200, v3Login_verbose, 'loyaltyinfoLogin');
    utils_assertSuccess(hp, 'SUCCESS', v3Login_verbose, 'loyaltyinfoLogin');
  });
};
const searchSimilarLogin = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': lvl,
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/similar/<hotel-id>'
    },
    timeout: "6s"
  };
  var adultCount = v3Login_getAdultCount(3);
  const body = {
    'adult': adultCount,
    'childAges': v3Login_getChildCount(adultCount),
    'night': utils_randomList([1, 2, 3]),
    // 'publicId': '5efe6186-e31c-4504-89a6-8bf9b41f9981',    //Can be excluded confirmed by Daniel
    'room': v3Login_getRoomCount(adultCount),
    'startDate': v3Login_getStartDate()
  };
  (0,external_k6_namespaceObject.group)('search-similar', () => {
    const hp = searchsimilar(v3Login_host, params, body, utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', v3Login_hotelID[Math.floor(Math.random() * v3Login_hotelID.length)][0]]));
    utils_assertStatus(hp, 200, v3Login_verbose, 'searchsimilarLogin');
    v3Login_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v3Login_verbose, 'searchsimilarLogin');
  });
};
const searchVoucherLogin = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/search/voucher'
    },
    timeout: "6s"
  };
  const hotID = utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982', 'eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523', v3Login_hot[Math.floor(Math.random() * v3Login_hot.length)][0]]);
  const body = {
    'hotelId': hotID
  };
  (0,external_k6_namespaceObject.group)('search-voucher', () => {
    const hp = searchvoucher(v3Login_host, params, body);
    utils_assertStatus(hp, 200, v3Login_verbose, 'searchvoucherLogin');
    v3Login_assertMultiSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', v3Login_verbose, 'searchvoucherLogin');
  });
};
const tiketFlexiLogin = () => {
  const tokenDetails = v3Login_accessTokenList[Math.floor(Math.random() * v3Login_accessTokenList.length)];
  var vphone = utils_randomList(['true', 'false']);
  var lvl = utils_randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
  const params = {
    headers: {
      accept: '*/*',
      'channelId': utils_randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'username': tokenDetails[0],
      'X-Loyalty-Level': lvl,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'version': '4',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': vphone,
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-search/search/tiket-flexi'
    },
    timeout: "6s"
  };
  const regData = v3Login_reg[Math.floor(Math.random() * v3Login_reg.length)];
  const body = {
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'searchType': regData[0],
    'searchValue': regData[1],
    'sort': v3Login_getSorting()
  };
  (0,external_k6_namespaceObject.group)('tiket-flexi', () => {
    const hp = tiketflexi(v3Login_host, params, body);
    utils_assertStatus(hp, 200, v3Login_verbose, 'tiketflexiLogin');
    utils_assertSuccess(hp, 'SUCCESS', v3Login_verbose, 'tiketflexiLogin');
  });
};
/*
 Hotel v3 Custom Checks
*/

function v3Login_assertContentArrayNotEmpty(res, value, verbose, measure, adultCount, childAges, night, roomCount, searchType, searchValue, searchVariant, showAlternate, sort, startdate, hotelContentLength, totalDataInPage, totalPage, totalData, payOptions, minPrice, maxPrice, reviewOptions, starRatings) {
  (0,external_k6_namespaceObject.check)(res, {
    [`${measure} is not ${value}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('data').contents.length == value && verbose) {
        console.log(JSON.stringify(res));
      }

      var contentLength = r.json('data').contents.length != value;

      if (contentLength) {
        /**
        Adult,ChildAges,Night,Room,Search Type,Search Value,Search Variant,Show Alternate,Sorting,Date,Hotel List Count,Data in Page,Total Page,Total Data,Payment Options, minPrice, maxPrice, reviewOptions, starRatings
        */
        csv_default().append('./data/hotel/v3SearchPayload.csv', [adultCount, childAges, night, roomCount, searchType, searchValue, searchVariant, showAlternate, sort, startdate, hotelContentLength, totalDataInPage, totalPage, totalData, payOptions, minPrice, maxPrice, reviewOptions, starRatings]);
      }

      return contentLength;
    }
  });
}

function v3Login_assertContentArrayNotEmpty2(res, value, verbose, measure) {
  (0,external_k6_namespaceObject.check)(res, {
    [`${measure} is not ${value}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('data').contents.length == value && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('data').contents.length != value;
    }
  });
}

const v3Login_assertMultiSuccess = (res, code, verbose, name) => {
  //If response is Pass on two status codes
  var statuss = code.split('|');
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if ((r.json('code') != statuss[0] || r.json('code') != statuss[1]) && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('code') === statuss[0] || r.json('code') === statuss[1];
    }
  });
};

function v3Login_getAdultCount(count) {
  return utils_randomList(getArray(count, 1));
} //Always send 1, 2 or 3 as adult count


function v3Login_getChildCount(adultCount) {
  var childAgeArray = [];

  if (adultCount == 2) {
    childAgeArray.push(utils_randomList([1, 4, 7]));
  } else if (adultCount == 1) {
    childAgeArray.push(utils_randomList([1, 4, 7]));
    childAgeArray.push(utils_randomList([1, 4, 7]));
  }

  return childAgeArray;
}

function v3Login_getRoomCount(adultCount) {
  return utils_randomList(Array.from({
    length: adultCount
  }, (_, i) => i + 1));
}

function v3Login_getFilterObject(adultCount) {
  var filterValues = {}; // if (adultCount == 2 || adultCount == 1) {

  if (utils_randomList([1, 2]) == 1) {
    var objFilter = new Object();
    {
      objFilter.minPrice = 0;
      objFilter.maxPrice = utils_randomList([200000, 500000]);
    }
    {
      var payOpts = [];

      if (utils_randomList([1, 2]) == 2) {
        payOpts.push('pay_at_hotel');
        payOpts.push('pay_at_hotel_without_cc');
      } else {
        payOpts.push('pay_at_hotel');
      }

      objFilter.paymentOptions = payOpts;
    }
    {
      var review = [];

      if (utils_randomList([1, 2]) == 1) {
        review.push('4.5');
        review.push('4');
      } else {
        review.push('4.5');
      }

      objFilter.reviewOptions = review;
    }
    {
      var star = [];

      if (utils_randomList([1, 2]) == 2) {
        star.push('5');
        star.push('4');
      } else {
        star.push('5');
      }

      objFilter.starRatings = star;
    } // objFilter.loyalty = randomList([true, false]);

    filterValues = objFilter;
  }

  return filterValues;
}

function v3Login_convertToArray(stringValue) {
  var arrayList = [];

  if (stringValue.indexOf(',') !== -1) {
    const myArray = stringValue.split(',');
    arrayList.push(myArray[0]);
    arrayList.push(myArray[1]);
  } else {
    arrayList.push(stringValue);
  }

  return arrayList;
}

function v3Login_createFilterObject(PaymentOptions, minPrice, maxPrice, reviewOptions, starRatings) {
  var filterValues = {};

  if (PaymentOptions == 'undefined' || minPrice == 'undefined' || maxPrice == 'undefined' || reviewOptions == 'undefined' || starRatings == 'undefined') {
    return filterValues;
  } else {
    filterValues.minPrice = minPrice;
    filterValues.maxPrice = maxPrice;
    filterValues.paymentOptions = v3Login_convertToArray(PaymentOptions);
    filterValues.reviewOptions = v3Login_convertToArray(reviewOptions);
    filterValues.starRatings = v3Login_convertToArray(starRatings);
    return filterValues;
  }
} //Date


function v3Login_getStartDate() {
  var currentMonth = new Date().getMonth() + 1;
  var currentYear = new Date().getFullYear();
  var remainingMonths = 12 - currentMonth;
  var month = utils_randomList(getArray(remainingMonths, currentMonth));
  var startday = new Date(currentYear, month, utils_randomList(getArray(20, 2))).toISOString().slice(0, 10);
  return startday;
} //Sorting


function v3Login_getSorting() {
  return utils_randomList(['lowest_price', 'highest_price', 'lowest_price', 'highest_price', 'popularity', 'review', 'lowest_price', 'highest_price', 'distance', 'lowest_star', 'highest_star']); // return randomList(['lowest_price', 'highest_price']);
}
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-analyticLogin.js


 //https://api.tiket.com/ms-gateway

const hotel_analyticLogin_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const hotel_analyticLogin_verbose = __ENV.VERBOSITY || true;
const hotel_analyticLogin_hotelID = parseCSV('hotelid', './data/hotel/hotelid.csv');
const hotel_analyticLogin_reg = parseCSV('region', './data/hotel/regionData.csv');
const hotel_analyticLogin_accessTokenList = parseCSV('accessN', './data/hotel/loginAccess.csv');
const hotelInfoLogin = () => {
  const tokenDetails = hotel_analyticLogin_accessTokenList[Math.floor(Math.random() * hotel_analyticLogin_accessTokenList.length)];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'Accept-Language': utils_randomList(['en', 'id']),
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-analytic/hotel-info'
    },
    timeout: "6s"
  };
  var hotels = [];
  hotels.push(utils_randomList(['yello-hotel-jemursari-108001534490324637', 'atria-hotel-malang-108001534490301873', 'hotel-mulia-senayan-jakarta-108001534490375749', 'royal-bay-hotel-makassar-412001639108038151', 'double-six-luxury-hotel-seminyak-108001534490327631', 'potato-head-studios-at-desa-potato-head-212001577074521117', 'berry-amour-romantic-villas-108001534490298523']));
  hotels.push(utils_randomList(['glamping-at-taman-wisata-alam-sevillage-puncak-407001626660945675', 'havenwood-residence-tb-simatupang-305001588565854697', 'aryaduta-medan-108001534490273350', 'neo-awana-yogyakarta-201001548219475478', 'horison-suites-residences-rasuna-jakarta-404001617241517993', 'hotel-indonesia-kempinski-jakarta-108001534490372415']));
  hotels.push(utils_randomList(['vasa-hotel-surabaya-108001534490382635', 'maya-ubud-resort-spa-412001639972331220', 'merusaka-nusa-dua-formerly-inaya-putri-bali-404001617851735856', 'melia-purosani-108001534490283896', 'plataran-heritage-borobudur-hotel-108001534490357476', 'blue-sky-hotel-balikpapan-108001534490311735', 'grand-tjokro-premiere-bandung-401001611215156855']));
  hotels.push(utils_randomList(['furama-city-centre-sg-clean-staycation-approved-412001640052952419', 'quincy-hotel-singapore-by-far-east-hospitality-sg-clean-412001639985603143', 'parkroyal-collection-marina-bay-singapore-401001610084710177', 'ramada-by-wyndham-singapore-at-zhongshan-park-412001639647338534', 'royal-plaza-on-scotts-singapore-412001639641903949', 'hotel-clover-the-arts-412001639983572982']));
  hotels.push(utils_randomList(['eastern-oriental-hotel-412001639986542097', 'somerset-medini-iskandar-puteri-112001543987087380', 'scapes-hotel-403001614570313325', 'the-kuala-lumpur-journal-hotel-bukit-bintang-412001639989622327', 'sunway-pyramid-hotel-108001534518553681']));
  hotels.push(utils_randomList(['lacrista-hotel-melaka-406001622534960481', 'sindhorn-kempinski-hotel-bangkok-412001639977689655', 'skyview-hotel-bangkok-412001639989957591', 'chom-view-hotel-412001639982338066', 'golden-city-rayong-310001603431920012', 'zenseana-resort-spa-sha-plus-412001639987881459', 'sri-panwa-phuket-luxury-pool-villa-hotel-petfriendly-412001639977473129']));

  for (var c = 1; c <= utils_randomList([21, 22, 23]); c++) {
    hotels.push(hotel_analyticLogin_hotelID[Math.floor(Math.random() * hotel_analyticLogin_hotelID.length)][0]);
  }

  const body = {
    'hotelId': hotels
  }; //hotelId can be more than 1 hotel, max 30

  (0,external_k6_namespaceObject.group)('hotel-info', () => {
    const hp = hotelinfo(hotel_analyticLogin_host, params, body);
    utils_assertStatus(hp, 200, hotel_analyticLogin_verbose, 'hotelinfoLogin');
    hotel_analyticLogin_assertSuccess(hp, 'SUCCESS', hotel_analyticLogin_verbose, 'hotelinfoLogin');
  });
};
const cheapestPerHotelLogin = () => {
  const tokenDetails = hotel_analyticLogin_accessTokenList[Math.floor(Math.random() * hotel_analyticLogin_accessTokenList.length)];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'user-agent': 'Chrome',
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-analytic/average/cheapestperhotel'
    },
    timeout: "6s"
  }; //endYearMonth can be greater or equal startYearMonth (max : 3 months)
  //startYearMonth cannot be backdate

  var currentMonth = new Date().getMonth() + 1;
  var remainingMonths = 12 - currentMonth;
  var currentYear = new Date().getFullYear();
  var startmonth = utils_randomList(getArray(remainingMonths, currentMonth));

  if (startmonth > 10) {
    var endmonth = startmonth + utils_randomList([0, 1]);
  } else {
    var endmonth = startmonth + utils_randomList([0, 1, 2]);
  }

  if (startmonth < 10) {
    startmonth = '0' + startmonth;
  }

  if (endmonth < 10) {
    endmonth = '0' + endmonth;
  }

  const body = {
    'endYearMonth': currentYear + '-' + endmonth,
    'startYearMonth': currentYear + '-' + startmonth,
    'hotelId': hotel_analyticLogin_hotelID[Math.floor(Math.random() * hotel_analyticLogin_hotelID.length)][0],
    'resApps': utils_randomList([true, false])
  };
  (0,external_k6_namespaceObject.group)('cheapest', () => {
    const hp = cheapestperhotel(hotel_analyticLogin_host, params, body);
    utils_assertStatus(hp, 200, hotel_analyticLogin_verbose, 'cheapestPerHotelLogin');
    hotel_analyticLogin_assertSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', hotel_analyticLogin_verbose, 'cheapestPerHotelLogin');
  });
};
const cheapestPerLocationLogin = () => {
  const tokenDetails = hotel_analyticLogin_accessTokenList[Math.floor(Math.random() * hotel_analyticLogin_accessTokenList.length)];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'user-agent': 'Chrome',
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-analytic/average/cheapestperlocation'
    },
    timeout: "6s"
  }; // endYearMonth can be greater or equal startYearMonth (max : 3 months)
  // resApps can be true/false
  // searchType: dynamic with boundaries [region, city, area] with corresponding locationId
  // startYearMonth cannot be backdate

  var currentMonth = new Date().getMonth() + 1;
  var remainingMonths = 12 - currentMonth;
  var currentYear = new Date().getFullYear();
  var startmonth = utils_randomList(getArray(remainingMonths, currentMonth));
  var endmonth = startmonth + utils_randomList([0, 1, 2]);

  if (startmonth > 10) {
    var endmonth = startmonth + utils_randomList([0, 1]);
  } else {
    var endmonth = startmonth + utils_randomList([0, 1, 2]);
  }

  if (startmonth < 10) {
    startmonth = '0' + startmonth;
  }

  if (endmonth < 10) {
    endmonth = '0' + endmonth;
  }

  const regData = hotel_analyticLogin_reg[Math.floor(Math.random() * hotel_analyticLogin_reg.length)];
  const body = {
    'endYearMonth': currentYear + '-' + endmonth,
    'locationId': regData[1],
    'resApps': utils_randomList([true, false]),
    'searchType': regData[0].toLowerCase(),
    'startYearMonth': currentYear + '-' + startmonth
  };
  (0,external_k6_namespaceObject.group)('cheapest', () => {
    const hp = cheapestperlocation(hotel_analyticLogin_host, params, body);
    utils_assertStatus(hp, 200, hotel_analyticLogin_verbose, 'cheapestperlocationLogin');
    hotel_analyticLogin_assertSuccess(hp, 'SUCCESS|DATA_NOT_EXIST', hotel_analyticLogin_verbose, 'cheapestperlocationLogin');
  });
}; //Custom check

const hotel_analyticLogin_assertSuccess = (res, code, verbose, name) => {
  //If response is Pass on two status codes
  var statuss = code.split('|');
  (0,external_k6_namespaceObject.check)(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if ((r.json('code') != statuss[0] || r.json('code') != statuss[1]) && verbose) {
        console.log(JSON.stringify(res));
      }

      return r.json('code') === statuss[0] || r.json('code') === statuss[1];
    }
  });
};
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-autocompleteLogin.js



const hotel_autocompleteLogin_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const hotel_autocompleteLogin_verbose = __ENV.VERBOSITY || true;
const hotel_autocompleteLogin_accessTokenList = parseCSV('accessN', './data/hotel/loginAccess.csv');
const autoCompletev2Login = () => {
  const tokenDetails = hotel_autocompleteLogin_accessTokenList[Math.floor(Math.random() * hotel_autocompleteLogin_accessTokenList.length)];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      //#TODO:
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-autocomplete/v2/autocomplete'
    },
    timeout: "6s"
  };
  const body = {
    'query': utils_randomList(['Ja', 'Jakar', 'Jakarta', 'Yo', 'Yogya', 'Yogyakarta', 'band', 'bandungMa', 'mala', 'malang', 'Lab', 'labuan', 'labuan baj', 'labuan bajo', 'Ba', 'bali', 'Lo', 'lomb', 'lombok', 'Sur', 'surab', 'surabaya', 'Ma', 'maka', 'makasar'])
  };
  (0,external_k6_namespaceObject.group)('autocomplete-v2', () => {
    const hp = autocompletev2(hotel_autocompleteLogin_host, params, body);
    utils_assertStatus(hp, 200, hotel_autocompleteLogin_verbose, 'autocompletev2Login');
    utils_assertSuccess(hp, 'SUCCESS', hotel_autocompleteLogin_verbose, 'autocompletev2Login');
  });
};
const autoCompletev3Login = () => {
  const tokenDetails = hotel_autocompleteLogin_accessTokenList[Math.floor(Math.random() * hotel_autocompleteLogin_accessTokenList.length)];
  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': 'DESKTOP',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': utils_randomList(['en', 'id']),
      'Accept-Lang': utils_randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': tokenDetails[0],
      'user-agent': 'Chrome',
      'X-Account-Id': '30150683',
      'x-forwarded-host': '192.168.1.1',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-autocomplete/v3/autocomplete'
    },
    timeout: "6s"
  };
  const body = {
    'query': utils_randomList(['Ja', 'Jakar', 'Jakarta', 'Yo', 'Yogya', 'Yogyakarta', 'band', 'bandungMa', 'mala', 'malang', 'Lab', 'labuan', 'labuan baj', 'labuan bajo', 'Ba', 'bali', 'Lo', 'lomb', 'lombok', 'Sur', 'surab', 'surabaya', 'Ma', 'maka', 'makasar'])
  };
  (0,external_k6_namespaceObject.group)('autocomplete-v3', () => {
    const hp = autocompletev3(hotel_autocompleteLogin_host, params, body);
    utils_assertStatus(hp, 200, hotel_autocompleteLogin_verbose, 'autocompletev3Login');
    utils_assertSuccess(hp, 'SUCCESS', hotel_autocompleteLogin_verbose, 'autocompletev3Login');
  });
};
;// CONCATENATED MODULE: ./generator/hotel/hotel-e2e/hotel-home-apiLogin.js



const hotel_home_apiLogin_host = __ENV.LB_HOST || 'https://lb-perf.tiket.com';
const hotel_home_apiLogin_verbose = __ENV.VERBOSITY || true;
const hotel_home_apiLogin_reg = parseCSV('region', './data/hotel/regionData.csv'); // const user = randomList(['GUEST', userList[Math.floor(Math.random() * userList.length)][0]]);

const hotel_home_apiLogin_accessTokenList = parseCSV('accessN', './data/hotel/loginAccess.csv');
const hotelLandingSearchLogin = () => {
  const tokenDetails = hotel_home_apiLogin_accessTokenList[Math.floor(Math.random() * hotel_home_apiLogin_accessTokenList.length)];
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': tokenDetails[0],
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + tokenDetails[2]
    },
    tags: {
      name: '/tix-hotel-home-api/landing-page/search'
    },
    timeout: "6s"
  };
  const regData = hotel_home_apiLogin_reg[Math.floor(Math.random() * hotel_home_apiLogin_reg.length)];
  const body = {
    'accommodationType': utils_randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL']),
    'publicId': regData[1],
    //Can be excluded confirmed by Daniel
    'templateCode': utils_randomList(['TIMED_PROMO', 'MULTIPLE_HOTEL_ID', 'MULTIPLE_SQUARE_CARD']),
    'type': regData[0]
  };
  (0,external_k6_namespaceObject.group)('hotel-landing-search', () => {
    const hp = hotellandingsearch(hotel_home_apiLogin_host, params, body);
    utils_assertStatus(hp, 200, hotel_home_apiLogin_verbose, 'hotellandingsearchLogin');
    utils_assertSuccess(hp, 'SUCCESS', hotel_home_apiLogin_verbose, 'hotellandingsearchLogin');
  });
};
const getContentandModuleLogin = () => {
  const tokenDetails = hotel_home_apiLogin_accessTokenList[Math.floor(Math.random() * hotel_home_apiLogin_accessTokenList.length)];
  const accessToken = tokenDetails[2];
  const userName = tokenDetails[0];
  (0,external_k6_namespaceObject.group)('get-content-and-module', () => {
    const mData = hotel_home_apiLogin_getMasterContent(accessToken, userName);
    let id = mData.json().data[0].id;
    hotel_home_apiLogin_hotelModule(id, accessToken, userName);
    hotel_home_apiLogin_hotelModule(utils_randomList(['6052bc073fe68d4d8c3a8831', '61582d6765a7c3d3d70d8c2c', '61d8184f5a0e7169d5d18aba']), accessToken, userName);
    hotel_home_apiLogin_hotelModule(utils_randomList(['6052bc073fe68d4d8c3a8831', '61582da2fd25ad150fc077d1', '600e8db6a23e39841c4ffc3a']), accessToken, userName);
  });
};

const hotel_home_apiLogin_getMasterContent = (accessToken, userName) => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': utils_randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      // 'X-Channel-Id': 'IOS',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': userName,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing-page/get-master-content'
    },
    timeout: "6s"
  };
  const type = utils_randomList(['HOTEL', 'HOTEL', 'HOTEL', 'NHA']); // group('get-master-content', () => {

  const hp = getmastercontent(hotel_home_apiLogin_host, params, type);
  utils_assertStatus(hp, 200, hotel_home_apiLogin_verbose, 'getmastercontentLogin');
  utils_assertSuccess(hp, 'SUCCESS', hotel_home_apiLogin_verbose, 'getmastercontentLogin'); // })

  return hp;
};

const hotel_home_apiLogin_hotelModule = (id, accessToken, userName) => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': userName,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Account-Id': '30150683',
      //'accessToken': 'a7cf63e4c675033bb1777844742e15265fce8094',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing-page/module/<id>'
    },
    timeout: "6s"
  }; // group('hotel-module', () => {

  const hp = hotelmodule(hotel_home_apiLogin_host, params, id); //id = '602f455d835d09195fa5a741'

  utils_assertStatus(hp, 200, hotel_home_apiLogin_verbose, 'hotelmoduleLogin');
  utils_assertSuccess(hp, 'SUCCESS', hotel_home_apiLogin_verbose, 'hotelmoduleLogin'); // })
};

const getv2ModuleLogin = () => {
  const tokenDetails = hotel_home_apiLogin_accessTokenList[Math.floor(Math.random() * hotel_home_apiLogin_accessTokenList.length)];
  const accessToken = tokenDetails[2];
  const userName = tokenDetails[0];
  (0,external_k6_namespaceObject.group)('get-v2-module', () => {
    getlandingv2ModuleLogin(accessToken, userName);
    var multiple_hotel_id = [['620dc90feefb0337e65a94cf', 'Jakarta'], ['6229abedeefb0337e65a94d5', 'Yogyakarta'], ['6229ac0eeefb0337e65a94d6', 'Yogyakarta']];
    var obj1 = utils_randomList(multiple_hotel_id);
    var obj2 = utils_randomList(multiple_hotel_id);
    getlandingv2ModuleIDLogin(obj1[0], obj1[1], accessToken, userName);
    getlandingv2ModuleIDLogin(obj2[0], obj2[1], accessToken, userName);
  });
};

const getlandingv2ModuleLogin = (accessToken, userName) => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': utils_randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': userName,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Account-Id': '30150683',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing_page/v2/modules?type=NHA'
    },
    timeout: "6s"
  }; // group('get-master-content', () => {

  const hp = hotelv2module(hotel_home_apiLogin_host, params);
  utils_assertStatus(hp, 200, hotel_home_apiLogin_verbose, 'hotelv2moduleLogin');
  utils_assertSuccess(hp, 'SUCCESS', hotel_home_apiLogin_verbose, 'hotelv2moduleLogin'); // })

  return hp;
};

const getlandingv2ModuleIDLogin = (id, name, accessToken, userName) => {
  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': userName,
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Account-Id': '30150683',
      'Authorization': 'Bearer ' + accessToken
    },
    tags: {
      name: '/tix-hotel-home-api/landing_page/v2/module/<id>?name=<name>'
    },
    timeout: "6s"
  };
  const queryParams = new URLSearchParams([['name', name]]); // group('hotel-module', () => {

  const hp = hotelv2moduleId(hotel_home_apiLogin_host, params, id, queryParams);
  utils_assertStatus(hp, 200, hotel_home_apiLogin_verbose, 'hotelv2moduleId');
  utils_assertSuccess(hp, 'SUCCESS', hotel_home_apiLogin_verbose, 'hotelv2moduleId'); // })
};
;// CONCATENATED MODULE: ./scenarios/hotel/hotel-e2e.js











const serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    //non login scenarios 
    searchv2Room: {
      targetRate: distribute(serverCount, 15785),
      dist: 1
    },
    searchContent: {
      targetRate: distribute(serverCount, 10010),
      dist: 1
    },
    roomFaq_post: {
      targetRate: distribute(serverCount, 4152),
      dist: 1
    },
    nearestCity: {
      targetRate: distribute(serverCount, 737),
      dist: 1
    },
    nearestArea: {
      targetRate: distribute(serverCount, 509),
      dist: 1
    },
    nearestRegion: {
      targetRate: distribute(serverCount, 144),
      dist: 1
    },
    groupFilter: {
      targetRate: distribute(serverCount, 1155),
      dist: 1
    },
    hotelSearchData: {
      targetRate: distribute(serverCount, 6105),
      dist: 1
    },
    imageGallery: {
      targetRate: distribute(serverCount, 2640),
      dist: 1
    },
    searchFilter: {
      targetRate: distribute(serverCount, 1408),
      dist: 1
    },
    loyaltyInfo: {
      targetRate: distribute(serverCount, 1463),
      dist: 1
    },
    searchSimilar: {
      targetRate: distribute(serverCount, 3129),
      dist: 1
    },
    searchVoucher: {
      targetRate: distribute(serverCount, 2689),
      dist: 1
    },
    tiketFlexi: {
      targetRate: distribute(serverCount, 15),
      dist: 1
    },
    hotelInfo: {
      targetRate: distribute(serverCount, 8470),
      dist: 1
    },
    cheapestPerHotel: {
      targetRate: distribute(serverCount, 1375),
      dist: 1
    },
    cheapestPerLocation: {
      targetRate: distribute(serverCount, 1248),
      dist: 1
    },
    autoCompletev2: {
      targetRate: distribute(serverCount, 1870),
      dist: 1
    },
    autoCompletev3: {
      targetRate: distribute(serverCount, 3944),
      dist: 1
    },
    hotelLandingSearch: {
      targetRate: distribute(serverCount, 841),
      dist: 1
    },
    getContentandModule: {
      targetRate: distribute(serverCount, 9170),
      dist: 1
    },
    getv2Module: {
      targetRate: distribute(serverCount, 27),
      dist: 1
    },
    // login scenarios
    searchv2RoomLogin: {
      targetRate: distribute(serverCount, 12915),
      dist: 1
    },
    searchContentLogin: {
      targetRate: distribute(serverCount, 8190),
      dist: 1
    },
    roomFaq_postLogin: {
      targetRate: distribute(serverCount, 3397),
      dist: 1
    },
    bookRoomLogin: {
      targetRate: distribute(serverCount, 6690),
      dist: 1
    },
    nearestCityLogin: {
      targetRate: distribute(serverCount, 603),
      dist: 1
    },
    nearestAreaLogin: {
      targetRate: distribute(serverCount, 417),
      dist: 1
    },
    nearestRegionLogin: {
      targetRate: distribute(serverCount, 117),
      dist: 1
    },
    groupFilterLogin: {
      targetRate: distribute(serverCount, 945),
      dist: 1
    },
    hotelSearchLoginData: {
      targetRate: distribute(serverCount, 4995),
      dist: 1
    },
    imageGalleryLogin: {
      targetRate: distribute(serverCount, 2160),
      dist: 1
    },
    searchFilterLogin: {
      targetRate: distribute(serverCount, 1152),
      dist: 1
    },
    loyaltyInfoLogin: {
      targetRate: distribute(serverCount, 1197),
      dist: 1
    },
    searchSimilarLogin: {
      targetRate: distribute(serverCount, 2560),
      dist: 1
    },
    searchVoucherLogin: {
      targetRate: distribute(serverCount, 2200),
      dist: 1
    },
    tiketFlexiLogin: {
      targetRate: distribute(serverCount, 10),
      dist: 1
    },
    hotelInfoLogin: {
      targetRate: distribute(serverCount, 6930),
      dist: 1
    },
    cheapestPerHotelLogin: {
      targetRate: distribute(serverCount, 1125),
      dist: 1
    },
    cheapestPerLocationLogin: {
      targetRate: distribute(serverCount, 1021),
      dist: 1
    },
    autoCompletev2Login: {
      targetRate: distribute(serverCount, 1530),
      dist: 1
    },
    autoCompletev3Login: {
      targetRate: distribute(serverCount, 3226),
      dist: 1
    },
    hotelLandingSearchLogin: {
      targetRate: distribute(serverCount, 688),
      dist: 1
    },
    getContentandModuleLogin: {
      targetRate: distribute(serverCount, 7500),
      dist: 1
    },
    getv2ModuleLogin: {
      targetRate: distribute(serverCount, 23),
      dist: 1
    } // To put non empty srp data in csv
    // hotelSearch: { targetRate: distribute(serverCount, 250), dist: 1 },
    // hotelSearchLogin: { targetRate: distribute(serverCount, 250), dist: 1 },
    // -------------1.5x of OTW peak--------------//

    /* Use below sheet for distribution
    https://docs.google.com/spreadsheets/d/11-yQqqWyyuQ7cEwqkYuo--7SkZ561-_CO5AwEIGkw5Q/edit#gid=1673487549
    */
    //non login scenarios
    // searchv2Room: { targetRate: distribute(serverCount, 2448), dist: 1 },
    // searchContent: { targetRate: distribute(serverCount, 1942), dist: 1 },
    // roomFaq_post: { targetRate: distribute(serverCount, 458), dist: 1 },
    // nearestCity: { targetRate: distribute(serverCount, 74), dist: 1 },
    // nearestArea: { targetRate: distribute(serverCount, 51), dist: 1 },
    // nearestRegion: { targetRate: distribute(serverCount, 15), dist: 1 },
    // groupFilter: { targetRate: distribute(serverCount, 1348), dist: 1 },
    // hotelSearchData: { targetRate: distribute(serverCount, 5000), dist: 1 },
    // imageGallery: { targetRate: distribute(serverCount, 2063), dist: 1 },
    // searchFilter: { targetRate: distribute(serverCount, 1243), dist: 1 },
    // loyaltyInfo: { targetRate: distribute(serverCount, 1656), dist: 1 },
    // searchSimilar: { targetRate: distribute(serverCount, 1507), dist: 1 },
    // searchVoucher: { targetRate: distribute(serverCount, 1342), dist: 1 },
    // tiketFlexi: { targetRate: distribute(serverCount, 10), dist: 1 },
    // hotelInfo: { targetRate: distribute(serverCount, 3350), dist: 1 },
    // cheapestPerHotel: { targetRate: distribute(serverCount, 627), dist: 1 },
    // cheapestPerLocation: { targetRate: distribute(serverCount, 1040), dist: 1 },
    // autoCompletev2: { targetRate: distribute(serverCount, 1111), dist: 1 },
    // autoCompletev3: { targetRate: distribute(serverCount, 2453), dist: 1 },
    // hotelLandingSearch: { targetRate: distribute(serverCount, 869), dist: 1 },
    // getContentandModule: { targetRate: distribute(serverCount, 2310), dist: 1 },
    // login scenarios
    // searchv2RoomLogin: { targetRate: distribute(serverCount, 2003), dist: 1 },
    // searchContentLogin: { targetRate: distribute(serverCount, 1589), dist: 1 },
    // roomFaq_postLogin: { targetRate: distribute(serverCount, 374), dist: 1 },
    // bookRoomLogin: { targetRate: distribute(serverCount, 524), dist: 1 },
    // nearestCityLogin: { targetRate: distribute(serverCount, 61), dist: 1 },
    // nearestAreaLogin: { targetRate: distribute(serverCount, 42), dist: 1 },
    // nearestRegionLogin: { targetRate: distribute(serverCount, 12), dist: 1 },
    // groupFilterLogin: { targetRate: distribute(serverCount, 1103), dist: 1 },
    // hotelSearchLoginData: { targetRate: distribute(serverCount, 4091), dist: 1 },
    // imageGalleryLogin: { targetRate: distribute(serverCount, 1688), dist: 1 },
    // searchFilterLogin: { targetRate: distribute(serverCount, 1017), dist: 1 },
    // loyaltyInfoLogin: { targetRate: distribute(serverCount, 1355), dist: 1 },
    // searchSimilarLogin: { targetRate: distribute(serverCount, 1233), dist: 1 },
    // searchVoucherLogin: { targetRate: distribute(serverCount, 1098), dist: 1 },
    // tiketFlexiLogin: { targetRate: distribute(serverCount, 10), dist: 1 },
    // hotelInfoLogin: { targetRate: distribute(serverCount, 2741), dist: 1 },
    // cheapestPerHotelLogin: { targetRate: distribute(serverCount, 513), dist: 1 },
    // cheapestPerLocationLogin: { targetRate: distribute(serverCount, 851), dist: 1 },
    // autoCompletev2Login: { targetRate: distribute(serverCount, 909), dist: 1 },
    // autoCompletev3Login: { targetRate: distribute(serverCount, 2007), dist: 1 },
    // hotelLandingSearchLogin: { targetRate: distribute(serverCount, 711), dist: 1 },
    // getContentandModuleLogin: { targetRate: distribute(serverCount, 1890), dist: 1 },
    // -------------Rate Limiting--------------//
    //non login scenarios
    // searchv2Room: { targetRate: distribute(serverCount, 14438), dist: 1 },
    // searchContent: { targetRate: distribute(serverCount, 3883), dist: 1 },
    // roomFaq_post: { targetRate: distribute(serverCount, 915), dist: 1 },
    // nearestCity: { targetRate: distribute(serverCount, 148), dist: 1 },
    // nearestArea: { targetRate: distribute(serverCount, 102), dist: 1 },
    // nearestRegion: { targetRate: distribute(serverCount, 29), dist: 1 },
    // groupFilter: { targetRate: distribute(serverCount, 2695), dist: 1 },
    // hotelSearchData: { targetRate: distribute(serverCount, 8250), dist: 1 },
    // imageGallery: { targetRate: distribute(serverCount, 4125), dist: 1 },
    // searchFilter: { targetRate: distribute(serverCount, 2486), dist: 1 },
    // loyaltyInfo: { targetRate: distribute(serverCount, 3311), dist: 1 },
    // searchSimilar: { targetRate: distribute(serverCount, 3014), dist: 1 },
    // searchVoucher: { targetRate: distribute(serverCount, 2684), dist: 1 },
    // tiketFlexi: { targetRate: distribute(serverCount, 11), dist: 1 },
    // hotelInfo: { targetRate: distribute(serverCount, 6699), dist: 1 },
    // cheapestPerHotel: { targetRate: distribute(serverCount, 1254), dist: 1 },
    // cheapestPerLocation: { targetRate: distribute(serverCount, 2079), dist: 1 },
    // autoCompletev2: { targetRate: distribute(serverCount, 2222), dist: 1 },
    // autoCompletev3: { targetRate: distribute(serverCount, 4906), dist: 1 },
    // hotelLandingSearch: { targetRate: distribute(serverCount, 1738), dist: 1 },
    // getContentandModule: { targetRate: distribute(serverCount, 2255), dist: 1 },
    // // login scenarios
    // searchv2RoomLogin: { targetRate: distribute(serverCount, 11813), dist: 1 },
    // searchContentLogin: { targetRate: distribute(serverCount, 3177), dist: 1 },
    // roomFaq_postLogin: { targetRate: distribute(serverCount, 748), dist: 1 },
    // bookRoomLogin: { targetRate: distribute(serverCount, 1800), dist: 1 },
    // nearestCityLogin: { targetRate: distribute(serverCount, 121), dist: 1 },
    // nearestAreaLogin: { targetRate: distribute(serverCount, 84), dist: 1 },
    // nearestRegionLogin: { targetRate: distribute(serverCount, 24), dist: 1 },
    // groupFilterLogin: { targetRate: distribute(serverCount, 2205), dist: 1 },
    // hotelSearchLoginData: { targetRate: distribute(serverCount, 6750), dist: 1 },
    // imageGalleryLogin: { targetRate: distribute(serverCount, 3375), dist: 1 },
    // searchFilterLogin: { targetRate: distribute(serverCount, 2034), dist: 1 },
    // loyaltyInfoLogin: { targetRate: distribute(serverCount, 2709), dist: 1 },
    // searchSimilarLogin: { targetRate: distribute(serverCount, 2466), dist: 1 },
    // searchVoucherLogin: { targetRate: distribute(serverCount, 2196), dist: 1 },
    // tiketFlexiLogin: { targetRate: distribute(serverCount, 9), dist: 1 },
    // hotelInfoLogin: { targetRate: distribute(serverCount, 5481), dist: 1 },
    // cheapestPerHotelLogin: { targetRate: distribute(serverCount, 1026), dist: 1 },
    // cheapestPerLocationLogin: { targetRate: distribute(serverCount, 1701), dist: 1 },
    // autoCompletev2Login: { targetRate: distribute(serverCount, 1818), dist: 1 },
    // autoCompletev3Login: { targetRate: distribute(serverCount, 4014), dist: 1 },
    // hotelLandingSearchLogin: { targetRate: distribute(serverCount, 1422), dist: 1 },
    // getContentandModuleLogin: { targetRate: distribute(serverCount, 1845), dist: 1 },

  }
};
const options = {
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

    if (config.scenario === 'load') {
      stages = [{
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.002)
      }, {
        duration: '2h',
        target: Math.round(config.groupServices[name].targetRate * 0.002)
      }, // // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // // // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      // // // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // // // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      // // // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.5) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.5) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3) },
      {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'loaddata') {
      stages = [{
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.6)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'endurance') {
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
        duration: '90m',
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
        target: Math.round(config.groupServices[name].targetRate * 0.03)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.03)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.05)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.05)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.07)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.07)
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
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, {
        duration: '3m',
        target: 0
      }];
    } else if (config.scenario === 'spikeLoad') {
      stages = [// { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      // { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '6m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.9)
      }, // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.4)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, //22 minute
      // { duration: '40m', target: Math.round(config.groupServices[name].targetRate * 1.5) },
      {
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
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.1) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.5) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3) },
      {
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