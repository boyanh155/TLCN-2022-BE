const asyncHandler = require('express-async-handler')
const Product = require('../models/product/productModel')
const User = require('../models/user/User')
const Order = require('../models/order/orderModal')

class dashBoardControllers {
  getCards = asyncHandler(async (req, res) => {
    const countProducts = await Product.count({})
    const countOrders = await Order.count({})
    const sumTotalOrder = await Order.aggregate([
      {
        $group: {
          _id: { user: '' },
          sumTotalPrice: { $sum: '$totalPrice' },
        },
      },
    ])
    const countOrdersPending = await Order.count({
      isConfirm: false,
    })
    const result = [
      {
        icon: 'bx bx-shopping-bag',
        count: countProducts,
        title: 'Total sales',
      },
      {
        icon: 'bx bx-cart',
        count: countOrdersPending,
        title: 'New orders',
      },
      {
        icon: 'bx bx-dollar-circle',
        count: sumTotalOrder[0].sumTotalPrice,
        title: 'Total turnover',
      },
      {
        icon: 'bx bx-receipt',
        count: countOrders,
        title: 'Total orders',
      },
    ]
    res.json(result)
  })
  getTopUserOrder = asyncHandler(async (req, res) => {
    const topOrder = await Order.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $group: {
          _id: '$user',
          countOrder: { $sum: 1 },
          sumTotalPrice: { $sum: '$totalPrice' },
        },
      },
    ])
      .sort({ countOrder: -1 })
      .limit(5)
    res.json(topOrder)
  })
  getLastOrder = asyncHandler(async (req, res) => {
    const lastOrder = await Order.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
    ])
      .sort({ createdAt: -1 })
      .limit(5)
    res.json(lastOrder)
  })
}
module.exports = new dashBoardControllers()