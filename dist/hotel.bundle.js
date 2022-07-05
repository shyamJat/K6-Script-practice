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
  "bookRoom": () => (/* reexport */ bookRoom),
  "bookRoomLogin": () => (/* reexport */ bookRoomLogin),
  "cheapestPerHotel": () => (/* reexport */ cheapestPerHotel),
  "cheapestPerHotelLogin": () => (/* reexport */ cheapestPerHotelLogin),
  "cheapestPerLocation": () => (/* reexport */ cheapestPerLocation),
  "cheapestPerLocationLogin": () => (/* reexport */ cheapestPerLocationLogin),
  "checkHaproxyHealth": () => (/* reexport */ checkHaproxyHealth),
  "checkHotelApiGatewayHealth": () => (/* reexport */ checkHotelApiGatewayHealth),
  "checkv2Health": () => (/* reexport */ checkv2Health),
  "checkv3Health": () => (/* reexport */ checkv3Health),
  "getContentandModule": () => (/* reexport */ getContentandModule),
  "getContentandModuleLogin": () => (/* reexport */ getContentandModuleLogin),
  "groupFilter": () => (/* reexport */ groupFilter),
  "groupFilterLogin": () => (/* reexport */ groupFilterLogin),
  "hotelInfo": () => (/* reexport */ hotelInfo),
  "hotelInfoLogin": () => (/* reexport */ hotelInfoLogin),
  "hotelLandingSearch": () => (/* reexport */ hotelLandingSearch),
  "hotelLandingSearchLogin": () => (/* reexport */ hotelLandingSearchLogin),
  "hotelSearch": () => (/* reexport */ hotelSearch),
  "hotelSearchLogin": () => (/* reexport */ hotelSearchLogin),
  "imageGallery": () => (/* reexport */ imageGallery),
  "imageGalleryLogin": () => (/* reexport */ imageGalleryLogin),
  "loyaltyInfo": () => (/* reexport */ loyaltyInfo),
  "loyaltyInfoLogin": () => (/* reexport */ loyaltyInfoLogin),
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
  "searchv2RoomLogin": () => (/* reexport */ searchv2RoomLogin)
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
  console.log(JSON.stringify(data));
  return data[Math.floor(Math.random() * data.length)];
}
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10);
};
const assertStatus = (res, status, verbose, name) => {
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
const assertMessage = (res, code, verbose, name) => {
  check(res, {
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
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/hotel-search/v2.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchcontent = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/content`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchv2room = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/v2/room`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const roomfaq_post = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/room/faq`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchroom = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/room`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const prebook = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/hotel/v2/prebook`, JSON.stringify(body), params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-search/v2.js



const host = 'https://api.tiket.com/ms-gateway/tix-hotel-search'; //`${__ENV.LB_HOST}`

const user = randomList(['GUEST', randomCSV('email', 'data/email.csv')[0]]);
let vphone = '';
let lvl = '';

if (user == 'GUEST') {
  vphone = 'false';
  lvl = 'null';
} else {
  vphone = randomList(['true', 'false']);
  lvl = randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
}

const hotelIDset = randomList(['the-sultan-hotel-residence-jakarta-403001617164138947', 'royal-safari-garden-resorts-and-convention-108001534490297447', 'hotel-indonesia-kempinski-jakarta-108001534490372415', randomCSV('hotelid', 'data/hotelid.csv')[0]]);
const searchContent = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'channelId': channel,
      //'channelId':'DESKTOP',
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-content'
    }
  };
  const body = {
    'hotelId': hotelIDset
  };
  (0,external_k6_namespaceObject.group)('search-content', () => {
    const hp = searchcontent(host, params, body);
    assertStatus(hp, 200, true, 'searchcontent');
    assertSuccess(hp, 'SUCCESS', true, 'searchcontent');
  });
};
const searchv2Room = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'showColor': randomList(['true', 'false']),
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': userAgent,
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      //One of 2, 3, or 4
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      //'cookie':cookie,
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'searchv2-room'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'adult': adultCount,
    'childAges': [],
    //array. can be empty or filled with single or multiple random integer from 0 to 17
    'hotelId': hotelIDset,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'room': randomList(roomCount),
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) // startDate : random date from today to 4 month from now

  };
  (0,external_k6_namespaceObject.group)('searchv2-room', () => {
    const hp = searchv2room(host, params, body);
    assertStatus(hp, 200, true, 'searchv2room');
    assertSuccess(hp, 'SUCCESS', true, 'searchv2room');
  });
};
const roomFaq_post = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'room-Faq_post'
    }
  };
  const body = {
    'hotelId': hotelIDset
  };
  (0,external_k6_namespaceObject.group)('room-faq_post', () => {
    const hp = roomfaq_post(host, params, body);
    assertStatus(hp, 200, true, 'roomfaq_post');
    assertSuccess(hp, 'SUCCESS', true, 'roomfaq_post');
  });
};
const bookRoom = () => {
  (0,external_k6_namespaceObject.group)('bookRoom', () => {
    const roomdata = searchRoom();
    const randomroom = randomList(Array.from(Array(roomdata.json().data.roomList.length).keys()));
    let rID = roomdata.json().data.roomList[randomroom].roomId;
    let rRate = roomdata.json().data.roomList[randomroom].rateCode;
    preBook(rID, rRate);
  });
};

const searchRoom = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'showColor': randomList(['true', 'false']),
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': vphone,
      'X-Loyalty-Level': lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      //One of 2, 3, or 4
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-room'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'adult': adultCount,
    'childAges': [randomList([2, 5, 12, 16, 0])],
    //array. can be empty or filled with single or multiple random integer from 0 to 17
    'hotelId': hotelIDset,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'room': randomList(roomCount),
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) // startDate : random date from today to 4 month from now

  }; // group('search-room', () => {

  const hp = searchroom(host, params, body);
  assertStatus(hp, 200, true, 'searchroom');
  assertSuccess(hp, 'SUCCESS', true, 'searchroom'); // })

  return hp;
};

const preBook = (roomid, ratecode) => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'X-Loyalty-Level': lvl,
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'isVerifiedPhoneNumber': vphone,
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'true-client-ip': '192.168.1.1',
      'user-agent': 'Chrome',
      'username': 'guest',
      'version': 3,
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'pre-book'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'adult': adultCount,
    'childAges': [randomList([2, 5, 12, 16, 0])],
    'hotelId': hotelIDset,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'room': randomList(roomCount),
    'roomId': roomid,
    //'5dd4d3fe0bae485eba46f07d',                // from `tix-hotel-search/room`
    'rateCode': ratecode,
    //'280144654',                             // from `tix-hotel-search/room`
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) // startDate : random date from today to 4 month from now

  }; // group('pre-book', () => {

  const hp = prebook(host, params, body);
  assertStatus(hp, 200, true, 'prebook');
  assertSuccess(hp, 'SUCCESS', true, 'prebook'); // })
};
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/hotel-search/v3.js

/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const hotelsearch = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/search`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchsimilar = (host, params, body, id) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/similar/${id}`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchvoucher = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/search/voucher?cache=false`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const imagegallery = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/v3/image-gallery`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const loyaltyinfo = (host, params) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/v3/loyalty/info`, params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @param {object} body post body
 * @returns http response
 */

const searchfilter = (host, params, body) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${host}/v3/search/filters`, JSON.stringify(body), params);
  return resp;
};
/**
 * @param {object} params global parameters
 * @returns http response
 */

const groupfilter = (host, params, query) => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/v3/group-filter?${query.toString()}`, params);
  return resp;
};
;// CONCATENATED MODULE: external "https://jslib.k6.io/url/1.0.0/index.js"
const _1_0_0_index_js_namespaceObject = require("https://jslib.k6.io/url/1.0.0/index.js");;
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-search/v3.js




const v3_host = 'https://api.tiket.com/ms-gateway/tix-hotel-search'; //`${__ENV.LB_HOST}`

const hotID = randomCSV('vhotel', './data/voucherHotelId.csv')[0];
const regData = randomCSV('region', './data/regionData.csv');
const v3_user = randomList(['GUEST', randomCSV('email', './data/email.csv')[0]]);
let v3_vphone = '';
let v3_lvl = '';

if (v3_user == 'GUEST') {
  v3_vphone = 'false';
  v3_lvl = 'null';
} else {
  v3_vphone = randomList(['true', 'false']);
  v3_lvl = randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
}

const v3_hotelIDset = randomList(['the-sultan-hotel-residence-jakarta-403001617164138947', 'royal-safari-garden-resorts-and-convention-108001534490297447', 'hotel-indonesia-kempinski-jakarta-108001534490372415', randomCSV('hotelid', 'data/hotelid.csv')[0]]);
const hotelSearch = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId':channel,
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3_vphone,
      'X-Loyalty-Level': v3_lvl,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'hotel-search'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
    'adult': adultCount,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'room': randomList(roomCount),
    'searchType': regData[0],
    'searchValue': regData[1],
    'searchVariant': 'normal',
    'sort': 'popularity',
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate()))
  };
  (0,external_k6_namespaceObject.group)('hotel-search', () => {
    const hp = hotelsearch(v3_host, params, body);
    assertStatus(hp, 200, true, 'hotelsearch');
    assertSuccess(hp, 'SUCCESS', true, 'hotelsearch');
  });
};
const searchSimilar = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'channelId': channel,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3_lvl,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-similar'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'adult': adultCount,
    'childAges': [randomList([2, 5, 12, 16, 0])],
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    // 'publicId': '5efe6186-e31c-4504-89a6-8bf9b41f9981',    //Can be excluded confirmed by Daniel
    'room': randomList(roomCount),
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) //'2021-11-01'

  }; // const id = 'shakti-hotel-jakarta-108001534490352230' //TODO: parameterize it

  (0,external_k6_namespaceObject.group)('search-similar', () => {
    const hp = searchsimilar(v3_host, params, body, v3_hotelIDset);
    assertStatus(hp, 200, true, 'searchsimilar');
    assertSuccess(hp, 'SUCCESS', true, 'searchsimilar');
  });
};
const searchVoucher = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'channelId': channel,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3_vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-voucher'
    }
  };
  const body = {
    'hotelId': hotID //'yucca-villas-403001617166826290'

  };
  (0,external_k6_namespaceObject.group)('search-voucher', () => {
    const hp = searchvoucher(v3_host, params, body);
    assertStatus(hp, 200, true, 'searchvoucher');
    assertSuccess(hp, 'SUCCESS', true, 'searchvoucher');
  });
};
const imageGallery = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'channelId': channel,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'user-agent': 'Chrome',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'image-gallery'
    }
  };
  const body = {
    'hotelId': [v3_hotelIDset] //['verona-palace-hotel-108001534490272109']

  };
  (0,external_k6_namespaceObject.group)('image-gallery', () => {
    const hp = imagegallery(v3_host, params, body);
    assertStatus(hp, 200, true, 'imagegallery');
    assertSuccess(hp, 'SUCCESS', true, 'imagegallery');
  });
};
const loyaltyInfo = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'channelId': channel,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '2',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3_lvl,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'loyalty-info'
    }
  };
  (0,external_k6_namespaceObject.group)('loyalty-info', () => {
    const hp = loyaltyinfo(v3_host, params);
    assertStatus(hp, 200, true, 'loyaltyinfo');
    assertSuccess(hp, 'SUCCESS', true, 'loyaltyinfo');
  });
};
const searchFilter = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'channelId': channel,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3_lvl,
      'isVerifiedPhoneNumber': v3_vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-filter'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
    'adult': adultCount,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'room': randomList(roomCount),
    'searchType': regData[0],
    'searchValue': regData[1],
    'searchVariant': 'normal',
    'sort': 'popularity',
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) //'2021-12-27'

  };
  (0,external_k6_namespaceObject.group)('search-filter', () => {
    const hp = searchfilter(v3_host, params, body);
    assertStatus(hp, 200, true, 'searchfilter');
    assertSuccess(hp, 'SUCCESS', true, 'searchfilter');
  });
};
const groupFilter = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId':channel,
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3_vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'group-filter'
    }
  };
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['locationType', regData[0]], ['locationId', regData[1]], ['accommodation', 'HOTEL']]);
  (0,external_k6_namespaceObject.group)('group-filter', () => {
    const hp = groupfilter(v3_host, params, queryParams);
    assertStatus(hp, 200, true, 'groupfilter');
    assertSuccess(hp, 'SUCCESS', true, 'groupfilter');
  });
};
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
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-analytic.js



