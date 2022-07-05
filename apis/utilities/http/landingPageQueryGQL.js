import { gqlPost } from "@utils"

export const gqlLandingPageQuery = (requestData, params) => {
  const body = [
    {
      "operationName": "landingPageQuery",
      "variables": {
        "referenceId": `${requestData.orderID}`,
        "orderHash": `${requestData.orderHash}`
      },
      "query": "query landingPageQuery($referenceId: Int!, $orderHash: String!, $listTixpoint: Boolean) {\n  paymentListV2(referenceId: $referenceId, orderHash: $orderHash, listTixpoint: $listTixpoint) {\n    data {\n      availablePayment {\n        link\n        message\n        paymentGroup\n        paymentTitle\n        paymentType\n        scoring\n        status\n        images\n        paymentLabel\n        __typename\n      }\n      payLater {\n        limit\n        __typename\n      }\n      allowTixpoint\n      paymentGroups\n      paymentGroupDetails {\n        key\n        desc\n        title\n        __typename\n      }\n      paymentExpired\n      sidebarPayment {\n        subTotal\n        grandTotal\n        convertedCurrency\n        convertedAmount\n        serviceCharge\n        uniqueCode\n        cashback\n        balanceAmount\n        cashbackTIX\n        orderDetail {\n          currency\n          orderName\n          orderNameDetail\n          referenceDetailId\n          productType\n          tixPoint\n          totalPrice\n          breakdownPrice {\n            key\n            value\n            valueString\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      coBrandingData {\n        logo\n        background\n        title\n        description\n        url\n        urlLabel\n        __typename\n      }\n      __typename\n    }\n    code\n    message\n    __typename\n  }\n  orderMs(orderId: $referenceId, orderHash: $orderHash)\n}\n"
    }
  ]

  return gqlPost("landingPageQuery", body, params)
}