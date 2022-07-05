import { getSessionLogin, createSessionLogin, validateSessionLogin, refreshTokenLogin } from '@apis/utilities/member/session/sessionLogin.js'
import { v2AuthLogin, v2AuthRegister } from '@apis/utilities/member/core/core.js'
import { assertStatus, assertSuccess } from '@utils/index.js'


export const createAndValidateSessionLogin = () => {
  //var num = Math.floor(Math.random() * 900000) + 100000;
  var num=Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const session1=v2authRegister(num)
  const session = createsessionLogin()
  let at = session.json().data.accessToken
  //let email = session1.json().data.accountUsername
  const session2 = v2authLogin(at,num)
  let at2 = session2.json().data.accessToken
  let rt2 = session2.json().data.refreshToken
  getsessionLogin(at2)
  getsessionLogin(at2)
  getsessionLogin(at2)
  getsessionLogin(at2)
  for (let i = 1; i <= 21; i++) {
    validatesessionLogin(at2)
  }
  const session3=refreshtokenLogin(rt2)
  let rt3 = session3.json().data.refreshToken
  refreshtokenLogin(rt3)
}

const getsessionLogin = (at) => {
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
  const res = getSessionLogin(params)
  assertStatus(res, 200, true, 'getSessionLogin')
  assertSuccess(res, 'SUCCESS', true, 'getSessionLogin')
  // })

}

const validatesessionLogin = (at) => {
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
  const hp = validateSessionLogin(params)
  assertStatus(hp, 200, true, 'validateSessionLogin')
  assertSuccess(hp, 'SUCCESS', true, 'validateSessionLogin')
  // })

}

const createsessionLogin = () => {
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
  const hp = createSessionLogin(params, body)
  assertStatus(hp, 200, true, 'createSessionLogin')
  assertSuccess(hp, 'SUCCESS', true, 'createSessionLogin')
  // })
  return hp
}

const refreshtokenLogin = (rt) => {
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
  const body = { }

  // group('refreshToken', () => {
  const hp = refreshTokenLogin(params, body)
  assertStatus(hp, 200, true, 'refreshTokenLogin')
  assertSuccess(hp, 'SUCCESS', true, 'refreshTokenLogin')
  // })
  return hp
}


const v2authRegister = (num) => {
    const params = {
      headers: {
        accept: '*/*',
        'Accept-Language': 'id',
        'True-Client-Ip': '127.0.0.1',
        'X-Account-Id': '0',
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
        name: 'v2AuthRegister'
      }
    }
   
    const body = {
        createSession:true,
        email: `khilery${num}@mailinator.com`, 
        fullName: `Coba Tiket 2`,
        fullPhoneNumber: ``,
        otpToken: '7599', 
        otpTokenPhone: 7599,
        otpTrxId: '6166a1ccbcf4401151587e27', 
        otpTrxIdPhone: '6166a1ccbcf4401151587e27',
        password: 'CobaTiket123', 
        referrer: 'XFACTOR',
        registerSource: 'string', 
        skipOtp: true
    }
  
    //group('v2AuthRegister', () => {
      const hp = v2AuthRegister(params, body)
      assertStatus(hp, 200, true, 'v2AuthRegister')
      assertSuccess(hp, 'SUCCESS', true, 'v2AuthRegister')
   // })
   return hp
}


const v2authLogin = (at,num) => {
    const params = {
      headers: {
        accept: '*/*',
        'Accept-Language': 'id',
        'True-Client-Ip': '127.0.0.1',
        'X-Account-Id': '0',
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
        'Authorization': `Bearer ${at}`,
      },
      tags: {
        name: 'v2AuthLogin'
      }
    }
   
    const body = {
        loginType: 'PASSWORD', 
        password: 'CobaTiket123',
      username: `khilery${num}@mailinator.com`
    }
  
    //group('v2AuthLogin', () => {
      const hp = v2AuthLogin(params, body)
      assertStatus(hp, 200, true, 'v2AuthLogin')
      assertSuccess(hp, 'SUCCESS', true, 'v2AuthLogin')
    //})
    return hp
  }