const hotel_analytic_host = 'https://api.tiket.com/ms-gateway'; //`${__ENV.LB_HOST}`

const hotel_analytic_user = randomList(['GUEST', randomCSV('email', './data/email.csv')[0]]);
const hotel_analytic_regData = randomCSV('region', './data/regionData.csv');
const hotel_analytic_hotelIDset = randomList(['the-sultan-hotel-residence-jakarta-403001617164138947', 'royal-safari-garden-resorts-and-convention-108001534490297447', 'hotel-indonesia-kempinski-jakarta-108001534490372415', randomCSV('hotelid', './data/hotelid.csv')[0]]);
const hotelInfo = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  } // const data = recommendationData[Math.floor(Math.random() * (recommendationData.length - 1))]


  const params = {
    headers: {
      accept: '*/*',
      //'channelId': channel,
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'hotel-info'
    }
  };
  const body = {
    'hotelId': [hotel_analytic_hotelIDset]
  }; //hotelId can be more than 1 hotel, max 30

  (0,external_k6_namespaceObject.group)('hotel-info', () => {
    const hp = hotelinfo(hotel_analytic_host, params, body);
    assertStatus(hp, 200, true, 'hotelinfo');
    assertSuccess(hp, 'SUCCESS', true, 'hotelinfo');
  });
};
const cheapestPerHotel = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': channel,
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'cheapest-per-hotel'
    }
  }; //endYearMonth can be greater or equal startYearMonth (max : 3 months)
  //startYearMonth cannot be backdate

  const body = {
    'endYearMonth': '2021-10',
    'startYearMonth': '2021-10',
    'hotelId': hotel_analytic_hotelIDset,
    'resApps': true
  };
  (0,external_k6_namespaceObject.group)('cheapest', () => {
    const hp = cheapestperhotel(hotel_analytic_host, params, body);
    assertStatus(hp, 200, true, 'cheapestPerHotel');
    assertSuccess(hp, 'SUCCESS', true, 'cheapestPerHotel');
  });
};
const cheapestPerLocation = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': channel,
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'cheapest-per-location'
    }
  }; // endYearMonth can be greater or equal startYearMonth (max : 3 months)
  // resApps can be true/false
  // searchType: dynamic with boundaries [region, city, area] with corresponding locationId
  // startYearMonth cannot be backdate

  const body = {
    'endYearMonth': '2021-10',
    'locationId': hotel_analytic_regData[1],
    'resApps': true,
    'searchType': hotel_analytic_regData[0].toLowerCase(),
    'startYearMonth': '2021-10'
  };
  (0,external_k6_namespaceObject.group)('cheapest', () => {
    const hp = cheapestperlocation(hotel_analytic_host, params, body);
    assertStatus(hp, 200, true, 'cheapestperlocation');
    assertSuccess(hp, 'SUCCESS', true, 'cheapestperlocation');
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
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-autocomplete.js



const hotel_autocomplete_host = 'https://api.tiket.com/ms-gateway'; //`${__ENV.LB_HOST}`

const hotel_autocomplete_user = randomList(['GUEST', randomCSV('email', './data/email.csv')[0]]);
const autoCompletev2 = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId':channel,
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'autocomplete-v2'
    }
  };
  const body = {
    'query': randomList(['Ja', 'Jakar', 'Jakarta', 'Yo', 'Yogya', 'Yogyakarta', 'band', 'bandungMa', 'mala', 'malang', 'Lab', 'labuan', 'labuan baj', 'labuan bajo', 'Ba', 'bali', 'Lo', 'lomb', 'lombok', 'Sur', 'surab', 'surabaya', 'Ma', 'maka', 'makasar'])
  };
  (0,external_k6_namespaceObject.group)('autocomplete-v2', () => {
    const hp = autocompletev2(hotel_autocomplete_host, params, body);
    assertStatus(hp, 200, true, 'autocompletev2');
    assertSuccess(hp, 'SUCCESS', true, 'autocompletev2');
  });
};
const autoCompletev3 = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'channelId': channel,
      'currency': 'IDR',
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'autocomplete-v3'
    }
  };
  const body = {
    'query': randomList(['Ja', 'Jakar', 'Jakarta', 'Yo', 'Yogya', 'Yogyakarta', 'band', 'bandungMa', 'mala', 'malang', 'Lab', 'labuan', 'labuan baj', 'labuan bajo', 'Ba', 'bali', 'Lo', 'lomb', 'lombok', 'Sur', 'surab', 'surabaya', 'Ma', 'maka', 'makasar'])
  };
  (0,external_k6_namespaceObject.group)('autocomplete-v3', () => {
    const hp = autocompletev3(hotel_autocomplete_host, params, body);
    assertStatus(hp, 200, true, 'autocompletev3');
    assertSuccess(hp, 'SUCCESS', true, 'autocompletev3');
  });
};
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/hotel-home-api.js

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

