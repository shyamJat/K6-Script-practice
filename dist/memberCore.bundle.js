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
  "gettixMembersCoreRegisterCheck": () => (/* reexport */ gettixMembersCoreRegisterCheck),
  "gettixMembersCoreV2Account": () => (/* reexport */ gettixMembersCoreV2Account),
  "options": () => (/* binding */ options),
  "posttixMembersCoreRegisterB2C": () => (/* reexport */ posttixMembersCoreRegisterB2C),
  "posttixMembersCoreV2AuthRegister": () => (/* reexport */ posttixMembersCoreV2AuthRegister),
  "puttixMembersCoreAccountPhone": () => (/* reexport */ puttixMembersCoreAccountPhone),
  "puttixMembersCoreV2AccountV2Phone": () => (/* reexport */ puttixMembersCoreV2AccountV2Phone)
});

;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: ./apis/utilities/member/memberCore.js

const putTixMembersCoreV2AccountV2Phone = (params, body) => {
  const resp = http_default().put(`${__ENV.LB_HOST}/tix-member-core/v2/account/v2/phone`, JSON.stringify(body), params);
  return resp;
};
const putTixMembersCoreAccountPhone = (params, body) => {
  const resp = http_default().put(`${__ENV.LB_HOST}/tix-members-core/account/phone?includeInactive=false`, JSON.stringify(body), params);
  return resp;
};
const postTixMembersCoreRegisterB2C = (params, body) => {
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-members-core/register/B2C`, JSON.stringify(body), params);
  return resp;
};
const postTixMembersCoreV2AuthRegister = (params, body) => {
  const resp = http_default().post(`${__ENV.LB_HOST}/tix-member-core/v2/auth/register`, JSON.stringify(body), params);
  return resp;
};
const getTixMembersCoreRegisterCheck = (params, email) => {
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-members-core/register/check/${email}`, params);
  return resp;
};
const getTixMembersCoreV2Account = params => {
  const resp = http_default().get(`${__ENV.LB_HOST}/tix-member-core/v2/account`, params);
  return resp;
};
;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
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
;// CONCATENATED MODULE: external "https://jslib.k6.io/k6-utils/1.1.0/index.js"
const _1_1_0_index_js_namespaceObject = require("https://jslib.k6.io/k6-utils/1.1.0/index.js");;
;// CONCATENATED MODULE: ./generator/utilities/member/memberCore.js



