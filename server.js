const express = require('express')
const cors = require('cors')

const { routes } = require('./src/routes')

require('dotenv/config')
require('./src/database')

const PORT = process.env.SERVER_PORT || 3333

const app = express()

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(routes)

app.use((err, req, res, next) => {
    console.error(err)
    if(err) {

        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        })
    }
    return res.status(500).json('Erro interno de servidor')
}) 

app.listen(PORT, () => {
    console.log('Server ir running on port ' + PORT)
})