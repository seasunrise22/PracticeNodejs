const axios = require('axios')
const boardDB = require('../model/model')
const moment = require('moment')

exports.homeRoutes = (req, res) => {
    res.render('index')
}
exports.board = (req, res) => {
    var perPage = 4
    var page = req.params.page || 1

    // Make a get request to /api/post
    axios.get('http://localhost:3000/api/post')
        .then((response) => {
            boardDB
                .find({})
                .sort({
                    created: -1
                })
                .skip((perPage * page) - perPage)
                .limit(perPage)
                .exec(function (err, posts) {
                    boardDB.count().exec(function (err, count) {
                        if (err) return next(err)
                        res.render('board', {
                            perPage: perPage,
                            posts: posts,
                            current: page,
                            pages: Math.ceil(count / perPage),
                            moment: moment
                        })

                    })
                })
        })
        .catch(err => {
            res.send(err)
        })
}
exports.show_post = (req, res) => {
    res.render('show_post')
}
exports.add_post = (req, res) => {
    res.render('add_post')
}