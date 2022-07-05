/* global __ENV */

import { group } from 'k6'
import { randomCSV } from '../utils/index.js'

const randRoutes = randomCSV('routes', '../data/test.csv')
const origin = randRoutes[0]
const destination = randRoutes[1]

export default function () {
	// trigger the test by groups sequentialy
	group('test', () => {
		console.log(origin);
		console.log(destination);
	})
}
