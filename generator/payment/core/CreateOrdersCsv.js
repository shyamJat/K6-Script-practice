import { group } from 'k6'
import { createOrders } from '@generator/payment/core/paymentOrderId'
import {  parseCSV, } from '@utils/index.js'
import csv from 'k6/x/csv';

var userData = parseCSV('emails', 'data/email.csv')

export const createOrdersCsv = () => {
  var row = Math.floor(Math.random() * userData.length)
  var email = userData[row][0]
  group('CreateOrderCsv', () => {
  var data = createOrders(email)
  const orderID = data.json().data.orderId
  const orderHash = data.json().data.orderHash
  const totalCustomerPrice = data.json().data.totalCustomerPrice
  const itemId = data.json().data.orderCartDetails[0].itemId
  const itemType = data.json().data.orderCartDetails[0].itemType
  //console.log(orderID, orderHash, totalCustomerPrice, email, itemId, itemType);
  csv.append('./data/orders.csv', [orderID, orderHash, totalCustomerPrice, email, itemId, itemType])
  })
}