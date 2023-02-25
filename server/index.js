const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { connection } = require('./databases/connection')
const routerApi = require('./routes/index')

const app = express()
const port = 4000

app.use(cors('*'))
app.use(express.json())
app.use(morgan('dev'))

//ruta de prueba
routerApi(app)

//Server
app.listen(port, () => {
    console.log("Server running on port " + port)
})


connection();