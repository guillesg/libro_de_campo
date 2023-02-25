const express = require('express')
const articleRoutes = require('./article.routes.js')

function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1', router)
    router.use('/articles', articleRoutes)
}

module.exports = routerApi