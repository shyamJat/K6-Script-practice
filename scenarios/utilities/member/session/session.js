import { distribute } from '@utils/index.js'

export { createAndValidateSession } from '@generator/utilities/member/session/session.js'
export { createAndValidateSessionLogin } from '@generator/utilities/member/session/loginMemberSession.js'

const serverCount = __ENV.SERVER_COUNT || 1
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    createAndValidateSession: { targetRate: distribute(serverCount, 12000), dist: 1 },
    createAndValidateSessionLogin: { targetRate: distribute(serverCount, 10000), dist: 1 },
    // getsession: { targetRate: distribute(serverCount, 28100), dist: 1 },
    // validatesession: { targetRate: distribute(serverCount, 197000), dist: 1 },
    // refreshtoken: { targetRate: distribute(serverCount, 5040), dist: 1 },
  }
}

export const options = {
  noCookiesReset: false,
  scenarios: {}
}

const services = Object.keys(config.groupServices)

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
  }
}

for (let i = 0; i < services.length; i++) {
  const name = services[i]
  if (config.scenario === 'verify') {
    options.scenarios[name] = {
      exec: name,
      tags: {
        mode: 'verify'
      },
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1
    }
  } else {
    var stages = []
    if (config.scenario === 'load' || config.scenario === 'endurance') {
      stages = [
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '20m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '3m', target: 0 }
      ]
    }
    else if ( config.scenario === 'capacity') {
      stages = [
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.01) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.01) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.02) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.02) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.03) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.03) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.04) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.04) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.05) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.05) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.06) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.06) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.07) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.07) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.08) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.08) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.09) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.09) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.12) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.12) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.14) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.14) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.16) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.16) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.18) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.18) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.22) },
        { duration: '20m', target: Math.round(config.groupServices[name].targetRate * 0.22) },
        { duration: '3m', target: 0 }
      ]
    }
     else if (config.scenario === 'spike1') {
      stages = [
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
        { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.3) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
        { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '3m', target: 0 }
      ]
    } else if (config.scenario === 'spike2') {
      stages = [
        { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
        { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.3) },
        { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
        { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '3m', target: 0 }
      ]
    }
    else if (config.scenario === 'mongoDown' || config.scenario === 'redisDown') {
      stages = [
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '15m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '3m', target: 0 }
      ]
    } else if (config.scenario === 'breakPoint') {
      stages = [
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.0) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.0) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.0) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.0) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.1) },
        { duration: '3m', target: Math.round(config.groupServices[name].targetRate * 2.1) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
        { duration: '3m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
        { duration: '3m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
        { duration: '3m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.5) },
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate * 2.5) },
        { duration: '3m', target: 0 }
      ]
    }
    executeStage(name, stages);
  }
}
