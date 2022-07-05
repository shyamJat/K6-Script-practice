import {
  paymentListHome,
  gqlPaymentDetailList,
  gqlPaymentDetailQuery,
  gqlHowToPay,
  gqlPaymentConfirmQuery,
  gqlPaymentSubmitMutation,
  gqlApplyDiscountEngine,
  gqlUnapplyDiscountEngine
} from "@apis/payment/http";
import {
  gqlLandingPageQuery,
  gqlServerTimeQuery,
  gqlPromoSuggestion
} from "@apis/utilities/http";
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from "k6/data";
import { randomIntBetween, responseFailChecker } from "@utils";
import { group, check } from "k6";
import { assertStatus } from "@utils";

const orderData = new SharedArray("order", function () {
  return papaparse.parse(open('./data/order.csv'), { header: true }).data;
});

/* There's a rule in using VA in this scenario:
- BCA should be hit 50% of load
- BNI should be hit 30% of load
- Mandiri should be hit 10% of load
- BRI should be hit 10% of load.

Since k6 hasn't support stateful data yet, we use manual weighted array 
and call it sequentially through loop (10x).
*/
const virtualAccounts = [
  { paymentKey: "VA_BCA", paymentType: "va_bca" },
  { paymentKey: "VA_BCA", paymentType: "va_bca" },
  { paymentKey: "VA_BCA", paymentType: "va_bca" },
  { paymentKey: "VA_BCA", paymentType: "va_bca" },
  { paymentKey: "VA_BCA", paymentType: "va_bca" },
  { paymentKey: "VA_BNI", paymentType: "va_bni" },
  { paymentKey: "VA_BNI", paymentType: "va_bni" },
  { paymentKey: "VA_BNI", paymentType: "va_bni" },
  { paymentKey: "VA_MANDIRI", paymentType: "va_mandiri" },
  { paymentKey: "VA_BRI", paymentType: "va_bri" }
]

export default function () {
  const randomOrder = orderData[Math.floor(Math.random() * orderData.length)];
  const totalAmount = randomIntBetween(1, 9999999)
  const requestData = {
    orderID: randomOrder.orderId,
    orderHash: randomOrder.orderHash,
    productType: randomOrder.orderType,
    totalAmount
  }

  // payment.tiket.com FE
  const home = paymentListHome(randomOrder.orderId, randomOrder.orderHash)
  assertStatus(home, 200, true)

  group("gql", () => {
    virtualAccounts.forEach((va) => {
      /* since k6 uses goja as JS VM and goja is only 5.1 ES compliant,
      we cannot use spread operator. Current workaround using Object.assign
      */
      const data = Object.assign({}, requestData, {
        paymentKey: va.paymentKey,
        paymentType: va.paymentType
      })

      const serverTime = gqlServerTimeQuery()
      assertStatus(serverTime, 200, true)

      const landingPage = gqlLandingPageQuery(data)
      assertStatus(landingPage, 200, true)

      const paymentDetailList = gqlPaymentDetailList(data)
      assertStatus(paymentDetailList, 200, true)

      let paymentDetailQuery = gqlPaymentDetailQuery(data)
      assertStatus(paymentDetailQuery, 200, true)

      const promoSuggestion = gqlPromoSuggestion(data)
      assertStatus(promoSuggestion, 200, true)

      const applyDE = gqlApplyDiscountEngine(data)
      assertStatus(applyDE, 200, true)

      const paymentSubmitMutation = gqlPaymentSubmitMutation(data)
      assertStatus(paymentSubmitMutation, 200, true)

      const paymentConfirmQuery = gqlPaymentConfirmQuery(data)
      assertStatus(paymentConfirmQuery, 200, true)

      const vaNumber = paymentSubmitMutation.json("data/paymentSubmit/data/vaNumber")
      const dataHTP = Object.assign({}, data, vaNumber)
      const howToPay = gqlHowToPay(dataHTP)
      assertStatus(howToPay, 200, true)

      paymentDetailQuery = gqlPaymentDetailQuery(data)
      assertStatus(paymentDetailQuery, 200, true)

      const unapplyDE = gqlUnapplyDiscountEngine(data)
      assertStatus(unapplyDE, 200, true)
    })
  })
}
