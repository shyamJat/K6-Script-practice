import { gqlPost } from "@utils"

export const gqlApplyDiscountEngine = (requestData, params) => {
  const body = [{
    "query": "mutation applyDE($payload: String) {\n  discountEngineApply (payload:$payload) {\n    code\n    message\n    data {\n      discountCode\n      discountType\n      orderDetailId\n      totalDiscount\n    }\n  }\n}",
    "variables": {
      "payload": `{\
        \"orderId\":\"${requestData.orderID}\",\
        \"orderHash\":\"${requestData.orderHash}\",\
        \"discountCode\":\"PERFTEST\",\
        \"productType\":\"${requestData.orderType}\",\
        \"totalPrice\":${requestData.totalAmount},\
        \"currency\":\"IDR\",\
        \"paymentType\":\"${requestData.paymentType}\"
      \}`
    }
  }]

  return gqlPost("applyDE", body, params)
}

export const gqlUnapplyDiscountEngine = (requestData, params) => {
  const body = [{
    "query": "mutation unapplyDE($payload: String) {\
              \n  discountEngineUnapply(payload: $payload) {\
              \n    code\n    message\n    data \n\
            } \n}",
    "variables": {
      "payload": `{\
          \"orderId\":\"${requestData.orderId}\",\
          \"orderHash\":\"${requestData.orderHash}\",\
          \"discountCode\":\"PERFTEST\",\
          \"productType\":\"${requestData.orderType}\",\
          \"totalPrice\":${requestData.totalAmount},\
          \"currency\":\"IDR\",\
          \"orderDetailId\":\"${requestData.orderDetailID}\",\
          \"paymentType\":\"${requestData.paymentType}\"\
      \}`
    }
  }]

  return gqlPost("unapplyDE", body, params)
}