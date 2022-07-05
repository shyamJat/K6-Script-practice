/* global __ENV */
import { gqlPost } from "@utils"

export const gqlPaymentSubmitMutation = (requestData, params) => {
  const body = [
    {
      "operationName": "paymentSubmitMutation",
      "variables": {
        "orderHash": requestData.orderHash,
        "referenceId": requestData.orderID,
        "paymentKey": requestData.paymentKey,
        "paymentData": "{}"
      },
      "query": "mutation paymentSubmitMutation($referenceId: Int!, $orderHash: String!, $paymentKey: String!, $paymentData: String!) {\n  paymentSubmit(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey, paymentData: $paymentData)\n}\n"
    }
  ]

  return gqlPost("paymentSubmitMutation", body, params)
}

export const gqlPaymentConfirmQuery = (requestData, params) => {
  const body = [
    {
      "operationName": "paymentConfirmQuery",
      "variables": {
        "referenceId": requestData.orderID,
        "orderHash": requestData.orderHash,
        "paymentKey": requestData.paymentKey,
        "paymentType": requestData.paymentType
      },
      "query": "query paymentConfirmQuery($referenceId: Int!, $orderHash: String!, $paymentKey: String!) {\n  paymentConfirm(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey) {\n    data {\n      paymentConfirmImages\n      bankTransfer {\n        accountBank\n        accountName\n        accountNumber\n        __typename\n      }\n      customAccount\n      paymentExpired\n      paymentSource\n      sidebarPayment {\n        subTotal\n        grandTotal\n        convertedCurrency\n        convertedAmount\n        serviceCharge\n        uniqueCode\n        cashback\n        balanceAmount\n        cashbackTIX\n        orderDetail {\n          currency\n          orderName\n          orderNameDetail\n          referenceDetailId\n          productType\n          tixPoint\n          totalPrice\n          breakdownPrice {\n            key\n            value\n            valueString\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      gopayUrl\n      confirmPaymentUrl\n      tokenExpired\n      __typename\n    }\n    code\n    message\n    serverTime\n    __typename\n  }\n  orderMs(orderId: $referenceId, orderHash: $orderHash)\n}\n"
    }
  ]

  return gqlPost("paymentConfirmQuery", body, params)
}

export const gqlHowToPay = (requestData, params) => {
  const body = [

    {
      "operationName": "howToPay",
      "variables": {
        "paymentMethod": requestData.paymentMethod,
        "customAccount": requestData.vaNumber,
        "referenceId": requestData.orderID
      },
      "query": "mutation howToPay($paymentMethod: String, $customAccount: String, $referenceId: String) {\n  howToPay(paymentMethod: $paymentMethod, customAccount: $customAccount, referenceId: $referenceId) {\n    content {\n      expandCollapse\n      title\n      steps\n      __typename\n    }\n    __typename\n  }\n}\n"
    },

    {
      "operationName": "rescheduleCashback",
      "variables": {
        "rescheduleOrderId": requestData.orderID,
        "rescheduleOrderHash": requestData.orderHash
      },
      "query": "query rescheduleCashback($rescheduleOrderId: Int!, $rescheduleOrderHash: String!) {\n  rescheduleCashback(rescheduleOrderId: $rescheduleOrderId, rescheduleOrderHash: $rescheduleOrderHash) {\n    code\n    message\n    errors\n    data {\n      bankTransfer\n      bankTransferFee\n      breakdownOldPrice {\n        additional\n        name\n        price\n        __typename\n      }\n      breakdownPrice {\n        additional\n        name\n        price\n        __typename\n      }\n      cardHolderName\n      cardNumber\n      cardType\n      cashback\n      cashbackTix\n      cashbackTixWorth\n      ccFee\n      creditcard\n      finalRescheduleCashback\n      kredivo\n      kredivoFee\n      total\n      totalBankTransfer\n      totalCc\n      totalKredivo\n      __typename\n    }\n    __typename\n  }\n}\n"
    }
  ]


  return gqlPost("howToPay", body, params)
}