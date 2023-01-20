const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const boardDB = mongoose.model('BoardDB', boardSchema)

module.exports = boardDB