const hotelmodule = (host, params, id) => {
  //
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get(`${host}/tix-hotel-home-api/landing-page/module/${id}`, params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-home-api.js



const hotel_home_api_host = 'https://api.tiket.com/ms-gateway'; //`${__ENV.LB_HOST}`

const hotel_home_api_user = randomList(['GUEST', randomCSV('email', './data/email.csv')[0]]);
const getContentandModule = () => {
  (0,external_k6_namespaceObject.group)('get-content-and-module', () => {
    const mData = getMasterContent();
    let moduleid = mData.json().data[0].id;
    hotelModule(moduleid);
    hotelModule(moduleid);
    hotelModule(moduleid);
    hotelModule(moduleid);
    hotelModule(moduleid);
    hotelModule(moduleid);
    hotelModule(moduleid);
    hotelModule(moduleid);
  });
};

const getMasterContent = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id':channel,
      'X-Currency': 'IDR',
      'X-Channel-Id': channel,
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': 'guest',
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'True-Client-Ip': '192.168.1.',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'get-master-content'
    }
  };
  const type = randomList(['HOTEL', 'NHA']); // group('get-master-content', () => {

  const hp = getmastercontent(hotel_home_api_host, params, type);
  assertStatus(hp, 200, true, 'getmastercontent');
  assertSuccess(hp, 'SUCCESS', true, 'getmastercontent'); // })

  return hp;
};

const hotelModule = id => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channel,
      'X-Currency': 'IDR',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': 'guest',
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'True-Client-Ip': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'hotel-module'
    }
  }; // group('hotel-module', () => {

  const hp = hotelmodule(hotel_home_api_host, params, id); //id = '602f455d835d09195fa5a741'

  assertStatus(hp, 200, true, 'hotelmodule');
  assertSuccess(hp, 'SUCCESS', true, 'hotelmodule'); // })
};

const hotelLandingSearch = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D';
  } else if (channel == 'IOS') {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '11b3cd411e828444ab21957270bd55652153d62e', auth = 'Bearer 11b3cd411e828444ab21957270bd55652153d62e', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      'X-Channel-Id': channel,
      'X-Currency': 'IDR',
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': 'guest',
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'True-Client-Ip': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' // 'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _gat_UA-22317351-1=1; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635409511.50; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwOTUxMTg5MywiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3OSwic2VxdWVuY2VOdW1iZXIiOjMyMzl9; _ga=GA1.1.850902945.1593518289; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635411311960%2C%22c%22%3A1635408094488%2C%22l%22%3A1635409511960%7D',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'hotel-landing-search'
    }
  }; //TODO:What paramters are dynamix here

  const body = {
    'accommodationType': randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL']),
    // 'publicId': 'west-nusa-tenggara-108001534490280165',  //Can be excluded confirmed by Daniel
    'templateCode': randomList(['TIMED_PROMO', 'MULTIPLE_HOTEL_ID', 'MULTIPLE_SQUARE_CARD']),
    'type': 'region'
  };
  (0,external_k6_namespaceObject.group)('hotel-landing-search', () => {
    const hp = hotellandingsearch(hotel_home_api_host, params, body);
    assertStatus(hp, 200, true, 'hotellandingsearch');
    assertSuccess(hp, 'SUCCESS', true, 'hotellandingsearch');
  });
};
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-search/v2Login.js



const v2Login_host = 'https://api.tiket.com/ms-gateway/tix-hotel-search'; //`${__ENV.LB_HOST}`

const v2Login_user = randomList(['GUEST', randomCSV('email', 'data/email.csv')[0]]);
let v2Login_vphone = '';
let v2Login_lvl = '';

if (v2Login_user == 'GUEST') {
  v2Login_vphone = 'false';
  v2Login_lvl = 'null';
} else {
  v2Login_vphone = randomList(['true', 'false']);
  v2Login_lvl = randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
}

