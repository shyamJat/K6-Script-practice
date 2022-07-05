import { gqlPost } from "@utils"

export const gqlAdminGenerateTickets = (requestData, params) => {
  const body = {
    "query": "mutation adminGenerateTickets($input: InputAdminGenerateTickets!) { adminGenerateTickets(input:$input) { tickets{viewerTickets{url}}}}",
    "variables": {
      "input": {
        "eventHash": requestData.eventHash,
        "hostLinks": 0,
        "viewerLinks": requestData.viewerLinks
      }
    }
  }

  return gqlPost("adminGenerateTickets", body, params)
}