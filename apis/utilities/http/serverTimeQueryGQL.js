import { gqlPost } from '@utils'

export const gqlServerTimeQuery = (params) => {
    const body = [{
        "operationName" : "serverTimeQuery",
        "variables" : {},
        "query" : "query serverTimeQuery {\n  serverTime\n}\n"
    }]

    return gqlPost("serverTimeQuery", body, params)
}