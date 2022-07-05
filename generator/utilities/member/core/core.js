import { group } from 'k6'
import { v2PasswordLevel, v2AuthLogin, v2AuthSocial, v2AuthRegister } from '@apis/utilities/member/core/core.js'
import { assertStatus, assertSuccess } from '@utils/index.js'

export const validateMemberCore = () => {
  v2passwordLevel();
  v2authLogin();
  v2authSocial();
  v2authRegister();
}



const v2passwordLevel = () => {
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
        name: 'v2PasswordLevel'
      }
    }
   
    const body = {
        fullName: 'James Doe', 
        password: 'Testing123!',
        phoneNumber: '0821293838292'
    }
  
    group('v2passwordLevel', () => {
      const hp = v2PasswordLevel(params, body)
      assertStatus(hp, 200, true, 'v2PasswordLevel')
      assertSuccess(hp, 'SUCCESS', true, 'v2PasswordLevel')
    })
  }
  
  const v2authLogin = () => {
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
        'Authorization': 'Bearer {ACCESS_TOKEN}',
      },
      tags: {
        name: 'v2AuthLogin'
      }
    }
   
    const body = {
        deviceIdentity:{
            appVersion: '3.1.0', 
            osVersion: '10.0.1',
            type: 'IOS',
            uniqueId: 'f3ddc94e-f2c5-433b-ab6d-bde112'
        },
        loginType: 'PASSWORD', 
        password: 'CobaTiket123',
        username: 'cobatiket@mailinator.com'
    }
  
    group('v2AuthLogin', () => {
      const hp = v2AuthLogin(params, body)
      assertStatus(hp, 200, true, 'v2AuthLogin')
      assertSuccess(hp, 'SUCCESS', true, 'v2AuthLogin')
    })
  }

  const v2authSocial = () => {
    const params = {
      headers: {
        accept: '*/*',
        'Accept-Language': 'id',
        'authority':'member-core-v2-be-svc.dev-platform-cluster.tiket.com',
        'origin':'https://member-core-v2-be-svc.dev-platform-cluster.tiket.com',
        'referer':'https://member-core-v2-be-svc.dev-platform-cluster.tiket.com/docs/swagger-ui.html',
        'sec-ch-ua':'"Chromium";v="92", " Not A;Brand";v="99", "Microsoft Edge";v="92"',
        'sec-ch-ua-mobile':'?0',
        'sec-fetch-dest':'empty',
        'sec-fetch-mode':'cors',
        'sec-fetch-site':'same-origin',
        'true-client-ip': '127.0.0.1',
        'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 Edg/92.0.902.73',
        'x-account-id': '0',
        'x-business-id': '0',
        'x-channel-id': 'DESKTOP',
        'x-currency': 'idr',
        'x-forwarded-for': '127.0.0.1',
        'x-identity': 'identity',
        'x-login-media': 'none',
        'x-request-id': '9813d59e-df9b-4713-965e-1814b1bd7be6',
        'x-reseller-id': '0',
        'x-service-id': 'gateway',
        'x-store-id': 'TIKETCOM',
        'x-username': 'GUEST',
      },
      tags: {
        name: 'v2AuthSocial'
      }
    }
   
    const body = {
        authSource:'GOOGLE',
        lang:'id',
        googleToken:'{GOOGLE-TOKEN}',
        originUrl:'/myaccount',
        fullName:'Achmad Fauzi',
        deviceIdentity:{
            osVersion: '14.6', 
            uniqueId: 'f5565469-5b14-4e47-a27b-a4da01',
            appVersion: '4.20.0',
            type: 'iPhone 6s Plus'
        },
        email: 'achmad.fauzi@tiket.com', 
        token: '5418e8792ffa66cb8c714587e900e5d5153a12f8',
        currency: 'IDR'
    }
  
    group('v2AuthSocial', () => {
      const hp = v2AuthSocial(params, body)
      assertStatus(hp, 200, true, 'v2AuthSocial')
      assertSuccess(hp, 'SUCCESS', true, 'v2AuthSocial')
    })
  }



  const v2authRegister = () => {
    const params = {
      headers: {
        accept: '*/*',
        'Accept-Language': 'id',
        'Authorization': 'Bearer {ACCESS_TOKEN}',
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
        deviceIdentity:{
            appVersion: '3.1.0', 
            osVersion: '10.0.1',
            type: 'IOS',
            uniqueId: 'asdfghj-1299jkejej-pojskn-28282j'
        },
        email: 'cobatiket2@mailinator.com', 
        fullName: 'Coba Tiket 2',
        fullPhoneNumber: '+6282192920201',
        otpToken: '7599', 
        otpTokenPhone: 7599,
        otpTrxId: '6166a1ccbcf4401151587e27', 
        otpTrxIdPhone: '6166a1ccbcf4401151587e27',
        password: 'CobaTiket123', 
        referrer: 'XFACTOR',
        registerSource: 'string', 
        skipOtp: false
    }
  
    group('v2AuthRegister', () => {
      const hp = v2AuthRegister(params, body)
      assertStatus(hp, 200, true, 'v2AuthRegister')
      assertSuccess(hp, 'SUCCESS', true, 'v2AuthRegister')
    })
  }