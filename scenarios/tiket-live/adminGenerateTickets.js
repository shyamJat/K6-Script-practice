import { gqlAdminGenerateTickets } from "@apis/tiket-live/http/adminGenerateTicketsGQL"
import { assertStatus } from "@utils";
import { check} from 'k6'

export default function() {
  const adminToken = __ENV.TIKET_LIVE_ADMIN_TOKEN
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Admin-Token': adminToken
    }
  }
  const data = { 
    eventHash: '2a0f2bd8-6a43-42b6-a12b-10d987962a73', // kakak beradik event hash
    viewerLinks: 2
 }
  const res = gqlAdminGenerateTickets(data, params)

  assertStatus(res, 200, true)
  check(res, {
    'valid viewerLinks count': (r) => {
      const response = r.json('data.adminGenerateTickets')
      return response && (response.tickets.viewerTickets.length == data.viewerLinks)
    }
  });
}