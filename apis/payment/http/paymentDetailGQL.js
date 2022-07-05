/* global __ENV */

import { gqlPost } from "@utils"

export const gqlPaymentDetailQuery = (requestData, params) => {
  const body = [
    {
      "operationName": "paymentDetailQuery",
      "variables": {
        "referenceId": requestData.orderID,
        "orderHash": requestData.orderHash,
        "paymentKey": requestData.paymentKey
      },
      "query": "query paymentDetailQuery($referenceId: Int!, $orderHash: String!, $paymentKey: String!, $cardNumber: String) {\n  paymentDetail(referenceId: $referenceId, orderHash: $orderHash, paymentKey: $paymentKey, cardNumber: $cardNumber) {\n    data {\n      creditCardTokenization {\n        token {\n          cardHolderExpiredMonth\n          cardHolderExpiredYear\n          cardHolderName\n          cardHolderNumber\n          cardHolderType\n          coBranding\n          paymentToken\n          __typename\n        }\n        __typename\n      }\n      installmentDetails {\n        currency\n        grandTotal\n        installmentMonth\n        payMonthly\n        text\n        charge\n        id\n        enable\n        note\n        __typename\n      }\n      paymentDetailImages\n      paymentExpired\n      paymentMessage {\n        idID\n        enUS\n        __typename\n      }\n      tokenizedKredivo\n      recentKlikBCAId\n      sidebarPayment {\n        subTotal\n        grandTotal\n        convertedCurrency\n        convertedAmount\n        serviceCharge\n        uniqueCode\n        cashback\n        balanceAmount\n        cashbackTIX\n        orderDetail {\n          currency\n          orderName\n          orderNameDetail\n          referenceDetailId\n          productType\n          tixPoint\n          totalPrice\n          breakdownPrice {\n            key\n            value\n            valueString\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      oneKlikCards {\n        maxCard\n        cards {\n          xcoid\n          credentialNumber\n          maxLimit\n          __typename\n        }\n        __typename\n      }\n      checkAvailabilityDiscount {\n        code\n        message\n        data\n        __typename\n      }\n      __typename\n    }\n    code\n    message\n    serverTime\n    __typename\n  }\n  orderMs(orderId: $referenceId, orderHash: $orderHash)\n}\n"
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

  return gqlPost("paymentDetailQuery", body, params)
}

export const gqlPaymentDetailList = (requestData, params) => {
  const body = [
    {
      "operationName": "PaymentDetailList",
      "variables": {
        "orderId": requestData.orderID,
        "orderHash": requestData.orderHash
      },
      "query": "query PaymentDetailList($orderId: ID, $orderHash: String) {\n  paymentDetailList(orderId: $orderId, orderHash: $orderHash) {\n    code\n    message\n    errors\n    data {\n      totalPrice\n      totalCashbackIDR\n      totalCashbackTIXPoint\n      totalCurrency\n      paymentSegments {\n        segmentTitle\n        segmentKey\n        paymentLists {\n          paymentTitle\n          paymentGroups {\n            paymentTitle\n            paymentGroupDetails {\n              title\n              qty\n              currency\n              price\n              information\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      localCurrencyInfo\n      __typename\n    }\n    serverTime\n    __typename\n  }\n}\n"
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

  return gqlPost("PaymentDetailList", body, params)
}
