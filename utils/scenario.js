export const listScenarios = {
  ramping: {
    tags: { mode: `${__ENV.MODE}` },
    executor: 'ramping-vus',
    startVUs: 0,
    stages: [
      { duration: `${(__ENV.DURATION) * 0.1}m`, target: `${__ENV.VUS}` },
      { duration: `${(__ENV.DURATION) * 0.8}m`, target: `${__ENV.VUS}` },
      { duration: `${(__ENV.DURATION) * 0.1}m`, target: 0 }
    ],
    gracefulRampDown: '0s'
  },
  smoke: {
    tags: { mode: 'smoke' },
    executor: 'shared-iterations',
    vus: `${__ENV.VUS}`,
    duration: `${__ENV.DURATION}`
  },
  verify: {
    tags: { mode: 'verify' },
    executor: 'shared-iterations',
    vus: 1
  }
}
