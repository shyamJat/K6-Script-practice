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
  "metaSearch": () => (/* reexport */ metaSearch),
  "options": () => (/* binding */ options),
  "search": () => (/* reexport */ search)
});

;// CONCATENATED MODULE: external "k6/http"
const http_namespaceObject = require("k6/http");;
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// CONCATENATED MODULE: external "k6"
const external_k6_namespaceObject = require("k6");;
;// CONCATENATED MODULE: external "k6/data"
const data_namespaceObject = require("k6/data");;
;// CONCATENATED MODULE: external "https://jslib.k6.io/papaparse/5.1.1/index.js"
const index_js_namespaceObject = require("https://jslib.k6.io/papaparse/5.1.1/index.js");;
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_namespaceObject);
;// CONCATENATED MODULE: external "https://jslib.k6.io/k6-utils/1.1.0/index.js"
const _1_1_0_index_js_namespaceObject = require("https://jslib.k6.io/k6-utils/1.1.0/index.js");;
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
const assertStatus = (res = null, status = 200, verbose = false, name) => {
  const pass = check(res, {
    [`${name} status is ${status}`]: r => {
      // Will be printed only if verbose = true
      if (r.status != status && verbose) {
        console.log("assertStatus NOT PASSED", JSON.stringify(res));
      }

      return r.status === status;
    }
  });
  return pass;
};
const assertWithFail = ({
  res = null,
  status = 200,
  verbose = false,
  name
}) => {
  const pass = assertStatus(res, status, verbose, name);

  if (!pass) {
    console.log("assertWithFail NOT PASSED", JSON.stringify(res));
    fail(`FAIL: ${JSON.stringify(res)}`);
  }
}; // TODO: change params to object params

const assertSuccess = (res, code, verbose, name) => {
  check(res, {
    [`${name} status is ${code}`]: r => {
      // Will be printed only if verbose = true
      if (r.json('code') != code && verbose) {
        console.log("assertSuccess NOT PASSED", JSON.stringify(res));
      }

      return r.json('code') === code;
    }
  });
};
const randomList = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};
const queryParams = obj => {
  return Object.keys(obj).map(k => `${k}=${encodeURIComponent(obj[k])}`).join('&');
};
;// CONCATENATED MODULE: ./generator/hotel/b2bSearch.js
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */






const randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const csvData = new data_namespaceObject.SharedArray('hotelCode', function () {
  // Load CSV file and parse it using Papa Parse
  return index_js_default().parse(open('./data/hotelCode.csv'), {
    header: false
  }).data;
});
const hotelCode = csvData[Math.floor(Math.random() * csvData.length)];
const search = () => {
  const start = new Date();
  const end = new Date(2021, 12, 1);
  const tmpStartDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const startDate = tmpStartDate.toISOString().slice(0, 10);
  const tmpDate = tmpStartDate;
  const days = randomIntBetween(1, 10);
  const endDate = new Date(tmpDate.setDate(tmpDate.getDate() + days)).toISOString().slice(0, 10);
  const params = {
    headers: {
      'Content-Type': 'text/xml',
      channelId: 'DESKTOP',
      requestId: `hotelB2bSearch_${__VU}_${__ITER}_${randomUUID}`,
      serviceId: 'gateway',
      username: 'guest',
      lang: 'id',
      currency: 'IDR',
      storeId: 'TIKETB2B',
      resellerId: '27860381'
    },
    tags: {
      name: 'hotelB2bSearch'
    }
  };
  const soapReqBody = `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.opentravel.org/OTA/2003/05">
        <soap:Header/>
        <soap:Body>
            <OTA_HotelAvailRQ EchoToken="String" TimeStamp="2021-11-08T07:31:14.735Z" PrimaryLangID="en-us" xmlns="http://www.opentravel.org/OTA/2003/05">
                <POS>
                    <Source>
                        <RequestorID ID="bI5IwURk10" MessagePassword="TEwDzL87cdTXSbwiV0Txon0WAf6Wa1ZC" Type="5">
                            <CompanyName Code="C" CodeContext="600"></CompanyName>
                        </RequestorID>
                    </Source>
                </POS>
                <AvailRequestSegments>
                    <AvailRequestSegment>
                        <HotelSearchCriteria>
                            <Criterion>
                                <HotelRef HotelCode="${hotelCode[0]}"/>
                                <StayDateRange End="${endDate}" Start="${startDate}"/>
                                <RoomStayCandidates>
                                    <RoomStayCandidate Quantity="${randomIntBetween(1, 4)}">
                                        <GuestCounts>
                                            <GuestCount AgeQualifyingCode="10" Count="${randomIntBetween(1, 4)}"/>
                                        </GuestCounts>
                                    </RoomStayCandidate>
                                </RoomStayCandidates>
                            </Criterion>
                        </HotelSearchCriteria>
                    </AvailRequestSegment>
                </AvailRequestSegments>
            </OTA_HotelAvailRQ>
        </soap:Body>
    </soap:Envelope>`;
  const res = http_default().post(`${__ENV.LB_HOST}/b2b-gateway/tix-hotel-b2b-search-service/search`, soapReqBody, params);
  const assert = (0,external_k6_namespaceObject.check)(res, {
    'search status is 200': r => r.status === 200,
    'search success is present': r => r.body.indexOf('Success') !== -1,
    'search room is available': r => r.body.indexOf('RoomStays') !== -1
  });

  if (!assert) {
    console.log(JSON.stringify(res));
  }
};
;// CONCATENATED MODULE: ./generator/hotel/b2bMetaSearch.js
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */






