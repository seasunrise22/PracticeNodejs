const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

// route.get('/', services.homeRoutes)
route.get('/', services.board)
route.get('/board', services.board)
route.get('/show_post', services.show_post)
route.get('/add_post', services.add_post)

// API
route.post('/api/post', controller.create)
route.get('/api/post', controller.find)

module.exports = route