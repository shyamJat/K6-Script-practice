
import { assertStatus, assertSuccess, parseCSV } from '@utils/index.js'
// import csv from 'k6/x/csv'; //FIXME:
import { cartTodo } from '@apis/payment/core/paymentOrderId'

const host = 'https://lb1-ms.tiket.com'
// const emailData = parseCSV('emails', 'data/email.csv')  //FIXME:

export const createOrders = (email) => {
  var num = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  const amount = Math.floor(Math.random() * (500000 - 15000 + 1) + 15000)
  // var email = emailData[Math.floor(Math.random() * emailData.length)][0]  //FIXME:
  const data = addCartTodo(num, email, amount) //'testing@tiket.com'
  return data
}

const addCartTodo = (num, email, amt) => {
  const params = {
    headers: {
      storeId: 'TIKETCOM',
      channelId: 'ANDROID',
      requestId: `requestId_cartTodo_${__VU}_${__ITER}_${num}`,
      serviceId: 'GATEWAY',
      username: email,
      tixToken: '959c39ee109040e4d5b420679c747084d26cf361',
      lang: 'id'
    },
    tags: {
      name: ''
    },
    timeout: '3m'
  }

  const body = {
    orderCart: {
      isTbox: false,
      productType: 'EVENT',
      accountID: 0,
      orderHash: '',
      totalCustomerPrice: amt,
      customerCurrency: 'IDR',
      orderCS: 0,
      resellerID: '0',
      resellerType: 'todo',
      fromEmail: email,
      mobilePhone: '81281337228',
      ipUser: '',
      ipPrivate: '',
      userLang: 'ID',
      createdTimestamp: '',
      orderContact: {
        firstName: 'Adi',
        lastName: 'Wibowo',
        phoneNumber: '81281337228',
        salutation: 'MR',
        countryCode: '+62',
        emailAddress: email
      },
      isZeroPayment: null,
      orderId: null
    },
    orderCartDetail: [
      {
        orderType: 'EVENT',
        orderName: 'Appositus conforto ater voluptatem soluta viscus.',
        orderNameDetail: 'Automation Paket Uji Coba 1',
        orderMasterID: '0',
        orderExpiredDateTime: '2022-12-30 23:00:00',
        customerPrice: amt,
        sellingPrice: amt,
        sellingCurrency: 'IDR',
        customerCurrency: 'IDR',
        serviceRate: 0,
        serviceFix: 0,
        currencyExchangeRate: 1,
        commision: 100,
        ref: 'DESKTOP',
        resellerID: '0',
        orderEventConnectMs: {
          cartId: '6130ab58b702542135ce9307',
          attendDate: '2022-09-11',
          includeIntoSalesReport: 1,
          orderFrom: 'ONLINE',
          detailEventConnectMs: {
            businessId: '6130ab4cd1ef6a669f6e421b',
            tiketId: '1',
            businessPhotoPrimary: '',
            extSource: 'NATIVE',
            eventName: 'Appositus conforto ater voluptatem soluta viscus.',
            eventType: 'B',
            eventCategory: 'EVENT',
            ttdCategory: {
              code: 'ATTRACTION',
              translations: [
                {
                  lang: 'EN',
                  value: 'Attractions'
                },
                {
                  lang: 'ID',
                  value: 'Atraksi'
                }
              ]
            },
            tiketNameEn: 'Automation Package Testing 1',
            tiketNameLoc: 'Automation Paket Uji Coba 1',
            profileEventStart: '2022-09-01 17:00:00',
            profileEventEnd: '2022-09-10 17:00:00',
            tiketEventStart: '2022-09-11 00:00:00',
            tiketEventEnd: '2022-09-11 00:00:00',
            tiketStartSell: '2022-09-02 00:00:00',
            tiketEndSell: '2022-12-01 00:00:00',
            terms: null,
            redempProfile: null,
            currencyNetRate: 'IDR',
            voucherProvider: 'tiket.com',
            supplierId: '',
            supplierName: '',
            emailPurchaseTo: '',
            policyTicket: null,
            taxPercentInPrice: 0,
            tiketCommission: 100,
            feeInPrice: 0,
            tiketCurrency: 'IDR',
            tiketWithSeating: 'NO',
            businessAddress: null,
            cityName: 'GIANYAR',
            countryName: 'INDONESIA',
            businessLong: 106.815743,
            businessLat: -6.197251,
            queueVoucher: 0,
            location: {
              region: 'BALI',
              postalCode: null
            },
            timeslot: {
              startTime: '00:00',
              endTime: '00:00'
            }
          },
          priceTier: [
            {
              priceTierCode: 'ADULT',
              sellPrice: 2700,
              sellPriceNetto: 1350,
              totalSellPriceNetto: 1350,
              qty: 1
            },
            {
              priceTierCode: 'SENIOR',
              sellPrice: 2700,
              sellPriceNetto: 1350,
              totalSellPriceNetto: 1350,
              qty: 1
            }
          ],
          orderCartEvent: {
            tiketSeating: [],
            tiketAttendDate: '2022-09-11',
            tiketBoxId: 1,
            tiketSellStatus: 'regular',
            tiketCustName: 'Adi Wibowo',
            tiketNohp: '81281337228',
            tiketBirthDate: '1989-11-29',
            tiketCustId: 'Personal id',
            tiketGender: 'm',
            questionnaireAnswers: [
              [],
              []
            ],
            otherLevelTicketsInformations: [
              {
                priceTierInfo: ''
              },
              {
                priceTierInfo: ''
              }
            ]
          },
          orderCartEvents: null,
          isTiketFlexi: false,
          subcategories: [],
          isRefundable: true,
          reservationInHours: 0,
          otherLevelProductInformations: {
            contact: null,
            importantInformation: '',
            questionnaireAnswersPerBooking: [],
            questionnaireAnswersPerBookingMultiLang: [],
            whatsIncluded: [],
            instantPassType: null
          },
          ticketValidity: {
            type: 'VISIT_DATE',
            days: 0,
            expiryDate: null
          },
          redemptionExpiryDate: '2022-09-11 23:59:59',
          timezone: 'Asia/Jakarta',
          travellers: null,
          version: null
        },
        orderDiscounts: null,
        receiptReferenceId: '6130ab58b702542135ce9307',
        tiketPointVersion: 10
      }
    ],
    orderReceipt: {
      subtotal: amt,
      additional: [],
      deduction: [],
      detailBox: '*Komisi penjualan sudah termasuk PPN sebesar 10%',
      itemDetails: [
        {
          description: '<div style=\'\'>Appositus conforto ater voluptatem soluta viscus. Automation Paket Uji Coba 1</div><div style=\'font-size: 8px\'></div>',
          name: 'tiket ToDo',
          price: 'IDR 2,700',
          quantity: '1',
          priceType: 'BASE_PRICE',
          priceValue: 2700,
          receiptReferenceId: '6130ab58b702542135ce9307'
        },
        {
          description: '<div style=\'\'>Appositus conforto ater voluptatem soluta viscus. Automation Paket Uji Coba 1</div><div style=\'font-size: 8px\'></div>',
          name: 'tiket ToDo',
          price: 'IDR 2,700',
          quantity: '1',
          priceType: 'BASE_PRICE',
          priceValue: 2700,
          receiptReferenceId: '6130ab58b702542135ce9307'
        }
      ]
    }
  }

  const addCartTodo = cartTodo(host, body, params)
  assertStatus(addCartTodo, 200, true, 'cartTodo')
  assertSuccess(addCartTodo, 'SUCCESS', true, 'cartTodo')

  return addCartTodo
}