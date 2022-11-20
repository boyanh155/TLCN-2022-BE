// Error
const ErrorResponse = require('../utils/ErrorResponse')
    //Main route
const authRoute = require('./authRoute')
const productRoute = require('./productRoute')
const userRoute = require('./userRoute')
const oauthRoute = require("./oauthRoute")

const orderRoute = require('./orderRoute')
const commentRoute = require('./commentRoute') <<
    << << << < Temporary merge branch 1
const cartRoute = require('./cartRoute')
    // const swaggerUI = require('swagger-ui-express')
    // const swaggerJsDoc = require('swagger-jsdoc')
    //
function route(app) {
    //Comment
    app.use('/api/comments', commentRoute)
        //Oder
    app.use('/api/orders', orderRoute)
        //PAYPAL_CLIENT_ID
    app.get('/api/config/paypal', (req, res) => {
        res.send(process.env.PAYPAL_CLIENT_ID)
    })
    app.use('/api/users', userRoute)
        // Auth
    app.use('/api/auth', authRoute)
        //product
    app.use('/api/products', productRoute)
        //cart
    app.use('/api/carts', cartRoute)
        // main
    app.use('/', (req, res, next) => {
            next(new ErrorResponse(`Page not found`, 404, null, 'Not found'))
        }) ===
        === ===
        const oauthRoute = require("./oauthRoute")
    const cartRoute = require("./cartRoute")


    function route(app) {
        //Comment
        app.use('/api/comments', commentRoute)
            //Oder
        app.use('/api/orders', orderRoute)
            //PAYPAL_CLIENT_ID
        app.get('/api/config/paypal', (req, res) => {
            res.send(process.env.PAYPAL_CLIENT_ID)
        })
        app.use('/api/users', userRoute)
            // Auth
        app.use('/api/auth', authRoute)
            // OAuth
        app.use('/api/oauth2', oauthRoute)

        //product
        app.use('/api/products', productRoute)

        //product
        app.use('/api/cart', cartRoute)

        // test
        app.use('/test', (req, res) => {
                res.json({ success: true, message: "Welcome nlh-ecom-system" })
            })
            // main
        app.use('/', (req, res, next) => {
                next(new ErrorResponse(`Page not found`, 404, null, 'Not found'))
            }) >>>
            >>> >>> Temporary merge branch 2
    }

    module.exports = route