const b2bMetaSearch_randomUUID = (0,_1_1_0_index_js_namespaceObject.uuidv4)();
const b2bMetaSearch_csvData = new data_namespaceObject.SharedArray('hotelCode', function () {
  // Load CSV file and parse it using Papa Parse
  return index_js_default().parse(open('./data/hotelCode.csv'), {
    header: false
  }).data;
});
const b2bMetaSearch_hotelCode = b2bMetaSearch_csvData[Math.floor(Math.random() * b2bMetaSearch_csvData.length)];
const metaSearch = () => {
  const start = new Date();
  const end = new Date(2021, 12, 1);
  const tmpStartDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const startDate = tmpStartDate.toISOString().slice(0, 10);
  const tmpDate = tmpStartDate;
  const days = randomIntBetween(1, 10);
  const endDate = new Date(tmpDate.setDate(tmpDate.getDate() + days)).toISOString().slice(0, 10);
  const params = {
    headers: {
      'Content-Type': 'text/xml',
      channelId: 'DESKTOP',
      requestId: `hotelB2bSearch_${__VU}_${__ITER}_${b2bMetaSearch_randomUUID}`,
      serviceId: 'gateway',
      username: 'guest',
      lang: 'id',
      currency: 'IDR',
      storeId: 'TIKETB2B',
      resellerId: '27860381'
    },
    tags: {
      name: 'hotelB2bMetaSearch'
    }
  };
  const soapReqBody = `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.opentravel.org/OTA/2003/05">
        <soap:Header/>
        <soap:Body>
            <OTA_HotelAvailRQ EchoToken="String" TimeStamp="2021-11-08T07:31:47.310Z" PrimaryLangID="en-us" xmlns="http://www.opentravel.org/OTA/2003/05">
                <POS>
                    <Source>
                        <RequestorID ID="bI5IwURk10" MessagePassword="TEwDzL87cdTXSbwiV0Txon0WAf6Wa1ZC" Type="5">
                            <CompanyName Code="C" CodeContext="600"></CompanyName>
                        </RequestorID>
                    </Source>
                </POS>
                <AvailRequestSegments>
                    <AvailRequestSegment>
                        <HotelSearchCriteria>
                            <Criterion>
                                <HotelRef HotelCode="${b2bMetaSearch_hotelCode[0]}"/>
                                <StayDateRange End="${endDate}" Start="${startDate}"/>
                                <RoomStayCandidates>
                                    <RoomStayCandidate Quantity="${randomIntBetween(1, 4)}">
                                        <GuestCounts>
                                            <GuestCount AgeQualifyingCode="10" Count="${randomIntBetween(1, 4)}"/>
                                        </GuestCounts>
                                    </RoomStayCandidate>
                                </RoomStayCandidates>
                            </Criterion>
                        </HotelSearchCriteria>
                    </AvailRequestSegment>
                </AvailRequestSegments>
            </OTA_HotelAvailRQ>
        </soap:Body>
    </soap:Envelope>`;
  const res = http_default().post(`${__ENV.LB_HOST}/b2b-gateway/tix-hotel-b2b-search-service/meta-search`, soapReqBody, params);
  const assert = (0,external_k6_namespaceObject.check)(res, {
    'metaSearch status is 200': r => r.status === 200,
    'metaSearch success is present': r => r.body.indexOf('Success') !== -1,
    'metaSearch room is available': r => r.body.indexOf('RoomStays') !== -1
  });

  if (!assert) {
    console.log(JSON.stringify(res));
  }
};
;// CONCATENATED MODULE: ./scenarios/hotel/b2b.js
/* eslint-disable eqeqeq */



function distribute(value) {
  return value / __ENV.SERVER_COUNT;
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    search: {
      targetRate: distribute(1 * __ENV.X_TARGET)
    },
    metaSearch: {
      targetRate: distribute(1 * __ENV.X_TARGET)
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
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, // 5k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.1)
      }, // 5k
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.15)
      }, // 7.5k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.15)
      }, // 7.5k
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, // 10k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.2)
      }, // 10k
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, // 15k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.3)
      }, // 15k
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, // 25k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.5)
      }, // 25k
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, // 40k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate * 0.8)
      }, // 40k
      {
        duration: '2m',
        target: Math.round(config.groupServices[name].targetRate)
      }, // 50k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate)
      }, // 50k
      {
        duration: '2m',
        target: 0
      }]
    };
  } else if (config.scenario == 'spike') {
    // Spike to 6000 (X_TARGET => 1) and 12k (X_TARGET => 2)
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [{
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, // 4k
      {
        duration: '6m',
        target: Math.round(config.groupServices[name].targetRate * 0.4)
      }, // 4k
      {
        duration: '10s',
        target: Math.round(config.groupServices[name].targetRate)
      }, // 10k
      {
        duration: '5m',
        target: Math.round(config.groupServices[name].targetRate)
      }, // 10k
      {
        duration: '2m',
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