const v2Login_hotelIDset = randomList(['the-sultan-hotel-residence-jakarta-403001617164138947', 'royal-safari-garden-resorts-and-convention-108001534490297447', 'hotel-indonesia-kempinski-jakarta-108001534490372415', randomCSV('hotelid', 'data/hotelid.csv')[0]]);
const searchContentLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': v2Login_vphone,
      'X-Loyalty-Level': v2Login_lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-content'
    }
  };
  const body = {
    'hotelId': v2Login_hotelIDset
  };
  (0,external_k6_namespaceObject.group)('search-content', () => {
    const hp = searchcontent(v2Login_host, params, body);
    assertStatus(hp, 200, true, 'searchcontent');
    assertSuccess(hp, 'SUCCESS', true, 'searchcontent');
  });
};
const searchv2RoomLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'showColor': randomList(['true', 'false']),
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': v2Login_vphone,
      'X-Loyalty-Level': v2Login_lvl,
      'true-client-ip': '192.168.1.1',
      'user-agent': 'Chrome',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      //One of 2, 3, or 4
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'searchv2-room'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'adult': adultCount,
    'childAges': [],
    //array. can be empty or filled with single or multiple random integer from 0 to 17
    'hotelId': v2Login_hotelIDset,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'room': randomList(roomCount),
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) // startDate : random date from today to 4 month from now

  };
  (0,external_k6_namespaceObject.group)('searchv2-room', () => {
    const hp = searchv2room(v2Login_host, params, body);
    assertStatus(hp, 200, true, 'searchv2room');
    assertSuccess(hp, 'SUCCESS', true, 'searchv2room');
  });
};
const roomFaq_postLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': v2Login_vphone,
      'X-Loyalty-Level': v2Login_lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'room-Faq_post'
    }
  };
  const body = {
    'hotelId': v2Login_hotelIDset
  };
  (0,external_k6_namespaceObject.group)('room-faq_post', () => {
    const hp = roomfaq_post(v2Login_host, params, body);
    assertStatus(hp, 200, true, 'roomfaq_post');
    assertSuccess(hp, 'SUCCESS', true, 'roomfaq_post');
  });
};
const bookRoomLogin = () => {
  (0,external_k6_namespaceObject.group)('bookRoom', () => {
    const roomdata = v2Login_searchRoom();
    const randomroom = randomList(Array.from(Array(roomdata.json().data.roomList.length).keys()));
    let rID = roomdata.json().data.roomList[randomroom].roomId;
    let rRate = roomdata.json().data.roomList[randomroom].rateCode;
    v2Login_preBook(rID, rRate);
  });
};

const v2Login_searchRoom = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'showColor': randomList(['true', 'false']),
      'storeId': 'TIKETCOM',
      'isVerifiedPhoneNumber': v2Login_vphone,
      'X-Loyalty-Level': v2Login_lvl,
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'version': 3,
      //One of 2, 3, or 4
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-room'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'adult': adultCount,
    'childAges': [randomList([2, 5, 12, 16, 0])],
    //array. can be empty or filled with single or multiple random integer from 0 to 17
    'hotelId': v2Login_hotelIDset,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'room': randomList(roomCount),
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) // startDate : random date from today to 4 month from now

  }; // group('search-room', () => {

  const hp = searchroom(v2Login_host, params, body);
  assertStatus(hp, 200, true, 'searchroom');
  assertSuccess(hp, 'SUCCESS', true, 'searchroom'); // })

  return hp;
};

const v2Login_preBook = (roomid, ratecode) => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'X-Loyalty-Level': v2Login_lvl,
      //'channelId': randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'isVerifiedPhoneNumber': v2Login_vphone,
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'true-client-ip': '192.168.1.1',
      //'user-agent': 'Chrome',
      'username': 'guest',
      'version': 3,
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie,
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com' //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'pre-book'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'adult': adultCount,
    'childAges': [randomList([2, 5, 12, 16, 0])],
    'hotelId': v2Login_hotelIDset,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'room': randomList(roomCount),
    'roomId': roomid,
    //'5dd4d3fe0bae485eba46f07d',                // from `tix-hotel-search/room`
    'rateCode': ratecode,
    //'280144654',                             // from `tix-hotel-search/room`
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) // startDate : random date from today to 4 month from now

  }; // group('pre-book', () => {

  const hp = prebook(v2Login_host, params, body);
  assertStatus(hp, 200, true, 'prebook');
  assertSuccess(hp, 'SUCCESS', true, 'prebook'); // })
};
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-search/v3Login.js




const v3Login_host = 'https://api.tiket.com/ms-gateway/tix-hotel-search'; //`${__ENV.LB_HOST}`

const v3Login_hotID = randomCSV('vhotel', './data/voucherHotelId.csv')[0];
const v3Login_regData = randomCSV('region', './data/regionData.csv');
const v3Login_user = randomList(['GUEST', randomCSV('email', './data/email.csv')[0]]);
let v3Login_vphone = '';
let v3Login_lvl = '';

if (v3Login_user == 'GUEST') {
  v3Login_vphone = 'false';
  v3Login_lvl = 'null';
} else {
  v3Login_vphone = randomList(['true', 'false']);
  v3Login_lvl = randomList(['LV1', 'LV2', 'LV3', 'LV4', 'null']);
}

