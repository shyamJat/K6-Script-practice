import { getSession, createSession, validateSession, refreshToken } from '@apis/utilities/member/session/session.js'
import { assertStatus, assertSuccess, parseCSV, randomList } from '@utils/index.js'


export const createAndValidateSession = () => {
  const session = createsession()
  let at = session.json().data.accessToken
  let rt = session.json().data.refreshToken
  getsession(at)
  getsession(at)
  for (let i = 1; i <= 9; i++) {
    validatesession(at)
   }
  refreshtoken(rt)
}

const getsession = (at) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${at}`,
      'X-Audience': 'tiket.com',
      'X-Channel-Id': 'DESKTOP',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'get-session'
    }
  }
  // group('getSession', () => {
  const res = getSession(params)
  assertStatus(res, 200, true, 'getSession')
  assertSuccess(res, 'SUCCESS', true, 'getSession')
  // })

}

const validatesession = (at) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${at}`,
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST'
    },
    tags: {
      name: 'validate-session'
    }
  }
  // group('validateSession', () => {
    const hp = validateSession(params)
    assertStatus(hp, 200, true, 'validateSession')
    assertSuccess(hp, 'SUCCESS', true, 'validateSession')
  // })

}

const createsession = () => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST',
    },
    tags: {
      name: 'create-session'
    }
  }
  /*From Ticket 
  Empty request body {} is intentional, since we are going to create new empty session here*/
  const body = {
  }

  // group('createSession', () => {
    const hp = createSession(params, body)
    assertStatus(hp, 200, true, 'createSession')
    assertSuccess(hp, 'SUCCESS', true, 'createSession')
  // })
  return hp
}

const refreshtoken = (rt) => {
  const params = {
    headers: {
      accept: '*/*',
      'Accept-Language': 'id',
      'Authorization': `Bearer ${rt}`,
      'True-Client-Ip': '127.0.0.1',
      'X-Account-Id': '0',
      'X-Audience': 'tiket.com/rt',
      'X-Business-Id': '0',
      'X-Channel-Id': 'DESKTOP',
      'X-Currency': 'idr',
      'X-Forwarded-For': '127.0.0.1',
      'X-Identity': 'identity',
      'X-Login-Media': 'none',
      'X-Request-Id': 'f5ec847c-51ff-464b-af96-9f21347a9002',
      'X-Reseller-Id': '0',
      'X-Service-Id': 'gateway',
      'X-Store-Id': 'TIKETCOM',
      'X-Username': 'GUEST',
    },
    tags: {
      name: 'refresh-token'
    }
  }
  // -d "\"{REFRESH_TOKEN}\""
  const body = {};

  // group('refreshToken', () => {
  const hp = refreshToken(params, body)
    assertStatus(hp, 200, true, 'refreshToken')
    assertSuccess(hp, 'SUCCESS', true, 'refreshToken')
  // })
}
