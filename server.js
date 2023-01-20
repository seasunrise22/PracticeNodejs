const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./server/database/connection')
const bodyparser = require('body-parser')

const app = express()

dotenv.config({
    path: 'config.env'
})
const PORT = process.env.PORT || 8080

// mongodb connection
connectDB()

app.use(bodyparser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))

app.use('/', require('./server/routes/router'))
app.use((req, res, next) => {
    res.status(404).send('Not Found')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})