const v3Login_hotelIDset = randomList(['the-sultan-hotel-residence-jakarta-403001617164138947', 'royal-safari-garden-resorts-and-convention-108001534490297447', 'hotel-indonesia-kempinski-jakarta-108001534490372415', randomCSV('hotelid', 'data/hotelid.csv')[0]]);
const hotelSearchLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3Login_vphone,
      'X-Loyalty-Level': v3Login_lvl,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'
      //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42'

    },
    tags: {
      name: 'hotel-search'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
    'adult': adultCount,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'room': randomList(roomCount),
    'searchType': v3Login_regData[0],
    'searchValue': v3Login_regData[1],
    'searchVariant': 'normal',
    'sort': 'popularity',
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate()))
  };
  (0,external_k6_namespaceObject.group)('hotel-search', () => {
    const hp = hotelsearch(v3Login_host, params, body);
    assertStatus(hp, 200, true, 'hotelsearch');
    assertSuccess(hp, 'SUCCESS', true, 'hotelsearch');
  });
};
const searchSimilarLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3Login_lvl,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-similar'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'adult': adultCount,
    'childAges': [randomList([2, 5, 12, 16, 0])],
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    // 'publicId': '5efe6186-e31c-4504-89a6-8bf9b41f9981',    //Can be excluded confirmed by Daniel
    'room': randomList(roomCount),
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) //'2021-11-01'

  }; // const id = 'shakti-hotel-jakarta-108001534490352230' //TODO: parameterize it

  (0,external_k6_namespaceObject.group)('search-similar', () => {
    const hp = searchsimilar(v3Login_host, params, body, v3Login_hotelIDset);
    assertStatus(hp, 200, true, 'searchsimilar');
    assertSuccess(hp, 'SUCCESS', true, 'searchsimilar');
  });
};
const searchVoucherLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3Login_vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-voucher'
    }
  };
  const body = {
    'hotelId': v3Login_hotID //'yucca-villas-403001617166826290'

  };
  (0,external_k6_namespaceObject.group)('search-voucher', () => {
    const hp = searchvoucher(v3Login_host, params, body);
    assertStatus(hp, 200, true, 'searchvoucher');
    assertSuccess(hp, 'SUCCESS', true, 'searchvoucher');
  });
};
const imageGalleryLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427e',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'user-agent': 'Chrome',
      'username': 'guest',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'image-gallery'
    }
  };
  const body = {
    'hotelId': [v3Login_hotelIDset] //['verona-palace-hotel-108001534490272109']

  };
  (0,external_k6_namespaceObject.group)('image-gallery', () => {
    const hp = imagegallery(v3Login_host, params, body);
    assertStatus(hp, 200, true, 'imagegallery');
    assertSuccess(hp, 'SUCCESS', true, 'imagegallery');
  });
};
const loyaltyInfoLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '2',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3Login_lvl,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'loyalty-info'
    }
  };
  (0,external_k6_namespaceObject.group)('loyalty-info', () => {
    const hp = loyaltyinfo(v3Login_host, params);
    assertStatus(hp, 200, true, 'loyaltyinfo');
    assertSuccess(hp, 'SUCCESS', true, 'loyaltyinfo');
  });
};
const searchFilterLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'X-Loyalty-Level': v3Login_lvl,
      'isVerifiedPhoneNumber': v3Login_vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'search-filter'
    }
  };
  const adultCount = randomList([1, 2, 3, 4, 5, 6, 7]);
  const roomCount = Array.from({
    length: adultCount
  }, (_, i) => i + 1);
  const body = {
    'accommodationTypes': [randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL'])],
    'adult': adultCount,
    'night': randomList([1, 2, 3, 4, 5, 6, 7]),
    'page': 1,
    'priorityRankingType': 'NORMAL_SEARCH',
    'room': randomList(roomCount),
    'searchType': v3Login_regData[0],
    'searchValue': v3Login_regData[1],
    'searchVariant': 'normal',
    'sort': 'popularity',
    'startDate': randomDate(new Date(), new Date(new Date().getFullYear(), new Date().getMonth() + randomList([1, 2]), new Date().getDate())) //'2021-12-27'

  };
  (0,external_k6_namespaceObject.group)('search-filter', () => {
    const hp = searchfilter(v3Login_host, params, body);
    assertStatus(hp, 200, true, 'searchfilter');
    assertSuccess(hp, 'SUCCESS', true, 'searchfilter');
  });
};
const groupFilterLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'version': '3',
      'customerUserAgent': 'Chrome',
      'customerIPAddress': '192.168.1.1',
      'isVerifiedPhoneNumber': v3Login_vphone,
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'group-filter'
    }
  };
  const queryParams = new _1_0_0_index_js_namespaceObject.URLSearchParams([['locationType', v3Login_regData[0]], ['locationId', v3Login_regData[1]], ['accommodation', 'HOTEL']]);
  (0,external_k6_namespaceObject.group)('group-filter', () => {
    const hp = groupfilter(v3Login_host, params, queryParams);
    assertStatus(hp, 200, true, 'groupfilter');
    assertSuccess(hp, 'SUCCESS', true, 'groupfilter');
  });
};
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-analyticLogin.js



const hotel_analyticLogin_host = 'https://api.tiket.com/ms-gateway'; //`${__ENV.LB_HOST}`

const hotel_analyticLogin_user = randomList(['GUEST', randomCSV('email', './data/email.csv')[0]]);
const hotel_analyticLogin_regData = randomCSV('region', './data/regionData.csv');
const hotel_analyticLogin_hotelIDset = randomList(['the-sultan-hotel-residence-jakarta-403001617164138947', 'royal-safari-garden-resorts-and-convention-108001534490297447', 'hotel-indonesia-kempinski-jakarta-108001534490372415', randomCSV('hotelid', './data/hotelid.csv')[0]]);
const hotelInfoLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  } // const data = recommendationData[Math.floor(Math.random() * (recommendationData.length - 1))]


  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36',
      //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42'

    },
    tags: {
      name: 'hotel-info'
    }
  };
  const body = {
    'hotelId': [hotel_analyticLogin_hotelIDset]
  }; //hotelId can be more than 1 hotel, max 30

  (0,external_k6_namespaceObject.group)('hotel-info', () => {
    const hp = hotelinfo(hotel_analyticLogin_host, params, body);
    assertStatus(hp, 200, true, 'hotelinfo');
    assertSuccess(hp, 'SUCCESS', true, 'hotelinfo');
  });
};
const cheapestPerHotelLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'cheapest-per-hotel'
    }
  }; //endYearMonth can be greater or equal startYearMonth (max : 3 months)
  //startYearMonth cannot be backdate

  const body = {
    'endYearMonth': '2021-10',
    'startYearMonth': '2021-10',
    'hotelId': hotel_analyticLogin_hotelIDset,
    'resApps': true
  };
  (0,external_k6_namespaceObject.group)('cheapest', () => {
    const hp = cheapestperhotel(hotel_analyticLogin_host, params, body);
    assertStatus(hp, 200, true, 'cheapestPerHotel');
    assertSuccess(hp, 'SUCCESS', true, 'cheapestPerHotel');
  });
};
const cheapestPerLocationLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'cheapest-per-location'
    }
  }; // endYearMonth can be greater or equal startYearMonth (max : 3 months)
  // resApps can be true/false
  // searchType: dynamic with boundaries [region, city, area] with corresponding locationId
  // startYearMonth cannot be backdate

  const body = {
    'endYearMonth': '2021-10',
    'locationId': hotel_analyticLogin_regData[1],
    'resApps': true,
    'searchType': hotel_analyticLogin_regData[0].toLowerCase(),
    'startYearMonth': '2021-10'
  };
  (0,external_k6_namespaceObject.group)('cheapest', () => {
    const hp = cheapestperlocation(hotel_analyticLogin_host, params, body);
    assertStatus(hp, 200, true, 'cheapestperlocation');
    assertSuccess(hp, 'SUCCESS', true, 'cheapestperlocation');
  });
};
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-autocompleteLogin.js



const hotel_autocompleteLogin_host = 'https://api.tiket.com/ms-gateway'; //`${__ENV.LB_HOST}`

