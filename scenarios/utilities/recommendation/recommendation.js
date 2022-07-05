import { distribute } from '@utils/index.js'

export { recommendation, recommendationOrderParam } from '@generator/recommendation/recommendation'

const serverCount = __ENV.SERVER_COUNT || 1
const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    recommendation: { targetRate: distribute(serverCount, 55000), dist: 1 },
    recommendationOrderParam: { targetRate: distribute(serverCount, 10000), dist: 1 }
  }
}

export const options = {
  scenarios: {}
}

const services = Object.keys(config.groupServices)

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
    const definedStages = {
      load: [
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
      ],
      spike1: [
        { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.1) }, // 10k
        { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.3) }, // 30k
        { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.3) }, // 30k
        { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.6) }, // 60k
        { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.6) }, // 60k
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate) }, // 100k
        { duration: '2m', target: 0 }
      ],
      spike2: [
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) }, // 10k
        { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.3) }, // 30k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) }, // 30k
        { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.6) }, // 60k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) }, // 60k
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate) }, // 100k
        { duration: '2m', target: 0 }
      ],
      mongoDown: [
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '15m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '2m', target: 0 }
      ],
      breakPoint: [
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.0) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.0) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.0) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.0) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.1) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.1) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
        { duration: '3m', target: 0 }
      ]
    }

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
      stages: definedStages[__ENV.STAGE || 'load']
    }
  }
}