const channelId_array = ['ANDROID', 'MOBILE', 'IOS', 'DESKTOP'];
const lang_array = ['id', 'en'];
const memberAccountB2C = parseCSV('memberAccountB2C', 'data/memberAccountB2C.csv');
const puttixMembersCoreV2AccountV2Phone = () => {
  //const phoneNumber=Math.floor(100000000 + Math.random() * 9000000000);
  const lang = randomItem(lang_array);
  const data = memberAccountB2C[Math.floor(Math.random() * memberAccountB2C.length)];
  const userName = data[1];
  const accountId = data[0];
  const phoneNumber = data[2];
  const channelId = randomItem(channelId_array);
  const jwtToken = Math.random().toString(36).substring(2, 22) + Math.random().toString(36).substring(2, 22); //const username = Math.random().toString(36).substring(2,7);
  //const requestId1=Math.floor(Math.random()*100000000);

  const params = {
    headers: {
      'accept': '*/*',
      'Accept-Language': lang,
      'Authorization': `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': 30165740,
      'X-Business-Id': 0,
      'X-Channel-Id': channelId,
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf_global_${__VU}_${__ITER}_${(0,_1_1_0_index_js_namespaceObject.uuidv4)()}`,
      'X-Reseller-Id': 0,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': userName
    },
    tags: {
      name: 'putTixMembersCoreV2AccountV2Phone'
    },
    timeout: '1m'
  };
  const body = {
    "phoneNumber": phoneNumber
  };
  const res = putTixMembersCoreV2AccountV2Phone(params, body);
  assertStatus(res, 200, true, 'putTixMembersCoreV2AccountV2Phone');
  assertSuccess(res, 'SUCCESS', true, 'putTixMembersCoreV2AccountV2Phone');
};
const puttixMembersCoreAccountPhone = () => {
  //const phoneNumber=Math.floor(100000000 + Math.random() * 9000000000);
  const lang = randomItem(lang_array);
  const data = memberAccountB2C[Math.floor(Math.random() * memberAccountB2C.length)];
  const userName = data[1];
  const accountId = data[0];
  const phoneNumber = data[2];
  const channelId = randomItem(channelId_array);
  const tixToken = Math.random().toString(36).substring(2, 22) + Math.random().toString(36).substring(2, 22); //const username = Math.random().toString(36).substring(2,7);
  //const requestId1=Math.floor(Math.random()*100000000);

  const params = {
    headers: {
      'accept': '*/*',
      'lang': lang,
      'Content-Type': 'application/json',
      'requestId': `perf_global_${__VU}_${__ITER}_${(0,_1_1_0_index_js_namespaceObject.uuidv4)()}`,
      'channelId': channelId,
      //'requestId': `perf_global_${__VU}_${__ITER}_${uuidv4()}`,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'putTixMembersCoreAccountPhone'
    },
    timeout: '1m'
  };
  const body = {
    "accountId": "30149009",
    "phoneNumber": phoneNumber,
    "tixToken": tixToken
  };
  const res = putTixMembersCoreAccountPhone(params, body);
  assertStatus(res, 200, true, 'putTixMembersCoreAccountPhone');
  assertSuccess(res, 'SUCCESS', true, 'putTixMembersCoreAccountPhone');
};
const posttixMembersCoreRegisterB2C = () => {
  const lang = randomItem(lang_array);
  const data = memberAccountB2C[Math.floor(Math.random() * memberAccountB2C.length)];
  const userName = data[1];
  const channelId = randomItem(channelId_array);
  const random = Math.random().toString(36).substring(2, 22) + Math.random().toString(36).substring(2, 22);
  const email = "pt-test-april-register-b2c" + random + "@mailinator.com";
  const uniqueId = Math.random().toString(36).substring(2, 22) + Math.random().toString(36).substring(2, 22);
  const appVersion = Math.random().toString(36).substring(2, 13);
  const osVersion = Math.random().toString(36).substring(2, 13);
  const firstName = Math.random().toString(36).substring(2, 11);
  const params = {
    headers: {
      'accept': '*/*',
      'lang': lang,
      'Content-Type': 'application/json',
      'requestId': `perf_member_core_${__VU}_${__ITER}_${(0,_1_1_0_index_js_namespaceObject.uuidv4)()}`,
      'channelId': channelId,
      //'requestId': `perf_global_${__VU}_${__ITER}_${uuidv4()}`,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': userName
    },
    tags: {
      name: 'postTixMembersCoreRegisterB2C'
    },
    timeout: '1m'
  };
  const body = {
    "autoRegister": 0,
    "autoVerified": false,
    "checkPasswordRank": true,
    "deviceIdentity": {
      "appVersion": appVersion,
      "osVersion": osVersion,
      "type": "string",
      "uniqueId": uniqueId
    },
    "email": email,
    "firstName": firstName,
    "guest": 0,
    "insertMonolith": false,
    "lastName": "Tiket",
    "password": "Tiket123",
    "registrationSource": "TIKET",
    "salutation": "MR",
    "sessionV3": false,
    "validateHash": true,
    "verifiedPhoneNumber": false
  };
  const res = postTixMembersCoreRegisterB2C(params, body);
  assertStatus(res, 200, true, 'postTixMembersCoreRegisterB2C');
  assertSuccess(res, 'SUCCESS', true, 'postTixMembersCoreRegisterB2C');
};
const posttixMembersCoreV2AuthRegister = () => {
  const lang = randomItem(lang_array);
  const data = memberAccountB2C[Math.floor(Math.random() * memberAccountB2C.length)];
  const userName = data[1];
  const accountId = data[0];
  const channelId = randomItem(channelId_array);
  const random = Math.random().toString(36).substring(2, 22) + Math.random().toString(36).substring(2, 22);
  const email = "pt-test-april-v2AuthRegister" + random + "@mailinator.com";
  const uniqueId = Math.random().toString(36).substring(2, 22) + Math.random().toString(36).substring(2, 22); //const username = Math.random().toString(36).substring(2,7);
  //const requestId1=Math.floor(Math.random()*100000000);

  const params = {
    headers: {
      'accept': '*/*',
      'Accept-Language': lang,
      'Content-Type': 'application/json',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': accountId,
      'X-Business-Id': 0,
      'X-Channel-Id': channelId,
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf_member_core_${__VU}_${__ITER}_${(0,_1_1_0_index_js_namespaceObject.uuidv4)()}`,
      'X-Reseller-Id': 0,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': userName
    },
    tags: {
      name: 'postTixMembersCoreV2AuthRegister'
    },
    timeout: '1m'
  };
  const body = {
    "createSession": false,
    "deviceIdentity": {
      "appVersion": "3.1.0",
      "osVersion": "10.0.1",
      "type": "IOS",
      "uniqueId": uniqueId
    },
    "email": email,
    "fullName": "Test Tiket",
    "password": "Tiket123",
    "skipOtp": true,
    "skipPasswordHistory": false
  };
  const res = postTixMembersCoreV2AuthRegister(params, body);
  assertStatus(res, 200, true, 'postTixMembersCoreV2AuthRegister');
  assertSuccess(res, 'SUCCESS', true, 'postTixMembersCoreV2AuthRegister');
};
const gettixMembersCoreRegisterCheck = () => {
  const data = memberAccountB2C[Math.floor(Math.random() * memberAccountB2C.length)];
  const email = data[1];
  const channelId = randomItem(channelId_array); //const accountId=data[0];
  // const requestId1=Math.floor(Math.random()*100000000);

  const params = {
    headers: {
      'accept': '*/*',
      'channelId': channelId,
      'checkB2BCorporate': false,
      'includeInactive': false,
      'lang': 'id',
      'memberType': 'B2C',
      'registeredAll': false,
      'requestId': `perf_member_core_${__VU}_${__ITER}_${(0,_1_1_0_index_js_namespaceObject.uuidv4)()}`,
      'serviceId': 'gateway',
      'storeId': 'TIKETCOM',
      'username': email,
      'validateSocial': false
    },
    tags: {
      name: 'getTixMembersCoreRegisterCheck'
    }
  };
  const res = getTixMembersCoreRegisterCheck(params, email);
  assertStatus(res, 200, true, 'getTixMembersCoreRegisterCheck');
  assertSuccess(res, 'SUCCESS', true, 'getTixMembersCoreRegisterCheck');
};
const gettixMembersCoreV2Account = () => {
  const data = memberAccountB2C[Math.floor(Math.random() * memberAccountB2C.length)];
  const userName = data[1];
  const accountId = data[0];
  const channelId = randomItem(channelId_array); //const requestId1=Math.floor(Math.random()*100000000);

  const params = {
    headers: {
      'accept': '*/*',
      'Accept-Language': 'id',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': accountId,
      'X-Business-Id': 0,
      'X-Channel-Id': channelId,
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': `perf_member_core_${__VU}_${__ITER}_${(0,_1_1_0_index_js_namespaceObject.uuidv4)()}`,
      'X-Reseller-Id': 0,
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': userName
    },
    tags: {
      name: 'getTixMembersCoreV2Account'
    }
  };
  const res = getTixMembersCoreV2Account(params);
  assertStatus(res, 200, true, 'getTixMembersCoreV2Account');
  assertSuccess(res, 'SUCCESS', true, 'getTixMembersCoreV2Account');
};
;// CONCATENATED MODULE: ./scenarios/utilities/member/memberCore.js


function memberCore_distribute(serverCount, value) {
  const percentage = 100 / serverCount;
  return Math.round(percentage / 100 * value);
}

const serverCount = __ENV.SERVER_COUNT || 1;
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    puttixMembersCoreV2AccountV2Phone: {
      targetRate: memberCore_distribute(serverCount, 1230),
      dist: 1
    },
    puttixMembersCoreAccountPhone: {
      targetRate: memberCore_distribute(serverCount, 1230),
      dist: 1
    },
    posttixMembersCoreRegisterB2C: {
      targetRate: memberCore_distribute(serverCount, 1230),
      dist: 1
    },
    posttixMembersCoreV2AuthRegister: {
      targetRate: memberCore_distribute(serverCount, 1230),
      dist: 1
    },
    gettixMembersCoreRegisterCheck: {
      targetRate: memberCore_distribute(serverCount, 620),
      dist: 1
    },
    gettixMembersCoreV2Account: {
      targetRate: memberCore_distribute(serverCount, 620),
      dist: 1
    }
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
      iterations: 10
    };
  } else {
    let stages = [];

    if (config.scenario === 'load' || config.scenario === 'spike') {
      stages = [{
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * .5)
      }, //5x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * .5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, //10x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, //15x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 1.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, //20x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, //25x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 2.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3)
      }, //30x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 3.5)
      }, //35x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 3.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 4)
      }, //40x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4)
      }, {
        duration: '3m',
        target: Math.round(config.groupServices[name].targetRate * 4.5)
      }, //45x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 4.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 5)
      }, //50x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 5.5)
      }, //55x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 5.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 6)
      }, //60x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 6)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 6.5)
      }, //65x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 6.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 7)
      }, //70x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 7)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 7.5)
      }, //75x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 7.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 8)
      }, //80x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 8)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 8.5)
      }, //85x
      {
        duration: '10m',
        target: Math.round(config.groupServices[name].targetRate * 8.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 9)
      }, //90x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 9)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 9.5)
      }, //95x
      {
        duration: '1m',
        target: Math.round(config.groupServices[name].targetRate * 9.5)
      }, {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 10)
      }, //100x
      {
        duration: '30m',
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