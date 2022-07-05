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
  "hotelVoucherEngine": () => (/* reexport */ hotelVoucherEngine),
  "options": () => (/* binding */ options)
});

;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/hotel/http/voucherEngine.js

const getHotelVoucherEngine = (params, reqBody) => {
  params.tags.name = 'HotelVoucherEngine';
  params.headers['Content-Type'] = 'application/json';
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-hotel-voucher-engine/voucher`, JSON.stringify(reqBody), params);
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
;// CONCATENATED MODULE: ./generator/hotel/voucherEngine.js




const lang_array = ['ID', 'EN'];
const channelId_array = ['ANDROID', 'IOS'];
let loyalty_level = randomItem(["LV0", "LV1", "LV2", "LV3", "LV4"]);
const isVerified = randomItem(["true", "false"]);
const hotelVoucherEngine = () => {
  const channelId = randomItem(channelId_array);
  const lang = randomItem(lang_array);
  const username = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const identity = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const requestId = Math.floor(20000000 + Math.random() * 90000000);
  const accountId = Math.floor(1000 + Math.random() * 90000000);
  const resellerId = Math.floor(1000 + Math.random() * 9000);
  const businessId = Math.floor(1000 + Math.random() * 9000);
  const orderId = Math.floor(20000000 + Math.random() * 9000000000);
  const orderHash = Math.floor(1000 + Math.random() * 900000000000000000000000);
  const itineraryId = Math.floor(20000000 + Math.random() * 9000000);
  const guest = randomIntBetween(1, 10);
  const children = randomIntBetween(1, 10);
  const total = parseInt(guest + children);
  const phone_number = Math.floor(20000000 + Math.random() * 9000000000);
  const params = {
    headers: {
      accept: '*/*',
      'language': `${lang}`,
      'X-Store-Id': 'TIKETCOM' + randomIntBetween(1, 10),
      'X-Service-Id': 'GATEWAY',
      'X-Channel-Id': `${channelId}`,
      'X-Request-Id': `${requestId}`,
      'x-loyalty-level': `${loyalty_level}`,
      'X-Username': `${username}`,
      'X-Account-Id': `${accountId}`,
      'X-Reseller-Id': `${resellerId}`,
      'X-Identity': `${identity}`,
      'X-Business-Id': `${businessId}`,
      'X-Login-Media': 'GOOGLE',
      'Accept-Language': 'EN',
      'X-Forwarded-Host': '192.168.1.1',
      'true-client-ip': '192.168.1.1',
      'X-Currency': 'IDR'
    },
    tags: {
      name: ''
    }
  };
  let reqBody = {
    "templateData": {
      "orderId": `${orderId}`,
      "orderHash": `${orderHash}`,
      "status": "CONFIRMED",
      "canceledBy": null,
      "itineraryId": `${itineraryId}`,
      "startDate": "Sen, " + `${startdate}` + " " + `${getMonth}` + " 2022",
      "endDate": "Sen, " + `${getdays2}` + " " + `${getMonth}` + " 2022",
      "rooms": randomIntBetween(1, 5),
      "guest": guest,
      "children": children,
      "guestWording": "\u003cb\u003e1\u003c/b\u003e Tamu",
      "totalGuests": total,
      "hotelDetail": {
        "name": "Hotel Pandanaran " + username,
        "starRating": [randomIntBetween(1, 5), randomIntBetween(1, 5), randomIntBetween(1, 5), randomIntBetween(1, 5)],
        "address": username + " Jalan Pandanaran, No. 18, Semarang, Jawa Tengah",
        "phone": phone_number,
        "checkIn": randomIntBetween(1, 24) + ":" + randomIntBetween(0, 60),
        "checkOut": randomIntBetween(1, 24) + ":" + randomIntBetween(0, 60),
        "covidInfoSection": null,
        "cancellationPolicies": ["\u003cb\u003ePembatalan \u0026 reschedule gratis\u003c/b\u003e\u003cbr\u003eJika pengajuan dilakukan sebelum \u003cb\u003e09 Juni 2022 (23:59)\u003c/b\u003e.", "\u003cb\u003ePembatalan \u0026 reschedule dengan biaya\u003c/b\u003e\u003cbr\u003e- Jika pengajuan dilakukan setelah \u003cb\u003e10 Juni 2022 (00:00)\u003c/b\u003e, kamu akan dikenakan biaya IDR 50.001.\u003cbr\u003e- Jika pengajuan dilakukan setelah \u003cb\u003e12 Juni 2022 (23:59)\u003c/b\u003e, kamu akan dikenakan biaya IDR 100.001.", "\u003cb\u003eTidak bisa refund \u0026 reschedule\u003c/b\u003e\u003cbr\u003eJika kamu tidak datang saat check-in atau mengajukan pembatalan atau reschedule pada dan setelah tanggal check-in: \u003cb\u003e13 Juni 2022\u003c/b\u003e.", "Nominal dari penggunaan gift voucher atau promo tidak bisa di-refund.", "Biaya pembatalan mungkin berubah jika ada tambahan Fasilitas Ekstra, Perlindungan Ekstra, dll; atau perbedaan nilai tukar mata uang.", "Waktu di atas mengikuti zona waktu di akomodasi."],
        "checkInInstruction": username,
        "importantInformation": [],
        "roomDetail": {
          "roomName": "Deluxe Twin " + username + " the perfect room for living",
          "bedType": null,
          "mealPlan": "Paket Makan Lengkap (2 Pax) per kamar " + username,
          "total": randomIntBetween(100000, 500000),
          "priceDetail": [{
            "name": "Kamar " + username,
            "quantity": randomIntBetween(1, 5),
            "amount": randomIntBetween(100000, 50000)
          }, {
            "name": "Pajak dan biaya lainnya " + username,
            "quantity": randomIntBetween(1, 5),
            "amount": randomIntBetween(100000, 50000)
          }]
        },
        "facilities": "",
        "localCurrency": null,
        "halfStar": isVerified
      },
      "traveller": {
        "id": null,
        "title": "Tuan " + username,
        "firstName": "Ridhwan " + username,
        "lastName": "Ramadhany " + username,
        "email": username + "ridhwan.ramadhany@tiket.com",
        "phone": phone_number,
        "bedTypes": null,
        "smokingPreferences": null,
        "specialRequest": ""
      },
      "guests": ["Tuan Ridhwan Ramadhany" + username],
      "addOns": null,
      "supplier": "PT Global Tiket Network",
      "valueAdded": null,
      "loyaltyBenefit": null,
      "paymentType": "pay_now",
      "cancellationFee": "0.0",
      "recipients": [username + "ridhwan.ramadhany@tiket.com"],
      "supplierConfirmationIds": null,
      "shouldNotify": true,
      "language": "id",
      "b2bPartnerLogo": null,
      "b2bPartnerAddress": null,
      "payAtHotel": isVerified,
      "addOnsDetail": []
    },
    "templateId": "hotel-voucher-issued",
    "templateOwner": "HOTEL"
  };
  let l;
  (0,external_k6_namespaceObject.group)('hotelVoucherEngine', () => {
    l = getHotelVoucherEngine(params, reqBody);
    assertStatus(l, 200, true, 'hotelVoucherEngine');
    assertSuccess(l, 'SUCCESS', true, 'hotelVoucherEngine');
  });
  return l;
};

function voucherEngine_randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var issuance = voucherEngine_randomDate(new Date(4, 2022), new Date(4, 2022));
var dob = voucherEngine_randomDate(new Date(2000, 4, 22), new Date(2002, 4, 28));
var expiry = voucherEngine_randomDate(new Date(2024, 4, 22), new Date(2022, 4, 28));
var getdays1 = randomIntBetween(1, 30);
var getdays2 = randomIntBetween(1, 30);
let startdate;

if (getdays1 > getdays2) {
  startdate = getdays2;
} else {
  startdate = getdays1;
}

var getMonth = randomItem(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
;// CONCATENATED MODULE: ./scenarios/hotel/voucherEngine.js


function voucherEngine_distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    hotelVoucherEngine: {
      targetRate: voucherEngine_distribute(2 * __ENV.X_TARGET)
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
      preAllocatedVUs: 50,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [{
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '30m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.02) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.04) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.06) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.08) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.12) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.14) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.16) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.18) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.22) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.24) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.26) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.28) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.32) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.34) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.36) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.38) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.42) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.44) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.46) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.48) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.52) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.54) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.56) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.58) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.62) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.62) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.64) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.64) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.66) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.66) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.68) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.68) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.72) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.72) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.74) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.74) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.76) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.76) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.78) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.78) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.82) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.82) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.84) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.84) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.86) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.86) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.88) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.88) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.92) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.92) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.94) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.94) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.96) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.96) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.98) },
      // { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.98) },
      // { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1) },
      // { duration: '20m', target: Math.round(config.groupServices[name].targetRate * 1) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.72) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.74) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.76) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.78) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.82) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.84) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.86) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.88) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.92) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.94) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.96) },
      //     { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.98) },
      //     { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1) },
      //     { duration: '10m', target: Math.round(config.groupServices[name].targetRate * 1) },
      {
        duration: '3m',
        target: 0
      }] //      stages : [
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.01) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.01) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.02) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.02) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.022) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.022) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.024) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.024) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.026) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.026) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.028) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.028) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.03) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.03) },//150 rpm
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.031) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.031) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.032) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.032) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.033) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.033) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.034) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.034) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.035) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.035) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.036) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.036) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.037) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.037) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.038) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.038) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.039) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.039) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.04) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.04) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.041) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.041) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.042) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.042) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.043) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.043) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.044) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.044) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.045) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.045) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.046) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.046) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.047) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.047) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.048) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.048) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.049) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.049) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.05) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.05) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.051) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.051) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.052) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.052) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.053) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.053) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.054) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.054) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.055) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.055) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.056) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.056) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.057) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.057) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.058) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.058) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.059) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.059) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.06) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.06) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.061) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.061) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.062) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.062) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.063) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.063) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.064) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.064) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.065) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.065) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.066) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.066) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.067) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.067) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.068) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.068) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.069) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.069) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.07) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.07) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.071) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.071) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.072) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.072) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.073) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.073) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.074) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.074) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.075) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.075) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.076) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.076) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.077) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.077) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.078) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.078) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.079) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.079) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.08) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.08) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.081) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.081) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.082) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.082) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.083) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.083) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.084) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.084) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.085) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.085) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.086) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.086) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.087) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.087) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.088) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.088) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.089) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.089) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.09) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.09) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.091) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.091) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.092) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.092) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.093) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.093) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.094) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.094) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.095) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.095) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.096) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.096) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.097) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.097) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.098) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.098) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.099) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.099) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.01) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.01) },
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