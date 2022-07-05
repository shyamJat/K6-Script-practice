export { heroBanner } from '@generator/home/heroBanner'
export { homeModules } from '@generator/home/homeModules'
export { homeVerticals } from '@generator/home/homeVerticals'
export { generalConfig } from '@generator/home/generalConfig'
export { logo } from '@generator/home/logo'
export { userFooter } from '@generator/home/userFooter'
export { userVertical } from '@generator/home/userVertical'
export { homePageLogin, homePageNonLogin } from '@generator/home/homePages'

function distribute (percentage, value) {
  return Math.round(percentage / 100 * value)
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    generalConfig: { targetRate: 25000, dist: 1 },
    homePageNonLogin: { targetRate: 13750, dist: 1 },
    homePageLogin: { targetRate: 11250, dist: 1 },
    homeModules: { targetRate: 1818, dist: 1 },
    heroBanner: { targetRate: 1295, dist: 1 },
    homeVerticals: { targetRate: 1325, dist: 1 },
    logo: { targetRate: 6078, dist: 1 },
    userFooter: { targetRate: 4600, dist: 1 },
    userVertical: { targetRate: 4475, dist: 1 }
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
      tags: { mode: 'verify' },
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1
    }
  } else {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS * config.groupServices[name].dist,
      
      // spike 1
      // stages: [
      //   { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.1) }, // 10k
      //   { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.3) }, // 30k
      //   { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.3)}, // 30k
      //   { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.6)}, // 60k
      //   { duration: '5m', target: Math.round(config.groupServices[name].targetRate * 0.6)}, // 60k
      //   { duration: '10m', target: Math.round(config.groupServices[name].targetRate) }, // 100k
      //   { duration: '2m', target: 0 }
      // ]

      // spike 2
      // stages: [
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) }, // 10k
      //   { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.3) }, // 30k
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3)}, // 30k
      //   { duration: '10s', target: Math.round(config.groupServices[name].targetRate * 0.6)}, // 60k
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6)}, // 60k
      //   { duration: '10m', target: Math.round(config.groupServices[name].targetRate) }, // 100k
      //   { duration: '2m', target: 0 }
      // ]

      // Mongo & Redis Down
      stages: [
        { duration: '10m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '15m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '2m', target: 0 }
      ]
    }
  }
}