const hotel_autocompleteLogin_user = randomList(['GUEST', randomCSV('email', './data/email.csv')[0]]);
const autoCompletev2Login = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'autocomplete-v2'
    }
  };
  const body = {
    'query': randomList(['Ja', 'Jakar', 'Jakarta', 'Yo', 'Yogya', 'Yogyakarta', 'band', 'bandungMa', 'mala', 'malang', 'Lab', 'labuan', 'labuan baj', 'labuan bajo', 'Ba', 'bali', 'Lo', 'lomb', 'lombok', 'Sur', 'surab', 'surabaya', 'Ma', 'maka', 'makasar'])
  };
  (0,external_k6_namespaceObject.group)('autocomplete-v2', () => {
    const hp = autocompletev2(hotel_autocompleteLogin_host, params, body);
    assertStatus(hp, 200, true, 'autocompletev2');
    assertSuccess(hp, 'SUCCESS', true, 'autocompletev2');
  });
};
const autoCompletev3Login = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      //'channelId': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'currency': 'IDR',
      'channelId': channel,
      'customerSessionId': 'd41d8cd98f00b204e9800998ecf8427',
      'lang': randomList(['en', 'id']),
      'requestId': Math.floor(20000000 + Math.random() * 90000000),
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': 'guest',
      'user-agent': 'Chrome',
      'x-forwarded-host': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'autocomplete-v3'
    }
  };
  const body = {
    'query': randomList(['Ja', 'Jakar', 'Jakarta', 'Yo', 'Yogya', 'Yogyakarta', 'band', 'bandungMa', 'mala', 'malang', 'Lab', 'labuan', 'labuan baj', 'labuan bajo', 'Ba', 'bali', 'Lo', 'lomb', 'lombok', 'Sur', 'surab', 'surabaya', 'Ma', 'maka', 'makasar'])
  };
  (0,external_k6_namespaceObject.group)('autocomplete-v3', () => {
    const hp = autocompletev3(hotel_autocompleteLogin_host, params, body);
    assertStatus(hp, 200, true, 'autocompletev3');
    assertSuccess(hp, 'SUCCESS', true, 'autocompletev3');
  });
};
;// CONCATENATED MODULE: ./generator/hotel-e2e/hotel-home-apiLogin.js



const hotel_home_apiLogin_host = 'https://api.tiket.com/ms-gateway'; //`${__ENV.LB_HOST}`

const hotel_home_apiLogin_user = randomList(['GUEST', randomCSV('email', './data/email.csv')[0]]);
const getContentandModuleLogin = () => {
  (0,external_k6_namespaceObject.group)('get-content-and-module', () => {
    const mData = hotel_home_apiLogin_getMasterContent();
    let moduleid = mData.json().data[0].id;
    hotel_home_apiLogin_hotelModule(moduleid);
    hotel_home_apiLogin_hotelModule(moduleid);
    hotel_home_apiLogin_hotelModule(moduleid);
    hotel_home_apiLogin_hotelModule(moduleid);
    hotel_home_apiLogin_hotelModule(moduleid);
    hotel_home_apiLogin_hotelModule(moduleid);
    hotel_home_apiLogin_hotelModule(moduleid);
    hotel_home_apiLogin_hotelModule(moduleid);
  });
};

const hotel_home_apiLogin_getMasterContent = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': channel,
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': 'guest',
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'True-Client-Ip': '192.168.1.',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'get-master-content'
    }
  };
  const type = randomList(['HOTEL', 'NHA']); // group('get-master-content', () => {

  const hp = getmastercontent(hotel_home_apiLogin_host, params, type);
  assertStatus(hp, 200, true, 'getmastercontent');
  assertSuccess(hp, 'SUCCESS', true, 'getmastercontent'); // })

  return hp;
};

const hotel_home_apiLogin_hotelModule = id => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': channel,
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': 'guest',
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'True-Client-Ip': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'hotel-module'
    }
  }; // group('hotel-module', () => {

  const hp = hotelmodule(hotel_home_apiLogin_host, params, id); //id = '602f455d835d09195fa5a741'

  assertStatus(hp, 200, true, 'hotelmodule');
  assertSuccess(hp, 'SUCCESS', true, 'hotelmodule'); // })
};

