import { gqlPost } from "@utils"

export const gqlPromoSuggestion = (requestData, params) => {
    const body = [{
        "operationName" : "getPromoSuggestion",
        "variables" : {
            "payload" : `{\
                \"orderId\" : \"${requestData.orderID}\",\
                \"totalAmount\" : ${requestData.totalAmount},\
                \"productType\" : \"${requestData.productType}\",\
                \"size\" : 100,\
                \"page\" : 0,\
                \"orderHash\" : \"${requestData.orderHash}\",\
                \"paymentKey\" : \"VA_BCA\"\
            }`
        },
        "query" : "mutation getPromoSuggestion($payload: String) {\n  getPromoSuggestion(payload: $payload) {\n    code\n    message\n    serverTime\n    data {\n      description\n      code\n      expiredDate\n      amount\n      position\n      source\n      __typename\n    }\n    __typename\n  }\n}\n"
    }]

    return gqlPost("getPromoSuggestion", body, params)
}