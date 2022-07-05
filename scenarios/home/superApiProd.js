export { heroBanner } from '@generator/home/heroBanner'
export { homeModules } from '@generator/home/homeModules'
export { homeVerticals } from '@generator/home/homeVerticals'
export { generalConfig } from '@generator/home/generalConfig'
export { logo } from '@generator/home/logo'
export { userFooter } from '@generator/home/userFooter'
export { userVertical } from '@generator/home/userVertical'
export { homePageLogin, homePageNonLogin } from '@generator/home/homePageProd'

function distribute (serverCount, value) {
  const percentage = 100 / serverCount
  return Math.round(percentage / 100 * value)
}

const serverCount = 5

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    generalConfig: { targetRate: distribute(serverCount, 100000), dist: 1 },
    homePageNonLogin: { targetRate: distribute(serverCount, 55000), dist: 1 },
    homePageLogin: { targetRate: distribute(serverCount, 45000), dist: 1 },
    homeModules: { targetRate: distribute(serverCount, 7272), dist: 1 },
    heroBanner: { targetRate: distribute(serverCount, 5180), dist: 1 },
    homeVerticals: { targetRate: distribute(serverCount, 5300), dist: 1 },
    logo: { targetRate: distribute(serverCount, 24312), dist: 1 },
    userFooter: { targetRate: distribute(serverCount, 18400), dist: 1 },
    userVertical: { targetRate: distribute(serverCount, 17900), dist: 1 }
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

      // #7 #8: all test that target 100k RPM
      // stages: [
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.1) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.2) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.3) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.4) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
      //   { duration: '20m', target: Math.round(config.groupServices[name].targetRate) },
      //   { duration: '3m', target: 0 }
      // ]

      // #9: Endurance
      // stages: [
      //   { duration: '10m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //   { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
      //   { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
      //   { duration: '120m', target: Math.round(config.groupServices[name].targetRate) },
      //   { duration: '3m', target: 0 }
      // ]

      // #10: Break Point
      stages: [
        { duration: '8m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.7) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.1) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.3) }, // 130k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.3) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.4) }, // 140k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.5) }, // 150k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.5) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.6) }, // 160k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.7) }, // 170k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.7) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.8) }, // 180k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 1.9) }, // 190k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 1.9) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.0) }, // 200k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.0) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.1) }, // 210k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.1) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.2) }, // 220k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.3) }, // 230k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.3) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.4) }, // 240k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.5) }, // 250k
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.5) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.6) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.7) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.7) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.8) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 2.9) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 2.9) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.0) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.0) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.1) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.1) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.2) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.2) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.3) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.3) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.4) },
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 3.4) },
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 3.5) },
        { duration: '20m', target: Math.round(config.groupServices[name].targetRate * 3.5) }, // 300k
        { duration: '3m', target: 0 }
      ]
    }
  }
}
