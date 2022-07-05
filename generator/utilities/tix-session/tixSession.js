import { group } from 'k6'
import { getTixSession, tixSessionMonolith } from '@apis/utilities/tix-session/tixSession.js'
import { assertStatus, assertSuccess } from '@utils/index.js'

export const getTixsession = () => {
  const params = {
    headers: {
      accept: '*/*',
      'TIXSESSION': '93a73a5c-5d75-4e03-b7bd-ce09d29d81eb'
    },
    tags: {
      name: 'get-tix-session'
    }
  }
   group('getSession', () => {
  const res = getTixSession(params)
  assertStatus(res, 200, true, 'getTixSession')
  assertSuccess(res, 'SUCCESS', true, 'getTixSession')
   })

}


export const tixsessionMonolith = () => {
    const params = {
      headers: {
        Accept: 'application/json',
        'TIXSESSION': '5293f0c3-8f9a-4bb9-9e8e-179d7fe24ae6',
      },
      tags: {
        name: 'monolith-session'
      }
    }
    /*From Ticket 
    Empty request body {} is intentional, since we are going to create new empty session here*/
    const body = {
    }
  
     group('tixSessionMonolith', () => {
      const hp = tixSessionMonolith(params, body)
      assertStatus(hp, 200, true, 'tixSessionMonolith')
      assertSuccess(hp, 'SUCCESS', true, 'tixSessionMonolith')
     })
    return hp
  }