const hotelLandingSearchLogin = () => {
  var channel = randomList(['DESKTOP', 'MOBILE', 'IOS', 'ANDROID']);
  var auth = '';
  var at = '';
  var cookie = '';
  var userAgent = '';

  if (channel == 'DESKTOP' || channel == 'MOBILE') {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', cookie = '__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42';
  } else if (channel == 'IOS') {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/ios-version (twh:20420882) - v4.24.1';
  } else {
    at = '503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', auth = 'Bearer 503a7a568ebcfc62974372e4e1b677bc3bc3c1cf', userAgent = 'tiketcom/android-version (twh:20296642) - v4.25.0-test-masterfeature/HPEP-2543/dev-homes-srp-improvement';
  }

  const params = {
    headers: {
      accept: '*/*',
      'X-Store-Id': 'TIKETCOM',
      //'X-Channel-Id': randomList(['ANDROID', 'ANDROID', 'DESKTOP', 'MOBILE', 'IOS', 'ANDROID']),
      'X-Currency': 'IDR',
      'X-Channel-Id': channel,
      'X-Request-Id': Math.floor(20000000 + Math.random() * 90000000),
      'X-Service-Id': 'gateway',
      'X-Username': 'guest',
      'X-Account-Id': '1',
      'X-Reseller-Id': '1',
      'X-Identity': '02f0e6bf',
      'X-Business-Id': '1',
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'True-Client-Ip': '192.168.1.1',
      'true-client': '34.87.5.234, 192.168.78.2',
      'X-Account-Id': '30150683',
      'X-Audience': 'tiket.com',
      //'Authorization':'Bearer 2c33424bcca2669a824417a8e186658476d2da29',
      //'Authorization':'Bearer eyJraWQiOiI0RV9PWE5LMlFnRzU3SWwxRWRaS1l6V19jNGRETy1jMyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTU1YmMzMmRhYWIxZDQ0NGY3OGM5MDYiLCJuYmYiOjE2MzMwMDg2OTAsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzMzYxMzQ5MH0.CbwSwHZfk-_WaLVxrzbImN2luN-taaVZl0cfwxHxmtS-3zfl-56zks-JR-NW5K8Y',
      'Accept-Lang': randomList(['en', 'id']),
      'origin': 'https://www.tiket.com',
      'accessToken': at,
      'Authorization': auth,
      'user-agent': userAgent,
      'cookie': cookie //'cookie':'__auc=9dd59c99173051771c7a511443b; _fbp=fb.1.1593518289561.985421794; afUserId=a058533e-358b-40ac-ba63-9add161f6d9b-p; RP-LOGGED_IN=Y; __ssid=b21d2b1ef5ae47301b0919a292f784c; fbm_176613702824432=base_domain=.tiket.com; tiketDeviceId=7f1bcc5c-91a1-4674-941a-627581; _ga_VKZD5SC6KN=GS1.1.1616673598.191.0.1616673598.60; GTMCookie={ "vertical": "hotel", "hotel":{"country":"indonesia","region":"jakarta","city":"jakarta pusat","area":"menteng","startDate":"2021-08-11","endDate":"2021-08-12","hotelRoom":1,"hotelGuest":1,"hotelDuration":1,"type":"","hotelIds":"oakwood-apartments-pantai-indah-kapuk-301001580274914464,hotel-indonesia-kempinski-jakarta-108001534490372415,holiday-inn-express-jakarta-thamrin-108001534517310598,hotel-mulia-senayan-jakarta-108001534490375749,crowne-plaza-jakarta-residence-307001595423764074,the-grove-suites-by-grand-aston-403001614852036553,yello-hotel-harmoni-108001534490356929,wyndham-casablanca-jakarta-111001541213241550,four-seasons-hotel-jakarta-404001618828431648,aston-priority-hotel-and-conference-center-108001534490322637,century-park-hotel-108001534490332197,harris-vertu-hotel-harmoni-108001534490352011,fraser-residence-menteng-jakarta-209001567593007727,sari-pacific-jakarta-108001534490302247,harris-hotel-conventions-kelapa-gading-108001534490293544,aston-kartika-grogol-hotel-conference-center-205001557476745551,intercontinental-jakarta-pondok-indah-311001604459709507,hotel-santika-premiere-slipi-jakarta-108001534490273248,ayana-midplaza-jakarta-fka-intercontinental-jakarta-108001534518727231,whiz-hotel-cikini-jakarta-108001534490309511,harris-hotel-tebet-108001534490279576,ambhara-hotel-jakarta-108001534490266848,hotel-ciputra-jakarta-managed-by-swissbelhotel-international-402001614162631107,harris-suites-fx-sudirman-108001534490280228,manhattan-hotel-108001534490284496,gran-melia-jakarta-108001534490326566,artotel-thamrin-jakarta-108001534490310798,mandarin-oriental-jakarta-108001534490425506,millennium-hotel-sirih-jakarta-108001534490315924,grand-hyatt-jakarta-108001534490386507","specialCondition":"","searchResultCounter":30,"lowestPrice":"","highestPrice":"","searchType":"HOTEL","searchLabel":"HOTEL","keyword":"artotel-thamrin-jakarta-108001534490310798","selectedPrice":"","hotelId":"artotel-thamrin-jakarta-108001534490310798","hotelName":"Artotel Thamrin Jakarta","hotelRatingTiket":"","hotelRatingTripAdvisor":"","hotelReviewTiket":"","hotelReviewTripAdvisor":"","propertyType":"HOTEL","hotelFacility":"indonesia care|tiket clean|wifi|parkir|restoran|resepsionis 24 jam|spa|lift|ac|antar jemput bandara|fasilitas rapat|fasilitas anak","hotelRoomId":"5d43a3b701e07a072ceb9be7","hotelRoomName":"Studio 20","totalPayment":448083,"totalTixPointEarned":7841,"bookingSomeoneElse":0}}; tiket-business_id=35001837; mp_0c9321f761e6801a5b23d3cda0855f9a_mixpanel=%7B%22distinct_id%22%3A%20%22testing%40tiket.com%22%2C%22%24device_id%22%3A%20%2217309b38142231-07dbdaca2d9588-31627403-13c680-17309b3814376f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22mp_keyword%22%3A%20%22https%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2Furl%3Fhl%3Den%26q%3Dhttps%3A%2F%2Fgatotkaca.tiket.com%2Fadmin%2Fmm-dashboard%2Fnew-gallery%2F3d268630-d71c-4acb-8727-bba576ec50a2%26sa%3DD%26ust%3D1593682024445000%26usg%3DAFQjCNE2pjuXWGxSN7mp3r3TRi-tSngS4A%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22testing%40tiket.com%22%7D; PHPSESSID=0b3deaaf-f833-483e-82c3-a6d7f0baaf4f; GTMUserInformation={ "userId": null, "email": "null", "fullName": " ", "firstName": "", "lastName": ""}; _gcl_au=1.1.1797868781.1635152425; _gid=GA1.2.364762468.1635152425; cto_bundle=rQ17NV9IcXc1ZzZzajEzZFgwUFElMkJYNjFPS3Boa0k0eFlVeSUyRmkxNjJoSGN6ZyUyRmU0MGFBc0o0UzNPRU5kb2l4TnBjRSUyQiUyRnhkRUlxRkJUTWU1MUhBSnZhektiQld2MHYzRDFIZzVzZnNzM3B3U2JDcFdoayUyQm84VUdzYlQ0MTVERkM0S3BGQU9nMUZkb0slMkY1OHJhRUZzNFEwOXRpcUw0UzUzTjJ5MWdpUDBoVlR2WlVWT0VhYlhSUFRGdzhGbmVTZHI1VmtNWQ; userlang=id; usercurrency=IDR; source=hotel; amplitude_id_47641881f43cb2f204fcd7c51d567f2btiket.com=eyJkZXZpY2VJZCI6IjhkYTNhZGUzLTRhNGMtNDg5Mi05NTZiLWM1ZGQ4MTI2MTJlMFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTM5NDg3NTE1OCwibGFzdEV2ZW50VGltZSI6MTYzNTM5NDg5NjcxNCwiZXZlbnRJZCI6MTgwLCJpZGVudGlmeUlkIjoxNTQsInNlcXVlbmNlTnVtYmVyIjozMzR9; session_access_token=eyJraWQiOiJrcXRLM2hIZFBJUWdqNHJ0TWY4RlBCSGdQWmNiMDczYyJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjAxMDA5OH0.gswgdohCtBjDJFoRO80b_jR1Wqugfyc4Dwwy1w2RmH6ggesjO-69wicG5zeEJX6t; session_refresh_token=eyJraWQiOiJrb0cyUGVHRkdqaTJzaDg1QUlJQVBfQ1J2RWpoRDZwWCJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2MTdhNGRmMmM2NzM4NzY2NWQxZjljM2UiLCJuYmYiOjE2MzU0MDUyOTgsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTYzNjYxNDg5OH0.wG_DOpvCRhGQi5GxLb14ZpugYpGG0ZbMYzA9geBSwIz2BtrzHs6fKHUlMQF5scln; __cf_bm=OlWWpptbxwpVMQP7py.JmrQLVSitb1JDRFMSHeHc6.A-1635408093-0-AfIcTOT9EM8CUVffBHyL1Dx3MPkCMpa/KVpgKkE47Ia77SMGJDtv7uy1b+imLMlE0f5VfXFxluRuGVZAOHY2Q7yZ4xRVfsSZ9lMFHIEGna5Z; __asc=9e2defab17cc5eb2505a0bec48d; _gat_UA-22317351-1=1; ab.storage.sessionId.3a9cb405-9ac0-4c31-a856-3183ef998519=%7B%22g%22%3A%22209b26b3-177e-e980-6247-aaab50d2604b%22%2C%22e%22%3A1635409896512%2C%22c%22%3A1635408094488%2C%22l%22%3A1635408096512%7D; amplitude_id_4232616a7b142f5eea26902a508b5860tiket.com=eyJkZXZpY2VJZCI6IjlhZTcwMTRkLTk5NzgtNDIzNi05MGYwLWFkZWE3YWFiMDY1ZFIiLCJ1c2VySWQiOiIyMDEyMzMzMyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzNTQwODA5NDQ1MiwibGFzdEV2ZW50VGltZSI6MTYzNTQwODA5NzA5NCwiZXZlbnRJZCI6MTg2MCwiaWRlbnRpZnlJZCI6MTM3Nywic2VxdWVuY2VOdW1iZXIiOjMyMzd9; _ga=GA1.2.850902945.1593518289; _uetsid=fdf84b00357111ecb31fd7ef9caede48; _uetvid=065e78203eba11ebbd167b39fbc40181; _ga_7H6ZDP2ZXG=GS1.1.1635408094.374.1.1635408112.42',
      //'cookie': 'PHPSESSID=a50502a8-76d9-4881-8b34-bbb685366d44;usercurrency=IDR;userlang=en',
      //'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36'

    },
    tags: {
      name: 'hotel-landing-search'
    }
  }; //TODO:What paramters are dynamix here

  const body = {
    'accommodationType': randomList(['NHA', 'HOTEL', 'HOTEL', 'HOTEL']),
    // 'publicId': 'west-nusa-tenggara-108001534490280165',  //Can be excluded confirmed by Daniel
    'templateCode': randomList(['TIMED_PROMO', 'MULTIPLE_HOTEL_ID', 'MULTIPLE_SQUARE_CARD']),
    'type': 'region'
  };
  (0,external_k6_namespaceObject.group)('hotel-landing-search', () => {
    const hp = hotellandingsearch(hotel_home_apiLogin_host, params, body);
    assertStatus(hp, 200, true, 'hotellandingsearch');
    assertSuccess(hp, 'SUCCESS', true, 'hotellandingsearch');
  });
};
;// CONCATENATED MODULE: ./apis/hotel/hotel-e2e/heathCheck.js

