import { loginMobile, forgetPasswordMobile, forgetPassword, login } from "@apis/utilities/member/http/authFE.js"
import { myAccount, loyaltyProgram, notification, securitySettings, settings, smartPay, smartTraveler } from "@apis/utilities/member/http/myAccountFE.js"
import { assertStatus } from "@utils"
import { check, sleep } from "k6";
import { SharedArray } from "k6/data";

const members = new SharedArray("member data", () => { return JSON.parse(open('@data/data.json')).members; });

export const options = {
  scenarios: {
    homeFE: {
      tags: { mode: `${__ENV.MODE}` },
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: `${(__ENV.DURATION) * 0.1}m`, target: `${__ENV.VUS}` },
        { duration: `${(__ENV.DURATION) * 0.8}m`, target: `${__ENV.VUS}` },
        { duration: `${(__ENV.DURATION) * 0.1}m`, target: 0 }
      ],
      gracefulRampDown: '0s'
    }
  }
}

const sessionLoaded = (res, email, name) => {
  check(res, {
    [`${name} page has user session (logged in)`]: (r) => {
      const isLoggedIn = r.body.includes(email)
      if (!isLoggedIn) {
	      console.log(JSON.stringify(r.body))
      }
      return isLoggedIn
    }
  });
}

export default function() {
  const params = {
      cookies: {
        PHPSESSID: members[0].PHPSESSID,
        session_access_token: members[0].session_access_token,
        session_refresh_token: members[0].session_refresh_token
      },
      redirects: 0,
      timeout: "120s"
  }

  const loginRes = login()
  assertStatus(loginRes, 200, true, "login")

  const loginMobileRes = loginMobile()
  assertStatus(loginMobileRes, 200, true, "loginMobile")

  const forgetPasswordRes = forgetPassword()
  assertStatus(forgetPasswordRes, 200, true, "forgetPassword")

  const forgetPasswordMobileRes = forgetPasswordMobile()
  assertStatus(forgetPasswordMobileRes, 200, true, "forgetPasswordMobile")

  const myAccountRes = myAccount(params)
  assertStatus(myAccountRes, 200, true, "myAccount")
  sessionLoaded(myAccountRes, members[0].email, "myAccount")

  const smartTravelerRes = smartTraveler(params)
  assertStatus(smartTravelerRes, 200, true, "smartTraveler")
  sessionLoaded(smartTravelerRes, members[0].email, "smartTraveler")

  const smartPayRes = smartPay(params)
  assertStatus(smartPayRes, 200, true, "smartPay")
  sessionLoaded(smartPayRes, members[0].email, "smartPay")

  const settingsRes = settings(params)
  assertStatus(settingsRes, 200, true, "settings")
  sessionLoaded(settingsRes, members[0].email, "settings")

  const notificationRes = notification(params)
  assertStatus(notificationRes, 200, true, "notification")
  sessionLoaded(notificationRes, members[0].email, "notification")

  const loyaltyProgramRes = loyaltyProgram(params)
  assertStatus(loyaltyProgramRes, 200, true, "loyaltyProgram")
  sessionLoaded(loyaltyProgramRes, members[0].email, "loyaltyProgram")

  sleep(300)
}