const v2healthcheck = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get('https://lb1-ms.tiket.com/tix-hotel-search/v2/application/health', params);
  return resp;
};
const v3healthcheck = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get('https://lb1-ms.tiket.com/tix-hotel-search/search/v3/application/health', params);
  return resp;
};
const apigatewayhotelhealthcheck = params => {
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().get('https://lb1-ms.tiket.com/gateway/tix-hotel-search/application/health', params);
  return resp;
};
const haproxyhealthcheck = params => {
  params.headers['Content-Type'] = 'application/html';
  const resp = http_default().get('https://lb1-ms.tiket.com/tikethealthcheck', params);
  return resp;
};
;// CONCATENATED MODULE: ./generator/hotel-e2e/heathCheck.js



const checkv2Health = () => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: '/tix-hotel-search/v2/application/health'
    }
  };
  (0,external_k6_namespaceObject.group)('v2HealthCheck', () => {
    const hp = v2healthcheck(params);
    assertStatus(hp, 200, true, 'v2healthcheck');
  });
};
const checkv3Health = () => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: '/tix-hotel-search/search/v3/application/health'
    }
  };
  (0,external_k6_namespaceObject.group)('v3HealthCheck', () => {
    const hp = v3healthcheck(params);
    assertStatus(hp, 200, true, 'v3healthcheck');
  });
};
const checkHotelApiGatewayHealth = () => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: '/gateway/tix-hotel-search/application/health'
    }
  };
  (0,external_k6_namespaceObject.group)('hotelapigatewayheck', () => {
    const hp = apigatewayhotelhealthcheck(params);
    assertStatus(hp, 200, true, 'apigatewayhotelhealthcheck');
  });
};
const checkHaproxyHealth = () => {
  const params = {
    headers: {
      accept: '*/*'
    },
    tags: {
      name: '/tikethealthcheck'
    }
  };
  (0,external_k6_namespaceObject.group)('haproxyHealthCheck', () => {
    const hp = haproxyhealthcheck(params);
    assertStatus(hp, 200, true, 'haproxyhealthcheck');
  });
};
;// CONCATENATED MODULE: ./scenarios/hotel/hotel-e2e.js












const hotel_e2e_serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    //non login scenarios 
    searchContent: {
      targetRate: distribute(hotel_e2e_serverCount, 5830),
      dist: 1
    },
    searchv2Room: {
      targetRate: distribute(hotel_e2e_serverCount, 6600),
      dist: 1
    },
    roomFaq_post: {
      targetRate: distribute(hotel_e2e_serverCount, 2272),
      dist: 1
    },
    bookRoom: {
      targetRate: distribute(hotel_e2e_serverCount, 1910),
      dist: 1
    },
    hotelSearch: {
      targetRate: distribute(hotel_e2e_serverCount, 3713),
      dist: 1
    },
    searchSimilar: {
      targetRate: distribute(hotel_e2e_serverCount, 2305),
      dist: 1
    },
    searchVoucher: {
      targetRate: distribute(hotel_e2e_serverCount, 1689),
      dist: 1
    },
    imageGallery: {
      targetRate: distribute(hotel_e2e_serverCount, 1573),
      dist: 1
    },
    loyaltyInfo: {
      targetRate: distribute(hotel_e2e_serverCount, 957),
      dist: 1
    },
    searchFilter: {
      targetRate: distribute(hotel_e2e_serverCount, 875),
      dist: 1
    },
    groupFilter: {
      targetRate: distribute(hotel_e2e_serverCount, 836),
      dist: 1
    },
    hotelInfo: {
      targetRate: distribute(hotel_e2e_serverCount, 5775),
      dist: 1
    },
    cheapestPerHotel: {
      targetRate: distribute(hotel_e2e_serverCount, 1205),
      dist: 1
    },
    cheapestPerLocation: {
      targetRate: distribute(hotel_e2e_serverCount, 781),
      dist: 1
    },
    autoCompletev2: {
      targetRate: distribute(hotel_e2e_serverCount, 1936),
      dist: 1
    },
    autoCompletev3: {
      targetRate: distribute(hotel_e2e_serverCount, 2563),
      dist: 1
    },
    getContentandModule: {
      targetRate: distribute(hotel_e2e_serverCount, 710),
      dist: 1
    },
    hotelLandingSearch: {
      targetRate: distribute(hotel_e2e_serverCount, 550),
      dist: 1
    },
    // login scenarios
    searchContentLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 4770),
      dist: 1
    },
    searchv2RoomLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 5400),
      dist: 1
    },
    roomFaq_postLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 1858),
      dist: 1
    },
    bookRoomLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 1561),
      dist: 1
    },
    hotelSearchLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 3037),
      dist: 1
    },
    searchSimilarLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 1885),
      dist: 1
    },
    searchVoucherLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 1381),
      dist: 1
    },
    imageGalleryLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 1287),
      dist: 1
    },
    loyaltyInfoLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 783),
      dist: 1
    },
    searchFilterLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 715),
      dist: 1
    },
    groupFilterLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 684),
      dist: 1
    },
    hotelInfoLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 4725),
      dist: 1
    },
    cheapestPerHotelLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 985),
      dist: 1
    },
    cheapestPerLocationLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 639),
      dist: 1
    },
    autoCompletev2Login: {
      targetRate: distribute(hotel_e2e_serverCount, 1584),
      dist: 1
    },
    autoCompletev3Login: {
      targetRate: distribute(hotel_e2e_serverCount, 2097),
      dist: 1
    },
    getContentandModuleLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 580),
      dist: 1
    },
    hotelLandingSearchLogin: {
      targetRate: distribute(hotel_e2e_serverCount, 450),
      dist: 1
    },
    checkv2Health: {
      targetRate: distribute(hotel_e2e_serverCount, 100),
      dist: 1
    },
    checkv3Health: {
      targetRate: distribute(hotel_e2e_serverCount, 100),
      dist: 1
    },
    checkHotelApiGatewayHealth: {
      targetRate: distribute(hotel_e2e_serverCount, 100),
      dist: 1
    },
    checkHaproxyHealth: {
      targetRate: distribute(hotel_e2e_serverCount, 100),
      dist: 1
    }
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
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      {
        duration: '15s',
        target: Math.round(config.groupServices[name].targetRate * 0.7)
      }, {
        duration: '5m',
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
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
      }, {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 1.8)
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